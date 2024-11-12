/*
    children
     - 컴포넌트 사이에 포함된 태그 내용을 전달하는 특별한 props
     - 반드시 {children} 형태로 선언
*/
const ContentComponent = ({ children }) => {
  return (
    <div className="ContentComponent">
      <h4>ContentComponent</h4>
      {children}
    </div>
  );
};

export default ContentComponent;
