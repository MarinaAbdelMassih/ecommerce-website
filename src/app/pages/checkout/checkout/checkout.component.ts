import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckoutService } from '../../../core/services/checkout.service';
import { CartManager } from '../../../core/managers/cart.manager';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../core/helpers/localStorage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PromocodeComponent } from '../promocode/promocode.component';
//import{PromocodeComponent} from '../promocode/promocode.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  
  @Output() showShippingInfo: EventEmitter<any> = new EventEmitter<any>();
  @Input() shippingInformation;
  promoCode = '';

  constructor(private checkoutService: CheckoutService ,
    public cartManager: CartManager,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog,
    public localStorage: LocalStorage) { }

    
   promocode()
   {
     this.dialog.open(PromocodeComponent ,{
       width: '70vw',
       maxWidth: '100vw',
       autoFocus: false,
     })
    }
  ngOnInit(): void {
    
   }
    
  }

