import figlet from "figlet";

figlet.text(
  "Aa BBbbkHOI iohi!",
  {
    font: "3D-ASCII",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);