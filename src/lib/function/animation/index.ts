export function animation(k: any, player: any, img: any, frame: any) {
  const { attack, run, idle, beShot, death } = img;
  const { atkFrame, moveFrame, idleFrame, deathframe } = frame;
  if (k.beShot) {
    player.frame = 2;
    player.speed.x = 0;
    player.image.src = beShot;
    setTimeout(() => {
      k.beShot = false;
    }, 200);
  } else if (k.death) {
    player.frame = deathframe;
    player.image.src = death;
    setTimeout(() => {
      player.delay = 0;
      player.framecurrent = deathframe - 1;
    }, deathframe * 100);
  } else if (k.attack) {
    player.delay = 6;
    player.frame = atkFrame;
    player.speed.x = 0;
    player.image.src = attack;
  } else if (k.move) {
    player.frame = moveFrame;
    player.image.src = run;
  } else {
    player.frame = idleFrame;
    player.image.src = idle;
  }
}
