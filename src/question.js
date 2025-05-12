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
class Question {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;

        // Initialize additional properties with default values
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
            
        // Validate inputs (moved inside constructor)
        if (typeof this.text !== 'string') {
          throw new Error('Question text must be a string');
        }
        
        // Check if questions object is empty
        if (Object.keys(this.questions).length === 0) {
            throw new Error('Questions object cannot be empty');
        }
        
        // Check if each question has required properties
        for (const questionId in this.questions) {
            const question = this.questions[questionId];
            
            // Check if each question has all required properties
            if (!question.hasOwnProperty('text') || 
                !question.hasOwnProperty('choices') || 
                !question.hasOwnProperty('answer') || 
                !question.hasOwnProperty('difficulty')) {
            throw new Error(`Question ${questionId} is missing required properties`);
        }
        
        if (typeof this.timeLimit !== 'number' || this.timeLimit <= 0) {
            throw new Error('Time limit must be a positive number');
          }
          
          if (typeof this.timeRemaining !== 'number' || this.timeRemaining < 0) {
            throw new Error('Time remaining must be a non-negative number');
          }
          
    //      getQuestion() method

// Returns the question from the questions array at the position of currentQuestionIndex.

// should be defined.
// should be a function.
// should receive no arguments.
// should return the item from the questions array at the position of currentQuestionIndex.

// moveToNextQuestion() method

// When called, increments the currentQuestionIndex by 1.

// should be defined.
// should be a function.
// should receive no arguments.
// should increment the currentQuestionIndex by 1.

// shuffleQuestions() method

// Shuffles the elements stored in the questions array of the Quiz.

// should be defined.
// should be a function.
// should receive no arguments.
// should shuffle the items in the questions array.

// checkAnswer(answer) method

// Checks if the passed answer is correct for the current question and increments correctAnswers by 1 if the answer is correct.

// should be defined.
// should be a function.
// should receive 1 argument (answer - string).
// should increase correctAnswers by 1 when called with a correct answer for the current question

// hasEnded() method

// Returns true if the quiz has ended (the last question has been answered), and false otherwise.

// should be defined.

// should be a function.

// should receive no arguments.

// should return false when currentQuestionIndex is less than the questions array length

// should return true when currentQuestionIndex is equal to the questions array length


      }
      
}


