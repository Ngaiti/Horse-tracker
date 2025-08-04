// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/">
            <h1>🐴 Horse Tracker System</h1>
        </Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;