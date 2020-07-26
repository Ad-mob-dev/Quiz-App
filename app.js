// global Variables
var pos = 0;
var correct = 0;
var chA,chB,chC,choice,optn;

// Math Obj
var mathQues = [
  {
      question: "What is 36 + 42",
      a: "64",
      b: "78",
      c: "76",
      answer: "B"
    },
  {
      question: "What is 7 x 4?",
      a: "21",
      b: "27",
      c: "28",
      answer: "C"
    },
  {
      question: "What is 16 / 2?",
      a: "8",
      b: "2",
      c: "3",
      answer: "A"
    },
  {
      question: "What is 8 x 10?",
      a: "82",
      b: "99",
      c: "80",
      answer: "C"
    },
    {
      question: "What is 3 + 5",
      a: "8",
      b: "9",
      c: "10",
      answer: "A"
    },
    
  ];
//Science Obj 
var scienceQues =[
    {
      question: "Which is the outermost planet in the solar system?",
      a: "Mercury",
      b: "Pluto",
      c: "Neptune",
      answer: "C"
    },
    {
      question: "The SI unit of charge is __________?",
      a: "Ampere",
      b: "Coulomb",
      c: "Ohm",
      answer: "B"
    },
    {
      question: "The lifespan of Red Blood Cells is __________ days?",
      a: "60",
      b: "120",
      c: "180",
      answer: "B"
    },
    {
      question: "The density of water is __________?",
      a: "2 g/cm^3",
      b: "1.5 g/cm^3",
      c: "1 g/cm^3",
      answer: "C"
    },
    {
      question: "Radioactivity was discovered by __________?",
      a: "kelvin",
      b: "Thomson",
      c: "Bacquerel",
      answer: "C"
    }
  ];
//History Obj
var historyQues =[
  {
    question: "Gwadar Port is constructed in the province of?",
    a: "Punjab",
    b: "Balochistan",
    c: "KpK",
    answer: "B"
  },
  {
    question: "What was the old name of PIA?",
    a: "Orient Airways",
    b: "kolachi Airways",
    c: "Air Pakistan",
    answer: "A"
  },
  {
    question: "What official name was given to Pakistan in 1956 constitution?",
    a: "Islamic Pakistan",
    b: "Islamic Republic of Pakistan",
    c: "Republic of Pakistan",
    answer: "B"
  },
  {
    question: "Who was the Prime Minister of Pakistan during enforcement of first constitution?",
    a: "Khuwaja Nizam Uddin",
    b: "Mohammad Ali bogra",
    c: "Chouhdary Mohammad Ali",
    answer: "C"
  },
  {
    question: "What document was firstly drafted to give pace to constitution making process?",
    a: "Pakistan Act",
    b: "Independence Act",
    c: "Objective Resolution",
    answer: "C"
  }
];
//CS Obj
var csQues =[
  {
    question: "The first Network is named as?",
    a: "CNNET",
    b: "ASAPNET",
    c: "ARPANET",
    answer: "C"
  },
  {
    question: "Elapsed time between an query and a response is called?",
    a: "Response Time",
    b: "Delay Time",
    c: "Processing Time",
    answer: "A"
  },
  {
    question: "Communication between a computer and a keyboard involves?",
    a: "Full-Duplex",
    b: "Simplex",
    c: "Half-Duplex",
    answer: "B"
  },
  {
    question: "Nodes are also called?",
    a: "Link",
    b: "Medium",
    c: "Devices",
    answer: "C"
  },
  {
    question: "Ethernet system uses ……..the technology?",
    a: "Tree",
    b: "Bus",
    c: "Ring",
    answer: "B"
  }
];

// Generate Quiz 
function quiz(ques){
 var head = document.getElementById("head");
if(pos >= ques.length){

  // Status of Quiz
head.innerHTML = "<center><h3 class='badge badge-dark p-3 status' style='font-size:30px; border-radius:30px;'> Correct : " + correct +" Out of "+ ques.length + " Questions</h3> <br> <h3 class='badge badge-dark p-3 status' style='font-size:30px; border-radius:30px;'> Score : " + (correct/ques.length)*100 + " % </h3> </center> <hr/>";

// Try again Button
var btn = document.createElement("button");
btn.innerHTML = "Try Again?";
btn.className += "btn btn-outline-primary font-weight-bold m-auto";
head.appendChild(btn);
btn.onclick = function (){
    
    pos = 0;
    correct = 0;
    quiz(ques);
}

//Back Button 
var btn1 = document.createElement("button");
btn1.innerHTML = "Back";
btn1.className += "btn btn-outline-dark font-weight-bold m-auto";
btn1.onclick = function(){
 window.location = "index.html";
}
head.appendChild(btn1);

  

    
    
}else{
    var question = ques[pos].question;
chA = ques[pos].a;
chB = ques[pos].b;
chC = ques[pos].c;
    var indx = pos+ 1 ;
    head.innerHTML = "<h5 class='bg-dark p-2'> Q"+indx+" : "+ question +"</h5>";
    head.innerHTML += "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='A'>" + chA +"</label>";
    head.innerHTML += "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='B'>" + chB+"</label>";
    head.innerHTML += "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='C'>" + chC+"</label> <hr>";
    head.innerHTML += "<button onclick='c(optn)' class='btn btn-outline-success m-auto font-weight-bold'> Submit </button>";
    head.style.margin = "auto";
    head.className +=" text-white";
    head.style.backgroundColor = "whitesmoke";
    document.body.style.backgroundImage ="url('bg.jpg')";
    
}

}

// check answer
function c(ques){
    var choices = document.getElementsByName("choices");
    
    
    for(var i=0;i<choices.length;i++){
        
        
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    
    if(choice == ques[pos].answer){
        correct++;

    }
    pos++;
    quiz(ques);
}

// entry point of App
window.onload = function(){
// Welcome Heading
  var heading = document.createElement("h4");
 heading.innerText = "Welcome To Quiz App";
 heading.id ="select";
 heading.className = "btn btn-dark disabled text-center";
 heading.style.fontSize ="25px";
 heading.style.marginBottom = "30px";
 heading.style.borderRadius = "30px";
 document.body.style.backgroundImage ="url('bg.jpg')"; 
 head.className += " text-center";
 head.style.backgroundColor ="white";
 head.appendChild(heading);

// Start Quiz Button
 var starQuiz = document.createElement("button");
 starQuiz.innerText = "Start Quiz";
starQuiz.style.margin = "auto";
starQuiz.style.borderRadius = "30px";
starQuiz.className += "btn btn-outline-dark font-weight-bold";
 head.appendChild(starQuiz); 
 
// disp Quiz Catalog on Start Quiz onClick
 starQuiz.onclick = function dispMenu(){
   heading.style.marginBottom ="30px";
  heading.innerText= "Select Option From Below list";
  heading.id ="select";
 
// Math Button 
var math = document.createElement("button");
math.innerText = "Math Quiz";
math.className = "btn btn-outline-success font-weight-bold m-auto";
head.appendChild(math);

// on Math click
math.onclick = function(){
  quiz(mathQues);
  head.classList.remove("text-center");
  optn = mathQues;
  
  }
  
// Science Button
var science = document.createElement("button");
science.innerText = "Science Quiz";
science.className = "btn btn-outline-danger font-weight-bold m-auto";
head.appendChild(science);

// on Science click
science.onclick = function(){
  quiz(scienceQues);
  head.classList.remove("text-center");
  optn = scienceQues;
  
  }

// history Button
var history = document.createElement("button");
history.innerText = "History Quiz";
history.className = "btn btn-outline-primary font-weight-bold m-auto";
head.appendChild(history);


//on History click
history.onclick = function(){
  quiz(historyQues);
  head.classList.remove("text-center");
  optn = historyQues;
  
  }



// cs Button
var cs = document.createElement("button");
cs.innerText = "Cs Quiz";
cs.className = "btn btn-outline-warning font-weight-bold m-auto";
head.appendChild(cs);

//on  Cs click 
cs.onclick = function(){
  quiz(csQues);
  head.classList.remove("text-center");
  optn = csQues;
  
  }
  
starQuiz.style.display = "none";


 }

}