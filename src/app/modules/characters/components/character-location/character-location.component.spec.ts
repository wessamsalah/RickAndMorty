import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLocationComponent } from './character-location.component';

describe('CharacterLocationComponent', () => {
  let component: CharacterLocationComponent;
  let fixture: ComponentFixture<CharacterLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
