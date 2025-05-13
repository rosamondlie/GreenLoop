// resources/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Your root React component

// If using React 18+:
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

// For React 17 or earlier:
// ReactDOM.render(<App />, document.getElementById('app'));