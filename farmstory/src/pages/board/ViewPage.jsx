import View from "../../components/board/View";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

export default function ViewPage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <View />
      </BoardLayout>
    </DefaultLayout>
  );
}
