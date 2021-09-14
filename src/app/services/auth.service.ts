import { Injectable } from '@angular/core';
import {Observable,pipe} from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private siblingMsg = new Subject<string>();
  constructor() { }
  
  public getMessage(): Observable<string> {
    return this.siblingMsg.asObservable();
  }
  
  public updateMessage(message: string): void {
    this.siblingMsg.next(message);
  }
}
