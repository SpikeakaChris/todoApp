import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainnav } from './mainnav';

describe('Mainnav', () => {
  let component: Mainnav;
  let fixture: ComponentFixture<Mainnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainnav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
