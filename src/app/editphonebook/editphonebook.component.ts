import { ContectService } from './../contect.service';
import { Contect } from './../contect';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editphonebook',
  templateUrl: './editphonebook.component.html',
  styleUrls: ['./editphonebook.component.css']
})
export class EditphonebookComponent implements OnInit {

  contects:Contect=new Contect();
  id:any;
  msg:any;

  constructor(private service:ContectService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getonephonebook();
  }

  onSubmit(){
     this.service.modifyrecord(this.id,this.contects).subscribe(data=>{this.msg=data,this.contects=new Contect()},
      error=>{console.log(error)})
  }

  getonephonebook(){
     this.service.getonerecord(this.id).subscribe(
       data=>{this.contects=data},
       error=>{console.log(error)}
     )
  }
}
