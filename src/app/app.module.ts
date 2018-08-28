import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { DetailPage } from '../pages/detail/detail';
import { SearchPage } from '../pages/search/search';
import { PoradniePage } from '../pages/poradnie/poradnie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    SearchPage,
    PoradniePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }),
    HttpClientModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    SearchPage,
    PoradniePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider, SocialSharing
  ]
})
export class AppModule {}
