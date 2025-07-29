import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recipes: {
  name: string;
  image: string;
  ingredients: string[];
 }[] = [
    {
    name: 'Pancakes',
    image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pasta-2291908_960_720.jpg',
    ingredients: ['Flour', 'Berries', 'Honey']
  },
  {
    name: 'Chicken Biriyani',
    image: 'assets/recipe1.png',
    ingredients: ['Chicken', 'Tomato', 'Cashew']
  },
  {
    name: 'Salad',
    image: 'assets/salad.png',
    ingredients: ['Feta cheese', 'Tomato', 'Lettuce']
  }
  ];
}
