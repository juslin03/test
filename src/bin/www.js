/** eslint-disable no-console */
/**
 * Module dependencies.
 */

import app from "../index";
import debugLib from "debug";
import http from "http";
import constants from "../config/constants";
import "../config/database";

let debug = debugLib("webpack-test:server");

var port = constants.PORT;

app.set("port", port);

/**
 * Create http server
 */

var server = http.createServer(app);

/**
 * Listen on port provided, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server 'error' event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  //   handle specific listen errors with friendly message
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server 'listening' event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log(`
        Server started on port: ${bind}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great!
    `);
}
