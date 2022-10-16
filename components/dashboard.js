let registered_users = JSON.parse(localStorage.getItem("register-users")) || [];
let vaxinated_users = JSON.parse(localStorage.getItem("vaccinated")) || [];
let form = document.getElementById('form'); 
let sByAge, fByVaccine, fByPriority;
let idForVacine;

let appendData = (data) => {    
    let tableData = document.getElementById('tableData');
    tableData.innerHTML = '';

    data.map((el) => {        
        tableData.innerHTML += `<tr>           
        <td>${el.name}</td>
        <td>${el.age}</td>
        <td>${el.destination}</td>
        <td>${el.priority}</td>
        <td>${el.uniqueId}</td>
        <td>${el.vaccine}</td>    
        <td><button class="vaccinBtn" onclick='getOtp(${el.uniqueId})'>Vaccinate</button></td>              
        <td><button class="deleteBtn" onclick='deleteFn(${el.uniqueId})'>Delete</button></td>              
    </tr>`                           
    })
}
appendData(registered_users);

let getOtp = (uniqueId) => {
    idForVacine= uniqueId;
    let otp = prompt("Please enter OTP:", "Enter OTP");
    let isValid = registered_users.find((el) => el.uniqueId == idForVacine && el.otp == otp);    
    if(isValid !== undefined){
        alert(`${isValid.name} Added to Queue`)
        setTimeout(()=> {
            alert(`Vaccinating ${isValid.vaccine}`)
        }, 5000);
        setTimeout(()=> {
            alert(`${isValid.name} Vaccinated`)
            vacinateFn();
        }, 10000);
    } else {
        alert("wrong OTP");
    }  
}

let vacinateFn = () => { 
    let x = registered_users.find((el) => el.uniqueId == idForVacine);  
    vaxinated_users.push(x);    
    localStorage.setItem("vaccinated", JSON.stringify(vaxinated_users)); 
    let y = registered_users.filter((el) => el.uniqueId != idForVacine);
    localStorage.setItem("register-users", JSON.stringify(y));
    window.location.reload();     
}

let deleteFn = (id) => {
    let new_data = registered_users.filter((el) => el.uniqueId != id);
    localStorage.setItem("register-users", JSON.stringify(new_data));
    alert('Deleted successfully');
    window.location.reload();
}

const sortByAge = (event) => {      
    sByAge = event.target.value;   
    actualFilter(sByAge);
} 

const filterByVaccine = (event) => {    
    let fByVaccine = event.target.value; 
    // console.log(fByVaccine);    
    actualFilter(fByVaccine);
}

const filterByPriority = (event) => {
    fByPriority = event.target.value;       
    actualFilter(fByPriority);
}

const actualFilter = (todo) => {
  let data = registered_users;  
  if(todo==="alth"){
    data = data.sort((a,b) => a.age - b.age);
    appendData(data);
  } else if(todo==="ahtl"){
    data = data.sort((a,b) => b.age - a.age);  
    appendData(data);
  } else if(todo==="Covishield"){     
    data = data.filter((el) => el.vaccine == "Covishield");
    appendData(data);
  } else if(todo==="Covaxin"){
    data = data.filter((el) => el.vaccine == "Covaxin");
    appendData(data);    
  } else if(todo==="Sputnik"){
    data = data.filter((el) => el.vaccine == "Sputnik");
    appendData(data);     
  } else if(todo==="p0"){
    data = data.filter((el) => el.priority== "p0"); 
    appendData(data);    
  } else if(todo==="p1"){
    data = data.filter((el) => el.priority == "p1");
    appendData(data);    
  } else if(todo==="p2"){
    data = data.filter((el) => el.priority == "p2");
    appendData(data);     
  } else if(todo==="p3"){
    data = data.filter((el) => el.priority == "p3");
    appendData(data);     
  }  
}