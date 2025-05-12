
class Quiz{
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
        }
        
        // time and timelimit checks
        if (typeof this.timeLimit !== 'number' || this.timeLimit <= 0) {
            throw new Error('Time limit must be a positive number');
          }
          
          if (typeof this.timeRemaining !== 'number' || this.timeRemaining < 0) {
            throw new Error('Time remaining must be a non-negative number');
        }

    }

    // starts methos
    getQuestion() {
        const keys = Object.keys(this.questions);
        if (this.currentQuestionIndex >= 0 && this.currentQuestionIndex < keys.length) {
                const currentKey = keys[this.currentQuestionIndex];
                return this.questions[currentKey];
            }
        }
    
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
        }
    
    shuffleQuestions() {
        const keys = Object.keys(this.questions);
        const shuffledKeys = [];
        const availableIndices = Array.from({ length: keys.length }, (_, i) => i);
            
        // Shuffle the keys
        keys.forEach(key => {
            const randomIndex = Math.floor(Math.random() * availableIndices.length);
            const newPosition = availableIndices[randomIndex];
            availableIndices.splice(randomIndex, 1);
            shuffledKeys[newPosition] = key;
        });
            
        // Create a new questions object with shuffled keys
        const shuffledQuestions = {};
            shuffledKeys.forEach(key => {
              shuffledQuestions[key] = this.questions[key];
            });
            
            this.questions = shuffledQuestions;
        }

        checkAnswer(answer) {
            const currentQuestion = this.getQuestion();
            if (currentQuestion && currentQuestion.answer === currentQuestion.choices[i]) {
              this.correctAnswers += 1;
              return true;
            }
            return false;
          }
          
          hasEnded() {
            return this.currentQuestionIndex >= Object.keys(this.questions).length;
          }
          
    // end class
    }

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


