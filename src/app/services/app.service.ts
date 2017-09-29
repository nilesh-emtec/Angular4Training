import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LogService {
    public testEmitter = new EventEmitter<string>();
    log(message: string) {
        console.log(message);
    }
}
