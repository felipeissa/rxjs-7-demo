import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CurrentFacadeService } from './current-facade.service';

describe('CurrentFacadeService', () => {
  let service: CurrentFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(CurrentFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
