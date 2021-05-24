import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name :any= 'Angular';
  lat;
  lng;
  zoom;
  origin;
  destination

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    // get Users current position

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 16;
          console.log("position", position)
        });
      }else{
        console.log("User not allowed")
      }
    }

}
// navigator.geolocation.getCurrentPosition(function(){
//   alert('Location accessed')
// },function(){
//  alert('User not allowed')
// },{timeout:10000})