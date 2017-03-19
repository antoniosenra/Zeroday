console.log("testing console log for info-input");


function RedirectToDownloadForm() {

  if (document.getElementById("FirstName").value == "") {
    var FirstName = null;
  } else {
    var FirstName = "1";
  }
  if (document.getElementById("MiddleInitial").value == "") {
    var MiddleInitial = null;
  } else {
    var MiddleInitial = "2";
  }
  if (document.getElementById("LastName").value == "") {
    var LastName = null;
  } else {
    var LastName = "3";
  }
  if (document.getElementById("Address1").value == "") {
    var Address1 = null;
  } else {
    var Address1 = "4";
  }
  if (document.getElementById("Address2").value == "") {
    var Address2 = null;
  } else {
    var Address2 = "5";
  }
  if (document.getElementById("City").value == "") {
    var City = null;
  } else {
    var City = "6";
  }
  if (document.getElementById("State").value == "") {
    var State = null;
  } else {
    var State = "7";
  }
  if (document.getElementById("Zip").value == "") {
    var Zip = null;
  } else {
    var Zip = "8";
  }
  if (document.getElementById("PhoneNumber").value == "") {
    var PhoneNumber = null;
  } else {
    var PhoneNumber = "9";
  }
  if (document.getElementById("EmailAddress").value == "") {
    var EmailAddress = null;
  } else {
    var EmailAddress = "10";
  }

  if (FirstName == null || MiddleInitial == null || LastName == null || Address1 == null || Address2 == null ||
    City == null || State == null || Zip == null || PhoneNumber == null || EmailAddress == null) {
      document.getElementById("Error").innerHTML = "<p>Please fill in all the input fields</p>"
  } else {
      window.location.assign("downloadform.html")
}
}

//This function checks whether all the input boxes have been filled in. If they haven't, the "continue" button won't work.
