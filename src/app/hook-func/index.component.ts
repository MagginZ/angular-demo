import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
  } from '@angular/core';
  import { Component } from '@angular/core';
  
  
@Component({
  selector: 'app-root',
  template: `
  <input [(ngModel)] = birthday>
  <h2>your birthday is {{birthday}}</h2>
  `
})
export class HookFunctionComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    birthday = '1997821';
    // methods:
    ngOnInit () {
        console.log('ngOnInit')
    }
    ngDoCheck () {
        console.log('ngDoCheck')
    }
    ngOnChanges (changes) {
        console.log('ngOnChanges')
    }
    ngOnDestroy () {
        console.log('ngOnDestroy')
    }
}
