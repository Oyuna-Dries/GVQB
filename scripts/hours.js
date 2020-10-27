// highlight current day on opeining hours
document.addEventListener("DOMContentLoaded", function(){
    let today = (new Date().getDay() -1) % 6;
    document.querySelectorAll('.opening-hours li')[today].className =  'today';
});
