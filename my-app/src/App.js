import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/home';
import Upload from './components/upload';
import Reference from './components/reference';
import Magician from './components/magician';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedFile: null,
  //     loaded: 0
  //   }
  // }

  // maxSelectFile=(event)=> {
  //   let files = event.target.files
  //   if (files.length > 3) {
  //     const msg = 'Only 3 images can be uploaded at a time.'
  //     event.target.value = null; // discard selected files
  //     console.log(msg);
  //     toast.warn(msg);
  //     return false;
  //   }
  //   return true;
  // }

  // checkMimeType=(event)=> {
  //   let files = event.target.files;
  //   let err = [];
  //   const types = ['image/png', 'image/jpeg'];

  //   for (var i=0; i<files.length; i++) {
  //     if (types.every(type => files[i].type !== type)) {
  //       err[i] = files[i].type + ' is not a supported format.\n';
  //     }
  //   }

  //   for (var z=0; z<err.length; z++) {
  //     event.target.files = null;
  //     toast.error(err[z]);
  //   }

  //   return true;
  // }

  // checkFileSize=(event)=> {
  //   let files = event.target.files;
  //   let size = 2500000; // 2.5MB
  //   let err = [];

  //   for (var i=0; i<files.length; i++) {
  //     if (files[i].size > size) {
  //       err[i] = files[i].type + ' is too large, please pick a smaller file.\n';
  //     }
  //   }

  //   for (var z=0; z<err.length; z++) {
  //     event.target.files = null;
  //     toast.error(err[z]);
  //   }


  //   return true;
  // }

  // onChangeHandler=event=> {
  //   console.log(event.target.files)
  //   var files = event.target.files;
  //   if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)) {
  //     this.setState({
  //       selectedFile: files,
  //       loaded: 0
  //     })
  //   }
    
  // }

  // onClickHandler = () => {
  //   const data = new FormData()
  //   for (var i=0; i<this.state.selectedFile.length; i++) {
  //     data.append('file', this.state.selectedFile[i])
  //   }
    

  //   axios.post("http://localhost:8000/upload", data, {
  //     onUploadProgress: ProgressEvent => {
  //       this.setState({
  //         loaded: (ProgressEvent.loaded / ProgressEvent.total*100)
  //       })
  //     }

  //   })
  //   .then(res => {
  //     toast.success('upload success');
  //     console.log(res.statusText);
  //   })
  //   .catch(err => { 
  //     toast.error('upload fail');
  //   })
  // }


  render() {
    return (

      <Router>
        <div>
          <h1>Magic Hat</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/upload'} className="nav-link">Upload</Link></li>
            <li><Link to={'/reference'} className="nav-link">Reference</Link></li>
            <li><Link to={'/magician'} className="nav-link">Magician</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/upload' component={Upload} />
              <Route path='/reference' component={Reference} />
              <Route path='/magician' component={Magician} />
          </Switch>
        </div>
      </Router>

      // <div class="container">
      //   <div class="row">
      //     <div class="col-md-6">
      //         <form method="post" action="#" id="#">
                
                    
      //               <div class="form-group files">
      //                 <label>Upload the Photo You Want to be Edited </label>
      //                 <input type="file" class="form-control" multiple onChange={this.onChangeHandler} />
      //               </div>

      //               <div class="form-group">
      //                 <ToastContainer />
      //                 <Progress max="100" color="success" value={this.state.loaded}>{Math.round(this.state.loaded, 2)}%</Progress>
      //               </div>

      //               <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                    
                  
      //         </form>
              
              
      //     </div>

      //   </div>
      // </div>

    );
  }
}

export default App;
