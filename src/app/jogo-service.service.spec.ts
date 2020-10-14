import { TestBed } from '@angular/core/testing';

import { JogoServiceService } from './jogo-service.service';

describe('JogoServiceService', () => {
  let service: JogoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
