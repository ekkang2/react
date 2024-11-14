import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";

// Redux 리듀서 스토어 설정
export default configureStore({
  reducer: {
    countReducer: countReducer,
  },
});
