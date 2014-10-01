// src/framework/rectangle.js

AJSGAMES.Framework.Rectangle = function (x, y, width, height) {
    this.X = x || 0;
    this.Y = y || 0;
    this.Width = width || 0;
    this.Height = height || 0;
};

AJSGAMES.Framework.Rectangle.prototype.Equals = function (obj) {
    return (obj instanceof AJSGAMES.Framework.Rectangle) ? ((this.X === obj.X) && (this.Y === obj.Y) && (this.Width === obj.Width) && (this.Height === obj.Height)) : false;
};

AJSGAMES.Framework.Rectangle.prototype.Left = function () {
    return this.X;
};

AJSGAMES.Framework.Rectangle.prototype.Right = function () {
    return this.X + this.Width;
};

AJSGAMES.Framework.Rectangle.prototype.Top = function () {
    return this.Y;
};

AJSGAMES.Framework.Rectangle.prototype.Bottom = function () {
    return this.Y + this.Height;
};

AJSGAMES.Framework.Rectangle.prototype.Centre = function () {
    return new AJSGAMES.Framework.Point(this.X + (this.Width / 2), this.Y + (this.Height / 2));
};

AJSGAMES.Framework.Rectangle.prototype.Contains = function () {
    if (arguments.length == 1) {
        var obj = arguments[0];
        if (obj instanceof AJSGAMES.Framework.Point) {
            return (((obj.X >= this.Left()) && (obj.X <= this.Right())) && ((obj.Y >= this.Top()) && (obj.Y <= this.Bottom())));
        } else if (obj instanceof AJSGAMES.Framework.Rectangle) {
            return ((this.Left() >= obj.Left()) && (this.Right() <= obj.Right()) && (this.Top() >= obj.Top()) && (this.Bottom() <= obj.Bottom()));
        } else if (obj instanceof AJSGAMES.Framework.Circle) {
            return ((((obj.X - obj.Radius) >= this.Left())) && ((obj.X + obj.Radius) <= this.Right()) && (this.Top() >= (obj.Y - obj.Radius)) && (this.Bottom() <= (obj.Y + obj.Radius)));
        } else {
            console.log('Invalid argument "AJSGAMES.Framework.Rectangle.prototype.Contains"');
            return false;
        };
    };
    var x = arguments[0];
    var y = arguments[1];
    return (((x >= this.Left()) && (x <= this.Right())) && ((y >= this.Top()) && (y <= this.Bottom())));
};

AJSGAMES.Framework.Rectangle.prototype.Intersects = function () {
    if (arguments.length == 1) {
        var obj = arguments[0];
        if (obj instanceof AJSGAMES.Framework.Rectangle) {
            return !(obj.Left() > this.Right() || obj.Right() < this.Left() || obj.Top() > this.Bottom() || obj.Bottom() < this.Top());
        } else if (obj instanceof AJSGAMES.Framework.Circle) {
            var closestX = AJSGAMES.Framework.MathHelper.Clamp(obj.X, this.Left(), this.Right());
            var closestY = AJSGAMES.Framework.MathHelper.Clamp(obj.Y, this.Top(), this.Bottom());
            var distanceX = obj.X - closestX;
            var distanceY = obj.Y - closestY;
            var distance = ((distanceX * distanceX) + (distanceY * distanceY));
            return (distance < (obj.Radius * obj.Radius));
        } else {
            console.log('Invalid argument "AJSGAMES.Framework.Rectangle.prototype.Intersects"');
            return false;
        }
    };
    console.log('No argument "AJSGAMES.Framework.Rectangle.prototype.Intersects"');
    return false;
};

AJSGAMES.Framework.Rectangle.prototype.Inflate = function (x, y) {
    this.X -= x;
    this.Y -= y;
    this.Width += x * 2;
    this.Height += y * 2;
};

AJSGAMES.Framework.Rectangle.prototype.ToString = function () {
    return '{ X : ' + this.X + ', Y : ' + this.Y + ', Width : ' + this.Width + ', Height : ' + this.Height + ' }';
};