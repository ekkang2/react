import { useContext } from "react";
import ContextChild from "./ContextChild";
import CountContext from "../context/CountContext";
import ReduxChild from "./ReduxChild";

export default function ReduxParent() {
  return (
    <div className="ReduxParent">
      <h5>ReduxParent</h5>

      {/* <p>ReduxParent count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={() => reset(0)}>리셋</button> */}

      <ReduxChild />
    </div>
  );
}
