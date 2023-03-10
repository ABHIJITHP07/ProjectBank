import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any

  acno: any

  datedetails: any


  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user = this.ds.currentUser

    //access date

    this.datedetails = new Date()

  }

  depositForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acno2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw2: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt2: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {    // '!' is used as "not"
      alert('Please login')
      this.router.navigateByUrl("")
    }
  }

  deposit() {
    var acno = this.depositForm.value.acno1
    var psw = this.depositForm.value.psw1
    var amnt = this.depositForm.value.amnt1

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amnt)
      if (result) {
        alert(`your account has been credited with amount ${amnt},The new balance is ${result}`)
      }
      else {
        alert('acno or password is incorrect')
      }
    }
    else {
      alert('invalid form')
    }




  }

  withdraw() {                         //since both are in different method we can use same var name
    var acno = this.withdrawForm.value.acno2
    var psw = this.withdrawForm.value.psw2
    var amnt = this.withdrawForm.value.amnt2

    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno, psw, amnt)

      if (result) {
        alert(`Amount ${amnt} has been debited from your account. New account balance is ${result}`)
      }
    }
    else {
      alert('invalid form')
    }

  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  deleteParent() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")
  }

  cancel() {
    this.acno = ''
  }



}
