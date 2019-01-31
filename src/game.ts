@Component('RotateWall')
export class RotateWall {
  active: boolean = false
  speed: number = 30
  direction: Vector3 = Vector3.Up()
}
const walls = engine.getComponentGroup(RotateWall)

export class RotatorSystem implements ISystem {
  update(dt: number) {
    let random = Scalar.RandomRange(1, 100)

    for (let wall of walls.entities) {

      let rotate = wall.get(RotateWall)
      let transform = wall.get(Transform)

      if (random / 2 <= 50) {
        rotate.direction = Vector3.Down()
      }

      if (rotate.active){
        transform.rotate(rotate.direction, rotate.speed * dt)
      }
    }
  }
}
engine.addSystem(new RotatorSystem())


let floor = new Entity();
floor.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.315, 0.315, 0.315)
}));
let entrance = new Entity();
entrance.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4)
}));

let chakals = new Entity();
chakals.add(new Transform({
  position: new Vector3(39.5, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4)
}));
let ceiling = new Entity();
ceiling.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4)
}));

let cirGreen = new Entity();
cirGreen.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4),
  rotation: new Quaternion.Euler(0, -90, 0)
}));
let cirViolet = new Entity();
cirViolet.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4),
  rotation: new Quaternion.Euler(0, 270, 0)
}));
let cirBrown = new Entity();
cirBrown.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4),
  rotation: new Quaternion.Euler(0, 100, 0)
}));
let cirGreenOut = new Entity();
cirGreenOut.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4)
}));

let switchGreen = new Entity();
switchGreen.add(new Transform({
  position: new Vector3(40, 0, 29),
  scale: new Vector3(0.4, 0.4, 0.4)
}));
let switchViolet = new Entity();
switchViolet.add(new Transform({
  position: new Vector3(40, 0, 59),
  scale: new Vector3(0.4, 0.4, 0.4)
}));
let switchBrown = new Entity();
switchBrown.add(new Transform({
  position: new Vector3(40, 0, 13),
  scale: new Vector3(0.4, 0.4, 0.4)
}));
let switchStart = new Entity();
switchStart.add(new Transform({
  position: new Vector3(78.5, 0, 43),
  scale: new Vector3(0.4, 0.4, 0.4)
}));

let switchWin = new Entity();
switchWin.add(new Transform({
  position: new Vector3(40, 0, 40),
  scale: new Vector3(0.4, 0.4, 0.4)
}));

floor.add(new GLTFShape("models/mazeFloor.glb"));
entrance.add(new GLTFShape("models/mazeEntrance.glb"));
chakals.add(new GLTFShape("models/mazeChakals.glb"));
ceiling.add(new GLTFShape("models/mazeCeiling.glb"));
cirGreen.add(new GLTFShape("models/mazeWalls01.glb"));
cirGreen.add(new RotateWall())
cirViolet.add(new GLTFShape("models/mazeWalls02.glb"));
cirViolet.add(new RotateWall())
cirBrown.add(new GLTFShape("models/mazeWalls03.glb"));
cirBrown.add(new RotateWall())
cirGreenOut.add(new GLTFShape("models/mazeWalls04.glb"));
cirGreenOut.add(new RotateWall())
switchGreen.add(new GLTFShape("models/mazeCoffin.glb"));
switchGreen.add(new RotateWall())
switchViolet.add(new GLTFShape("models/mazeCoffin.glb"));
switchViolet.add(new RotateWall())
switchBrown.add(new GLTFShape("models/mazeCoffin.glb"));
switchBrown.add(new RotateWall())
switchStart.add(new GLTFShape("models/mazeObelisk.glb"));
switchWin.add(new GLTFShape("models/mazeObelisk.glb"));

let clip = switchBrown.get(GLTFShape).getClip("open");
clip.play();

switchGreen.set(
  new OnClick(() => {
    let random = Scalar.RandomRange(1, 100);
    let rotate = switchGreen.get(RotateWall)
    let tansition = switchGreen.get(Transform)
    let x = 40;
    let y = 30;
    if (random > 75) {
      x = 50;
      y= 40;
    } else if (random > 50)  {
      x = 30
      y = 40
    } else if (random > 25) {
      x = 40
      y = 50
    }
    tansition.position.set(x, 0, y)

    let wall = cirGreen.get(RotateWall)
    if (!wall.active){
      wall.active = true
    } else {
      wall.active = false
    }
  })
)
switchViolet.set(
  new OnClick(() => {
    let random = Scalar.RandomRange(1, 100);
    let rotate = switchViolet.get(RotateWall)
    let tansition = switchViolet.get(Transform)
    let x = 40;
    let y = 59;
    if (random > 75) {
      x = 59;
      y= 40;
    } else if (random > 50)  {
      x = 21
      y = 40
    } else if (random > 25) {
      x = 40
      y = 21
    }
    tansition.position.set(x, 0, y)

    let wall = cirViolet.get(RotateWall)
    if (!wall.active){
      wall.active = true
    } else {
      wall.active = false
    }
  })
)
switchBrown.set(
  new OnClick(() => {
    let random = Scalar.RandomRange(1, 100);
    let rotate = switchBrown.get(RotateWall)
    let tansition = switchBrown.get(Transform)
    let x = 40;
    let y = 13;
    if (random > 75) {
      x = 13;
      y= 40;
    } else if (random > 50)  {
      x = 67
      y = 40
    } else if (random > 25) {
      x = 40
      y = 67
    }
    tansition.position.set(x, 0, y)

    let wall = cirBrown.get(RotateWall)
    if (!wall.active){
      wall.active = true
    } else {
      wall.active = false
    }
  })
)
switchStart.set(
  new OnClick(() => {
    cirGreen.get(RotateWall).active = false;
    cirBrown.get(RotateWall).active = false;
    cirViolet.get(RotateWall).active = false;

    let random01 = Scalar.RandomRange(0, 360);
    let random02 = Scalar.RandomRange(0, 360);
    let random03 = Scalar.RandomRange(0, 360);

    cirGreen.get(Transform).rotation.setEuler(0, random01, 0);
    cirBrown.get(Transform).rotation.setEuler(0, random02, 0);
    cirViolet.get(Transform).rotation.setEuler(0, random03, 0);
  })
)
switchWin.set(
  new OnClick(() => {
    cirGreenOut.get(RotateWall).active = false;
    cirGreen.get(RotateWall).active = false;
    cirBrown.get(RotateWall).active = false;
    cirViolet.get(RotateWall).active = false;

    cirGreenOut.get(Transform).rotation.setEuler(0, 0, 0);
    cirGreen.get(Transform).rotation.setEuler(0, 0, 0);
    cirBrown.get(Transform).rotation.setEuler(0, 0, 0);
    cirViolet.get(Transform).rotation.setEuler(0, 0, 0);
  })
)

engine.addEntity(floor);
engine.addEntity(entrance);
engine.addEntity(chakals);
engine.addEntity(ceiling);
engine.addEntity(cirGreen);
engine.addEntity(cirViolet);
engine.addEntity(cirBrown);
engine.addEntity(cirGreenOut);
engine.addEntity(switchGreen);
engine.addEntity(switchViolet);
engine.addEntity(switchBrown);
engine.addEntity(switchStart);
engine.addEntity(switchWin);
