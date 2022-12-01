var menuContainer = document.getElementsByClassName('c-pivot pull-left')[0]; //grabbed column div for the play button
const playItem = '<span role="presentation">'+
                    '<a role="tab" ng-href="/levels"    id="reward_pivot_collect" target="_self" style="background-color:#7db700;" >'
                        +'<span class="ng-binding" style="color:white;" >Collect points</span>'
                    +'</a></span>';

menuContainer.innerHTML += playItem;

var Observer = new MutationObserver(observate).observe(document.getElementsByClassName('ng-scope ng-isolate-scope mobileViewMode')[0],{
    childList: true,
    subtree: true
});

//commit

function observate(){
    if(document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ').length == 3){
        //enters if the 3 daily challenges are loaded
        document.getElementById("reward_pivot_collect").onclick = (function (){
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[0].getElementsByTagName('a')[0].click();
        });
    }
}

