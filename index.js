let celcius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");
celcius.addEventListener("input", cel);
function cel() {
  let value1 = celcius.value;
  let f = (value1 * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fahrenheit.value = f;
}
fahrenheit.addEventListener("input", fah);
function fah() {
  let value2 = fahrenheit.value;
  let c = ((value2 - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(3);
  }
  celcius.value = c;
}
