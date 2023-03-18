import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'src/app/ideias/service/message.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: any[] = [];

  private webSocketConnector: MessageService;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.webSocketConnector = new MessageService(
      'http://localhost:8080/socket',
      '/statusProcessor',
      this.onMessage.bind(this)
    );
  }

  start() {
    this.http.put('http://localhost:8080/ideias/msg', {})
      .subscribe(response => console.log(response));
  }

  onMessage(message: any): void {
    this.items.push(message.body);
  }
}
