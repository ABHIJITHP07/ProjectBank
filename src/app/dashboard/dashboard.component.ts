import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any

  acno1: any
  psw1: any
  amnt1: any

  acno2: any
  psw2: any
  amnt2: any

  constructor(private ds: DataService) {

    this.user = this.ds.currentUser

  }

  ngOnInit(): void {
  }

  deposit() {
    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1

    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`your account has been credited with amount ${amnt},The new balance is ${result}`)
    }
    else {
      alert('acno or password is incorrect')
    }


  }

  withdraw() {                         //since both are in different method we can use same var name
    var acno = this.acno2
    var psw = this.psw2
    var amnt = this.amnt2

    const result = this.ds.withdraw(acno, psw, amnt)

    if (result) {
      alert(`Amount ${amnt} has been debited from your account. New account balance is ${result}`)
    }
  }

}
