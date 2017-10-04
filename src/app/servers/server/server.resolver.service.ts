import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServersService } from 'app/servers/servers.service';
import { Observable } from 'rxjs/Observable';

interface Server {
    id: number;
    name: string;
    status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {
    }
    resolve(route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot):
        Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}
