import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  private _apiKey: string = 'AIzaSyCkhXcxDw7YxLjUi3VvszfIfptcxVQwgoc';
  private _visionApiUrl: string = 'https://vision.googleapis.com/v1/images:annotate';
  private _speechApiUrl: string = 'https://texttospeech.googleapis.com/v1beta1/text:synthesize';
  private _imageData: string = '';
  private _requestPayload = {
    requests: [
      {
        features: {
          maxResults: 50,
          type: 'DOCUMENT_TEXT_DETECTION'
        },
        image: {
          content: ''
        }
      }
    ]
  };
  private _speechRequestPayload = {
    audioConfig: {
      audioEncoding: 'MP3',
      pitch: 0.00,
      speakingRate: 1.00
    },
    input: {
      text: ''
    },
    voice: {
      languageCode: 'en-US',
      name: 'en-US-Wavenet-D'
    }
  }

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  onFileInput(event) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target['files'][0]);

			reader.onload = (onloadEvent:any) => {
        if (onloadEvent.target.result) {
          this._imageData = onloadEvent.target.result.substring(onloadEvent.target.result.indexOf(',') + 1);
          this._requestPayload.requests[0].image.content = this._imageData;
          console.log(this._imageData);
        }
      };
		}
  }

  uploadImage() {
    const httpOptions = { 
      params: new HttpParams()
        .set('key', this._apiKey),
    };
    this._http.post(this._visionApiUrl, this._requestPayload, httpOptions)
    .subscribe((response: any) => {
      let speechArray = response.responses[0].fullTextAnnotation.text.replace(/[^A-Za-z\s]/gi, '').replace(/\n/g, ' ').trim().split(' ');
      console.log('Vision API Response', response);
      console.log('User', speechArray);
      const location = speechArray.splice(-1,1);
      const speechText = `Welcome ${speechArray.join(' ')} from ${location}`
      this._speechRequestPayload.input.text = speechText;

      this._http.post(this._speechApiUrl, this._speechRequestPayload, httpOptions)
      .subscribe((response: any) => {
        console.log('Speech API Response', response);
        new Audio('data:audio/mp3;base64,' + response.audioContent).play();
      }, error => {
        console.error('Speech API Error', error);
      });

    }, error => {
      console.error('Vision API Error', error);
    });
  }
}
