
$(document).ready(function(){
    // start button event listener
    $(".start-button").click(function(){
      $('.submit-button').show();
      $('.next-button').show();
      $('.retry-button').show();
       $('.start-page').hide();
       $('.score').show();
       $('.next').hide();
       $('.questions').show();
       displayQuestion();
        $('.score').text('Current Score: '+score);
      console.log("Starting the quiz...");
    });
  
    // next button event listener
    $(".next-button").click(function(event){
      console.log("Next button clicked");
      displayQuestion();
      $('.next').hide();
      $('.submit').show();
    });
  
    $(".submit-button").click(function(event){
      event.preventDefault();
      var selected = $('li.selected');
      console.log(event);
      if(selected.length){
        let answer = $('li.selected').attr('id');
        console.log(answer);
        checkAnswer(answer);
        $('.next').show();
        $('.submit').hide();
      } else {
        alert('Please select an answer');
      }
    });
  
    // retry button click listener
    $(".retry-button").click(function(){
    location.reload();
  
      console.log("Retake button clicked");
    });
  
    //click listener to make questions change color on hover
    $('ul.questions-choice').on('click', 'li', function(event) {
      $('.selected').removeClass();
      $(this).addClass('selected');
    });
  
  });
  
  
    // FUNCTIONS
    function displayQuestion(){
      $('.question-number').text('Question Number: '+(current + 1)+"/5" );
      if(current < myQuestions.length){
        let listQuestion = myQuestions[current];
        $('h2').text(listQuestion.question);
        $('ul.questions-choice').html('');
        for (let i = 0; i < listQuestion.answers.length; i++) {
          $('ul.questions-choice').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
          console.log(listQuestion.answers[i])
        }
      } else {
        displayScore();
      }
    }
  
    // button to check answer
    function checkAnswer(answer){
      let listQuestion = myQuestions[current];
      if(listQuestion.correct == answer){
        score++;
        $('li.selected').addClass('correct');
        $('li.selected').append(`</br>Nice!`);
      
      } else {
        $('li.selected').addClass('incorrect');
        $('li.selected').append(`</br>yare yare, you're WRONG`);
      }
      $('.score').text('Current Score: '+score);
      current++;
    }
  
    //function to display score
  function displayScore(){
      $('.questions').hide();
      $('.end-quiz').show();
      $('.end-score').text("Your score: " +score + '/5');
      if(score >= 4){
        $('.comment').append(`<img src=https://media1.tenor.com/images/392da4650dfa83b3055069e39ad74b45/tenor.gif?itemid=7319727></br> <p>CONGRADULATIONS you're a weab</p>`) ;
      } else {
        $('.comment').append(`<img src =https://media1.tenor.com/images/162e6417f80df31ff2fcf72680f0424c/tenor.gif?itemid=13569904></br> <p> Study Harder</p> `);
      }
    };
  