// src/framework/vector2.js

AJSGAMES.Framework.Vector2 = function (x, y) {
    this.X = x || 0;
    this.Y = y || 0;
};

AJSGAMES.Framework.Vector2.prototype.Add = function (vector2) {
    return new AJSGAMES.Framework.Vector2(this.X + vector2.X, this.Y + vector2.Y);
};

AJSGAMES.Framework.Vector2.prototype.Subtract = function (vector2) {
    return new AJSGAMES.Framework.Vector2(this.X - vector2.X, this.Y - vector2.Y);
};

AJSGAMES.Framework.Vector2.prototype.Multiply = function (vector2) {
    return new AJSGAMES.Framework.Vector2(this.X * vector2.X, this.Y * vector2.Y);
};

AJSGAMES.Framework.Vector2.prototype.Divide = function (vector2) {
    return new AJSGAMES.Framework.Vector2(this.X / vector2.X, this.Y / vector2.Y);
};

AJSGAMES.Framework.Vector2.prototype.Equals = function (obj) {
    return (obj instanceof AJSGAMES.Framework.Vector2) ? ((this.X === obj.X) && (this.Y === obj.Y)) : false;
};

AJSGAMES.Framework.Vector2.prototype.ToString = function () {
    return '{ X : ' + this.X + ', Y : ' + this.Y + ' }';
};

AJSGAMES.Framework.Vector2.Distance = function (value1, value2) {
    distanceX = value1.X - value2.X;
    distanceY = value1.Y - value2.Y;
    return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
};

AJSGAMES.Framework.Vector2.DistanceSquared = function (value1, value2) {
    distanceX = value1.X - value2.X;
    distanceY = value1.Y - value2.Y;
    return ((distanceX * distanceX) + (distanceY * distanceY));
};