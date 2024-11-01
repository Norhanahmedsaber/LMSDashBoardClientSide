import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './src/state/rootReducer';

const renderWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store = configureStore({ reducer: rootReducer, preloadedState }) } = {}
) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

export default renderWithProviders;
