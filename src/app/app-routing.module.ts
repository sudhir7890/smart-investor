import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { ForecastComponent } from './about/forecast/forecast.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [

    //Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
           { path: '', component: HomeComponent, pathMatch: 'full'},
          // { path: 'about', component: AboutComponent },
          { path: 'crypto/:id', component: AboutComponent , children: [
            { path: 'histroy', component: HistoryComponent, data: {label: 'histroy' }},
            { path: 'forecast', component: ForecastComponent,  data: {label: 'forecast' }}
          ]}
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent }
          // { path: 'profile', component: ProfileComponent }
        ]
    },

    //no layout routes
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


