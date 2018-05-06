import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { configureStore } from './src/store';
import { AppContainer } from './src/feature/main/app.container.component';

console.ignoredYellowBox = ['Remote debugger'];

const { store } = configureStore({});

const App = props => (
  <Provider store={store}>
    <StyleProvider style={getTheme(material)}>
      <AppContainer />
    </StyleProvider>
  </Provider>
);

export default App;
