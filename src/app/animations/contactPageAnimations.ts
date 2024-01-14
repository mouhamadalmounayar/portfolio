import { transition, trigger , style, animate} from "@angular/animations";

export const zoomOut = trigger('zoomOut', [
    transition('* => *', [
        style({
            opacity : '0',
            transform : 'scale(1.5)'
        }),
        animate('500ms ease' , style({
            opacity : '1',
            transform : 'scale(1)'
        }))
    ])
])