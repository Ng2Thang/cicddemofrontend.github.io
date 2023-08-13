import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [appVersion, setAppVersion] = useState(null);

  useEffect(() => {
    console.log('process.env.REACT_APP_VERSION_RELEASE', process.env.REACT_APP_VERSION_RELEASE)
    setAppVersion(process.env.REACT_APP_VERSION_RELEASE ? process.env.REACT_APP_VERSION_RELEASE : null)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {appVersion ? (
          <div>
            <p>Version: {appVersion}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
