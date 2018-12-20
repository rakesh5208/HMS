import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.scss']
})
export class DepartmentViewComponent implements OnInit {
  tableHeaders = ["Department Name", "Head of Department", "Contact Number"];
  departments = [];
  constructor(private hospitalService: HospitalService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params=>{
      this.departments = this.hospitalService.getDepartmentsByHospitalName( params['hospitalname'] || '')
    })
  }
  public sortBy(keyName:string){
    if(keyName){
      this.departments.sort((d1,d2)=>{
        return d1[keyName].localeCompare(d2[keyName]);
      })
    }
  }
}
