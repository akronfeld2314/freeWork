import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import { MoneyOutputComponent } from './money-output/money-output.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyInputComponent,
    MoneyOutputComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'money-input', component: MoneyInputComponent},
      {path: 'money-output', component: MoneyOutputComponent},
      {path: '', redirectTo: '/money-input', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
