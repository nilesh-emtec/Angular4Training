import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/app.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private logService: LogService) {
    this.logService.testEmitter.subscribe((message: string) => {
      alert('Message from app component : ' + message);
    });
  }

  ngOnInit() {
  }

  // this.logService.

}
