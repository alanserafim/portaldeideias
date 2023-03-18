import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Injectable } from '@angular/core';

export class MessageService {
  
    private stompClient: any;

    constructor(private webSocketEndPoint: string, private topic: string, private onMessage: Function, private callbackError?: Function) {
        const errorCallback = callbackError || this.onError;
        this.connect(errorCallback);
    }

    private connect(errorCallback: Function) {
        console.log("Starting a WebSocket connection");
        const ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        this.stompClient.connect({}, frame => {
            this.stompClient.subscribe(this.topic, event => {
                this.onMessage(event);
            });
        }, errorCallback.bind(this));
    };

    private onError(error) {
        console.log("Error while connect: " + error);
        setTimeout(() => {
            console.log("Trying to connect again...");
            this.connect(this.onError);
        }, 3000);
    }
}

// https://www.javaguides.net/2019/06/spring-boot-angular-8-websocket-example-tutorial.html

  /*webSocketEndPoint: string = 'http://localhost:8080/socket';
  topic: string = "/all/ideias";
  stompClient: any;
  cadastrar: IdeiaCadastrarComponent;
  tab: Tab1Page;
  constructor(cadastrar: IdeiaCadastrarComponent, tab: Tab1Page){
      this.cadastrar = cadastrar;
      this.tab = tab;
  }

  _connect() {
      console.log("Initialize WebSocket Connection");
      let ws = new SockJS(this.webSocketEndPoint);
      this.stompClient = Stomp.over(ws);
      const _this = this;
      _this.stompClient.connect({}, function (frame) {
          _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
              alert(sdkEvent);
              _this.onMessageReceived(sdkEvent);
          });
      }, this.errorCallBack);
  };

  _disconnect() {
      if (this.stompClient !== null) {
          this.stompClient.disconnect();
      }
      console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
      console.log("errorCallBack -> " + error)
      setTimeout(() => {
          this._connect();
      }, 5000);
  }

  _send(message) {
      console.log("calling logout api via web socket");
      this.stompClient.send("/app/ideias", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
      console.log("Message Recieved from Server :: " + message);
      this.cadastrar.handleMessage(JSON.stringify(message.body));
  }*/
