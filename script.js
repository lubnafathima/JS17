// fn inside fn inside fn  - closure
debugger;
function outer () {
  let a = 5;
  function inner () {
    let b = 10;
    function innermost () {
      let c = 15;
      console.log(a, b, c);
    }
    innermost();
  }
  inner();
}
outer(); 