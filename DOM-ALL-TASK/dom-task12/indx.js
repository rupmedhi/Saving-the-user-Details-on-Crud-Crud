//form value store
let formValue=document.getElementById("form");

//target ul to display
let ul=document.getElementById("ul-list");


let name=document.getElementById("product-name");
let descrption=document.getElementById("product-description");





//filter seach
let seach=document.getElementById("seach");
//target seach button to add search event
let seachbtn=document.getElementById("seachbtn")
//add event seach button to seach element
seach.addEventListener("keyup", seachItem);



//target submit button
let submit=document.getElementById("product-submit");

//add Display event submit button
submit.addEventListener("click", display);
//remove product event
ul.addEventListener("click", removeItam);




function display(e){
    e.preventDefault();
    // console.log(BothProductValue);
    let nameVal=document.getElementById("product-name").value;
    let descrptionVal=document.getElementById("product-description").value;
    let bothVal=`${nameVal} ${descrptionVal}`;
 
    
        
        let myObj={
            nameVal,
            descrptionVal
        }
        localStorage.setItem(myObj.nameVal, JSON.stringify(myObj));
        //  let obj_deserialized = JSON.parse(localStorage.getItem("obj"));
        //  console.log(obj_deserialized);
    // localStorage.setItem(nameVal, bothVal);
    
    



    //create li for display
    let li=document.createElement("li");
    //add class to li
    li.className="li-list";
    //create text node
    let text=document.createTextNode(bothVal);
    //text node append li
    li.appendChild(text);
    //append li to ul
    ul.appendChild(li);
    // console.log(ul);
    // console.log(li);



    //create delete button
    let deletebtn=document.createElement("button");
    //add classname
    deletebtn.className="Deletebtn"
    //create text node
    let btnText=document.createTextNode("Delete");
    //append  text to delete button
    deletebtn.appendChild(btnText);
    //append delete btn to li
    li.appendChild(deletebtn);
    //append li to ul
    ul.appendChild(li);



    //create a edit button
    let editbtn=document.createElement("button");
    let editText=document.createTextNode("edit");
    editbtn.appendChild(editText);
    li.appendChild(editbtn);
    ul.appendChild(li);
}



//remove itam function
function removeItam(e){
  if(e.target.classList.contains("Deletebtn")){
    if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
      
        ul.removeChild(li);
        localStorage.removeItem(li);
      }
  }
}


//filter seach products
function seachItem(e){
  let seachVal=seach.value.toUpperCase();
  let li=ul.getElementsByTagName("li")
  // console.log(li);
  for(let i=0; i<li.length;i++)
  {
    let liVal=li[i].textContent.toUpperCase();
    // console.log(liVal);
    // console.log(liVal);
    if(liVal){
      if(liVal.indexOf(seachVal)>-1)
      {
          // console.log(liVal);
        li[i].style.display="";
      }
      else
      {
      li[i].style.display="none";
      }
  }
}
}

  

  