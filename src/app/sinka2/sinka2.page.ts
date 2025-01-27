import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular'
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-sinka2',
  templateUrl: './sinka2.page.html',
  styleUrls: ['./sinka2.page.scss'],
})
export class Sinka2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public dataapi: DataapiService) {
    addIcons({ bagHandleOutline });
  }
  ngOnInit() {
  }

  goToPraped() {
    this.navCtrl.navigateForward('/praped1')
  }
  goToTakra() {
    this.navCtrl.navigateForward('/takra')
  }

  sinka3 = [
    {
      id: 1,
      name: 'สาหร่ายมาชิตะ',
      price: 15,
      detail: 'Machita',
      imageURL: '../../assets/image/machita.webp'
    },
    {
      id: 3,
      name: 'เลย์รสออริจินอล',
      price: 20,
      detail: 'Lays',
      imageURL: '../../assets/image/lays-original_75g.webp'
    },
    {
      id: 5,
      name: 'โดริโทส',
      price: 15,
      detail: 'Doritos',
      imageURL: '../../assets/image/doritos.png'
    },
    {
      id: 2,
      name: 'ปาร์ตี้',
      price: 10,
      detail: 'Party',
      imageURL: '../../assets/image/party.png'
    }, {
      id: 4,
      name: 'โทโร่',
      price: 20,
      detail: 'Toro',
      imageURL: '../../assets/image/toro.png'
    }, {
      id: 6,
      name: 'สแน็คแจ็ค',
      price: 15,
      detail: 'SnackJack',
      imageURL: '../../assets/image/snackjak.png'
    }, {
      id: 7,
      name: 'โดโสะ',
      price: 20,
      detail: 'DOZO',
      imageURL: '../../assets/image/DOSO.png'
    }, {
      id: 7,
      name: 'ทาโร่',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/image/TARO.png'
    }, {
      id: 7,
      name: 'เบนโตะ',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/image/bento.png'
    },
    {
      id: 7,
      name: 'คาราด้า',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/image/KARADA.png'
    },
  ]

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
