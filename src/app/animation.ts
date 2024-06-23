import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
  state('*', style({ transform: 'translateX(0)', opacity: 1 })),
  transition(':enter', [
    animate('0.5s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);
