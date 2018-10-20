export const getDay = time => {
  const day = time.getDay();
  return day;
}

export const getHour = time => {
  const hour = time.getHours();
  return hour;
}

export const getMinute = time => {
  const min = time.getMinutes();
  return min;
}

export const getSecond = time => {
  const sec = time.getSeconds();
  return sec;
}
