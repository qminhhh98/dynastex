import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {DataEffects} from "./state/effects/data.effects";
import {dataReducer} from "./state/reducers/data.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({dataReducer}, {}),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
