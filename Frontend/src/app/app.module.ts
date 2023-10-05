import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER} from "ngx-ui-loader";
import {SignupComponent} from "./signup/signup.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text:"Loading...",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  bgsColor:"#259b35",
  fgsColor:"#40a848",
  fgsType:SPINNER.squareJellyBox,
  fgsSize:100,
  hasProgressBar:false
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    SignupComponent,
    AppSidebarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
