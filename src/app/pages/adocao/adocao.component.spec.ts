import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocaoComponent } from './adocao.component';

describe('AdocaoComponent', () => {
  let component: AdocaoComponent;
  let fixture: ComponentFixture<AdocaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdocaoComponent]
    });
    fixture = TestBed.createComponent(AdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
