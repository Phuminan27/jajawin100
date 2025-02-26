import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController, ToastController } from '@ionic/angular';  // นำเข้า ToastController
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
    private toastController: ToastController,
    public dataapi:DataapiService) {
    addIcons({ bagHandleOutline });
  }

  ngOnInit() { }

  goToPraped() {
    this.navCtrl.navigateForward('/praped1');
  }

  goToTakra() {
    this.navCtrl.navigateForward('/takra');
  }




  sinka = [
    {
      id: 1,
      name: 'โค้ก',
      price: 15,
      detail: 'Coke',
      imageURL: '../../assets/image/coke-full-red-325-ml-hires.png'
    },
    {
      id: 3,
      name: 'น้ำเปล่า',
      price: 7,
      detail: 'Water',
      imageURL: '../../assets/image/mongfer.png'
    },
    {
      id: 5,
      name: 'สปอนเซอร์',
      price: 15,
      detail: 'Sponser',
      imageURL: '../../assets/image/sponsor-1.png'
    },
    {
      id: 7,
      name: 'โค้ก ซีโร่',
      price: 15,
      detail: 'Coke',
      imageURL: '../../assets/image/COKEZERO.png'
    },
    {
      id: 9,
      name: 'เย็นเย็น',
      price: 7,
      detail: 'YenYen',
      imageURL: '../../assets/image/yenyen_400ml_mixedHerbsCooling.png'
    },
    {
      id: 11,
      name: 'เพียวริขุ',
      price: 12,
      detail: 'Sponser',
      imageURL: '../../assets/image/puriku-1.png'
    },
    {
      id: 12,
      name: 'โออิชิ ชากูซ่า',
      price: 15,
      detail: 'Oishi',
      imageURL: '../../assets/image/OISHI.png'
    },
    {
      id: 13,
      name: 'โออิชิ องุ่นเคียวโฮ',
      price: 20,
      detail: 'OISHI GRAPE',
      imageURL: '../../assets/image/KYOHO.png'
    },
    {
      id: 14,
      name: 'เอ็ม 150',
      price: 15,
      detail: 'M150',
      imageURL: '../../assets/image/M150.webp'
    },
    {
      id: 15,
      name: 'คาราบาว',
      price: 15,
      detail: 'Pepsi',
      imageURL: '../../assets/image/CARAMUJO.png'
    },
    {
      id: 16,
      name: 'กาแฟเบอร์ดี้',
      price: 20,
      detail: 'Pepsi',
      imageURL: '../../assets/image/latte-1.png'
    },
    {
      id: 17,
      name: 'กาแฟเอสเปรสโซ่',
      price: 15,
      detail: 'Liptin',
      imageURL: '../../assets/image/espresso-1.png'
    },
  ];





  adddata(show:any){
    this.dataapi.showdata = show;
    let data = {
      drink_name:show.name,
      drink_price:show.price
    }
    this.dataapi.addproducts(data).subscribe({
        next:(res:any)=>{
          console.log("บันทึกข้อมูลสำเร็จ",res);
        },
        error:(err:any)=>{
          console.log("ไม่สามารถบันทึกข้อมูลได้",err)
        }
    });


  }

}