import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serverlist',
  templateUrl: './serverlist.component.html',
  styleUrls: ['./serverlist.component.css']
})
export class ServerlistComponent implements OnInit {
  @Input() server: { name: string };
  constructor() { }

  ngOnInit() {
  }

}
