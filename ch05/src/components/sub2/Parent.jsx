import { Outlet } from "react-router-dom";

export default function Parent() {
  return (
    <div
      className="Parent"
      style={{ backgroundColor: "#eee", padding: "10px" }}
    >
      <h4>Parent</h4>

      {/* 자식 라우팅을 렌더링 */}
      <Outlet />
    </div>
  );
}
