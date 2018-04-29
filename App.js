import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./src/store";
import { AppContainer } from "./src/feature/main/app.container.component";

console.ignoredYellowBox = ["Remote debugger"];

const { store } = configureStore({});

const App = props => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
