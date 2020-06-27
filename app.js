var logo = document.querySelector(".logo");
var unwanted = document.querySelector(".unwanted");


// Function for opening the modal
function openModal(id) {

  switch (id) {
    case 'about':
      logo.style.display = 'none';
      unwanted.style.display = 'none';
      document.getElementById("simplemodal0").style.display = 'block';
      break;
    case 'project':
      logo.style.display = 'none';
      unwanted.style.display = 'none';
      document.getElementById("simplemodal1").style.display = 'block';
      break;
    case 'skills':
      logo.style.display = 'none';
      unwanted.style.display = 'none';
      document.getElementById("simplemodal2").style.display = 'block';
      break;
    case 'contact':
      logo.style.display = 'none';
      unwanted.style.display = 'none';
      document.getElementById("simplemodal3").style.display = 'block';
      break;
  }

}

// Function for closing the modal


function closeModal(id) {

  switch (id) {
    case 'ca':
      document.getElementById("simplemodal0").style.display = 'none';
      logo.style.display = '';
      unwanted.style.display = '';
      break;
    case 'cp':
      document.getElementById("simplemodal1").style.display = 'none';
      logo.style.display = '';
      unwanted.style.display = '';
      break;
    case 'cs':
      document.getElementById("simplemodal2").style.display = 'none';
      logo.style.display = '';
      unwanted.style.display = '';
      break;
    case 'cc':
      document.getElementById("simplemodal3").style.display = 'none';
      logo.style.display = '';
      unwanted.style.display = '';
      break;
  }

}
