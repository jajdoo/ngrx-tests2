import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './containers/app/app.component';
import {HateStasStatusComponent} from './components/hate-stas-status/hate-stas-status.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers/index';

export const COMPONENTS = [
  AppComponent,
  HateStasStatusComponent
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
