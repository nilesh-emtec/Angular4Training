import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createserver',
  templateUrl: './createserver.component.html',
  styleUrls: ['./createserver.component.css']
})
export class CreateserverComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string }>();
  constructor() { }

  ngOnInit() {
  }

  addServerName(serverName) {
    this.serverCreated.emit({ name: serverName });
    return false;
  }

}
