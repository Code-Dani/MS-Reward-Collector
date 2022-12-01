window.onload = function(){

    //Creating custom button for the extension
    var menuContainer = document.getElementsByClassName('c-pivot pull-left')[0]; //grabbed column div for the play button
    const playItem = '<span role="presentation">'+
                        '<a role="tab" ng-href="/levels"    id="reward_pivot_collect" target="_self" style="background-color:#7db700;" >'
                            +'<span class="ng-binding" style="color:white;" >Collect points</span>'
                        +'</a></span>';
    menuContainer.innerHTML += playItem;

    
    //Adding onclick event to the custom button
    document.getElementById("reward_pivot_collect").onclick = (function (){
        console.log('entro');
        if(document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ').length == 3){
            console.log("Entered IF");
            //enters if the 3 daily challenges are loaded
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[0].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[1].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[2].getElementsByTagName('a')[0].click();
        }
    });
}


