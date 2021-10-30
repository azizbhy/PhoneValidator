import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Country } from 'src/app/model/Code';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiFormComponent } from './api-form.component';
import { FormsModule } from '@angular/forms';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatListHarness} from '@angular/material/list/testing'
import {By} from "@angular/platform-browser";

let loader: HarnessLoader;

describe('ApiFormComponent', () => {
  let component: ApiFormComponent;
  let fixture: ComponentFixture<ApiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiFormComponent ],
      imports:[HttpClientTestingModule,
        FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPhoneValidation() Should be a defined function', () => {
    expect(component.getPhoneValidation).toBeDefined();
  });

  it('getCodes() Should be a defined function', () => {
    expect(component.CorrectNumber).toBeDefined();
  });

  it('getCodes() Should be a defined function', () => {
    expect(component.otherCountry).toBeDefined();
  });


 



});
