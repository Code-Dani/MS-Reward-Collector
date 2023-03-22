

window.onload = function() {
    console.log("Quiz page");
    setTimeout(checkQuizAvailable, 1000);
}

/**
 * Used to determinate it's a 4-item quiz, a 8-item quiz or a 2-item quiz
 */
function checkQuizAvailable(){
    if(document.getElementById("QuizContainerWrapper") != null){

        const _8itemQuiz = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        const _4itemQuiz = document.getElementsByClassName('rq_button');
        const _2itemQuiz = document.getElementsByClassName('btOptions');

        const greenCheckLogo = document.getElementsByClassName('cico rqSumryLogo'); //used to check if the quiz is completed
        if (greenCheckLogo.length > 0) {
            //enters only if the quiz is already done: if current_amount_points = total_points_obtainable
            console.log("Closing page");
            window.close();
        }

        //In both of these case there is no need to press the "start quiz" button when prompted on the page.
        //It is also possible to make a condition to not click already clicked items, but there is no gaining on doing that, so I'm not going to.
        if(_8itemQuiz.length > 0)
            do8QuizActivity(_8itemQuiz);
        if(_4itemQuiz.length > 0)
            do4QuizActivity();
        if(_2itemQuiz.length > 0)
            do2QuizActivity(_2itemQuiz[0]);
    }
}

/**
 * Automatically does the 2item quiz
 * @since 20/02/2023
 * @param elements Array of element to cycle through
 */
function do2QuizActivity(elements){
    elements.children[0].click();
}

/**
 * Automatically does the 4item quiz
 * @since 15/02/2023
 */
function do4QuizActivity(){
    for(let i=0; i<4; i++){
        let id = 'rqAnswerOption'.concat(i);
        document.getElementById(id).click();
    }
}

/**
 * Automatically does the 8item quiz
 * @param elements Array of element to cycle through
 */
function do8QuizActivity(elements){
    for(let i = 0; i<elements.length; i++) {
        elements[i].click();
    }
}

