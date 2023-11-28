import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskConnectButtonComponent } from './metamask-connect-button.component';

describe('MetamaskConnectButtonComponent', () => {
  let component: MetamaskConnectButtonComponent;
  let fixture: ComponentFixture<MetamaskConnectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamaskConnectButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetamaskConnectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
