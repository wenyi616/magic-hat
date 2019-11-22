import React, { Component } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0
      }
   
  }

  onChangeHandler=event=>{
    var files = event.target.files
    // if(this.maxSelectFile(event) && this.checkMimeType(event) &&    this.checkFileSize(event)){ 
    // if return true allow to setState
      this.setState({
      selectedFile: files,
      loaded:0
    })
  // }
  }
  onClickHandler = () => {
    const data = new FormData() 
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/upload", data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
      .then(res => { // then print response status
        toast.success('upload success')
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
      })
    }

  render() {
    return (
      <div class="container">
	      <div class="row">
      	  <div class="offset-md-3 col-md-6">
              <div class="form-group files">
                <label>Upload A reference image </label>
                <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
              </div>  
              
              <div class="form-group">
                <ToastContainer />
                <Progress max="100" color="success" value={this.state.loaded} >
                  {Math.round(this.state.loaded,2) }%
                </Progress>
                
              </div>         
              
              <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
	      </div>
      </div>
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
