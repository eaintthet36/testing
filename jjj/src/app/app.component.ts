import { Component, OnInit } from '@angular/core';
import { HomeService } from './home/home.service';
// import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'testing1';

  items: any[] = []
  products: any[] =[]
  categories: any[] = []
  inputData!: any;
  product: any;
  showDetail: boolean = false

  ngOnInit(): void {
    this.fetchAll()
    this.fetchCategory()
  }
 
  constructor(public _homeService:HomeService){
  }

  fetchAll(){
    this._homeService.fetch().subscribe(
      (data: any)=>{
        this.products = data
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
      },
      (eror:any)=> {
        console.log(eror)
      }
    )
  }


  detailTitle: string = ''
  detailDatas: any[] = []

  addHandler() {  
    if (this.inputData === '' || this.inputData === undefined) {
      this.showDetail = false;
      this.fetchAll();
      this.fetchCategory();
    } else {
      this.showDetail = true;
      const result = this.products.filter(data => data.category === this.inputData.toLowerCase());
      this.detailDatas = result;
      console.log(this.detailDatas, '-ppppppp');
      this.detailTitle = result[0]?.category; 
    }
    this.inputData = '';
  }
  

//   fetchAll(){
//     this._appService.fetch().subscribe(
//       (data: any)=>{
//         this.products = data
//         console.log(data)
//       },
//       (eror:any)=> {
//         console.log(eror)
//       }
//     )
//   }

//   fetchCategory(){
//     this._appService.getCategory().subscribe(
//       (data: any)=>{
//         this.categories = data
//         console.log(data)
//       },
//       (eror:any)=> {
//         console.log(eror)
//       }
//     )
//   }
 }
