import React from 'react';
import FooterComponent from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { StoreProvider } from './store';
import Routes from './routes';

const App = () => (
  <StoreProvider>
    <div className="App">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
      <FooterComponent />
    </div>
  </StoreProvider>
);

export default App;
