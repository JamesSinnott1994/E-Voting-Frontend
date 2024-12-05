import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HistorypageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent],  // Import the standalone component
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: of({}) } }  // Mock the ActivatedRoute with an empty paramMap
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});