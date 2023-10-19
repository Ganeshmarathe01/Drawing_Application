import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingComponent } from './drawing/drawing.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

const config:SocketIoConfig = {url:'http://localhost:3001',options:{}};

const routes: Routes=[
  {path:'drawing',component: DrawingComponent},
  {path:'pagetwo',component: PagetwoComponent},
  {path:'',redirectTo:'/drawing',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
