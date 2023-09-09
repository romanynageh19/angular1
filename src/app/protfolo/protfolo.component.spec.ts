import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfoloComponent } from './protfolo.component';

describe('ProtfoloComponent', () => {
  let component: ProtfoloComponent;
  let fixture: ComponentFixture<ProtfoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtfoloComponent]
    });
    fixture = TestBed.createComponent(ProtfoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
