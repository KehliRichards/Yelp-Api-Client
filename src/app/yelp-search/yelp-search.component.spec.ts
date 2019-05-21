import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpSearchComponent } from './yelp-search.component';

describe('YelpSearchComponent', () => {
  let component: YelpSearchComponent;
  let fixture: ComponentFixture<YelpSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
