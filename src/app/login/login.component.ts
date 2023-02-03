import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your perfect banking partner"
  input="Account Number"

  acno=''   //or acno=any (need to initialise)
  pwd=''

  userDetails:any={
    1000:{acno:1000,username:"arun",password:"abc123",balance:0},
    1001:{acno:1001,username:"anu",password:"abc123",balance:0},
    1002:{acno:1002,username:"amal",password:"abc123",balance:0},
    1003:{acno:1003,username:"abhi",password:"abc123",balance:0},
    
  }

  constructor() {}

  ngOnInit(): void {
  }

  login(){
    alert('login clicked')

  }
  acnoChange(event:any){
    this.acno=event.target.value   //alaways use this. while calling, data will be stored here event.target.value
    console.log(this.acno);
    
  }

  pwdChange(event:any){
     this.pwd=event.target.value
     console.log(this.pwd);
     
  }


}
