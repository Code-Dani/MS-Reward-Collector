/*
    const edgeAD = "ITIT_SapphireAppInstall_Announcement_amc_Default";
    const mStoreReminder = "ITIT_Lifecycle-Shop and Earn reminder";
    const setObjective = "ITIT_Lifecycle-Set a goal";
    const welcomeBonus = "ITIT_Lifecycle-Onboarding";
    const setAGoal = "ITIT_Lifecycle-Just set a goal";
*/
//Guessing that ITIT stands for my nationality (Italy), so I'm removing it from moreActivityCode const
const moreActivitiesCode = "moreactivities_offer";

//Button Collect Points
const playItem = '<span role="presentation">'+
    '<a role="tab" id="reward_pivot_collect" target="_self" style="background-color:#7db700;" >'
    +'<span class="ng-binding" style="color:white;" >Collect points</span>'
    +'</a></span>';

let taskDoneMessage = false;

window.onload = function(){

    //Creating custom button for the extension
    const menuContainer = document.getElementsByClassName('c-pivot pull-left')[0]; //grabbed column div for the play button
    menuContainer.innerHTML += playItem;

    //Adding onclick event to the custom button
    document.getElementById("reward_pivot_collect").onclick = (function (){

        const items = document.getElementsByClassName('m-card-group')[0].getElementsByClassName('ng-scope ng-isolate-scope c-card ');
        doDailyChallenges(items);

        const container = document.getElementById("more-activities").children[0];
        doMoreActivities(container);
    
    });
}

/**
 * Used to open daily tasks only if they haven't been done already
 * @param items array containing the daily items, usually 3 items.
 */
function doDailyChallenges(items){
    console.log("dailyActivities: ENTERED DAILY ACTIVITIES");
    console.log("dailyActivities: NUMBER OF ITEMS: " + items.length);

    for(let i=0; i<items.length; i++){
        if(items[i].getElementsByClassName("mee-icon mee-icon-SkypeCircleCheck").length === 0){
            items[i].getElementsByTagName('a')[0].click();
        }else{
            taskDoneMessage = true;

        }
    }
}

/**
 * Opens the tasks situated in more activities if they haven't been done already
 * @param container contains all the "more activities" tasks
 */
//TODO("Optimise this code, fix that sometimes doesn't open certain tasks.
// Make it so that there is a delay when opening them so that MS-edge doesn't get overwhelm by the amount of tabs open")
function doMoreActivities(container){
    //check if "other activities" tab has anything in it (basically if it exists)
    if(container.childElementCount > 0){
        console.log("moreActivities: ENTERED MORE ACTIVITIES");
        const numberOfItems = container.childElementCount; //usually 12
        console.log("moreActivities: NUMBER OF ITEMS="+numberOfItems);
        for(let i=0; i<numberOfItems;i++){  //cycle through all items
            let id = container.children[i].getElementsByClassName("text-align-center rewards-card-container")[0].getAttribute("data-bi-id")
            if(id.includes(moreActivitiesCode) && (container.children[i].getElementsByClassName("mee-icon mee-icon-SkypeCircleCheck").length === 0)){
                //It means that it's a bonus activity that can be done, otherwise it's just an AD
                taskDoneMessage = false;
                console.log("moreActivities: OPENING NUMBER="+i);
                container.children[i].children[0].children[0].children[0].children[0].children[0].click();  //clicks the item
            }
        }
        if(taskDoneMessage){
            alert("All the daily task have been done for today");
        }
    }
}