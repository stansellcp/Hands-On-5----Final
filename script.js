window.onload = function () {

  const submit = document.getElementById('submit');

  let numberCorrect = 0;
  let percentage = 0;

  //evaluation function
  submit.addEventListener('click', function ()
    {
      numberCorrect = 0;

      //checking for correct answers
      if (document.getElementById('q1a').checked)
      {
        numberCorrect++;
      }

      if (document.getElementById('q2d').checked)
      {
        numberCorrect++;
      }

      if (document.getElementById('q3c').checked)
      {
        numberCorrect++;
      }

      //defining the percentage correct to display on the alert
      percentage = (numberCorrect/3)*100;
      percentage = Math.round(percentage);

      //checking number of correct answers and displaying results
      if (numberCorrect != 3)
      {
        alert(`        You answered ${numberCorrect} out of 3 questions correctly.
        You got a ${percentage}%.
        Please try again if you wish to become a Sith Lord!`);
      }
      else
      {
        alert(`        You answered ${numberCorrect} out of 3 questions correctly.
        You got a ${percentage}%.
        Congratulations on becoming a Sith Lord!`);
      }

    })

  //class creation
  class Quiz {
    constructor(id, question, answers)
    {
      this.id = id;
      this.question = question;
      this.answers = answers;
    }
  }

  //creating quizzes/questions
  let q1 = new Quiz ('q1', "What color was Darth Vader's lightsaber?",
    ["Red", "Blue", "Green", "Yellow", "Purple"]);
  let q2 = new Quiz ('q2', "Who became Darth Vader?",
    ["Luke Skywalker", "Yoda", "Darth Maul", "Anakin Skywalker", "None of the above"]);
  let q3 = new Quiz ('q3', "Who is Darth Vader's son?",
    ["Yoda", "Darth Maul", "Luke Skywalker", "Anakin Skywalker", "None of the above"]);

  //question 1 html
  document.getElementById('q1').innerHTML = q1.question;
  document.getElementById('q1answer0').innerHTML = q1.answers[0];
  document.getElementById('q1answer1').innerHTML = q1.answers[1];
  document.getElementById('q1answer2').innerHTML = q1.answers[2];
  document.getElementById('q1answer3').innerHTML = q1.answers[3];
  document.getElementById('q1answer4').innerHTML = q1.answers[4];

  //question 2 html
  document.getElementById('q2').innerHTML = q2.question;
  document.getElementById('q2answer0').innerHTML = q2.answers[0];
  document.getElementById('q2answer1').innerHTML = q2.answers[1];
  document.getElementById('q2answer2').innerHTML = q2.answers[2];
  document.getElementById('q2answer3').innerHTML = q2.answers[3];
  document.getElementById('q2answer4').innerHTML = q2.answers[4];

  //question 3 html
  document.getElementById('q3').innerHTML = q3.question;
  document.getElementById('q3answer0').innerHTML = q3.answers[0];
  document.getElementById('q3answer1').innerHTML = q3.answers[1];
  document.getElementById('q3answer2').innerHTML = q3.answers[2];
  document.getElementById('q3answer3').innerHTML = q3.answers[3];
  document.getElementById('q3answer4').innerHTML = q3.answers[4];

}
