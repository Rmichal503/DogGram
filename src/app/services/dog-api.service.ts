import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  dogUrlImg:string;
  dogName:string
  constructor(private http:HttpClient) { }
  getDogApiData(){
    return this.http.get<any>('https://dog.ceo/api/breeds/list/all');
  }
  getDogImg(name:string){
    this.dogName = name;
    name = name.charAt(0).toLocaleLowerCase()+name.slice(1);
    if(name.indexOf(' ')===-1){
      return this.http.get<any>(`https://dog.ceo/api/breed/${name}/images/random`)
    }
    name = name.slice(0,name.indexOf(' '))
    console.log(name)
    return this.http.get<any>(`https://dog.ceo/api/breed/${name}/images/random`)
  }
}
