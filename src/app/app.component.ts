import { Component } from '@angular/core';
import { LogService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private logService: LogService) {
  }
  onClick() {
    this.logService.log('hello');
    this.logService.testEmitter.emit('Hello From App Component');
  }
}
