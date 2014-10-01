// src/ajsgames.js

var AJSGAMES = AJSGAMES || {};

AJSGAMES.RegisterNamespace('AJSGAMES.Framework');
AJSGAMES.RegisterNamespace('AJSGAMES.Framework.Content');
AJSGAMES.RegisterNamespace('AJSGAMES.Framework.Input');
AJSGAMES.RegisterNamespace('AJSGAMES.Framework.Graphics');
AJSGAMES.RegisterNamespace('AJSGAMES.Framework.Audio');
AJSGAMES.RegisterNamespace('AJSGAMES.Debug');
AJSGAMES.RegisterNamespace('AJSGAMES.Components');

AJSAMES.RegisterNamespace = function (namespace) {
    var parts = namespace.split('.');
    var parent = AJSGAMES;

    if (parts[0] === 'AJSAMES') {
        parts = parts.slice(1);
    };

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (typeof parent[part] === 'undefined') {
            parent[part] = {};
        };
        parent = parent[part];
    };

    return parent;
};

AJSAMES.NamespaceIsRegistered = function (namespace) {
    var parts = namespace.split('.');
    var parent = AJSGAMES;

    if (parts[0] === 'AJSAMES') {
        parts = parts.slice(1);
    };

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (typeof parent[part] === 'undefined') {
            return false;
        };
    };

    return true;
};