var container = document.querySelector('.container');
var titleInput = document.getElementById('title');
var authorInput = document.getElementById('author');
var ISBNInput = document.getElementById('isbn');
var submitBtn = document.getElementById('book-form');
var resultTable = document.getElementById('book-list');


//EVENT LISTENERS
resultTable.addEventListener('click', deleteBtn);
submitBtn.addEventListener('submit' , addBookToList);

//FUNCTIONS
function createTableRow(title,author,ISBN){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var tdDltBtn = document.createElement('td'); 
    var link = document.createElement('a');
    link.href='#';
    link.textContent = 'X';
    link.className = 'delete';
    tdDltBtn.appendChild(link);
    td1.textContent = title;
    td2.textContent = author;
    td3.textContent = ISBN;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(tdDltBtn);
    resultTable.appendChild(tr);    
}

function alertDiv(text,classname){
    var newDiv = document.createElement('div');
    newDiv.className = 'alert';
    container.insertBefore(newDiv, document.querySelector('table'));
    console.log(newDiv);
    var text =document.createTextNode(text);
    newDiv.appendChild(text);
    newDiv.classList += classname;

}
function timeOut(){
    var toDelete = document.querySelector('.alert');
    
    setTimeout(() => {
        
        toDelete.remove();
        if(document.querySelector('.alert')){
            //document.querySelector('.alert').remove();
            setTimeout(() => {
                document.querySelector('.alert').remove();
            }, 1500);
        }
        
        
    }, 2000);
    
    
}


//ADD ROW FUNCTION
function addBookToList(e){
  if(String(titleInput.value).length==0||String(authorInput.value).length==0||String(ISBNInput.value).length==0){
    alertDiv('Please fill in all fields', ' error');
    timeOut();
    

  }else{
      createTableRow(titleInput.value, authorInput.value, ISBNInput.value);
      alertDiv('Book Added', ' success');
      timeOut();
  } 
  titleInput.value = '';
  authorInput.value = '';
  ISBNInput.value = '';
e.preventDefault();
}

//DELETE FUNCTION
function deleteBtn(e){
if(e.target.className==='delete'){
    e.target.parentNode.parentNode.remove();
    alertDiv('Book Removed!', ' success');
    
    timeOut();
    
 
}
} 


   








