import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {AddService} from './add.service'
import { AddData } from './AddData';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  angForm: FormGroup;

  toCities:any[];
  fromCities:any[];

  pickPoint:any[];
  dropPoint:any[];

         name:string;
         email:string;
         contact : string;
         gender:any;
         toLocation: string;
         fromLocation: string;
         pickupLocation: string;
         dropLocation: string;
         facilities: string;
         checkboxData: Array<any> = [];

         Data: Array<any> = [
          { name: 'AC', value: 'AC' },
          { name: 'NonAC', value: 'NON AC' },
          { name: 'Charging Point', value: 'Charging Point' },
          { name: 'Sleeper', value: 'Sleeper' },
          { name: 'Seater', value: 'Seater' },
          { name: 'TV', value: 'TV' },
          { name: 'With Meals', value: 'With Meals' },
          { name: 'Without Meals', value: 'Without Meals' },
        ];

  constructor(private fb: FormBuilder,private addServiceOBj:AddService,private router: Router) {
    this.createForm();
  }
  

  onCheckboxChange(e) {
    const checkArray: FormArray = this.angForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      this.checkboxData.push(e.target.value);     
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  flagCheckDrop=false;


  dropDownValue(){
      if(this.toLocation==this.fromLocation){
        this.flagCheckDrop=true;
      }
      else{
        this.flagCheckDrop=false;
      }
  }

   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       contact: ['', Validators.required ],
       email:['', Validators.required],
       checkArray: this.fb.array([], [Validators.required])
    });
  }

  ngOnInit(): void {
    this.toCities=['Mumbai','Pune','Banglore','Hyderabad','Indore','Bhopal','Jaipur','Rewa'];
    this.fromCities=['Mumbai','Pune','Banglore','Hyderabad','Indore','Bhopal','Jaipur','Rewa'];

    this.pickPoint=['Thane','Pune','Guwahati','Hyderabad','Kolkata'];
    this.dropPoint=['Bhuvneshwar','keral','Banglore','Hyderabad','Indore']

  }
  res;
    
    data: AddData=new AddData('','','','','','','','','');
    adddata(){
      
    this.name=this.angForm.get('name').value;
    this.contact=this.angForm.get('contact').value;
    this.email=this.angForm.get('email').value;
    this.facilities= this.checkboxData.toString();
    
    this.res=this.addServiceOBj.customerInsertData(this.name,this.contact,this.email,this.gender,this.toLocation,this.fromLocation,this.pickupLocation,this.dropLocation,this.facilities).subscribe();
    this.router.navigateByUrl('viewcustomerdetails');
   
  }
}
