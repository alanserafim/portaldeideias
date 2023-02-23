import { Injectable } from '@angular/core';

// Declare SockJS and Stomp
var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Injectable()
export class MessageService {


  connect() {
    let socket = new SockJs(`http://localhost:8080/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
