import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

import { StorageSpace } from '../models';

@Injectable()
export class StorageSpacesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpace[]> {
    return this.http
      .get(environment.api_url + '/storageSpaces')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}