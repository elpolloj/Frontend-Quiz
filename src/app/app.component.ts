import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoadingService } from './loading.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { slideInAnimation } from './animation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, MatProgressSpinnerModule],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'angular-quiz';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
