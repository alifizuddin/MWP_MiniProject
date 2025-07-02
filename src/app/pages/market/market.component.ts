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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bracelet.jpg/640px-Bracelet.jpg'
    },
    {
      name: 'Woven Bag',
      description: 'Eco-friendly woven bag made from recycled materials.',
      price: 40,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bags_for_sale.jpg/640px-Bags_for_sale.jpg'
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
