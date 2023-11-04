

var signInBtn = $('#signin-btn');
var signInCard = $('.signin');
var mainPage = $('.main-page');
signInBtn.on('click', function () {
   console.log('123');
   
   signInCard.attr('class', 'hide');
   mainPage.removeAttr('class', 'hide');
   mainPage.attr('class', 'display');

});

// function listPrescription() {
//     // console.log('123');
//     var prescriptionName = $('#prescription').value.trim();
//     var prescriptionList = prescriptionName.textContent;            
                                
//     localStorage.setItem('prescriptionList', prescriptionList);
//  }

//  $('#add-Btn').on('click', function () {
// listPrescription();
//  });




// My attempt to creating input for prscriptions
var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("Enter your prescription");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
      
    }
    inputBox.value = "";
}



            {/* // code for calendar */
            
            var date = document.getElementById("date");
            var day = document.getElementById("day");
            var month = document.getElementById("month");
            var year = document.getElementById("year");
            
            var today = new Date();
            
            var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            
            date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
            day.innerHTML = weekDays[today.getDay()];
            month.innerHTML = allMonths[today.getMonth()];
            year.innerHTML = today.getFullYear();
}


// This is the script for the modal popup---------------------------------
// {
//     var popup = document.getElementById("popup");

// function openPopup(){
//   popup.classList.add("open-popup");
// }
// function closePopup(){
//   popup.classList.remove("open-popup");
// }
// }