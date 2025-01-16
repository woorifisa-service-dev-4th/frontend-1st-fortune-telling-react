import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 이미지 import
import mouseImg from './assets/img/mouse.png';
import oxImg from './assets/img/ox.png';
import tigerImg from './assets/img/tiger.png';
import rabbitImg from './assets/img/rabbit.png';
import dragonImg from './assets/img/dragon.png';
import snakeImg from './assets/img/snake.png';
import horseImg from './assets/img/horse.png';
import sheepImg from './assets/img/sheep.png';
import monkeyImg from './assets/img/monkey.png';
import roosterImg from './assets/img/rooster.png';
import dogImg from './assets/img/dog.png';
import pigImg from './assets/img/pig.png';

const ZodiacFortune = () => {
  const [zodiac, setZodiac] = useState('');
  const [fortune, setFortune] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL 파라미터 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const year = parseInt(urlParams.get('year'), 10);
    const nameParam = urlParams.get('name');
    const luck = urlParams.get('luck');
    const month = urlParams.get('month');
    const day = urlParams.get('day');

    setName(nameParam || '');

    // 띠 계산
    const zodiacSigns = [
      '원숭이', '닭', '개', '돼지', '쥐', '소',
      '호랑이', '토끼', '용', '뱀', '말', '양',
    ];
    const zodiacImages = {
      쥐: mouseImg,
      소: oxImg,
      호랑이: tigerImg,
      토끼: rabbitImg,
      용: dragonImg,
      뱀: snakeImg,
      말: horseImg,
      양: sheepImg,
      원숭이: monkeyImg,
      닭: roosterImg,
      개: dogImg,
      돼지: pigImg,
    };

    const calculatedZodiac = zodiacSigns[year % 12];
    setZodiac(calculatedZodiac);
    setImageSrc(zodiacImages[calculatedZodiac]);

    // API 요청 보내기
    const fetchFortune = async () => {
      try {
        const response = await axios.post('/chat', {
          zodiac: calculatedZodiac,
          year,
          luck,
          month,
          day,
        });
        setFortune(response.data.response);
      } catch (err) {
        console.error(err);
        setError('운세를 가져오는 중 오류가 발생했습니다.');
      }
    };

    if (calculatedZodiac) {
      fetchFortune();
    }
  }, []);

  return (
    <div>
      {zodiac && name ? (
        <>
          <h1>{`${name}님의 띠는 ${zodiac}입니다!`}</h1>
          <img src={imageSrc} alt={`${zodiac} 이미지`} />
          <p>{fortune}</p>
        </>
      ) : (
        <p>운세를 불러오는 중입니다...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ZodiacFortune;