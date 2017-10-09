import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';
import {AppComponent} from './core/containers/app/app.component';
import {reducers} from './core/reducers/index';
import {StoreModule} from '@ngrx/store';
import {metaReducers} from './reducers/index';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
