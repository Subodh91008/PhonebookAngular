import { EditphonebookComponent } from './../editphonebook/editphonebook.component';
import { ContectService } from './../contect.service';
import { Contect } from './../contect';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-phonebook',
  templateUrl: './all-phonebook.component.html',
  styleUrls: ['./all-phonebook.component.css']
})
export class AllPhonebookComponent implements OnInit {
  contects:Contect[]=[];

  ms='';
  msg='';

  constructor(private service:ContectService, private router:Router,) { }

  ngOnInit(): void {
    this.getallcontect();
  }
 getallcontect(){
   this.service.getallcontact().subscribe(
     data=>{this.contects=data},
     error=>{console.log(error)}
    )
 }

 deletcontect(id:number){
     this.service.deletecontect(id).subscribe(
       data=>{this.msg=data,this.getallcontect()},
       error=>{console.log(error)}
       )
 }

 editphone(id:number){
    this.router.navigate(['edit',id]);
 }
 
}
