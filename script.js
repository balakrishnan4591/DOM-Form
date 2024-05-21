function renderData() {
  var check = document.getElementById("form").reportValidity();

  var foodCount = foodcheck();

  if (foodCount >= 2) {
    if (check) {
      var firstname = document.getElementById("first-name").value;
      var lastname = document.getElementById("last-name").value;
      var email = document.getElementById("email").value;
      var address = document.getElementById("address").value;
      var pincode = document.getElementById("pincode").value;
      var state = document.getElementById("state").value;
      var country = document.getElementById("country").value;
      var gender = document.querySelector("input[type = radio]:checked").value;

      var food = document.getElementById("food");

      var table = document.getElementById("agent_table");
      // GET TOTAL NUMBER OF ROWS
      var x = table.rows.length;

      var row = table.insertRow(x);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);

      cell1.outerHTML = `<th> ${x}</th>`;
      cell2.innerHTML = firstname;
      cell3.innerHTML = lastname;
      cell4.innerHTML = email;
      cell5.innerHTML = address;
      cell6.innerHTML = pincode;

      cell7.innerHTML = gender;

      cell8.innerHTML = state;
      cell9.innerHTML = country;

      var arr = [];
      for (i = 0; i < food.options.length; i++) {
        if (food.options[i].selected) {
          arr.push(food.options[i].text);
        }
      }

      cell10.innerHTML = arr;

      document.getElementById("form").reset();
    }
  } else alert("Select atleast 2 food choices");
}

function foodcheck() {
  var food = document.getElementById("food");

  var arr = [];
  for (i = 0; i < food.options.length; i++) {
    if (food.options[i].selected) {
      arr.push(food.options[i].text);
    }
  }

  return arr.length;
}
