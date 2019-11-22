import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import photoType from './components/upload';

class Reference extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedFile: null,
          loaded: 0
        }
      }
    
    maxSelectFile=(event)=> {
        let files = event.target.files
        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time.'
            event.target.value = null; // discard selected files
            console.log(msg);
            toast.warn(msg);
            return false;
        }
    return true;
    }

    checkMimeType=(event)=> {
        let files = event.target.files;
        let err = [];
        const types = ['image/png', 'image/jpeg'];

        for (var i=0; i<files.length; i++) {
            if (types.every(type => files[i].type !== type)) {
                err[i] = files[i].type + ' is not a supported format.\n';
            }
        }

        for (var z=0; z<err.length; z++) {
            event.target.files = null;
            toast.error(err[z]);
        }

        return true;
    }

    checkFileSize=(event)=> {
        let files = event.target.files;
        let size = 2500000; // 2.5MB
        let err = [];

        for (var i=0; i<files.length; i++) {
            if (files[i].size > size) {
                err[i] = files[i].type + ' is too large, please pick a smaller file.\n';
            }
        }

        for (var z=0; z<err.length; z++) {
            event.target.files = null;
            toast.error(err[z]);
        }

        return true;
    }

    onChangeHandler=event=> {
        console.log(event.target.files)
        var files = event.target.files;
        if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)) {
            this.setState({
                selectedFile: files,
                loaded: 0
            })
        }
        
    }

    onClickHandler = () => {
        const data = new FormData()
        for (var i=0; i<this.state.selectedFile.length; i++) {
            data.append('file', this.state.selectedFile[i])
        }
    
        // photoType = 'reference';
        axios.post("http://localhost:8000/reference", data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100)
                })
            }

        })
        .then(res => {
            toast.success('upload success');
            console.log('reference upload success');
            console.log(res.statusText);
        })
        .catch(err => { 
            toast.error('upload fail');
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form method="post" action="#" id="#">
                        
                            <div className="form-group files">
                                <label>Upload a Reference Photo </label>
                                <input type="file" className="form-control" multiple onChange={this.onChangeHandler} />
                            </div>

                            <div className="form-group">
                                <ToastContainer />
                                <Progress max="100" color="success" value={this.state.loaded}>{Math.round(this.state.loaded, 2)}%</Progress>
                            </div>

                            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                            
                        </form>
                        
                    </div>

                </div>
            </div>
        );
        
    }
}

export default Reference;
// module.exports = { photoType: 'reference' };

      