/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  const time = parseInt(string.split(":").join(" "))
  
  if (time > 12 && time < 19) {
    return "Good Afternoon"
  } else if (time > 0 && time < 12) {
    return "Good Morning"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}
