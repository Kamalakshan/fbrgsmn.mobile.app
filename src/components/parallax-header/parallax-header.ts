import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive( {
    host: {
        '(ionScroll)': 'onContentScroll($event)',
        '(window:resize)': 'onWindowResize($event)'
    },
    selector: '[parallax-header]'
} )
export class ParallaxHeader {

    private header: any;
    private headerHeight: any;
    private translateAmt: any;
    private scaleAmt: any;

    constructor ( public element: ElementRef, public renderer: Renderer2 ) {}

    protected ngOnInit () {

        const content = this.element.nativeElement.getElementsByClassName( 'scroll-content' )[ 0 ];
        this.header = content.getElementsByClassName( 'header-image' )[0];
        const mainContent = content.getElementsByClassName( 'main-content' )[0];

        this.headerHeight = this.header.clientHeight;

        // this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        // this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setStyle( mainContent, 'position', 'absolute' );

    }

    private onWindowResize ( ev ) {
        this.headerHeight = this.header.clientHeight;
    }

    private onContentScroll ( ev ) {

        console.log( this.element.nativeElement.getElementsByClassName( 'scroll-content' )[ 0 ].scrollTop );

        ev.domWrite( () => {
            this.updateParallaxHeader( ev );
        } );

    }

    private updateParallaxHeader ( ev ) {

        if ( ev.scrollTop >= 0 ) {
            this.translateAmt = ev.scrollTop / 4;
            this.scaleAmt = 1;
        } else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }

        this.renderer.setStyle(
            this.header,
            'webkitTransform',
            `translate3d(0, ${ this.translateAmt }px, 0) scale(${ this.scaleAmt }, ${ this.scaleAmt })`
        );
    }
}
