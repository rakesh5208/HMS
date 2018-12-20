import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private _hospitals = [{ hospitalname: 'KIMS', contactnumber: '9632587410' },
  { hospitalname: 'CSI Mission Hospital', contactnumber: '9685321470' }];


  private _departments = [{
    departmentname: 'nephrology', head: 'Dr. A P Kulashekhar',
    contactnumber: '9876543210', hospitalname: 'KIMS'
  },
  {
    departmentname: 'neurology', head: 'Dr.B Raj Kumar',
    contactnumber: '9876543210', hospitalname: 'KIMS'
  },
  {
    departmentname: 'cardiology', head: 'Dr. L Sri Devi',
    contactnumber: '9876543210', hospitalname: 'KIMS'
  },
  {
    departmentname: 'ENT', head: 'Dr. K Ram Prasad',
    contactnumber: '9876543210', hospitalname: 'CSI Mission Hospital'
  },
  {
    departmentname: 'opthalmology', head: 'Dr. J Sirisha',
    contactnumber: '9876543210', hospitalname: 'CSI Mission Hospital'
  }];
  constructor() { }

  public getHospitals() {
    return this._hospitals;
  }
  public getDepartmentsByHospitalName(hospitalname) {
    if (!hospitalname) {
      return [];
    }
    return this._departments.filter((department) => {
      return hospitalname === department.hospitalname
    })
  }

}
