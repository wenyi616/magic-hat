var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');

app.use(cors())

var photoType = 'input'; // test

var storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, 'public') // set destination folder
    },

    filename: function(req, file, cb) {
        cb(null, photoType + '.jpg') // save as jpg
        // cb(null, Date.now() + '-' + file.originalname)
    }

})

var storageRef = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, 'public') // set destination folder
    },

    filename: function(req, file, cb) {
        cb(null, 'reference.jpg') // save as jpg
        // cb(null, Date.now() + '-' + file.originalname)
    }

})

var upload = multer({ storage: storage }).array('file')

var reference = multer({ storage: storageRef }).array('file')

app.post('/upload', function(req, res) {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        }
        else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.post('/reference', function(req, res) {
    reference(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        }
        else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.listen(8000, function() {
    console.log('App running on port 8000');
});