import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { routes } from './app.router';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TComponent } from './t/t.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { AddressComponent } from './address/address.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { Card1Component } from './card1/card1.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { PmpComponent } from './pmp/pmp.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { DataVisualisationComponent } from './data-visualisation/data-visualisation.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    SignUPComponent,
    ContactUSComponent,
    CarouselComponent,
    FaqComponent,
    FooterComponent,
    CardsComponent,
    AboutUSComponent,
    CoursesComponent,
    SearchComponent,
    TComponent,
    GalleryComponent,
    MapComponent,
    AddressComponent,
    AboutCardComponent,
    Card1Component,
    CardContainerComponent,
    PmpComponent,
    DataScienceComponent,
    GoogleSigninComponent,
    DataVisualisationComponent,
    MeanComponent,
    MernComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
