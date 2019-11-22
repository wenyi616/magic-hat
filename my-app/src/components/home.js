import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends Component {
    render() {
        return (
            <div>
              <h4>Welcome to Magic Hat!</h4>
            </div>
        );
    }
}

// const home = () => {
//     return (
//        <div>
//           <h1>Home</h1>
//            <p>Home page body content</p>
//        </div>
//     );
// }
 
export default Home;