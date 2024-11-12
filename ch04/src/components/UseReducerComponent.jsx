import { useDeferredValue } from "react";
import { useReducer } from "react";

// 상태 선언
const initCountState = {
  count: 0,
};

// 리듀서(상태값을 처리하는 함수) 정의
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

export default function UseReducerComponent() {
  // useReducer(), 사용자 정의 state와 state 처리함수를 정의하는 react hook
  const [countState, countDispatch] = useReducer(initCountState, countReducer);

  return (
    <div className="UseReducerComponent">
      <h4>UseReducerComponent</h4>
    </div>
  );
}
