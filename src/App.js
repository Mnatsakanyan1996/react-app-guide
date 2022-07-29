import { Provider } from 'react-redux';

import { store } from 'store';

import Layout from 'layout';

import 'antd/dist/antd.min.css';

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}