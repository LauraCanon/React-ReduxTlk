import { Provider } from 'react-redux';
import './App.css';
import Counter from './store/counter';
import { store } from '../src/app/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
