import moment from 'moment';
import lodash from 'lodash';
export const dateFormat = (date: any) => {
  let secondsAgo = moment().diff(date, 'seconds');
  let minutesAgo = lodash.toInteger(secondsAgo / 60);
  let hoursAgo = lodash.toInteger(secondsAgo / 3600);
  let daysAgo = lodash.toInteger(secondsAgo / 86400);
  if (secondsAgo < 60) {
    return `${secondsAgo} ${secondsAgo > 1 ? 'seconds ago' : 'second ago'}`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} ${minutesAgo > 1 ? 'minutes ago' : 'minute ago'}`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} ${hoursAgo > 1 ? 'hours ago' : 'hour ago'}`;
  } else {
    return `${daysAgo} ${daysAgo > 1 ? 'days ago' : 'day ago'}`;
  }
};
