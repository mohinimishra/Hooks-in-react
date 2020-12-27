import logo from './logo.svg';
import './App.css';
import HookState from './components/useHook'
import CounterButton from './components/counterButtonUsingPrevState'

function App() {
  return (
    <div className="App">
      {/* <HookState /> */}
      <CounterButton />
    </div>
  );
}

export default App;
