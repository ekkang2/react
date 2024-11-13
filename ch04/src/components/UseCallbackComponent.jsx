import { useEffect, useState } from "react";

export default function UseCallbackComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="UseCallbackComponent">
      <h4>UseCallbackComponent</h4>
      <p>count1 : {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>증가</button>

      <p>count2 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>증가</button>
    </div>
  );
}
