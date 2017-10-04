import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from 'app/auth-guard/can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean;
  changesSaved = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1';
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1';
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
