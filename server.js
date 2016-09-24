/**
 * Created by ivan on 24.09.16.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
    function processRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, request, response);
    }

    http.createServer(processRequest).listen(4242);
    console.log("Server has started.");
}

exports.start = start;