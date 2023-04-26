import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1'),
    new Recipe('A Test Recipe 2', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1'),
    new Recipe('A Test Recipe 3', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
