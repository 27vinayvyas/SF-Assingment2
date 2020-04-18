/*
  Code for managing the leader board
  Using Arrays and Bubble sort
  Tried implementation with heaps 
  but couldnt figure out a better
  solution using heaps.
*/

//Arrays for scores and leader-names
var scores=[];
var names=[];
var count=1;


var indx=document.getElementById("div");
var indx2=document.getElementById("div2");

//Creates two dives for each table
var div1= document.createElement('div');
var div2= document.createElement('div');
var zz= document.createElement('br');
div1.appendChild(zz);
zz= document.createElement('br');
div2.appendChild(zz);


/*
  Function For Adding New Entry
  Creates two span leader and scor and two buttons and set there respective id
  Adds them to both the divs 
  Appends them to scores and names array and increment the count
  
  The id of each set of item is based on the current value of count,
  which indeed is related to there current position in the array 

  O(1)process
*/
function Add(){
  
  var name = "Leader"+count;
  var leader = document.createElement('span');
  leader.innerHTML=name;
  leader.id="1a"+count;
  leader.className="col-md-6";
  var scor = document.createElement('span');
  scor.innerHTML=0;
  scor.className="col-md-2";
  scor.id="1b"+count;
  var btn1 = document.createElement('button');
  btn1.innerHTML="INC";
  btn1.className="col-md-2";
  btn1.addEventListener ("click", increase);
  btn1.id="1c"+count;
  var btn2 = document.createElement('button');
  btn2.innerHTML="DEC";
  btn2.className="col-md-2";
  btn2.addEventListener ("click", decrease);
  btn2.id="1d"+count;
  div1.appendChild(leader);
  div1.appendChild(scor);
  div1.appendChild(btn1);
  div1.appendChild(btn2);
  
  name1 = "Leader"+count;
  leader = document.createElement('span');
  leader.innerHTML=name;
  leader.className="col-md-6";
  leader.id="2a"+count;
  scor = document.createElement('span');
  scor.innerHTML=0;
  scor.className="col-md-2";
  scor.id="2b"+count;
  btn1 = document.createElement('button');
  btn1.innerHTML="INC";
  btn1.className="col-md-2";
  btn1.id="2c"+count;
  btn1.addEventListener ("click", increase);
  btn2 = document.createElement('button');
  btn2.innerHTML="DEC";
  btn2.className="col-md-2";
  btn2.id="2d"+count;
  btn2.addEventListener ("click", decrease);
  div2.appendChild(leader);
  div2.appendChild(scor);
  div2.appendChild(btn1);
  div2.appendChild(btn2);

  count++;
  names.push(name);
  scores.push(0);

}


/*
  Increment Function
  Finds the elements to be affected from the id of button clicked.
  Make the required changes in scores array

  CASE 1 : If elements are different,
  then we would check only the previous element
  of the scores array and swap if the current element
  is greater than its previous element. This is so because
  we are incrementing the element just by one at a time,
  so it cannot move more than one element at a time.
  O(1) process
  
  CASE 2 : If there is repetation in elements,
  then we would have to check all the elements in 
  the worse case.
  O(n)process 
  
*/
function increase(){
  
  var str=event.target.id;
  var str=str.substr(2,str.length-2);
  var x=parseInt(str);
  console.log(x);
  scores[x-1]+=1;
  
  while(x>1 && scores[x-1]>scores[x-2]){
    var lead=names[x-1],sco=scores[x-1];
    names[x-1]=names[x-2];
    scores[x-1]=scores[x-2];
    names[x-2]=lead;
    scores[x-2]=sco;
    console.log(scores);
    var cnt1="1b"+x;
    x-=1;
    var cnt2="1b"+x;
    x+=1;
    document.getElementById(cnt1).innerHTML=scores[x-1];
    document.getElementById(cnt2).innerHTML=scores[x-2];
    cnt1="2b"+x;
    x-=1;
    cnt2="2b"+x;
    x+=1;
    document.getElementById(cnt1).innerHTML=scores[x-1];
    document.getElementById(cnt2).innerHTML=scores[x-1];

    cnt1="1a"+x;
    x-=1;
    cnt2="1a"+x;
    x+=1;
    document.getElementById(cnt1).innerHTML=names[x-1];
    document.getElementById(cnt2).innerHTML=names[x-2];
    cnt1="2a"+x;
    x-=1;
    cnt2="2a"+x;
    x+=1;
    document.getElementById(cnt1).innerHTML=names[x-1];
    document.getElementById(cnt2).innerHTML=names[x-2];
   x--; 
  }
  if(x==1 || scores[x-1]<=scores[x-2]){
    var cnt="1b"+x;
    document.getElementById(cnt).innerHTML=scores[x-1];
    cnt="2b"+x;
    document.getElementById(cnt).innerHTML=scores[x-1];
  }
    
  
}

/*
  Similar to Increment
  Decreases the value.
  Same time complexity
*/

function decrease(){
  
  var str=event.target.id;
  var str=str.substr(2,str.length-2);
  var x=parseInt(str);
  console.log(x);
  scores[x-1]-=1;
  while(x<scores.length && scores[x-1]<scores[x]){
    var lead=names[x-1],sco=scores[x-1];
    names[x-1]=names[x];
    scores[x-1]=scores[x];
    names[x]=lead;
    scores[x]=sco;
    console.log(scores);
    
    var cnt1="1b"+x;
    x+=1;
    var cnt2="1b"+x;
    x-=1;
    document.getElementById(cnt1).innerHTML=scores[x-1];
    document.getElementById(cnt2).innerHTML=scores[x];
    var cnt1="2b"+x;
    x+=1;
    var cnt2="2b"+x;
    x-=1;
    document.getElementById(cnt1).innerHTML=scores[x-1];
    document.getElementById(cnt2).innerHTML=scores[x];

    var cnt1="1a"+x;
    x+=1;
    var cnt2="1a"+x;
    x-=1;
     document.getElementById(cnt1).innerHTML=names[x-1];
    document.getElementById(cnt2).innerHTML=names[x];
    var cnt1="2a"+x;
    x+=1;
    var cnt2="2a"+x;
    x-=1;
    document.getElementById(cnt1).innerHTML=names[x-1];
    document.getElementById(cnt2).innerHTML=names[x];
    x++;
  }
  if(x==scores.length || scores[x-1]>=scores[x]){
    var cnt="1b"+x;
    document.getElementById(cnt).innerHTML=scores[x-1];
    var cnt="2b"+x;
    document.getElementById(cnt).innerHTML=scores[x-1];
  }
    
  
}
indx.appendChild(div1);
indx2.appendChild(div2);
