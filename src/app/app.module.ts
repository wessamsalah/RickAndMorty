import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

 
//Components
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

//Modules
import { CharacterModule } from './modules/characters/character.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    CharacterModule,
    AppRoutingModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
