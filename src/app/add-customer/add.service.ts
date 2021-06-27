import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpParams  } from '@angular/common/http'
import { AddData } from './AddData'
import { UpdataData } from '../view-customer-detail/updateData';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private httpClient:HttpClient) { }

 customerInsertData(name,contact,email,gender,toLocation,fromLocation,pickupLocation,dropLocation,facilities)
 {
    var data=new AddData(
      name,
      contact,
      gender,
      email,
      toLocation,
      fromLocation,
      pickupLocation,
      dropLocation,
      facilities,
    );
    
    return this.httpClient.post<AddData>('http://localhost:8080/customerData/insertCustomer',data);
 }



}