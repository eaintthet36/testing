import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.css']
})
export class ChildHomeComponent implements OnInit{
 
  // @Input('name') testName:any
  @Input() name:any
  @Input('listData') lists:any

  @Output() removerHandler = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.lists)
  }

  remove(index:any){
      this.removerHandler.emit(index)
  }
}
