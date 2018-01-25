import { Injectable } from '@angular/core';
import { GlobalService } from './global-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InitService {

    constructor ( public http: HttpClient ) {}

    public getInitData () {
        if ( GlobalService.DEV_MODE ) {
            return this.getFile( GlobalService.URL_INFO_DEV );
        }

        return new Promise( ( resolve, reject ) => {
            return this.getFile( GlobalService.URL_INFO_PROD )
                .then( data => resolve( data ) )
                .catch( error => {
                    return this.getFile( GlobalService.URL_INFO_DEV )
                        .then( data => resolve( {
                            content: data,
                            error: `Error when loading ${ GlobalService.URL_INFO_PROD }: ${error}`
                        } ) )
                        .catch( err => reject( [ error.message, err.message ] ) );
                } );
        } );
    }

    private getFile ( url ) {
        return new Promise( ( resolve, reject ) => {
            this.http.get( url ).subscribe( data => resolve( data ), ( error ) => reject( error ) );
        } );
    }
}
