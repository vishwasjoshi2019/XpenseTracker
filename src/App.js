import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <div>
    <SnackbarProvider>
        <ExpenseTracker />
    </SnackbarProvider>
    </div>
  );
};

export default App;
