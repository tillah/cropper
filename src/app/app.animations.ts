import {animate, animateChild, animation, group, query, style, transition, trigger} from '@angular/animations';

export const transAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

// Routable animations
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> BackgroundImage', [
            style({position: 'relative'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({position: 'relative'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({[direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%'}))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%'}))
            ]),
        ])
    ];
}

export const slider = trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
]);

export const fader = trigger('routeAnimations', [
        transition('* <=> *', [
            // Set a default  style for enter and leave
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ], { optional: true }),
            // Animate the new page in
            query(':enter', [
                animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            ], { optional: true })
        ]),
    ]);
