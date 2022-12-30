import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '5972ce3d-7364-4dd3-85a9-cec7a2897145',
    clientToken: 'pubaa588e9b6f4d22855b842c44dbaf4cba',
    site: 'datadoghq.com',
    service:'cloudtodo',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 100,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();