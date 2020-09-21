/*function wecomeMessage(fullName) {
    function closure() {
      alert(`Welcome ${fullName}`);
    }
    return closure;
  }
*/

// Here I used self-invoking function
function welcomeMessage(fullName){
    return function() {alert(`Welcome ${fullName}`)};
// return function() { alert("Welcome " + fullName)};
}

guillaume = welcomeMessage("Guillaume");
alex = welcomeMessage("Alex");
fred = welcomeMessage("Fred");
