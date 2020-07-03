import { TestBed } from '@angular/core/testing';

import { DashcoursesService } from './dashcourses.service';

describe('DashcoursesService', () => {
  let service: DashcoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashcoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
