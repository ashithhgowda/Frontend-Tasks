let students=JSON.parse(localStorage.getItem("students"))||[];

const userName=document.getElementById("userName");
const userStudentid=document.getElementById("userStudentid");
const userDept=document.getElementById("userDept");
const userPercentage=document.getElementById("userPercentage");
const buttoninput=document.getElementById("buttoninput");
const tablebody=document.getElementById("tablebody");
const searchid=document.getElementById("searchid");
const tablefooter=document.getElementById("tablefooter")

buttoninput.addEventListener("click", function(){
    const student={
        name:userName.value,
        id:userStudentid.value,
        dept:userDept.value,
        percentage:userPercentage.value
    };
    students.push(student);

    localStorage.setItem("students",JSON.stringify(students))

    userName.value="";
    userStudentid.value="";
    userDept.value="";
    userPercentage.value="";

    renderStudents();
});

function renderStudents(list=students){
    tablebody.innerHTML="";

    list.forEach(student=>{
        const status=student.percentage>=50 ? "Pass":"Fail";
        const statusbar=student.percentage>=50?"pass":"fail";
        const initials=student.name
        .split(" ")
        .map(n=>n[0])
        .join("")
        .toUpperCase()
        tablebody.innerHTML+=`
            <tr class="table-info">
            <td class="table-head-th">
                <div class="student-profile">
                    <div class="initials-logo">${initials}</div>
                    <div class="initials-info">
                        <div class="initials-info-name">${student.name}</div>
                        <div class="initials-info-date">Joined: ${new Date().toDateString()}</div>
                    </div>
                </div>
            </td>
            <td class="table-head-th">
                <div class="identity-info">
                    <div class="identity-id">${student.id}</div>
                    <div class="identity-dept">${student.dept}</div>
                </div>
            </td>
            <td class="table-head-th">
                <div class="percentage-section">
                    <div class="percentage-text">${student.percentage}%</div>
                    <div class="progress-bar-section">
                        <div class="progress-bar ${statusbar}" style="width:${student.percentage}%"></div>
                    </div>
                </div>
            </td>
            <td class="table-head-th">
                <div class="status-action">
                    <div class="progress-bar-status ${statusbar}">${status}</div>
                    <button onclick="deleteStudent('${student.id}')" class="status-action-button"><svg xmlns="http://www.w3.org/2000/svg"width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
                </div>
            </td>
            </tr>
        `;
    });
    tablefooter.textContent=`
    Showing ${list.length} of ${students.length} students`
};

function deleteStudent(id){
    students=students.filter(student=>{
        return student.id!==id;
    });
    localStorage.setItem("students",JSON.stringify(students))
    renderStudents();
};

searchid.addEventListener("input",function(){
    const value=this.value.toLowerCase()
    const filtered=students.filter(student=>
        student.name.toLowerCase().includes(value)||student.id.toLowerCase().includes(value)||student.dept.toLowerCase().includes(value)
    )
    renderStudents(filtered);
})

renderStudents();
