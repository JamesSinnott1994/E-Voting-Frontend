import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrstvpageComponent } from './prstvpage.component';

describe('PrstvpageComponent', () => {
  let component: PrstvpageComponent;
  let fixture: ComponentFixture<PrstvpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrstvpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrstvpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
