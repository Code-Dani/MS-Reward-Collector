window.onload = function(){

    //Creating custom button for the extension
    var menuContainer = document.getElementsByClassName('c-pivot pull-left')[0]; //grabbed column div for the play button
    const playItem = '<span role="presentation">'+
                        '<a role="tab" ng-href="/levels"    id="reward_pivot_collect" target="_self" style="background-color:#7db700;" >'
                            +'<span class="ng-binding" style="color:white;" >Collect points</span>'
                        +'</a></span>';
    const doSearches = '<span role="presentation" style="padding-left:10px;">'+
                            '<a role="tab" ng-href="/levels"    id="reward_pivot_searches" target="_self" style="background-color:#cd00cd;" >'
                                +'<span class="ng-binding" style="color:white;" >Do searches</span>'
                            +'</a></span>';
    menuContainer.innerHTML += playItem;
    menuContainer.innerHTML += doSearches;

    
    //Adding onclick event to the custom button
    document.getElementById("reward_pivot_collect").onclick = (function (){
        if(document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ').length == 3){
            console.log("Entered IF");
            //enters if the 3 daily challenges are loaded
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[0].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[1].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[2].getElementsByTagName('a')[0].click();
        }

    
        const container = document.getElementById("more-activities").children[0];
        //check if "other activities" tab has anything in it (basically if it exists)
        if(container.childElementCount > 0){
            const numberOfItems = container.childElementCount; //usually 12
            for(var i=0; i<numberOfItems;i++){  //cycle through all items
                //make it so that it doesn't click the mobile app AD && if its already been collected (by checking if it has the typical green icon on the top-right corner)
                if(!(container.children[i].hasAttribute("ng-class")) && container.children[i].getElementsByClassName("mee-icon mee-icon-SkypeCircleCheck").length == 0){    
                    container.children[i].children[0].children[0].children[0].children[0].children[0].click();  //clicks the item
                }
            }
        }
        
    });

    //Adding onclick event to the custom button
    document.getElementById("reward_pivot_searches").onclick = (function (){
        window.open('https://www.bing.com/search?q=cwapchwjauhd1928745y6dwadaw231')
    });
}


