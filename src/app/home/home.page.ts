import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  txtstu: any;
  txtname: any;
  txtnname: any;
  txtage: any;
  txtaddress: any;
  txtphone: any;
  txtstatus: any;

  // ประกาศตัวแปรสำหรับส่งข้อมูลไปยัง API
  id_stu: any;
  name: any;
  nname: any;
  age: any;
  address: any;
  phone: any;
  status: any;

  constructor(public dataapi: DataapiService, public router: Router) { }

  ngOnInit() {
    // ถ้ามี code ที่ต้องการทำเมื่อ component ถูกโหลดสามารถใส่ได้ที่นี่
  }

  addmembers() {
    let data = {
      id_stu: this.txtstu,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      phone: this.txtphone,
      address: this.txtaddress,
      status: this.txtstatus
    };

    this.dataapi.addProduct(data).subscribe({
      next: (res: any) => {
        console.log("ข้อมูลถูกเพิ่ม", res);
      },
      error: (error: any) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", error);
      }
    });

    this.clearform();
  }

  clearform() {
    this.txtstu = "";
    this.txtname = "";
    this.txtnname = "";
    this.txtage = "";
    this.txtphone = "";
    this.txtaddress = "";
    this.txtstatus = "";
  }

  
  // เพิ่มฟังก์ชัน goToType() เพื่อทำการนำทางไปยังหน้าอื่น
  goToType() {
    this.router.navigate(['/praped1']);  // แก้จาก '/type' เป็น '/praped1'
  }

}


