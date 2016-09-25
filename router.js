/**
 * Created by ivan on 24.09.16.
 */

var static = require('node-static');

var file = new(static.Server)('./webapp', { cache: 0 });

function route(handle, pathname, request, response) {
    if (typeof handle[pathname] === 'function') {
        console.log("API function for " + pathname);
        handle[pathname](request, response);
    } else {
        console.log("File for " + pathname);
        file.serve(request, response, function (err, result) {
            if (err) { // There was an error serving the file
                console.error("Error serving " + request.url + " - " + err.message);

                // Respond to the client
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }
}

exports.route = route;
