import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag:boolean = true;
  modelimg:string = '';
srcs:string[] = [
  '../../assets/img/poert1.png',
  '../../assets/img/port2.png',
  '../../assets/img/port3.png',
  '../../assets/img/poert1.png',
  '../../assets/img/port2.png',
  '../../assets/img/port3.png',
]
hidemodel(element:EventTarget|null,img:HTMLImageElement):void{
  if(element == img)return;
  this.flag = true;
}
}
