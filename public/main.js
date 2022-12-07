// getUsers button 
// document.getElementById("btn-users").addEventListener('click', getUsers);

/*function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
} */

async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  
const login1=document.getElementById("loginpage");
const reg=document.getElementById("regpage");
const note=document.getElementById("notepage");
//console.log(login1)
if(login1) login1.addEventListener('submit',funlogin)
if(reg) reg.addEventListener('submit',register)
if(note) note.addEventListener('submit',funnote)

function register(e)
{
    e.preventDefault();
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
    

    class User{
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
    
    //let fname=document.getElementById('fname').value;
    const user1=new User(firstname,lastname,email,password);
    console.log(user1);
}

function funlogin(e)
{
    e.preventDefault()
    
    let email=document.getElementById('user').value;
    let password=document.getElementById('passwd').value;
    
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
    
    const user1=new User(email,password);
    console.log(user1);
}

function funnote(e)
{
    e.preventDefault()
    
    let note=document.getElementById('note').value;
    
    
    class User{
        constructor(note)
        {
            
            this.note=note;
            
        }
        getnote(){
            return this.note;
        }
        setnote(newnote){
            this.note = newnote;
        }
    }
        
    
    const user1=new User(note);
    console.log(user1);
}