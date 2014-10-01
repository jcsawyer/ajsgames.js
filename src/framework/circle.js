// src/framework/circle.js

AJSGAMES.Framework.Circle = function (x, y, radius) {
    this.X = x || 0;
    this.Y = y || 0;
    this.Radius = radius || 100;
};

AJSGAMES.Framework.Circle.prototype.Equals = function (obj) {
    return (obj instanceof AJSGAMES.Framework.Circle) ? ((this.X === obj.X) && (this.Y === obj.Y) & (this.Radius === obj.Radius) && (this.Start === obj.Start) && (this.End === obj.End)) : false;
};

AJSGAMES.Framework.Circle.prototype.Contains = function () {
    if (arguments.length == 1) {
        var obj = arguments[0];
        if (obj instanceof AJSGAMES.Framework.Point) {
            return (((obj.X - this.X) * (obj.X - this.X)) + ((obj.Y - this.Y) * (obj.Y - this.Y)) < (this.Radius * this.Radius));
        } else if (obj instanceof AJSGAMES.Framework.Rectangle) {
            return (((((this.X - obj.Left()) * (this.X - obj.Left())) + ((this.Y - obj.Top()) * (this.Y - obj.Top()))) > (this.Radius * this.Radius)) 
                && (((this.X - obj.Right()) * (this.X - obj.Right()) + ((this.Y - obj.Top()) * (this.Y - obj.Top()))) > (this.Radius * this.Radius)) 
                && (((this.X - obj.Left()) * (this.X - obj.Left()) + ((this.Y - obj.Bottom()) * (this.Y - obj.Bottom()))) > (this.Radius * this.Radius)) 
                && (((this.X - obj.Right()) * (this.X - obj.Right()) + ((this.Y - obj.Bottom()) * (this.Y - obj.Bottom()))) > (this.Radius * this.Radius)));
        } else if (obj instanceof AJSGAMES.Framework.Circle) {
            return ((((obj.X - obj.Radius) >= (this.X - this.Radius))) && ((obj.X + obj.Radius) <= (this.X + this.Radius)) && ((this.Y - this.Radius) >= (obj.Y - obj.Radius)) && ((this.Y + this.Radius) <= (obj.Y + obj.Radius)));
        } else {
            console.log('Invalid argument "AJSGAMES.Framework.Circle.prototype.Contains"');
            return false;
        };
    };
    var x = arguments[0];
    var y = arguments[1];
    return (((x - this.X) * (x - this.X)) + ((y - this.Y) * (y - this.Y)) < (this.Radius * this.Radius));
};

AJSGAMES.Framework.Circle.prototype.Intersects = function () {
    if (arguments.length == 1) {
        var obj = arguments[0];
        if (obj instanceof AJSGAMES.Framework.Rectangle) {
            var closestX = AJSGAMES.Framework.MathHelper.Clamp(this.X, obj.Left(), obj.Right());
            var closestY = AJSGAMES.Framework.MathHelper.Clamp(this.Y, obj.Top(), obj.Bottom());
            var distanceX = this.X - closestX;
            var distanceY = this.Y - closestY;
            var distance = ((distanceX * distanceX) + (distanceY * distanceY));
            return (distance < (this.Radius * this.Radius));
        } else if (obj instanceof AJSGAMES.Framework.Circle) {
            var radMin = ((this.Radius - obj.Radius) * (this.Radius - obj.Radius));
            var radMax = ((this.Radius + obj.Radius) * (this.Radius + obj.Radius));
            return ((((((this.X - obj.X) * (this.X - obj.X)) + ((this.Y - obj.Y) * (this.Y - obj.Y))) >= radMax))
                && ((((this.X - obj.X) * (this.X - obj.X)) + ((this.Y - obj.Y) * (this.Y - obj.Y))) <= radMax));
        } else {
            console.log('Invalid argument "AJSGAMES.Framework.Circle.prototype.Intersects"');
            return false;
        };
    };
    console.log('No argument "AJSGAMES.Framework.Circle.prototype.Intersects"');
    return false;
};

AJSGAMES.Framework.Circle.prototype.ToString = function () {
    return '{ X : ' + this.X + ', Y : ' + this.Y + ', Width : ' + this.Width + ', Radius : ' + this.Radius + ' }';
};