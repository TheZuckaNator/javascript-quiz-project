class Question {
    constructor(text, choices, answer, difficulty) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      this.difficulty = difficulty;
      
      // Validate inputs (moved inside constructor)
      if (typeof this.text !== 'string') {
        throw new Error('Question text must be a string');
      }
      
      if (!Array.isArray(this.choices) || this.choices.length === 0) {
        throw new Error('Choices must be a non-empty array');
      }
      
      if (typeof this.answer !== 'string' || !this.choices.includes(this.answer)) {
        throw new Error('Answer must be a string and one of the provided choices');
      }
      
      if (typeof this.difficulty !== 'number' || this.difficulty < 1 || this.difficulty > 3) {
        throw new Error('Difficulty must be a number between 1 and 3');
      }
    }
    
    shuffleChoices() {
      // Create a copy to avoid modifying the original
      const result = new Array(this.choices.length);
      // Keep track of available positions
      const availableIndices = Array.from({ length: this.choices.length }, (_, i) => i);
      
      // Process each element of the original array
      this.choices.forEach(item => {
        // Generate a random index from the available positions
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        // Get the actual position from our available indices
        const newPosition = availableIndices[randomIndex];
        // Remove this index so it won't be reused
        availableIndices.splice(randomIndex, 1);
        // Place the item in its new position
        result[newPosition] = item;
      });
      
      // Update the choices property with shuffled array
      this.choices = result;
      
      // No return needed as we're modifying the object's property
    }
  }
