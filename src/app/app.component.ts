import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { TranslateService } from '@ngx-translate/core';

import { RadioPage } from '../pages/radio/radio';

@Component( {
    templateUrl: 'app.html'
} )

export class FbrgSmnApp {

    @ViewChild( Nav ) public nav: Nav;
    public rootPage: any = TabsPage;
    public pages: Array<{title: string, component: any, tabIndex: number }>;

    /**
     * The Main App Class
     * @param {Platform} platform
     * @param {StatusBar} statusBar
     * @param {SplashScreen} splashScreen
     * @param {GoogleAnalytics} ga
     * @param {TranslateService} translate
     */
    constructor ( private platform: Platform,
                  private statusBar: StatusBar,
                  private splashScreen: SplashScreen,
                  private ga: GoogleAnalytics,
                  private translate: TranslateService ) {
        platform.ready().then( () => {
            if ( platform.is( 'cordova' ) ) {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
            }

            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang( 'fr' );
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use( 'fr' );

            if ( platform.is( 'cordova' ) ) {
                // Connect to the native Google's Universal Analytics SDK 3.0
                this.ga.startTrackerWithId( 'UA-31158767-3' )
                    .then( () => {
                        console.log( 'Google analytics is ready now' );
                        // The component is ready and you can call any method here
                        this.ga.debugMode();
                        this.ga.setAllowIDFACollection( true );
                        this.ga.enableUncaughtExceptionReporting( true );
                    } )
                    .catch( ( e ) => console.warn( 'Error starting GoogleAnalytics', e ) );
            }

        } );

        this.pages = [
            { title: 'Radio', component: RadioPage, tabIndex: 0 }
        ];
    }

    /**
     * openPage method
     * @param page
     */
    public openPage ( page ) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.push(page.component);
        // The active page is
        this.nav.getActiveChildNav().select( page.tabIndex );
    }
}
