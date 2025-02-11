import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  items = [
    {
      id: 1,
      number: "1",
      title: "Actionable insights",
      content: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
    },
    {
      id: 3,
      number: "2",
      title: "Data-driven decisions",
      content: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
    },
    {
      id: 3,
      number: "3",
      title: "Always affordableActionable insights",
      content: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
    }
  ]
}
