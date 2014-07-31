var Mirror = {
  reflect: function (source, dest) {
    for (var index in source) {
      if (source.hasOwnProperty(index)) dest[index] = source[index];
    };

    return dest;
  }
};