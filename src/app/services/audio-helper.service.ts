import { Injectable } from '@angular/core';

import { loadingSpeech, errorText } from '../constants/audio-strings';

@Injectable({
  providedIn: 'root'
})
export class AudioHelperService {

  constructor() { }

  speakText(speechText: string) {
    new Audio('data:audio/mp3;base64,' + speechText).play();
  }

  speakLoaderText() {
    this.speakText(loadingSpeech);
  }

  speakErrorText() {
    this.speakText(errorText);
  }
}
