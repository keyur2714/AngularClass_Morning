import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  name:string = "keyur";
  city:string = "surat";
  mobileNo:string = "7387029671";
  age:number = 31; 

  person: Person = new Person();

  // person = {
  //   "name":"keyur",
  //   "city":"pune",
  //   "mobileNo":"7387029671",
  //   "age":31
  //   };

  personList : Person[] = [
    {    
      "name" : "keyur",
      "city" : "surat",
      "mobileNo" : "7387029671",
      "age" : 31
    }
  ];

//   personList = [
//     {
//     "name":"keyur",
//     "city":"surat",
//     "mobileNo":"7387029671",
//     "age":31
//     },
//     {
//     "name":"denish",
//     "city":"mumbai",
//     "mobileNo":"7387029121",
//     "age":32
//     },
//     {
//     "name":"vinit",
//     "city":"surat",
//     "mobileNo":"7387021212",
//     "age":31
//     }
// ];

  constructor() { 
    console.log("First...");
  }

  ngOnInit() {
    console.log("Second...");
    this.person.name = "hiren";
    this.person.mobileNo = "8600712124";
    this.person.city = "pune";
    this.person.age = 31;

    this.personList.push(this.person);
  }

  addNewPerson(name,city,mobileNo,age):void{
    let person = new Person();
    person.name = name;
    person.city = city;
    person.mobileNo = mobileNo;
    person.age = age;
    this.personList.push(person); 
  }
}
