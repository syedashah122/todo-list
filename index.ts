#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todosList :string [] = [];
let condition = true;



let main = async () => {
  while(condition){
    let option = await inquirer.prompt([
        {
          name: "choice",
          type: "list",
          message:"select an option you want to do",
          choices:["Add Task","Delete task","Update Task","View Todo-list","Exit"],
        }
      ]);
      if(option.choice === "Add Task"){
          await addTask()
      }
      else if(option.choice === "Delete task"){
        await deleteTask()
      }
      else if(option.choice === "Update Task"){
        await updateTask()
      }
      else if(option.choice === "View Todo-list"){
        await viewTask()
      }
      else if(option.choice === "Exit"){
        condition = false;
      }
    }
  }   

//functions to add new task to the list
let addTask = async () => {
  let newTask = await inquirer.prompt([
      {
        name:"task",
        type:"input",
        message:"Enter your new task",
      }
    ]);
    todosList.push(newTask.task);
  console.log(`\n ${newTask.task} task added successsfully in todo-list`);
 }
   
//Functions to view all todo-list tasks
let viewTask = () => {
  console.log("\n Your Todo-List: \n");
    todosList.forEach((task, index) => {
    console.log(`${index}: ${task}`)
  })
}

//function to delete a task from the list
let deleteTask = async () => {
  await viewTask ()
  let taskIndex = await inquirer.prompt([
    {
      name:"index",
      type:"number",
      message:"enter the 'index no.' of the task you want to delete",
    }
  ]);
  let deletedTask = todosList.splice(taskIndex.index, 1);
  console.log(`\n ${deletedTask} this task has been successfully deleted from your todo-list\n`);

}
//funvtions to update a task
let updateTask = async () => {
  await viewTask ()
  let update_task_index = await inquirer.prompt([
    {
      name:"index",
      type:"number",
      message:"Enter the 'index no' of the task you want to update :"
    },
    {
      name:"new_task",
      type:"input",
      message:"Now Enter new task name :",
    }
    ]);
    todosList[update_task_index.index] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index} updated successfully [For updated list check option: "View todo-List"] `)
}

main();












