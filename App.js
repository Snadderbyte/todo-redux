import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoMain from './src/TodoMain.View.js';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './src/Todo.Reducer.js';

export default function App() {
  const store = configureStore({
    reducer: {todo: todoReducer}  });

  return (
    <Provider store={store}>
      <TodoMain />
    </Provider>
  );
}