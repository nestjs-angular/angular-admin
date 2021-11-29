import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.all().subscribe(
      orders => {
        this.orders = orders;
      }
    );
  }
}
