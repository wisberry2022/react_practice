import Counter from './components/Counter';
import Reducer from './store/modules/counterReducer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
