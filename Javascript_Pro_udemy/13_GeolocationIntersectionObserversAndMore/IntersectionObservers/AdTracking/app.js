// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("AD IS VISIBLE");
//       } else {
//         console.log("AD IS NOT VISIBLE");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const percentage = Math.round(entry.intersectionRatio * 100, 2);
//         console.log(`${percentage}% of the ad visible`);
//       } else {
//         console.log("AD IS NOT VISIBLE");
//       }
//     });
//   },
//   { threshold: [0, 0.25, 0.5, 0.75, 1] }
// );
// const ad = document.querySelector(".ad");
// observer.observe(ad);

// TRACKING HOW LONG AN AD IS VISIBLE
// let adViewTimes = [];
// let adVisibleStartTime;

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const { isIntersecting } = entry;
//       if (isIntersecting) {
//         //ad is visible
//         adVisibleStartTime = Date.now();
//       } else if (adVisibleStartTime) {
//         //ad has been visible, no longer is visible
//         let adViewDuration = Date.now() - adVisibleStartTime;
//         adViewTimes.push(adViewDuration);
//         console.log(`Ad was viewed for ${adViewDuration} ms`);
//         adVisibleStartTime = undefined;
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const ad = document.querySelector(".ad");
// observer.observe(ad);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      const { id } = entry.target;
      // destructured the ID so you can track mutiple ads.
      if (isIntersecting) {
        console.log(`${id} ad is visible`);
      } else {
        console.log(`${id} ad is NOT visible`);
      }
    });
  },
  { threshold: 0.5 }
);

const ads = document.querySelectorAll(".ad");
ads.forEach((ad) => observer.observe(ad));

// Intersection observer API //

// allows you to turn on or off a animations if they 
// are being observed
// most importantly it tracks when the target element 
// is observed when interesecting with the view port. 
// when an intersection is observed it will then run a 
// call back. 
// is intersecting is important as it tells you how much
// you can pass a second parameter, this effects when function fires. 
// so if the value is 1. then the whole div would need to be in the viewport. 
// if it i set to 0.5 as above then 50% of the ad would need to be displayed.

// you can provide an array of thresholds so the function will fire. 
// you could have minimal 0.25 0.50 0.75 1.00 for engagment or maximum view
// or something like that. 
//  you can return the a percentage see array above. 
// you can track ad times to find out the time the user was engaging with the time 


