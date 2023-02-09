// let submitbtn=document.getElementById("submit");
// let ul=document.getElementById("ullist");


// submitbtn.addEventListener("click", Display)


// function Display(e){
//     e.preventDefault();
//     //Display data
//      let name=document.getElementById("name").value;
//      let email=document.getElementById("email").value;
//      let bothVal=`${name} - ${email}`;
//      let li=document.createElement("li");
//      let text=document.createTextNode(bothVal);

//      //store data localstorage
//      let myObj={
//         name,
//         email
//      }

//      localStorage.setItem(myObj.email, JSON.stringify(myObj))

     


//     //create edit button
//     let editbtn=document.createElement("button");
//     let edittext=document.createTextNode("edit");
//     editbtn.appendChild(edittext);



//     //append li and ul
//     li.appendChild(text);
//     li.appendChild(editbtn);
//     ul.appendChild(li);
          
// }





let submitbtn=document.getElementById("submit");
let ul=document.getElementById("ullist");

submitbtn.addEventListener("click", StoreData);

function StoreData(e){
    e.preventDefault();
    //Display data
     let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let bothVal=`${name} - ${email}`;
     let li=document.createElement("li");
     let text=document.createTextNode(bothVal);

     //store data localstorage
     let myObj={
         name,
         email
      }
      localStorage.setItem(myObj.email, JSON.stringify(myObj))

      display(myObj);
}

function display(myObj){
    let li =document.createElement("li");
    li.textContent = myObj.name +" -" + myObj.email;
   



    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
    li.appendChild(deletebtn);
    
    deletebtn.onclick =()=>{
        localStorage.removeItem(myObj.email);
        ul.removeChild(li);
    }



    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);
    ul.appendChild(li);

    editbtn.onclick =()=>{
        localStorage.removeItem(myObj.email);
        ul.removeChild(li);
        document.getElementById("name").value = myObj.name;
        document.getElementById("email").value = myObj.email;

    }

}





























// <script>
//             function savetolocalstorage(event){
//                 event.preventDefault();
//                 const name= event.target.usernm.value;
//                 const email= event.target.emailId.value;
//                 const category= event.target.category.value;

//                 localStorage.setItem('name',name);
//                 localStorage.setItem('email',email)
//                 localStorage.setItem('category',category);
//                 const obj ={
//                     name,
//                     email,
//                     category
//                 }
//                 localStorage.setItem(email,JSON.stringify(obj))
//                 showuseronscreen(obj)
//             }
//             function showuseronscreen(obj){
//                 const parentelem = document.getElementById("listOfitems")
//                 const childelem = document.createElement('li')
//                 childelem.textContent = obj.name + '-'+ obj.email + '-'+ obj.category
//                 const deleteButton = document.createElement('input')
//                 deleteButton.type = "button"
//                 deleteButton.value = 'DELETE'
//                 deleteButton.onclick=()=>{
//                     localStorage.removeItem(obj.email)
//                     parentelem.removeChild(childelem)
//                 }
//                 const editButton = document.createElement('input')
//                 editButton.type ='button'
//                 editButton.value ='EDIT'
//                 editButton.onclick=()=>{
//                     localStorage.removeItem(obj.email)
//                     parentelem.removeChild(childelem)
//                     document.getElementById('usernameInputTag').value = obj.name
//                     document.getElementById('emailInputTag').value = obj.email
//                     document.getElementById('categoryInputTag').value = obj.category
//                 }
//                 childelem.appendChild(deleteButton)
//                 childelem.appendChild(editButton)
//                 parentelem.appendChild(childelem)

//             }
            
//         </script>
