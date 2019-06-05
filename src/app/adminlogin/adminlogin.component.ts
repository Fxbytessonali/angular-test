import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
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
   console.log("sucessfuly login");
  


   this.router.navigate(['/adminhome']);
   }
   }


     ngOnInit() {
  }

}
