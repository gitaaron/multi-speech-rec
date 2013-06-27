var  sys = require('sys') 
    , fs = require('fs')
    , util = require('util')


exports.upload_file = function(req, res, next) {
    /*
    exports.req = req;
    res.end('finished');
    return;
    */
    var ins = fs.createReadStream(req.files.audio.path);
    //var ous_p = __dirname + '/static/uploads/'+req.files.audio.name;
    var ous_p = __dirname + '/static/uploads/blob.wav';

    console.log('ous_p : ' + ous_p);
    var ous = fs.createWriteStream(ous_p);
    util.pump(ins, ous, function(err) {
        if(err) {
            throw (err);
        } else {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(sys.inspect({fields: req.body, files: req.files}));
        }
    });


}
