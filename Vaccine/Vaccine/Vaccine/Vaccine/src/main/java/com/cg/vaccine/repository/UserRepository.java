package com.cg.vaccine.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.vaccine.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public List<User> findByAdharNo(long adharNo);
	public List<User> findByPanoNo(String panNo);
	public Optional<User> findByMobileno(String mobileno);
}
