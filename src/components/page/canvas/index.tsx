import React, { useRef, useEffect } from "react";
import { combo } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/bg/bg1.gif";
import { keyDown, keyUp } from "../../../lib/function/key";
import * as D from "../../../lib/export/data";
import { animation } from "../../../lib/function/animation";
import { Sprite } from "../../common/sprite";
import { Fighter } from "../../common/fighter";
import { push } from "../../../lib/function/push";
import HealthBar from "../../common/healthbar";

export default function Canvas() {
  const canvasRef = useRef(null);
  const enemyHealthRef = useRef<HTMLDivElement>(null);
  const playerHealthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: backgroundimg,
      ctx: ctx,
    });

    const player = new Fighter({
      position: {
        x: 300,
        y: 300,
      },
      imageSrc: D.playerImg.idle,
      idleFrame: D.pHit.idleFrame,
      width: D.pHit.width,
      height: D.pHit.height,
      canvas: canvas,
      ctx: ctx,
    });

    const enemy = new Fighter({
      position: {
        x: -1520,
        y: 300,
      },
      imageSrc: D.enemyImg.idle,
      idleFrame: D.eHit.idleFrame,
      width: D.eHit.width,
      height: D.eHit.height,
      canvas: canvas,
      ctx: ctx,
    });

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      player.update();
      enemy.update();

      push(player, enemy);

      pressSense(player, D.pkey.r, D.pkey.l);
      pressSense(enemy, D.ekey.r, D.ekey.l);

      animation(D.pkey, player, D.playerImg, D.pHit);
      animation(D.ekey, enemy, D.enemyImg, D.eHit);

      combo(D.pHit, D.pkey, player, enemy, enemyHealthRef, D.ekey);
      combo(D.eHit, D.ekey, enemy, player, playerHealthRef, D.pkey); // 히트 판정
    }

    animate();

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, D.pkey, player, D.pkeycap, D.pHit);
      keyDown(e.key, D.ekey, enemy, D.ekeycap, D.eHit);
    });

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, D.pkey, player, D.pkeycap);
      keyUp(e.key, D.ekey, enemy, D.ekeycap);
    });
  }, []);

  return (
    <>
      <S.MainDiv>
        <HealthBar pref={playerHealthRef} eref={enemyHealthRef} />
        <canvas ref={canvasRef}></canvas>
      </S.MainDiv>
    </>
  );
}
