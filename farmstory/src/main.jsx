import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";

import store from "./store.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode> : 배포할 때는 비활성화 됨
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
