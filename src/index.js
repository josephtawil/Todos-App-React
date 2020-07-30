import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



function Welcome (props) {
  return <h1> Welcome, {props.name}</h1>
}

ReactDOM.render(
  <React.StrictMode>
    {/* <Welcome name = "Joseph"></Welcome> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

