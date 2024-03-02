import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { DetailDisplayComponent } from './detail-display/detail-display.component';  

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DetailDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,  
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
