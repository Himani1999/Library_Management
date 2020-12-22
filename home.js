
function read(cb) {
    var num = new XMLHttpRequest();
    num.onreadystatechange = reportStatus;
    function reportStatus() {
        if (num.readyState == 4) {
            cb(this.responseText);
        } else {
            cb(null);
        }
    }
    num.open("GET","test_data.json", true);
    num.send();
}
function allData() {
    read(function (data) {
        var employee = JSON.parse(data);
        document.getElementById('table').innerHTML = ` <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>Department</th><th>Salary</th></tr>`;
        for (let i = 0; i < employee.length; i++) {
            var myTable = document.getElementById("table");
            var tbl = document.createElement("tr");
            tbl.innerHTML = "<td>" + employee[i].id + "</td><td>" + employee[i].first_name + "</td><td>" + employee[i].last_name + "</td><td>" + employee[i].email + "</td><td>" + employee[i].gender + "</td><td>" + employee[i].department + "</td><td>" + employee[i].salary + "</td>";
            myTable.appendChild(tbl);
        }
    });
}


function filterRecord() {
    var c = document.getElementById('third').value;
    read(function (data) {

        var employee = JSON.parse(data);
        var filteredData = employee.filter(function (x) {
            return (x.gender = c);
        });
        if (filteredData[0] == undefined) {
            alert("Record not found at given condition");
        } else {
            document.getElementById('table').innerHTML = ` <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>Department</th><th>Salary</th></tr>`;
            for (let i = 0; i < filteredData.length; i++) {
                var myTable = document.getElementById("table");
                var tbl = document.createElement("tr");
                tbl.innerHTML = "<td>" + filteredData[i].id + "</td><td>" + filteredData[i].first_name + "</td><td>" + filteredData[i].last_name + "</td><td>" + filteredData[i].email + "</td><td>" + filteredData[i].gender + "</td><td>" + filteredData[i].department + "</td><td>" + filteredData[i].salary + "</td>";
                myTable.appendChild(tbl);
            }
        }
    })
}

document.getElementById('btn1').addEventListener('click', filterRecord);

