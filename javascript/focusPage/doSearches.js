/*
    It query 30 times bing browser to automatically do the 90 points given for searches
*/
console.log('doSearches page');
window.onload = (function(){
    let counter = sessionStorage.getItem('counter');
    if(counter != null){
        counter++;
        sessionStorage.setItem('counter', counter);
    }else{
        sessionStorage.setItem('counter', 1);
    }

    if(counter >= 30){
        window.close();
    }

    console.log(counter);
    var queryBar = document.getElementById('sb_form_q');
    console.log(queryBar);
    queryBar.value = queryBar.value + 'd';
    var submit = document.getElementById('sb_form_go');
    console.log(submit);
    submit.click();

})