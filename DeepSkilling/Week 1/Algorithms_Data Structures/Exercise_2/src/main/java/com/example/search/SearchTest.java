package com.example.search;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Camera", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Tablet", "Electronics")
        };

        Product result1 =
                LinearSearch.search(products, "Mobile");

        if (result1 != null) {
            System.out.println(
                    "Linear Search Found: "
                            + result1.getProductName());
        }

        Product result2 =
                BinarySearch.search(products, "Mobile");

        if (result2 != null) {
            System.out.println(
                    "Binary Search Found: "
                            + result2.getProductName());
        }
    }
}