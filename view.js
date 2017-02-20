function View(controller, output) {

	// reference to controller
	this.controller = controller;

	// Draw the pet at index `index` into the jQuery DOM element `container`
	this.drawPetAtIndex = function(index, container) {
		// get the pet info from the controller
		var pet = this.controller.getPetByIndex(index);
		// empty out the existing container so we can rebuild it
		container.empty();
		// append the pet's name as a paragraph tag
		container.append("<p>" + pet.name + "</p>");
		// append the pet's hunger and boredom as a paragraph tag
		container.append(
			"<p>" + pet.hunger + "," + pet.boredom + "</p>"


		);


		// feed pet button
		// create button
		var feedButton = $('<button>Feed</button>');
		// When we click the button, feed the pet and refresh that pet's
		// DOM representation
		feedButton.click(function() {
			this.controller.feedPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));
		// BIND `this`, so that we have the correct reference when
		// the event listener is called

		//append the button to the container
		container.append(feedButton);

		//adding play button
		var playButton = $('<button>Play</button>');
		
		playButton.click(function() {
			this.controller.playWithPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));
		// BIND `this`, so that we have the correct reference when
		// the event listener is called

		//append the button to the container
		container.append(playButton);

	
	};
//----------------------------------------------------------
	

		
	// Draw all of the pets (should probably just be called once)
	this.drawAllPets = function() {
		// get all of the pets
		var pets = this.controller.getAllPets();
		// for each pet
		for (var i = 0; i < pets.length; i++) {
			// create a new container
			var container = $('<div></div>');

			// draw that pet
			this.drawPetAtIndex(i, container);

			// append the container to the main div of all pets
			output.append(container);
		}
	}
	//ADD PET BUTTON---------------------------------
		$('#createPet').on('click', function(){
			var name = $('#petName').val();
			var species = $('#petSpecies').val();
			this.controller.addPet(name, species);
			$('#output').html("");
			this.drawAllPets();
		}.bind(this))//must refer over to controller

	// Draw all of the pets when we instanciate the view
	this.drawAllPets();

}
