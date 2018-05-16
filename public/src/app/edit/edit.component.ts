import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { AppComponent } from './../app.component';

import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: any;
  errors: any;
  id: number;

  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id
      
     });
   }

  ngOnInit() {
    this.author = {
      name: '',
      id: this.id
    }
    this.errors = []
    this.getAuthor()

  }

 
  getAuthor() {
    this._httpService.serviceSingleAuthor(this.id)
      .subscribe(data=>{
        this.author.name = data['name']
        console.log(this.author)
      })
  }

  editAuthor() {
    this._httpService.serviceUpdateAuthor(this.author)
      .subscribe(data=>{
        if(data['errors']){
          this.errors.push(data['errors'].name.message)
          console.log(data)
          this.getAuthor()
        }
        else{
          this.errors.pop()
          console.log(this.errors)
          console.log(data);
          return this.router.navigate([''])
          /* window.location.href = "/" */
        }
      })
  }

  

}
