import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpParams,HttpHeaders  } from '@angular/common/http'
import { CustomerData } from './CustomerData';
import { DeleteData } from './DeleteData';
import { UpdataData } from './updateData';

@Injectable({
  providedIn: 'root'
})
export class ViewcustomerdetailsService {

  constructor(private httpClient:HttpClient) { }
    
    showsCustomerData()
    {
     //  console.log("hiiiiii")
       return this.httpClient.get<[CustomerData]>('http://localhost:8080/customerData/allCustomer');
       
    }  

    deleteDataServiec(id){
      return this.httpClient.delete('http://localhost:8080/customerData/deleteCustomerById?id='+id);
    }

    customerUpdateData(id,name,contact,email,gender,toLocation,fromLocation,pickupLocation,dropLocation,facilities)
    {
       console.log("Data Update API");
       console.log(name);
       var data=new UpdataData(
         id,
         name,
         contact,
         gender,
         email,
         toLocation,
         fromLocation,
         pickupLocation,
         dropLocation,
         facilities
       );
       console.log(data);
       console.log("get data-----------"+name);
       
       return this.httpClient.put<UpdataData>('http://localhost:8080/customerData/updateCustomer',data);
    }

}