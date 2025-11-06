let grade = 83;

switch (true) {
  case grade > 89:
    console.log("A");
    break;

  case grade > 79 && grade < 90:
    console.log("B");
    break;

  case grade > 69 && grade < 80:
    console.log("C");
    break;

  case grade > 59 && grade < 70:
    console.log("D");
    break;

  case grade < 60:
    console.log("F");
    break;
}
