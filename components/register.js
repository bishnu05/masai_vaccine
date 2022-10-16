let registered_users = JSON.parse(localStorage.getItem("register-users")) || [];

let register_data;

const registerfn = (e) => {
  e.preventDefault();
  let form = document.getElementById("form");
  let otp = Math.floor(Math.random()*10000);

  register_data = { 
    uniqueId: form.ID.value,
    name: form.Name.value,
    age: form.Age.value,
    destination: form.Designation.value,
    priority: form.Priority.value,
    vaccine: form.Vaccine.value,
    otp: otp,    
  };
  let isUser = registered_users.find(
    (el) => el.uniqueId === register_data.uniqueId
  );

  if (isUser === undefined) {
    registered_users.push(register_data);
    localStorage.setItem("register-users", JSON.stringify(registered_users));
    alert(`Register success and your otp is ${otp}`);
    form.reset();
  } else {
    alert("Please enter Unique ID");
  }
  // console.log(register_data);
};


