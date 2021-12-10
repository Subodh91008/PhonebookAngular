import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephonebookComponent } from './createphonebook.component';

describe('CreatephonebookComponent', () => {
  let component: CreatephonebookComponent;
  let fixture: ComponentFixture<CreatephonebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephonebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
