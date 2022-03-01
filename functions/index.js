const functions = require("firebase-functions");
const admin = require('firebase-admin');
const https = require('https');
admin.initializeApp();

exports.addMessage = functions.https.onCall((data) => {
    return admin.database().ref('/users').set({
        videos: data
    }).then(() => {
        console.log('New Message written');
    // Returning the sanitized message to the client.
        return data;
    })
});

exports.vimeoTest = functions.https.onCall(() => {
    return new Promise(resolve => {
        let obj='';
        let options={
            host:'api.vimeo.com',
            path: '/users/161996644/projects/307153/videos',
            method: 'GET',
            headers: {
            'Authorization': 'bearer 66f2e46a649ee4fd1c4bfbe8cb646456',
            }
        };

        callback = function(response){
            var str='';

            response.on('data',function(chunk){
                str+=chunk;
            });

            response.on('end',function(){
                obj=JSON.parse(str);
                resolve(obj);
            });
        }
        let request = https.request(options,callback);
        request.end();
    });
});