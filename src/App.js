import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [appVersion, setAppVersion] = useState(null);
  const [appEnv, setAppEnv] = useState(null);

  useEffect(() => {
    setAppVersion(process.env.REACT_APP_VERSION_RELEASE ? process.env.REACT_APP_VERSION_RELEASE : null)
    setAppEnv(process.env.REACT_APP_ENV_PARAM ? process.env.REACT_APP_ENV_PARAM : null)
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
          Learn React Feature 2.2.4 Now <br></br>
          {appEnv ? (
            <div>
              <p>ENV: {appEnv}</p>
            </div>
          ) : (
            <p>Loading environment...</p>
          )}
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
