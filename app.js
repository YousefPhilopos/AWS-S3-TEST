//https://www.youtube.com/watch?v=p2NPGfkhRrQ
//9:08
//AWS info teacher provided for the s3 bucket

require(dotenv).config();
const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const { memoryStorage } = require('multer');
const { ifError } = require('assert');
const storage = memoryStorage();
const upload = multer({ storage });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//create a bucket
//route post
//data

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,


});

const uploadAudio = () => {
    
    const params = {
        Key: filename,
        Bucket: bucketname,
        Body: file,
        ContentType: 'audio/mpeg',
        ACL: 'public-read',


    }
    
    s3.upload(params, (err, data) => {
        if(err){
            return err;

        }else{
            return data;
        }

    })
}

const bucket = 'study-pod-aws-s3-test';

app.post('/upload', (req, res) => {
    console.log('uploaded file');
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
    });