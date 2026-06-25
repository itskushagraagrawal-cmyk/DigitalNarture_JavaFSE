package com.example.search;

public class LinearSearch {

    public static Product search(Product[] products, String name) {

        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(name)) {
                return product;
            }
        }

        return null;
    }
}