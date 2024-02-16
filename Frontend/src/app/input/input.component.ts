import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  userList:any[]=[];
  Id:string="";
  Name:string="";
  Email:string="";
  DateOfBirth:string="";
  Address:string="";

  constructor (private details:ServicesService) {}

  ngOnInit(): void {
    
  }
  loginuser = new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required]),
    DateOfBirth:new FormControl('',[Validators.required]),
    Address:new FormControl('',[Validators.required])
  })
  get Namee()
  {
    return this.loginuser.get('Name');
  }
  get Emaill()
  {
    return this.loginuser.get('Email');
  }
  get DateOfBirthh()
  {
    return this.loginuser.get('DateOfBirth');
  }
  get Addresss()
  {
    return this.loginuser.get('Address');
  }
  adddetails()
  { var val={ Id:this.Id,Name:this.Name,Email:this.Email,DateOfBirth:this.DateOfBirth,Address:this.Address
  };
    this.details.adddata(val).subscribe((data:any)=>{
      this.userList=data;
      alert("added successfully");
    })
  }

}
