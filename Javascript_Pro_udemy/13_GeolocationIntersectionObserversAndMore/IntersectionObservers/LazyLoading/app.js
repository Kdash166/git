// "https://source.unsplash.com/random"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //Image needs to be loaded!!!
      console.log("LOADING A NEW RANDOM IMAGE!!!");
      entry.target.src = "https://source.unsplash.com/random";
      observer.unobserve(entry.target);
    }
  });
});

const allImages = document.querySelectorAll("img.lazy");

allImages.forEach((img) => observer.observe(img));

// lazy loading  //

// this increases the speed and loading times 
// what happens is blurry or place holder images
// are produced until intersection occrurs
// the image will only be loaded when it needs to be 
// this way there is no need for the page to load 100's of images
// at a time as this seriously increases the load time of website. 
// this demo shows how. they get a source when some of the image is loading
// requests to the network are made as you croll rather then requesting all the 
// images at once.