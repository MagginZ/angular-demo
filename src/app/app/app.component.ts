import { Component } from '@angular/core';
import { Hero } from '../hero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // myHero = 'Windstorm';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // 使用声明的Hero类
  heroes = [
    new Hero(1, 'WindSrorm'),
    new Hero (2, 'Bombasto'),
    new Hero (3, 'Magneta')
  ]
  myHero = this.heroes[0].name
  // 声明
  // title: string;
  // myHero: string;
  // // 使用构造初始化
  // constructor () {
  //   this.title = 'Tour of Heroes';
  //   this.myHero = this.heroes[0]
  // }
  deleteHero (item) {
    console.log("delete:" + item.name)
  }
}
