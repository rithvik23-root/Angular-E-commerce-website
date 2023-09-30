import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { ShippingComponent } from './shipping.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
providers:[CartService ,OrderService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
