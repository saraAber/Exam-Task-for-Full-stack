import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [
    NoopAnimationsModule,
    provideServerRendering()
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
