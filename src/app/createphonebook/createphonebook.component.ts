import { ContectService } from './../contect.service';
import { Contect } from './../contect';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createphonebook',
  templateUrl: './createphonebook.component.html',
  styleUrls: ['./createphonebook.component.css']
})
export class CreatephonebookComponent implements OnInit {

  contects:Contect=new Contect();

  msg='';
  constructor(private service:ContectService) { }

  ngOnInit(): void {
  }

  onSubmit(){

     this.service.savephonebook(this.contects).subscribe(
       data=>{this.msg=data,this.contects=new Contect();},
       error=>{console.log(error)}
      )
  }

}
