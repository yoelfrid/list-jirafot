import { Component, OnInit } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {

  selectedj:Jiraff
  bgRND:string
  constructor() { }

  ngOnInit(): void {
   
  
  }

  deletej(jid:number){
    console.log("jid " + jid);
    
    let index = this.jiraffsarray.findIndex(_j => _j.id == jid)
    this.jiraffsarray.splice(index, 1);
  }

//date
jiraffsarray:Jiraff[] =[
  {id:1,name:'yoel',height:1.00,color:'red',isBossy:false},
  {id:2,name:'chaim',height:7.25,color:'blue',isBossy:false},
  {id:3,name:'yoel',height:1.4,color:'mediumspringgreen',isBossy:true},
  {id:4,name:'',height:8.20,color:'violet',isBossy:false},
  {id:5,name:'yoel',height:3.98,color:'darkturquoise',isBossy:false},
  {id:6,name:'yoel',height:8.05,color:'coral',isBossy:true},
  {id:7,name:'yoel',height:7.25,color:'pink',isBossy:false},
  {id:8,name:'yoel',height:7.25,color:'brown',isBossy:false},
  {id:9,name:'yoel',height:1.4,color:'red',isBossy:true},
  {id:10,name:'yoel',height:8.05,color:'mediumturquoise',isBossy:false},
  {id:11,name:'yoel',height:7.25,color:'mediumslateblue',isBossy:true},
]

}


export class Jiraff {
 id:number
 name:string
 height:number
 color:string
 isBossy:boolean
}


