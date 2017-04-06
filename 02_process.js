console.log("título: ", process.title);

process.on("exit", codigo => console.log("codigo: ", codigo));

process.exit(3);