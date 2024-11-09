const app = require('express')();

const words = {
  'apple': '사과',
  'banana': '바나나',
  'cat': '고양이',
  'dog': '개',
  'egg': '달걀',
  'fish': '물고기',
  'goat': '염소',
  'hat': '모자',
  'ice': '얼음',
  'jam': '잼',
  'kite': '연',
  'lamp': '램프',
  'moon': '달',
  'nest': '둥지',
  'orange': '오렌지',
  'piano': '피아노',
  'queen': '여왕',
  'rat': '쥐',
  'sun': '태양',
  'tree': '나무',
  'umbrella': '우산',
  'vase': '꽃병',
  'wall': '벽',
  'x-ray': '엑스레이',
  'yarn': '실',
  'zebra': '얼룩말',
  'ant': '개미',
  'ball': '공',
  'car': '자동차',
  'desk': '책상',
  'ear': '귀',
  'frog': '개구리',
  'gift': '선물',
  'house': '집',
  'ink': '잉크',
  'juice': '주스',
  'key': '열쇠',
  'lion': '사자',
  'milk': '우유',
  'nose': '코',
  'octopus': '문어',
  'pencil': '연필',
  'quilt': '이불',
  'rose': '장미',
  'ship': '배',
  'table': '테이블',
  'van': '밴',
  'watch': '시계',
  'xylophone': '실로폰',
  'yak': '야크',
  'zoo': '동물원',
  'airplane': '비행기',
  'bread': '빵',
  'cloud': '구름',
  'door': '문',
  'elephant': '코끼리',
  'fire': '불',
  'grass': '풀',
  'horse': '말',
  'island': '섬',
  'jelly': '젤리',
  'kangaroo': '캥거루',
  'leaf': '잎사귀',
  'mirror': '거울',
  'night': '밤',
  'ocean': '바다',
  'pizza': '피자',
  'robot': '로봇',
  'star': '별',
  'tiger': '호랑이',
  'violin': '바이올린',
  'whale': '고래',
  'yogurt': '요거트',
  'zipper': '지퍼',
  'book': '책',
  'circle': '원',
  'doll': '인형',
  'earth': '지구',
  'feather': '깃털',
  'grape': '포도',
  'heart': '심장',
  'igloo': '이글루',
  'jack': '잭',
  'lemon': '레몬',
  'mango': '망고',
  'needle': '바늘',
  'owl': '올빼미',
  'penguin': '펭귄',
  'ring': '반지',
  'sock': '양말'
};


app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  const { word } = req.query;

  if (word && words[word]) {
    res.json({meaning: words[word]});
  } else {
    const randomWord = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
    res.json({word: randomWord});
  }
});

module.exports = app;
