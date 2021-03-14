// javascript documento

// Product Constructor
export class Product {
    constructor(nombre, correo ,usuario, price, year) {
        this.cliente = nombre;
        this.correo = correo;
        this.modelo = usuario;
        this.price = price;
        this.year = year;
    }
}

import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
      // Override the default Form behaviour
      e.preventDefault();

      // Getting Form Values
    const cliente = document.getElementById("cliente").value,
    correo = document.getElementById("correo").value,
      name = document.getElementById("modelo").value,    
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;
      

      // Create a new Oject Product
    const product = new Product(cliente, correo, name, price, year);

      // Create a new UI instance
    const ui = new UI();

      // Input User Validation
      if (cliente ==="" || correo ==="" || name === "" || price === "" || year === "") {
          ui.showMessage("Please Insert data in all fields", "danger");
      }

      // Save Product
      ui.addProduct(product);
      ui.showMessage("Product Added Successfully", "success");
      ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
ui.deleteProduct(e.target);
e.preventDefault();
});
