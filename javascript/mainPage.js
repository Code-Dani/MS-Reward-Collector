window.onload = function(){
/*
    const edgeAD = "ITIT_SapphireAppInstall_Announcement_amc_Default";
    const mStoreReminder = "ITIT_Lifecycle-Shop and Earn reminder";
    const setObjective = "ITIT_Lifecycle-Set a goal";
    const welcomeBonus = "ITIT_Lifecycle-Onboarding";
    const setAGoal = "ITIT_Lifecycle-Just set a goal";
*/
    //Guessing that ITIT stands for my nationality (Italy), so i'm removing it from moreActivityCode const
    const moreActivitiesCode = "moreactivities_offer";

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
            console.log("dailyActivities: ENTERED DAILY ACTIVITIES");
            //enters if the 3 daily challenges are loaded
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[0].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[1].getElementsByTagName('a')[0].click();
            document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ')[2].getElementsByTagName('a')[0].click();
        }

    
        const container = document.getElementById("more-activities").children[0];
        //check if "other activities" tab has anything in it (basically if it exists)
        if(container.childElementCount > 0){
            console.log("moreActivities: ENTERED MORE ACTIVITIES");
            const numberOfItems = container.childElementCount; //usually 12
            console.log("moreActivities: NUMBER OF ITEMS="+numberOfItems);
            for(var i=0; i<numberOfItems;i++){  //cycle through all items
                var id = container.children[i].getElementsByClassName("text-align-center rewards-card-container")[0].getAttribute("data-bi-id")
                if(id.includes(moreActivitiesCode) && (container.children[i].getElementsByClassName("mee-icon mee-icon-SkypeCircleCheck").length == 0)){
                    //It means that its a bonus activity that can be done, otherwise its just an AD
                    console.log("moreActivities: OPENING NUMBER="+i);
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


