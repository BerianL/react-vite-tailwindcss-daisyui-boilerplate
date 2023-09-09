import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className="card w-96 bg-gradient-to-br from-cyan-400/50 to-fuchsia-600/50 text-primary-content">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Vite + React</h1>
                <div className="flex items-center justify-center">
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>

                <div className="card-actions justify-center">
                    <button type="button" className="btn" onClick={() => setCount((count) => count + 1)}>
                        count is
                        {' '}
                        {count}
                    </button>
                </div>
                <p>
                    Edit
                    {' '}
                    <code>src/App.jsx</code>
                    {' '}
                    and save to test HMR
                </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            </div>
        </div>
      <div>

      </div>
      </>
  );
}

export default App;
