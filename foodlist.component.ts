import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  foodsList  from  '../food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  foods: Object[];
  myList: {
    name: string;
    calories: number;
    quantity: number;
    image: string;
  }[] = [];
  pattern: string;
  // tslint:disable-next-line:no-inferrable-types
  isEditing: boolean = false;
  newFoodName = 'Example Name';
  newFoodCalories = 250;
  newFoodImage =
    'https://imagefinder.co/storage/w1000/images/2019/02/freestocks_sandwich_3-1000x667.jpg';
  quantity: number;
  totalCalories = 0;

  constructor() { }

  ngOnInit(): void {
    this.foods = foodsList;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    };

    this.foods.unshift(newFood);

    this.isEditing = true;
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
  }

  addToMyList(food, quantityInput) {
    const existingFood = this.myList.find(item => item.name === food.name);
    const quantity = Number(quantityInput.value);

    if (existingFood) {
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalCalories += food.calories * quantity;
    this.quantity = 1;
  }

}
