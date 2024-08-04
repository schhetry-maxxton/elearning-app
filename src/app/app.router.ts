import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUSComponent } from "./about-us/about-us.component";
import { LoginComponent } from "./login/login.component";
import { ContactUSComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { SignUPComponent } from "./sign-up/sign-up.component";
import { CoursesComponent } from "./courses/courses.component";
import { TComponent } from "./t/t.component";
import { DataScienceComponent } from "./data-science/data-science.component";
import { PmpComponent } from "./pmp/pmp.component";
import { MeanComponent } from "./mean/mean.component";
import { MernComponent } from "./mern/mern.component";
import { DataVisualisationComponent } from "./data-visualisation/data-visualisation.component";

  
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent},
    { path: 'aboutUS', component:  AboutUSComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'contactUS', component:  ContactUSComponent},
    { path: 'footer', component:  FooterComponent},
    { path: 'signUP', component:  SignUPComponent},
    { path: 'carousel', component:  CarouselComponent},
    { path: 'courses', component:  CoursesComponent},
    { path: 't', component:  TComponent},
    { path: 'mern', component:  MernComponent},
    { path: 'dataVisualization', component:  DataVisualisationComponent},
    { path: 'pmp', component:  PmpComponent},
    { path: 'dataScience', component:  DataScienceComponent},
    { path: 'mean', component:  MeanComponent},
];

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);