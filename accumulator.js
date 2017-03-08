const shape = [[{
  a: 1,
  b: 2,
  c: [
    1,
    2,
    {
      a: 1,
      b: 2,
      c: [
        1,
        2,
        {
          a: 1
        }
      ]
    },
    [
      1,
      2,
      {
        a: 1,
        b: 2,
        c: [
          1,
          2,
          {
            a: 1
          }
        ]
      }
    ]
  ],
  d: {
    a: 1,
    b: 4,
    c: 5
  }
}]];

// recursive reduction/accumulation

const accumulate = (item) => {
  if (typeof item === 'number') {
    return item;
  }

  if (typeof item === 'object') {
    return iterate(item);
  }
}

const iterate = (shape) => {
  return Object.keys(shape).reduce((acc, item) => {
    return acc + accumulate(shape[item]);
  }, 0);
}

console.log(iterate(shape));
