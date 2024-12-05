import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrstvpageComponent } from './prstvpage.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Test
describe('PrstvpageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrstvpageComponent],  // Import the standalone component
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: of({}) } }  // Mock the ActivatedRoute with an empty paramMap
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PrstvpageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});