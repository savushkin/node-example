/**
 * Created by ivan on 24.09.16.
 */
var exec = require("child_process").exec;

function login(request, response) {
    console.log("Request handler 'login' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

function logout(request, response) {
    console.log("Request handler 'logout' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

exports.login = login;
exports.logout = logout;
