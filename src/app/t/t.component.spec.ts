import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TComponent } from './t.component';

describe('TComponent', () => {
  let component: TComponent;
  let fixture: ComponentFixture<TComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
