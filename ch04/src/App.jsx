import "./App.css";
import UseCallbackComponent from "./components/UseCallbackComponent.jsx";
import UseCounterComponent from "./components/UseCounterComponent.jsx";
import UseEffectComponent from "./components/UseEffectComponent.jsx";
import UseMemoComponent from "./components/UseMemoComponent.jsx";
import UseReducerComponent from "./components/UseReducerComponent.jsx";
import UseRefComponent from "./components/UseRefComponent.jsx";
import UseStateComponent from "./components/UseStateComponent.jsx";

/*
  날짜 : 2024/11/12
  이름 : 강은경
  내용 : ch04.리액트 훅

*/
function App() {
  return (
    <>
      <h3>ch04.react hooks</h3>

      <h4>useRef()</h4>
      <UseRefComponent />

      <h4>useState()</h4>
      <UseStateComponent />

      <h4>useReducer()</h4>
      <UseReducerComponent />
      <h4>useEffect()</h4>
      <UseEffectComponent />
      <h4>useMemo()</h4>
      <UseMemoComponent />
      <h4>useCallback()</h4>
      <UseCallbackComponent />
      <h4>Custom Hook()</h4>
      <UseCounterComponent />
    </>
  );
}

export default App;
