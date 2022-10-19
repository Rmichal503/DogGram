import { Component, DoCheck } from '@angular/core';
import { DogApiService } from 'src/app/services/dog-api.service';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.scss']
})
export class DogViewComponent implements DoCheck {

  constructor(private dogApi:DogApiService) { }
  dogUrl:string
  dogName:string
  wikiLink:string
  ngDoCheck(): void {
    this.dogUrl = this.dogApi.dogUrlImg
    this.dogName = this.dogApi.dogName
    this.wikiLink = `https://en.wikipedia.org/wiki/${this.dogName}`
  }
}
