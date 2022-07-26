import { Provider } from 'react-redux';

import { store } from 'store';
import { domainUrl } from 'configs';
import { Counter } from 'store/features/counter/Counter';

export default function App() {
  return (
    <Provider store={store}>
      {/* tailwindcss example */}
      <h1 className="text-3xl text-center font-bold underline">
        Hello world!
        <br />
        {domainUrl}
      </h1>

      {/* @reduxjs/toolkit example */}
      <Counter />

    </Provider>
  );
}