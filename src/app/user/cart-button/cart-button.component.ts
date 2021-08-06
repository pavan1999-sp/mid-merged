import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor(public cs :CartService) { }

  @Input() title:any
  @Output() displayNotification = new EventEmitter()

  ngOnInit(): void {
  }

  AddToCart(){
    console.log(this.title);
    this.displayNotification.emit('true')
    
  }

}
