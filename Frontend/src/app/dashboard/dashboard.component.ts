import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userList:any[]=[];
  editData:any;
   Id:string="";
  Name:string="";
  Email:string="";
  DateOfBirth:string="";
  Address:string="";
  constructor (private details:ServicesService) {}

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails()
  {
    this.details.getdata().subscribe((data)=>{
      this.userList=data;
    

    })
  }
  deletedata (id:any)
  {
    this.details.deletedata(id.Id).subscribe((data)=>{
      alert("deleted sucessfully");
      this.getDetails();
    })
  }
  
  updatedetails(item:any)
  {  var val={Name:this.Name,Email:this.Email,DateOfBirth:this.DateOfBirth,Address:this.Address}
     this.details.updatedata(val).subscribe((data:any)=>{
      this.getDetails();
      alert("sucessfully updated");
      this.editData=null;
  })
} 
openModal()
{
  this.Name="",
  this.Email="",
  this.DateOfBirth="",
  this.Address=""
} 

  

}
