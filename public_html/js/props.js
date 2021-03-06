/* 
 * Copyright (C) 2015 John Go-Soco
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * props.js
 *
 * Purpose: 
 * implement a simple observer-pattern object which can have multiple watchers.
 * 
 * Usage:
 * Prop holds the property value, which is set using the Set command. Any watchers of Prop are informed whenever the 
 * set command is called.
 * 
 * Watchers are added to the Prop.watchers array. Watchers will need to be created with a function which
 * defines their behaviour when the property changes. They can be initialized with an .object property which can hold a DOM
 * object, for the purpose of then defining the update function.
 */

"use strict";

//########################################################//
/**
 * prop()
 * @returns {Prop} 
 */
var Prop = function() {    
    this._value = 0; // internal property holder    
    this.watchers = [];
    return this;
};

Prop.prototype.set = function (value, doNotBroadcast) {
    if (this._value !== value) {
        this._value = value;
        if (!doNotBroadcast) {
            this.broadcast();
        };
        return true;
    }
    else return false;    
};

Prop.prototype.broadcast = function() {
    for (var i = 0; i < this.watchers.length; i++) {
        this.watchers[i].update(this._value);
    }
};

Prop.prototype.addWatcher = function(watcher) {
    if (typeof(this.watchers) === 'undefined') {
        this.watchers = [];
        this.watchers.push(watcher);
    }
    this.watchers.push(watcher);
};    

//########################################################//
/** 
 * Constructor for Watcher object. use the update method to change values
 * @param {type} object
 * @param {type} updateFunction
 * @returns {Watcher}
 */
var Watcher = function(object, updateFunction) {        
    this._object = object;
    this._updateFunction = updateFunction;
};

Watcher.prototype.update = function() {
    this._updateFunction(this._object, arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]);    
};
//########################################################//
