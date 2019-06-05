import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
public input: any;
 


  constructor(private router: Router) {
   this.input= {
  "username": "jainsonali",
  "password": "sonali"
  };
  }
 
   login()
   {
   if(this.input.username && this.input.password)
   {
   console.log("loginsuccesfully");
   this.router.navigate(['/userhome']);
   }
   }


     ngOnInit() {
  }

}
