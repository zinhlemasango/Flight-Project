import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  City : string;
  group2 : string;
  TripType : string;
  numTickets : number;
  date : string;
  time : string;
  member : string;
  price : number;



  constructor(private router: Router, private route : ActivatedRoute) { }
  ngOnInit(){
    this.route.queryParams.subscribe(
      params => {
        this.City = params['City'];
        this.group2 = params['group2'];
        this.TripType = params['TripType'];
        this.numTickets = params['numTickets'];
        this.date = params['date'];
        this.time = params['time'];
        this.member = params['member'];
      }
    )
  }



  ConfirmBooking(){
    this.price = this.member == 'Yes' ? this.price * 0.75: this.price;
    this.price = this.price * this.numTickets;
    this.price = this.TripType == 'Return' ?this.price + 650: this.price;

    
    this.router.navigate(['/view'], {
      queryParams:{
        City:this.City,
        group2:this.group2,
        TripType:this.TripType,
        numTickets:this.numTickets,
        date:this.date,
        time:this.time,
        member:this.member,
        price:this.price
      }
    });
  }


}



