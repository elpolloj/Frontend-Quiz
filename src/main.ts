import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialProviders } from './app/material.module';
import { ROUTES } from './app/app.routes';
import { loadingInterceptor } from './app/loading.interceptor';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideRouter(ROUTES),
    materialProviders,
    importProvidersFrom(BrowserAnimationsModule),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
})
.catch(err => console.error(err));
