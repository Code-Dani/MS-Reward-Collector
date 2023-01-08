/*
    This type of task only requires to look at a certain page, so the script will automaticly close the page once opened
*/
console.log('Insta-close page recognized');
window.onload = (function(){
    setTimeout(function(){
        this.window.close();
    },1000);
})