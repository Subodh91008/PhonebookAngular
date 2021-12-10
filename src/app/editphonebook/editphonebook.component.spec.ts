import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphonebookComponent } from './editphonebook.component';

describe('EditphonebookComponent', () => {
  let component: EditphonebookComponent;
  let fixture: ComponentFixture<EditphonebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditphonebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditphonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
