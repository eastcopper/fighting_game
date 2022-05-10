export function keyDown(
  e: string,
  key: any,
  player: any,
  keycap: any,
  hit: any
) {
  if (!key.death && !key.beShot) {
    switch (e) {
      case keycap.w:
        if (!key.float) {
          player.speed.y = -25;
          key.jump = true;
          key.float = true;
          setTimeout(() => {
            key.jump = false;
            setTimeout(() => {
              key.float = false;
            }, 400);
          }, 400);
        }
        break;
      case keycap.s:
        if (!key.defend) {
          key.defend = true;
          player.framecurrent = 0;
          setTimeout(() => {
            key.defend = false;
          }, hit.defendFrame * 110);
        }
        break;
      case keycap.d:
        key.lf = false;
        key.rf = true;
        key.r = true;
        key.move = true;
        break;
      case keycap.a:
        key.rf = false;
        key.lf = true;
        key.l = true;
        key.move = true;
        break;
      case keycap.attack1:
        if (!key.attacking && !key.defend && !key.float) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack1) {
            key.attack1 = true;
            setTimeout(() => {
              key.attack1 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk1Frame * 110);
          }
        } else if (!key.attacking && !key.defend && key.float) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack1) {
            key.airatk = true;
            setTimeout(() => {
              key.airatk = false;
              player.speed.y = 5;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.airatkFrame * 110);
          }
        }
        break;
      case keycap.attack2:
        if (!key.attacking && !key.defend) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack2) {
            key.attack2 = true;
            setTimeout(() => {
              key.attack2 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk2Frame * 110);
          }
        }
        break;
      case keycap.attack3:
        if (!key.attacking && !key.defend) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack3) {
            key.attack3 = true;
            setTimeout(() => {
              key.attack3 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk3Frame * 110);
          }
        }
        break;
      case keycap.attack4:
        if (!key.attacking && !key.defend) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack4) {
            key.attack4 = true;
            setTimeout(() => {
              key.attack4 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk4Frame * 110);
          }
        }
        break;
    }
  }
  return;
} // 키를 눌렀을 때

export function keyUp(e: string, key: any, player: any, keycap: any) {
  switch (e) {
    case keycap.d:
      key.r = false;
      key.move = false;
      break;
    case keycap.a:
      key.l = false;
      key.move = false;
      break;
  }
  return;
} // 키를 땠을 때
