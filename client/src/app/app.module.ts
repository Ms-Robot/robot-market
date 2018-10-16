import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { RobotListComponent } from './main/robot-list/robot-list.component';

import { HomeComponent } from './main/home/home.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { NewRobotFormComponent } from './shared/components/new-robot-form/new-robot-form.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRobotFormComponent,
    MainComponent,
    RobotListComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
