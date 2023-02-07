import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your perfect banking partner"
  input="Account Number"

  acno=''                             //or acno=any (need to initialise)
  pwd=''


  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno
    var pwd=this.pwd
    var userDetails=this.ds.userDetails
    if(acno in userDetails){
      if(pwd==userDetails[acno]["password"]){
        alert('login successful')
        this.router.navigateByUrl('dashboard')

      }
      else{
        alert('incorrect password')
      }

    }
    else{
      alert('acno incorrect or not registered')
    }
    //alert('login clicked')

  }

  // login(a:any,b:any){
  //   console.log(a.value);
    
  //   var acno=a.value
  //   var pwd=b.value
  //   var userDetails1=this.userDetails
  //   if(acno in userDetails1){
  //     if(pwd==userDetails1[acno]["password"]){
  //       alert('login successful')

  //     }
  //     else{
  //       alert('incorrect password')
  //     }

  //   }
  //   else{
  //     alert('acno incorrect or not registered')
  //   }
  //   //alert('login clicked')

  // }
  // acnoChange(event:any){
  //   this.acno=event.target.value   //alaways use (this.) while calling, data will be stored here event.target.value
  //   //console.log(this.acno);
    
  // }

  // pwdChange(event:any){
  //    this.pwd=event.target.value
  //    //console.log(this.pwd);
     
  // }


}
