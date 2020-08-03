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

  search: string
  show: any = 1
  filter: any
  filterId: any
  filterText: any
  PROMOTIONS: any
  constructor(public promotionService: PromotionService) { }

  ngOnInit(): void {
    this.refreshPromotionList()

  }

  refreshPromotionList() {
    this.promotionService.getPromotionList().subscribe((res) => {
      this.promotionService.promotions = res as Promotion[]
    })
  }
  filterPromoction(search: string) {
    if (this.PROMOTIONS == null || this.PROMOTIONS == '') {
      // guardar todos los items en PROMOTIONS
      this.PROMOTIONS = this.promotionService.promotions
      this.filter = this.promotionService.promotions
    }
    if (search == null || search == '') {
      this.promotionService.promotions = this.PROMOTIONS
      this.filter = this.promotionService.promotions
    } else {
      this.filter = this.PROMOTIONS
      this.filterId = this.filter.filter(
        product => product.id == search
      )
      this.promotionService.promotions = this.filterId
      if (search.length >= 3) {
        this.filter = this.PROMOTIONS
        this.filterId = filterByValue(this.filter, search)
        this.promotionService.promotions = this.filterId

        var nuevoArray = search.split("")
        var replace = nuevoArray.toString().replace(/([-[\]{}()*+?.\\^$|#,])/g, "")

        var alReves = search.split("").reverse()
        var replacealReves = alReves.toString().replace(/([-[\]{}()*+?.\\^$|#,])/g, "")
        if (replace == replacealReves) {
          this.show = 2
        } else {
          this.show = 1
        }
      }
    }
    function filterByValue(array, value) {
      return array.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

  }

}
