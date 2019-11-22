import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
// import Upload from './components/upload';
// import Home from './components/home';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       {/* <Route path="/home" component={Home} /> */}
//       <Route path="/upload" component={Upload} />
//     </div>
//   </Router>
// )

ReactDOM.render(
  <App />,
  // routing,
  document.getElementById('App')
);
