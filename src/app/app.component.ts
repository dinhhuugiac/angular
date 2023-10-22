import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLightOn: boolean = false;       // Biến trạng thái của bóng đèn
  lampImage: string = 'assets/lamp-off.jpg';  // Đường dẫn hình ảnh bóng đèn

  toggleLight() {
    this.isLightOn = !this.isLightOn; // Phương thức để chuyển trạng thái bật/tắt
    this.updateLampImage();
  }

  updateLampImage() {
    if (this.isLightOn) {
      this.lampImage = 'assets/lamp-on.jpg';  // Cập nhật hình ảnh khi bật
    } else {
      this.lampImage = 'assets/lamp-off.jpg';  // Cập nhật hình ảnh khi tắt
    }
  }

  turnOn() {
    this.isLightOn = true;   // Phương thức bật bóng đèn
    this.updateLampImage();
  }

  turnOff() {
    this.isLightOn = false;  // Phương thức tắt bóng đèn
    this.updateLampImage();
  }
}
