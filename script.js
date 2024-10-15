const toggleButton = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const registrationFields = document.getElementById('registration-fields');
const loginFields = document.getElementById('login-fields');
const messageElement = document.getElementById('message');

let isLoginForm = false;
let users = []; // Массив для хранения пользователей

toggleButton.addEventListener('click', () => {
    isLoginForm = !isLoginForm;
    formTitle.textContent = isLoginForm ? 'Вход' : 'Регистрация';
    registrationFields.style.display = isLoginForm ? 'none' : 'block';
    loginFields.style.display = isLoginForm ? 'block' : 'none';
    messageElement.textContent = '';
});

// Регистрация
document.getElementById('register-btn').addEventListener('click', () => {
    messageElement.textContent = '';
    
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users.find(u => u.username === username)) {
        messageElement.textContent = 'Этот логин уже занят!';
        return;
    }

    users.push({ email, dob, firstName, lastName, username, password });
    messageElement.classList.add('success');
    messageElement.textContent = 'Регистрация прошла успешно!';
    
    // Очистка полей
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Вход
document.getElementById('login-btn').addEventListener('click', () => {
    messageElement.textContent = '';

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const modal = document.getElementById("myModal");
    const modal1 = document.getElementById("myModal1");
    const btn = document.getElementById("open-modal");
    const span = document.getElementsByClassName("close")[0];

    const user = users.find(u => u.username === loginUsername);

    if (!user) {
        messageElement.textContent = 'Пользователь не найден!';
        return;
    }
    span.onclick = function() {
        if (user.username.toLowerCase() === 'admin') {
            alert('Вы вышли как администратор.');
            modal.style.display = "none";
        }
    }
    document.getElementById("span1").onclick = function() {
            modal1.style.display = "none";
    }

    if (user.password === loginPassword) {
        alert(`Добро пожаловать, ${user.username}!`);
        

        // Очистка полей
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        if (user.username.toLowerCase() === 'admin') {
            alert('Вы вошли как администратор.');
            modal.style.display = "block";
        }
        else{
        console.log(users[0].email);
        document.getElementById('email1').innerHTML = `Email : ${users[0].email}`;
        document.getElementById('dob1').innerHTML = `Dob : ${users[0].dob}`;
        document.getElementById('firstName1').innerHTML = `Firstname : ${users[0].firstName}`;
        document.getElementById('lastName1').innerHTML = `Lastname: ${users[0].lastName}`;
        document.getElementById('username1').innerHTML = `Username: ${users[0].username}`;
        document.getElementById('password1').innerHTML = `Password: ${users[0].password}`;

       /* for (var i = 0; i < Object.keys(data).length; i++) {
          let div = document.createElement('div');
          div.innerHTML = `${ Object.keys(data)[i]}`;
          document.body.append(div);

        }*/
        let all = courses.getKeys();
        console.log(all);
        for(let i of all){
            let div = document.createElement('div');
            div.innerHTML = i;
            div.onclick = function() {
            let info = courses.getValue(i);
            if (info) {
                document.getElementById('aboutCourse').innerHTML = `Name: ${i} \n Online: ${info.online ? 'Yes' : 'No'} \n Program: ${info.program}`;
                
              }
            else {
                document.getElementById('aboutCourse').innerHTML = `${Name}`;
              }
            }
            document.getElementById("Courses").append(div);
        }


        modal1.style.display = "block";
        }
        
    } 
    else {
        messageElement.textContent = 'Неверный пароль!';
    }
});


function CoursesFunc() {
   let data = {}; 
  this.addValue = function(key, value) {
    if(data[key]){
      alert();
    }
    else{
      data[key] = value;
    }
  };
  this.getValue = function(key) {
    return data[key];
  };
  this.deleteValue = function(key) {
    if (data[key]) {
      delete data[key];
    }
    else {
      return false;
    }
  };
  this.getKeys = function() {
    return Object.keys(data);
  };
}

let courses = new CoursesFunc();

function add() {
  let Name = prompt('Введите название курса');
  let online = confirm('Курс в формате онлайн?');
  let program = prompt('Введите программу курса');

  courses.addValue(Name, { online: online, program: program });
}

function get() {
  let Name = prompt('Введите название курса');
  let info = courses.getValue(Name);
  if (info) {
    alert(`${Name} ${info.online ? 'Yes' : 'No'} ${info.program}`);
  }
  else {
    alert(`${Name}`);
  }
}

function listCourse() {
  let all = courses.getKeys();
  alert(`${all.join(",")}`);
}

function deleteCourse() {
  let Name = prompt('Введите название курса');
  if (courses.deleteValue(Name)) {
    alert(`${Name}`);
  }
  else {
    alert(`${Name}`);
  }
}

//Object.keys(myobj)[0];  //return the key name at index 0
//Object.values(myobj)[0]  //return the key values at index 0