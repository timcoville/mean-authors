import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  author: any
  id: any
  quote: any
  error: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this._route.params.subscribe(params => {
      this.id = params.id
      
     });
   }

  ngOnInit() {
    this.author = {
    }
    this.quote = {
      quote: ''
    }
    this.error = ''
    console.log(this.id)
    this.getAuthor()
  }

  getAuthor(){
    this._http.serviceSingleAuthor(this.id)
      .subscribe(data=>{
        console.log(data)
      })
  }
  
  addQuote(){
    this._http.serviceCreateQuote(this.id, this.quote)
      .subscribe(data=>{
        if(data['errors']){
          let string = data['errors']['quotes.0.quote']['message']
          console.log(string)
          this.error = string
        }
        else{
        return this._router.navigate(['/quotes/'+this.id])
      }
        

      })
  }

}
