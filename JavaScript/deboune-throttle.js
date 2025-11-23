//short pulling and long pulling. google
//Diff bw virtual and real dom, what is diffing

function search(query) {
  console.log("Searching for", query);
}

/* search("Abhijeet");
search("Abhijeet singh");
search("Abhijeet Baliyan"); */

/* function searchWithDebounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        },delay);
    }
} */

/* const res = searchWithDebounce(search, 3000);

res("vikas");
res("abhijeet");
res("abhijeet singh");
 */

function searchWithThrottle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const currCall = Date.now();
    if (currCall - lastCall >= delay) {
      lastCall = currCall;
      fn(...args);
    }
  };
}

const res = searchWithThrottle(search, 2000);
res("Abhijeet");
res("Vikas");