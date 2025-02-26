import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-sinka3',
  templateUrl: './sinka3.page.html',
  styleUrls: ['./sinka3.page.scss'],
})
export class Sinka3Page implements OnInit {

  constructor(private navCtrl: NavController,
    public dataapi:DataapiService
  ) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped() {
    this.navCtrl.navigateForward('/praped1')
  }

  goToTakra() {
    this.navCtrl.navigateForward('/takra')
  }

  sinka5 = [
    {
      id: 1,
      name: 'ชินรามยอน',
      price: 27,
      detail: 'Chinramyon',
      imageURL: '../../assets/image/ramyoung.webp'
    },
    {
      id: 3,
      name: 'มาม่าต้มยำกุ้งน้ำค้น',
      price: 8,
      detail: 'Mama Shrimp Tom Yum Flavor',
      imageURL: '../../assets/image/mamakung.webp'
    },
    {
      id: 5,
      name: 'คนอร์คัพโจ๊ก รสปลา',
      price: 15,
      detail: 'Knorr Cup Joke Fish Flavor',
      imageURL: '../../assets/image/JOKECUP.png'
    },
    {
      id: 2,
      name: 'โจ๊กคัพ รสไข่เค็ม',
      price: 16,
      detail: 'Joke Cup Salted Egg Flavor',
      imageURL: '../../assets/image/JOKEKAI.png'
    }, {
      id: 4,
      name: 'มาม่ารสแกงเขียวหวาน',
      price: 7,
      detail: 'Mama Tom Yum Shrimp Creamy Soup',
      imageURL: '../../assets/image/whan.png'
    }, {
      id: 6,
      name: 'มาม่ารสหมูสับ',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/image/MAMAMUSUP.png'
    }, {
      id: 6,
      name: 'มาม่ารสต้มยำกุ้ง',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/image/MAMAKUNGs.png'
    }, {
      id: 6,
      name: 'OK มาม่ารสไข่เค็ม',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/image/OKMAMA.png'
    }, {
      id: 6,
      name: 'ซัมยัง มาม่าเผ็ดเกาหลี',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/image/KOREA1.png'
    }, {
      id: 6,
      name: 'ซัมยัง มาม่าเผ็ดเกาหลีชีส',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/image/KOREA2.png'
    },
  ];

  adddata(show: any) {
    this.dataapi.showdata = show;
    let data = {
      drink_name: show.name,
      drink_price: show.price
    }
    this.dataapi.addproducts(data).subscribe({
      next: (res: any) => {
        console.log("บันทึกข้อมูลสำเร็จ", res);
      },
      error: (err: any) => {
        console.log("ไม่สามารถบันทึกข้อมูลได้", err)
      }
    });
  }
}
