package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER =LoggerFactory.getLogger(OrmLearnApplication.class);

	private static CountryService countryService;

	private static CountryRepository countryRepository;

	public static void main(String[] args) throws CountryNotFoundException {

		ApplicationContext context =SpringApplication.run(OrmLearnApplication.class,args);
		countryService = context.getBean(CountryService.class);
		countryRepository = context.getBean(CountryRepository.class);
		testSearchCountriesStartingWith();
	}

	private static void testGetAllCountries() {
		LOGGER.info("Start");
		List<Country> countries = countryService.getAllCountries();
		LOGGER.debug("Countries={}", countries);
		LOGGER.info("End");
	}

	private static void getAllCountriesTest() throws CountryNotFoundException {
		LOGGER.info("Start");
		Country country = countryService.findCountryByCode("JJ");
		LOGGER.debug("Country:{}", country);
		LOGGER.info("End");
	}

	private static void testAddCountry(){
		LOGGER.info("Start");
		Country country=new Country("JJ","Jaja");
		countryService.addCountry(country);
		LOGGER.info("Record Inserted :{}",country);
	}
	private static void testUpdateCountry() throws CountryNotFoundException {
		LOGGER.info("Start");
		countryService.updateCountry("JJ","Jojo");
		LOGGER.info("Record Updated");
		LOGGER.info("End");
	}
	private static void testDeleteCountry() throws CountryNotFoundException {
		LOGGER.info("Start");
		countryService.deleteCountry("JJ");
		LOGGER.info("Record Deleted");
		LOGGER.info("End");
	}
	private static void testSearchCountries() {
		LOGGER.info("Start");
		List<Country> countries = countryService.searchCountries("ou");
		LOGGER.debug("Countries: {}", countries);
		LOGGER.info("End");
	}

	private static void testSearchCountriesSorted() {
		LOGGER.info("Start");
		List<Country> countries = countryService.searchCountriesSorted("ou");
		LOGGER.debug("Countries: {}", countries);
		LOGGER.info("End");
	}

	private static void testSearchCountriesStartingWith() {
		LOGGER.info("Start");
		List<Country> countries = countryService.searchCountriesStartingWith("Z");
		LOGGER.debug("Countries: {}", countries);
		LOGGER.info("End");
	}
}