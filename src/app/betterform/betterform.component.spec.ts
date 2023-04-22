import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterformComponent } from './betterform.component';

describe('BetterformComponent', () => {
  let component: BetterformComponent;
  let fixture: ComponentFixture<BetterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
