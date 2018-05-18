import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  author: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.author = {
      name: ''
    }
    this.errors = []
  }

  createAuthor(){
    this._httpService.serviceCreateAuthor(this.author)
      .subscribe(data=>{
        if(data['errors']){
          this.errors.push(data['errors'].name.message)
          console.log(data)
        }
        else{
          this.errors.pop()
          console.log(this.errors)
          console.log(data);
          return this.router.navigate([''])
        }
      })
  }
}

