

window.onload = function() {
    console.log("Quiz page");
    setTimeout(checkQuizAvailable, 1000);
}

/**
 * Used to determinate it's a 4-item quiz or a 8-item quiz
 */
function checkQuizAvailable(){
    if(document.getElementById("QuizContainerWrapper") != null){

        if (document.getElementsByClassName('rqECredits')[0].innerHTML === document.getElementsByClassName('rqMCredits')[0].innerHTML) {
            //enters only if the quiz is already done: if current_amount_points = total_points_obtainable
            console.log("Closing page");
            window.close();
        }

        //In both of these case there is no need to press the "start quiz" button when prompted on the page.
        //It is also possible to make a condition to not click already clicked items, but there is no gaining on doing that, so I'm not going to.
        const _8itemQuiz = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        const _4itemQuiz = document.getElementsByClassName('rq_button');
        if(_8itemQuiz.length > 0){
            do8QuizActivity(_8itemQuiz);
        } else{
            do4QuizActivity(_4itemQuiz);
        }

    }
}

/**
 * Automatically does the 4item quiz
 * @since 15/02/2023
 * @param elements Array of element to cycle through
 */
function do4QuizActivity(elements){
    for(let i=0; i<elements.length-1; i++){
        console.log(elements[i]);
        elements[i].children[0].children[0].click();
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

