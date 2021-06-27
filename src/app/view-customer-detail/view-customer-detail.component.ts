import { Component, OnInit } from '@angular/core';
import { CustomerData } from './CustomerData';
import { ViewcustomerdetailsService } from './viewcustomerdetails.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {AddService} from '../add-customer/add.service'
import { AddData } from '../add-customer/AddData';
import { UpdataData } from './updateData';

@Component({
  selector: 'app-view-customer-detail',
  templateUrl: './view-customer-detail.component.html',
  styleUrls: ['./view-customer-detail.component.scss']
})
export class ViewCustomerDetailComponent implements OnInit {

  flag=false;
  customerDetails : CustomerData[];
  constructor(private customerData:ViewcustomerdetailsService,private fb: FormBuilder,
    private router: Router,private addServiceOBj:AddService) {
    this.createForm();
   }


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
         AC="AC";
         NonAC="NON AC";
         Sleeper="Sleeper";
         Seater='Seater';

   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       contact: ['', Validators.required ],
       email:['', Validators.required],
    });
  }

  update_id;
  res;
    
  data: UpdataData=new UpdataData(0,'','','','','','','','','');
  updateformdata(){
    this.name=this.angForm.get('name').value;
    this.contact=this.angForm.get('contact').value;
    this.email=this.angForm.get('email').value;
    this.facilities=this.AC+","+this.NonAC+","+this.Seater+","+this.Sleeper;
    console.log(this.name);
    console.log(this.contact);
    console.log(this.email);
    console.log(this.gender);
    console.log(this.toLocation);
    console.log(this.fromLocation);
    console.log(this.pickupLocation);
    console.log(this.dropLocation);
    console.log(this.facilities);
    console.log("editid-----------"+this.update_id);
    
    this.res=this.customerData.customerUpdateData(this.update_id,this.name,this.contact,this.email,this.gender,this.toLocation,this.fromLocation,this.pickupLocation,this.dropLocation,this.facilities).subscribe();
  
    window.location.reload();
  }

  ngOnInit(): void {
    // console.log("hiiiiii")
    this.reload();   
    this.toCities=['Mumbai','Pune','Banglore','Hyderabad','Indore'];
    this.fromCities=['Pune','Indore','Bhopal','Jaipur','Rewa'];

    this.pickPoint=['Thane','Pune','Guwahati','Hyderabad','Kolkata'];
    this.dropPoint=['Bhuvneshwar','keral','Banglore','Hyderabad','Indore']
 
  }
 reload(){
  this.customerData.showsCustomerData().subscribe(
    response => this.getResponse(response),
  );
 }

  getResponse(response){
    this.customerDetails = response;
    console.log(this.customerDetails);
  }
  id:number;

  deleteData(id){
    console.log(id);
    this.customerData.deleteDataServiec(id).subscribe();
    window.location.reload();

  }
  updateData(id){
    this.flag=true;
    console.log(id);
    this.update_id=id;
  }
}
