import logo from './logo.svg';
import './App.css';
import HookState from './components/useHook'
import CounterButton from './components/counterButtonUsingPrevState'
import UseStateWithObject from './components/useState-with-object'

function App() {
  return (
    <div className="App">
      {/* <HookState /> */}
      {/* <CounterButton /> */}
      <UseStateWithObject />
    </div>
  );
}

export default App;
