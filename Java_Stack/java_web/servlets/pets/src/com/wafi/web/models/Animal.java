package com.wafi.web.models;

public class Animal {
	private String name;
	private String breed;
	private double weight;
	
	public String getName () {
		return this.name;
	}
	public void setName (String name) {
		this.name = name;
	}
	
	public String getBreed () {
		return this.breed;
	}
	public void setBreed (String breed) {
		this.breed = breed;
	}
	
	public double getWeight () {
		return this.weight;
	}
	public void setWeight (double weight) {
		this.weight = weight;
	}
}
