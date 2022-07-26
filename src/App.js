import { Provider } from 'react-redux';
import { Counter } from 'store/features/counter/Counter';

import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <h1 className="text-3xl text-center font-bold underline">
        Hello world!
      </h1>

    <Counter />

    </Provider>
  );
}