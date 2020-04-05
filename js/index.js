let count;
let template;
let reg = /%/gi;

for (; true; ) {
  template = prompt("Enter template(format: example %3 %2 %1");

  if (template.includes("%") === false) {
    alert("Incorrect");
    continue;
  } else break;
}

count = template.match(reg).length;

function result(count, template) {
  let newStr = "";
  let arr = [];

  for (let i = 1; i <= count; i++) {
    let tmp = prompt(`Enter element #${i}`);
    arr.push(tmp);
  }

  let arrReplace = [];

  for (let i = 1; i <= arr.length; i++) {
    arrReplace.push(new RegExp(`%${i}`));
  }

  newStr = template.replace(arrReplace[0], arr[0]);

  for (let i = 1; i < arr.length; i++) {
    newStr = newStr.replace(arrReplace[i], arr[i]);
  }

  return `Parameteres: ${arr}<br> Result: ${newStr}`;
}

document.write(`Template: ${template}<br>${result(count, template)}`);
