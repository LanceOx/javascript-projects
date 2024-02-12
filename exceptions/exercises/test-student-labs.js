function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result = lab.runLab(3);
    console.log(`${lab.student} code worked: ${result === 27}`);
  } try {
    if (runLab === false)
    throw ("run lab has thrown an error")
 
} catch (error){
  console.error(error)
}
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

//gradeLabs(studentLabs);
