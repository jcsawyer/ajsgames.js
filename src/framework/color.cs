// src/framework/color.js

AJSGAMES.Framework.Color = function (r, g, b, a) {
    this.R = r || 0;
    this.G = g || 0;
    this.B = b || 0;
    this.A = a || 255;
};

AJSGAMES.Framework.Color.Red = new AJSGAMES.Framework.Color(255, 0, 0, 255);
AJSGAMES.Framework.Color.Green = new AJSGAMES.Framework.Color(0, 255, 0, 255);
AJSGAMES.Framework.Color.Blue = new AJSGAMES.Framework.Color(0, 0, 255, 255);
AJSGAMES.Framework.Color.Black = new AJSGAMES.Framework.Color(0, 0, 0, 255);
AJSGAMES.Framework.Color.White = new AJSGAMES.Framework.Color(255, 255, 255, 255);