/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 * 2. Implicit Binding
 * 3. New Binding
 * 4. Explicit Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function doesNotHaveName() {
  // console.log(`What is global binding or Window Binding!`, this);
}
doesNotHaveName();

// Principle 2

// code example for Implicit Binding

const video = {
  title: "God must be crayz!",
  play: function() {
    console.log(`what is this in implicit biding?`, this);
    console.log(`This video is called "${this.title}".`);
  }
};
video.play();

// Principle 3

// code example for New Binding
function Video(title) {
  this.newTitle = title;
  console.log(`What is New Binding `, this);
}

const myVideo = new Video("God Must Be Crazy!");
const urVideo = new Video("Evan Almighty!");

// Principle 4

// code example for Explicit Binding

Video.prototype.play = function() {
  return `Playing movie ${this.title}`;
};

console.log(myVideo.play());

let movies = ["Beautiful Minds", "Avengers", "Up"];

function videoRecord(movie1, movie2) {
  console.log(`Recorded ${this.newTitle} along with ${movie1}, ${movie2}`);
}

videoRecord.call(myVideo, movies[1], movies[2]);
videoRecord.apply(urVideo, movies);
