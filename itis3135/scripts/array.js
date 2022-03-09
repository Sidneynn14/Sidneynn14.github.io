var person = new Array();
//["Layne Bryant", "Herbert Jacobs", "Renee Ballad", "Lily Walker", "Anayeli Anaya", "Oya Tammu", "Jasmine Gentry", "Herbert Jacobs", "Taylor Richardson"];
var salary = new Array();
//[86000, 93000, 82500, 92000, 87000, 92000, 96000, 101000, 98000];

//This function allows the user to add employee's salaries to the data
function addSalary(){
    let individualperson = document.getElementById("employees").value;
    let individualsalary = parseFloat(document.getElementById("salaryinput").value).toFixed(2);
    person.push(individualperson);
    salary.push(individualsalary);
}

//This function calculates and shows the average and highest values of salaries
function displayResults(){
    let average = 0;
    let total = 0;
    let highest = 0;
    
    for (i = 0; i < salary.length; i++)
    {
        if (salary[i] > highest)
        {
            highest = salary[i];
        }
        total = salary.reduce((a, b) => a + b, 0)
    }
    console.log(total)
    console.log(salary);
    average = parseFloat(total / salary.length).toFixed(2);
    document.getElementById("results").innerHTML = ("<h2>Results:</h2><br><p>The average salary is ") + average + (". The highest salary is ") + highest + (".<p>");
}

//This function displays the salaries in a table format
function displaySalary(){
    let table = "";
    //pulls from person and salary array
    for (i = 0; i < salary.length; i++)
    {
        table += "<tr><th>" + person[i] + "</th><th>$" + salary[i] + "</th></tr>";
    }
    document.getElementById("table").innerHTML = "<h2>Added Salaries</h2><table><tr><th>Name</th><th>Salary</th></tr>" + table + "</table>";
}