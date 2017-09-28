import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers: string[] = ['server 1', 'server 2'];
  onServerCreated(serverData: { name: string }) {
    this.servers.push(serverData.name);
    return false;
  }
}
