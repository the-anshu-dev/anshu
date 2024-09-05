function greet(name) {
  let msg = '';
  const date = new Date();
  const hour = date.getHours(); 

 
  if (hour >= 0 && hour < 12) {
    msg = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    msg = 'Good afternoon';
  } else if (hour >= 18 && hour < 21) {
    msg = 'Good evening';
  } else {
    msg = 'Good night';
  }

 
  return `${msg}, ${name}!`;
}

module.exports = greet;
