/**
 * Created by ivan on 24.09.16.
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/index"] = requestHandlers.index;
handle["/login"] = requestHandlers.login;
handle["/logout"] = requestHandlers.login;

server.start(router.route, handle);