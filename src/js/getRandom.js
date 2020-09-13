export default function getRandom(min, max, num) {
    const rtn = Math.floor(Math.random() * (max - min + 1) + min);
    return rtn === num ? getRandom(min, max, num) : rtn
  }