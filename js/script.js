
function whocare() {
    document.getElementById("AnswerBox").innerHTML = '&nbspRight!&nbsp';
    document.getElementById("AnswerBox").style.visibility = "visible";
    document.getElementById("Why").style.visibility = "visible";
}

function death() {
    document.getElementById("AnswerBox").innerHTML = '&nbspWrong!&nbsp';
    document.getElementById("AnswerBox").style.visibility = "visible";
    document.getElementById("Why").style.visibility = "visible";
}
function coldlaugh() {
    document.getElementById("AnswerBox2").innerHTML = '&nbspRight!&nbsp';
    document.getElementById("AnswerBox2").style.visibility = "visible";
    document.getElementById("Why2").style.visibility = "visible";
}

function hehe() {
    document.getElementById("AnswerBox2").innerHTML = '&nbspWrong!&nbsp';
    document.getElementById("AnswerBox2").style.visibility = "visible";
    document.getElementById("Why2").style.visibility = "visible";
}
function webpage() {
  if(document.getElementById("search").value=='trump'){
    window.open("https://www.donaldjtrump.com/");
  }else if(document.getElementById("search").value=='hillary'){
    window.open("https://www.hillaryclinton.com/");
  }else{
    var x=document.querySelector("#search").value;
    var url="https://www.google.com/#q=" + x;
    window.open(url);
  }
}
function nexttest(){
  document.getElementById("testtest2").style.visibility = "visible";
}
function moretest(){
  alert("Sorry, the programer is too tired to get another one...");
}

function hillaryVote() {
    if (confirm("Are you sure you want to vote for Trump?")) {
        if (confirm("Did you notice about his facial expression?")) {
            alert("Facial expression is a very important part expressing his feeling");
        } else {
            alert("Facial expression is transforming his words");
        }
    } else {
        alert("Do you trully understand his words? Remember to see his facial exprssion");
    }

}

function trumpVote() {
    if (confirm("Are you sure you want to vote for Trump?")) {
        if (confirm("Did you notice about his facial expression?")) {
            alert("Facial expression is a very important part expressing his feeling");
        } else {
            alert("Facial expression is transforming his words");
        }
    } else {
        alert("Do you trully understand his words? Remember to see his facial exprssion");
    }

}
