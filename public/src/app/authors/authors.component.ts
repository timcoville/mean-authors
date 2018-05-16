import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;
  constructor(private _httpService: HttpService){}
  
  ngOnInit() {

  this.authors = []
  this.getAuthors()
  }

  getAuthors(){
    this._httpService.serviceGetAuthors()
      .subscribe(authors=>{
        this.authors = authors
      })
  }

  deleteAuthor(id){
    this._httpService.serviceDeleteAuthor(id)
      .subscribe(authors=>{
        this.getAuthors()
      })
  }
}
