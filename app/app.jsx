import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Hello React!ccc</h1>
    </div>
  );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
