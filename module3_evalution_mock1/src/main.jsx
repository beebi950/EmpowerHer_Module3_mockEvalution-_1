import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostProvider } from './context/PostsContext';
import { ThemeProvider } from './context/ThemContext';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </ThemeProvider>
);