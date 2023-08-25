import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppWriteConfigToken, AppWriteService, appWriteConfig } from '@org/app-write';
import { ROUTES } from './route';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AppWriteConfigToken,
      useValue: {
        endpoint: 'https://cloud.appwrite.io/v1',
        projectId: '64e79d99b5e911b60004'
      }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appWriteConfig,
      deps: [AppWriteService],
      multi: true
    },
    provideHttpClient(),
    provideRouter(ROUTES),
    provideAnimations()
  ],
};
