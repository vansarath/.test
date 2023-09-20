let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click" , (event)=>{
    event.preventDefault(); // use for make form  not refrsh or call clear buffer
    // start make error alert message input box user name
    if(userName.value == ""){
        error(userName , `Username can not be empty &#10008;`);
    } else {
        success(userName);
    }
  // end of make error username
  // start make error alert message ,input box password
  
     if (passWord.value == ''){
        error(passWord , `PassWord Can not be empty &#10008;`);
     } else {
        success(passWord );
     }
    //   end of make error password
  });
  let error = (element , sms)=>{
     element.style.border = '3px solid red';
     let parent = element.parentElement; // can catch all element inparent class
     let p = parent.querySelector('p');
     p.innerHTML = sms;
     p.style.visibility = "visible";
  };
  let success  = (element)=>{
    element.style.border = '3px solid #1DB954';
    let parent = element.parentElement;
    let p = parent.querySelector("p");
    p.style.visibility = "hidden";
  };


