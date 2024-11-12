import "./App.css";
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

      <h4>userState()</h4>
      <UseStateComponent />

      <h4>userReducer()</h4>
      <UseReducerComponent />
      <h4>userEffect()</h4>
      <h4>userMemo()</h4>
      <h4>userCallback()</h4>
      <h4>Custom Hook()</h4>
    </>
  );
}

export default App;
