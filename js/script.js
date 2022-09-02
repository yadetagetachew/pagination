/* This function will create and insert/append the elements needed to display a "page" of nine students */

function showPage(list, page) {
    let start = (page * 9) - 9;
    let end = page * 9;

    let studentData = document.querySelector(".student-list");

    studentData.innerHTML = "";

    for(let i = start; i < end; i++){
        studentData.innerHTML += `
            <li class="student-item cf">
                <div class="student-details">
                    <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                    <h3>${list[i].name.first} ${list[i].name.last}</h3>
                    <span class="email">${list[i].email}</span>
                </div>
                <div class="joined-details">
                    <span class="date">Joined ${list[i].registered.date}</span>
                </div>
            </li>`;
    }
}


/* Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons */
function pageButtons(list){
    let numberOfPages = list.length / 9

    let paginationElement = document.querySelector('.link-list')
    paginationElement.innerHTML = ""

    for(let i =  0; i < numberOfPages; i++){
        paginationElement.innerHTML += `
        <li>
            <button type="button">${i+1}</button>
        </li>`
    }
}



// Call functions
showPage(data,1)
pageButtons(data)

