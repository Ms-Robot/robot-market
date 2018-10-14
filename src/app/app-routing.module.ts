import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RobotListComponent } from './main/robot-list/robot-list.component';
import { RobotTableComponent } from './main/robot-table/robot-table.component';
import { HomeComponent } from './main/home/home.component';
import { AboutUsComponent } from './main/about-us/about-us.component';

const routes: Routes = [
    {path: '', component: MainComponent, children: [
        { path: 'robot-list', component: RobotListComponent},
        { path: 'home', component: HomeComponent},
        { path: 'about-us', component: AboutUsComponent},
        { path: '', redirectTo: '/robot-list', pathMatch: 'full' }
    ]},
    
    {path: '**', redirectTo: ''},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}