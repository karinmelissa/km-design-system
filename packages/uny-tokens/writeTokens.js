import { readFile, writeFile, cp, mkdir, readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssFolder = path.join(__dirname, './build/css');
const outputPath = path.join(__dirname, './index.js');
const exportFolder = path.resolve(__dirname, '../../themes/css'); // destino externo

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
} catch (e) {
  console.error('❌ Error en writeTokens.js:', e);
}
