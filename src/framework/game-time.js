// src/framework/game-time.js


/*
 * Create a new instance of GameTime. 
 */
AJSGAMES.Framework.GameTime = function () {
    this.IsRunningSlowly = false;
    this.CurrentGameTime = new Date().getTime();
    this.ElapsedGameTime = 0;
    this.TotalGameTime = 0;
};

AJSGAMES.Framework.GameTime.prototype.Update = function () {
    this.ElapsedGameTime = (new Date().getTime()) - this.CurrentGameTime;
    this.TotalGameTime += this.ElapsedGameTime;
    this.CurrentGameTime = new Date().getTime();
};