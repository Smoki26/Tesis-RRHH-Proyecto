import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificacionInformeComponent } from './calificacion-informe.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalificacionInformeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalificacionInformeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ngx-charts'`, () => {
    const fixture = TestBed.createComponent(CalificacionInformeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ngx-charts');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalificacionInformeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-ngx-charts app is running!');
  });
});
