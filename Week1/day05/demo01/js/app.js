
function ckeck()
{
  confirm("Some Suprise For You. Press ok  ");
  const buttonA = document.getElementById('button_A');
  const headingA = document.getElementById('heading_A');
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.innerHTML = `Welcome ${name}`;
}