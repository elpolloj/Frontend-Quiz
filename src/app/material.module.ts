import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

export const materialProviders = importProvidersFrom(
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  MatPaginatorModule
);
