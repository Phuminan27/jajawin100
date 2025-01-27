import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  //ประกาศตัวแปรรับค่าจากฟอร์ม
  txtusername: any
  txtpassword: any

  constructor(
    public route: Router,
    public dataaip: DataapiService
  ) { }

  login() {
    // สร้าง object สำหรับข้อมูลเข้าสู่ระบบ
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword
    };

    // เรียกใช้ฟังก์ชัน login ของ dataapiService
    this.dataaip.login(datalog).subscribe(
      (response: any) => {
        if (response.success) {
          alert(response.message); // แสดงข้อความแจ้งสำเร็จ
          localStorage.setItem('token', response.token); // บันทึก token
          this.route.navigateByUrl('/jaokongran'); // ไปหน้าหลัก
        } else {
          alert('เข้าสู่ระบบไม่สำเร็จ: ' + response.message); // แสดงข้อความแจ้งผิดพลาด
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      }
    );
  }

  registerpage() {
    this.route.navigateByUrl('/bossmap')

  }

}
