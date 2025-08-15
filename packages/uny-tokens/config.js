// config.js
import StyleDictionary from 'style-dictionary';

// Filtro personalizado (si lo necesitas)
const removeVariables = (token) => !token.name.includes('_');

export default {
  source: [
    'tokens/globals/**/*.json',
    'tokens/brandsColors/**/color.json',
    'tokens/brandsColors/**/gradient.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      transforms: ['name/cti/kebab', 'size/px'],
      files: [
        {
          filter: removeVariables,
          destination: 'globals.css',
          format: 'css/variables',
          options: {
            showFileHeader: false
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      transforms: ['name/cti/camel', 'size/px'],
      files: [
        {
          filter: removeVariables,
          destination: 'tokens.js',
          format: 'javascript/es6',
          options: {
            showFileHeader: false
          }
        }
      ]
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/',
      transforms: ['name/cti/camel', 'size/px'],
      files: [
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
          options: {
            showFileHeader: false
          }
        }
      ]
    }
  }
};
