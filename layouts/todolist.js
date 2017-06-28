/**
 * Created by Shivam on 27-06-2017.
 */

var todoList = [];
var x =[];

window.onload = function(){

    var inputValue = document.getElementById('getValue');
    var button = document.getElementById('done');
    var outputValue = document.getElementById('output');
    var x = JSON.parse(localStorage.getItem('main'));
    if(x!==null){
        for(var i = 0;i<x.length;i++){
            var element = x[i].done;
            if(element === true){
                outputValue.innerHTML += '<li onchange="checker(' + i + ')"><input type="checkbox" checked>' + x[i].task + '</li>';
            }
            else{
                outputValue.innerHTML += '<li onchange="checker(' + i + ')"><input type="checkbox">' + x[i].task + '</li>';
            }
            todoList.push({
                "task": x[i].task,
                "done": x[i].done
            });
        }
    }
    button.onclick = function () {
       var input = inputValue.value;
       outputValue.innerHTML = '';
       todoList.push({
           "task": input,
           "done": false
       });
        for(var i = 0;i<todoList.length;i++){
            var element = todoList[i].done;
            if(element === true) {
                outputValue.innerHTML += '<li onchange="checker(' + i + ')"><input type="checkbox" checked>' + todoList[i].task + '</li>';
            }
            else{
                outputValue.innerHTML += '<li onchange="checker(' + i + ')"><input type="checkbox">' + todoList[i].task + '</li>';
            }
        }
        localStorage.setItem('main',JSON.stringify(todoList));
    }
};

function checker(i) {
    var x = JSON.parse(localStorage.getItem('main'));
    if(x[i].done === false){
        x[i].done=true;
        todoList.done=true;
    }
    else{
        x[i].done=false;
        todoList.done=false;
    }
    localStorage.setItem('main',JSON.stringify(x));
}

