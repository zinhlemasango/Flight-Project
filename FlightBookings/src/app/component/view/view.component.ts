import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {



    City:'';
    group2:'';
    TripType:'';
    numTickets:'';
    date:'';
    time:'';
    member:'';
    price:'';
  
    
  constructor(private route: ActivatedRoute) { }
  ngOnInit()
    {

      
   
     this.route.queryParams.subscribe(paramas=>{
   
 
      this.City = paramas['City'];
      this.group2 = paramas['group2'];
      this.TripType = paramas['TripType'];
      this.numTickets = paramas['numTickets'];
      this.date = paramas['date'];
      this.time = paramas['time'];
      this.member = paramas['member'];
      this.price = paramas['price'];


     });
    }

    

  }

    
