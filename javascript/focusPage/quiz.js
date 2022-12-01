/*
    This script handles the quiz task.
    It is requires to press a button to start the task, so firstly the script will do that and then proceed to complete the task.
*/
console.log('Quiz page recognized');
setTimeout(function(){
    console.log('called');
    //check if button is not null, if it is it means the quiz has been done or there was a problem.
    const startButton = document.getElementById('rqStartQuiz');
    if(startButton != null){
        startButton.click();
        for(var i = 0; i<3; i++){
            var elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
            for(var j = 0; j<5; j++){
                elements[i].click();
                console.log('premuto:' + j);
            }
        }
    }
},500);