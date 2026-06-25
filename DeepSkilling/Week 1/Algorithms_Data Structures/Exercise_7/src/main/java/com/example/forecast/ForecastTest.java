package com.example.forecast;

public class ForecastTest {

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 3;

        double result =
                FinancialForecast.forecast(
                        currentValue,
                        growthRate,
                        years
                );

        System.out.println(
                "Future Value = " + result
        );
    }
}