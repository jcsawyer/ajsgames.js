// src/framework/point.js

AJSGAMES.Framework.Point = function (x, y) {
    this.X = x || 0;
    this.Y = y || 0;
};

AJSGAMES.Framework.Point.prototype.Add = function (point) {
    return new AJSGAMES.Framework.Point(this.X + point.X, this.Y + point.Y);
};

AJSGAMES.Framework.Point.prototype.Subtract = function (point) {
    return new AJSGAMES.Framework.Point(this.X - point.X, this.Y - point.Y);
};

AJSGAMES.Framework.Point.prototype.Multiply = function (point) {
    return new AJSGAMES.Framework.Point(this.X * point.X, this.Y * point.Y);
};

AJSGAMES.Framework.Point.prototype.Divide = function (point) {
    return new AJSGAMES.Framework.Point(this.X / point.X, this.Y / point.Y);
};

AJSGAMES.Framework.Point.prototype.Equals = function (obj) {
    return (obj instanceof AJSGAMES.Framework.Point) ? ((this.X === obj.X) && (this.Y === obj.Y)) : false;
};

AJSGAMES.Framework.Point.prototype.ToString = function () {
    return '{ X : ' + this.X + ', Y : ' + this.Y + ' }';
};