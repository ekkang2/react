import ContextChild from "./ContextChild";

export default function ContextParent() {
  return (
    <div className="ContextParent">
      <h5>ContextParent</h5>

      <p>ContextParent count : 1</p>
      <button onClick={null}>증가</button>
      <button onClick={null}>감소</button>
      <button onClick={null}>리셋</button>

      <ContextChild />
    </div>
  );
}
