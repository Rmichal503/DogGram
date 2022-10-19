import { Component, OnInit } from '@angular/core';
import { DogApiService } from 'src/app/services/dog-api.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  
  constructor(private dogApi:DogApiService) { }
  dogData:any
  ngOnInit(): void {
    this.dogApi.getDogApiData().subscribe(res=>{
      const dogs:any =[]
      for (const key in res.message) {
        if (Object.hasOwnProperty.call(res.message, key)) {
          const element = res.message[key];
          if(element.length===0){
            dogs.push(this.capFirstLetter(key))
          }
          element.forEach((el:any) => {
            dogs.push(`${this.capFirstLetter(key)} ${el}`)
          });
        }
      }
      return this.dogData = dogs
    })
  }
  capFirstLetter(string:string){
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
  }
  dogImg(name:string){
    this.dogApi.getDogImg(name).subscribe(res=>{
      this.dogApi.dogUrlImg = res.message
    })
  }
}


