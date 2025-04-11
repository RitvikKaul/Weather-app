import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechToTextComponent } from './speech-to-text.component';

describe('SpeechToTextComponent', () => {
  let component: SpeechToTextComponent;
  let fixture: ComponentFixture<SpeechToTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechToTextComponent]
    });
    fixture = TestBed.createComponent(SpeechToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
