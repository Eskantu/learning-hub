import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UITopBarComponent } from './ui-top-bar.component';

describe('UITopBarComponent', () => {
  let component: UITopBarComponent;
  let fixture: ComponentFixture<UITopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UITopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UITopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
