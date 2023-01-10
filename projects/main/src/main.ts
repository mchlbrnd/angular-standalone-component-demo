import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppService } from './app/app.service';
import routes from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    AppService, // application wide AppService
  ],
}).catch((e) => console.error(e));
