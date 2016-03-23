import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  
    baseUrl: string = '/';

    constructor(private http: Http) { }
    
    getPacients() {       
    
        return this.http.get(this.baseUrl + 'getPacients')
                       .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getTreatments(){
      return this.http.get(this.baseUrl + 'selectTreatments')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    getPacients() {
        return this.http.get(this.baseUrl + '/customers.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
