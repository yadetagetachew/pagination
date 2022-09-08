/* This function will create and insert/append the elements needed to display a "page" of nine students */
 let iteams = 9
function showPage(list, page) {
    let start = (page * iteams) - iteams;
    let end = page * iteams;

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
    let numberOfPages = Math.ceil(list.length / iteams) 

    let paginationElement = document.querySelector('.link-list')
    paginationElement.innerHTML = ""

    for(let i =  0; i < numberOfPages; i++){
        paginationElement.innerHTML += `
        <li>
            <button type="button">${i+1}</button>
        </li>`
    }
    let firstChild = document.querySelector('ul.link-list li:first-child button');
    firstChild.className = 'active';
 
    paginationElement.addEventListener('click', function(e) {
       if (e.target.tagName.toLowerCase() === 'button') {
          let allButtons = document.querySelectorAll("ul.link-list li button");
          Array.from(allButtons).forEach(function(button) {
             button.classList.remove('active');
          })
          e.target.classList.add('active');
          let index = parseInt(e.target.innerHTML);
          showPage(data, index);
       }
    })
 }





// Call functions
showPage(data,1)
pageButtons(data)


// for(let i = 0; i < buttonPage.length; i++){
//     buttonPage[i].addEventListener("click", changePage)
// }

// function changePage(){
//     let pageNum = parseInt(e.target.innerHTML)
//     buttonPage = document.querySelectorAll('.button')

//     for(i = 0; i < buttonPage.length; i++){
//         if(i === (pageNum)){
//             buttonPage[i].classList.add('.active')
//         }else{
//             buttonPage[i].classList.remove('.active')
//         }
//     }
// }
// showPage(data,pageNum)

