import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { GlobalService } from './global-service';
import { InitService } from './init-service';

export const CustomProviders = [
    GlobalService,
    InitService
];

export const ExternalProviders = [
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
];