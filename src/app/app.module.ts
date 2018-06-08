import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

import { AppComponent } from './app/app.component';
import { SizeComponent } from './template-syntax/size.component'
import { HookFunctionComponent } from './hook-func/index.component'
import { HeroChildComponent } from './hero-child/hero-child.component'
import { HeroParentComponent} from './hero-child/hero-parent.component'
import { NameChildComponent} from './hero-child/name-child.component';
import { NameParentComponent} from './hero-child/name-parent.component';
import {VersionParentComponent} from './hero-child/version-parent.component';
import {VersionChildComponent} from './hero-child/version-child.component';

// 声明路由
const appRoutes: Routes = [
  {path: 'size', component: SizeComponent, data: {title: 'size-demo'}},
  {path: 'hook', component: HookFunctionComponent, data: {title: 'hook-function'}},
  {path: 'child', component: HeroParentComponent, data: {title: '父组件'}},
  {path: 'name-parent', component: NameParentComponent, data: {title: 'name-parent'}},
  {path: 'version-parent', component: VersionParentComponent, data: {title: 'version-parent'}}
]
@NgModule({
  declarations: [ // 声明对象表
    AppComponent,
    SizeComponent,
    HookFunctionComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  // exports: [] 导出表。那些能在其它模块的组件模板中使用的可声明对象的子集。
  imports: [ // 导入表。那些导出了本模块中的组件模板所需的类的其它模块。
    // 导入路由
    RouterModule.forRoot (
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [], // 指定服务
  bootstrap: [AppComponent] // 应用主视图
})
export class AppModule { }
