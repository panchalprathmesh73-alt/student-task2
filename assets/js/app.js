
const cl = console.log;

const todoform = document.getElementById('todoform');
const fnamecontrol = document.getElementById('fname');
const lnamecontrol = document.getElementById('lname');
const contactcontrol = document.getElementById('contact');
const emailcontrol = document.getElementById('email');
const bdatecontrol = document.getElementById('bdate');
const Student = document.getElementById('Student');
const submitbtn = document.getElementById('submitbtn');

let studentArr = [
    {
        fname: "Aman",
        lname: "Sharma",
        contact: "9876543210",
        email: "aman@gmail.com",
        bdate: "2002-05-15"
    },
    {
        fname: "Ravi",
        lname: "Patil",
        contact: "9876543211",
        email: "ravi@gmail.com",
        bdate: "2001-08-20"
    },
    {
        fname: "Neha",
        lname: "Pawar",
        contact: "9876543212",
        email: "neha@gmail.com",
        bdate: "2003-02-10"
    },
    {
        fname: "Priya",
        lname: "Jadhav",
        contact: "9876543213",
        email: "priya@gmail.com",
        bdate: "2002-11-25"
    },
    {
        fname: "Rahul",
        lname: "Deshmukh",
        contact: "9876543214",
        email: "rahul@gmail.com",
        bdate: "2000-06-18"
    },
    {
        fname: "Sneha",
        lname: "Kulkarni",
        contact: "9876543215",
        email: "sneha@gmail.com",
        bdate: "2003-09-12"
    }
];

function onEdit(index) {

    let editobj = studentArr[index];

    fnamecontrol.value = editobj.fname;
    lnamecontrol.value = editobj.lname;
    contactcontrol.value = editobj.contact;
    emailcontrol.value = editobj.email;
    bdatecontrol.value = editobj.bdate;

    submitbtn.innerHTML = "Update Student";

}
// READ
function createtable(arr) {

    let result = "";

    arr.forEach((std, i) => {

        result += `
            <tr>
                <td>${i + 1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.contact}</td>
                <td>${std.email}</td>
                <td>${std.bdate}</td>
                <td>
                    <button class="btn btn-sm btn-warning"onclick="onEdit(${i})">Edit</button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger">Remove</button>
                </td>
            </tr>
        `;

    });

    Student.innerHTML = result;
}

createtable(studentArr);


// CREATE
function onhandlestudent(stu) {

    stu.preventDefault();

    let stdobj = {
        fname: fnamecontrol.value,
        lname: lnamecontrol.value,
        contact: contactcontrol.value,
        email: emailcontrol.value,
        bdate: bdatecontrol.value
    };

    studentArr.push(stdobj);

    createtable(studentArr);

    todoform.reset();

}

todoform.addEventListener('submit', onhandlestudent);
