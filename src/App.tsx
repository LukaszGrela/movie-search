import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import AppRouter from "./components/AppRouter/AppRouter";
import store from "./store";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
button,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

[type="submit"],
label {
  cursor: pointer;
}

blockquote,
q {
  quotes: none;

  ::after,
  ::before {
    content: "";
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,
th,
td {
  font-weight: normal;
  text-align: left;
}

img {
  border-style: none;
}

input,
textarea,
select {
  color: #212121;
  vertical-align: middle;
}

/* <a> needs to be included here to remove the default tab focus */
button,
a {
  -webkit-appearance: none;
  color: #212121;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html,
body {
  background-color: #fafafa;
  color: #212121;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  position: fixed;
  user-select: none;
  width: 100%;
  font-size: 1rem;
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
