import React from 'react';
import './App.css';
import MainPage from './page/MainPage';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <div>
      <AppStateProvider>
        <MainPage />
      </AppStateProvider>
    </div>
  );
}

export default App;

