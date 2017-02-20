function Model() {
    //this.pets = [];
    this.pets = JSON.parse(localStorage.getItem("pets"));
        if(this.pets === null) {
            localStorage.setItem("pets", "[]");
            this.pets = JSON.parse(localStorage.getItem("pets"));
        }
    //console.log(this.pets)
    // return the pet in the array at index `index`
    this.getPetByIndex = function(index) {
        return this.pets[index];
    }
    // Add a new pet, given its name and species
    this.addPet = function(name, species) {
        var p = new Pet(name, species); // create a new pet
        this.pets.push(p); // store it in the array
        localStorage.setItem("pets", JSON.stringify(this.pets));
        console.log(this.pets)
    }
    // Returns copy of the pets array
    this.getAllPets = function() {
        return this.pets.slice(0, this.pets.length);
    }
}