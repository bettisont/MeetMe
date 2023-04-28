import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeInputPageComponent } from './postcode-input-page.component';

describe('PostcodeInputPageComponent', () => {
  let component: PostcodeInputPageComponent;
  let fixture: ComponentFixture<PostcodeInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcodeInputPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
