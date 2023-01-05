import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JessicaComponent } from './jessica.component';

describe('JessicaComponent', () => {
  let component: JessicaComponent;
  let fixture: ComponentFixture<JessicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JessicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JessicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
