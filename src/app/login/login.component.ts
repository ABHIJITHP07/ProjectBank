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
  psw=''


  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect acno or password')
    }
  }

}
