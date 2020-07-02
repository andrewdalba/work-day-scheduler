// Define global variables here:
var timeBlockId
var hour = moment().hours();

var time;
var text;

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// targets the whole document -- "ready()" calls a function as- 
// soon as the pages DOM becomes safe to manipulate
$(document).ready(function () {

    $(".btn").on("click", function () {
        time = $(this).parent().attr("id");
        text = $(this).prev().val();
        localStorage.setItem(time, text);
        console.log(text);
        console.log(time);
    });

    for (var i = 9; i <= 17; i++) {
        var userText = localStorage.getItem(i);
        var target = "#" + i;
        $(target).children(".textField").val(userText);
        console.log(target);
    }

    // THEN the current day is displayed at the top of the calendar
    // target the ID current Day and use moments.js to replace the text with the date
    $("#currentDay").text(moment().format('dddd MMMM Do'));
    // create a function that keeps track of the current hour
    // and changes the color of the blocks depending on the current hour
    function updateCurrentTime() {
        // target everything with the class "timeBlock"
        // ".each()" runs a callback function for each of the elements with the class "timeBlock"
        $(".timeBlock").each(function () {
            // WHEN I view the timeblocks for that day
            // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
            // change the class of the element in js depending on what moment.js is
            // sets the attribute "id" for each element with the class "timeblock"
            timeBlockId = parseInt($(this).attr("id"));
            if (hour === timeBlockId) {
                $(this).addClass("present");
            }
            if (hour > timeBlockId) {
                $(this).addClass("past");
            }
            if (hour < timeBlockId) {
                $(this).addClass("future");
            }
        });
    }
    updateCurrentTime();

});



// WHEN I click the save button for that timeblock
// make sure the Save button works
// THEN the text for that event is saved in local storage
// do we need j.son stringify??

// WHEN I refresh the page
// THEN the saved events persist
// Event.preventDefault(event);

