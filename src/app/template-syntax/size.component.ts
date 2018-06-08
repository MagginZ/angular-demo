import {NgModule, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './size.component.html'
})
export class SizeComponent {
 size= 18;
 name= "曾";

 dec () {
     this.size --
 }
 inc () {
     this.size ++
 }
}