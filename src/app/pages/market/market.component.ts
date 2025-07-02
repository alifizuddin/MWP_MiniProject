import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  products = [
    {
      name: 'Beaded Bracelet',
      description: 'Handmade bracelet crafted with colorful beads.',
      price: 15,
      image: 'https://inkalloy.com/cdn/shop/files/sage-confetti-beaded-10-strand-stretch-bracelets-multicolor-sbbr0900ms-44715547689153.jpg?v=1740085075'
    },
    {
      name: 'Woven Bag',
      description: 'Eco-friendly woven bag made from recycled materials.',
      price: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZGieQN6kkPLh_q8kqJGeDLki8k-q0IVMIw&s'
    }
  ];

  newProduct = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  selectedProduct: any = null;

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.newProduct.image = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    if (
      this.newProduct.name &&
      this.newProduct.description &&
      this.newProduct.price &&
      this.newProduct.image
    ) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', description: '', price: 0, image: '' };
    }
  }

  openProduct(product: any) {
    this.selectedProduct = product;
  }

  closeProduct() {
    this.selectedProduct = null;
  }

  buyProduct() {
    alert(`You have purchased "${this.selectedProduct.name}" for RM ${this.selectedProduct.price}`);
    this.closeProduct();
  }
}
