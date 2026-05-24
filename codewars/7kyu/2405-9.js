const HazardScanner = {
  isHazardous: function (B_elerium, B_dilithium) {
    let isEmissionHigh = B_dilithium < B_elerium; // bogon number of energy inhibitor is smaller than bogon number of the energy source
    let isStable = Math.abs(B_dilithium - B_elerium) % 2 === 1; // difference between bogon numbers of the inhibitor and the energy source is an odd number
    // (i.e. there are unpaired bogons)
    return isEmissionHigh && isStable;
  },
  getLedColor: function (B_elerium, B_dilithium) {
    return HazardScanner.isHazardous(B_elerium, B_dilithium)
      ? "#FF0000"
      : "#00FF00";
  },
};

// concept : Math.abs(-1) => 1
