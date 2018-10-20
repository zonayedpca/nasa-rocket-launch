const timeConverse = time => {
  const timeToMS = time * 1000;
  const timeObj = new Date(timeToMS);
  return timeToMS;
}

export default timeConverse;
