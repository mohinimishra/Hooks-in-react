import logo from './logo.svg';
import './App.css';
import HookState from './components/useHook'
import CounterButton from './components/counterButtonUsingPrevState'
import UseStateWithObject from './components/useState-with-object'
import Array from './components/useStatewithArray'
import UseEffect from './components/useEffect'

function App() {
  return (
    <div className="App">
      {/* <HookState /> */}
      {/* <CounterButton /> */}
      {/* <UseStateWithObject /> */}
      {/* <Array /> */}
      <UseEffect />
    </div>
  );
}

export default App;
