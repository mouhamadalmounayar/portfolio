import { transition, trigger, query, style, stagger, animate } from "@angular/animations";

export const projectsAnimation = trigger('stagger', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'scale(1.1)' }),
            stagger(100, [
                animate('500ms ease', style({ opacity: 1, transform: 'scale(1)' })),
            ])
        ], { optional: true }) // Make the query optional
    ])
]);
