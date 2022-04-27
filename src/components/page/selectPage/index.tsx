import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIntInclusive } from "../../../lib/function/random";
import * as S from "./styles";
import bg1 from "../../../asset/img/bg/bg1.gif";
import bg2 from "../../../asset/img/bg/bg2.gif";
import bg3 from "../../../asset/img/bg/bg3.gif";
import randomBg from "../../../asset/img/bg/randomMap.jpg";

export default function Select() {
  const character = [
    "Striker",
    "Wizard",
    "Shork Sweeper",
    "Mud Guard",
    "Ball and Chain",
    "Bot Wheel",
    "Ronin",
    "?",
    "Eye Ball",
    "Toaster Bot",
  ];

  const profile: string[] = [];

  const images = [randomBg, bg1, bg2, bg3];

  const [player, setPlayer] = useState<number[]>([]);
  function selectCharacter(e: any, n: number) {
    if (e.target.alt === "?") {
      n = getRandomIntInclusive(0, character.length - 1);
    }
    if (n >= 7) {
      n -= 1;
    }
    setPlayer((play) => [...play, n]);
    if (player.length >= 3) {
      player.shift();
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide >= images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const pre = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <S.Background />
      <S.MainDiv>
        <S.Top>
          <S.Map>
            <S.Slide onClick={() => pre()}>‹</S.Slide>
            {images.map((img: string, i: number) => (
              <>{currentSlide === i ? <S.BgImg src={img} alt="" /> : <></>}</>
            ))}
            <S.Slide onClick={() => next()}>›</S.Slide>
          </S.Map>
        </S.Top>
        <S.Bottom>
          <S.Page>
            <div>back</div>
          </S.Page>
          <S.BtnDiv>
            {character.map((name: string, i: number) => (
              <>
                <button onClick={(e) => selectCharacter(e, i)}>
                  <img src={profile[i]} alt={name} />
                </button>
              </>
            ))}
          </S.BtnDiv>
          <S.Page>
            {player.length === 2 ? (
              <Link to={"/game" + player[0] + player[1] + currentSlide}>
                <div>start</div>
              </Link>
            ) : (
              <div>start</div>
            )}
          </S.Page>
        </S.Bottom>
      </S.MainDiv>
    </>
  );
}
