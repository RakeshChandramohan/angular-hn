/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

/* Third party Modules */
import { AppRoutingModule } from './app-routing.module';

/* My Modules */
import { CoreModule } from './core/core.module';
import { FeedsModule } from './feeds/feeds.module';
import { ItemDetailsModule } from "./item-details/item-details.module";
import { ServicesModule } from "app/shared/services/services.module";
 

/* My Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //  FormsModule,
    // HttpModule,
    CoreModule,
    AppRoutingModule,
    FeedsModule,
    ItemDetailsModule,
    ServicesModule.forRoot()
  ],
  //providers: [], // Providers used for tunning service should one per project
  bootstrap: [AppComponent]
})
export class AppModule { }
