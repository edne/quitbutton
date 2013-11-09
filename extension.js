/*	Copyright 2013 Edoardo Negri
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// different versions of gnome shell use different names for statusArea variabile
var userMenuButton;
try {
	userMenuButton = imports.ui.main.panel.statusArea['userMenu']
} catch(TypeError) {
	userMenuButton = imports.ui.main.panel._statusArea['userMenu'];
}

// icons in top-right corner
const icons = [
			userMenuButton._offlineIcon,
			userMenuButton._availableIcon,
			userMenuButton._busyIcon,
			userMenuButton._invisibleIcon,
			userMenuButton._awayIcon,
			userMenuButton._idleIcon
		];

// backup array
var old_names = new Array(icons.length);

function init() {	
}

function enable() {
	userMenuButton._name.hide();
	userMenuButton._iconBox.show();
	
	// for each icon backup old name and replace it
	for(var i in icons) {
		old_names[i] = icons[i].get_icon_name();
		icons[i].set_icon_name('system-shutdown-symbolic');
	}
}

function disable() {
	userMenuButton._name.show();
	
	// restore old names
	for(var i in icons) {
		icons[i].set_icon_name(old_names[i]);
	}
}

