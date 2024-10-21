import SwiperCore, { Swiper } from 'swiper';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  providers:[HttpClient, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeComponent implements OnInit{
  products:Product[] =[]


  constructor(private _GetDataService:GetDataService){}

  ngOnInit(): void {
    this._GetDataService.getProductss().subscribe({

      next:(response)=>{
        console.log(response);
        this.products = response
        console.log(this.products);
                
      }

    })
  }


}
