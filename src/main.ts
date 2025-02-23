import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperBundle} from 'swiper/element/bundle';
import { provideHttpClient } from '@angular/common/http';



registerSwiperBundle();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
