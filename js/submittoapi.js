function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://ywtefrn419.execute-api.eu-west-1.amazonaws.com/v1/contact";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name can not less than 2 char");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Please enter your email");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        "name" : name,
        "email" : email,
        "desc" : desc
     };

    $.ajax({
      type: "POST",
      url : "https://ywtefrn419.execute-api.eu-west-1.amazonaws.com/v1/contact",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successful");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessful");
      }});
  }
