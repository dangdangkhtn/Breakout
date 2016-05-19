﻿module TypeScriptPhaserApp1.Client {

    export class Boot extends Phaser.State {
        preload() {
            //You can preload an image here if you dont want to use text for the loading screen
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.stage.backgroundColor = '#eee';
            this.game.load.image('ball', 'img/ball.png');
            this.game.load.image('paddle', 'img/paddle.png');
            this.game.load.image('brick', 'img/brick.png');
        }

        create() {
            this.stage.setBackgroundColor(0xFFFFFF);

            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
                //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            } else {
                // mobile
                //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 480;
                this.scale.minHeight = 260;
                this.scale.maxWidth = 1024;
                this.scale.maxHeight = 768;
                this.scale.forceLandscape = true;
                this.scale.pageAlignHorizontally = true;
                this.scale.refresh();
            }

            this.game.state.start('Preloader', true, false);
        }
    }

}