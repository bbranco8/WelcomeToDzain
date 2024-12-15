document.addEventListener('DOMContentLoaded', function() {
  // OPEN WORK & TEACHERS 
  // select all the subjects
  let subjects = document.querySelectorAll("article");

  subjects.forEach(s => {
    // select the "button"	
    let select_work = s.querySelector(".open:nth-child(1)");
    let select_teacher = s.querySelector(".open:nth-child(2)");
    // select the hidden info
    let work_info = s.querySelector("tbody:nth-child(2)");
    let teacher_info = s.querySelector("tbody:nth-child(3)");


    // add event listener to the "button"
    select_work.addEventListener('click', open_work);
    select_teacher.addEventListener('click', open_teacher);

    // function to open/close the work's hidden info 
    function open_work() {
      // if the window is bigger than 990px it opens the hidden info
      if(window.innerWidth >= 990) {
        // if the teacher's hidden info is open, it closes it
        if(teacher_info.classList.contains("hide") === false) {
          teacher_info.classList.add("hide");
          s.classList.toggle("expand_teacher");
        }

        // open/close the work's hidden info 
        work_info.classList.toggle("hide");
        s.classList.toggle("expand_work");

      // if the window is smaller than 990px it shows an alert
      } else {
        alert("Use a bigger screen to see!");
      }
    }

    // function to open/close the teachers's hidden info 
    function open_teacher() {
      // if the window is bigger than 912px it opens the hidden info
      if(window.innerWidth >= 912) {
        
      // if the work's hidden info is open, it closes it
      if(work_info.classList.contains("hide") === false) {
        work_info.classList.add("hide");
        s.classList.toggle("expand_work");
      }

      // open/close the teacher's hidden info 
      teacher_info.classList.toggle("hide");
      s.classList.toggle("expand_teacher");

      // if the window is smaller than 990px it shows an alert
      } else {
        alert("Use a bigger screen to see!");
      }
    }

    // FOR SMALLER SCREENS 
    function reduce() {
      if(window.innerWidth <= 989) {
        work_info.remove();
        teacher_info.remove();
        select_work.style.fontSize = "15px";
        select_teacher.style.fontSize = "15px";
      }
    }

    reduce();
  });
});

/* API */
fetch('https://randomuser.me/api/?inc=gender,name,email,registered&results=2&nat=gb,us').then(function(data) {
  return data.json();
}).then(function(obj) {
  // call a function that converts the data to HTML
  convertToHTML(obj, 0); // first user
  convertToHTML(obj, 1); // second user
});

function convertToHTML(obj, number) {
  let results = obj.results[number];
  let body = document.body;
  let aside = document.querySelector(".user");
  let div = aside.appendChild(document.createElement("div"));
  let name = div.appendChild(document.createElement('h3'));
  let age;
  let email = div.appendChild(document.createElement('p'));
  let info = div.appendChild(document.createElement('p'));
  let img = aside.appendChild(document.createElement('img'));

  if(results.registered.age < 18) { // if the user is under 18 years old
    age = '18';
  } else {
    age = results.registered.age;
  }

  // name and email of the user
  name.innerText = results.name.title + ' ' + results.name.first + ' ' + results.name.last + ', ' + age;
  email.innerText = results.email;

  if(number === 0) { // if the user is the first one
    info.innerHTML = '<b> Opinion: </b> I loved the first subject! It allows you to draw in such different places such as Jardim Botânico Universidade de Coimbra, Galeria de Zoologia, CAC and Chiado. But be careful, it is not a good idea to leave drawings undone, as you will then have to make them in a hurry for the final assessment.';
  } else { // if the user is the second one
    info.innerHTML = '<b> Question: </b> How do we have access to our schedules?  <br> <b> Answer: </b> A few days before the semester starts, you will receive an email informing you that the schedules are available and the day of registration for PLs and TPs. When registering, you can select the teacher/schedule you prefer.';
  }

  if(results.gender === 'male') { // if the user is male, then add a male image
    if(window.innerWidth > 1283) {
      img.src = 'images/male.png';
    } else if(window.innerWidth < 1283 && window.innerWidth > 599) {
      img.src = 'images/male2.png';
    } else {
      img.src = 'images/male3.png';
    }
  } else { // if the user is female, then add a female image
    if(window.innerWidth > 1283) {
      img.src = 'images/female.png';
    } else if(window.innerWidth < 1283 && window.innerWidth > 599) {
      img.src = 'images/female2.png';
    } else {
      img.src = 'images/female3.png';
    }
  }

  return body;
}

