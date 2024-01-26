export const processList = (inputList) => {
  console.log("Input List:", inputList);
  if (inputList.length % 10 !== 0) {
    console.error("Error: The list length must be a multiple of 10.");
    return;
  }

  const processedList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
  console.log("Processed List:", processedList);
  return processedList;
}