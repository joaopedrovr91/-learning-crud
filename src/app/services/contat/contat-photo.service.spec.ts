import { TestBed } from '@angular/core/testing';

import { ContatPhotoService } from './contat-photo.service';

describe('ContatPhotoService', () => {
  let service: ContatPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
