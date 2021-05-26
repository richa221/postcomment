import { Component, ViewChild, OnInit, NgZone  } from '@angular/core';
import { MapsAPILoader, AgmMap,GoogleMapsAPIWrapper,AgmGeocoder} from "@agm/core";
import { UserserviceService } from '../services/userservice.service';
import { Router, ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-full-user-profile',
  templateUrl: './full-user-profile.component.html',
  styleUrls: ['./full-user-profile.component.css'],
  providers:[AgmGeocoder]
})
export class FullUserProfileComponent implements OnInit {
  add:any;
  zoom = 10;
  address: string;
  position = { lat: null, lng: null };
  userLat: number=82
  userLng: number=21
  userdetails :any;
  private geoCoder: google.maps.Geocoder;
  @ViewChild(AgmMap, { static: false }) agmMap: AgmMap;
  constructor(private userservice:UserserviceService,
    private router: Router,private route: ActivatedRoute,
    private maps: MapsAPILoader,
      private ngZone: NgZone,
    ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userservice.getUserDetail(id).subscribe((result: any )=>{
      this.userdetails = result
       this.add =this.userdetails?.location.street+"  "+this.userdetails?.location.state;
       this.getAddress(this.add);
    })
    this.maps.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
      
    });
  }
  getAddress(address:string) {
    console.log('ad',address);
    this.address = address
    this.geoCoder.geocode({ 'address': this.address }, (results, status) => {
      if (status===google.maps.GeocoderStatus.OK) {
        this.userLat = results[0].geometry.location.lat();
        this.userLng = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}
