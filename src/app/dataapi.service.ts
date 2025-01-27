import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataapiService {
  showdata: any = [];

  constructor(public http: HttpClient) {}

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง API
  addproducts(data: any) {
    return this.http.post(
      'http://localhost/PSC/JajaAPI/insertProducts.php',
      data
    );
  }

  //ฟังก์ชันแสดงผลข้อมูล
  showproduct() {
    return this.http.get('http://localhost/PSC/JajaAPI/showcart.php');
  }

  registerUser(data:any){
    return this.http.post('http://localhost/PSC/JajaAPI/register.php', data);
  }


  login(datalog:any){
    return this.http.post('http://localhost/PSC/JajaAPI/login.php',datalog);
  }
}
