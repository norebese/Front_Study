const todoList = [];

function addTodo(ev){


    if (document.getElementById('search-input').value.trim() === '')
    return;

//추가할 일정요소 만들기
function getTodoNode(){
     //요소만들기
    //내가 입력한 값 가지고오기
    const todoTitle = document.getElementById('search-input').value;

    //todo요소만들고 붙여주기
    const todoNode = document.createElement('div'); // <div>title</div>
    todoNode.innerText = todoTitle;
    todoNode.onclick = function(){
        todoNode.isDone = !todoNode.isDone;
        if (todoNode.isDone) {
            this.className = 'done';
        } else {
            this.className = '';
        }
    }
    
    //요소삭제버튼 만들고 붙여주기
    const removeBtn = document.createElement('button'); // <button><i class='fa-solid fa-xmark'></i></button>
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    todoNode.appendChild(removeBtn); // <div>밥먹기<button><i class='fa-solid fa-xmark'></i></button></div>
    removeBtn.onclick = function(){
        this.parentNode.remove();
    }

    document.getElementById('search-input').value = '';

    return todoNode;
}

//엔터키를 입력했다면 해당코드 실행
if (!ev.keyCode || ev.keyCode === 13) {
    //일정을 보여주는 영역 가져오기
    const toDoListView = document.querySelector('#todo-list-view');
    // 요소 생성하는 함수호출
    const todoNode = getTodoNode();
    toDoListView.appendChild(todoNode);
}


    //위에 3문단이랑 같은기능을 함!
    // toDoListView.innerHTML += "<div onclick='isSuccess(this)'>" + data.title + 
    // "<button onclick='removeTodo(this)' class='remove-btn'><i class='fa-solid fa-xmark'></i></button>"
    // +"</div>";

    //요소 붙여주기
    //붙일 공간 가지고오기


}



//-------------------------------------------------------------------------------------------------
    
//     //내가 작성한 일정명 가지고 오기
//     const todoTitle = document.getElementById('search-input').value;
//     //빈값 입력했을시 등록 안되게
//     if (todoTitle.trim()==="")
//         return;
    
//     //엔터키 입력했다면 해당코드 실행
//     // if (window.event.keyCode===13){
//     //     console.log('ddd')
//     // }
//     if (!ev.keyCode || ev.keyCode === 13){
//         //데이터 저장
//         let data = ({
//             title : todoTitle,
//             isDone : false,
//             date : new Date().getTime()
//         });

//         todoList.push(date);

//         //일정을 보여주는 영역
//         const toDoListView = document.querySelector('#todo-list-view')
//         //추가할 일정 요소
//         const toDoNode = getTodoNode(date);
//         toDoListView.appendChild(toDoNode)

//         //추가할 일정요소 만들기
//         toDoListView.innerHTML += "<div onclick='one(this)'>"+todoTitle+"<button onclick='removeTodo(this)' class='remove-btn'><i class='fa-solid fa-xmark'></i></div>";
        

//         //추가한 일정 input에서 지워주기
//         document.getElementById('search-input').value = "";

        
//     }
    
    

// }

// function removeTodo(button){
//     button.parentNode.remove();
// }

// function one(todo){

//     //classList => 해당 요소가 가지고있는 클래스들을 배열로 반환
//     if(todo.classList.length === 0){
//         todo.className = 'done';
//     }else{
//         todo.className = '';
//     }
// }