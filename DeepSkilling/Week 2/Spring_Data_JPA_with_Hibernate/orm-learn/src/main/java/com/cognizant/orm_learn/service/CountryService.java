package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.CountryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.orm_learn.model.Country;
import java.util.List;

@Service
public class CountryService {
    @Autowired
    private CountryRepository  countryRepository;

    @Transactional
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
}
