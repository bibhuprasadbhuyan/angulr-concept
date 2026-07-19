import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyniamicFormComponent } from './dyniamic-form.component';

describe('DyniamicFormComponent', () => {
  let component: DyniamicFormComponent;
  let fixture: ComponentFixture<DyniamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyniamicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyniamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
