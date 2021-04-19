import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import AppRouter from "./components/AppRouter/AppRouter";
import store from "./store";

const Global = createGlobalStyle`
html {
  font-size: 100%;
  color: #212121;
}
body {
  margin:0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 600;
}
`;

function App() {
  return (
    <>
      <Global />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
