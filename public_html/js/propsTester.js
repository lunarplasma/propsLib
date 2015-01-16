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
 */


function $(id) {
    if (document.getElementById(id)) {
        return document.getElementById(id);
    }
    else {
        return null;
    }
}

function updateText(object, v1, v2, v3) {
    object.innerHTML = v1 + v2 + v3;
}


//var txtProp1 = new Prop();
//txtProp1.set("Set One", true);

var watcher1 = new Watcher($("text1"), updateText);
watcher1.update(1, 1, 6);