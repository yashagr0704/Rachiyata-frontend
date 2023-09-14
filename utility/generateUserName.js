export const generateUserName = (name) => {
  if (name && typeof name === "string") {
    const isIncludesSpace = name.includes(" ");

    if (!isIncludesSpace) return name;

    const indexOfSpace = name.indexOf(" ");

    const newName = name.slice(0, indexOfSpace);
    return newName;
  } else {
    console.error("At generateUserName: argument name should be string");

    return "";
  }
};
