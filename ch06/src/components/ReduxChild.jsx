import { useContext } from "react";
import CountContext from "../context/CountContext";

export default function ReduxChild() {
  return (
    <div className="ReduxChild">
      <h5>ReduxChild</h5>

      {/* <p>ReduxChild count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={() => reset(0)}>리셋</button> */}
    </div>
  );
}
