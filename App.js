/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RouteApp from './router';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import reducer from "./reduces/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

let initialState = {
	classList:[],
    wave:[],
    testnum: 100,
    listdata: {},
};

const sagaMiddleware = createSagaMiddleware();
  //sagas
const middlewares = [sagaMiddleware];

const enhancer = compose(
  applyMiddleware.apply(null, middlewares),
  // window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(reducer,enhancer);

//sagas
sagaMiddleware.run(rootSaga);

// const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
        <RouteApp/>
    </Provider>
  );
};


store.subscribe(App);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  test: {
    flex: 1,
    height: 50,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
