import { createLogger } from 'redux-logger';
import { keys } from 'ramda';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { reducers } from './reducer';

const devMode = true;
const localMode = true;

const showDevTools = devMode || localMode;

const colors = {
  default: '#383838',
  clear_: '#7C394B',
  _error: '#E33231',
  _success: '#4CAF50',
  _start: '#03A9F4',
  undefined: '#8ADBDE',
  gigya: '#B25FD6',
  redirect: '#12505F',
};
const mapColor = () => {
  const colorCache = {};
  return title => {
    if (colorCache[title]) return colorCache[title];
    let color;
    keys(colors).forEach(key => {
      if (!color && title.toLowerCase().match(key)) {
        color = colors[key];
        colorCache[title] = color;
      }
    });
    return color ? color : colors.default;
  };
};

function _getMiddleware() {
  let middleware = [];
  const cachedColorMapper = mapColor();
  if (showDevTools) {
    const logger = createLogger({
      collapsed: true,
      duration: true,
      colors: {
        title: action => action.type && cachedColorMapper(action.type),
        prevState: () => '#E33231',
        action: () => '#03A9F4',
        nextState: () => '#4CAF50',
        error: () => '#E33231',
      },
    });
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];
  return enhancers;
}

export const configureStore = initialState => {
  const store = composeWithDevTools(_getMiddleware(), ..._getEnhancers())(
    createStore,
  )(combineReducers(reducers), initialState);

  return { store };
};
