// click event = An interaction when a user click on a specific element.
//               we can respond to clicks by passing 
//               a callback to the onClick event handler.

function ClickEventButton() {

  //const handleClick = () => console.log("Ouch!");

  //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
  /* let count = 0;
  const handleClick = (name) => { // if u hv more than 1 line of code for your arrow function then use set of curly braces. 
    if(count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    }else{
      console.log(`${name} stop clicking me!`);
    }
  }; */

  const handleClick = (e) => e.target.textContent = "OUCH!";

  return (<button className="button" onDoubleClick={(e) => handleClick(e)}> Click me</button>);
}

export default ClickEventButton