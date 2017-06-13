import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HackernewsApiService } from 'app/shared/services/hackernews-api.service'
@NgModule({
  imports: [
    HttpModule
  ]
})
export class ServicesModule {
  /*  It can be used in Base/Root/App modules  */
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        HackernewsApiService
      ]
    };
  }
}
export {
  HackernewsApiService
}