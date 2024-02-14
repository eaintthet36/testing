import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  lists:any[] = []
  input?:String

  addHandler(){
    this.lists.push(this.input)
    console.log(this.lists)
    this.input = ''
  }
  rRemove(index:number){
    this.lists = this.lists.filter((list,i)=> i  !== index)
  }
  
}
