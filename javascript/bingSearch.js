window.onload = (function (){

    //triple quiz "form=ML28X8" inside the url
    //id button (<input type="button">) to start the quiz: rqStartQuiz
    if(document.getElementById("rqStartQuiz") != null){
        setTimeout(tripleQuiz, 2000);
    }else{
        //multiple quiz
        if(document.getElementById("ListOfQuestionAndAnswerPanes") != null){
            closeWindow();
        }

        //simple research "form=ML27FH" inside the url
        if(window.location.href.toString().includes("PUBL=RewardsDO")){
            closeWindow();
        }

        //2 options question "form=ML17QA" inside the url
        /*
            answer's id (div):
            1. btoption0
            2. btoption1
        */
        if(document.getElementById("btoption0").DOCUMENT_TYPE_NODE == 10){
            setTimeout(simpleQuiz, 2000);
        }
    }
});

function simpleQuiz(){
    document.getElementById("btoption0").click();
    closeWindow();
}

function closeWindow(){
    setTimeout(window.close(), 1000);
}

function tripleQuiz(){
    document.getElementById("rqStartQuiz").click();

    document.getElementById("rqAnswerOption0").click();

    //for 4 options quiz "FORM=ML12JG" inside the url
    /**
     * (<input type="button">)
     * 
     * id:
     * rqAnswerOption0
     * rqAnswerOption1
     * rqAnswerOption2
     * rqAnswerOption3
     * 
     * class
     * rqOption
     */
}

//for 4 and 8 options quiz "FORM=ML12JG" inside the url
//for 8 options ( document.getElementsByClassName("btOptions")[0].getElementsByClassName("slide").length == 8 )
    /**
     * correct if
     * ( document.getElementsByClassName("btOptions")[0].getElementsByClassName("slide")[1].getElementsByTagName("img")[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaUlEQVQoFWNkQAJVO/olbz27vfzKs1umj98/5wRJyQpKfteRUjutJqUa2eZR+BymnBHGyF7TULTh4s7Opx9esMDEkGlpAYk/Afru5VNDGvpA4mCNIE1TDy7sgfGRNaCx/2fbx5eANDOCnLfw6KpHuGyCaVQWlWe4+/ohA8jmeOswOSaQnwhp6g+qZbhTu58BpBmkFqSH6fKzm2YwU7HRIE0FDokM/QfmgW0EqQHpYXry/gUHTAPIRGSArKloXQtcCqSHCcYDaQI5py+oBiyESxNMPbOSt17526/vWd9/+8ggwMnHUOiQxOCv68oQqOcGdh6yTTBNyiJy35l0pdRPwQQK1zUzTDgwn8FQRgunJpBaUILAGh2qYooMt1/dh5mHQsOjA5SMQCkCKPsfpgKXJpAakFqQHmaQ4tOrDhzPLiv4/OzjS+fPP77AAwxmEIgG2RRnHlyGkuRgCuCJ/Pkts8fvnoOjCVciBwBgQbRgxH13SAAAAABJRU5ErkJggg==" )
     * 
     * already selected if
     * ( document.getElementsByClassName("btOptions")[0].getElementsByClassName("slide")[0].getElementsByClassName("b_hide") == null )
     */

//for 4 options ( document.getElementsByClassName("rq_button").length == 4 )
    /**
     * to press it
     * ( document.getElementById("rqAnswerOption0").click(); )
     * 
     * button enabled
     * ( document.getElementsByClassName("rq_button")[0].getElementsByClassName("rqOption  optionDisable")[0] == null; )
     */