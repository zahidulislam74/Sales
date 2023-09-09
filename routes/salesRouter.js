const express = require("express");
const salesRouter = express.Router();

const {
  createSales,
  totalSaleRevenue,
  totalSelByProductId,
  salesTopProducts,
  saleAvaragePrice,
  salesRevenueByMonth,
  highestQuantitySold,
  departmentSalaryExpense,
} = require("../controller/salseController");

salesRouter.post("/createSale", createSales);
salesRouter.get("/sales/total-revenue", totalSaleRevenue);
salesRouter.get("/sales/quantity-by-product", totalSelByProductId);
salesRouter.get("/sales/top-products", salesTopProducts);
salesRouter.get("/sales/average-price", saleAvaragePrice);
salesRouter.get("/sales/revenue-by-month", salesRevenueByMonth);
salesRouter.get("/sales/highest-quantity-sold", highestQuantitySold);
salesRouter.get("/sales/department-salary-expense", departmentSalaryExpense);

module.exports = { salesRouter };
