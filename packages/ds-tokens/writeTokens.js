import { readFile, writeFile, cp, mkdir, readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssFolder = path.join(__dirname, './build/css');
const v2Folder = path.join(__dirname, './v2');
const darkModePartial = path.join(__dirname, './tokens/globals/semantic/dark-mode.css');
const outputPath = path.join(__dirname, './index.js');
const exportFolder = path.resolve(__dirname, '../../public/themes/css'); // destino externo

// Appends dark-mode.css to each per-theme CSS file in build/css/theme*/
async function appendDarkMode() {
  let darkModeCss;
  try {
    darkModeCss = await readFile(darkModePartial, 'utf8');
  } catch (err) {
    console.error('❌ No se encontró dark-mode.css, omitiendo:', err.message);
    return;
  }

  const folders = await readdir(cssFolder);
  for (const folder of folders) {
    const folderPath = path.join(cssFolder, folder);
    const folderStat = await stat(folderPath);
    if (!folderStat.isDirectory()) continue;

    const files = await readdir(folderPath);
    for (const file of files) {
      if (!file.endsWith('.css')) continue;
      const filePath = path.join(folderPath, file);
      const existing = await readFile(filePath, 'utf8');
      if (existing.includes('--ds-color-surface')) continue; // already appended
      await writeFile(filePath, existing + '\n' + darkModeCss, 'utf8');
      console.log(`✅ Dark mode appended: ${folder}/${file}`);
    }
  }
}

// Copiar archivos .css desde build/css hacia themes/css
async function copyCssFiles(srcDir, destDir) {
  try {
    await mkdir(destDir, { recursive: true });
    const folders = await readdir(srcDir);

    for (const folder of folders) {
      const folderPath = path.join(srcDir, folder);
      const statFolder = await stat(folderPath);

      if (statFolder.isDirectory()) {
        const files = await readdir(folderPath);

        for (const file of files) {
          const srcPath = path.join(folderPath, file);
          const destPath = path.join(destDir, file);
          const fileStats = await stat(srcPath);

          if (fileStats.isFile() && file.endsWith('.css')) {
            console.log(`✅ Copiando: ${file}`);
            await cp(srcPath, destPath);
          }
        }
      }
    }
  } catch (err) {
    console.error('❌ Error al copiar archivos:', err);
  }
}


try {
  // Append dark mode to per-theme CSS build outputs
  await appendDarkMode();

  const cssFiles = await readdir(cssFolder);
  let combinedCss = '';

  for (const file of cssFiles) {
    console.log(`Procesando archivo: ${file}`);
    if (file.endsWith('.css')) {
      const content = await readFile(path.join(cssFolder, file), 'utf8');
      combinedCss += content + '\n';
    }
  }

  const processedCss = combinedCss.replace(/root/g, 'host');
  const dataCss = 'css`' + `\n${processedCss}\n` + '`';

  const globalsTokens = `
import { css } from 'atomico';

const globalsTokens = ${dataCss};

export default globalsTokens;
`;

  await writeFile(outputPath, globalsTokens, 'utf8');
  console.log('✅ Archivo index.js generado');

  // Copiar archivos al destino externo
  await copyCssFiles(cssFolder, exportFolder);

  // Copiar v2 CSS al destino externo
  try {
    const v2DestFolder = path.join(exportFolder, 'v2');
    await mkdir(v2DestFolder, { recursive: true });
    const v2Files = await readdir(v2Folder);
    for (const file of v2Files) {
      if (file.endsWith('.css')) {
        const srcPath = path.join(v2Folder, file);
        const destPath = path.join(v2DestFolder, file);
        await cp(srcPath, destPath);
        console.log(`✅ Copiando v2: ${file}`);
      }
    }
  } catch (err) {
    console.error('❌ Error al copiar archivos v2:', err);
  }
} catch (e) {
  console.error('❌ Error en writeTokens.js:', e);
}
