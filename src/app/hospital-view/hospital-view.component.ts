import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss']
})
export class HospitalViewComponent implements OnInit {
  tableHeaders = ["Hosptal Name","Contact Number","View Department"];
  hospitals = [];
  constructor(private hospitalService:HospitalService) {

   }

  ngOnInit() {
    this.hospitals = this.hospitalService.getHospitals()
  }
  public sortBy(keyName:string){
    if(keyName){
      this.hospitals.sort((h1,h2)=>{
        return h1[keyName].localeCompare(h2[keyName]);
      })
    }
  }
} 
