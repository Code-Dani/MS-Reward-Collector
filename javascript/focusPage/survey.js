/*
    Survey doesn't have any button to press apart from the 2 main options you can choose from.
    In this extension we'll just care to press the first option for every survey.
*/
console.log('Survey page recognized');
window.onload = function(){
    setTimeout(function(){
        if(document.getElementById('btoption0')!=null){
            document.getElementById('btoption0').click();
        }
    },500);

    //closes the window after the button has been pressed
    if(window.location.href.toString().includes("form=ML17QB")){
        window.close();
    }
}
