import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service'
@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  data : Data[];
  
  constructor(private service : DataService) { }


  ngOnInit() {
    this.data = this.service.GetDetails();
    console.log(this.data)
  }

}
