import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";

// Material Modules

import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatInputModule,
  MatSnackBarModule,
  MatDividerModule,
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSortModule,
  MatListModule
} from "@angular/material";

import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { AppHeaderComponent } from "./layout/app-header/app-header.component";
import { AppLayoutComponent } from "./layout/app-layout/app-layout.component";
import { SiteFooterComponent } from "./layout/site-footer/site-footer.component";
import { SiteHeaderComponent } from "./layout/site-header/site-header.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";

import { routing } from "./app-routing.module";
import { DataTableComponent } from "./home/data-table/data-table.component";
import { HistoryComponent } from './about/history/history.component';
import { ForecastComponent } from './about/forecast/forecast.component';
import { ChartsComponent } from './about/charts/charts.component';
import { ExchangesComponent } from './about/exchanges/exchanges.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    routing,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    FlexLayoutModule,

    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    DataTableComponent,
    HistoryComponent,
    ForecastComponent,
    ChartsComponent,
    ExchangesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
