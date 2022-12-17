
let btn = document.querySelector(".addBook");
btn.addEventListener("click", function(){
  document.querySelector(".add").style.display = "block";
 
 
})

let bookTitle = document.getElementById("book-title");
let bookAuthor = document.getElementById("Author");
let bookPages = document.getElementById("Pages");
let addBook = document.getElementById("save");

addBook.addEventListener('click',function(e){
    e.preventDefault();
    let table = document.getElementById("myTable");
    let icon = document.getElementById("icon");
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
c1.innerText =  bookTitle.value ;
c2.innerText = bookAuthor.value;
c3.innerText = bookPages.value;
c4.innerHtml = icon;
    
    


    document.querySelector(".add").style.display = "none";


})
let del = document.getElementById("icon");
del.addEventListener('click', function(){
    table.deleteRow(1);
})
