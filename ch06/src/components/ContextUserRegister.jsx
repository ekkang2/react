export default function ContextUserRegister() {
  return (
    <div className="ContextUserRegister">
      <h5>ContextUserRegister</h5>
      <form>
        <input type="text" name="uid" value={null} onChange={null} />
        <br />
        <input type="text" name="name" value={null} onChange={null} />
        <br />
        <input type="text" name="age" value={null} onChange={null} />
        <br />
        <input type="submit" value="저장" />
        <br />
      </form>
    </div>
  );
}
