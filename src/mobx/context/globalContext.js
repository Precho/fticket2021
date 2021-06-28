import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {SchopProvider} from './schopListsContext';
import {appDefaultTheme} from '../../theme/paper';

export const GlobalStoreProvider = ({children}) => (
  <SchopProvider>
    <PaperProvider theme={appDefaultTheme}>{children}</PaperProvider>
  </SchopProvider>
);
