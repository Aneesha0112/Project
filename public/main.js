import { fetchData, setCurrentUser, setCurrentNote,getCurrentUser, getCurrentNote } from "./fetch.js";



class User{
  constructor(email,password)
  {
      
      this.email=email;
      this.password=password;
  }
  getemail(){
      return this.email;
  }
  setemail(newemail){
      this.email = newemail;
  }
  getpassword(){
      return this.password;
  }
  setpassword(newpassword){
      this.password=newpassword
  }
}

const login1=document.getElementById("loginpage");

if(login1) login1.addEventListener('submit',funlogin)


function funlogin(e)
{
  e.preventDefault()
  
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  
  
  
  const user1=new User(email,password);
  console.log(user1);

  fetchData("/users/login", user1, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "notepage.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    // p.innerHTML = err.message;
  }) 
}


class Register{
  constructor(firstname,lastname,email,password)
  {   
      this.firstname=firstname; 
      this.lastname=lastname;
      this.email=email;
      this.password=password;
     
  }
  getemail(){
      return this.email;
  }
  setemail(newemail){
      this.email = newemail;
  }
  getpassword(){
      return this.password;
  }
  setpassword(newpassword){
      this.password=newpassword
  }
  getfirstname(){
      return this.firstname;
  }
  setfirstname(newfirstname){
      this.firstname = newfirstname;
  }
  getlastname(){
      return this.lastname;
  }
  setlastname(newlastname){
      this.lastname=newlastname;
  }
}

const reg=document.getElementById("regpage");
if(reg) reg.addEventListener('submit',register)


function register(e)
{
  e.preventDefault();
  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  
  

  
  
  //let fname=document.getElementById('fname').value;
  const user1=new Register(firstname,lastname,email,password);
  console.log(user1);

  fetchData("/users/register", user1, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "notepage.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    //p.innerHTML = err.message;
  })

}


class Note{
  constructor(note)
  {
      
      this.notecontent=note;
      
  }
  getnotecontent(){
      return this.notecontent;
  }
  setnotecontent(newnote){
      this.notecontent = newnote;
  }
}


let user = getCurrentUser();
const note=document.getElementById("notepage");
if(note) note.addEventListener('submit',funnote)

function funnote(e)
{
  e.preventDefault()
  
  let note=document.getElementById("notecontent").value;
  const user1=new Note(note);
  console.log(user1);






  user1.userID = user.userID;

    fetchData("/notes/createnote", user1 , "POST")

  .then((data) => {

    setCurrentUser(data);

    console.log(data);

   

  })

  .catch((err) =>{

    let p = document.querySelector('.error');

    p.innerHTML = err.message;

  })

  window.location.reload();

}


const usersBtn=document.getElementById("users-btn");

if(usersBtn)usersBtn.addEventListener('click',getUsers);



function getUsers(){
    fetch("http://localhost:3000/users/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let ul=document.getElementById("allUsers");

        data.forEach((user)=>{
            let li=document.createElement('li');
            let text=document.createTextNode(user.userName);

            li.appendChild(text);
            ul.appendChild(li);
        })
    })

    .catch((err)=>console.log(`error! ${err}`));
}



const notesBtn=document.getElementById("notes-btn");
if(notesBtn)notesBtn.addEventListener('click',getNotes);


if(user && note) getNotes();


function getNotes(){
  let Note= document.getElementById("notecontent");
  fetchData("/notes/getNote",user,"POST")
  .then((data) => {
    console.log(data);
 for(let i=0;i<data.length;i++){
 Note.value='\n'+data[i].notecontent
 }

    })
     .catch((err)=>console.log(`Error! ${err}`));

     window.location.href="notepage.html";
 }






