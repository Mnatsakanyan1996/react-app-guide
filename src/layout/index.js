
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import MainRoutes from './MainRoutes';

import '@shopify/polaris/build/esm/styles.css';

export default function Layout() {
  return (
    <AppProvider i18n={enTranslations}>
      <MainRoutes />
    </AppProvider>
  );
}
