import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists:any[] = []
  input1?:string

  products: any[] = []
  categories: any[] = []
  status?:string = 'approved'
product: any;

  constructor(public _homeService:HomeService){
  }

  ngOnInit(): void {
    this.fetchAll()
    this.fetchCategory()
    this.lists = ['apple', 'orange']
    console.log('first render')
    
  }

  fetchAll(){
    this._homeService.fetch().subscribe(
      (data: any)=>{
        this.products = data
        console.log(data)
      },
      (eror:any)=> {
        console.log(eror)
      }
    )
  }

  fetchCategory(){
    this._homeService.getCategory().subscribe(
      (data: any)=>{
        this.categories = data
        console.log(data)
      },
      (eror:any)=> {
        console.log(eror)
      }
    )
  }
  // addHandler(){
  //   console.log(this.input)
  //   this.lists.push(this.input)
  //   this.input = ''
  //   console.log(this.lists)
  // }

  removerHandler(index: number){
    this.lists = this.lists.filter((list,i)=> i  !== index )
  }


  
}
