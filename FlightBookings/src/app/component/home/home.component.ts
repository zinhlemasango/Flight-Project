import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  City : string;
  group2 : string;
  TripType : string;
  numTickets : string;
  date : string;
  time : string;
  member : string;
  


  ngOnInit() {
  }

  Search(){
    
    this.router.navigate(['/flights'], {
      queryParams:{
        City:this.City,
        group2:this.group2,
        TripType:this.TripType,
        numTickets:this.numTickets,
        date:this.date,
        time:this.time,
        member:this.member


      }
    });
  }


}