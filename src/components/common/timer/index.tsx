import * as S from "./styles";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(90);
  useEffect(() => {
    let stopWatch = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(stopWatch);
  }, [timer]);
  return (
    <>
      <S.Time>{timer}</S.Time>
    </>
  );
}