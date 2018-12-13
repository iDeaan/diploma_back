const convertAge = (age) => {
  if (age < 18) {
    return 'age_less_18';
  } else if (age >= 19 && age < 35){
    return 'age_18_to_35';
  } else if (age >= 35 && age < 50) {
    return 'age_35_to_50';
  } else {
    return 'age_more_50';
  }
};

const convertAverageLikes = (likes) => {
  if (likes < 200) {
    return 'likes_less_200';
  } else if (likes >= 200 && likes < 500){
    return 'likes_200_to_500';
  } else if (likes >= 500 && likes < 1000) {
    return 'likes_500_to_1000';
  } else {
    return 'likes_more_1000';
  }
};

const convertTimeBetweenPosts = (time) => {
  if (time < 60) {
    return 'time_less_60';
  } else if (time >= 60 && time < 180){
    return 'time_60_to_180';
  } else if (time >= 180 && time < 600) {
    return 'time_180_to_600';
  } else {
    return 'time_more_600';
  }
};

const convertPostWords = (words) => {
  if (words < 100) {
    return 'words_less_100';
  } else if (words >= 100 && words < 300){
    return 'words_100_to_300';
  } else if (words >= 300 && words < 1000) {
    return 'words_300_to_1000';
  } else {
    return 'words_more_1000';
  }
};

const convertPostsPerDay = (posts) => {
  if (posts < 3) {
    return 'posts_less_3';
  } else if (posts >= 3 && posts < 5){
    return 'posts_3_to_5';
  } else if (posts >= 5 && posts < 10) {
    return 'posts_5_to_10';
  } else {
    return 'posts_more_1000';
  }
};

const convertGender = gender => gender === 1 ? 'male' : 'female';

const convertMaritalStatus = value => value === 1 ? 'single' : 'not single';

module.exports = {
  convertAge,
  convertAverageLikes,
  convertTimeBetweenPosts,
  convertPostWords,
  convertPostsPerDay,
  convertGender,
  convertMaritalStatus
};
