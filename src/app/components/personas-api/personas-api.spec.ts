import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasApi } from './personas-api';

describe('PersonasApi', () => {
  let component: PersonasApi;
  let fixture: ComponentFixture<PersonasApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
