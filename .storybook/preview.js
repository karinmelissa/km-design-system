import { decorator } from '@atomico/storybook';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import theme from './uikit-theming'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


const loadTheme = async (themeName) => {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `./themes/css/${themeName}.css`;
	document.head.appendChild(link);
};

const makeCssFiles = (themes) => {
	const styleTag = document.createElement('style');
	document.body.appendChild(styleTag);

	const use = (name) => () => {
		loadTheme(name);
	};

	return Object.fromEntries(
		Object.entries(themes).map(([themeName, themeValue]) => {
			return [themeName, { use: use(themeValue), unuse: () => null }];
		})
	);
};

export const decorators = [decorator({ source: "html" }),cssVariablesTheme,];
const preview= {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    decorators: decorators,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        selected: /(selected)$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduction", "Tokens", "Atoms", "Molecules","Organisms"],
      },
    },
    cssVariables: {
      files: makeCssFiles({
        'Theme #1': 'theme1',
        'Theme #2' : 'theme2',
        'Theme #3' : 'theme3',
        'Theme #4' : 'theme4',
      }),
      defaultTheme: 'Theme #1'
    },
    docs:{
      theme:theme,
    },
    viewMode: 'docs',
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
      }
    },
  },
};

export default preview;
