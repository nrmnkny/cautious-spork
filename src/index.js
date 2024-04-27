import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary'; // make sure to import ErrorBoundary

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
);
