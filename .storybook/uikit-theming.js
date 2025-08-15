import { create } from '@storybook/theming';
import logo from "./assets/Logo_km.png";


export default create({
  base: 'light',
  brandTitle: 'Sistema de Diseño @ui-kit',
  brandUrl: '',
  brandImage: logo,
  fontBase: '"Titillium Web", sans-serif;',
  barBg: '#244162',
  barTextColor: 'white',
  barSelectedColor: 'white',
  appBorderRadius: 4,
});