window.addEventListener("load", () => {
  performance
    .getEntriesByType("resource")
    .filter((entry) => entry.initiatorType === "img")
    .forEach(({ name, duration }) => {
      console.log(`The image at this URL: ${name} took ${duration}ms to load`);
    });
});


// performance.getEntryByType("")//
//  this method collects data just from a spercific type of resources
// you might want to see how long it is taking users to do somthing
// for example how long it is taking images to load or something like that. 
// the get entries by type is good you can other resources not just images
//  it can be very complex topic.