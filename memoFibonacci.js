function memoized() {
  const cache = {};
  function fibSeq(n) {
    if (n === 2 || n === 1) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    }

    const result = fibSeq(n - 1) + fibSeq(n - 2);
    console.log(result);
    cache[n] = result;
    console.log(cache);
    return result;
  }

  return (num) => {
    return fibSeq(num);
  };
}
const countedFib = memoized();
countedFib(10);
