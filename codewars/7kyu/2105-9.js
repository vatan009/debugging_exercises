const Spectrometer = {
  getHeaviest: function (atomicMasses) {
    let temp = atomicMasses.reduce(
      (accumulator, currentValue) =>
        (accumulator = Math.max(accumulator, currentValue)),
      0,
    );
    //     return Math.max(...atomicMasses)
    return temp;
  },
};

// Math.max(...arr) :  gives error when largge dataset beecause we are passing each element in the max function
