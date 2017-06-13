// src/framework/game.js


// AJSGAMES.Framework.Game - Initializes a new instance of this class, which provides basic graphics device initialization, game logic, rendering code, and a game loop.
// AJSGAMES.Framework.Game.prototype.Initialize(graphicsDeviceManager) - Called after the Game and GraphicsDevice are created, but before LoadContent. 
// AJSGAMES.Framework.Game.prototype.LoadContent() - Called when graphics resources need to be loaded.
// AJSGAMES.Framework.Game.prototype.UnloadContent() - Called when graphics resources need to be unloaded. Override this method to unload any game-specific graphics resources.
// AJSGAMES.Framework.Game.prototype.Update() - Called when the game has determined that game logic needs to be processed.
// AJSGAMES.Framework.Game.prototype.Draw() - Called when the game determines it is time to draw a frame.
// AJSGAMES.Framework.Game.prototype.Tick() - Update's the game's clock and calls Update and Draw.
// AJSGAMES.Framework.Game.prototype.ResestElapsedTime() - Resets the elapsed time counter.


AJSGAMES.Framework.Game = function () {
    this.GameTime = null;
};