const { join, extname, basename } = require("path");
const { readdirSync, renameSync } = require("fs");

const pathToOldFolder = "./images";

for (const oldFile of readdirSync(pathToOldFolder)) {
  const extension = extname(oldFile);
  const name = basename(oldFile, extension);
  const split = name.split(" ");
  const newName = split[1].slice(0, -3);
  renameSync(
    join(pathToOldFolder, oldFile),
    join(pathToOldFolder, newName + extension)
  );
}
