let registered_users = JSON.parse(localStorage.getItem("vaccinated")) || [];

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
    </tr>`                     
    })
}
appendData(registered_users);


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
