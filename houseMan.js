// Create a PixiJS application
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
const app = new PIXI.Application({width: 2000, height: 2000, antialias: false});

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.resize(window.innerWidth, window.innerHeight);

const spriteSheetName = usePng8 ? "spritesheets/spritesheet-mypng8.json" : "spritesheets/spritesheet.json";

// load sprite sheet image + data file, call setup() if completed
PIXI.Assets.load([
    spriteSheetName
]).then((textures) => {

    // the sprite sheet we've just loaded:
    const sheet = textures[spriteSheetName];

    // initialize background sprite
    const background = new PIXI.AnimatedSprite(sheet.animations["background"]);
    
    background.animationSpeed = 1 / 6;
    background.position.set(250,0);
    background.play();
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / 1000;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    /*const animatedCapguy = new PIXI.AnimatedSprite(sheet.animations["walkTest"]);

    // configure + start animation:
    animatedCapguy.animationSpeed = 1 / 6;                   // 6 fps
    animatedCapguy.position.set(-250, background.height - 500); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    app.stage.addChild(animatedCapguy);

    app.ticker.add(delta => {
        animatedCapguy.x = (animatedCapguy.x + 10 * delta) % (window.innerWidth);
    }); */

    const animatedWave = new PIXI.AnimatedSprite(sheet.animations["wavingMan"]);

    // configure + start animation:
    animatedWave.animationSpeed = 1 / 6;                   // 6 fps
    animatedWave.position.set(425, background.height - 300); // almost bottom-left corner of the canvas
    animatedWave.play();

    // Enable this to update the anchor points with each animation frame
    // animatedCapguy.updateAnchor = true;

    // add it to the stage and render!
    app.stage.addChild(animatedWave);

    // move the animated sprite to the right, reset to the left when it reaches the end
});
