import React from 'react';
import './App.css';
import MainPage from './page/MainPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppStateProvider from './providers/AppStateProvider';
import BookDetail from './page/BookDetail';

function App() {
  return (
    <BrowserRouter>
    <div>
      <AppStateProvider>
        <MainPage />
      </AppStateProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;