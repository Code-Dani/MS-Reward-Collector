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
        //I think its possible to remove the for loop and make it just press a single item, since it will refresh anyway and go in the "button null" section
        for(var i = 0; i<3; i++){
            var elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
            for(var j = 0; j<5; j++){
                elements[i].click();
                console.log('premuto:' + j);
            }
        }
    }else{
        //its possible that the start button was already pressed and the quiz its active, so we check for the clickable survey items.
        var elements = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
        console.log(elements);
        if(elements != null){
            for(var i = 0; i<5; i++){
                if(document.getElementsByClassName('rqECredits')[0].innerHTML == document.getElementsByClassName('rqMCredits')[0].innerHTML){
                    //enters only if the quiz is already done: if current_amount_points = total_points_obtainable
                    console.log("Closing page");
                    window.close();
                    //break;  //used to break out of the loop
                }else{
                    //if equal to null -> means that the element its been clicked, otherwise its not.
                    if(elements[i].getElementsByClassName('b_hide') != null){
                        elements[i].click();
                        console.log('premuto:' + i);
                    }
                }
            }
        }
    }
},1000);