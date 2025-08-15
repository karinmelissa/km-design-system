import StyleDictionary from 'style-dictionary';

function getStyleDictionaryConfig(color) {
  return {
    source: [
      'tokens/globals/**/*.json',
      `tokens/brandsColors/${color}/*`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `build/css/${color}/`,
        files: [
          {
            destination: `${color}.css`,
            format: 'css/variables',
            options: { outputReferences: true }
          }
        ]
      },
      scss: {
        transformGroup: 'scss',
        buildPath: `build/scss/${color}/`,
        files: [
          {
            destination: `${color}.scss`,
            format: 'scss/variables',
            options: { outputReferences: true }
          }
        ]
      }
    }
  };
}

console.log('Build started...');

['theme1', 'theme2','theme3','theme4'].forEach(color => {
  ['css', 'scss'].forEach(platform => {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${color}]`);
    
const SD = new StyleDictionary(getStyleDictionaryConfig(color));
SD.buildPlatform(platform);

    console.log('\nEnd processing');
  });
});

console.log('\nBuild completed!');
