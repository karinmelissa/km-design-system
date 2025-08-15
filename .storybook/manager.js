import { addons } from '@storybook/manager-api';
import Theming from './uikit-theming';

addons.setConfig({
  theme: Theming,
});
