import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { ExploreComponent } from './explore/explore.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { LabsComponent } from './labs/labs.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProgressComponent } from './dashboard/progress/progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { AccessibilityComponent } from './dashboard/accessibility/accessibility.component';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Landing2Component } from './landing2/landing2.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectsComponent } from './projects/projects.component';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CarouselComponent,
    HomeComponent,
    LandingComponent,
    CreateProjectComponent,
    TopNavMenuComponent,
    ExploreComponent,
    LabsComponent,
    ChallengesComponent,
    DashboardComponent,
    ProgressComponent,
    AccessibilityComponent,
    Landing2Component,
    ResourcesComponent,
    ProjectsComponent,
    TopMenuBarComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    CarouselModule.forRoot(),ToastModule,
    SocialLoginModule,GoogleSigninButtonModule,
    FontAwesomeModule, AutoCompleteModule,
    FormsModule, HttpClientModule,ButtonModule,
    AppRoutingModule, NgChartsModule,TabsModule,
    OverlayPanelModule, ToggleButtonModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "toFixed": 0,
      "maxPercent": 1000,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "startFromZero": false,
      "lazy": true}),
      HighchartsChartModule       
  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '960808675053-rd9ldu64j1a8eumbaa7bopes3fucq1sq.apps.googleusercontent.com'
            )
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }, TabsetConfig
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
  exports: [GoogleSigninButtonModule, FontAwesomeModule]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
