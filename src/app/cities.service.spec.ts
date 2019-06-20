import { TestBed, inject  } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });
  
  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
