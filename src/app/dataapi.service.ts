import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  private apiUrl = 'http://localhost/PSC/Jaja%20API/insertProducts.php'; // URL ของ API ที่ใช้ในการบันทึกข้อมูล

  constructor(private http: HttpClient) { }

  insertProduct(productData: any) {
    return this.http.post(this.apiUrl, productData)
      .subscribe(response => {
        console.log('เพิ่มข้อมูลสำเร็จ:', response);
      }, error => {
        console.log('เกิดข้อผิดพลาด:', error);
      });
  }
}
