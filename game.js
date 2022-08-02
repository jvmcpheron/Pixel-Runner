var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {

    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.atlas('knight', 'assets/animations/knight.png', 'assets/animations/knight.json');
    this.load.image('bg', 'assets/skies/clouds.png');
    this.load.spritesheet('tiles', 'assets/tilemaps/tiles/fantasy-tiles.png', { frameWidth: 64, frameHeight: 64 });

}

function create ()
{

    this.add.image(400, 16, 'bg').setOrigin(0.5, 0);

    for (let i = 0; i < 13; i++)
    {
        this.add.image(64 * i, 536, 'tiles', 1)
            .setOrigin(0);
    }


//hero run animation

    const animConfig = {
        key: 'run',
        frames: this.anims.generateFrameNames('knight', { prefix: 'run/frame', start: 0, end: 7, zeroPad: 4 }),
        frameRate: 12,
        repeat: -1
    };

//hero attack animation

    const attackConfig = {
        key: 'attack',
        frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 12, zeroPad: 4 }),
        frameRate: 16
    };


    // hero
this.anims.create(animConfig);

const lancelot = this.add.sprite(200, 536, 'knight');

lancelot.setOrigin(0.5, 1);
lancelot.setScale(3);
lancelot.play('run');


}