import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CityComponent } from './pages/city/city.component';
import { TitleComponent } from './components/title/title.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CityComponent,
    TitleComponent,
    WeatherCardComponent,
    CityCardComponent,
    ListCitiesComponent,
    CitiesComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
