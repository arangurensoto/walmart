import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise'

import { Promotion } from './promotion.model'

@Injectable()
export class PromotionService {
  selectedPromotion: Promotion
  promotions: Promotion[]
  readonly baseURL = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  getPromotionList(){
    return this.http.get(this.baseURL)
  }
}
