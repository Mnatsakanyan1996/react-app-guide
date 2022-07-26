import { Provider } from 'react-redux';

import { store } from 'store';

import Layout from 'layout';

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}