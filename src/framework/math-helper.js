// src/framework/math-helper.js

AJSGAMES.Framework.MathHelper = {
    Pi: Math.Pi,
    HalfPi: Math.Pi / 2,
    QuarterPi: Math.Pi / 4,
    TwoPi: Math.Pi * 2,
    E: Math.E,
    Log10E: 0.4342945,
    Log2E: 1.442695,
    Clamp: function (value, min, max) {
        return Math.max(min, Math.min(max, value));
    },
    Distance: function (value1, value2) {
        return Math.abs(value1 - value2);
    },
    Lerp: function (value1, value2, ammount) {
        return value1 + (value2 - value1) * ammount;
    },
    Min: function (value1, value2) {
        return Math.min(value1, value2);
    },
    Max: function (value1, value2) {
        return Math.max(value1, value2);
    },
    ToDegrees: function (radiant) {
        return radians * 57.295779513082320876798154814105;
    },
    ToRadians: function (degrees) {
        return degrees * 0.017453292519943295769236907684886;
    },
    IsPowerOfTwo: function (value) {
        return (value > 0) && ((value & (value - 1)) === 0);
    }
};