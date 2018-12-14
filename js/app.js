const usersGrid = document.getElementById('users-grid');

$.ajax({
  url: 'https://randomuser.me/api/?nat=us&results=12',
  dataType: 'json',
  success: function(data) {
    let employeesData = data.results;
    displayEmployees(employeesData);
  }
});

function displayEmployees(employeesData) {
  let employeesList = '<ul class="employee-ul">';

  for(let i = 0; i < employeesData.length; i += 1) {
    let employeeImg = employeesData[i].picture.large;
    let employeeName = employeesData[i].name.first;
    let employeeNameSecond = employeesData[i].name.last;
    let employeeEmail = employeesData[i].email;
    let employeeCellNumber = employeesData[i].cell;
    let employeeStreet = employeesData[i].location.street;
    let employeeCity = employeesData[i].location.city;
    let employeeState = employeesData[i].location.state;
    let employeePostcode = employeesData[i].location.postcode;
    let employeeBirthdateDD = employeesData[i].dob.date.substring(8, 10);
    let employeeBirthdateMM = employeesData[i].dob.date.substring(5, 7);
    let employeeBirthdateYYYY = employeesData[i].dob.date.substring(0, 4);

    employeesList +=
  `<li class="employee-li">
      <div class="employee-container">
        <div class="employee-data" id="emp-data">

          <img src="${employeeImg}" class="employee-img">
          <div class="employee-text">
            <h2 class="employee-name">${employeeName[0].toUpperCase() + employeeName.slice(1) + ' ' + employeeNameSecond[0].toUpperCase() + employeeNameSecond.slice(1)}</h2>
            <p class="employee-email">${employeeEmail}</p>
            <p class="employee-city">${employeeCity}</p>
            <p class="employee-number">${employeeCellNumber}</p>
            <p class="employee-address"> ${employeeState}, ${employeeStreet} ${employeePostcode}</p>
            <p class="employee-birthday">Birthday: ${employeeBirthdateDD}/${employeeBirthdateMM}/${employeeBirthdateYYYY}</p>

          </div>
        </div>
      </div>
  </li>`;

  }

  employeesList += '</ul>';


  $('#users-grid').html(employeesList);

  const employeeModal = document.getElementById('employee-modal');
  const modal = document.querySelector('.modal');
  const closePopup = document.getElementsByClassName('close-popup')[0];
  const employeeLi = document.querySelectorAll('.employee-li');
  const empData = document.getElementById('emp-data');
  const popupContent = document.getElementById('popup-content');


  $.each(employeeLi, function(i){
    employeeLi[i].addEventListener('click', (e)=>{
      $(this).children('.employee-number').css('display', 'block');
      let employeeTarget = $(this).clone();
     $('#add-employee-full-content').html(employeeTarget);
     $('#add-employee-full-content .employee-number').css("display", "block");
     $('#add-employee-full-content .employee-address').css("display", "block");
     $('#add-employee-full-content .employee-birthday').css("display", "block");
      modal.style.display = "block";

    });

  });

  closePopup.onclick = function() {
    modal.style.display = "none";
  }



}; // end employeeDisplay function
