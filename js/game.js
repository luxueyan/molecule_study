Molecule({
    width: 640,
    height: 640
})
.tilemap('Desert', 'assets/desert.json')
.ready(function(game) {
	game.boundaries = {
		x: 0,
		y: 0,
		width: game.width,
		height: game.height
	};
	game.input.enable('keyboard');
	game.molecule.define('man', {
		ax: 0,
		ay: 1,
		step: 1,
		init: function() {
			this.sprite.frame.offset.y = 16;
			this.sprite.speed.max.x = 1;
			this.sprite.speed.max.y = 1;
		},
		update: function() {
			var sp = this.sprite;
			var cl = sp.collision;
			var key = game.input.key;
			if (key.UP_ARROW) {
				sp.animation.stop();
				sp.animation.run('a3');
				if (cl.map.up || cl.boundaries.up) {
					return;
				} else {

					this.ax = 0;
					this.ay = -1;
				}
			} else if (key.RIGHT_ARROW) {
				sp.animation.stop();
				sp.animation.run('a2');
				if (cl.map.right || cl.boundaries.right) {
					return;
				} else {
					this.ax = 1;
					this.ay = 0;
				}
			} else if (key.DOWN_ARROW) {
				sp.animation.stop();
				sp.animation.run('a0');
				if (cl.map.down || cl.boundaries.down) {
					return;
				} else {
					this.ax = 0;
					this.ay = 1;
				}
			} else if (key.LEFT_ARROW) {
				sp.animation.stop();
				sp.animation.run('a1');
				if (cl.map.left || cl.boundaries.left) {
					return;
				} else {
					this.ax = -1;
					this.ay = 0;
				}
			} else {
				this.ax = 0;
				this.ay = 0;
				this.sprite.speed.y = 0;
				this.sprite.speed.x = 0;
			}
			
			this.sprite.acceleration.x = this.ax;
			this.sprite.acceleration.y = this.ay;
		}
	})
    // Activate tilemap
    game.tilemap.set('Desert');


});