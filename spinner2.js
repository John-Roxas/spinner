let delay = 100;

const spinner = function(rotations) {
  let characters = ['|', '/', '-', '\\'];
  for (let i = 0; i < rotations; i++) {
    for (let char of characters) {
      setTimeout(() => {
        process.stdout.write('\r' + char + '   ');
      }, delay += 200);
    }
  }
};

spinner(4);