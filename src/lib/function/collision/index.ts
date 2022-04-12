export function collision(p: any, e: any) {
    return (
      p.range.width + p.range.position.x >= e.position.x &&
      p.range.position.x <= e.position.x + e.width &&
      p.range.position.y + p.range.height >= e.position.y &&
      p.range.position.y <= e.position.y + e.height &&
      p.attacking
    );
  }