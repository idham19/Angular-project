import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
devices:any;
filter:string='';

constructor(){
  this.devices=[{
    "type": "Phone",
    "model": "iPhone 15 Pro Max",
    "brand": "Apple",
    "screenSize": "6.7 inches",
    "price": 1199,
    "discount": 0,
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-family-select?wid=940&hei=1112&fmt=png-alpha&.v=1694215543702"
  },
  {
    "type": "Phone",
    "model": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "screenSize": "6.8 inches",
    "price": 1199,
    "discount": 15,
    "image": "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s24-ultra/carousel/titanium-violet-1.png"
  },
  {
    "type": "Phone",
    "model": "Google Pixel 8 Pro",
    "brand": "Google",
    "screenSize": "6.7 inches",
    "price": 999,
    "discount": 5,
    "image": "https://i.ytimg.com/vi/otomCbnwsv0/mqdefault.jpg"
  },
  {
    "type": "Phone",
    "model": "OnePlus 12 Pro",
    "brand": "OnePlus",
    "screenSize": "6.7 inches",
    "price": 1099,
    "discount": 12,
    "image": "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2024/01/li-oneplus-12-hero.png"
  },
  {
    "type": "Phone",
    "model": "Xiaomi 14 Pro",
    "brand": "Xiaomi",
    "screenSize": "6.7 inches",
    "price": 899,
    "discount": 20,
    "image": "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14/M/black.png"
  },
  {
    "type": "TV",
    "model": "LG C3 OLED",
    "brand": "LG",
    "size": "65 inches",
    "price": 1999,
    "discount": 25,
    "image": "https://content.syndigo.com/asset/a54186ac-2e28-46ef-b63f-1e314001136c/960.jpg"
  },
  {
    "type": "TV",
    "model": "Samsung QLED 8K",
    "brand": "Samsung",
    "size": "75 inches",
    "price": 3499,
    "discount": 20,
    "image": "https://cdn11.bigcommerce.com/s-blniumslhq/images/stencil/1280x1280/products/8411/33931/QN900D450__00797.1719541986.jpg?c=1"
  },
  {
    "type": "TV",
    "model": "Sony Bravia XR",
    "brand": "Sony",
    "size": "55 inches",
    "price": 1499,
    "discount": 18,
    "image": "https://m.media-amazon.com/images/I/81901Zmn7IL.jpg"
  },
  {
    "type": "TV",
    "model": "TCL Mini-LED 4K",
    "brand": "TCL",
    "size": "65 inches",
    "price": 1299,
    "discount": 15,
    "image": "https://www.tcl.com/usca/content/dam/tcl/product/home-theater/6-series/super-bowl-screen-fill/R655_Master_0000s_0000_Front-copy.png"
  },
  {
    "type": "TV",
    "model": "Hisense ULED 8K",
    "brand": "Hisense",
    "size": "75 inches",
    "price": 2799,
    "discount": 22,
    "image": "https://cdn.mos.cms.futurecdn.net/PaMZqL8DtehBthFuFzCSiV.jpg"
  },
  {
    "type": "Laptop",
    "model": "MacBook Pro M2 Max",
    "brand": "Apple",
    "screenSize": "16 inches",
    "price": 3499,
    "discount": 10,
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202301?wid=1280&hei=1192&fmt=jpeg&qlt=90&.v=1670018482467"
  },
  {
    "type": "Laptop",
    "model": "Dell XPS 13 Plus",
    "brand": "Dell",
    "screenSize": "13 inches",
    "price": 1299,
    "discount": 12,
    "image": "https://www.dell.com/xps13plus.png"
  },
  {
    "type": "Laptop",
    "model": "Lenovo ThinkPad X1 Carbon",
    "brand": "Lenovo",
    "screenSize": "14 inches",
    "price": 1799,
    "discount": 18,
    "image": "https://www.lenovo.com/thinkpad-x1-carbon.png"
  },
  {
    "type": "Laptop",
    "model": "HP Spectre x360",
    "brand": "HP",
    "screenSize": "13 inches",
    "price": 1499,
    "discount": 20,
    "image": "https://www.hp.com/spectrex360.png"
  },
  {
    "type": "Laptop",
    "model": "Acer Swift X",
    "brand": "Acer",
    "screenSize": "14 inches",
    "price": 1099,
    "discount": 15,
    "image": "https://static.acer.com/acerswiftx.png"
  },
  {
    "type": "Tablet",
    "model": "iPad Pro 12.9",
    "brand": "Apple",
    "screenSize": "12.9 inches",
    "price": 1199,
    "discount": 10,
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-9-select-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664410985998"
  },
  {
    "type": "Tablet",
    "model": "Samsung Galaxy Tab S9 Ultra",
    "brand": "Samsung",
    "screenSize": "14.6 inches",
    "price": 1299,
    "discount": 12,
    "image": "https://image-us.samsung.com/SamsungUS/mobile/tablets/galaxy-tab-s/Tab_S9_Ultra.png"
  },
  {
    "type": "Tablet",
    "model": "Lenovo Tab P12 Pro",
    "brand": "Lenovo",
    "screenSize": "12.6 inches",
    "price": 999,
    "discount": 15,
    "image": "https://www.lenovo.com/lenovotab-p12-pro.png"
  },
  {
    "type": "Tablet",
    "model": "Microsoft Surface Pro 9",
    "brand": "Microsoft",
    "screenSize": "13 inches",
    "price": 1299,
    "discount": 10,
    "image": "https://c.s-microsoft.com/surface-pro-9.png"
  },
  {
    "type": "Tablet",
    "model": "Xiaomi Pad 6 Pro",
    "brand": "Xiaomi",
    "screenSize": "11 inches",
    "price": 599,
    "discount": 20,
    "image": "https://i01.appmifile.com/xiaomipad6pro.png"
  }
  ]
}


getFiltredDevices(){
  return this.filter===''
  ? this.devices
  :this.devices.filter((device:any)=>device.type===this.filter)
 }

}
