const todolist = JSON.parse(localStorage.getItem('todolist'))||[{name:'',time:'',duedate:''}];

render();


      function render (){
        let todolisthtml = ''
        for(let i=0;i<todolist.length;i++){
          const todoobject = todolist[i];
          //const name = todoobject.name
          //const duedate= todoobject.duedate
          const {name,time,duedate} = todoobject


          const html = `
          <div>
            ${name}</div> 
            <div>${time}</div>
            <div>${duedate}</div>
            <button class="delete-button-css" onclick = "todolist.splice(${i},1);
            render(); saveToStorage();";
            
            
            ">
              Delete
            </button>`
          ;
          todolisthtml+=html;
        }
        console.log(todolisthtml);
        document.querySelector('.js-todo-list').innerHTML = todolisthtml;

      }
    
     
      

      function addToDo(){
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        const inputDate = document.querySelector('.js-due-date-input')
        const duedate = inputDate.value
        const inputtime = document.querySelector('.js-time-input')
        const time = inputtime.value
        todolist.push({
          name,//name:name
          time,//time:time
          duedate//duedate:duedate
          

        });
        console.log(todolist);

        inputElement.value = '';


        render();

        saveToStorage();

        

        

      }
      function saveToStorage(){
        localStorage.setItem('todolist',JSON.stringify(todolist))

      }

