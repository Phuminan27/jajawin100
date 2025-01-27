import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bossmap',
  templateUrl: './bossmap.page.html',
  styleUrls: ['./bossmap.page.scss'],
})
export class BossmapPage implements OnInit {

  txtname: any;
  txtemail: any;
  txtusername: any;
  txtpassword: any;

  constructor(
    public dataapi: DataapiService,
    public route: Router
  ) { }

  ngOnInit() {
  }

  register() {

    let data = {
      name: this.txtname,
      email: this.txtemail,
      username: this.txtusername,
      password: this.txtpassword
    }
    this.dataapi.registerUser(data).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.route.navigateByUrl('/login')
      },
      error: (err: any) => {
        alert(err.error.message);
      }
    });
    this.cls();
  }

  cls() {
    this.txtname = '';
    this.txtemail = '';
    this.txtusername = '';
    this.txtpassword = '';
  }

}
