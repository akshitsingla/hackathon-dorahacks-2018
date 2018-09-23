import { Injectable } from '@angular/core';
import { Customer, Document } from './Document';


@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  public documents:Document[];
  public customers:Customer[];

  constructor() { 
     this.documents = [
       { CustomerID:'CB10001', ID: 1001,Name:'Driving License',Path:''},
       { CustomerID:'CB10002',ID: 1002,Name:'Rental Agreement',Path:''}
     ];
     this.customers = [
       {FirstName:'NETFLIX',LastName:'',Email:'support@netflix.com',isPending:true,ApplicationType:"Online Video Provider",Phone:7772221111,ID:1001},
       {FirstName:'HULU',LastName:'',Email:'support@hulu.com',isPending:true,ApplicationType:"Online Media Provider",Phone:7772221111,ID:1002},
       {FirstName:'AMAZON',LastName:'',Email:'support@amazon.com',isApproved:true,ApplicationType:"Online Retailer",Phone:7772221111,ID:1003},
     
     ];
  }

}
