import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThemeComponent } from './theme/theme.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing-module';
import { CardComponent } from './card/card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader-interceptor.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ThemeComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
