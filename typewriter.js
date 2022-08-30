const sentence = "hello there from lighthouse labs";

// use recursion to loop through sentence

const animateSentence = (delay, i = 0) => {  
  setTimeout(() => {
    if (i < sentence.length) {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) process.stdout.write('\n')
      animateSentence(delay, i + 1);
    }
  }, delay);
  
}
animateSentence(100);  // default value for i is 0, unless we want to start printing part way through the sentence.