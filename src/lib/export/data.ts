import player1Idle from "../../asset/img/fire_knight/01_idle/idle.png";
import player1Run from "../../asset/img/fire_knight/02_run/run.png";
import player1Up from "../../asset/img/fire_knight/03_jump_up/jump_up.png";
import player1Down from "../../asset/img/fire_knight/03_jump_down/jump_down.png";
import player1Atk1 from "../../asset/img/fire_knight/05_1_atk/1_atk.png";
import player1Atk2 from "../../asset/img/fire_knight/06_2_atk/2_atk.png";
import player1Atk3 from "../../asset/img/fire_knight/07_3_atk/3_atk.png";
import player1Atk4 from "../../asset/img/fire_knight/08_sp_atk/sp_atk.png";
import player1Defend from "../../asset/img/fire_knight/09_defend/defend.png";
import player1BeShot from "../../asset/img/fire_knight/10_take_hit/take_hit.png";
import player1Death from "../../asset/img/fire_knight/11_death/death.png";
import player1AirAtk from "../../asset/img/fire_knight/air_atk/air_atk.png";
import player2Idle from "../../asset/img/fire_knight/01_idle/idle.png";
import player2Run from "../../asset/img/fire_knight/02_run/run.png";
import player2Up from "../../asset/img/fire_knight/03_jump_up/jump_up.png";
import player2Down from "../../asset/img/fire_knight/03_jump_down/jump_down.png";
import player2Atk1 from "../../asset/img/fire_knight/05_1_atk/1_atk.png";
import player2Atk2 from "../../asset/img/fire_knight/06_2_atk/2_atk.png";
import player2Atk3 from "../../asset/img/fire_knight/07_3_atk/3_atk.png";
import player2Atk4 from "../../asset/img/fire_knight/08_sp_atk/sp_atk.png";
import player2Defend from "../../asset/img/fire_knight/09_defend/defend.png";
import player2BeShot from "../../asset/img/fire_knight/10_take_hit/take_hit.png";
import player2Death from "../../asset/img/fire_knight/11_death/death.png";
import player2AirAtk from "../../asset/img/fire_knight/air_atk/air_atk.png";

import bg1 from "../../asset/img/bg/bg1.gif";
import bg2 from "../../asset/img/bg/bg2.gif";
import bg3 from "../../asset/img/bg/bg3.gif";

export const background = [bg1, bg2, bg3];

const player1Data = {
  atk1hittime: 1,
  atk1hitFrame: [4],
  atk1Frame: 11,
  width1: -300,
  height1: 200,
  damaged1: 1,

  atk2hittime: 2,
  atk2hitFrame: [5, 7],
  atk2Frame: 12,
  width2: -300,
  height2: 200,
  damaged2: 0.5,

  atk3hittime: 1,
  atk3hitFrame: [4],
  width3: -400,
  height3: 200,
  damaged3: 1,

  atk3Frame: 9,
  atk4hittime: 1,
  atk4hitFrame: [12],
  atk4Frame: 18,
  width4: -400,
  height4: 200,
  damaged4: 3,

  moveFrame: 8,
  idleFrame: 8,
  damagedFrame: 6,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  deathFrame: 13,
  cooltime: 1,
  img: "width",
};

const player2Data = {
  width: -650,
  height: 200,
  hittime: 2,
  hitFrame: [1, 8],
  atk1Frame: 11,
  atk2Frame: 19,
  atk3Frame: 28,
  atk4Frame: 18,
  moveFrame: 8,
  idleFrame: 8,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  damaged: 0.625,
  deathFrame: 13,
  cooltime: 2,
  img: "width",
};

export const gameData: any[] = [
  [
    player1Idle,
    player1Atk1,
    player1Atk2,
    player1Atk3,
    player1Atk4,
    player1Run,
    player1BeShot,
    player1Death,
    player1Up,
    player1Down,
    player1Defend,
    player1AirAtk,
    player1Data,
  ],
  [
    player2Idle,
    player2Atk1,
    player2Atk2,
    player2Atk3,
    player2Atk4,
    player2Run,
    player2BeShot,
    player2Death,
    player2Up,
    player2Down,
    player2Defend,
    player2AirAtk,
    player2Data,
  ],
];

export const ekey = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack1: false,
  attack2: false,
  attack3: false,
  attack4: false,
  beShot: false,
  death: false,
  attacking: false,
};

export const pkey = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack1: false,
  attack2: false,
  attack3: false,
  attack4: false,
  beShot: false,
  death: false,
  attacking: false,
}; // 상태 감지

export const pkeycap = {
  w: "w",
  a: "a",
  d: "d",
  attack1: "u",
  attack2: "i",
  attack3: "j",
  attack4: "k",
};
export const ekeycap = {
  w: "ArrowUp",
  a: "ArrowRight",
  d: "ArrowLeft",
  attack1: "7",
  attack2: "8",
  attack3: "4",
  attack4: "5",
}; // 키 감지
