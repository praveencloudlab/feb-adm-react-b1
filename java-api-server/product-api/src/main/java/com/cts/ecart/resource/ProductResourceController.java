package com.cts.ecart.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.ecart.entity.Product;
import com.cts.ecart.repository.ProductRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductResourceController {
	
	@Autowired
	private ProductRepository prodDao;
	
	
	@GetMapping("/filter/{name}")
	public List<Product> findByName(@PathVariable String name){
		return prodDao.findByNameLike("%"+name+"%");
	}
	
	@GetMapping
	public List<Product> findAll(){
		return prodDao.findAll();
	}
	
	@GetMapping("/{id}")
	public Product findById(@PathVariable int id) {
		return prodDao.findById(id).orElse(null);
		
	}
	
	@PostMapping
	public Product save(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable int id) {
		prodDao.deleteById(id);
	}
	
	@PutMapping
	public Product update(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	
	
	
	
	
	
	
	
	
	

}
