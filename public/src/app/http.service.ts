import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  constructor(private _http: HttpClient){}
  
  serviceGetAuthors(){
    return this._http.get('/api/authors')
  }

  serviceCreateAuthor(author){
    return this._http.post('/api/authors', author)
  }

  serviceSingleAuthor(id){
    return this._http.get('/api/authors/'+id)
  }

  serviceUpdateAuthor(author){
    return this._http.put('/api/authors/'+author.id, author)
  }

  serviceDeleteAuthor(id){
    return this._http.delete('/api/authors/'+id)
  }

}
