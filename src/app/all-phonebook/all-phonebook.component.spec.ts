import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhonebookComponent } from './all-phonebook.component';

describe('AllPhonebookComponent', () => {
  let component: AllPhonebookComponent;
  let fixture: ComponentFixture<AllPhonebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPhonebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
