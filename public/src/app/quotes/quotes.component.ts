import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  id: any
  quotes: any
  author: any

  constructor(private _http: HttpService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => {
      this.id = params.id
      console.log(this.id)
     });
   }

  ngOnInit() {
    this.quotes = []
    this.author = { 
    id: "",
    name: "",
    quotes: []
   }
   this.getQuotes()
  }

  getQuotes(){
    this._http.serviceSingleAuthor(this.id)
      .subscribe(data=>{
        this.author = data
        this.quotes = data['quotes']
        console.log(this.quotes)
      })
  }
  deleteQuote(quote_id){
    this._http.serviceDeleteQuote(this.id, quote_id)
    .subscribe(data=>{
      console.log(data)
      this.getQuotes()
    })
  }
}
