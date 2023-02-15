/*
    This script handles the quiz task.
    It is requires to press a button to start the task, so firstly the script will do that and then proceed to complete the task.
*/
window.onload = function() {
    console.log("Quiz page");

    /*let observer = new MutationObserver(checkQuizAvailable);
    observer.observe(document.body, {childList: true});*/

    setTimeout(checkQuizAvailable, 1000);
}

/**
 * Used to determinate it's a 4-item quiz or a 6-item quiz
 */
function checkQuizAvailable(){
    if(document.getElementById("QuizContainerWrapper") != null){

        if (document.getElementsByClassName('rqECredits')[0].innerHTML === document.getElementsByClassName('rqMCredits')[0].innerHTML) {
            //enters only if the quiz is already done: if current_amount_points = total_points_obtainable
            console.log("Closing page");
            window.close();
        }

        const _6itemQuiz = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        const _4itemQuiz = document.getElementsByClassName('rq_button');
        if(_6itemQuiz.length > 0){
            do6QuizActivity(_6itemQuiz);
        } else{
            console.log("entro");
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
 * Automatically does the 6item quiz
 * @param elements Array of element to cycle through
 */
//TODO("Redesign this function")
function do6QuizActivity(elements){
    console.log('Quiz page recognized');
    //check if button is not null, if it is it means the quiz has been done or there was a problem.
    const startButton = document.getElementById('rqStartQuiz');
    if (startButton != null) {
        startButton.click();

        //I think it's possible to remove the for loop and make it just press a single item, since it will refresh anyway and go in the "button null" section
        for (let i = 0; i < 3; i++) {
            if(elements.length > 0) {
                for (let j = 0; j < 5; j++) {
                    elements[i].click();
                }
            }
        }
    } else {
        //it's possible that the start button was already pressed and the quiz its active, so we check for the clickable survey items.
        if (elements.length > 0) {
            for (let i = 0; i < 5; i++) {
                //if equal to null -> means that the element it's been clicked, otherwise it's not.
                if (elements[i].getElementsByClassName('b_hide') != null) {
                    elements[i].click();
                }
            }
        }
    }
}

/*
function doQuizActivity(){
    console.log('Quiz page recognized');
    //check if button is not null, if it is it means the quiz has been done or there was a problem.
    const startButton = document.getElementById('rqStartQuiz');
    if (startButton != null) {
        startButton.click();


        //I think it's possible to remove the for loop and make it just press a single item, since it will refresh anyway and go in the "button null" section
        for (let i = 0; i < 3; i++) {
            let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
            if(elements.length > 0) {
                for (let j = 0; j < 5; j++) {
                    elements[i].click();
                }
            }
        }
    } else {
        //it's possible that the start button was already pressed and the quiz its active, so we check for the clickable survey items.
        let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        if (elements.length > 0) {
            for (let i = 0; i < 5; i++) {
                if (document.getElementsByClassName('rqECredits')[0].innerHTML === document.getElementsByClassName('rqMCredits')[0].innerHTML) {
                    //enters only if the quiz is already done: if current_amount_points = total_points_obtainable
                    console.log("Closing page");
                    window.close();
                    //break;  //used to break out of the loop
                } else {
                    //if equal to null -> means that the element it's been clicked, otherwise it's not.
                    if (elements[i].getElementsByClassName('b_hide') != null) {
                        elements[i].click();
                    }
                }
            }
        }
    }
}
 */