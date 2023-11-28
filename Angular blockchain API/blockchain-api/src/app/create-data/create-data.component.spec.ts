import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataComponent } from './create-data.component';

describe('CreateDataComponent', () => {
  let component: CreateDataComponent;
  let fixture: ComponentFixture<CreateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDataComponent]
    });
    fixture = TestBed.createComponent(CreateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
