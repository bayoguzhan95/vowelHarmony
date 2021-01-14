let Major = 0;
let Minor = 0;

var majorLetter = ["a", "ı", "o", "u"];
var minorLetter = ["e", "i", "ö", "ü"];

const majorVowelHarmony = () => {
  const input = document.getElementById("input").value;

  let splitLetter = Array.from(input);

  splitLetter.forEach(function (x) {
      
    

    majorLetter.forEach(
      function (a) {
        if (x == a) {
          Major += 1;
        }
      },
      minorLetter.forEach(function (a) {
        if (x == a) {
          Minor += 1;
        }
      })
    );
  });
  if (Minor > 0 && Major > 0) {
    alert(`False ${input}  `);
  } else if (Minor > 0 && Major == 0) {
    alert(`True " ${input} " Major Vowel Harmony`);
  } else if (Minor == 0 && Major > 0) {
    alert(`True " ${input} " Major Vowel Harmony`);
  }
};
