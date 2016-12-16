export class Init{
  load(){
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
      console.log("No todos found...")
      var todos = [
        {
          text: "Clean"
        },
        {
          text: "Wash dishes"
        },
        {
          text: "Do shopping"
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return
    }else{
      console.log('Found todos...');
    }
  }
}
