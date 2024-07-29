import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then((_ref) => {
    // console.log(_ref);
  })
  .catch((err: unknown) => {
    console.error(err);
  });
