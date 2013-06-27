var   http = require('http')
    , express = require('express')
    , spawn = require('child_process').spawn
    , file_handler = require('./file_handler');


exports.file_handler = file_handler;

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.configure(function() {
    app.use(express.static(__dirname + '/static'));
    app.use(express.bodyParser());
});


app.post('/upload', function(req, res, next) {
    file_handler.upload_file(req, res, next); 


});

server.listen(9022);
console.log('listening on port 9022...');

var buffer = [];

io.sockets.on('connection', function(client){
    client.on('message', function(message) {
        client.emit('message', {'translation':'asdf'});
    });    

    client.on('translate', function(message) {
        var googleSpawn = spawn('sh', ['google_voice.sh'], {env:process.env}); 
        googleSpawn.stdout.on('data', function(data) {
            data = new String(data);
            console.log('google stdout : ' + data);
            client.emit('google', {translation:data});
        });

        googleSpawn.stderr.on('data', function(data) {
            console.log('err : ' + data); 
        });

        var ibmSpawn = spawn('sh', ['ibm_watson.sh'], {env:process.env}); 
        ibmSpawn.stdout.on('data', function(data) {
            data = new String(data);
            console.log('ibm stdout : ' + data);
            client.emit('ibm', {translation:data});
        });

        ibmSpawn.stderr.on('data', function(data) {
            console.log('ibm err : ' + data); 
        });


    });
      
});
