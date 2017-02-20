function Controller(model) {
	// reference to the model (so we can update it & ask it questions)
	this.model = model;

	// Add a new pet, given its name and species
	this.addPet = function(name, species) { // USE THIS AS BUTTON
		// pass through the data to the model
		this.model.addPet(name, species); ///////inputs
	}

	// Return a pet at index `index`
	this.getPetByIndex = function(index) {
		return this.model.getPetByIndex(index);
	}

	// get a copy of the entire array of pets
	this.getAllPets = function() {
		return this.model.getAllPets();
	}

	// Feed the pet at index `index`
	this.feedPet = function(index) {
		var pet = this.getPetByIndex(index);
		pet.hunger -= 10; // maybe write pet.feed(10)?
	}

	// Reduce the boredom of the pet at index `index`
	this.playWithPet = function(index) { //USE FOR BUTTON!!!!!!!!
		var pet = this.getPetByIndex(index);
		pet.boredom -= 10; // maybe write pet.play(10)?
	}


}
