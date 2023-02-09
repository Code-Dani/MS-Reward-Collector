/*
    This script handles the quiz task.
    It is requires to press a button to start the task, so firstly the script will do that and then proceed to complete the task.
*/

//TODO("Check if timeout was necessary, if it wasn't this comment needs to be deleted")
/*
    setTimeout(function () {
        console.log('called');
        //check if button is not null, if it is it means the quiz has been done or there was a problem.
        const startButton = document.getElementById('rqStartQuiz');
        if (startButton != null) {
            startButton.click();
            //I think it's possible to remove the for loop and make it just press a single item, since it will refresh anyway and go in the "button null" section
            for (let i = 0; i < 3; i++) {
                let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
                for (let j = 0; j < 5; j++) {
                    elements[i].click();
                }
            }
        } else {
            //it's possible that the start button was already pressed and the quiz its active, so we check for the clickable survey items.
            let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
            console.log(elements);
            if (elements != null) {
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
    }, 1000);
*/

window.onload = function() {
    let observer = new MutationObserver(checkQuizAvailable);
    observer.observe(document.body, {childList: true});
}

/**
 *
 */
function checkQuizAvailable(){
    if(document.getElementById("QuizContainerWrapper") != null){
        doQuizActivity();
    }
}

/**
 *
 */
function doQuizActivity(){
    console.log('Quiz page recognized');
    //check if button is not null, if it is it means the quiz has been done or there was a problem.
    const startButton = document.getElementById('rqStartQuiz');
    if (startButton != null) {
        startButton.click();
        //I think it's possible to remove the for loop and make it just press a single item, since it will refresh anyway and go in the "button null" section
        for (let i = 0; i < 3; i++) {
            let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
            for (let j = 0; j < 5; j++) {
                elements[i].click();
            }
        }
    } else {
        //it's possible that the start button was already pressed and the quiz its active, so we check for the clickable survey items.
        let elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        console.log(elements);
        if (elements != null) {
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