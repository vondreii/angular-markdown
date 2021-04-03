/* Use typescript for the behaviour/backend work here */
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post'; // Add this

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Add this post array:
  // You can modify this list into a structure that can dynamically update as you add posts. 
  posts: Post[] = [
    { 
      "title": "Chocolate Cheesecake Recipe", 
      "description": "This is the recipe for a delicious chocolate cheesecake...",
      "link": "/posts/post/ChocolateCheesecakeRecipe"
    },
    { 
      "title": "Strawberry Cheesecake Recipe", 
      "description": "This is the recipe for a delicious strawberry cheesecake...",
      "link": "/posts/post/StrawberryCheesecakeRecipe"
    },
    { 
      "title": "Caramel Cheesecake Recipe", 
      "description": "This is the recipe for a delicious caramel cheesecake...",
      "link": "/posts/post/CaramelCheesecakeRecipe"
    },
    { 
      "title": "Chocolate Lava Cake", 
      "description": "This is the recipe for a delicious Lava cake...",
      "link": "/posts/post/ChocolateLavaCake"
    },
    { 
      "title": "Churros", 
      "description": "yum churros...",
      "link": "/posts/post/ChurrosRecipe"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
