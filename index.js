const figlet = require("figlet");

figlet.text(process.argv[2], (error, data) => {
    console.log(data);
});

