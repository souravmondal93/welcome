import { TestBed } from '@angular/core/testing';

import { AudioHelperService } from './audio-helper.service';

describe('AudioHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioHelperService = TestBed.get(AudioHelperService);
    expect(service).toBeTruthy();
  });
});
