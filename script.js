let withDublicate = document.querySelector(".withDublicate");
let withoutDublicate = document.querySelector(".withoutDublicate");

function getUnique(array) {
    let uniqueArray = [];
    array.map((item) => {
        if (uniqueArray.indexOf(item) == -1) {
            uniqueArray.push(item);
          }
        });
    return uniqueArray;
}

let names = [3, 3, 4, 5, 6, 7, 3, 4, 6, 8, 4, 2, 8, 5, 8, 0, 66, 4, 3, 2, 1, 5];
withDublicate.innerHTML = names;
let uniqueNames = getUnique(names);
withoutDublicate.innerHTML = uniqueNames;


