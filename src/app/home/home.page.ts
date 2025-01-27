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

  txtid_produucts: any;
  txtname: any;
  txtprice: any;

  // ประกาศตัวแปรสำหรับส่งข้อมูลไปยัง API
  id_produucts: any;
  name: any;
  price: any;
  

  constructor(public dataapi: DataapiService, public router: Router) { }

  ngOnInit() {
    // ถ้ามี code ที่ต้องการทำเมื่อ component ถูกโหลดสามารถใส่ได้ที่นี่
  }

  addmembers() {
    let data = {
      id_stu: this.txtid_produucts,
      name: this.txtname,
      nname: this.txtprice,
    };

    this.dataapi.addproducts(data).subscribe({
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
    this.txtid_produucts = "";
    this.txtname = "";
    this.txtprice = "";
  }

  
  // เพิ่มฟังก์ชัน goToType() เพื่อทำการนำทางไปยังหน้าอื่น
  goToType() {
    this.router.navigate(['/praped1']);  // แก้จาก '/type' เป็น '/praped1'
  }

}


