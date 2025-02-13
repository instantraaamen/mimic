import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, Electron + React + Vite + TypeScript</h1>;
};

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
