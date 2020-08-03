import { Component, OnInit } from '@angular/core';

import { PromotionService } from '../shared/promotion.service'
import { Promotion } from '../shared/promotion.model'

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
  providers: [PromotionService]
})
export class PromotionComponent implements OnInit {

  constructor(public promotionService: PromotionService) { }

  ngOnInit(): void {
    this.refreshPromotionList()
  }

  refreshPromotionList() {
    this.promotionService.getPromotionList().subscribe((res) => {
      this.promotionService.promotions = res as Promotion[]
    })
  }

}
