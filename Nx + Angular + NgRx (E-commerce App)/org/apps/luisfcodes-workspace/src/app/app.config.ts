import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects, categoryFeature } from '@org/category';
import { userFeature, loadUserProfile } from '@org/commom/store';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation(), withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    provideAuth0({
      domain: 'dev-xhdsa5xywac35dsj.us.auth0.com',
      clientId: 'tnN2kRHYIAB2AXEOh8nEyPhcyDA8VO9x',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    }),
    provideStore(),
    provideState(categoryFeature),
    provideState(userFeature),
    provideEffects([CategoryEffects, { loadUserProfile }]),
  ],
};
