package com.res.pla.service;

import java.time.LocalDateTime;
import java.util.List;

import com.res.pla.domain.ProductDTO;

public interface ProductService {

	List<ProductDTO> selectPtypeProducts(String ptype);

	List<ProductDTO> selectAllProducts();

	String purchaseProduct(String id, int product_code, LocalDateTime start_date, LocalDateTime end_date, boolean usable, String paymentOption, String order_type);

	ProductDTO selectProduct(int productcode);

}
