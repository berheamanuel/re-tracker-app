
var signUpEl = $('#signUpF');
var signInCard = $('.signin');
var signInBtn = $('#signin-btn');
var mainPage = $('.main-page');
var signUpCard = $('.signup');
var signUpFormBtn = $('#signUpM');


const firebaseConfig = {
   apiKey: "AIzaSyBZjeTlyL2WABSR-hUlGP-Hzmxx995dmhM",
   authDomain: "rxtracker-c03e8.firebaseapp.com",
   projectId: "rxtracker-c03e8",
   storageBucket: "rxtracker-c03e8.appspot.com",
   messagingSenderId: "345928831131",
   appId: "1:345928831131:web:cb301f532c09a13dbb363e",
   measurementId: "G-CRJR8S3JT2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var auth = firebaseApp.auth();



// sign up function  
function signUp(email, password) {

   auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
         // User signed up successfully
         console.log("User signed up:", userCredential);

      })
      .catch((error) => {
         // Handle errors here
         console.error("Signup error:", error);
      });

   if (email && password) {
      // mainPage.removeAttr('class', 'hide');
      signUpCard.attr('class', 'hide');
      signInCard.removeAttr('class', 'hide');
   } else {
      alert('sign-up failed. please try again.');
   }

}




//  function to Sign in
function signIn(email, password) {

   console.log('here');
   auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
         // User signed in successfully
         var user = userCredential.user;
         console.log("User signed in:", user);

      })
      .catch((error) => {
         // Handle errors here
         var errorCode = error.code;
         var errorMessage = error.message;
         console.error("Signin error:", errorCode, errorMessage);
      });

   if (email && password) {
      signInCard.attr('class', 'hide');
      mainPage.removeAttr('class', 'hide');

   } else {
      // alert('please fill in both email and password fields');
      signInPopup();
   }
}
var popup = $("#popup");

function signInPopup(){
  popup.removeAttr('class', 'hide');
}

signUpEl.on('click', function () {
   signInCard.attr('class', 'hide');
   signUpCard.removeAttr('class', 'hide');

});

// get sign-up form input
signUpFormBtn.on('click', function () {
   
   var email = $('#signup-email').val();

   var password = $('#signup-password').val();
   signUp(email, password);
});

// get sign-in form input
signInBtn.on('click', function () {
   var email = $('#email').val();
   var password = $('#password').val();
   signIn(email, password);

});



//  function to add prescription with a reminder
$("#add-Btn").on('click' , function (e) {
   e.preventDefault();
   var prescriptionInput = $('#prescription').val();   
   var reminderTime = $('#reminder').val();

   if (prescriptionInput && reminderTime) {
      var key = Date.now().toString();

      var item = {
         text: prescriptionInput,
         reminder: reminderTime,
      };

      // store the item in local storage
      localStorage.setItem(key, JSON.stringify(item));
      //add the item to the disply list
      displayItem(key, item);

      // Clear the input fields
      prescriptionInput = '';
      reminderTime = '';
      
   }
   var today = dayjs();
   $('#toDay').text(today.format('MMM D, YYYY'));

});



// function to display an item in the list
function displayItem(key, item) {
   
   var prescriptionList = $('#rx-list');
   var listItem = document.createElement('li');
   listItem.textContent =  `${item.text} (Reminder: ${item.reminder})`;

   // add button to remove items
   var removeButton = document.createElement('button');
   removeButton.textContent = 'Remove';
   removeButton.addEventListener('click', function () {
      //remove the item from local storage
      localStorage.removeItem(key);
      // remove the item from the display
      prescriptionList.remove(listItem);
   });

   listItem.appendChild(removeButton);
   prescriptionList.append(listItem);
}

// function to load items from local storage and display 
function loadItems() {
   for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var item = JSON.parse(localStorage.getItem(key));
      displayItem(key, item);
   }
}

loadItems();


