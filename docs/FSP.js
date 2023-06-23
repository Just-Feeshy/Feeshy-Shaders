(function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { (function ($hx_exports, $global) { "use strict";
$hx_exports["lime"] = $hx_exports["lime"] || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var lime_app_IModule = function() { };
$hxClasses["lime.app.IModule"] = lime_app_IModule;
lime_app_IModule.__name__ = "lime.app.IModule";
lime_app_IModule.__isInterface__ = true;
lime_app_IModule.prototype = {
	__class__: lime_app_IModule
};
var lime_app_Module = function() {
	this.onExit = new lime_app__$Event_$Int_$Void();
};
$hxClasses["lime.app.Module"] = lime_app_Module;
lime_app_Module.__name__ = "lime.app.Module";
lime_app_Module.__interfaces__ = [lime_app_IModule];
lime_app_Module.prototype = {
	__registerLimeModule: function(application) {
	}
	,__unregisterLimeModule: function(application) {
	}
	,__class__: lime_app_Module
};
var lime__$internal_backend_html5_HTML5Application = function(parent) {
	this.gameDeviceCache = new haxe_ds_IntMap();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime_media_AudioManager.init();
	this.accelerometer = lime_system_Sensor.registerSensor(lime_system_SensorType.ACCELEROMETER,0);
};
$hxClasses["lime._internal.backend.html5.HTML5Application"] = lime__$internal_backend_html5_HTML5Application;
lime__$internal_backend_html5_HTML5Application.__name__ = "lime._internal.backend.html5.HTML5Application";
lime__$internal_backend_html5_HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) {
			return keyCode + 32;
		}
		switch(keyCode) {
		case 12:
			return 1073741980;
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 19:
			return 1073741896;
		case 20:
			return 1073741881;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 35:
			return 1073741901;
		case 36:
			return 1073741898;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 41:
			return 1073741943;
		case 43:
			return 1073741940;
		case 44:
			return 1073741894;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 91:
			return 1073742051;
		case 92:
			return 1073742055;
		case 93:
			return 1073742055;
		case 95:
			return 1073742106;
		case 96:
			return 1073741922;
		case 97:
			return 1073741913;
		case 98:
			return 1073741914;
		case 99:
			return 1073741915;
		case 100:
			return 1073741916;
		case 101:
			return 1073741917;
		case 102:
			return 1073741918;
		case 103:
			return 1073741919;
		case 104:
			return 1073741920;
		case 105:
			return 1073741921;
		case 106:
			return 1073741909;
		case 107:
			return 1073741911;
		case 108:
			return 1073741923;
		case 109:
			return 1073741910;
		case 110:
			return 1073741923;
		case 111:
			return 1073741908;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 127:
			return 1073741931;
		case 128:
			return 1073741932;
		case 129:
			return 1073741933;
		case 130:
			return 1073741934;
		case 131:
			return 1073741935;
		case 132:
			return 1073741936;
		case 133:
			return 1073741937;
		case 134:
			return 1073741938;
		case 135:
			return 1073741939;
		case 144:
			return 1073741907;
		case 145:
			return 1073741895;
		case 160:
			return 94;
		case 161:
			return 33;
		case 163:
			return 35;
		case 164:
			return 36;
		case 166:
			return 1073742094;
		case 167:
			return 1073742095;
		case 168:
			return 1073742097;
		case 169:
			return 41;
		case 170:
			return 42;
		case 171:
			return 96;
		case 172:
			return 1073741898;
		case 173:
			return 45;
		case 174:
			return 1073741953;
		case 175:
			return 1073741952;
		case 176:
			return 1073742082;
		case 177:
			return 1073742083;
		case 178:
			return 1073742084;
		case 179:
			return 1073742085;
		case 180:
			return 1073742089;
		case 181:
			return 1073742086;
		case 182:
			return 1073741953;
		case 183:
			return 1073741952;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 193:
			return 63;
		case 194:
			return 1073741923;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		case 223:
			return 96;
		case 224:
			return 1073742051;
		case 226:
			return 92;
		}
		return keyCode;
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		var o = window;
		if(Object.prototype.hasOwnProperty.call(o,"Accelerometer")) {
			window.addEventListener("devicemotion",$bind(this,this.handleSensorEvent),false);
		}
		
			if (!CanvasRenderingContext2D.prototype.isPointInStroke) {
				CanvasRenderingContext2D.prototype.isPointInStroke = function (path, x, y) {
					return false;
				};
			}
			if (!CanvasRenderingContext2D.prototype.isPointInPath) {
				CanvasRenderingContext2D.prototype.isPointInPath = function (path, x, y) {
					return false;
				};
			}

			if ('performance' in window == false) {
				window.performance = {};
			}

			if ('now' in window.performance == false) {
				var offset = Date.now();
				if (performance.timing && performance.timing.navigationStart) {
					offset = performance.timing.navigationStart
				}
				window.performance.now = function now() {
					return Date.now() - offset;
				}
			}

			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}

			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); },
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};

			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};

			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		var _g = 0;
		var _g1 = this.parent.__windows;
		while(_g < _g1.length) {
			var $window = _g1[_g];
			++_g;
			$window.__backend.updateSize();
		}
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var _g = 0;
			var _g1 = this.parent.__windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				this.parent.onUpdate.dispatch(this.deltaTime | 0);
				if($window.context != null) {
					$window.onRender.dispatch($window.context);
				}
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
			} else {
				this.nextUpdate = this.currentUpdate - this.currentUpdate % this.framePeriod + this.framePeriod;
			}
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.__window != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null ? event.keyCode : event.which);
			var modifier = (event.shiftKey ? 3 : 0) | (event.ctrlKey ? 192 : 0) | (event.altKey ? 768 : 0) | (event.metaKey ? 3072 : 0);
			if(event.type == "keydown") {
				this.parent.__window.onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyDown.canceled && event.cancelable) {
					event.preventDefault();
				}
			} else {
				this.parent.__window.onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyUp.canceled && event.cancelable) {
					event.preventDefault();
				}
			}
		}
	}
	,handleSensorEvent: function(event) {
		this.accelerometer.onUpdate.dispatch(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y,event.accelerationIncludingGravity.z);
	}
	,handleWindowEvent: function(event) {
		if(this.parent.__window != null) {
			switch(event.type) {
			case "beforeunload":
				break;
			case "blur":
				if(!this.hidden) {
					this.parent.__window.onFocusOut.dispatch();
					this.parent.__window.onDeactivate.dispatch();
					this.hidden = true;
				}
				break;
			case "focus":
				if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			case "resize":
				this.parent.__window.__backend.handleResizeEvent(event);
				break;
			case "visibilitychange":
				if(window.document.hidden) {
					if(!this.hidden) {
						this.parent.__window.onFocusOut.dispatch();
						this.parent.__window.onDeactivate.dispatch();
						this.hidden = true;
					}
				} else if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			}
		}
	}
	,updateGameDevices: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		if(devices == null) {
			return;
		}
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g = 0;
		var _g1 = devices.length;
		while(_g < _g1) {
			var i = _g++;
			id = i;
			data = devices[id];
			if(data == null) {
				continue;
			}
			if(!this.gameDeviceCache.h.hasOwnProperty(id)) {
				cache = new lime__$internal_backend_html5_GameDeviceData();
				cache.id = id;
				cache.connected = data.connected;
				var _g2 = 0;
				var _g3 = data.buttons.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g4 = 0;
				var _g5 = data.axes.length;
				while(_g4 < _g5) {
					var i2 = _g4++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") {
					cache.isGamepad = true;
				}
				this.gameDeviceCache.h[id] = cache;
				if(data.connected) {
					lime_ui_Joystick.__connect(id);
					if(cache.isGamepad) {
						lime_ui_Gamepad.__connect(id);
					}
				}
			}
			cache = this.gameDeviceCache.h[id];
			joystick = lime_ui_Joystick.devices.h[id];
			gamepad = lime_ui_Gamepad.devices.h[id];
			if(data.connected) {
				var button;
				var value;
				var _g6 = 0;
				var _g7 = data.buttons.length;
				while(_g6 < _g7) {
					var i3 = _g6++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(4,value);
							}
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(5,value);
							}
						} else {
							if(value > 0) {
								joystick.onButtonDown.dispatch(i3);
							} else {
								joystick.onButtonUp.dispatch(i3);
							}
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) {
									gamepad.onButtonDown.dispatch(button);
								} else {
									gamepad.onButtonUp.dispatch(button);
								}
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g8 = 0;
				var _g9 = data.axes.length;
				while(_g8 < _g9) {
					var i4 = _g8++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) {
							gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						}
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				lime_ui_Joystick.__disconnect(id);
				lime_ui_Gamepad.__disconnect(id);
			}
		}
	}
	,__class__: lime__$internal_backend_html5_HTML5Application
};
var lime_app_Application = function() {
	this.onCreateWindow = new lime_app__$Event_$lime_$ui_$Window_$Void();
	this.onUpdate = new lime_app__$Event_$Int_$Void();
	lime_app_Module.call(this);
	if(lime_app_Application.current == null) {
		lime_app_Application.current = this;
	}
	this.meta = new haxe_ds_StringMap();
	this.modules = [];
	this.__windowByID = new haxe_ds_IntMap();
	this.__windows = [];
	this.__backend = new lime__$internal_backend_html5_HTML5Application(this);
	this.__registerLimeModule(this);
	this.__preloader = new lime_utils_Preloader();
	this.__preloader.onProgress.add($bind(this,this.onPreloadProgress));
	this.__preloader.onComplete.add($bind(this,this.onPreloadComplete));
};
$hxClasses["lime.app.Application"] = lime_app_Application;
lime_app_Application.__name__ = "lime.app.Application";
lime_app_Application.__super__ = lime_app_Module;
lime_app_Application.prototype = $extend(lime_app_Module.prototype,{
	addModule: function(module) {
		module.__registerLimeModule(this);
		this.modules.push(module);
	}
	,createWindow: function(attributes) {
		var $window = this.__createWindow(attributes);
		this.__addWindow($window);
		return $window;
	}
	,exec: function() {
		lime_app_Application.current = this;
		return this.__backend.exec();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onJoystickAxisMove: function(joystick,axis,value) {
	}
	,onJoystickButtonDown: function(joystick,button) {
	}
	,onJoystickButtonUp: function(joystick,button) {
	}
	,onJoystickConnect: function(joystick) {
	}
	,onJoystickDisconnect: function(joystick) {
	}
	,onJoystickHatMove: function(joystick,hat,position) {
	}
	,onJoystickTrackballMove: function(joystick,trackball,x,y) {
	}
	,onKeyDown: function(keyCode,modifier) {
	}
	,onKeyUp: function(keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(x,y,button) {
	}
	,onMouseMove: function(x,y) {
	}
	,onMouseMoveRelative: function(x,y) {
	}
	,onMouseUp: function(x,y,button) {
	}
	,onMouseWheel: function(deltaX,deltaY,deltaMode) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function() {
	}
	,onRenderContextRestored: function(context) {
	}
	,onTextEdit: function(text,start,length) {
	}
	,onTextInput: function(text) {
	}
	,onTouchCancel: function(touch) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function() {
	}
	,onWindowClose: function() {
	}
	,onWindowCreate: function() {
	}
	,onWindowDeactivate: function() {
	}
	,onWindowDropFile: function(file) {
	}
	,onWindowEnter: function() {
	}
	,onWindowExpose: function() {
	}
	,onWindowFocusIn: function() {
	}
	,onWindowFocusOut: function() {
	}
	,onWindowFullscreen: function() {
	}
	,onWindowLeave: function() {
	}
	,onWindowMove: function(x,y) {
	}
	,onWindowMinimize: function() {
	}
	,onWindowResize: function(width,height) {
	}
	,onWindowRestore: function() {
	}
	,removeModule: function(module) {
		if(module != null) {
			module.__unregisterLimeModule(this);
			HxOverrides.remove(this.modules,module);
		}
	}
	,render: function(context) {
	}
	,update: function(deltaTime) {
	}
	,__addWindow: function($window) {
		if($window != null) {
			this.__windows.push($window);
			this.__windowByID.h[$window.id] = $window;
			var _g = $bind(this,this.__onWindowClose);
			var window1 = $window;
			var tmp = function() {
				_g(window1);
			};
			$window.onClose.add(tmp,false,-10000);
			if(this.__window == null) {
				this.__window = $window;
				$window.onActivate.add($bind(this,this.onWindowActivate));
				$window.onRenderContextLost.add($bind(this,this.onRenderContextLost));
				$window.onRenderContextRestored.add($bind(this,this.onRenderContextRestored));
				$window.onDeactivate.add($bind(this,this.onWindowDeactivate));
				$window.onDropFile.add($bind(this,this.onWindowDropFile));
				$window.onEnter.add($bind(this,this.onWindowEnter));
				$window.onExpose.add($bind(this,this.onWindowExpose));
				$window.onFocusIn.add($bind(this,this.onWindowFocusIn));
				$window.onFocusOut.add($bind(this,this.onWindowFocusOut));
				$window.onFullscreen.add($bind(this,this.onWindowFullscreen));
				$window.onKeyDown.add($bind(this,this.onKeyDown));
				$window.onKeyUp.add($bind(this,this.onKeyUp));
				$window.onLeave.add($bind(this,this.onWindowLeave));
				$window.onMinimize.add($bind(this,this.onWindowMinimize));
				$window.onMouseDown.add($bind(this,this.onMouseDown));
				$window.onMouseMove.add($bind(this,this.onMouseMove));
				$window.onMouseMoveRelative.add($bind(this,this.onMouseMoveRelative));
				$window.onMouseUp.add($bind(this,this.onMouseUp));
				$window.onMouseWheel.add($bind(this,this.onMouseWheel));
				$window.onMove.add($bind(this,this.onWindowMove));
				$window.onRender.add($bind(this,this.render));
				$window.onResize.add($bind(this,this.onWindowResize));
				$window.onRestore.add($bind(this,this.onWindowRestore));
				$window.onTextEdit.add($bind(this,this.onTextEdit));
				$window.onTextInput.add($bind(this,this.onTextInput));
				this.onWindowCreate();
			}
			this.onCreateWindow.dispatch($window);
		}
	}
	,__createWindow: function(attributes) {
		var $window = new lime_ui_Window(this,attributes);
		if($window.id == -1) {
			return null;
		}
		return $window;
	}
	,__registerLimeModule: function(application) {
		application.onUpdate.add($bind(this,this.update));
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onExit.add($bind(this,this.__onModuleExit),false,0);
		var gamepad = lime_ui_Gamepad.devices.iterator();
		while(gamepad.hasNext()) {
			var gamepad1 = gamepad.next();
			this.__onGamepadConnect(gamepad1);
		}
		lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
		var joystick = lime_ui_Joystick.devices.iterator();
		while(joystick.hasNext()) {
			var joystick1 = joystick.next();
			this.__onJoystickConnect(joystick1);
		}
		lime_ui_Joystick.onConnect.add($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onCancel.add($bind(this,this.onTouchCancel));
		lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
	}
	,__removeWindow: function($window) {
		if($window != null && this.__windowByID.h.hasOwnProperty($window.id)) {
			if(this.__window == $window) {
				this.__window = null;
			}
			HxOverrides.remove(this.__windows,$window);
			this.__windowByID.remove($window.id);
			$window.close();
			if(this.__windows.length == 0) {
				lime_system_System.exit(0);
			}
		}
	}
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		var _g = $bind(this,this.onGamepadAxisMove);
		var gamepad1 = gamepad;
		var tmp = function(axis,value) {
			_g(gamepad1,axis,value);
		};
		gamepad.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onGamepadButtonDown);
		var gamepad2 = gamepad;
		var tmp = function(button) {
			_g1(gamepad2,button);
		};
		gamepad.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onGamepadButtonUp);
		var gamepad3 = gamepad;
		var tmp = function(button) {
			_g2(gamepad3,button);
		};
		gamepad.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onGamepadDisconnect);
		var gamepad4 = gamepad;
		var tmp = function() {
			_g3(gamepad4);
		};
		gamepad.onDisconnect.add(tmp);
	}
	,__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		var _g = $bind(this,this.onJoystickAxisMove);
		var joystick1 = joystick;
		var tmp = function(axis,value) {
			_g(joystick1,axis,value);
		};
		joystick.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onJoystickButtonDown);
		var joystick2 = joystick;
		var tmp = function(button) {
			_g1(joystick2,button);
		};
		joystick.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onJoystickButtonUp);
		var joystick3 = joystick;
		var tmp = function(button) {
			_g2(joystick3,button);
		};
		joystick.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onJoystickDisconnect);
		var joystick4 = joystick;
		var tmp = function() {
			_g3(joystick4);
		};
		joystick.onDisconnect.add(tmp);
		var _g4 = $bind(this,this.onJoystickHatMove);
		var joystick5 = joystick;
		var tmp = function(hat,position) {
			_g4(joystick5,hat,position);
		};
		joystick.onHatMove.add(tmp);
		var _g5 = $bind(this,this.onJoystickTrackballMove);
		var joystick6 = joystick;
		var tmp = function(trackball,x,y) {
			_g5(joystick6,trackball,x,y);
		};
		joystick.onTrackballMove.add(tmp);
	}
	,__onModuleExit: function(code) {
		this.__backend.exit();
	}
	,__onWindowClose: function($window) {
		if(this.__window == $window) {
			this.onWindowClose();
		}
		this.__removeWindow($window);
	}
	,__unregisterLimeModule: function(application) {
		application.onUpdate.remove($bind(this,this.update));
		application.onExit.remove($bind(this,this.__onModuleExit));
		application.onExit.remove($bind(this,this.onModuleExit));
		lime_ui_Gamepad.onConnect.remove($bind(this,this.__onGamepadConnect));
		lime_ui_Joystick.onConnect.remove($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onCancel.remove($bind(this,this.onTouchCancel));
		lime_ui_Touch.onStart.remove($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.remove($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.remove($bind(this,this.onTouchEnd));
		this.onModuleExit(0);
	}
	,get_preloader: function() {
		return this.__preloader;
	}
	,get_window: function() {
		return this.__window;
	}
	,get_windows: function() {
		return this.__windows;
	}
	,__class__: lime_app_Application
});
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = "ApplicationMain";
ApplicationMain.main = function() {
	lime_system_System.__registerEntryPoint("FSP",ApplicationMain.create);
};
ApplicationMain.create = function(config) {
	ManifestResources.init(config);
	var app = new Main();
	app.meta.h["build"] = "24";
	app.meta.h["company"] = "JustFeeshy";
	app.meta.h["file"] = "FSP";
	app.meta.h["name"] = "Feeshy Shaders Playground";
	app.meta.h["packageName"] = "com.feeshy.shaders";
	app.meta.h["version"] = "1.0.0";
	var attributes = { allowHighDPI : true, alwaysOnTop : false, borderless : false, element : null, frameRate : 120, height : 600, hidden : false, maximized : false, minimized : false, parameters : { }, resizable : true, title : "Feeshy Shaders Playground", width : 800, x : null, y : null};
	attributes.context = { antialiasing : 0, background : 0, colorDepth : 32, depth : true, hardware : true, stencil : true, type : null, vsync : false};
	if(app.__window == null) {
		if(config != null) {
			var _g = 0;
			var _g1 = Reflect.fields(config);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(attributes,field)) {
					attributes[field] = Reflect.field(config,field);
				} else if(Object.prototype.hasOwnProperty.call(attributes.context,field)) {
					attributes.context[field] = Reflect.field(config,field);
				}
			}
		}
	}
	app.createWindow(attributes);
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraries;
	while(_g < _g1.length) {
		var library = _g1[_g];
		++_g;
		app.__preloader.addLibrary(library);
	}
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraryNames;
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		app.__preloader.addLibraryName(name);
	}
	app.__preloader.load();
	ApplicationMain.start(app);
};
ApplicationMain.start = function(app) {
	var result = app.exec();
};
var Canvas = function(gl) {
	this.gl = gl;
	var vertices = [-1.0,1.0,1.0,1.0,1.0,-1.0,-1.0,-1.0];
	var texCoords = [0.0,0.0,1.0,0.0,1.0,1.0,0.0,1.0];
	var indices = [0,1,2,0,2,3];
	var elements = null;
	var view = null;
	var buffer = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Float32Array(elements);
	} else if(vertices != null) {
		this1 = new Float32Array(vertices);
	} else if(view != null) {
		this1 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float32Array(buffer,0);
		} else {
			this1 = new Float32Array(buffer,0,len);
		}
	} else {
		this1 = null;
	}
	this.data = this1;
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	lime_graphics_WebGLRenderContext.bufferData(gl,gl.ARRAY_BUFFER,this.data,gl.STATIC_DRAW);
	var elements = null;
	var view = null;
	var buffer = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Float32Array(elements);
	} else if(texCoords != null) {
		this1 = new Float32Array(texCoords);
	} else if(view != null) {
		this1 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float32Array(buffer,0);
		} else {
			this1 = new Float32Array(buffer,0,len);
		}
	} else {
		this1 = null;
	}
	this.data = this1;
	this.texCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.texCoordBuffer);
	lime_graphics_WebGLRenderContext.bufferData(gl,gl.ARRAY_BUFFER,this.data,gl.STATIC_DRAW);
	var elements = null;
	var view = null;
	var buffer = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Int16Array(elements);
	} else if(indices != null) {
		this1 = new Int16Array(indices);
	} else if(view != null) {
		this1 = new Int16Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int16Array(buffer,0);
		} else {
			this1 = new Int16Array(buffer,0,len);
		}
	} else {
		this1 = null;
	}
	this.indices = this1;
	this.indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
	lime_graphics_WebGLRenderContext.bufferData(gl,gl.ELEMENT_ARRAY_BUFFER,this.indices,gl.STATIC_DRAW);
};
$hxClasses["Canvas"] = Canvas;
Canvas.__name__ = "Canvas";
Canvas.prototype = {
	bind: function(shader) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
		this.gl.enableVertexAttribArray(shader.glVertexAttribute);
		this.gl.vertexAttribPointer(shader.glVertexAttribute,2,this.gl.FLOAT,false,8,0);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texCoordBuffer);
		this.gl.enableVertexAttribArray(shader.glTextureAttribute);
		this.gl.vertexAttribPointer(shader.glTextureAttribute,2,this.gl.FLOAT,false,8,0);
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0);
	}
	,__class__: Canvas
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = "EReg";
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = "HxOverrides";
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d["setTime"](0);
		d["setUTCHours"](k[0]);
		d["setUTCMinutes"](k[1]);
		d["setUTCSeconds"](k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw haxe_Exception.thrown("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Main = function() {
	this.start = false;
	lime_app_Application.call(this);
	this.onCreateWindow.add($bind(this,this.__onCreateWindow));
};
$hxClasses["Main"] = Main;
Main.__name__ = "Main";
Main.__super__ = lime_app_Application;
Main.prototype = $extend(lime_app_Application.prototype,{
	__onCreateWindow: function($window) {
		var scaledWidth = $window.__width * $window.__scale | 0;
		var scaledHeight = $window.__height * $window.__scale | 0;
		this.viewport = { x : 0, y : 0, width : scaledWidth, height : scaledHeight};
		this.shader = new Shader($window,$window.context,"","");
		this.canvas = new Canvas($window.context.webgl);
		var _g = $bind(this,this.__onKeyDown);
		var window1 = $window;
		var tmp = function(keyCode,modifier) {
			_g(window1,keyCode,modifier);
		};
		$window.onKeyDown.add(tmp);
	}
	,__onKeyDown: function($window,keyCode,modifier) {
		if(this.__window == null || this.__window != $window) {
			return;
		}
		if(keyCode == 102) {
			this.screenshot.capture();
			this.screenshot.save();
		}
	}
	,onPreloadComplete: function() {
		this.shader.includeVertexShader(lime_utils_Assets.getText("shaders/vertex.glsl"));
		this.shader.includeFragmentShader(lime_utils_Assets.getText("shaders/fragment.glsl"));
		this.shader.includeFragmentShader("uniform vec2 iResolution;\nuniform float iTime;\nuniform sampler2D iTexture;");
		this.shader.compile();
		this.texture = new Texture(this.__window.context.webgl,lime_utils_Assets.getImage("assets/Feeshy.png"));
		this.start = true;
	}
	,render: function(context) {
		if(!this.start) {
			return;
		}
		var gl = context.webgl;
		gl.viewport(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height);
		gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
		gl.enable(gl.BLEND);
		gl.clearColor(0,0,0,1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		this.shader.bind();
		this.canvas.bind(this.shader);
		this.texture.bind(0);
		this.shader.bindTexture(this.texture);
		this.shader.bindUniforms();
	}
	,__class__: Main
});
var ManifestResources = function() { };
$hxClasses["ManifestResources"] = ManifestResources;
ManifestResources.__name__ = "ManifestResources";
ManifestResources.init = function(config) {
	ManifestResources.preloadLibraries = [];
	ManifestResources.preloadLibraryNames = [];
	ManifestResources.rootPath = null;
	if(config != null && Object.prototype.hasOwnProperty.call(config,"rootPath")) {
		ManifestResources.rootPath = Reflect.field(config,"rootPath");
		if(!StringTools.endsWith(ManifestResources.rootPath,"/")) {
			ManifestResources.rootPath += "/";
		}
	}
	if(ManifestResources.rootPath == null) {
		ManifestResources.rootPath = "./";
	}
	var bundle;
	var data = "{\"name\":null,\"assets\":\"aoy4:pathy23:shaders%2Ffragment.glsly4:sizei1471y4:typey4:TEXTy2:idR1y7:preloadtgoR0y21:shaders%2Fvertex.glslR2i167R3R4R5R7R6tgoR0y31:shaders%2Fdebug%2Ffragment.glslR2i114R3R4R5R8R6tgoR0y19:assets%2FFeeshy.pngR2i40804R3y5:IMAGER5R9R6tgh\",\"rootPath\":null,\"version\":2,\"libraryArgs\":[],\"libraryType\":null}";
	var manifest = lime_utils_AssetManifest.parse(data,ManifestResources.rootPath);
	var library = lime_utils_AssetLibrary.fromManifest(manifest);
	lime_utils_Assets.registerLibrary("default",library);
	library = lime_utils_Assets.getLibrary("default");
	if(library != null) {
		ManifestResources.preloadLibraries.push(library);
	} else {
		ManifestResources.preloadLibraryNames.push("default");
	}
};
Math.__name__ = "Math";
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = "Reflect";
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) {
		return false;
	}
	delete(o[field]);
	return true;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice;
		var a1 = arguments;
		var a2 = a.call(a1);
		return f(a2);
	};
};
var Screenshot = function(viewport,gl) {
	this.viewport = viewport;
	this.gl = gl;
};
$hxClasses["Screenshot"] = Screenshot;
Screenshot.__name__ = "Screenshot";
Screenshot.prototype = {
	capture: function() {
		try {
			this.data = new haxe_io_Bytes(new ArrayBuffer(this.viewport.width * this.viewport.height * 3));
		} catch( _g ) {
			lime_utils_Log.error("Error allocating memory for screenshot!",{ fileName : "source/Screenshot.hx", lineNumber : 31, className : "Screenshot", methodName : "capture"});
			return;
		}
		this.gl.pixelStorei(3333,1);
		var this1 = this.gl;
		var x = this.viewport.x;
		var y = this.viewport.y;
		var width = this.viewport.width;
		var height = this.viewport.height;
		var this2 = new lime_utils_BytePointerData(this.data,0);
		var pixels = this2;
		var dstOffset = null;
		if(dstOffset != null) {
			this1.readPixels(x,y,width,height,6407,5121,pixels,dstOffset);
		} else {
			this1.readPixels(x,y,width,height,6407,5121,pixels);
		}
		this.flipY();
	}
	,save: function() {
		var pngData = format_png_Tools.buildRGB(this.viewport.width,this.viewport.height,this.data);
		var bytesOutput = new haxe_io_BytesOutput();
		var writer = new format_png_Writer(bytesOutput);
		writer.write(pngData);
		new lime_ui_FileDialog().save(bytesOutput.getBytes(),"png","screenshot" + ".png",null);
	}
	,flipY: function() {
		var rowLength = this.viewport.width * 3;
		var temp = new haxe_io_Bytes(new ArrayBuffer(rowLength));
		var _g = 0;
		var _g1 = this.viewport.height * 0.5 | 0;
		while(_g < _g1) {
			var y = _g++;
			var top = y * rowLength;
			var bottom = (this.viewport.height - y - 1) * rowLength;
			temp.blit(0,this.data,top,rowLength);
			this.data.blit(top,this.data,bottom,rowLength);
			this.data.blit(bottom,temp,0,rowLength);
		}
	}
	,__class__: Screenshot
};
var Shader = function($window,context,vertex,fragment) {
	this.vertexSource = "";
	this.fragmentSource = "";
	this.window = $window;
	this.gl = context.webgl;
	this.fragmentSource = fragment;
	this.vertexSource = vertex;
};
$hxClasses["Shader"] = Shader;
Shader.__name__ = "Shader";
Shader.prototype = {
	bind: function() {
		this.gl.enableVertexAttribArray(this.glVertexAttribute);
		this.gl.useProgram(this.glProgram);
	}
	,bindTexture: function(texture) {
		this.gl.activeTexture(this.gl.TEXTURE0);
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture.texture);
	}
	,bindUniforms: function() {
		var scaledWidth = this.window.__width * this.window.__scale | 0;
		var scaledHeight = this.window.__height * this.window.__scale | 0;
		this.gl.uniform1i(this.textureLocation,0);
		this.gl.uniform2f(this.resolutionLocation,scaledWidth,scaledHeight);
		this.gl.uniform1f(this.timeLocation,lime_system_System.getTimer() * 0.001);
	}
	,includeFragmentShader: function(source) {
		this.fragmentSource = source + "\n\n" + this.fragmentSource;
		StringTools.trim(this.fragmentSource);
	}
	,includeVertexShader: function(source) {
		this.vertexSource = source + "\n\n" + this.vertexSource;
		StringTools.trim(this.vertexSource);
	}
	,compile: function() {
		var vertexShader = this.createShader(this.gl,this.gl.VERTEX_SHADER,this.vertexSource);
		var fragmentShader = this.createShader(this.gl,this.gl.FRAGMENT_SHADER,Shader.webFragment + this.fragmentSource);
		this.glProgram = this.gl.createProgram();
		this.gl.attachShader(this.glProgram,vertexShader);
		this.gl.attachShader(this.glProgram,fragmentShader);
		this.gl.linkProgram(this.glProgram);
		if(!this.gl.getProgramParameter(this.glProgram,this.gl.LINK_STATUS)) {
			lime_utils_Log.error("An error occurred linking the shaders: " + this.gl.getProgramInfoLog(this.glProgram),{ fileName : "source/Shader.hx", lineNumber : 88, className : "Shader", methodName : "compile"});
		}
		this.glVertexAttribute = this.gl.getAttribLocation(this.glProgram,"a_position");
		this.glTextureAttribute = this.gl.getAttribLocation(this.glProgram,"a_texCoord");
		this.resolutionLocation = this.gl.getUniformLocation(this.glProgram,"iResolution");
		this.timeLocation = this.gl.getUniformLocation(this.glProgram,"iTime");
		this.textureLocation = this.gl.getUniformLocation(this.glProgram,"iTexture");
	}
	,createShader: function(gl,type,source) {
		var shader = gl.createShader(type);
		gl.shaderSource(shader,source);
		gl.compileShader(shader);
		if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
			lime_utils_Log.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader),{ fileName : "source/Shader.hx", lineNumber : 105, className : "Shader", methodName : "createShader"});
		}
		return shader;
	}
	,__class__: Shader
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = "Std";
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var _$String_String_$Impl_$ = function() { };
$hxClasses["_String.String_Impl_"] = _$String_String_$Impl_$;
_$String_String_$Impl_$.__name__ = "_String.String_Impl_";
_$String_String_$Impl_$.fromCharCode = function(code) {
	return String.fromCodePoint(code);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = "StringBuf";
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = "StringTools";
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Texture = function(gl,image) {
	this.gl = gl;
	this.width = image.width;
	this.height = image.height;
	this.texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D,this.texture);
	gl.texParameteri(3553,10242,33071);
	gl.texParameteri(3553,10243,33071);
	gl.texParameteri(3553,10241,9729);
	gl.texParameteri(3553,10240,9729);
	lime_graphics_WebGLRenderContext.texImage2D(gl,gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image.get_src());
	this.image = image;
};
$hxClasses["Texture"] = Texture;
Texture.__name__ = "Texture";
Texture.prototype = {
	bind: function(unit) {
		this.gl.activeTexture(33984 + unit);
		this.gl.bindTexture(3553,this.texture);
	}
	,__class__: Texture
};
var ValueType = $hxEnums["ValueType"] = { __ename__:"ValueType",__constructs__:null
	,TNull: {_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:$estr}
	,TInt: {_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:$estr}
	,TFloat: {_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:$estr}
	,TBool: {_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:$estr}
	,TObject: {_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:$estr}
	,TFunction: {_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:$estr}
	,TClass: ($_=function(c) { return {_hx_index:6,c:c,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TClass",$_.__params__ = ["c"],$_)
	,TEnum: ($_=function(e) { return {_hx_index:7,e:e,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TEnum",$_.__params__ = ["e"],$_)
	,TUnknown: {_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:$estr}
};
ValueType.__constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TClass,ValueType.TEnum,ValueType.TUnknown];
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = "Type";
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) {
		throw haxe_Exception.thrown("No such constructor " + constr);
	}
	if(Reflect.isFunction(f)) {
		if(params == null) {
			throw haxe_Exception.thrown("Constructor " + constr + " need parameters");
		}
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) {
		throw haxe_Exception.thrown("Constructor " + constr + " does not need parameters");
	}
	return f;
};
Type.typeof = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.TObject;
		}
		return ValueType.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.TInt;
		}
		return ValueType.TFloat;
	case "object":
		if(v == null) {
			return ValueType.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.TEnum($hxEnums[e]);
		}
		var c = js_Boot.getClass(v);
		if(c != null) {
			return ValueType.TClass(c);
		}
		return ValueType.TObject;
	case "string":
		return ValueType.TClass(String);
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var params = enm.__constructs__[e._hx_index].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var UInt = {};
UInt.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) {
		return aNeg;
	} else {
		return a > b;
	}
};
UInt.toFloat = function(this1) {
	var int = this1;
	if(int < 0) {
		return 4294967296.0 + int;
	} else {
		return int + 0.0;
	}
};
var format_jpg_Writer = function(out) {
	this.YTable = [];
	this.UVTable = [];
	this.fdtbl_Y = [];
	this.fdtbl_UV = [];
	var _g = 0;
	while(_g < 64) {
		var i = _g++;
		this.YTable.push(0);
		this.UVTable.push(0);
		this.fdtbl_Y.push(0.0);
		this.fdtbl_UV.push(0.0);
	}
	this.bitcode = new haxe_ds_IntMap();
	this.category = new haxe_ds_IntMap();
	this.byteout = out;
	this.bytenew = 0;
	this.bytepos = 7;
	this.YDC_HT = new haxe_ds_IntMap();
	this.UVDC_HT = new haxe_ds_IntMap();
	this.YAC_HT = new haxe_ds_IntMap();
	this.UVAC_HT = new haxe_ds_IntMap();
	this.YDU = [];
	this.UDU = [];
	this.VDU = [];
	this.DU = [];
	var _g = 0;
	while(_g < 64) {
		var i = _g++;
		this.YDU.push(0.0);
		this.UDU.push(0.0);
		this.VDU.push(0.0);
		this.DU.push(0.0);
	}
	this.initZigZag();
	this.initLuminance();
	this.initChrominance();
	this.initHuffmanTbl();
	this.initCategoryNumber();
};
$hxClasses["format.jpg.Writer"] = format_jpg_Writer;
format_jpg_Writer.__name__ = "format.jpg.Writer";
format_jpg_Writer.prototype = {
	initZigZag: function() {
		this.ZigZag = [0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];
	}
	,initQuantTables: function(sf) {
		var YQT = [16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];
		var _g = 0;
		while(_g < 64) {
			var i = _g++;
			var t = Math.floor((YQT[i] * sf + 50) / 100);
			if(t < 1) {
				t = 1;
			} else if(t > 255) {
				t = 255;
			}
			this.YTable[this.ZigZag[i]] = t;
		}
		var UVQT = [17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99];
		var _g = 0;
		while(_g < 64) {
			var j = _g++;
			var u = Math.floor((UVQT[j] * sf + 50) / 100);
			if(u < 1) {
				u = 1;
			} else if(u > 255) {
				u = 255;
			}
			this.UVTable[this.ZigZag[j]] = u;
		}
		var aasf = [1.0,1.387039845,1.306562965,1.175875602,1.0,0.785694958,0.541196100,0.275899379];
		var k = 0;
		var _g = 0;
		while(_g < 8) {
			var row = _g++;
			var _g1 = 0;
			while(_g1 < 8) {
				var col = _g1++;
				this.fdtbl_Y[k] = 1.0 / (this.YTable[this.ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
				this.fdtbl_UV[k] = 1.0 / (this.UVTable[this.ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
				++k;
			}
		}
	}
	,initLuminance: function() {
		this.std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
		this.std_dc_luminance_values = this.strIntsToBytes("0,1,2,3,4,5,6,7,8,9,10,11");
		this.std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125];
		this.std_ac_luminance_values = this.strIntsToBytes("0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12," + "0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07," + "0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08," + "0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0," + "0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16," + "0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28," + "0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39," + "0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49," + "0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59," + "0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69," + "0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79," + "0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89," + "0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98," + "0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7," + "0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6," + "0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5," + "0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4," + "0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2," + "0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea," + "0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8," + "0xf9,0xfa");
	}
	,strIntsToBytes: function(s) {
		var len = s.length;
		var b = new haxe_io_BytesBuffer();
		var val = 0;
		var i = 0;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var j = _g++;
			if(s.charAt(j) == ",") {
				val = Std.parseInt(HxOverrides.substr(s,i,j - i));
				b.addByte(val);
				i = j + 1;
			}
		}
		if(i < len) {
			val = Std.parseInt(HxOverrides.substr(s,i,null));
			b.addByte(val);
		}
		return b.getBytes();
	}
	,initChrominance: function() {
		this.std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
		this.std_dc_chrominance_values = this.strIntsToBytes("0,1,2,3,4,5,6,7,8,9,10,11");
		this.std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119];
		this.std_ac_chrominance_values = this.strIntsToBytes("0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21," + "0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71," + "0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91," + "0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0," + "0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34," + "0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26," + "0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38," + "0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48," + "0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58," + "0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68," + "0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78," + "0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87," + "0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96," + "0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5," + "0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4," + "0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3," + "0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2," + "0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda," + "0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9," + "0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8," + "0xf9,0xfa");
	}
	,initHuffmanTbl: function() {
		this.YDC_HT = this.computeHuffmanTbl(this.std_dc_luminance_nrcodes,this.std_dc_luminance_values);
		this.UVDC_HT = this.computeHuffmanTbl(this.std_dc_chrominance_nrcodes,this.std_dc_chrominance_values);
		this.YAC_HT = this.computeHuffmanTbl(this.std_ac_luminance_nrcodes,this.std_ac_luminance_values);
		this.UVAC_HT = this.computeHuffmanTbl(this.std_ac_chrominance_nrcodes,this.std_ac_chrominance_values);
	}
	,computeHuffmanTbl: function(nrcodes,std_table) {
		var codevalue = 0;
		var pos_in_table = 0;
		var HT = new haxe_ds_IntMap();
		var _g = 1;
		while(_g < 17) {
			var k = _g++;
			var end = nrcodes[k];
			var _g1 = 0;
			var _g2 = end;
			while(_g1 < _g2) {
				var j = _g1++;
				var idx = std_table.b[pos_in_table];
				var value = new format_jpg__$Writer_BitString(k,codevalue);
				HT.h[idx] = value;
				++pos_in_table;
				++codevalue;
			}
			codevalue *= 2;
		}
		return HT;
	}
	,initCategoryNumber: function() {
		var nrlower = 1;
		var nrupper = 2;
		var idx;
		var _g = 1;
		while(_g < 16) {
			var cat = _g++;
			var _g1 = nrlower;
			var _g2 = nrupper;
			while(_g1 < _g2) {
				var nr = _g1++;
				idx = 32767 + nr;
				this.category.h[idx] = cat;
				var this1 = this.bitcode;
				var value = new format_jpg__$Writer_BitString(cat,nr);
				this1.h[idx] = value;
			}
			var nrneg = -(nrupper - 1);
			while(nrneg <= -nrlower) {
				idx = 32767 + nrneg;
				this.category.h[idx] = cat;
				var this2 = this.bitcode;
				var value1 = new format_jpg__$Writer_BitString(cat,nrupper - 1 + nrneg);
				this2.h[idx] = value1;
				++nrneg;
			}
			nrlower <<= 1;
			nrupper <<= 1;
		}
	}
	,writeBits: function(bs) {
		var value = bs.val;
		var posval = bs.len - 1;
		while(posval >= 0) {
			if((value & 1 << posval) != 0) {
				this.bytenew |= 1 << this.bytepos;
			}
			--posval;
			this.bytepos--;
			if(this.bytepos < 0) {
				if(this.bytenew == 255) {
					this.byteout.writeByte(255);
					this.byteout.writeByte(0);
				} else {
					this.byteout.writeByte(this.bytenew);
				}
				this.bytepos = 7;
				this.bytenew = 0;
			}
		}
	}
	,writeWord: function(val) {
		this.byteout.writeByte(val >> 8 & 255);
		this.byteout.writeByte(val & 255);
	}
	,fDCTQuant: function(data,fdtbl) {
		var dataOff = 0;
		var _g = 0;
		while(_g < 8) {
			var i = _g++;
			var tmp0 = data[dataOff] + data[dataOff + 7];
			var tmp7 = data[dataOff] - data[dataOff + 7];
			var tmp1 = data[dataOff + 1] + data[dataOff + 6];
			var tmp6 = data[dataOff + 1] - data[dataOff + 6];
			var tmp2 = data[dataOff + 2] + data[dataOff + 5];
			var tmp5 = data[dataOff + 2] - data[dataOff + 5];
			var tmp3 = data[dataOff + 3] + data[dataOff + 4];
			var tmp4 = data[dataOff + 3] - data[dataOff + 4];
			var tmp10 = tmp0 + tmp3;
			var tmp13 = tmp0 - tmp3;
			var tmp11 = tmp1 + tmp2;
			var tmp12 = tmp1 - tmp2;
			data[dataOff] = tmp10 + tmp11;
			data[dataOff + 4] = tmp10 - tmp11;
			var z1 = (tmp12 + tmp13) * 0.707106781;
			data[dataOff + 2] = tmp13 + z1;
			data[dataOff + 6] = tmp13 - z1;
			tmp10 = tmp4 + tmp5;
			tmp11 = tmp5 + tmp6;
			tmp12 = tmp6 + tmp7;
			var z5 = (tmp10 - tmp12) * 0.382683433;
			var z2 = 0.541196100 * tmp10 + z5;
			var z4 = 1.306562965 * tmp12 + z5;
			var z3 = tmp11 * 0.707106781;
			var z11 = tmp7 + z3;
			var z13 = tmp7 - z3;
			data[dataOff + 5] = z13 + z2;
			data[dataOff + 3] = z13 - z2;
			data[dataOff + 1] = z11 + z4;
			data[dataOff + 7] = z11 - z4;
			dataOff += 8;
		}
		dataOff = 0;
		var _g = 0;
		while(_g < 8) {
			var j = _g++;
			var tmp0p2 = data[dataOff] + data[dataOff + 56];
			var tmp7p2 = data[dataOff] - data[dataOff + 56];
			var tmp1p2 = data[dataOff + 8] + data[dataOff + 48];
			var tmp6p2 = data[dataOff + 8] - data[dataOff + 48];
			var tmp2p2 = data[dataOff + 16] + data[dataOff + 40];
			var tmp5p2 = data[dataOff + 16] - data[dataOff + 40];
			var tmp3p2 = data[dataOff + 24] + data[dataOff + 32];
			var tmp4p2 = data[dataOff + 24] - data[dataOff + 32];
			var tmp10p2 = tmp0p2 + tmp3p2;
			var tmp13p2 = tmp0p2 - tmp3p2;
			var tmp11p2 = tmp1p2 + tmp2p2;
			var tmp12p2 = tmp1p2 - tmp2p2;
			data[dataOff] = tmp10p2 + tmp11p2;
			data[dataOff + 32] = tmp10p2 - tmp11p2;
			var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
			data[dataOff + 16] = tmp13p2 + z1p2;
			data[dataOff + 48] = tmp13p2 - z1p2;
			tmp10p2 = tmp4p2 + tmp5p2;
			tmp11p2 = tmp5p2 + tmp6p2;
			tmp12p2 = tmp6p2 + tmp7p2;
			var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
			var z2p2 = 0.541196100 * tmp10p2 + z5p2;
			var z4p2 = 1.306562965 * tmp12p2 + z5p2;
			var z3p2 = tmp11p2 * 0.707106781;
			var z11p2 = tmp7p2 + z3p2;
			var z13p2 = tmp7p2 - z3p2;
			data[dataOff + 40] = z13p2 + z2p2;
			data[dataOff + 24] = z13p2 - z2p2;
			data[dataOff + 8] = z11p2 + z4p2;
			data[dataOff + 56] = z11p2 - z4p2;
			++dataOff;
		}
		var _g = 0;
		while(_g < 64) {
			var k = _g++;
			data[k] = Math.round(data[k] * fdtbl[k]);
		}
		return data;
	}
	,b: function(v) {
		this.byteout.writeByte(v);
	}
	,writeAPP0: function() {
		this.byteout.writeByte(255);
		this.byteout.writeByte(224);
		this.byteout.writeByte(0);
		this.byteout.writeByte(16);
		this.byteout.writeByte(74);
		this.byteout.writeByte(70);
		this.byteout.writeByte(73);
		this.byteout.writeByte(70);
		this.byteout.writeByte(0);
		this.byteout.writeByte(1);
		this.byteout.writeByte(1);
		this.byteout.writeByte(0);
		this.byteout.writeByte(0);
		this.byteout.writeByte(1);
		this.byteout.writeByte(0);
		this.byteout.writeByte(1);
		this.byteout.writeByte(0);
		this.byteout.writeByte(0);
	}
	,writeDQT: function() {
		this.byteout.writeByte(255);
		this.byteout.writeByte(219);
		this.byteout.writeByte(0);
		this.byteout.writeByte(132);
		this.byteout.writeByte(0);
		var _g = 0;
		while(_g < 64) {
			var j = _g++;
			this.byteout.writeByte(this.YTable[j]);
		}
		this.byteout.writeByte(1);
		var _g = 0;
		while(_g < 64) {
			var j = _g++;
			this.byteout.writeByte(this.UVTable[j]);
		}
	}
	,writeSOF0: function(width,height) {
		this.byteout.writeByte(255);
		this.byteout.writeByte(192);
		this.byteout.writeByte(0);
		this.byteout.writeByte(17);
		this.byteout.writeByte(8);
		this.byteout.writeByte(height >> 8 & 255);
		this.byteout.writeByte(height & 255);
		this.byteout.writeByte(width >> 8 & 255);
		this.byteout.writeByte(width & 255);
		this.byteout.writeByte(3);
		this.byteout.writeByte(1);
		this.byteout.writeByte(17);
		this.byteout.writeByte(0);
		this.byteout.writeByte(2);
		this.byteout.writeByte(17);
		this.byteout.writeByte(1);
		this.byteout.writeByte(3);
		this.byteout.writeByte(17);
		this.byteout.writeByte(1);
	}
	,writeDHT: function() {
		this.byteout.writeByte(255);
		this.byteout.writeByte(196);
		this.byteout.writeByte(1);
		this.byteout.writeByte(162);
		this.byteout.writeByte(0);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[1]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[2]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[3]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[4]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[5]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[6]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[7]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[8]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[9]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[10]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[11]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[12]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[13]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[14]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[15]);
		this.byteout.writeByte(this.std_dc_luminance_nrcodes[16]);
		this.byteout.write(this.std_dc_luminance_values);
		this.byteout.writeByte(16);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[1]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[2]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[3]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[4]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[5]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[6]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[7]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[8]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[9]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[10]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[11]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[12]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[13]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[14]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[15]);
		this.byteout.writeByte(this.std_ac_luminance_nrcodes[16]);
		this.byteout.write(this.std_ac_luminance_values);
		this.byteout.writeByte(1);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[1]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[2]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[3]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[4]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[5]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[6]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[7]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[8]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[9]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[10]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[11]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[12]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[13]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[14]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[15]);
		this.byteout.writeByte(this.std_dc_chrominance_nrcodes[16]);
		this.byteout.write(this.std_dc_chrominance_values);
		this.byteout.writeByte(17);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[1]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[2]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[3]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[4]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[5]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[6]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[7]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[8]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[9]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[10]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[11]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[12]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[13]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[14]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[15]);
		this.byteout.writeByte(this.std_ac_chrominance_nrcodes[16]);
		this.byteout.write(this.std_ac_chrominance_values);
	}
	,writeSOS: function() {
		this.byteout.writeByte(255);
		this.byteout.writeByte(218);
		this.byteout.writeByte(0);
		this.byteout.writeByte(12);
		this.byteout.writeByte(3);
		this.byteout.writeByte(1);
		this.byteout.writeByte(0);
		this.byteout.writeByte(2);
		this.byteout.writeByte(17);
		this.byteout.writeByte(3);
		this.byteout.writeByte(17);
		this.byteout.writeByte(0);
		this.byteout.writeByte(63);
		this.byteout.writeByte(0);
	}
	,processDU: function(CDU,fdtbl,DC,HTDC,HTAC) {
		var EOB = HTAC.h[0];
		var M16zeroes = HTAC.h[240];
		var DU_DCT = this.fDCTQuant(CDU,fdtbl);
		var _g = 0;
		while(_g < 64) {
			var i = _g++;
			this.DU[this.ZigZag[i]] = DU_DCT[i];
		}
		var idx;
		var Diff = this.DU[0] - DC | 0;
		DC = this.DU[0];
		if(Diff == 0) {
			this.writeBits(HTDC.h[0]);
		} else {
			idx = 32767 + Diff;
			this.writeBits(HTDC.h[this.category.h[idx]]);
			this.writeBits(this.bitcode.h[idx]);
		}
		var end0pos = 63;
		while(end0pos > 0 && this.DU[end0pos] == 0.0) --end0pos;
		if(end0pos == 0) {
			this.writeBits(EOB);
			return DC;
		}
		var i = 1;
		while(i <= end0pos) {
			var startpos = i;
			while(this.DU[i] == 0.0 && i <= end0pos) ++i;
			var nrzeroes = i - startpos;
			if(nrzeroes >= 16) {
				var _g = 0;
				var _g1 = nrzeroes >> 4;
				while(_g < _g1) {
					var nrmarker = _g++;
					this.writeBits(M16zeroes);
				}
				nrzeroes &= 15;
			}
			idx = 32767 + (this.DU[i] | 0);
			this.writeBits(HTAC.h[nrzeroes * 16 + this.category.h[idx]]);
			this.writeBits(this.bitcode.h[idx]);
			++i;
		}
		if(end0pos != 63) {
			this.writeBits(EOB);
		}
		return DC;
	}
	,RGB2YUV: function(img,width,xpos,ypos) {
		var pos = 0;
		var _g = 0;
		while(_g < 8) {
			var y = _g++;
			var offset = (y + ypos) * width + xpos << 2;
			var _g1 = 0;
			while(_g1 < 8) {
				var x = _g1++;
				++offset;
				var R = img.b[offset++];
				var G = img.b[offset++];
				var B = img.b[offset++];
				this.YDU[pos] = 0.29900 * R + 0.58700 * G + 0.11400 * B - 128;
				this.UDU[pos] = -0.16874 * R + -0.33126 * G + 0.50000 * B;
				this.VDU[pos] = 0.50000 * R + -0.41869 * G + -0.08131 * B;
				++pos;
			}
		}
	}
	,write: function(image) {
		var quality = image.quality;
		if(quality <= 0) {
			quality = 1;
		}
		if(quality > 100) {
			quality = 100;
		}
		var sf = quality < 50 ? 5000 / quality | 0 : 200 - quality * 2 | 0;
		this.initQuantTables(sf);
		this.bytenew = 0;
		this.bytepos = 7;
		var width = image.width;
		var height = image.height;
		this.writeWord(65496);
		this.writeAPP0();
		this.writeDQT();
		this.writeSOF0(width,height);
		this.writeDHT();
		this.writeSOS();
		var DCY = 0.0;
		var DCU = 0.0;
		var DCV = 0.0;
		this.bytenew = 0;
		this.bytepos = 7;
		var ypos = 0;
		while(ypos < height) {
			var xpos = 0;
			while(xpos < width) {
				this.RGB2YUV(image.pixels,width,xpos,ypos);
				DCY = this.processDU(this.YDU,this.fdtbl_Y,DCY,this.YDC_HT,this.YAC_HT);
				DCU = this.processDU(this.UDU,this.fdtbl_UV,DCU,this.UVDC_HT,this.UVAC_HT);
				DCV = this.processDU(this.VDU,this.fdtbl_UV,DCV,this.UVDC_HT,this.UVAC_HT);
				xpos += 8;
			}
			ypos += 8;
		}
		if(this.bytepos >= 0) {
			var fillbits = new format_jpg__$Writer_BitString(this.bytepos + 1,(1 << this.bytepos + 1) - 1);
			this.writeBits(fillbits);
		}
		this.writeWord(65497);
	}
	,__class__: format_jpg_Writer
};
var format_jpg__$Writer_BitString = function(l,v) {
	this.len = l;
	this.val = v;
};
$hxClasses["format.jpg._Writer.BitString"] = format_jpg__$Writer_BitString;
format_jpg__$Writer_BitString.__name__ = "format.jpg._Writer.BitString";
format_jpg__$Writer_BitString.prototype = {
	__class__: format_jpg__$Writer_BitString
};
var format_png_Color = $hxEnums["format.png.Color"] = { __ename__:"format.png.Color",__constructs__:null
	,ColGrey: ($_=function(alpha) { return {_hx_index:0,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_._hx_name="ColGrey",$_.__params__ = ["alpha"],$_)
	,ColTrue: ($_=function(alpha) { return {_hx_index:1,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_._hx_name="ColTrue",$_.__params__ = ["alpha"],$_)
	,ColIndexed: {_hx_name:"ColIndexed",_hx_index:2,__enum__:"format.png.Color",toString:$estr}
};
format_png_Color.__constructs__ = [format_png_Color.ColGrey,format_png_Color.ColTrue,format_png_Color.ColIndexed];
var format_png_Chunk = $hxEnums["format.png.Chunk"] = { __ename__:"format.png.Chunk",__constructs__:null
	,CEnd: {_hx_name:"CEnd",_hx_index:0,__enum__:"format.png.Chunk",toString:$estr}
	,CHeader: ($_=function(h) { return {_hx_index:1,h:h,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CHeader",$_.__params__ = ["h"],$_)
	,CData: ($_=function(b) { return {_hx_index:2,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CData",$_.__params__ = ["b"],$_)
	,CPalette: ($_=function(b) { return {_hx_index:3,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CPalette",$_.__params__ = ["b"],$_)
	,CUnknown: ($_=function(id,data) { return {_hx_index:4,id:id,data:data,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CUnknown",$_.__params__ = ["id","data"],$_)
};
format_png_Chunk.__constructs__ = [format_png_Chunk.CEnd,format_png_Chunk.CHeader,format_png_Chunk.CData,format_png_Chunk.CPalette,format_png_Chunk.CUnknown];
var format_png_Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
};
$hxClasses["format.png.Reader"] = format_png_Reader;
format_png_Reader.__name__ = "format.png.Reader";
format_png_Reader.prototype = {
	read: function() {
		var b = 137;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 80;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 78;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 71;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 13;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 10;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 26;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 10;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var l = new haxe_ds_List();
		while(true) {
			var c = this.readChunk();
			l.add(c);
			if(c == format_png_Chunk.CEnd) {
				break;
			}
		}
		return l;
	}
	,readHeader: function(i) {
		i.set_bigEndian(true);
		var width = i.readInt32();
		var height = i.readInt32();
		var colbits = i.readByte();
		var color = i.readByte();
		var color1;
		switch(color) {
		case 0:
			color1 = format_png_Color.ColGrey(false);
			break;
		case 2:
			color1 = format_png_Color.ColTrue(false);
			break;
		case 3:
			color1 = format_png_Color.ColIndexed;
			break;
		case 4:
			color1 = format_png_Color.ColGrey(true);
			break;
		case 6:
			color1 = format_png_Color.ColTrue(true);
			break;
		default:
			throw haxe_Exception.thrown("Unknown color model " + color + ":" + colbits);
		}
		var compress = i.readByte();
		var filter = i.readByte();
		if(compress != 0 || filter != 0) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var interlace = i.readByte();
		if(interlace != 0 && interlace != 1) {
			throw haxe_Exception.thrown("Invalid header");
		}
		return { width : width, height : height, colbits : colbits, color : color1, interlaced : interlace == 1};
	}
	,readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c_crc = -1;
			var tmp = (c_crc ^ HxOverrides.cca(id,0)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,1)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,2)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,3)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var b = data.b.bufferValue;
			var _g = 0;
			var _g1 = data.length;
			while(_g < _g1) {
				var i = _g++;
				var tmp = (c_crc ^ b.bytes[i]) & 255;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				c_crc = c_crc >>> 8 ^ tmp;
			}
			if((c_crc ^ -1) != crc) {
				throw haxe_Exception.thrown("CRC check failure");
			}
		}
		switch(id) {
		case "IDAT":
			return format_png_Chunk.CData(data);
		case "IEND":
			return format_png_Chunk.CEnd;
		case "IHDR":
			return format_png_Chunk.CHeader(this.readHeader(new haxe_io_BytesInput(data)));
		case "PLTE":
			return format_png_Chunk.CPalette(data);
		default:
			return format_png_Chunk.CUnknown(id,data);
		}
	}
	,__class__: format_png_Reader
};
var format_png_Tools = function() { };
$hxClasses["format.png.Tools"] = format_png_Tools;
format_png_Tools.__name__ = "format.png.Tools";
format_png_Tools.getHeader = function(d) {
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 1) {
			var h = c.h;
			return h;
		}
	}
	throw haxe_Exception.thrown("Header not found");
};
format_png_Tools.getPalette = function(d) {
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 3) {
			var b = c.b;
			return b;
		}
	}
	return null;
};
format_png_Tools.filter = function(data,x,y,stride,prev,p,numChannels) {
	if(numChannels == null) {
		numChannels = 4;
	}
	var b = y == 0 ? 0 : data.b[p - stride];
	var c = x == 0 || y == 0 ? 0 : data.b[p - stride - numChannels];
	var k = prev + b - c;
	var pa = k - prev;
	if(pa < 0) {
		pa = -pa;
	}
	var pb = k - b;
	if(pb < 0) {
		pb = -pb;
	}
	var pc = k - c;
	if(pc < 0) {
		pc = -pc;
	}
	if(pa <= pb && pa <= pc) {
		return prev;
	} else if(pb <= pc) {
		return b;
	} else {
		return c;
	}
};
format_png_Tools.reverseBytes = function(b) {
	var p = 0;
	var _g = 0;
	var _g1 = b.length >> 2;
	while(_g < _g1) {
		var i = _g++;
		var b1 = b.b[p];
		var g = b.b[p + 1];
		var r = b.b[p + 2];
		var a = b.b[p + 3];
		b.b[p++] = a & 255;
		b.b[p++] = r & 255;
		b.b[p++] = g & 255;
		b.b[p++] = b1 & 255;
	}
};
format_png_Tools.extractGrey = function(d) {
	var h = format_png_Tools.getHeader(d);
	var grey = new haxe_io_Bytes(new ArrayBuffer(h.width * h.height));
	var data = null;
	var fullData = null;
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 2) {
			var b = c.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new haxe_io_BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw haxe_Exception.thrown("Data not found");
	}
	data = format_tools_Inflate.run(data);
	var r = 0;
	var w = 0;
	var _g = h.color;
	if(_g._hx_index == 0) {
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var rinc = alpha ? 2 : 1;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				var _g2 = 0;
				var _g3 = width;
				while(_g2 < _g3) {
					var x = _g2++;
					var v = data.b[r];
					r += rinc;
					grey.b[w++] = v & 255;
				}
				break;
			case 1:
				var cv = 0;
				var _g4 = 0;
				var _g5 = width;
				while(_g4 < _g5) {
					var x1 = _g4++;
					cv += data.b[r];
					r += rinc;
					grey.b[w++] = cv & 255;
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width;
				var _g6 = 0;
				var _g7 = width;
				while(_g6 < _g7) {
					var x2 = _g6++;
					var v1 = data.b[r] + grey.b[w - stride];
					r += rinc;
					grey.b[w++] = v1 & 255;
				}
				break;
			case 3:
				var cv1 = 0;
				var stride1 = y == 0 ? 0 : width;
				var _g8 = 0;
				var _g9 = width;
				while(_g8 < _g9) {
					var x3 = _g8++;
					cv1 = data.b[r] + (cv1 + grey.b[w - stride1] >> 1) & 255;
					r += rinc;
					grey.b[w++] = cv1 & 255;
				}
				break;
			case 4:
				var stride2 = width;
				var cv2 = 0;
				var _g10 = 0;
				var _g11 = width;
				while(_g10 < _g11) {
					var x4 = _g10++;
					var numChannels = 1;
					if(numChannels == null) {
						numChannels = 4;
					}
					var b = y == 0 ? 0 : grey.b[w - stride2];
					var c = x4 == 0 || y == 0 ? 0 : grey.b[w - stride2 - numChannels];
					var k = cv2 + b - c;
					var pa = k - cv2;
					if(pa < 0) {
						pa = -pa;
					}
					var pb = k - b;
					if(pb < 0) {
						pb = -pb;
					}
					var pc = k - c;
					if(pc < 0) {
						pc = -pc;
					}
					cv2 = (pa <= pb && pa <= pc ? cv2 : pb <= pc ? b : c) + data.b[r] & 255;
					r += rinc;
					grey.b[w++] = cv2 & 255;
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
		}
	} else {
		throw haxe_Exception.thrown("Unsupported color mode");
	}
	return grey;
};
format_png_Tools.extract32 = function(d,bytes,flipY) {
	var h = format_png_Tools.getHeader(d);
	var bgra = bytes == null ? new haxe_io_Bytes(new ArrayBuffer(h.width * h.height * 4)) : bytes;
	var data = null;
	var fullData = null;
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 2) {
			var b = c.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new haxe_io_BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw haxe_Exception.thrown("Data not found");
	}
	data = format_tools_Inflate.run(data);
	var r = 0;
	var w = 0;
	var lineDelta = 0;
	if(flipY) {
		lineDelta = -h.width * 8;
		w = (h.height - 1) * (h.width * 4);
	}
	var flipY1 = flipY ? -1 : 1;
	var _g = h.color;
	switch(_g._hx_index) {
	case 0:
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var alphvaIdx = -1;
		if(!alpha) {
			var _g1_head = d.h;
			while(_g1_head != null) {
				var val = _g1_head.item;
				_g1_head = _g1_head.next;
				var t = val;
				if(t._hx_index == 4) {
					if(t.id == "tRNS") {
						var data1 = t.data;
						if(data1.length >= 2) {
							alphvaIdx = data1.b[1];
						}
						break;
					}
				}
			}
		}
		var _g1 = 0;
		var _g2 = h.height;
		while(_g1 < _g2) {
			var y = _g1++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				if(alpha) {
					var _g3 = 0;
					var _g4 = width;
					while(_g3 < _g4) {
						var x = _g3++;
						var v = data.b[r++];
						bgra.b[w++] = v & 255;
						bgra.b[w++] = v & 255;
						bgra.b[w++] = v & 255;
						bgra.b[w++] = data.b[r++] & 255;
					}
				} else {
					var _g5 = 0;
					var _g6 = width;
					while(_g5 < _g6) {
						var x1 = _g5++;
						var v1 = data.b[r++];
						bgra.b[w++] = v1 & 255;
						bgra.b[w++] = v1 & 255;
						bgra.b[w++] = v1 & 255;
						bgra.b[w++] = (v1 == alphvaIdx ? 0 : 255) & 255;
					}
				}
				break;
			case 1:
				var cv = 0;
				var ca = 0;
				if(alpha) {
					var _g7 = 0;
					var _g8 = width;
					while(_g7 < _g8) {
						var x2 = _g7++;
						cv += data.b[r++];
						bgra.b[w++] = cv & 255;
						bgra.b[w++] = cv & 255;
						bgra.b[w++] = cv & 255;
						ca += data.b[r++];
						bgra.b[w++] = ca & 255;
					}
				} else {
					var _g9 = 0;
					var _g10 = width;
					while(_g9 < _g10) {
						var x3 = _g9++;
						cv += data.b[r++];
						bgra.b[w++] = cv & 255;
						bgra.b[w++] = cv & 255;
						bgra.b[w++] = cv & 255;
						bgra.b[w++] = (cv == alphvaIdx ? 0 : 255) & 255;
					}
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g11 = 0;
					var _g12 = width;
					while(_g11 < _g12) {
						var x4 = _g11++;
						var v2 = data.b[r++] + bgra.b[w - stride];
						bgra.b[w++] = v2 & 255;
						bgra.b[w++] = v2 & 255;
						bgra.b[w++] = v2 & 255;
						bgra.b[w++] = data.b[r++] + bgra.b[w - stride] & 255;
					}
				} else {
					var _g13 = 0;
					var _g14 = width;
					while(_g13 < _g14) {
						var x5 = _g13++;
						var v3 = data.b[r++] + bgra.b[w - stride];
						bgra.b[w++] = v3 & 255;
						bgra.b[w++] = v3 & 255;
						bgra.b[w++] = v3 & 255;
						bgra.b[w++] = (v3 == alphvaIdx ? 0 : 255) & 255;
					}
				}
				break;
			case 3:
				var cv1 = 0;
				var ca1 = 0;
				var stride1 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g15 = 0;
					var _g16 = width;
					while(_g15 < _g16) {
						var x6 = _g15++;
						cv1 = data.b[r++] + (cv1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cv1 & 255;
						bgra.b[w++] = cv1 & 255;
						bgra.b[w++] = cv1 & 255;
						ca1 = data.b[r++] + (ca1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = ca1 & 255;
					}
				} else {
					var _g17 = 0;
					var _g18 = width;
					while(_g17 < _g18) {
						var x7 = _g17++;
						cv1 = data.b[r++] + (cv1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cv1 & 255;
						bgra.b[w++] = cv1 & 255;
						bgra.b[w++] = cv1 & 255;
						bgra.b[w++] = (cv1 == alphvaIdx ? 0 : 255) & 255;
					}
				}
				break;
			case 4:
				var stride2 = width * 4 * flipY1;
				var cv2 = 0;
				var ca2 = 0;
				if(alpha) {
					var _g19 = 0;
					var _g20 = width;
					while(_g19 < _g20) {
						var x8 = _g19++;
						var b = y == 0 ? 0 : bgra.b[w - stride2];
						var c = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k = cv2 + b - c;
						var pa = k - cv2;
						if(pa < 0) {
							pa = -pa;
						}
						var pb = k - b;
						if(pb < 0) {
							pb = -pb;
						}
						var pc = k - c;
						if(pc < 0) {
							pc = -pc;
						}
						var pos = r++;
						cv2 = (pa <= pb && pa <= pc ? cv2 : pb <= pc ? b : c) + data.b[pos] & 255;
						bgra.b[w++] = cv2 & 255;
						bgra.b[w++] = cv2 & 255;
						bgra.b[w++] = cv2 & 255;
						var b1 = y == 0 ? 0 : bgra.b[w - stride2];
						var c1 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k1 = ca2 + b1 - c1;
						var pa1 = k1 - ca2;
						if(pa1 < 0) {
							pa1 = -pa1;
						}
						var pb1 = k1 - b1;
						if(pb1 < 0) {
							pb1 = -pb1;
						}
						var pc1 = k1 - c1;
						if(pc1 < 0) {
							pc1 = -pc1;
						}
						var pos1 = r++;
						ca2 = (pa1 <= pb1 && pa1 <= pc1 ? ca2 : pb1 <= pc1 ? b1 : c1) + data.b[pos1] & 255;
						bgra.b[w++] = ca2 & 255;
					}
				} else {
					var _g21 = 0;
					var _g22 = width;
					while(_g21 < _g22) {
						var x9 = _g21++;
						var b2 = y == 0 ? 0 : bgra.b[w - stride2];
						var c2 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k2 = cv2 + b2 - c2;
						var pa2 = k2 - cv2;
						if(pa2 < 0) {
							pa2 = -pa2;
						}
						var pb2 = k2 - b2;
						if(pb2 < 0) {
							pb2 = -pb2;
						}
						var pc2 = k2 - c2;
						if(pc2 < 0) {
							pc2 = -pc2;
						}
						var pos2 = r++;
						cv2 = (pa2 <= pb2 && pa2 <= pc2 ? cv2 : pb2 <= pc2 ? b2 : c2) + data.b[pos2] & 255;
						bgra.b[w++] = cv2 & 255;
						bgra.b[w++] = cv2 & 255;
						bgra.b[w++] = cv2 & 255;
						bgra.b[w++] = (cv2 == alphvaIdx ? 0 : 255) & 255;
					}
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
			w += lineDelta;
		}
		break;
	case 1:
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 4 : 3) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var alphaRed = -1;
		var alphaGreen = -1;
		var alphaBlue = -1;
		if(!alpha) {
			var _g1_head = d.h;
			while(_g1_head != null) {
				var val = _g1_head.item;
				_g1_head = _g1_head.next;
				var t = val;
				if(t._hx_index == 4) {
					if(t.id == "tRNS") {
						var data1 = t.data;
						if(data1.length >= 6) {
							alphaRed = data1.b[1];
							alphaGreen = data1.b[3];
							alphaBlue = data1.b[5];
						}
						break;
					}
				}
			}
		}
		var cr = 0;
		var cg = 0;
		var cb = 0;
		var ca = 0;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				if(alpha) {
					var _g2 = 0;
					var _g3 = width;
					while(_g2 < _g3) {
						var x = _g2++;
						bgra.b[w++] = data.b[r + 2] & 255;
						bgra.b[w++] = data.b[r + 1] & 255;
						bgra.b[w++] = data.b[r] & 255;
						bgra.b[w++] = data.b[r + 3] & 255;
						r += 4;
					}
				} else {
					var _g4 = 0;
					var _g5 = width;
					while(_g4 < _g5) {
						var x1 = _g4++;
						cb = data.b[r + 2];
						bgra.b[w++] = cb & 255;
						cg = data.b[r + 1];
						bgra.b[w++] = cg & 255;
						cr = data.b[r];
						bgra.b[w++] = cr & 255;
						bgra.b[w++] = (cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255) & 255;
						r += 3;
					}
				}
				break;
			case 1:
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				if(alpha) {
					var _g6 = 0;
					var _g7 = width;
					while(_g6 < _g7) {
						var x2 = _g6++;
						cb += data.b[r + 2];
						bgra.b[w++] = cb & 255;
						cg += data.b[r + 1];
						bgra.b[w++] = cg & 255;
						cr += data.b[r];
						bgra.b[w++] = cr & 255;
						ca += data.b[r + 3];
						bgra.b[w++] = ca & 255;
						r += 4;
					}
				} else {
					var _g8 = 0;
					var _g9 = width;
					while(_g8 < _g9) {
						var x3 = _g8++;
						cb += data.b[r + 2];
						bgra.b[w++] = cb & 255;
						cg += data.b[r + 1];
						bgra.b[w++] = cg & 255;
						cr += data.b[r];
						bgra.b[w++] = cr & 255;
						bgra.b[w++] = (cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255) & 255;
						r += 3;
					}
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g10 = 0;
					var _g11 = width;
					while(_g10 < _g11) {
						var x4 = _g10++;
						bgra.b[w] = data.b[r + 2] + bgra.b[w - stride] & 255;
						++w;
						bgra.b[w] = data.b[r + 1] + bgra.b[w - stride] & 255;
						++w;
						bgra.b[w] = data.b[r] + bgra.b[w - stride] & 255;
						++w;
						bgra.b[w] = data.b[r + 3] + bgra.b[w - stride] & 255;
						++w;
						r += 4;
					}
				} else {
					var _g12 = 0;
					var _g13 = width;
					while(_g12 < _g13) {
						var x5 = _g12++;
						cb = data.b[r + 2] + bgra.b[w - stride];
						bgra.b[w] = cb & 255;
						++w;
						cg = data.b[r + 1] + bgra.b[w - stride];
						bgra.b[w] = cg & 255;
						++w;
						cr = data.b[r] + bgra.b[w - stride];
						bgra.b[w] = cr & 255;
						++w;
						bgra.b[w++] = (cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255) & 255;
						r += 3;
					}
				}
				break;
			case 3:
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				var stride1 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g14 = 0;
					var _g15 = width;
					while(_g14 < _g15) {
						var x6 = _g14++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cb & 255;
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cg & 255;
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cr & 255;
						ca = data.b[r + 3] + (ca + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = ca & 255;
						r += 4;
					}
				} else {
					var _g16 = 0;
					var _g17 = width;
					while(_g16 < _g17) {
						var x7 = _g16++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cb & 255;
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cg & 255;
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cr & 255;
						bgra.b[w++] = (cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255) & 255;
						r += 3;
					}
				}
				break;
			case 4:
				var stride2 = width * 4 * flipY1;
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				if(alpha) {
					var _g18 = 0;
					var _g19 = width;
					while(_g18 < _g19) {
						var x8 = _g18++;
						var b = y == 0 ? 0 : bgra.b[w - stride2];
						var c = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k = cb + b - c;
						var pa = k - cb;
						if(pa < 0) {
							pa = -pa;
						}
						var pb = k - b;
						if(pb < 0) {
							pb = -pb;
						}
						var pc = k - c;
						if(pc < 0) {
							pc = -pc;
						}
						cb = (pa <= pb && pa <= pc ? cb : pb <= pc ? b : c) + data.b[r + 2] & 255;
						bgra.b[w++] = cb & 255;
						var b1 = y == 0 ? 0 : bgra.b[w - stride2];
						var c1 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k1 = cg + b1 - c1;
						var pa1 = k1 - cg;
						if(pa1 < 0) {
							pa1 = -pa1;
						}
						var pb1 = k1 - b1;
						if(pb1 < 0) {
							pb1 = -pb1;
						}
						var pc1 = k1 - c1;
						if(pc1 < 0) {
							pc1 = -pc1;
						}
						cg = (pa1 <= pb1 && pa1 <= pc1 ? cg : pb1 <= pc1 ? b1 : c1) + data.b[r + 1] & 255;
						bgra.b[w++] = cg & 255;
						var b2 = y == 0 ? 0 : bgra.b[w - stride2];
						var c2 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k2 = cr + b2 - c2;
						var pa2 = k2 - cr;
						if(pa2 < 0) {
							pa2 = -pa2;
						}
						var pb2 = k2 - b2;
						if(pb2 < 0) {
							pb2 = -pb2;
						}
						var pc2 = k2 - c2;
						if(pc2 < 0) {
							pc2 = -pc2;
						}
						cr = (pa2 <= pb2 && pa2 <= pc2 ? cr : pb2 <= pc2 ? b2 : c2) + data.b[r] & 255;
						bgra.b[w++] = cr & 255;
						var b3 = y == 0 ? 0 : bgra.b[w - stride2];
						var c3 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k3 = ca + b3 - c3;
						var pa3 = k3 - ca;
						if(pa3 < 0) {
							pa3 = -pa3;
						}
						var pb3 = k3 - b3;
						if(pb3 < 0) {
							pb3 = -pb3;
						}
						var pc3 = k3 - c3;
						if(pc3 < 0) {
							pc3 = -pc3;
						}
						ca = (pa3 <= pb3 && pa3 <= pc3 ? ca : pb3 <= pc3 ? b3 : c3) + data.b[r + 3] & 255;
						bgra.b[w++] = ca & 255;
						r += 4;
					}
				} else {
					var _g20 = 0;
					var _g21 = width;
					while(_g20 < _g21) {
						var x9 = _g20++;
						var b4 = y == 0 ? 0 : bgra.b[w - stride2];
						var c4 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k4 = cb + b4 - c4;
						var pa4 = k4 - cb;
						if(pa4 < 0) {
							pa4 = -pa4;
						}
						var pb4 = k4 - b4;
						if(pb4 < 0) {
							pb4 = -pb4;
						}
						var pc4 = k4 - c4;
						if(pc4 < 0) {
							pc4 = -pc4;
						}
						cb = (pa4 <= pb4 && pa4 <= pc4 ? cb : pb4 <= pc4 ? b4 : c4) + data.b[r + 2] & 255;
						bgra.b[w++] = cb & 255;
						var b5 = y == 0 ? 0 : bgra.b[w - stride2];
						var c5 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k5 = cg + b5 - c5;
						var pa5 = k5 - cg;
						if(pa5 < 0) {
							pa5 = -pa5;
						}
						var pb5 = k5 - b5;
						if(pb5 < 0) {
							pb5 = -pb5;
						}
						var pc5 = k5 - c5;
						if(pc5 < 0) {
							pc5 = -pc5;
						}
						cg = (pa5 <= pb5 && pa5 <= pc5 ? cg : pb5 <= pc5 ? b5 : c5) + data.b[r + 1] & 255;
						bgra.b[w++] = cg & 255;
						var b6 = y == 0 ? 0 : bgra.b[w - stride2];
						var c6 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k6 = cr + b6 - c6;
						var pa6 = k6 - cr;
						if(pa6 < 0) {
							pa6 = -pa6;
						}
						var pb6 = k6 - b6;
						if(pb6 < 0) {
							pb6 = -pb6;
						}
						var pc6 = k6 - c6;
						if(pc6 < 0) {
							pc6 = -pc6;
						}
						cr = (pa6 <= pb6 && pa6 <= pc6 ? cr : pb6 <= pc6 ? b6 : c6) + data.b[r] & 255;
						bgra.b[w++] = cr & 255;
						bgra.b[w++] = (cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255) & 255;
						r += 3;
					}
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
			w += lineDelta;
		}
		break;
	case 2:
		var pal = format_png_Tools.getPalette(d);
		if(pal == null) {
			throw haxe_Exception.thrown("PNG Palette is missing");
		}
		var alpha = null;
		var _g1_head = d.h;
		while(_g1_head != null) {
			var val = _g1_head.item;
			_g1_head = _g1_head.next;
			var t = val;
			if(t._hx_index == 4) {
				if(t.id == "tRNS") {
					var data1 = t.data;
					alpha = data1;
					break;
				}
			}
		}
		if(alpha != null && alpha.length < 1 << h.colbits) {
			var alpha2 = new haxe_io_Bytes(new ArrayBuffer(1 << h.colbits));
			alpha2.blit(0,alpha,0,alpha.length);
			alpha2.fill(alpha.length,alpha2.length - alpha.length,255);
			alpha = alpha2;
		}
		var width = h.width;
		var stride = Math.ceil(width * h.colbits / 8) + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var tmp = h.width * h.colbits;
		var rline = tmp >> 3;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			if(f == 0) {
				r += rline;
				continue;
			}
			switch(f) {
			case 1:
				var c = 0;
				var _g2 = 0;
				var _g3 = width;
				while(_g2 < _g3) {
					var x = _g2++;
					var v = data.b[r];
					c += v;
					data.b[r++] = c & 255 & 255;
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : rline + 1;
				var _g4 = 0;
				var _g5 = width;
				while(_g4 < _g5) {
					var x1 = _g4++;
					var v1 = data.b[r];
					data.b[r] = v1 + data.b[r - stride] & 255;
					++r;
				}
				break;
			case 3:
				var c1 = 0;
				var stride1 = y == 0 ? 0 : rline + 1;
				var _g6 = 0;
				var _g7 = width;
				while(_g6 < _g7) {
					var x2 = _g6++;
					var v2 = data.b[r];
					c1 = v2 + (c1 + data.b[r - stride1] >> 1) & 255;
					data.b[r++] = c1 & 255;
				}
				break;
			case 4:
				var stride2 = rline + 1;
				var c2 = 0;
				var _g8 = 0;
				var _g9 = width;
				while(_g8 < _g9) {
					var x3 = _g8++;
					var v3 = data.b[r];
					var numChannels = 1;
					if(numChannels == null) {
						numChannels = 4;
					}
					var b = y == 0 ? 0 : data.b[r - stride2];
					var c3 = x3 == 0 || y == 0 ? 0 : data.b[r - stride2 - numChannels];
					var k = c2 + b - c3;
					var pa = k - c2;
					if(pa < 0) {
						pa = -pa;
					}
					var pb = k - b;
					if(pb < 0) {
						pb = -pb;
					}
					var pc = k - c3;
					if(pc < 0) {
						pc = -pc;
					}
					c2 = (pa <= pb && pa <= pc ? c2 : pb <= pc ? b : c3) + v3 & 255;
					data.b[r++] = c2 & 255;
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
		}
		var r = 0;
		if(h.colbits == 8) {
			var _g = 0;
			var _g1 = h.height;
			while(_g < _g1) {
				var y = _g++;
				++r;
				var _g2 = 0;
				var _g3 = h.width;
				while(_g2 < _g3) {
					var x = _g2++;
					var c = data.b[r++];
					bgra.b[w++] = pal.b[c * 3 + 2] & 255;
					bgra.b[w++] = pal.b[c * 3 + 1] & 255;
					bgra.b[w++] = pal.b[c * 3] & 255;
					bgra.b[w++] = (alpha != null ? alpha.b[c] : 255) & 255;
				}
				w += lineDelta;
			}
		} else if(h.colbits < 8) {
			var req = h.colbits;
			var mask = (1 << req) - 1;
			var _g = 0;
			var _g1 = h.height;
			while(_g < _g1) {
				var y = _g++;
				++r;
				var bits = 0;
				var nbits = 0;
				var _g2 = 0;
				var _g3 = h.width;
				while(_g2 < _g3) {
					var x = _g2++;
					if(nbits < req) {
						bits = bits << 8 | data.b[r++];
						nbits += 8;
					}
					var c = bits >>> nbits - req & mask;
					nbits -= req;
					bgra.b[w++] = pal.b[c * 3 + 2] & 255;
					bgra.b[w++] = pal.b[c * 3 + 1] & 255;
					bgra.b[w++] = pal.b[c * 3] & 255;
					bgra.b[w++] = (alpha != null ? alpha.b[c] : 255) & 255;
				}
				w += lineDelta;
			}
		} else {
			throw haxe_Exception.thrown(h.colbits + " indexed bits per pixel not supported");
		}
		break;
	}
	return bgra;
};
format_png_Tools.buildGrey = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r++] & 255;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColGrey(false), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.buildIndexed = function(width,height,data,palette,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r++] & 255;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColIndexed, interlaced : false}));
	l.add(format_png_Chunk.CPalette(palette));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.buildRGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height * 3 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r + 2] & 255;
			rgb.b[w++] = data.b[r + 1] & 255;
			rgb.b[w++] = data.b[r] & 255;
			r += 3;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(false), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.build32ARGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = new haxe_io_Bytes(new ArrayBuffer(width * height * 4 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgba.b[w++] = data.b[r + 1] & 255;
			rgba.b[w++] = data.b[r + 2] & 255;
			rgba.b[w++] = data.b[r + 3] & 255;
			rgba.b[w++] = data.b[r] & 255;
			r += 4;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(true), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgba,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.build32BGRA = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = new haxe_io_Bytes(new ArrayBuffer(width * height * 4 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgba.b[w++] = data.b[r + 2] & 255;
			rgba.b[w++] = data.b[r + 1] & 255;
			rgba.b[w++] = data.b[r] & 255;
			rgba.b[w++] = data.b[r + 3] & 255;
			r += 4;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(true), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgba,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
var format_png_Writer = function(o) {
	this.o = o;
	o.set_bigEndian(true);
};
$hxClasses["format.png.Writer"] = format_png_Writer;
format_png_Writer.__name__ = "format.png.Writer";
format_png_Writer.prototype = {
	write: function(png) {
		var b = 137;
		this.o.writeByte(b);
		var b = 80;
		this.o.writeByte(b);
		var b = 78;
		this.o.writeByte(b);
		var b = 71;
		this.o.writeByte(b);
		var b = 13;
		this.o.writeByte(b);
		var b = 10;
		this.o.writeByte(b);
		var b = 26;
		this.o.writeByte(b);
		var b = 10;
		this.o.writeByte(b);
		var _g_head = png.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var c = val;
			switch(c._hx_index) {
			case 0:
				this.writeChunk("IEND",new haxe_io_Bytes(new ArrayBuffer(0)));
				break;
			case 1:
				var h = c.h;
				var b = new haxe_io_BytesOutput();
				b.set_bigEndian(true);
				b.writeInt32(h.width);
				b.writeInt32(h.height);
				b.writeByte(h.colbits);
				var _g = h.color;
				var tmp;
				switch(_g._hx_index) {
				case 0:
					var alpha = _g.alpha;
					tmp = alpha ? 4 : 0;
					break;
				case 1:
					var alpha1 = _g.alpha;
					tmp = alpha1 ? 6 : 2;
					break;
				case 2:
					tmp = 3;
					break;
				}
				b.writeByte(tmp);
				b.writeByte(0);
				b.writeByte(0);
				b.writeByte(h.interlaced ? 1 : 0);
				this.writeChunk("IHDR",b.getBytes());
				break;
			case 2:
				var d = c.b;
				this.writeChunk("IDAT",d);
				break;
			case 3:
				var b1 = c.b;
				this.writeChunk("PLTE",b1);
				break;
			case 4:
				var id = c.id;
				var data = c.data;
				this.writeChunk(id,data);
				break;
			}
		}
	}
	,writeChunk: function(id,data) {
		this.o.writeInt32(data.length);
		this.o.writeString(id);
		this.o.write(data);
		var crc_crc = -1;
		var tmp = (crc_crc ^ HxOverrides.cca(id,0)) & 255;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		crc_crc = crc_crc >>> 8 ^ tmp;
		var tmp = (crc_crc ^ HxOverrides.cca(id,1)) & 255;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		crc_crc = crc_crc >>> 8 ^ tmp;
		var tmp = (crc_crc ^ HxOverrides.cca(id,2)) & 255;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		crc_crc = crc_crc >>> 8 ^ tmp;
		var tmp = (crc_crc ^ HxOverrides.cca(id,3)) & 255;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		crc_crc = crc_crc >>> 8 ^ tmp;
		var b = data.b.bufferValue;
		var _g = 0;
		var _g1 = data.length;
		while(_g < _g1) {
			var i = _g++;
			var tmp = (crc_crc ^ b.bytes[i]) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			crc_crc = crc_crc >>> 8 ^ tmp;
		}
		this.o.writeInt32(crc_crc ^ -1);
	}
	,__class__: format_png_Writer
};
var format_tools_Deflate = function() { };
$hxClasses["format.tools.Deflate"] = format_tools_Deflate;
format_tools_Deflate.__name__ = "format.tools.Deflate";
format_tools_Deflate.run = function(b,level) {
	if(level == null) {
		level = 9;
	}
	return haxe_zip_Compress.run(b,level);
};
var format_tools_Inflate = function() { };
$hxClasses["format.tools.Inflate"] = format_tools_Inflate;
format_tools_Inflate.__name__ = "format.tools.Inflate";
format_tools_Inflate.run = function(bytes) {
	return haxe_zip_Uncompress.run(bytes);
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = "haxe.IMap";
haxe_IMap.__isInterface__ = true;
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
$hxClasses["haxe.Exception"] = haxe_Exception;
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = "haxe._Int64.___Int64";
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = "haxe.Log";
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = "haxe.Serializer";
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.h[s];
		if(x != null) {
			this.buf.b += "R";
			this.buf.b += x == null ? "null" : "" + x;
			return;
		}
		this.shash.h[s] = this.scount++;
		this.buf.b += "y";
		s = encodeURIComponent(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += ":";
		this.buf.b += s == null ? "null" : "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g = 0;
		var _g1 = this.cache.length;
		while(_g < _g1) {
			var i = _g++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += i == null ? "null" : "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		var _g = Type.typeof(v);
		switch(_g._hx_index) {
		case 0:
			this.buf.b += "n";
			break;
		case 1:
			var v1 = v;
			if(v1 == 0) {
				this.buf.b += "z";
				return;
			}
			this.buf.b += "i";
			this.buf.b += v1 == null ? "null" : "" + v1;
			break;
		case 2:
			var v1 = v;
			if(isNaN(v1)) {
				this.buf.b += "k";
			} else if(!isFinite(v1)) {
				this.buf.b += v1 < 0 ? "m" : "p";
			} else {
				this.buf.b += "d";
				this.buf.b += v1 == null ? "null" : "" + v1;
			}
			break;
		case 3:
			this.buf.b += v ? "t" : "f";
			break;
		case 4:
			if(js_Boot.__instanceof(v,Class)) {
				var className = v.__name__;
				this.buf.b += "A";
				this.serializeString(className);
			} else if(js_Boot.__instanceof(v,Enum)) {
				this.buf.b += "B";
				this.serializeString(v.__ename__);
			} else {
				if(this.useCache && this.serializeRef(v)) {
					return;
				}
				this.buf.b += "o";
				this.serializeFields(v);
			}
			break;
		case 5:
			throw haxe_Exception.thrown("Cannot serialize function");
		case 6:
			var c = _g.c;
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) {
				return;
			}
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += "a";
				var l = v["length"];
				var _g1 = 0;
				var _g2 = l;
				while(_g1 < _g2) {
					var i = _g1++;
					if(v[i] == null) {
						++ucount;
					} else {
						if(ucount > 0) {
							if(ucount == 1) {
								this.buf.b += "n";
							} else {
								this.buf.b += "u";
								this.buf.b += ucount == null ? "null" : "" + ucount;
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) {
						this.buf.b += "n";
					} else {
						this.buf.b += "u";
						this.buf.b += ucount == null ? "null" : "" + ucount;
					}
				}
				this.buf.b += "h";
				break;
			case Date:
				var d = v;
				this.buf.b += "v";
				this.buf.b += Std.string(d.getTime());
				break;
			case haxe_ds_IntMap:
				this.buf.b += "q";
				var v1 = v;
				var k = v1.keys();
				while(k.hasNext()) {
					var k1 = k.next();
					this.buf.b += ":";
					this.buf.b += k1 == null ? "null" : "" + k1;
					this.serialize(v1.h[k1]);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_List:
				this.buf.b += "l";
				var v1 = v;
				var _g_head = v1.h;
				while(_g_head != null) {
					var val = _g_head.item;
					_g_head = _g_head.next;
					var i = val;
					this.serialize(i);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_ObjectMap:
				this.buf.b += "M";
				var v1 = v;
				var k = v1.keys();
				while(k.hasNext()) {
					var k1 = k.next();
					var id = Reflect.field(k1,"__id__");
					Reflect.deleteField(k1,"__id__");
					this.serialize(k1);
					k1["__id__"] = id;
					this.serialize(v1.h[k1.__id__]);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_StringMap:
				this.buf.b += "b";
				var v1 = v;
				var h = v1.h;
				var _g_h = h;
				var _g_keys = Object.keys(h);
				var _g_length = _g_keys.length;
				var _g_current = 0;
				while(_g_current < _g_length) {
					var k = _g_keys[_g_current++];
					this.serializeString(k);
					this.serialize(v1.h[k]);
				}
				this.buf.b += "h";
				break;
			case haxe_io_Bytes:
				var v1 = v;
				this.buf.b += "s";
				this.buf.b += Std.string(Math.ceil(v1.length * 8 / 6));
				this.buf.b += ":";
				var i = 0;
				var max = v1.length - 2;
				var b64 = haxe_Serializer.BASE64_CODES;
				if(b64 == null) {
					var this1 = new Array(haxe_Serializer.BASE64.length);
					b64 = this1;
					var _g1 = 0;
					var _g2 = haxe_Serializer.BASE64.length;
					while(_g1 < _g2) {
						var i1 = _g1++;
						b64[i1] = HxOverrides.cca(haxe_Serializer.BASE64,i1);
					}
					haxe_Serializer.BASE64_CODES = b64;
				}
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					this.buf.b += String.fromCodePoint(b64[b1 >> 2]);
					this.buf.b += String.fromCodePoint(b64[(b1 << 4 | b2 >> 4) & 63]);
					this.buf.b += String.fromCodePoint(b64[(b2 << 2 | b3 >> 6) & 63]);
					this.buf.b += String.fromCodePoint(b64[b3 & 63]);
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					this.buf.b += String.fromCodePoint(b64[b1 >> 2]);
					this.buf.b += String.fromCodePoint(b64[(b1 << 4 | b2 >> 4) & 63]);
					this.buf.b += String.fromCodePoint(b64[b2 << 2 & 63]);
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					this.buf.b += String.fromCodePoint(b64[b1 >> 2]);
					this.buf.b += String.fromCodePoint(b64[b1 << 4 & 63]);
				}
				break;
			default:
				if(this.useCache) {
					this.cache.pop();
				}
				if(v.hxSerialize != null) {
					this.buf.b += "C";
					this.serializeString(c.__name__);
					if(this.useCache) {
						this.cache.push(v);
					}
					v.hxSerialize(this);
					this.buf.b += "g";
				} else {
					this.buf.b += "c";
					this.serializeString(c.__name__);
					if(this.useCache) {
						this.cache.push(v);
					}
					this.serializeFields(v);
				}
			}
			break;
		case 7:
			var e = _g.e;
			if(this.useCache) {
				if(this.serializeRef(v)) {
					return;
				}
				this.cache.pop();
			}
			this.buf.b += Std.string(this.useEnumIndex ? "j" : "w");
			this.serializeString(e.__ename__);
			if(this.useEnumIndex) {
				this.buf.b += ":";
				this.buf.b += Std.string(v._hx_index);
			} else {
				var e = v;
				this.serializeString($hxEnums[e.__enum__].__constructs__[e._hx_index]._hx_name);
			}
			this.buf.b += ":";
			var params = Type.enumParameters(v);
			this.buf.b += Std.string(params.length);
			var _g = 0;
			while(_g < params.length) {
				var p = params[_g];
				++_g;
				this.serialize(p);
			}
			if(this.useCache) {
				this.cache.push(v);
			}
			break;
		default:
			throw haxe_Exception.thrown("Cannot serialize " + Std.string(v));
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = "haxe.Timer";
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.measure = function(f,pos) {
	var t0 = new Date().getTime() / 1000;
	var r = f();
	haxe_Log.trace(new Date().getTime() / 1000 - t0 + "s",pos);
	return r;
};
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe__$Unserializer_DefaultResolver = function() {
};
$hxClasses["haxe._Unserializer.DefaultResolver"] = haxe__$Unserializer_DefaultResolver;
haxe__$Unserializer_DefaultResolver.__name__ = "haxe._Unserializer.DefaultResolver";
haxe__$Unserializer_DefaultResolver.prototype = {
	resolveClass: function(name) {
		return $hxClasses[name];
	}
	,resolveEnum: function(name) {
		return $hxEnums[name];
	}
	,__class__: haxe__$Unserializer_DefaultResolver
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = this.buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = new haxe__$Unserializer_DefaultResolver();
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.resolver = r;
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = "haxe.Unserializer";
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g = 0;
	var _g1 = haxe_Unserializer.BASE64.length;
	while(_g < _g1) {
		var i = _g++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c == 45) {
				if(this.pos != fpos) {
					break;
				}
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) {
				break;
			}
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) {
			k *= -1;
		}
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c >= 43 && c < 58 || c == 101 || c == 69) {
				this.pos++;
			} else {
				break;
			}
		}
		return parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) {
				throw haxe_Exception.thrown("Invalid object");
			}
			if(this.buf.charCodeAt(this.pos) == 103) {
				break;
			}
			var k = this.unserialize();
			if(typeof(k) != "string") {
				throw haxe_Exception.thrown("Invalid object key");
			}
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) {
			throw haxe_Exception.thrown("Invalid enum format");
		}
		var nargs = this.readDigits();
		if(nargs == 0) {
			return Type.createEnum(edecl,tag);
		}
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 65:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			return cl;
		case 66:
			var name = this.unserialize();
			var e = this.resolver.resolveEnum(name);
			if(e == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			return e;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) {
				throw haxe_Exception.thrown("Invalid custom data");
			}
			return o;
		case 77:
			var h = new haxe_ds_ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) {
				throw haxe_Exception.thrown("Invalid string reference");
			}
			return this.scache[n];
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else {
					a.push(this.unserialize());
				}
			}
			return a;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				var value = this.unserialize();
				h.h[s] = value;
			}
			this.pos++;
			return h;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 100:
			return this.readFloat();
		case 102:
			return false;
		case 105:
			return this.readDigits();
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			this.pos++;
			var index = this.readDigits();
			var _this = edecl.__constructs__;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _this[i]._hx_name;
			}
			var tag = result[index];
			if(tag == null) {
				throw haxe_Exception.thrown("Unknown enum index " + name + "@" + index);
			}
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 107:
			return NaN;
		case 108:
			var l = new haxe_ds_List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 109:
			return -Infinity;
		case 110:
			return null;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 112:
			return Infinity;
		case 113:
			var h = new haxe_ds_IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				var value = this.unserialize();
				h.h[i] = value;
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) {
				throw haxe_Exception.thrown("Invalid IntMap format");
			}
			return h;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) {
				throw haxe_Exception.thrown("Invalid reference");
			}
			return this.cache[n];
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid bytes length");
			}
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2 ? rest - 1 : 0);
			var max = i + (len - rest);
			var bytes = new haxe_io_Bytes(new ArrayBuffer(size));
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 116:
			return true;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
				this.pos += 19;
			} else {
				d = new Date(this.readFloat());
			}
			this.cache.push(d);
			return d;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 120:
			throw haxe_Exception.thrown(this.unserialize());
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid string length");
			}
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 122:
			return 0;
		default:
		}
		this.pos--;
		throw haxe_Exception.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
$hxClasses["haxe.ValueException"] = haxe_ValueException;
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_crypto_Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
$hxClasses["haxe.crypto.Adler32"] = haxe_crypto_Adler32;
haxe_crypto_Adler32.__name__ = "haxe.crypto.Adler32";
haxe_crypto_Adler32.read = function(i) {
	var a = new haxe_crypto_Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
};
haxe_crypto_Adler32.prototype = {
	update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g = pos;
		var _g1 = pos + len;
		while(_g < _g1) {
			var p = _g++;
			var c = b.b[p];
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	}
	,equals: function(a) {
		if(a.a1 == this.a1) {
			return a.a2 == this.a2;
		} else {
			return false;
		}
	}
	,__class__: haxe_crypto_Adler32
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = "haxe.io.Bytes";
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s,encoding) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.ofHex = function(s) {
	if((s.length & 1) != 0) {
		throw haxe_Exception.thrown("Not a hex string (odd number of digits)");
	}
	var a = [];
	var i = 0;
	var len = s.length >> 1;
	while(i < len) {
		var high = s.charCodeAt(i * 2);
		var low = s.charCodeAt(i * 2 + 1);
		high = (high & 15) + ((high & 64) >> 6) * 9;
		low = (low & 15) + ((low & 64) >> 6) * 9;
		a.push((high << 4 | low) & 255);
		++i;
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.fastGet = function(b,pos) {
	return b.bytes[pos];
};
haxe_io_Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,fill: function(pos,len,value) {
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			this.b[pos++] = value & 255;
		}
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		return new haxe_io_Bytes(this.b.buffer.slice(pos + this.b.byteOffset,pos + this.b.byteOffset + len));
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length ? this.length : other.length;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			if(b1[i] != b2[i]) {
				return b1[i] - b2[i];
			}
		}
		return this.length - other.length;
	}
	,initData: function() {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
	}
	,getDouble: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getFloat64(pos,true);
	}
	,getFloat: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getFloat32(pos,true);
	}
	,setDouble: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setFloat64(pos,v,true);
	}
	,setFloat: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setFloat32(pos,v,true);
	}
	,getUInt16: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getUint16(pos,true);
	}
	,setUInt16: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setUint16(pos,v,true);
	}
	,getInt32: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getInt32(pos,true);
	}
	,setInt32: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setInt32(pos,v,true);
	}
	,getInt64: function(pos) {
		var this1 = new haxe__$Int64__$_$_$Int64(this.getInt32(pos + 4),this.getInt32(pos));
		return this1;
	}
	,setInt64: function(pos,v) {
		this.setInt32(pos,v.low);
		this.setInt32(pos + 4,v.high);
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var s = "";
		var b = this.b;
		var fcc = _$String_String_$Impl_$.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) {
					break;
				}
				s += fcc(c);
			} else if(c < 224) {
				s += fcc((c & 63) << 6 | b[i++] & 127);
			} else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,readString: function(pos,len) {
		return this.getString(pos,len);
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,toHex: function() {
		var s_b = "";
		var chars = [];
		var str = "0123456789abcdef";
		var _g = 0;
		var _g1 = str.length;
		while(_g < _g1) {
			var i = _g++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g = 0;
		var _g1 = this.length;
		while(_g < _g1) {
			var i = _g++;
			var c = this.b[i];
			s_b += String.fromCodePoint(chars[c >> 4]);
			s_b += String.fromCodePoint(chars[c & 15]);
		}
		return s_b;
	}
	,getData: function() {
		return this.b.bufferValue;
	}
	,__class__: haxe_io_Bytes
};
var haxe_crypto_Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe_crypto_Base64;
haxe_crypto_Base64.__name__ = "haxe.crypto.Base64";
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) {
		complement = true;
	}
	if(complement) {
		while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	}
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw haxe_Exception.thrown("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe_crypto_BaseCode;
haxe_crypto_BaseCode.__name__ = "haxe.crypto.BaseCode";
haxe_crypto_BaseCode.prototype = {
	initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g = 0;
		var _g1 = this.base.length;
		while(_g < _g1) {
			var i = _g++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) {
			this.initTable();
		}
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) {
					throw haxe_Exception.thrown("BaseCode : invalid encoded char");
				}
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255 & 255;
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = "haxe.ds.IntMap";
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	remove: function(key) {
		if(!this.h.hasOwnProperty(key)) {
			return false;
		}
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(+key);
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
$hxClasses["haxe.ds.List"] = haxe_ds_List;
haxe_ds_List.__name__ = "haxe.ds.List";
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = new haxe_ds__$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
$hxClasses["haxe.ds._List.ListNode"] = haxe_ds__$List_ListNode;
haxe_ds__$List_ListNode.__name__ = "haxe.ds._List.ListNode";
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = "haxe.ds.ObjectMap";
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = "haxe.ds.StringMap";
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
$hxClasses["haxe.exceptions.PosException"] = haxe_exceptions_PosException;
haxe_exceptions_PosException.__name__ = "haxe.exceptions.PosException";
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
$hxClasses["haxe.exceptions.NotImplementedException"] = haxe_exceptions_NotImplementedException;
haxe_exceptions_NotImplementedException.__name__ = "haxe.exceptions.NotImplementedException";
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
$hxClasses["haxe.io.BytesBuffer"] = haxe_io_BytesBuffer;
haxe_io_BytesBuffer.__name__ = "haxe.io.BytesBuffer";
haxe_io_BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,add: function(src) {
		if(this.pos + src.length > this.size) {
			this.grow(src.length);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset,src.length);
		this.u8.set(sub,this.pos);
		this.pos += src.length;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.pos + len > this.size) {
			this.grow(len);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset + pos,len);
		this.u8.set(sub,this.pos);
		this.pos += len;
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Input = function() { };
$hxClasses["haxe.io.Input"] = haxe_io_Input;
haxe_io_Input.__name__ = "haxe.io.Input";
haxe_io_Input.prototype = {
	readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = new haxe_io_Bytes(new ArrayBuffer(nbytes));
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian ? ch2 | ch1 << 8 : ch1 | ch2 << 8;
		if((n & 32768) != 0) {
			return n - 65536;
		}
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	}
	,readString: function(len,encoding) {
		var b = new haxe_io_Bytes(new ArrayBuffer(len));
		this.readFullBytes(b,0,len);
		return b.getString(0,len,encoding);
	}
	,__class__: haxe_io_Input
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe_io_BytesInput;
haxe_io_BytesInput.__name__ = "haxe.io.BytesInput";
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var haxe_io_Output = function() { };
$hxClasses["haxe.io.Output"] = haxe_io_Output;
haxe_io_Output.__name__ = "haxe.io.Output";
haxe_io_Output.prototype = {
	writeByte: function(c) {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Output.hx", lineNumber : 47, className : "haxe.io.Output", methodName : "writeByte"});
	}
	,writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			l -= k;
		}
	}
	,writeFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.writeBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
	,writeString: function(s,encoding) {
		var b = haxe_io_Bytes.ofString(s,encoding);
		this.writeFullBytes(b,0,b.length);
	}
	,__class__: haxe_io_Output
};
var haxe_io_BytesOutput = function() {
	this.b = new haxe_io_BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe_io_BytesOutput;
haxe_io_BytesOutput.__name__ = "haxe.io.BytesOutput";
haxe_io_BytesOutput.__super__ = haxe_io_Output;
haxe_io_BytesOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		this.b.addByte(c);
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe_io_BytesOutput
});
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:"haxe.io.Encoding",__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = "haxe.io.Eof";
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:"haxe.io.Error",__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = "haxe.io.Path";
haxe_io_Path.withoutDirectory = function(path) {
	var s = new haxe_io_Path(path);
	s.dir = null;
	return s.toString();
};
haxe_io_Path.directory = function(path) {
	var s = new haxe_io_Path(path);
	if(s.dir == null) {
		return "";
	}
	return s.dir;
};
haxe_io_Path.prototype = {
	toString: function() {
		return (this.dir == null ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (this.ext == null ? "" : "." + this.ext);
	}
	,__class__: haxe_io_Path
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
$hxClasses["haxe.iterators.ArrayIterator"] = haxe_iterators_ArrayIterator;
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_zip_Compress = function() { };
$hxClasses["haxe.zip.Compress"] = haxe_zip_Compress;
haxe_zip_Compress.__name__ = "haxe.zip.Compress";
haxe_zip_Compress.run = function(s,level) {
	throw new haxe_exceptions_NotImplementedException("Not implemented for this platform",null,{ fileName : "haxe/zip/Compress.hx", lineNumber : 39, className : "haxe.zip.Compress", methodName : "run"});
};
var haxe_zip_ExtraField = $hxEnums["haxe.zip.ExtraField"] = { __ename__:"haxe.zip.ExtraField",__constructs__:null
	,FUnknown: ($_=function(tag,bytes) { return {_hx_index:0,tag:tag,bytes:bytes,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_._hx_name="FUnknown",$_.__params__ = ["tag","bytes"],$_)
	,FInfoZipUnicodePath: ($_=function(name,crc) { return {_hx_index:1,name:name,crc:crc,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_._hx_name="FInfoZipUnicodePath",$_.__params__ = ["name","crc"],$_)
	,FUtf8: {_hx_name:"FUtf8",_hx_index:2,__enum__:"haxe.zip.ExtraField",toString:$estr}
};
haxe_zip_ExtraField.__constructs__ = [haxe_zip_ExtraField.FUnknown,haxe_zip_ExtraField.FInfoZipUnicodePath,haxe_zip_ExtraField.FUtf8];
var haxe_zip_Huffman = $hxEnums["haxe.zip.Huffman"] = { __ename__:"haxe.zip.Huffman",__constructs__:null
	,Found: ($_=function(i) { return {_hx_index:0,i:i,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="Found",$_.__params__ = ["i"],$_)
	,NeedBit: ($_=function(left,right) { return {_hx_index:1,left:left,right:right,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBit",$_.__params__ = ["left","right"],$_)
	,NeedBits: ($_=function(n,table) { return {_hx_index:2,n:n,table:table,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBits",$_.__params__ = ["n","table"],$_)
};
haxe_zip_Huffman.__constructs__ = [haxe_zip_Huffman.Found,haxe_zip_Huffman.NeedBit,haxe_zip_Huffman.NeedBits];
var haxe_zip_HuffTools = function() {
};
$hxClasses["haxe.zip.HuffTools"] = haxe_zip_HuffTools;
haxe_zip_HuffTools.__name__ = "haxe.zip.HuffTools";
haxe_zip_HuffTools.prototype = {
	treeDepth: function(t) {
		switch(t._hx_index) {
		case 0:
			var _g = t.i;
			return 0;
		case 1:
			var a = t.left;
			var b = t.right;
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db ? da : db);
		case 2:
			var _g = t.n;
			var _g = t.table;
			throw haxe_Exception.thrown("assert");
		}
	}
	,treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) {
			return t;
		}
		if(d == 1) {
			if(t._hx_index == 1) {
				var a = t.left;
				var b = t.right;
				return haxe_zip_Huffman.NeedBit(this.treeCompress(a),this.treeCompress(b));
			} else {
				throw haxe_Exception.thrown("assert");
			}
		}
		var size = 1 << d;
		var table = [];
		var _g = 0;
		var _g1 = size;
		while(_g < _g1) {
			var i = _g++;
			table.push(haxe_zip_Huffman.Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return haxe_zip_Huffman.NeedBits(d,table);
	}
	,treeWalk: function(table,p,cd,d,t) {
		if(t._hx_index == 1) {
			var a = t.left;
			var b = t.right;
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else {
				table[p] = this.treeCompress(t);
			}
		} else {
			table[p] = this.treeCompress(t);
		}
	}
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var idx = v << 5 | len;
		if(bits.h.hasOwnProperty(idx)) {
			return haxe_zip_Huffman.Found(bits.h[idx]);
		}
		v <<= 1;
		++len;
		return haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,make: function(lengths,pos,nlengths,maxbits) {
		if(nlengths == 1) {
			return haxe_zip_Huffman.NeedBit(haxe_zip_Huffman.Found(0),haxe_zip_Huffman.Found(0));
		}
		var counts = [];
		var tmp = [];
		if(maxbits > 32) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var _g = 0;
		var _g1 = maxbits;
		while(_g < _g1) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var p = lengths[i + pos];
			if(p >= maxbits) {
				throw haxe_Exception.thrown("Invalid huffman");
			}
			counts[p]++;
		}
		var code = 0;
		var _g = 1;
		var _g1 = maxbits - 1;
		while(_g < _g1) {
			var i = _g++;
			code = code + counts[i] << 1;
			tmp[i] = code;
		}
		var bits = new haxe_ds_IntMap();
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var l = lengths[i + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.h[n << 5 | l] = i;
			}
		}
		return this.treeCompress(haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,__class__: haxe_zip_HuffTools
};
var haxe_zip__$InflateImpl_Window = function(hasCrc) {
	this.buffer = new haxe_io_Bytes(new ArrayBuffer(65536));
	this.pos = 0;
	if(hasCrc) {
		this.crc = new haxe_crypto_Adler32();
	}
};
$hxClasses["haxe.zip._InflateImpl.Window"] = haxe_zip__$InflateImpl_Window;
haxe_zip__$InflateImpl_Window.__name__ = "haxe.zip._InflateImpl.Window";
haxe_zip__$InflateImpl_Window.prototype = {
	slide: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,32768);
		}
		var b = new haxe_io_Bytes(new ArrayBuffer(65536));
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) {
			this.slide();
		}
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,addByte: function(c) {
		if(this.pos == 65536) {
			this.slide();
		}
		this.buffer.b[this.pos] = c & 255;
		this.pos++;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,available: function() {
		return this.pos;
	}
	,checksum: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,this.pos);
		}
		return this.crc;
	}
	,__class__: haxe_zip__$InflateImpl_Window
};
var haxe_zip__$InflateImpl_State = $hxEnums["haxe.zip._InflateImpl.State"] = { __ename__:"haxe.zip._InflateImpl.State",__constructs__:null
	,Head: {_hx_name:"Head",_hx_index:0,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Block: {_hx_name:"Block",_hx_index:1,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,CData: {_hx_name:"CData",_hx_index:2,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Flat: {_hx_name:"Flat",_hx_index:3,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Crc: {_hx_name:"Crc",_hx_index:4,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Dist: {_hx_name:"Dist",_hx_index:5,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,DistOne: {_hx_name:"DistOne",_hx_index:6,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Done: {_hx_name:"Done",_hx_index:7,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
};
haxe_zip__$InflateImpl_State.__constructs__ = [haxe_zip__$InflateImpl_State.Head,haxe_zip__$InflateImpl_State.Block,haxe_zip__$InflateImpl_State.CData,haxe_zip__$InflateImpl_State.Flat,haxe_zip__$InflateImpl_State.Crc,haxe_zip__$InflateImpl_State.Dist,haxe_zip__$InflateImpl_State.DistOne,haxe_zip__$InflateImpl_State.Done];
var haxe_zip_InflateImpl = function(i,header,crc) {
	if(crc == null) {
		crc = true;
	}
	if(header == null) {
		header = true;
	}
	this.isFinal = false;
	this.htools = new haxe_zip_HuffTools();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	this.state = header ? haxe_zip__$InflateImpl_State.Head : haxe_zip__$InflateImpl_State.Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = [];
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.window = new haxe_zip__$InflateImpl_Window(crc);
};
$hxClasses["haxe.zip.InflateImpl"] = haxe_zip_InflateImpl;
haxe_zip_InflateImpl.__name__ = "haxe.zip.InflateImpl";
haxe_zip_InflateImpl.run = function(i,bufsize) {
	if(bufsize == null) {
		bufsize = 65536;
	}
	var buf = new haxe_io_Bytes(new ArrayBuffer(bufsize));
	var output = new haxe_io_BytesBuffer();
	var inflate = new haxe_zip_InflateImpl(i);
	while(true) {
		var len = inflate.readBytes(buf,0,bufsize);
		output.addBytes(buf,0,len);
		if(len < bufsize) {
			break;
		}
	}
	return output.getBytes();
};
haxe_zip_InflateImpl.prototype = {
	buildFixedHuffman: function() {
		if(haxe_zip_InflateImpl.FIXED_HUFFMAN != null) {
			return haxe_zip_InflateImpl.FIXED_HUFFMAN;
		}
		var a = [];
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143 ? 8 : n <= 255 ? 9 : n <= 279 ? 7 : 8);
		}
		haxe_zip_InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return haxe_zip_InflateImpl.FIXED_HUFFMAN;
	}
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) {
			while(this.inflateLoop()) {
			}
		}
		return len - this.needed;
	}
	,getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	}
	,getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	}
	,getRevBits: function(n) {
		if(n == 0) {
			return 0;
		} else if(this.getBit()) {
			return 1 << n - 1 | this.getRevBits(n - 1);
		} else {
			return this.getRevBits(n - 1);
		}
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,addByte: function(b) {
		this.window.addByte(b);
		this.output.b[this.outpos] = b & 255;
		this.needed--;
		this.outpos++;
	}
	,addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
	}
	,applyHuffman: function(h) {
		switch(h._hx_index) {
		case 0:
			var n = h.i;
			return n;
		case 1:
			var a = h.left;
			var b = h.right;
			return this.applyHuffman(this.getBit() ? b : a);
		case 2:
			var n = h.n;
			var tbl = h.table;
			return this.applyHuffman(tbl[this.getBits(n)]);
		}
	}
	,inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				++i;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				while(i < end) {
					a[i] = prev;
					++i;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
		}
	}
	,inflateLoop: function() {
		switch(this.state._hx_index) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8) {
				throw haxe_Exception.thrown("Invalid data");
			}
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) {
				throw haxe_Exception.thrown("Invalid data");
			}
			if(fdict) {
				throw haxe_Exception.thrown("Unsupported dictionary");
			}
			this.state = haxe_zip__$InflateImpl_State.Block;
			return true;
		case 1:
			this.isFinal = this.getBit();
			switch(this.getBits(2)) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = haxe_zip__$InflateImpl_State.Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g = 0;
				var _g1 = hclen;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g = hclen;
				var _g1 = 19;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = [];
				var _g = 0;
				var _g1 = hlit + hdist;
				while(_g < _g1) {
					var i = _g++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
			break;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.len = haxe_zip_InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code = this.huffdist == null ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
				extra_bits = haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.dist = haxe_zip_InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this.window.available()) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = this.dist == 1 ? haxe_zip__$InflateImpl_State.DistOne : haxe_zip__$InflateImpl_State.Dist;
				return true;
			}
			break;
		case 3:
			var rlen = this.len < this.needed ? this.len : this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
			}
			return this.needed > 0;
		case 4:
			var calc = this.window.checksum();
			if(calc == null) {
				this.state = haxe_zip__$InflateImpl_State.Done;
				return true;
			}
			var crc = haxe_crypto_Adler32.read(this.input);
			if(!calc.equals(crc)) {
				throw haxe_Exception.thrown("Invalid CRC");
			}
			this.state = haxe_zip__$InflateImpl_State.Done;
			return true;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist = this.len < this.dist ? this.len : this.dist;
				var rlen = this.needed < rdist ? this.needed : rdist;
				this.addDist(this.dist,rlen);
				this.len -= rlen;
			}
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 6:
			var rlen = this.len < this.needed ? this.len : this.needed;
			this.addDistOne(rlen);
			this.len -= rlen;
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 7:
			return false;
		}
	}
	,__class__: haxe_zip_InflateImpl
};
var haxe_zip_Reader = function(i) {
	this.i = i;
};
$hxClasses["haxe.zip.Reader"] = haxe_zip_Reader;
haxe_zip_Reader.__name__ = "haxe.zip.Reader";
haxe_zip_Reader.readZip = function(i) {
	var r = new haxe_zip_Reader(i);
	return r.read();
};
haxe_zip_Reader.prototype = {
	readZipDate: function() {
		var t = this.i.readUInt16();
		var hour = t >> 11 & 31;
		var min = t >> 5 & 63;
		var sec = t & 31;
		var d = this.i.readUInt16();
		var year = d >> 9;
		var month = d >> 5 & 15;
		var day = d & 31;
		return new Date(year + 1980,month - 1,day,hour,min,sec << 1);
	}
	,readExtraFields: function(length) {
		var fields = new haxe_ds_List();
		while(length > 0) {
			if(length < 4) {
				throw haxe_Exception.thrown("Invalid extra fields data");
			}
			var tag = this.i.readUInt16();
			var len = this.i.readUInt16();
			if(length < len) {
				throw haxe_Exception.thrown("Invalid extra fields data");
			}
			if(tag == 28789) {
				var version = this.i.readByte();
				if(version != 1) {
					var data = new haxe_io_BytesBuffer();
					data.addByte(version);
					data.add(this.i.read(len - 1));
					fields.add(haxe_zip_ExtraField.FUnknown(tag,data.getBytes()));
				} else {
					var crc = this.i.readInt32();
					var name = this.i.read(len - 5).toString();
					fields.add(haxe_zip_ExtraField.FInfoZipUnicodePath(name,crc));
				}
			} else {
				fields.add(haxe_zip_ExtraField.FUnknown(tag,this.i.read(len)));
			}
			length -= 4 + len;
		}
		return fields;
	}
	,readEntryHeader: function() {
		var i = this.i;
		var h = i.readInt32();
		if(h == 33639248 || h == 101010256) {
			return null;
		}
		if(h != 67324752) {
			throw haxe_Exception.thrown("Invalid Zip Data");
		}
		var version = i.readUInt16();
		var flags = i.readUInt16();
		var utf8 = (flags & 2048) != 0;
		if((flags & 63473) != 0) {
			throw haxe_Exception.thrown("Unsupported flags " + flags);
		}
		var compression = i.readUInt16();
		var compressed = compression != 0;
		if(compressed && compression != 8) {
			throw haxe_Exception.thrown("Unsupported compression " + compression);
		}
		var mtime = this.readZipDate();
		var crc32 = i.readInt32();
		var csize = i.readInt32();
		var usize = i.readInt32();
		var fnamelen = i.readInt16();
		var elen = i.readInt16();
		var fname = i.readString(fnamelen);
		var fields = this.readExtraFields(elen);
		if(utf8) {
			fields.push(haxe_zip_ExtraField.FUtf8);
		}
		var data = null;
		if((flags & 8) != 0) {
			crc32 = null;
		}
		return { fileName : fname, fileSize : usize, fileTime : mtime, compressed : compressed, dataSize : csize, data : data, crc32 : crc32, extraFields : fields};
	}
	,read: function() {
		var l = new haxe_ds_List();
		var buf = null;
		var tmp = null;
		while(true) {
			var e = this.readEntryHeader();
			if(e == null) {
				break;
			}
			if(e.crc32 == null) {
				if(e.compressed) {
					var bufSize = 65536;
					if(tmp == null) {
						tmp = new haxe_io_Bytes(new ArrayBuffer(bufSize));
					}
					var out = new haxe_io_BytesBuffer();
					var z = new haxe_zip_InflateImpl(this.i,false,false);
					while(true) {
						var n = z.readBytes(tmp,0,bufSize);
						out.addBytes(tmp,0,n);
						if(n < bufSize) {
							break;
						}
					}
					e.data = out.getBytes();
				} else {
					e.data = this.i.read(e.dataSize);
				}
				e.crc32 = this.i.readInt32();
				if(e.crc32 == 134695760) {
					e.crc32 = this.i.readInt32();
				}
				e.dataSize = this.i.readInt32();
				e.fileSize = this.i.readInt32();
				e.dataSize = e.fileSize;
				e.compressed = false;
			} else {
				e.data = this.i.read(e.dataSize);
			}
			l.add(e);
		}
		return l;
	}
	,__class__: haxe_zip_Reader
};
var haxe_zip_Uncompress = function() { };
$hxClasses["haxe.zip.Uncompress"] = haxe_zip_Uncompress;
haxe_zip_Uncompress.__name__ = "haxe.zip.Uncompress";
haxe_zip_Uncompress.run = function(src,bufsize) {
	return haxe_zip_InflateImpl.run(new haxe_io_BytesInput(src),bufsize);
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = "js.Boot";
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_lib__$ArrayBuffer_ArrayBufferCompat = function() { };
$hxClasses["js.lib._ArrayBuffer.ArrayBufferCompat"] = js_lib__$ArrayBuffer_ArrayBufferCompat;
js_lib__$ArrayBuffer_ArrayBufferCompat.__name__ = "js.lib._ArrayBuffer.ArrayBufferCompat";
js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var resultArray = new Uint8Array(u.byteLength);
	resultArray.set(u);
	return resultArray.buffer;
};
var lime__$internal_backend_html5_GameDeviceData = function() {
	this.connected = true;
	this.buttons = [];
	this.axes = [];
};
$hxClasses["lime._internal.backend.html5.GameDeviceData"] = lime__$internal_backend_html5_GameDeviceData;
lime__$internal_backend_html5_GameDeviceData.__name__ = "lime._internal.backend.html5.GameDeviceData";
lime__$internal_backend_html5_GameDeviceData.prototype = {
	__class__: lime__$internal_backend_html5_GameDeviceData
};
var lime__$internal_backend_html5_HTML5HTTPRequest = function() {
	this.validStatus0 = new EReg("Tizen","gi").match(window.navigator.userAgent);
};
$hxClasses["lime._internal.backend.html5.HTML5HTTPRequest"] = lime__$internal_backend_html5_HTML5HTTPRequest;
lime__$internal_backend_html5_HTML5HTTPRequest.__name__ = "lime._internal.backend.html5.HTML5HTTPRequest";
lime__$internal_backend_html5_HTML5HTTPRequest.loadImage = function(uri) {
	var promise = new lime_app_Promise();
	if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
		lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
		lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(uri,promise,0);
	} else {
		lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 0});
	}
	return promise.future;
};
lime__$internal_backend_html5_HTML5HTTPRequest.loadImageFromBytes = function(bytes,type) {
	var uri = URL.createObjectURL(new Blob([bytes.b.bufferValue],{ type : type}));
	if(uri != null) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(uri,promise,1);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 1});
		}
		return promise.future;
	} else {
		return lime__$internal_backend_html5_HTML5HTTPRequest.loadImage("data:" + type + ";base64," + lime__$internal_format_Base64.encode(bytes));
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.processQueue = function() {
	if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit && lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.length > 0) {
		lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
		var queueItem = lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.pop();
		switch(queueItem.type) {
		case "BINARY":
			queueItem.instance.__loadData(queueItem.uri,queueItem.promise);
			break;
		case "IMAGE":
			lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(queueItem.uri,queueItem.promise,queueItem.options);
			break;
		case "TEXT":
			queueItem.instance.__loadText(queueItem.uri,queueItem.promise);
			break;
		default:
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
		}
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__createBlobURIFromBytes = function(bytes,type) {
	return URL.createObjectURL(new Blob([bytes.b.bufferValue],{ type : type}));
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname = function(hostname) {
	if(hostname == null) {
		return "";
	} else {
		return hostname;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort = function(port,protocol) {
	if(port == null || port == "") {
		switch(protocol) {
		case "ftp:":
			return "21";
		case "gopher:":
			return "70";
		case "http:":
			return "80";
		case "https:":
			return "443";
		case "ws:":
			return "80";
		case "wss:":
			return "443";
		default:
			return "";
		}
	}
	return port;
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol = function(protocol) {
	if(protocol == null || protocol == "") {
		return "http:";
	} else {
		return protocol;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI = function(uri) {
	if(!StringTools.startsWith(uri,"data:")) {
		return StringTools.startsWith(uri,"blob:");
	} else {
		return true;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin = function(path) {
	if(path == null || path == "") {
		return true;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI(path)) {
		return true;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.originElement == null) {
		lime__$internal_backend_html5_HTML5HTTPRequest.originElement = window.document.createElement("a");
		lime__$internal_backend_html5_HTML5HTTPRequest.originHostname = lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname($global.location.hostname);
		lime__$internal_backend_html5_HTML5HTTPRequest.originProtocol = lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol($global.location.protocol);
		lime__$internal_backend_html5_HTML5HTTPRequest.originPort = lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort($global.location.port,lime__$internal_backend_html5_HTML5HTTPRequest.originProtocol);
	}
	var a = lime__$internal_backend_html5_HTML5HTTPRequest.originElement;
	a.href = path;
	if(a.hostname == "") {
		a.href = a.href;
	}
	var hostname = lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname(a.hostname);
	var protocol = lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol(a.protocol);
	var port = lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort(a.port,protocol);
	var sameHost = hostname == "" || hostname == lime__$internal_backend_html5_HTML5HTTPRequest.originHostname;
	var samePort = port == "" || port == lime__$internal_backend_html5_HTML5HTTPRequest.originPort;
	if(protocol != "file:" && sameHost) {
		return samePort;
	} else {
		return false;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage = function(uri,promise,options) {
	var image = new window.Image ();
	if(!lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin(uri)) {
		image.crossOrigin = "Anonymous";
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress == null) {
		lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress = 'onprogress' in image;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress || lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI(uri)) {
		image.addEventListener("load",function(event) {
			lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI(uri,options);
			var buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			buffer.__srcImage = image;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			promise.complete(new lime_graphics_Image(buffer));
		},false);
		image.addEventListener("progress",function(event) {
			promise.progress(event.loaded,event.total);
		},false);
		image.addEventListener("error",function(event) {
			lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI(uri,options);
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			promise.error(event.detail);
		},false);
		image.src = uri;
	} else {
		var request = new XMLHttpRequest();
		request.onload = function(_) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			var img = new lime_graphics_Image();
			img.__fromBytes(haxe_io_Bytes.ofData(request.response),function(img) {
				promise.complete(img);
			});
		};
		request.onerror = function(event) {
			promise.error(event.message);
		};
		request.onprogress = function(event) {
			if(event.lengthComputable) {
				promise.progress(event.loaded,event.total);
			}
		};
		request.open("GET",uri,true);
		request.responseType = "arraybuffer";
		request.overrideMimeType("text/plain; charset=x-user-defined");
		request.send(null);
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI = function(uri,options) {
	if((options & 1) != 0) {
		URL.revokeObjectURL(uri);
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.prototype = {
	cancel: function() {
		if(this.request != null) {
			this.request.abort();
		}
	}
	,init: function(parent) {
		this.parent = parent;
	}
	,load: function(uri,progress,readyStateChange) {
		this.request = new XMLHttpRequest();
		if(this.parent.method == "POST") {
			this.request.upload.addEventListener("progress",progress,false);
		} else {
			this.request.addEventListener("progress",progress,false);
		}
		this.request.onreadystatechange = readyStateChange;
		var query = "";
		if(this.parent.data == null) {
			var h = this.parent.formData.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(query.length > 0) {
					query += "&";
				}
				var value = this.parent.formData.h[key];
				if(key.indexOf("[]") > -1 && ((value) instanceof Array)) {
					var _g = [];
					var x = $getIterator(value);
					while(x.hasNext()) {
						var x1 = x.next();
						_g.push(encodeURIComponent(x1));
					}
					var arrayValue = _g.join("&amp;" + key + "=");
					query += encodeURIComponent(key) + "=" + arrayValue;
				} else {
					var query1 = encodeURIComponent(key) + "=";
					var s = Std.string(value);
					query += query1 + encodeURIComponent(s);
				}
			}
			if(this.parent.method == "GET" && query != "") {
				if(uri.indexOf("?") > -1) {
					uri += "&" + query;
				} else {
					uri += "?" + query;
				}
				query = "";
			}
		}
		this.request.open(Std.string(this.parent.method),uri,true);
		if(this.parent.timeout > 0) {
			this.request.timeout = this.parent.timeout;
		}
		if(this.binary) {
			this.request.responseType = "arraybuffer";
		}
		var contentType = null;
		var _g = 0;
		var _g1 = this.parent.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			if(header.name == "Content-Type") {
				contentType = header.value;
			} else {
				this.request.setRequestHeader(header.name,header.value);
			}
		}
		if(this.parent.contentType != null) {
			contentType = this.parent.contentType;
		}
		if(contentType == null) {
			if(this.parent.data != null) {
				contentType = "application/octet-stream";
			} else if(query != "") {
				contentType = "application/x-www-form-urlencoded";
			}
		}
		if(contentType != null) {
			this.request.setRequestHeader("Content-Type",contentType);
		}
		if(this.parent.withCredentials) {
			this.request.withCredentials = true;
		}
		if(this.parent.data != null) {
			this.request.send(this.parent.data.b.bufferValue);
		} else {
			this.request.send(query);
		}
	}
	,loadData: function(uri) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			this.__loadData(uri,promise);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "BINARY", options : 0});
		}
		return promise.future;
	}
	,loadText: function(uri) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			this.__loadText(uri,promise);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "TEXT", options : 0});
		}
		return promise.future;
	}
	,processResponse: function() {
		if(this.parent.enableResponseHeaders) {
			this.parent.responseHeaders = [];
			var name;
			var value;
			var _g = 0;
			var _g1 = this.request.getAllResponseHeaders().split("\n");
			while(_g < _g1.length) {
				var line = _g1[_g];
				++_g;
				name = StringTools.trim(HxOverrides.substr(line,0,line.indexOf(":")));
				value = StringTools.trim(HxOverrides.substr(line,line.indexOf(":") + 1,null));
				if(name != "") {
					this.parent.responseHeaders.push(new lime_net_HTTPRequestHeader(name,value));
				}
			}
		}
		this.parent.responseStatus = this.request.status;
	}
	,__loadData: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status < 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				var bytes = null;
				if(_gthis.request.responseType == "") {
					if(_gthis.request.responseText != null) {
						bytes = haxe_io_Bytes.ofString(_gthis.request.responseText);
					}
				} else if(_gthis.request.response != null) {
					bytes = haxe_io_Bytes.ofData(_gthis.request.response);
				}
				_gthis.processResponse();
				promise.complete(bytes);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
		};
		this.binary = true;
		this.load(uri,progress,readyStateChange);
	}
	,__loadText: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status < 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				_gthis.processResponse();
				promise.complete(_gthis.request.responseText);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
		};
		this.binary = false;
		this.load(uri,progress,readyStateChange);
	}
	,__class__: lime__$internal_backend_html5_HTML5HTTPRequest
};
var lime__$internal_backend_html5_HTML5Window = function(parent) {
	this.imeCompositionActive = false;
	this.unusedTouchesPool = new haxe_ds_List();
	this.scale = 1.0;
	this.currentTouches = new haxe_ds_IntMap();
	this.parent = parent;
	this.cursor = lime_ui_MouseCursor.DEFAULT;
	this.cacheMouseX = 0;
	this.cacheMouseY = 0;
	var attributes = parent.__attributes;
	if(!Object.prototype.hasOwnProperty.call(attributes,"context")) {
		attributes.context = { };
	}
	this.renderType = attributes.context.type;
	if(Object.prototype.hasOwnProperty.call(attributes,"element")) {
		parent.element = attributes.element;
	}
	var element = parent.element;
	if(Object.prototype.hasOwnProperty.call(attributes,"allowHighDPI") && attributes.allowHighDPI && this.renderType != "dom") {
		this.scale = window.devicePixelRatio;
	}
	parent.__scale = this.scale;
	this.setWidth = Object.prototype.hasOwnProperty.call(attributes,"width") ? attributes.width : 0;
	this.setHeight = Object.prototype.hasOwnProperty.call(attributes,"height") ? attributes.height : 0;
	parent.__width = this.setWidth;
	parent.__height = this.setHeight;
	parent.id = lime__$internal_backend_html5_HTML5Window.windowID++;
	if(((element) instanceof HTMLCanvasElement)) {
		this.canvas = element;
	} else if(this.renderType == "dom") {
		this.div = window.document.createElement("div");
	} else {
		this.canvas = window.document.createElement("canvas");
	}
	if(this.canvas != null) {
		var style = this.canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
	} else if(this.div != null) {
		var style = this.div.style;
		style.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style.setProperty("transform","translate3D(0,0,0)",null);
		style.position = "relative";
		style.overflow = "hidden";
		style.setProperty("-webkit-user-select","none",null);
		style.setProperty("-moz-user-select","none",null);
		style.setProperty("-ms-user-select","none",null);
		style.setProperty("-o-user-select","none",null);
	}
	if(parent.__width == 0 && parent.__height == 0) {
		if(element != null) {
			parent.__width = element.clientWidth;
			parent.__height = element.clientHeight;
		} else {
			parent.__width = window.innerWidth;
			parent.__height = window.innerHeight;
		}
		this.cacheElementWidth = parent.__width;
		this.cacheElementHeight = parent.__height;
		this.resizeElement = true;
	}
	if(this.canvas != null) {
		this.canvas.width = Math.round(parent.__width * this.scale);
		this.canvas.height = Math.round(parent.__height * this.scale);
		this.canvas.style.width = parent.__width + "px";
		this.canvas.style.height = parent.__height + "px";
	} else {
		this.div.style.width = parent.__width + "px";
		this.div.style.height = parent.__height + "px";
	}
	if(Object.prototype.hasOwnProperty.call(attributes,"resizable") && attributes.resizable || !Object.prototype.hasOwnProperty.call(attributes,"width") && this.setWidth == 0 && this.setHeight == 0) {
		parent.__resizable = true;
	}
	this.updateSize();
	if(element != null) {
		if(this.canvas != null) {
			if(element != this.canvas) {
				element.appendChild(this.canvas);
			}
		} else {
			element.appendChild(this.div);
		}
		var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
		var _g = 0;
		while(_g < events.length) {
			var event = events[_g];
			++_g;
			element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
		}
		element.addEventListener("contextmenu",$bind(this,this.handleContextMenuEvent),true);
		element.addEventListener("dragstart",$bind(this,this.handleDragEvent),true);
		element.addEventListener("dragover",$bind(this,this.handleDragEvent),true);
		element.addEventListener("drop",$bind(this,this.handleDragEvent),true);
		element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchcancel",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("gamepadconnected",$bind(this,this.handleGamepadEvent),true);
		element.addEventListener("gamepaddisconnected",$bind(this,this.handleGamepadEvent),true);
	}
	this.createContext();
	if(parent.context.type == "webgl") {
		this.canvas.addEventListener("webglcontextlost",$bind(this,this.handleContextEvent),false);
		this.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleContextEvent),false);
	}
};
$hxClasses["lime._internal.backend.html5.HTML5Window"] = lime__$internal_backend_html5_HTML5Window;
lime__$internal_backend_html5_HTML5Window.__name__ = "lime._internal.backend.html5.HTML5Window";
lime__$internal_backend_html5_HTML5Window.prototype = {
	alert: function(message,title) {
		if(message != null) {
			window.alert(Std.string(message));
		}
	}
	,close: function() {
		this.parent.application.__removeWindow(this.parent);
	}
	,createContext: function() {
		var context = new lime_graphics_RenderContext();
		var contextAttributes = this.parent.__attributes.context;
		context.window = this.parent;
		context.attributes = contextAttributes;
		if(this.div != null) {
			context.dom = this.div;
			context.type = "dom";
			context.version = "";
		} else if(this.canvas != null) {
			var webgl = null;
			var forceCanvas = this.renderType == "canvas";
			var forceWebGL = this.renderType == "opengl" || this.renderType == "opengles" || this.renderType == "webgl";
			var allowWebGL2 = !Object.prototype.hasOwnProperty.call(contextAttributes,"version") || contextAttributes.version != "1";
			var isWebGL2 = false;
			if(forceWebGL || !forceCanvas && (!Object.prototype.hasOwnProperty.call(contextAttributes,"hardware") || contextAttributes.hardware)) {
				var transparentBackground = Object.prototype.hasOwnProperty.call(contextAttributes,"background") && contextAttributes.background == null;
				var colorDepth = Object.prototype.hasOwnProperty.call(contextAttributes,"colorDepth") ? contextAttributes.colorDepth : 16;
				var options = Object.prototype.hasOwnProperty.call(contextAttributes,"antialiasing") && contextAttributes.antialiasing > 0;
				var options1 = Object.prototype.hasOwnProperty.call(contextAttributes,"depth") ? contextAttributes.depth : true;
				var options2 = Object.prototype.hasOwnProperty.call(contextAttributes,"stencil") && contextAttributes.stencil;
				var options3 = { alpha : transparentBackground || colorDepth > 16, antialias : options, depth : options1, premultipliedAlpha : true, stencil : options2, preserveDrawingBuffer : false, failIfMajorPerformanceCaveat : false};
				var glContextType = ["webgl","experimental-webgl"];
				if(allowWebGL2) {
					glContextType.unshift("webgl2");
				}
				var _g = 0;
				while(_g < glContextType.length) {
					var name = glContextType[_g];
					++_g;
					webgl = this.canvas.getContext(name,options3);
					if(webgl != null && name == "webgl2") {
						isWebGL2 = true;
					}
					if(webgl != null) {
						break;
					}
				}
			}
			if(webgl == null) {
				context.canvas2D = this.canvas.getContext("2d");
				context.type = "canvas";
				context.version = "";
			} else {
				context.webgl = lime_graphics_WebGLRenderContext.fromWebGL2RenderContext(webgl);
				if(isWebGL2) {
					context.webgl2 = webgl;
				}
				if(lime_graphics_opengl_GL.context == null) {
					lime_graphics_opengl_GL.context = webgl;
					lime_graphics_opengl_GL.type = "webgl";
					lime_graphics_opengl_GL.version = isWebGL2 ? 2 : 1;
				}
				context.type = "webgl";
				context.version = isWebGL2 ? "2" : "1";
			}
		}
		this.parent.context = context;
	}
	,focus: function() {
	}
	,focusTextInput: function() {
		var _gthis = this;
		if(this.__focusPending) {
			return;
		}
		this.__focusPending = true;
		haxe_Timer.delay(function() {
			_gthis.__focusPending = false;
			if(_gthis.textInputEnabled) {
				lime__$internal_backend_html5_HTML5Window.textInput.focus();
			}
		},20);
	}
	,getCursor: function() {
		return this.cursor;
	}
	,getDisplay: function() {
		return lime_system_System.getDisplay(0);
	}
	,getDisplayMode: function() {
		return lime_system_System.getDisplay(0).currentMode;
	}
	,getFrameRate: function() {
		if(this.parent.application == null) {
			return 0;
		}
		if(this.parent.application.__backend.framePeriod < 0) {
			return 60;
		} else if(this.parent.application.__backend.framePeriod == 1000) {
			return 0;
		} else {
			return 1000 / this.parent.application.__backend.framePeriod;
		}
	}
	,getMouseLock: function() {
		return false;
	}
	,getTextInputEnabled: function() {
		return this.textInputEnabled;
	}
	,handleContextEvent: function(event) {
		switch(event.type) {
		case "webglcontextlost":
			if(event.cancelable) {
				event.preventDefault();
			}
			var tmp = lime_graphics_opengl_GL.context != null;
			this.parent.context = null;
			this.parent.onRenderContextLost.dispatch();
			break;
		case "webglcontextrestored":
			this.createContext();
			this.parent.onRenderContextRestored.dispatch(this.parent.context);
			break;
		default:
		}
	}
	,handleContextMenuEvent: function(event) {
		if((this.parent.onMouseUp.canceled || this.parent.onMouseDown.canceled) && event.cancelable) {
			event.preventDefault();
		}
	}
	,handleCutOrCopyEvent: function(event) {
		var text = lime_system_Clipboard.get_text();
		if(text == null) {
			text = "";
		}
		event.clipboardData.setData("text/plain",text);
		if(event.cancelable) {
			event.preventDefault();
		}
	}
	,handleDragEvent: function(event) {
		switch(event.type) {
		case "dragover":
			event.preventDefault();
			return false;
		case "dragstart":
			if((js_Boot.__cast(event.target , HTMLElement)).nodeName.toLowerCase() == "img" && event.cancelable) {
				event.preventDefault();
				return false;
			}
			break;
		case "drop":
			if(event.dataTransfer != null && event.dataTransfer.files.length > 0) {
				this.parent.onDropFile.dispatch(event.dataTransfer.files);
				event.preventDefault();
				return false;
			}
			break;
		}
		return true;
	}
	,handleFocusEvent: function(event) {
		if(this.textInputEnabled) {
			if(event.relatedTarget == null || this.isDescendent(event.relatedTarget)) {
				this.focusTextInput();
			}
		}
	}
	,handleFullscreenEvent: function(event) {
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
		if(fullscreenElement != null) {
			this.isFullscreen = true;
			this.parent.__fullscreen = true;
			if(this.requestedFullscreen) {
				this.requestedFullscreen = false;
				this.parent.onFullscreen.dispatch();
			}
		} else {
			this.isFullscreen = false;
			this.parent.__fullscreen = false;
			this.parent.onRestore.dispatch();
			var changeEvents = ["fullscreenchange","mozfullscreenchange","webkitfullscreenchange","MSFullscreenChange"];
			var errorEvents = ["fullscreenerror","mozfullscreenerror","webkitfullscreenerror","MSFullscreenError"];
			var _g = 0;
			var _g1 = changeEvents.length;
			while(_g < _g1) {
				var i = _g++;
				window.document.removeEventListener(changeEvents[i],$bind(this,this.handleFullscreenEvent),false);
				window.document.removeEventListener(errorEvents[i],$bind(this,this.handleFullscreenEvent),false);
			}
		}
	}
	,handleGamepadEvent: function(event) {
		switch(event.type) {
		case "gamepadconnected":
			lime_ui_Joystick.__connect(event.gamepad.index);
			if(event.gamepad.mapping == "standard") {
				lime_ui_Gamepad.__connect(event.gamepad.index);
			}
			break;
		case "gamepaddisconnected":
			lime_ui_Joystick.__disconnect(event.gamepad.index);
			lime_ui_Gamepad.__disconnect(event.gamepad.index);
			break;
		default:
		}
	}
	,handleInputEvent: function(event) {
		if(this.imeCompositionActive) {
			return;
		}
		if(lime__$internal_backend_html5_HTML5Window.textInput.value != lime__$internal_backend_html5_HTML5Window.dummyCharacter) {
			var value = StringTools.replace(lime__$internal_backend_html5_HTML5Window.textInput.value,lime__$internal_backend_html5_HTML5Window.dummyCharacter,"");
			if(value.length > 0) {
				this.parent.onTextInput.dispatch(value);
			}
			lime__$internal_backend_html5_HTML5Window.textInput.value = lime__$internal_backend_html5_HTML5Window.dummyCharacter;
		}
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.parent.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect = this.div.getBoundingClientRect();
					x = event.clientX - rect.left;
					y = event.clientY - rect.top;
				} else {
					var rect = this.parent.element.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			switch(event.type) {
			case "mousedown":
				if(event.currentTarget == this.parent.element) {
					window.addEventListener("mouseup",$bind(this,this.handleMouseEvent));
				}
				this.parent.onMouseDown.dispatch(x,y,event.button);
				if(this.parent.onMouseDown.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			case "mouseenter":
				if(event.target == this.parent.element) {
					this.parent.onEnter.dispatch();
					if(this.parent.onEnter.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseleave":
				if(event.target == this.parent.element) {
					this.parent.onLeave.dispatch();
					if(this.parent.onLeave.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mousemove":
				if(x != this.cacheMouseX || y != this.cacheMouseY) {
					this.parent.onMouseMove.dispatch(x,y);
					this.parent.onMouseMoveRelative.dispatch(x - this.cacheMouseX,y - this.cacheMouseY);
					if((this.parent.onMouseMove.canceled || this.parent.onMouseMoveRelative.canceled) && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseup":
				window.removeEventListener("mouseup",$bind(this,this.handleMouseEvent));
				if(event.currentTarget == this.parent.element) {
					event.stopPropagation();
				}
				this.parent.onMouseUp.dispatch(x,y,event.button);
				if(this.parent.onMouseUp.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			default:
			}
			this.cacheMouseX = x;
			this.cacheMouseY = y;
		} else {
			var deltaMode;
			switch(event.deltaMode) {
			case 0:
				deltaMode = lime_ui_MouseWheelMode.PIXELS;
				break;
			case 1:
				deltaMode = lime_ui_MouseWheelMode.LINES;
				break;
			case 2:
				deltaMode = lime_ui_MouseWheelMode.PAGES;
				break;
			default:
				deltaMode = lime_ui_MouseWheelMode.UNKNOWN;
			}
			this.parent.onMouseWheel.dispatch(event.deltaX,-event.deltaY,deltaMode);
			if(this.parent.onMouseWheel.canceled && event.cancelable) {
				event.preventDefault();
			}
		}
	}
	,handlePasteEvent: function(event) {
		if(event.clipboardData.types.indexOf("text/plain") > -1) {
			var text = event.clipboardData.getData("text/plain");
			lime_system_Clipboard.set_text(text);
			if(this.textInputEnabled) {
				this.parent.onTextInput.dispatch(text);
			}
			if(event.cancelable) {
				event.preventDefault();
			}
		}
	}
	,handleResizeEvent: function(event) {
		this.primaryTouch = null;
		this.updateSize();
	}
	,handleTouchEvent: function(event) {
		if(event.cancelable) {
			event.preventDefault();
		}
		var rect = null;
		if(this.parent.element != null) {
			if(this.canvas != null) {
				rect = this.canvas.getBoundingClientRect();
			} else if(this.div != null) {
				rect = this.div.getBoundingClientRect();
			} else {
				rect = this.parent.element.getBoundingClientRect();
			}
		}
		var windowWidth = this.setWidth;
		var windowHeight = this.setHeight;
		if(windowWidth == 0 || windowHeight == 0) {
			if(rect != null) {
				windowWidth = rect.width;
				windowHeight = rect.height;
			} else {
				windowWidth = 1;
				windowHeight = 1;
			}
		}
		var touch;
		var x;
		var y;
		var cacheX;
		var cacheY;
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			x = 0.0;
			y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (windowWidth / rect.width);
				y = (data.clientY - rect.top) * (windowHeight / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			if(event.type == "touchstart") {
				touch = this.unusedTouchesPool.pop();
				if(touch == null) {
					touch = new lime_ui_Touch(x / windowWidth,y / windowHeight,data.identifier,0,0,data.force,this.parent.id);
				} else {
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.h[data.identifier] = touch;
				lime_ui_Touch.onStart.dispatch(touch);
				if(this.primaryTouch == null) {
					this.primaryTouch = touch;
				}
				if(touch == this.primaryTouch) {
					this.parent.onMouseDown.dispatch(x,y,0);
				}
			} else {
				touch = this.currentTouches.h[data.identifier];
				if(touch != null) {
					cacheX = touch.x;
					cacheY = touch.y;
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.dx = touch.x - cacheX;
					touch.dy = touch.y - cacheY;
					touch.pressure = data.force;
					switch(event.type) {
					case "touchcancel":
						lime_ui_Touch.onCancel.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.primaryTouch = null;
						}
						break;
					case "touchend":
						lime_ui_Touch.onEnd.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseUp.dispatch(x,y,0);
							this.primaryTouch = null;
						}
						break;
					case "touchmove":
						lime_ui_Touch.onMove.dispatch(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseMove.dispatch(x,y);
						}
						break;
					default:
					}
				}
			}
		}
	}
	,isDescendent: function(node) {
		if(node == this.parent.element) {
			return true;
		}
		while(node != null) {
			if(node.parentNode == this.parent.element) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}
	,move: function(x,y) {
	}
	,readPixels: function(rect) {
		if(this.canvas != null) {
			var stageRect = new lime_math_Rectangle(0,0,this.canvas.width,this.canvas.height);
			if(rect == null) {
				rect = stageRect;
			} else {
				rect.intersection(stageRect,rect);
			}
			if(rect.width > 0 && rect.height > 0) {
				var canvas2 = window.document.createElement("canvas");
				canvas2.width = rect.width | 0;
				canvas2.height = rect.height | 0;
				var context = canvas2.getContext("2d");
				context.drawImage(this.canvas,-rect.x,-rect.y);
				return lime_graphics_Image.fromCanvas(canvas2);
			}
		}
		return null;
	}
	,resize: function(width,height) {
	}
	,setBorderless: function(value) {
		return value;
	}
	,setClipboard: function(value) {
		if(lime__$internal_backend_html5_HTML5Window.textArea == null) {
			lime__$internal_backend_html5_HTML5Window.textArea = window.document.createElement("textarea");
			lime__$internal_backend_html5_HTML5Window.textArea.style.height = "0px";
			lime__$internal_backend_html5_HTML5Window.textArea.style.left = "-100px";
			lime__$internal_backend_html5_HTML5Window.textArea.style.opacity = "0";
			lime__$internal_backend_html5_HTML5Window.textArea.style.position = "fixed";
			lime__$internal_backend_html5_HTML5Window.textArea.style.top = "-100px";
			lime__$internal_backend_html5_HTML5Window.textArea.style.width = "0px";
			window.document.body.appendChild(lime__$internal_backend_html5_HTML5Window.textArea);
		}
		lime__$internal_backend_html5_HTML5Window.textArea.value = value;
		lime__$internal_backend_html5_HTML5Window.textArea.focus();
		lime__$internal_backend_html5_HTML5Window.textArea.select();
		if(window.document.queryCommandEnabled("copy")) {
			window.document.execCommand("copy");
		}
		if(this.textInputEnabled) {
			this.focusTextInput();
		}
	}
	,setCursor: function(value) {
		if(this.cursor != value) {
			if(value == null) {
				this.parent.element.style.cursor = "none";
			} else {
				var tmp;
				switch(value._hx_index) {
				case 0:
					tmp = "default";
					break;
				case 1:
					tmp = "crosshair";
					break;
				case 3:
					tmp = "move";
					break;
				case 4:
					tmp = "pointer";
					break;
				case 5:
					tmp = "nesw-resize";
					break;
				case 6:
					tmp = "ns-resize";
					break;
				case 7:
					tmp = "nwse-resize";
					break;
				case 8:
					tmp = "ew-resize";
					break;
				case 9:
					tmp = "text";
					break;
				case 10:
					tmp = "wait";
					break;
				case 11:
					tmp = "wait";
					break;
				default:
					tmp = "auto";
				}
				this.parent.element.style.cursor = tmp;
			}
			this.cursor = value;
		}
		return this.cursor;
	}
	,setDisplayMode: function(value) {
		return value;
	}
	,setFrameRate: function(value) {
		if(this.parent.application != null) {
			if(value >= 60) {
				if(this.parent == this.parent.application.__window) {
					this.parent.application.__backend.framePeriod = -1;
				}
			} else if(value > 0) {
				if(this.parent == this.parent.application.__window) {
					this.parent.application.__backend.framePeriod = 1000 / value;
				}
			} else if(this.parent == this.parent.application.__window) {
				this.parent.application.__backend.framePeriod = 1000;
			}
		}
		return value;
	}
	,setFullscreen: function(value) {
		if(value) {
			if(!this.requestedFullscreen && !this.isFullscreen) {
				this.requestedFullscreen = true;
				if(($_=this.parent.element,$bind($_,$_.requestFullscreen))) {
					document.addEventListener("fullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("fullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.requestFullscreen();
				} else if(this.parent.element.mozRequestFullScreen) {
					document.addEventListener("mozfullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("mozfullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.mozRequestFullScreen();
				} else if(this.parent.element.webkitRequestFullscreen) {
					document.addEventListener("webkitfullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("webkitfullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.webkitRequestFullscreen();
				} else if(this.parent.element.msRequestFullscreen) {
					document.addEventListener("MSFullscreenChange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("MSFullscreenError",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.msRequestFullscreen();
				}
			}
		} else if(this.isFullscreen) {
			this.requestedFullscreen = false;
			if(document.exitFullscreen) {
				document.exitFullscreen();
			} else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if(document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		return value;
	}
	,setIcon: function(image) {
		lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image);
		var link = window.document.querySelector("link[rel*='icon']");
		if(link == null) {
			link = window.document.createElement("link");
		}
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = image.buffer.get_src().toDataURL("image/x-icon");
		window.document.getElementsByTagName("head")[0].appendChild(link);
	}
	,setMaximized: function(value) {
		return false;
	}
	,setMinimized: function(value) {
		return false;
	}
	,setMouseLock: function(value) {
	}
	,setResizable: function(value) {
		return value;
	}
	,setTextInputEnabled: function(value) {
		if(value) {
			if(lime__$internal_backend_html5_HTML5Window.textInput == null) {
				lime__$internal_backend_html5_HTML5Window.textInput = window.document.createElement("input");
				var tmp = $global.navigator.userAgent.indexOf("Android") >= 0 ? "password" : "text";
				lime__$internal_backend_html5_HTML5Window.textInput.type = tmp;
				lime__$internal_backend_html5_HTML5Window.textInput.style.position = "absolute";
				lime__$internal_backend_html5_HTML5Window.textInput.style.opacity = "0";
				lime__$internal_backend_html5_HTML5Window.textInput.style.color = "transparent";
				lime__$internal_backend_html5_HTML5Window.textInput.value = lime__$internal_backend_html5_HTML5Window.dummyCharacter;
				lime__$internal_backend_html5_HTML5Window.textInput.autocapitalize = "off";
				lime__$internal_backend_html5_HTML5Window.textInput.autocorrect = "off";
				lime__$internal_backend_html5_HTML5Window.textInput.autocomplete = "off";
				lime__$internal_backend_html5_HTML5Window.textInput.style.left = "0px";
				lime__$internal_backend_html5_HTML5Window.textInput.style.top = "50%";
				if(new EReg("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					lime__$internal_backend_html5_HTML5Window.textInput.style.fontSize = "0px";
					lime__$internal_backend_html5_HTML5Window.textInput.style.width = "0px";
					lime__$internal_backend_html5_HTML5Window.textInput.style.height = "0px";
				} else {
					lime__$internal_backend_html5_HTML5Window.textInput.style.width = "1px";
					lime__$internal_backend_html5_HTML5Window.textInput.style.height = "1px";
				}
				lime__$internal_backend_html5_HTML5Window.textInput.style.pointerEvents = "none";
				lime__$internal_backend_html5_HTML5Window.textInput.style.zIndex = "-10000000";
			}
			if(lime__$internal_backend_html5_HTML5Window.textInput.parentNode == null) {
				this.parent.element.appendChild(lime__$internal_backend_html5_HTML5Window.textInput);
			}
			if(!this.textInputEnabled) {
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("paste",$bind(this,this.handlePasteEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("compositionstart",$bind(this,this.handleCompositionstartEvent),true);
				lime__$internal_backend_html5_HTML5Window.textInput.addEventListener("compositionend",$bind(this,this.handleCompositionendEvent),true);
			}
			lime__$internal_backend_html5_HTML5Window.textInput.focus();
			lime__$internal_backend_html5_HTML5Window.textInput.select();
		} else if(lime__$internal_backend_html5_HTML5Window.textInput != null) {
			lime__$internal_backend_html5_HTML5Window.textInput.blur();
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("paste",$bind(this,this.handlePasteEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("compositionstart",$bind(this,this.handleCompositionstartEvent),true);
			lime__$internal_backend_html5_HTML5Window.textInput.removeEventListener("compositionend",$bind(this,this.handleCompositionendEvent),true);
		}
		return this.textInputEnabled = value;
	}
	,setTextInputRect: function(value) {
		return this.textInputRect = value;
	}
	,handleCompositionstartEvent: function(e) {
		this.imeCompositionActive = true;
	}
	,handleCompositionendEvent: function(e) {
		this.imeCompositionActive = false;
		this.handleInputEvent(e);
	}
	,setTitle: function(value) {
		if(value != null) {
			window.document.title = value;
		}
		return value;
	}
	,updateSize: function() {
		if(!this.parent.__resizable) {
			return;
		}
		var elementWidth;
		var elementHeight;
		if(this.parent.element != null) {
			elementWidth = this.parent.element.clientWidth;
			elementHeight = this.parent.element.clientHeight;
		} else {
			elementWidth = window.innerWidth;
			elementHeight = window.innerHeight;
		}
		if(elementWidth != this.cacheElementWidth || elementHeight != this.cacheElementHeight) {
			this.cacheElementWidth = elementWidth;
			this.cacheElementHeight = elementHeight;
			var stretch = this.resizeElement || this.setWidth == 0 && this.setHeight == 0;
			if(this.parent.element != null && (this.div == null || this.div != null && stretch)) {
				if(stretch) {
					if(this.parent.__width != elementWidth || this.parent.__height != elementHeight) {
						this.parent.__width = elementWidth;
						this.parent.__height = elementHeight;
						if(this.canvas != null) {
							if(this.parent.element != this.canvas) {
								this.canvas.width = Math.round(elementWidth * this.scale);
								this.canvas.height = Math.round(elementHeight * this.scale);
								this.canvas.style.width = elementWidth + "px";
								this.canvas.style.height = elementHeight + "px";
							}
						} else {
							this.div.style.width = elementWidth + "px";
							this.div.style.height = elementHeight + "px";
						}
						this.parent.onResize.dispatch(elementWidth,elementHeight);
					}
				} else {
					var scaleX = this.setWidth != 0 ? elementWidth / this.setWidth : 1;
					var scaleY = this.setHeight != 0 ? elementHeight / this.setHeight : 1;
					var targetWidth = elementWidth;
					var targetHeight = elementHeight;
					var marginLeft = 0;
					var marginTop = 0;
					if(scaleX < scaleY) {
						targetHeight = Math.floor(this.setHeight * scaleX);
						marginTop = Math.floor((elementHeight - targetHeight) / 2);
					} else {
						targetWidth = Math.floor(this.setWidth * scaleY);
						marginLeft = Math.floor((elementWidth - targetWidth) / 2);
					}
					if(this.canvas != null) {
						if(this.parent.element != this.canvas) {
							this.canvas.style.width = targetWidth + "px";
							this.canvas.style.height = targetHeight + "px";
							this.canvas.style.marginLeft = marginLeft + "px";
							this.canvas.style.marginTop = marginTop + "px";
						}
					} else {
						this.div.style.width = targetWidth + "px";
						this.div.style.height = targetHeight + "px";
						this.div.style.marginLeft = marginLeft + "px";
						this.div.style.marginTop = marginTop + "px";
					}
				}
			}
		}
	}
	,warpMouse: function(x,y) {
	}
	,__class__: lime__$internal_backend_html5_HTML5Window
};
var lime__$internal_backend_native_NativeCFFI = function() { };
$hxClasses["lime._internal.backend.native.NativeCFFI"] = lime__$internal_backend_native_NativeCFFI;
lime__$internal_backend_native_NativeCFFI.__name__ = "lime._internal.backend.native.NativeCFFI";
var lime__$internal_format_BMP = function() { };
$hxClasses["lime._internal.format.BMP"] = lime__$internal_format_BMP;
lime__$internal_format_BMP.__name__ = "lime._internal.format.BMP";
lime__$internal_format_BMP.encode = function(image,type) {
	if(image.get_premultiplied() || image.get_format() != 0) {
		image = image.clone();
		image.set_premultiplied(false);
		image.set_format(0);
	}
	if(type == null) {
		type = lime__$internal_format_BMPType.RGB;
	}
	var fileHeaderLength = 14;
	var infoHeaderLength = 40;
	var pixelValuesLength = image.width * image.height * 4;
	if(type != null) {
		switch(type._hx_index) {
		case 0:
			pixelValuesLength = (image.width * 3 + image.width * 3 % 4) * image.height;
			break;
		case 1:
			infoHeaderLength = 108;
			break;
		case 2:
			fileHeaderLength = 0;
			pixelValuesLength += image.width * image.height;
			break;
		}
	}
	var data = new haxe_io_Bytes(new ArrayBuffer(fileHeaderLength + infoHeaderLength + pixelValuesLength));
	var position = 0;
	if(fileHeaderLength > 0) {
		data.b[position++] = 66;
		data.b[position++] = 77;
		data.setInt32(position,data.length);
		position += 4;
		data.setUInt16(position,0);
		position += 2;
		data.setUInt16(position,0);
		position += 2;
		data.setInt32(position,fileHeaderLength + infoHeaderLength);
		position += 4;
	}
	data.setInt32(position,infoHeaderLength);
	position += 4;
	data.setInt32(position,image.width);
	position += 4;
	data.setInt32(position,type == lime__$internal_format_BMPType.ICO ? image.height * 2 : image.height);
	position += 4;
	data.setUInt16(position,1);
	position += 2;
	data.setUInt16(position,type == lime__$internal_format_BMPType.RGB ? 24 : 32);
	position += 2;
	data.setInt32(position,type == lime__$internal_format_BMPType.BITFIELD ? 3 : 0);
	position += 4;
	data.setInt32(position,pixelValuesLength);
	position += 4;
	data.setInt32(position,11824);
	position += 4;
	data.setInt32(position,11824);
	position += 4;
	data.setInt32(position,0);
	position += 4;
	data.setInt32(position,0);
	position += 4;
	if(type == lime__$internal_format_BMPType.BITFIELD) {
		data.setInt32(position,16711680);
		position += 4;
		data.setInt32(position,65280);
		position += 4;
		data.setInt32(position,255);
		position += 4;
		data.setInt32(position,-16777216);
		position += 4;
		data.b[position++] = 32;
		data.b[position++] = 110;
		data.b[position++] = 105;
		data.b[position++] = 87;
		var _g = 0;
		while(_g < 48) {
			var i = _g++;
			data.b[position++] = 0;
		}
	}
	var pixels = image.getPixels(new lime_math_Rectangle(0,0,image.width,image.height),1);
	var readPosition = 0;
	var a;
	var r;
	var g;
	var b;
	if(type != null) {
		switch(type._hx_index) {
		case 0:
			var _g = 0;
			var _g1 = image.height;
			while(_g < _g1) {
				var y = _g++;
				readPosition = (image.height - 1 - y) * 4 * image.width;
				var _g2 = 0;
				var _g3 = image.width;
				while(_g2 < _g3) {
					var x = _g2++;
					a = pixels.b[readPosition++];
					r = pixels.b[readPosition++];
					g = pixels.b[readPosition++];
					b = pixels.b[readPosition++];
					data.b[position++] = b & 255;
					data.b[position++] = g & 255;
					data.b[position++] = r & 255;
				}
				var _g4 = 0;
				var _g5 = image.width * 3 % 4;
				while(_g4 < _g5) {
					var i = _g4++;
					data.b[position++] = 0;
				}
			}
			break;
		case 1:
			var _g = 0;
			var _g1 = image.height;
			while(_g < _g1) {
				var y = _g++;
				readPosition = (image.height - 1 - y) * 4 * image.width;
				var _g2 = 0;
				var _g3 = image.width;
				while(_g2 < _g3) {
					var x = _g2++;
					a = pixels.b[readPosition++];
					r = pixels.b[readPosition++];
					g = pixels.b[readPosition++];
					b = pixels.b[readPosition++];
					data.b[position++] = b & 255;
					data.b[position++] = g & 255;
					data.b[position++] = r & 255;
					data.b[position++] = a & 255;
				}
			}
			break;
		case 2:
			var andMask = new haxe_io_Bytes(new ArrayBuffer(image.width * image.height));
			var maskPosition = 0;
			var _g = 0;
			var _g1 = image.height;
			while(_g < _g1) {
				var y = _g++;
				readPosition = (image.height - 1 - y) * 4 * image.width;
				var _g2 = 0;
				var _g3 = image.width;
				while(_g2 < _g3) {
					var x = _g2++;
					a = pixels.b[readPosition++];
					r = pixels.b[readPosition++];
					g = pixels.b[readPosition++];
					b = pixels.b[readPosition++];
					data.b[position++] = b & 255;
					data.b[position++] = g & 255;
					data.b[position++] = r & 255;
					data.b[position++] = a & 255;
					andMask.b[maskPosition++] = 0;
				}
			}
			data.blit(position,andMask,0,image.width * image.height);
			break;
		}
	}
	return data;
};
var lime__$internal_format_BMPType = $hxEnums["lime._internal.format.BMPType"] = { __ename__:"lime._internal.format.BMPType",__constructs__:null
	,RGB: {_hx_name:"RGB",_hx_index:0,__enum__:"lime._internal.format.BMPType",toString:$estr}
	,BITFIELD: {_hx_name:"BITFIELD",_hx_index:1,__enum__:"lime._internal.format.BMPType",toString:$estr}
	,ICO: {_hx_name:"ICO",_hx_index:2,__enum__:"lime._internal.format.BMPType",toString:$estr}
};
lime__$internal_format_BMPType.__constructs__ = [lime__$internal_format_BMPType.RGB,lime__$internal_format_BMPType.BITFIELD,lime__$internal_format_BMPType.ICO];
var lime__$internal_format_Base64 = function() { };
$hxClasses["lime._internal.format.Base64"] = lime__$internal_format_Base64;
lime__$internal_format_Base64.__name__ = "lime._internal.format.Base64";
lime__$internal_format_Base64.decode = function(source) {
	return haxe_crypto_Base64.decode(source);
};
lime__$internal_format_Base64.encode = function(source) {
	var result = [];
	var dictionary = lime__$internal_format_Base64.DICTIONARY;
	var extendedDictionary = lime__$internal_format_Base64.EXTENDED_DICTIONARY;
	var numBytes = source.length;
	var numInputTriplets = Math.floor(numBytes / 3);
	var numChunksToWrite = numInputTriplets * 2;
	result.length = Math.ceil(numBytes / 3) * 2;
	var numBytesRead = 0;
	var numChunksWritten = 0;
	var inputTriplet;
	while(numChunksWritten < numChunksToWrite) {
		inputTriplet = source.b[numBytesRead] << 16 | source.b[numBytesRead + 1] << 8 | source.b[numBytesRead + 2];
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = extendedDictionary[inputTriplet & 4095];
		numBytesRead += 3;
		numChunksWritten += 2;
	}
	switch(numBytes - numInputTriplets * 3) {
	case 1:
		inputTriplet = source.b[numBytesRead] << 16;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = "==";
		break;
	case 2:
		inputTriplet = source.b[numBytesRead] << 16 | source.b[numBytesRead + 1] << 8;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = dictionary[inputTriplet >> 6 & 63] + "=";
		break;
	default:
	}
	return result.join("");
};
var lime__$internal_format_Deflate = function() { };
$hxClasses["lime._internal.format.Deflate"] = lime__$internal_format_Deflate;
lime__$internal_format_Deflate.__name__ = "lime._internal.format.Deflate";
lime__$internal_format_Deflate.compress = function(bytes) {
	var data = pako.deflateRaw(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
lime__$internal_format_Deflate.decompress = function(bytes) {
	var data = pako.inflateRaw(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_format_GZip = function() { };
$hxClasses["lime._internal.format.GZip"] = lime__$internal_format_GZip;
lime__$internal_format_GZip.__name__ = "lime._internal.format.GZip";
lime__$internal_format_GZip.compress = function(bytes) {
	var data = pako.gzip(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
lime__$internal_format_GZip.decompress = function(bytes) {
	var data = pako.ungzip(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_format_JPEG = function() { };
$hxClasses["lime._internal.format.JPEG"] = lime__$internal_format_JPEG;
lime__$internal_format_JPEG.__name__ = "lime._internal.format.JPEG";
lime__$internal_format_JPEG.decodeBytes = function(bytes,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
};
lime__$internal_format_JPEG.decodeFile = function(path,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
};
lime__$internal_format_JPEG.encode = function(image,quality) {
	if(image.get_premultiplied() || image.get_format() != 0) {
		image = image.clone();
		image.set_premultiplied(false);
		image.set_format(0);
	}
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,false);
	if(image.buffer.__srcCanvas != null) {
		var data = image.buffer.__srcCanvas.toDataURL("image/jpeg",quality / 100);
		var buffer = window.atob(data.split(";base64,")[1]);
		var bytes = new haxe_io_Bytes(new ArrayBuffer(buffer.length));
		var _g = 0;
		var _g1 = buffer.length;
		while(_g < _g1) {
			var i = _g++;
			bytes.b[i] = HxOverrides.cca(buffer,i) & 255;
		}
		return bytes;
	}
	return null;
};
var lime__$internal_format_LZMA = function() { };
$hxClasses["lime._internal.format.LZMA"] = lime__$internal_format_LZMA;
lime__$internal_format_LZMA.__name__ = "lime._internal.format.LZMA";
lime__$internal_format_LZMA.compress = function(bytes) {
	return null;
};
lime__$internal_format_LZMA.decompress = function(bytes) {
	return null;
};
var lime__$internal_format_PNG = function() { };
$hxClasses["lime._internal.format.PNG"] = lime__$internal_format_PNG;
lime__$internal_format_PNG.__name__ = "lime._internal.format.PNG";
lime__$internal_format_PNG.decodeBytes = function(bytes,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
};
lime__$internal_format_PNG.decodeFile = function(path,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
};
lime__$internal_format_PNG.encode = function(image) {
	if(image.get_premultiplied() || image.get_format() != 0) {
		image = image.clone();
		image.set_premultiplied(false);
		image.set_format(0);
	}
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,false);
	if(image.buffer.__srcCanvas != null) {
		var data = image.buffer.__srcCanvas.toDataURL("image/png");
		var buffer = window.atob(data.split(";base64,")[1]);
		var bytes = new haxe_io_Bytes(new ArrayBuffer(buffer.length));
		var _g = 0;
		var _g1 = buffer.length;
		while(_g < _g1) {
			var i = _g++;
			bytes.b[i] = HxOverrides.cca(buffer,i) & 255;
		}
		return bytes;
	}
	return null;
};
var lime__$internal_format_Zlib = function() { };
$hxClasses["lime._internal.format.Zlib"] = lime__$internal_format_Zlib;
lime__$internal_format_Zlib.__name__ = "lime._internal.format.Zlib";
lime__$internal_format_Zlib.compress = function(bytes) {
	var data = pako.deflate(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
lime__$internal_format_Zlib.decompress = function(bytes) {
	var data = pako.inflate(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_graphics_ImageCanvasUtil = function() { };
$hxClasses["lime._internal.graphics.ImageCanvasUtil"] = lime__$internal_graphics_ImageCanvasUtil;
lime__$internal_graphics_ImageCanvasUtil.__name__ = "lime._internal.graphics.ImageCanvasUtil";
lime__$internal_graphics_ImageCanvasUtil.colorTransform = function(image,rect,colorMatrix) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.colorTransform(image,rect,colorMatrix);
};
lime__$internal_graphics_ImageCanvasUtil.convertToCanvas = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.__srcCanvas == null && buffer.data != null) {
		image.set_transparent(true);
		lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
	} else if(image.type == lime_graphics_ImageType.DATA && buffer.__srcImageData != null && image.dirty) {
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
		image.dirty = false;
	}
	if(clear) {
		buffer.data = null;
		buffer.__srcImageData = null;
	} else if(buffer.data == null && buffer.__srcImageData != null) {
		buffer.data = buffer.__srcImageData.data;
	}
	image.type = lime_graphics_ImageType.CANVAS;
};
lime__$internal_graphics_ImageCanvasUtil.convertToData = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image);
	}
	if(buffer.__srcCanvas != null && buffer.data == null) {
		lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		if(image.type == lime_graphics_ImageType.CANVAS) {
			image.dirty = false;
		}
	} else if(image.type == lime_graphics_ImageType.CANVAS && buffer.__srcCanvas != null && image.dirty) {
		if(buffer.__srcImageData == null) {
			lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		} else {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
			var elements = buffer.__srcImageData.data.buffer;
			var array = null;
			var view = null;
			var buffer1 = null;
			var len = null;
			var this1;
			if(elements != null) {
				this1 = new Uint8Array(elements);
			} else if(array != null) {
				this1 = new Uint8Array(array);
			} else if(view != null) {
				this1 = new Uint8Array(view);
			} else if(buffer1 != null) {
				if(len == null) {
					this1 = new Uint8Array(buffer1,0);
				} else {
					this1 = new Uint8Array(buffer1,0,len);
				}
			} else {
				this1 = null;
			}
			buffer.data = this1;
		}
		image.dirty = false;
	}
	if(clear) {
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
	image.type = lime_graphics_ImageType.DATA;
};
lime__$internal_graphics_ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
};
lime__$internal_graphics_ImageCanvasUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) {
		mergeAlpha = false;
	}
	if(destPoint == null || destPoint.x >= image.width || destPoint.y >= image.height || sourceRect == null || sourceRect.width < 1 || sourceRect.height < 1) {
		return;
	}
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) {
			alphaPoint = new lime_math_Vector2();
		}
		var tempData = sourceImage.clone();
		tempData.copyChannel(alphaImage,new lime_math_Rectangle(sourceRect.x + alphaPoint.x,sourceRect.y + alphaPoint.y,sourceRect.width,sourceRect.height),new lime_math_Vector2(sourceRect.x,sourceRect.y),lime_graphics_ImageChannel.ALPHA,lime_graphics_ImageChannel.ALPHA);
		sourceImage = tempData;
	}
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,true);
	if(!mergeAlpha) {
		if(image.get_transparent() && sourceImage.get_transparent()) {
			image.buffer.__srcContext.clearRect(destPoint.x + image.offsetX,destPoint.y + image.offsetY,sourceRect.width + image.offsetX,sourceRect.height + image.offsetY);
		}
	}
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(sourceImage);
	if(sourceImage.buffer.get_src() != null) {
		image.buffer.__srcContext.globalCompositeOperation = "source-over";
		image.buffer.__srcContext.drawImage(sourceImage.buffer.get_src(),sourceRect.x + sourceImage.offsetX | 0,sourceRect.y + sourceImage.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x + image.offsetX | 0,destPoint.y + image.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) {
				buffer.__srcCanvas.setAttribute("moz-opaque","true");
			}
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else {
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		}
	}
};
lime__$internal_graphics_ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
		} else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
		var array = null;
		var view = null;
		var buffer1 = null;
		var len = null;
		var this1;
		if(elements != null) {
			this1 = new Uint8Array(elements);
		} else if(array != null) {
			this1 = new Uint8Array(array);
		} else if(view != null) {
			this1 = new Uint8Array(view);
		} else if(buffer1 != null) {
			if(len == null) {
				this1 = new Uint8Array(buffer1,0);
			} else {
				this1 = new Uint8Array(buffer1,0,len);
			}
		} else {
			this1 = null;
		}
		buffer.data = this1;
	}
};
lime__$internal_graphics_ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image);
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		a = image.get_transparent() ? color >> 24 & 255 : 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		a = image.get_transparent() ? color & 255 : 255;
	}
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && a == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	if(a < 255) {
		image.buffer.__srcContext.clearRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	if(a > 0) {
		image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageCanvasUtil.floodFill = function(image,x,y,color,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.floodFill(image,x,y,color,format);
};
lime__$internal_graphics_ImageCanvasUtil.getPixel = function(image,x,y,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	return lime__$internal_graphics_ImageDataUtil.getPixel(image,x,y,format);
};
lime__$internal_graphics_ImageCanvasUtil.getPixel32 = function(image,x,y,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	return lime__$internal_graphics_ImageDataUtil.getPixel32(image,x,y,format);
};
lime__$internal_graphics_ImageCanvasUtil.getPixels = function(image,rect,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	return lime__$internal_graphics_ImageDataUtil.getPixels(image,rect,format);
};
lime__$internal_graphics_ImageCanvasUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.merge(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
};
lime__$internal_graphics_ImageCanvasUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(buffer.get_src(),0,0,newWidth,newHeight);
	} else {
		lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,true);
		var sourceCanvas = buffer.__srcCanvas;
		buffer.__srcCanvas = null;
		lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(sourceCanvas,0,0,newWidth,newHeight);
	}
	buffer.__srcImageData = null;
	buffer.data = null;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageCanvasUtil.scroll = function(image,x,y) {
	if(x % image.width == 0 && y % image.height == 0) {
		return;
	}
	var copy = image.clone();
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,true);
	image.buffer.__srcContext.clearRect(x,y,image.width,image.height);
	image.buffer.__srcContext.drawImage(copy.get_src(),x,y);
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageCanvasUtil.setPixel = function(image,x,y,color,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.setPixel(image,x,y,color,format);
};
lime__$internal_graphics_ImageCanvasUtil.setPixel32 = function(image,x,y,color,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.setPixel32(image,x,y,color,format);
};
lime__$internal_graphics_ImageCanvasUtil.setPixels = function(image,rect,bytePointer,format,endian) {
	lime__$internal_graphics_ImageCanvasUtil.convertToData(image);
	lime__$internal_graphics_ImageDataUtil.setPixels(image,rect,bytePointer,format,endian);
};
lime__$internal_graphics_ImageCanvasUtil.sync = function(image,clear) {
	if(image == null) {
		return;
	}
	if(image.type == lime_graphics_ImageType.CANVAS && (image.buffer.__srcCanvas != null || image.buffer.data != null)) {
		lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image,clear);
	} else if(image.type == lime_graphics_ImageType.DATA) {
		lime__$internal_graphics_ImageCanvasUtil.convertToData(image,clear);
	}
};
var lime__$internal_graphics_ImageDataUtil = function() { };
$hxClasses["lime._internal.graphics.ImageDataUtil"] = lime__$internal_graphics_ImageDataUtil;
lime__$internal_graphics_ImageDataUtil.__name__ = "lime._internal.graphics.ImageDataUtil";
lime__$internal_graphics_ImageDataUtil.displaceMap = function(target,source,map,mapPoint,componentX,componentY,smooth) {
	var targetData = target.buffer.data;
	var sourceData = source.buffer.data;
	var mapData = map.buffer.data;
	var targetFormat = target.buffer.format;
	var sourceFormat = source.buffer.format;
	var mapFormat = map.buffer.format;
	var targetPremultiplied = target.get_premultiplied();
	var sourcePremultiplied = source.get_premultiplied();
	var mapPremultiplied = map.get_premultiplied();
	var sourceView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(source);
	var mapView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(map);
	var row;
	var sourceOffset;
	var sourcePixel = 0;
	var mapPixel = 0;
	var targetPixel = 0;
	var mapPixelX;
	var mapPixelY;
	var mapPixelA;
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;
	var s4 = 0;
	var mPointXFloor;
	var mPointYFloor;
	var disOffsetXFloor;
	var disOffsetYFloor;
	var disX;
	var disY;
	var _g = 0;
	var _g1 = sourceView.height;
	while(_g < _g1) {
		var y = _g++;
		row = sourceView.byteOffset + sourceView.stride * y;
		var _g2 = 0;
		var _g3 = sourceView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			sourceOffset = row + x * 4;
			mPointXFloor = mapPoint.x | 0;
			mPointYFloor = mapPoint.y | 0;
			if(smooth) {
				var offset = sourceView.byteOffset + sourceView.stride * (y - mPointYFloor + 1) + (x - mPointXFloor) * 4;
				var format = mapFormat;
				var premultiplied = mapPremultiplied;
				if(premultiplied == null) {
					premultiplied = false;
				}
				if(format == null) {
					format = 0;
				}
				switch(format) {
				case 0:
					s1 = (mapData[offset] & 255) << 24 | (mapData[offset + 1] & 255) << 16 | (mapData[offset + 2] & 255) << 8 | mapData[offset + 3] & 255;
					break;
				case 1:
					s1 = (mapData[offset + 1] & 255) << 24 | (mapData[offset + 2] & 255) << 16 | (mapData[offset + 3] & 255) << 8 | mapData[offset] & 255;
					break;
				case 2:
					s1 = (mapData[offset + 2] & 255) << 24 | (mapData[offset + 1] & 255) << 16 | (mapData[offset] & 255) << 8 | mapData[offset + 3] & 255;
					break;
				}
				if(premultiplied) {
					if((s1 & 255) != 0 && (s1 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s1 & 255);
						s1 = (lime_math_RGBA.__clamp[Math.round((s1 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s1 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s1 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s1 & 255 & 255;
					}
				}
				var offset1 = sourceView.byteOffset + sourceView.stride * (y - mPointYFloor) + (x - mPointXFloor + 1) * 4;
				var format1 = mapFormat;
				var premultiplied1 = mapPremultiplied;
				if(premultiplied1 == null) {
					premultiplied1 = false;
				}
				if(format1 == null) {
					format1 = 0;
				}
				switch(format1) {
				case 0:
					s2 = (mapData[offset1] & 255) << 24 | (mapData[offset1 + 1] & 255) << 16 | (mapData[offset1 + 2] & 255) << 8 | mapData[offset1 + 3] & 255;
					break;
				case 1:
					s2 = (mapData[offset1 + 1] & 255) << 24 | (mapData[offset1 + 2] & 255) << 16 | (mapData[offset1 + 3] & 255) << 8 | mapData[offset1] & 255;
					break;
				case 2:
					s2 = (mapData[offset1 + 2] & 255) << 24 | (mapData[offset1 + 1] & 255) << 16 | (mapData[offset1] & 255) << 8 | mapData[offset1 + 3] & 255;
					break;
				}
				if(premultiplied1) {
					if((s2 & 255) != 0 && (s2 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s2 & 255);
						s2 = (lime_math_RGBA.__clamp[Math.round((s2 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s2 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s2 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s2 & 255 & 255;
					}
				}
				var offset2 = sourceView.byteOffset + sourceView.stride * (y - mPointYFloor + 1) + (x - mPointXFloor + 1) * 4;
				var format2 = mapFormat;
				var premultiplied2 = mapPremultiplied;
				if(premultiplied2 == null) {
					premultiplied2 = false;
				}
				if(format2 == null) {
					format2 = 0;
				}
				switch(format2) {
				case 0:
					s3 = (mapData[offset2] & 255) << 24 | (mapData[offset2 + 1] & 255) << 16 | (mapData[offset2 + 2] & 255) << 8 | mapData[offset2 + 3] & 255;
					break;
				case 1:
					s3 = (mapData[offset2 + 1] & 255) << 24 | (mapData[offset2 + 2] & 255) << 16 | (mapData[offset2 + 3] & 255) << 8 | mapData[offset2] & 255;
					break;
				case 2:
					s3 = (mapData[offset2 + 2] & 255) << 24 | (mapData[offset2 + 1] & 255) << 16 | (mapData[offset2] & 255) << 8 | mapData[offset2 + 3] & 255;
					break;
				}
				if(premultiplied2) {
					if((s3 & 255) != 0 && (s3 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s3 & 255);
						s3 = (lime_math_RGBA.__clamp[Math.round((s3 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s3 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s3 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s3 & 255 & 255;
					}
				}
				var offset3 = sourceView.byteOffset + sourceView.stride * (y - mPointYFloor) + (x - mPointXFloor) * 4;
				var format3 = mapFormat;
				var premultiplied3 = mapPremultiplied;
				if(premultiplied3 == null) {
					premultiplied3 = false;
				}
				if(format3 == null) {
					format3 = 0;
				}
				switch(format3) {
				case 0:
					s4 = (mapData[offset3] & 255) << 24 | (mapData[offset3 + 1] & 255) << 16 | (mapData[offset3 + 2] & 255) << 8 | mapData[offset3 + 3] & 255;
					break;
				case 1:
					s4 = (mapData[offset3 + 1] & 255) << 24 | (mapData[offset3 + 2] & 255) << 16 | (mapData[offset3 + 3] & 255) << 8 | mapData[offset3] & 255;
					break;
				case 2:
					s4 = (mapData[offset3 + 2] & 255) << 24 | (mapData[offset3 + 1] & 255) << 16 | (mapData[offset3] & 255) << 8 | mapData[offset3 + 3] & 255;
					break;
				}
				if(premultiplied3) {
					if((s4 & 255) != 0 && (s4 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s4 & 255);
						s4 = (lime_math_RGBA.__clamp[Math.round((s4 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s4 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s4 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s4 & 255 & 255;
					}
				}
				mapPixel = lime__$internal_graphics_ImageDataUtil.bilinear(s1,s2,s3,s4,mapPoint.x - mPointXFloor,mapPoint.y - mPointYFloor);
			} else {
				var offset4 = mapView.byteOffset + mapView.stride * (y - mPointYFloor) + (x - mPointXFloor) * 4;
				var format4 = mapFormat;
				var premultiplied4 = mapPremultiplied;
				if(premultiplied4 == null) {
					premultiplied4 = false;
				}
				if(format4 == null) {
					format4 = 0;
				}
				switch(format4) {
				case 0:
					mapPixel = (mapData[offset4] & 255) << 24 | (mapData[offset4 + 1] & 255) << 16 | (mapData[offset4 + 2] & 255) << 8 | mapData[offset4 + 3] & 255;
					break;
				case 1:
					mapPixel = (mapData[offset4 + 1] & 255) << 24 | (mapData[offset4 + 2] & 255) << 16 | (mapData[offset4 + 3] & 255) << 8 | mapData[offset4] & 255;
					break;
				case 2:
					mapPixel = (mapData[offset4 + 2] & 255) << 24 | (mapData[offset4 + 1] & 255) << 16 | (mapData[offset4] & 255) << 8 | mapData[offset4 + 3] & 255;
					break;
				}
				if(premultiplied4) {
					if((mapPixel & 255) != 0 && (mapPixel & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (mapPixel & 255);
						mapPixel = (lime_math_RGBA.__clamp[Math.round((mapPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((mapPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((mapPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | mapPixel & 255 & 255;
					}
				}
			}
			mapPixelA = (mapPixel & 255) / 255.0;
			mapPixelX = ((mapPixel >>> 24 & 255) - 128) / 255.0 * mapPixelA;
			mapPixelY = ((mapPixel >>> 16 & 255) - 128) / 255.0 * mapPixelA;
			disX = mapPixelX * componentX.x + mapPixelY * componentY.x;
			disY = mapPixelX * componentX.y + mapPixelY * componentY.y;
			disOffsetXFloor = Math.floor(disX * sourceView.width);
			disOffsetYFloor = Math.floor(disY * sourceView.height);
			if(smooth) {
				var offset5 = sourceView.byteOffset + sourceView.stride * (y + disOffsetYFloor + 1) + (x + disOffsetXFloor) * 4;
				var format5 = sourceFormat;
				var premultiplied5 = sourcePremultiplied;
				if(premultiplied5 == null) {
					premultiplied5 = false;
				}
				if(format5 == null) {
					format5 = 0;
				}
				switch(format5) {
				case 0:
					s1 = (sourceData[offset5] & 255) << 24 | (sourceData[offset5 + 1] & 255) << 16 | (sourceData[offset5 + 2] & 255) << 8 | sourceData[offset5 + 3] & 255;
					break;
				case 1:
					s1 = (sourceData[offset5 + 1] & 255) << 24 | (sourceData[offset5 + 2] & 255) << 16 | (sourceData[offset5 + 3] & 255) << 8 | sourceData[offset5] & 255;
					break;
				case 2:
					s1 = (sourceData[offset5 + 2] & 255) << 24 | (sourceData[offset5 + 1] & 255) << 16 | (sourceData[offset5] & 255) << 8 | sourceData[offset5 + 3] & 255;
					break;
				}
				if(premultiplied5) {
					if((s1 & 255) != 0 && (s1 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s1 & 255);
						s1 = (lime_math_RGBA.__clamp[Math.round((s1 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s1 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s1 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s1 & 255 & 255;
					}
				}
				var offset6 = sourceView.byteOffset + sourceView.stride * (y + disOffsetYFloor) + (x + disOffsetXFloor + 1) * 4;
				var format6 = sourceFormat;
				var premultiplied6 = sourcePremultiplied;
				if(premultiplied6 == null) {
					premultiplied6 = false;
				}
				if(format6 == null) {
					format6 = 0;
				}
				switch(format6) {
				case 0:
					s2 = (sourceData[offset6] & 255) << 24 | (sourceData[offset6 + 1] & 255) << 16 | (sourceData[offset6 + 2] & 255) << 8 | sourceData[offset6 + 3] & 255;
					break;
				case 1:
					s2 = (sourceData[offset6 + 1] & 255) << 24 | (sourceData[offset6 + 2] & 255) << 16 | (sourceData[offset6 + 3] & 255) << 8 | sourceData[offset6] & 255;
					break;
				case 2:
					s2 = (sourceData[offset6 + 2] & 255) << 24 | (sourceData[offset6 + 1] & 255) << 16 | (sourceData[offset6] & 255) << 8 | sourceData[offset6 + 3] & 255;
					break;
				}
				if(premultiplied6) {
					if((s2 & 255) != 0 && (s2 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s2 & 255);
						s2 = (lime_math_RGBA.__clamp[Math.round((s2 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s2 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s2 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s2 & 255 & 255;
					}
				}
				var offset7 = sourceView.byteOffset + sourceView.stride * (y + disOffsetYFloor + 1) + (x + disOffsetXFloor + 1) * 4;
				var format7 = sourceFormat;
				var premultiplied7 = sourcePremultiplied;
				if(premultiplied7 == null) {
					premultiplied7 = false;
				}
				if(format7 == null) {
					format7 = 0;
				}
				switch(format7) {
				case 0:
					s3 = (sourceData[offset7] & 255) << 24 | (sourceData[offset7 + 1] & 255) << 16 | (sourceData[offset7 + 2] & 255) << 8 | sourceData[offset7 + 3] & 255;
					break;
				case 1:
					s3 = (sourceData[offset7 + 1] & 255) << 24 | (sourceData[offset7 + 2] & 255) << 16 | (sourceData[offset7 + 3] & 255) << 8 | sourceData[offset7] & 255;
					break;
				case 2:
					s3 = (sourceData[offset7 + 2] & 255) << 24 | (sourceData[offset7 + 1] & 255) << 16 | (sourceData[offset7] & 255) << 8 | sourceData[offset7 + 3] & 255;
					break;
				}
				if(premultiplied7) {
					if((s3 & 255) != 0 && (s3 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s3 & 255);
						s3 = (lime_math_RGBA.__clamp[Math.round((s3 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s3 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s3 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s3 & 255 & 255;
					}
				}
				var offset8 = sourceView.byteOffset + sourceView.stride * (y + disOffsetYFloor) + (x + disOffsetXFloor) * 4;
				var format8 = sourceFormat;
				var premultiplied8 = sourcePremultiplied;
				if(premultiplied8 == null) {
					premultiplied8 = false;
				}
				if(format8 == null) {
					format8 = 0;
				}
				switch(format8) {
				case 0:
					s4 = (sourceData[offset8] & 255) << 24 | (sourceData[offset8 + 1] & 255) << 16 | (sourceData[offset8 + 2] & 255) << 8 | sourceData[offset8 + 3] & 255;
					break;
				case 1:
					s4 = (sourceData[offset8 + 1] & 255) << 24 | (sourceData[offset8 + 2] & 255) << 16 | (sourceData[offset8 + 3] & 255) << 8 | sourceData[offset8] & 255;
					break;
				case 2:
					s4 = (sourceData[offset8 + 2] & 255) << 24 | (sourceData[offset8 + 1] & 255) << 16 | (sourceData[offset8] & 255) << 8 | sourceData[offset8 + 3] & 255;
					break;
				}
				if(premultiplied8) {
					if((s4 & 255) != 0 && (s4 & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (s4 & 255);
						s4 = (lime_math_RGBA.__clamp[Math.round((s4 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((s4 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((s4 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | s4 & 255 & 255;
					}
				}
				sourcePixel = lime__$internal_graphics_ImageDataUtil.bilinear(s1,s2,s3,s4,disX * sourceView.width - disOffsetXFloor,disY * sourceView.height - disOffsetYFloor);
			} else {
				var offset9 = sourceView.byteOffset + sourceView.stride * (y + disOffsetYFloor) + (x + disOffsetXFloor) * 4;
				var format9 = sourceFormat;
				var premultiplied9 = sourcePremultiplied;
				if(premultiplied9 == null) {
					premultiplied9 = false;
				}
				if(format9 == null) {
					format9 = 0;
				}
				switch(format9) {
				case 0:
					sourcePixel = (sourceData[offset9] & 255) << 24 | (sourceData[offset9 + 1] & 255) << 16 | (sourceData[offset9 + 2] & 255) << 8 | sourceData[offset9 + 3] & 255;
					break;
				case 1:
					sourcePixel = (sourceData[offset9 + 1] & 255) << 24 | (sourceData[offset9 + 2] & 255) << 16 | (sourceData[offset9 + 3] & 255) << 8 | sourceData[offset9] & 255;
					break;
				case 2:
					sourcePixel = (sourceData[offset9 + 2] & 255) << 24 | (sourceData[offset9 + 1] & 255) << 16 | (sourceData[offset9] & 255) << 8 | sourceData[offset9 + 3] & 255;
					break;
				}
				if(premultiplied9) {
					if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
						lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
						sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
			}
			var format10 = targetFormat;
			var premultiplied10 = targetPremultiplied;
			if(premultiplied10 == null) {
				premultiplied10 = false;
			}
			if(format10 == null) {
				format10 = 0;
			}
			if(premultiplied10) {
				if((sourcePixel & 255) == 0) {
					if(sourcePixel != 0) {
						sourcePixel = 0;
					}
				} else if((sourcePixel & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[sourcePixel & 255];
					sourcePixel = ((sourcePixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
				}
			}
			switch(format10) {
			case 0:
				targetData[sourceOffset] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 8 & 255;
				targetData[sourceOffset + 3] = sourcePixel & 255;
				break;
			case 1:
				targetData[sourceOffset] = sourcePixel & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 3] = sourcePixel >>> 8 & 255;
				break;
			case 2:
				targetData[sourceOffset] = sourcePixel >>> 8 & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 3] = sourcePixel & 255;
				break;
			}
		}
	}
	target.dirty = true;
	target.version++;
};
lime__$internal_graphics_ImageDataUtil.bilinear = function(s1,s2,s3,s4,su,sv) {
	return lime__$internal_graphics_ImageDataUtil.lerpRGBA(lime__$internal_graphics_ImageDataUtil.lerpRGBA(s4,s2,su),lime__$internal_graphics_ImageDataUtil.lerpRGBA(s1,s3,su),sv);
};
lime__$internal_graphics_ImageDataUtil.lerpRGBA = function(v0,v1,x) {
	var result = 0;
	var value = Math.floor(lime__$internal_graphics_ImageDataUtil.lerp(v0 >>> 24 & 255,v1 >>> 24 & 255,x));
	result = (value & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | result & 255 & 255;
	var value = Math.floor(lime__$internal_graphics_ImageDataUtil.lerp(v0 >>> 16 & 255,v1 >>> 16 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | result & 255 & 255;
	var value = Math.floor(lime__$internal_graphics_ImageDataUtil.lerp(v0 >>> 8 & 255,v1 >>> 8 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | result & 255 & 255;
	var value = Math.floor(lime__$internal_graphics_ImageDataUtil.lerp(v0 & 255,v1 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | value & 255;
	return result;
};
lime__$internal_graphics_ImageDataUtil.lerp4f = function(v0,v1,x) {
	return new lime_math_Vector4(lime__$internal_graphics_ImageDataUtil.lerp(v0.x,v1.x,x),lime__$internal_graphics_ImageDataUtil.lerp(v0.y,v1.y,x),lime__$internal_graphics_ImageDataUtil.lerp(v0.z,v1.z,x),lime__$internal_graphics_ImageDataUtil.lerp(v0.w,v1.w,x));
};
lime__$internal_graphics_ImageDataUtil.lerp = function(v0,v1,x) {
	return (1.0 - x) * v0 + x * v1;
};
lime__$internal_graphics_ImageDataUtil.colorTransform = function(image,rect,colorMatrix) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,rect);
	var alphaTable = lime_math_ColorMatrix.getAlphaTable(colorMatrix);
	var redTable = lime_math_ColorMatrix.getRedTable(colorMatrix);
	var greenTable = lime_math_ColorMatrix.getGreenTable(colorMatrix);
	var blueTable = lime_math_ColorMatrix.getBlueTable(colorMatrix);
	var row;
	var offset;
	var pixel = 0;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.byteOffset + dataView.stride * y;
		var _g2 = 0;
		var _g3 = dataView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			offset = row + x * 4;
			var format1 = format;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
				break;
			case 1:
				pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
				break;
			case 2:
				pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((pixel & 255) != 0 && (pixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (pixel & 255);
					pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
				}
			}
			pixel = (redTable[pixel >>> 24 & 255] & 255) << 24 | (greenTable[pixel >>> 16 & 255] & 255) << 16 | (blueTable[pixel >>> 8 & 255] & 255) << 8 | alphaTable[pixel & 255] & 255;
			var format2 = format;
			var premultiplied2 = premultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((pixel & 255) == 0) {
					if(pixel != 0) {
						pixel = 0;
					}
				} else if((pixel & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
					pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				data[offset] = pixel >>> 24 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 8 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 1:
				data[offset] = pixel & 255;
				data[offset + 1] = pixel >>> 24 & 255;
				data[offset + 2] = pixel >>> 16 & 255;
				data[offset + 3] = pixel >>> 8 & 255;
				break;
			case 2:
				data[offset] = pixel >>> 8 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 24 & 255;
				data[offset + 3] = pixel & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel._hx_index) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel._hx_index) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) {
		return;
	}
	var srcView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(sourceImage,sourceRect);
	var destView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,new lime_math_Rectangle(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel = 0;
	var destPixel = 0;
	var value = 0;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		srcPosition = srcView.byteOffset + srcView.stride * y;
		destPosition = destView.byteOffset + destView.stride * y;
		var _g2 = 0;
		var _g3 = destView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var format = srcFormat;
			var premultiplied = srcPremultiplied;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format == null) {
				format = 0;
			}
			switch(format) {
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (srcPixel & 255);
					srcPixel = (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			var format1 = destFormat;
			var premultiplied1 = destPremultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (destPixel & 255);
					destPixel = (lime_math_RGBA.__clamp[Math.round((destPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(srcIdx) {
			case 0:
				value = srcPixel >>> 24 & 255;
				break;
			case 1:
				value = srcPixel >>> 16 & 255;
				break;
			case 2:
				value = srcPixel >>> 8 & 255;
				break;
			case 3:
				value = srcPixel & 255;
				break;
			}
			switch(destIdx) {
			case 0:
				destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				break;
			case 1:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				break;
			case 2:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | destPixel & 255 & 255;
				break;
			case 3:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value & 255;
				break;
			}
			var format2 = destFormat;
			var premultiplied2 = destPremultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) {
						destPixel = 0;
					}
				} else if((destPixel & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[destPixel & 255];
					destPixel = ((destPixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				destData[destPosition] = destPixel >>> 24 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >>> 24 & 255;
				destData[destPosition + 2] = destPixel >>> 16 & 255;
				destData[destPosition + 3] = destPixel >>> 8 & 255;
				break;
			case 2:
				destData[destPosition] = destPixel >>> 8 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) {
		mergeAlpha = false;
	}
	if(image.width == sourceImage.width && image.height == sourceImage.height && sourceRect.width == sourceImage.width && sourceRect.height == sourceImage.height && sourceRect.x == 0 && sourceRect.y == 0 && destPoint.x == 0 && destPoint.y == 0 && alphaImage == null && alphaPoint == null && mergeAlpha == false && image.get_format() == sourceImage.get_format()) {
		image.buffer.data.set(sourceImage.buffer.data);
	} else {
		var sourceData = sourceImage.buffer.data;
		var destData = image.buffer.data;
		if(sourceData == null || destData == null) {
			return;
		}
		var sourceView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(sourceImage,sourceRect);
		var destRect = new lime_math_Rectangle(destPoint.x,destPoint.y,sourceView.width,sourceView.height);
		var destView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,destRect);
		var sourceFormat = sourceImage.buffer.format;
		var destFormat = image.buffer.format;
		var sourcePosition;
		var destPosition;
		var sourceAlpha;
		var destAlpha;
		var oneMinusSourceAlpha;
		var blendAlpha;
		var sourcePixel = 0;
		var destPixel = 0;
		var sourcePremultiplied = sourceImage.buffer.premultiplied;
		var destPremultiplied = image.buffer.premultiplied;
		var sourceBytesPerPixel = sourceImage.buffer.bitsPerPixel / 8 | 0;
		var destBytesPerPixel = image.buffer.bitsPerPixel / 8 | 0;
		var useAlphaImage = alphaImage != null && alphaImage.get_transparent();
		var blend = mergeAlpha || useAlphaImage && !image.get_transparent() || !mergeAlpha && !image.get_transparent() && sourceImage.get_transparent();
		if(!useAlphaImage) {
			if(blend) {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.byteOffset + sourceView.stride * y;
					destPosition = destView.byteOffset + destView.stride * y;
					var _g2 = 0;
					var _g3 = destView.width;
					while(_g2 < _g3) {
						var x = _g2++;
						var format = sourceFormat;
						var premultiplied = sourcePremultiplied;
						if(premultiplied == null) {
							premultiplied = false;
						}
						if(format == null) {
							format = 0;
						}
						switch(format) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format1 = destFormat;
						var premultiplied1 = destPremultiplied;
						if(premultiplied1 == null) {
							premultiplied1 = false;
						}
						if(format1 == null) {
							format1 = 0;
						}
						switch(format1) {
						case 0:
							destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						case 1:
							destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
							break;
						case 2:
							destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						}
						if(premultiplied1) {
							if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (destPixel & 255);
								destPixel = (lime_math_RGBA.__clamp[Math.round((destPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | destPixel & 255 & 255;
							}
						}
						sourceAlpha = (sourcePixel & 255) / 255.0;
						destAlpha = (destPixel & 255) / 255.0;
						oneMinusSourceAlpha = 1 - sourceAlpha;
						blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
						if(blendAlpha == 0) {
							destPixel = 0;
						} else {
							var value = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 24 & 255) * sourceAlpha + (destPixel >>> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value1 = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 16 & 255) * sourceAlpha + (destPixel >>> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value2 = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 8 & 255) * sourceAlpha + (destPixel >>> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
							var value3 = lime_math_RGBA.__clamp[Math.round(blendAlpha * 255.0)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
						}
						var format2 = destFormat;
						var premultiplied2 = destPremultiplied;
						if(premultiplied2 == null) {
							premultiplied2 = false;
						}
						if(format2 == null) {
							format2 = 0;
						}
						if(premultiplied2) {
							if((destPixel & 255) == 0) {
								if(destPixel != 0) {
									destPixel = 0;
								}
							} else if((destPixel & 255) != 255) {
								lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[destPixel & 255];
								destPixel = ((destPixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
							}
						}
						switch(format2) {
						case 0:
							destData[destPosition] = destPixel >>> 24 & 255;
							destData[destPosition + 1] = destPixel >>> 16 & 255;
							destData[destPosition + 2] = destPixel >>> 8 & 255;
							destData[destPosition + 3] = destPixel & 255;
							break;
						case 1:
							destData[destPosition] = destPixel & 255;
							destData[destPosition + 1] = destPixel >>> 24 & 255;
							destData[destPosition + 2] = destPixel >>> 16 & 255;
							destData[destPosition + 3] = destPixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = destPixel >>> 8 & 255;
							destData[destPosition + 1] = destPixel >>> 16 & 255;
							destData[destPosition + 2] = destPixel >>> 24 & 255;
							destData[destPosition + 3] = destPixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
					}
				}
			} else if(sourceFormat == destFormat && sourcePremultiplied == destPremultiplied && sourceBytesPerPixel == destBytesPerPixel) {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.byteOffset + sourceView.stride * y;
					destPosition = destView.byteOffset + destView.stride * y;
					destData.set(sourceData.subarray(sourcePosition,sourcePosition + destView.width * destBytesPerPixel),destPosition);
				}
			} else {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.byteOffset + sourceView.stride * y;
					destPosition = destView.byteOffset + destView.stride * y;
					var _g2 = 0;
					var _g3 = destView.width;
					while(_g2 < _g3) {
						var x = _g2++;
						var format = sourceFormat;
						var premultiplied = sourcePremultiplied;
						if(premultiplied == null) {
							premultiplied = false;
						}
						if(format == null) {
							format = 0;
						}
						switch(format) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format1 = destFormat;
						var premultiplied1 = destPremultiplied;
						if(premultiplied1 == null) {
							premultiplied1 = false;
						}
						if(format1 == null) {
							format1 = 0;
						}
						if(premultiplied1) {
							if((sourcePixel & 255) == 0) {
								if(sourcePixel != 0) {
									sourcePixel = 0;
								}
							} else if((sourcePixel & 255) != 255) {
								lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[sourcePixel & 255];
								sourcePixel = ((sourcePixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						switch(format1) {
						case 0:
							destData[destPosition] = sourcePixel >>> 24 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 8 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						case 1:
							destData[destPosition] = sourcePixel & 255;
							destData[destPosition + 1] = sourcePixel >>> 24 & 255;
							destData[destPosition + 2] = sourcePixel >>> 16 & 255;
							destData[destPosition + 3] = sourcePixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = sourcePixel >>> 8 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 24 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
					}
				}
			}
		} else {
			var alphaData = alphaImage.buffer.data;
			var alphaFormat = alphaImage.buffer.format;
			var alphaPosition;
			var alphaPixel = 0;
			var alphaView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(alphaImage,new lime_math_Rectangle(sourceView.x + (alphaPoint == null ? 0 : alphaPoint.x),sourceView.y + (alphaPoint == null ? 0 : alphaPoint.y),sourceView.width,sourceView.height));
			destView.clip(destPoint.x | 0,destPoint.y | 0,alphaView.width,alphaView.height);
			if(blend) {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.byteOffset + sourceView.stride * y;
					destPosition = destView.byteOffset + destView.stride * y;
					alphaPosition = alphaView.byteOffset + alphaView.stride * y;
					var _g2 = 0;
					var _g3 = destView.width;
					while(_g2 < _g3) {
						var x = _g2++;
						var format = sourceFormat;
						var premultiplied = sourcePremultiplied;
						if(premultiplied == null) {
							premultiplied = false;
						}
						if(format == null) {
							format = 0;
						}
						switch(format) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format1 = destFormat;
						var premultiplied1 = destPremultiplied;
						if(premultiplied1 == null) {
							premultiplied1 = false;
						}
						if(format1 == null) {
							format1 = 0;
						}
						switch(format1) {
						case 0:
							destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						case 1:
							destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
							break;
						case 2:
							destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						}
						if(premultiplied1) {
							if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (destPixel & 255);
								destPixel = (lime_math_RGBA.__clamp[Math.round((destPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | destPixel & 255 & 255;
							}
						}
						var format2 = alphaFormat;
						var premultiplied2 = false;
						if(premultiplied2 == null) {
							premultiplied2 = false;
						}
						if(format2 == null) {
							format2 = 0;
						}
						switch(format2) {
						case 0:
							alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						case 1:
							alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
							break;
						case 2:
							alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						}
						if(premultiplied2) {
							if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (alphaPixel & 255);
								alphaPixel = (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | alphaPixel & 255 & 255;
							}
						}
						sourceAlpha = (alphaPixel & 255) / 255.0 * ((sourcePixel & 255) / 255.0);
						if(sourceAlpha > 0) {
							destAlpha = (destPixel & 255) / 255.0;
							oneMinusSourceAlpha = 1 - sourceAlpha;
							blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
							var value = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 24 & 255) * sourceAlpha + (destPixel >>> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value1 = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 16 & 255) * sourceAlpha + (destPixel >>> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value2 = lime_math_RGBA.__clamp[Math.round(((sourcePixel >>> 8 & 255) * sourceAlpha + (destPixel >>> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
							var value3 = lime_math_RGBA.__clamp[Math.round(blendAlpha * 255.0)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
							var format3 = destFormat;
							var premultiplied3 = destPremultiplied;
							if(premultiplied3 == null) {
								premultiplied3 = false;
							}
							if(format3 == null) {
								format3 = 0;
							}
							if(premultiplied3) {
								if((destPixel & 255) == 0) {
									if(destPixel != 0) {
										destPixel = 0;
									}
								} else if((destPixel & 255) != 255) {
									lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[destPixel & 255];
									destPixel = ((destPixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
								}
							}
							switch(format3) {
							case 0:
								destData[destPosition] = destPixel >>> 24 & 255;
								destData[destPosition + 1] = destPixel >>> 16 & 255;
								destData[destPosition + 2] = destPixel >>> 8 & 255;
								destData[destPosition + 3] = destPixel & 255;
								break;
							case 1:
								destData[destPosition] = destPixel & 255;
								destData[destPosition + 1] = destPixel >>> 24 & 255;
								destData[destPosition + 2] = destPixel >>> 16 & 255;
								destData[destPosition + 3] = destPixel >>> 8 & 255;
								break;
							case 2:
								destData[destPosition] = destPixel >>> 8 & 255;
								destData[destPosition + 1] = destPixel >>> 16 & 255;
								destData[destPosition + 2] = destPixel >>> 24 & 255;
								destData[destPosition + 3] = destPixel & 255;
								break;
							}
						}
						sourcePosition += 4;
						destPosition += 4;
						alphaPosition += 4;
					}
				}
			} else {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.byteOffset + sourceView.stride * y;
					destPosition = destView.byteOffset + destView.stride * y;
					alphaPosition = alphaView.byteOffset + alphaView.stride * y;
					var _g2 = 0;
					var _g3 = destView.width;
					while(_g2 < _g3) {
						var x = _g2++;
						var format = sourceFormat;
						var premultiplied = sourcePremultiplied;
						if(premultiplied == null) {
							premultiplied = false;
						}
						if(format == null) {
							format = 0;
						}
						switch(format) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format1 = alphaFormat;
						var premultiplied1 = false;
						if(premultiplied1 == null) {
							premultiplied1 = false;
						}
						if(format1 == null) {
							format1 = 0;
						}
						switch(format1) {
						case 0:
							alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						case 1:
							alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
							break;
						case 2:
							alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						}
						if(premultiplied1) {
							if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
								lime_math_RGBA.unmult = 255.0 / (alphaPixel & 255);
								alphaPixel = (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((alphaPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | alphaPixel & 255 & 255;
							}
						}
						var value = Math.round((sourcePixel & 255) * ((alphaPixel & 255) / 255));
						sourcePixel = (sourcePixel >>> 24 & 255 & 255) << 24 | (sourcePixel >>> 16 & 255 & 255) << 16 | (sourcePixel >>> 8 & 255 & 255) << 8 | value & 255;
						var format2 = destFormat;
						var premultiplied2 = destPremultiplied;
						if(premultiplied2 == null) {
							premultiplied2 = false;
						}
						if(format2 == null) {
							format2 = 0;
						}
						if(premultiplied2) {
							if((sourcePixel & 255) == 0) {
								if(sourcePixel != 0) {
									sourcePixel = 0;
								}
							} else if((sourcePixel & 255) != 255) {
								lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[sourcePixel & 255];
								sourcePixel = ((sourcePixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						switch(format2) {
						case 0:
							destData[destPosition] = sourcePixel >>> 24 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 8 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						case 1:
							destData[destPosition] = sourcePixel & 255;
							destData[destPosition + 1] = sourcePixel >>> 24 & 255;
							destData[destPosition + 2] = sourcePixel >>> 16 & 255;
							destData[destPosition + 3] = sourcePixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = sourcePixel >>> 8 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 24 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
						alphaPosition += 4;
					}
				}
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		fillColor = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		fillColor = rgba;
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >>> 24 & 255 & 255) << 24 | (fillColor >>> 16 & 255 & 255) << 16 | (fillColor >>> 8 & 255 & 255) << 8 | 255;
	}
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) {
				fillColor = 0;
			}
		} else if((fillColor & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
			fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dataView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,rect);
	var row;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.byteOffset + dataView.stride * y;
		var _g2 = 0;
		var _g3 = dataView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var offset = row + x * 4;
			var format1 = format;
			var premultiplied = false;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			if(premultiplied) {
				if((fillColor & 255) == 0) {
					if(fillColor != 0) {
						fillColor = 0;
					}
				} else if((fillColor & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
					fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
				}
			}
			switch(format1) {
			case 0:
				data[offset] = fillColor >>> 24 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >>> 24 & 255;
				data[offset + 2] = fillColor >>> 16 & 255;
				data[offset + 3] = fillColor >>> 8 & 255;
				break;
			case 2:
				data[offset] = fillColor >>> 8 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.floodFill = function(image,x,y,color,format) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	if(format == 1) {
		color = (color & 16777215) << 8 | color >> 24 & 255;
	}
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var fillColor = color;
	var hitColor = 0;
	var offset = (y + image.offsetY) * (image.buffer.width * 4) + (x + image.offsetX) * 4;
	var format1 = format;
	var premultiplied1 = premultiplied;
	if(premultiplied1 == null) {
		premultiplied1 = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		hitColor = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		hitColor = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		hitColor = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied1) {
		if((hitColor & 255) != 0 && (hitColor & 255) != 255) {
			lime_math_RGBA.unmult = 255.0 / (hitColor & 255);
			hitColor = (lime_math_RGBA.__clamp[Math.round((hitColor >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((hitColor >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((hitColor >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | hitColor & 255 & 255;
		}
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >>> 24 & 255 & 255) << 24 | (fillColor >>> 16 & 255 & 255) << 16 | (fillColor >>> 8 & 255 & 255) << 8 | 255;
		hitColor = (hitColor >>> 24 & 255 & 255) << 24 | (hitColor >>> 16 & 255 & 255) << 16 | (hitColor >>> 8 & 255 & 255) << 8 | 255;
	}
	if(fillColor == hitColor) {
		return;
	}
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) {
				fillColor = 0;
			}
		} else if((fillColor & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
			fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dx = [0,-1,1,0];
	var dy = [-1,0,0,1];
	var minX = -image.offsetX;
	var minY = -image.offsetY;
	var maxX = minX + image.width;
	var maxY = minY + image.height;
	var queue = [];
	queue.push(x);
	queue.push(y);
	var curPointX;
	var curPointY;
	var nextPointX;
	var nextPointY;
	var nextPointOffset;
	var readColor = 0;
	while(queue.length > 0) {
		curPointY = queue.pop();
		curPointX = queue.pop();
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			nextPointX = curPointX + dx[i];
			nextPointY = curPointY + dy[i];
			if(nextPointX < minX || nextPointY < minY || nextPointX >= maxX || nextPointY >= maxY) {
				continue;
			}
			nextPointOffset = (nextPointY * image.width + nextPointX) * 4;
			var format1 = format;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				readColor = (data[nextPointOffset] & 255) << 24 | (data[nextPointOffset + 1] & 255) << 16 | (data[nextPointOffset + 2] & 255) << 8 | data[nextPointOffset + 3] & 255;
				break;
			case 1:
				readColor = (data[nextPointOffset + 1] & 255) << 24 | (data[nextPointOffset + 2] & 255) << 16 | (data[nextPointOffset + 3] & 255) << 8 | data[nextPointOffset] & 255;
				break;
			case 2:
				readColor = (data[nextPointOffset + 2] & 255) << 24 | (data[nextPointOffset + 1] & 255) << 16 | (data[nextPointOffset] & 255) << 8 | data[nextPointOffset + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((readColor & 255) != 0 && (readColor & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (readColor & 255);
					readColor = (lime_math_RGBA.__clamp[Math.round((readColor >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((readColor >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((readColor >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | readColor & 255 & 255;
				}
			}
			if(readColor == hitColor) {
				var format2 = format;
				var premultiplied2 = false;
				if(premultiplied2 == null) {
					premultiplied2 = false;
				}
				if(format2 == null) {
					format2 = 0;
				}
				if(premultiplied2) {
					if((fillColor & 255) == 0) {
						if(fillColor != 0) {
							fillColor = 0;
						}
					} else if((fillColor & 255) != 255) {
						lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
						fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
					}
				}
				switch(format2) {
				case 0:
					data[nextPointOffset] = fillColor >>> 24 & 255;
					data[nextPointOffset + 1] = fillColor >>> 16 & 255;
					data[nextPointOffset + 2] = fillColor >>> 8 & 255;
					data[nextPointOffset + 3] = fillColor & 255;
					break;
				case 1:
					data[nextPointOffset] = fillColor & 255;
					data[nextPointOffset + 1] = fillColor >>> 24 & 255;
					data[nextPointOffset + 2] = fillColor >>> 16 & 255;
					data[nextPointOffset + 3] = fillColor >>> 8 & 255;
					break;
				case 2:
					data[nextPointOffset] = fillColor >>> 8 & 255;
					data[nextPointOffset + 1] = fillColor >>> 16 & 255;
					data[nextPointOffset + 2] = fillColor >>> 24 & 255;
					data[nextPointOffset + 3] = fillColor & 255;
					break;
				}
				queue.push(nextPointX);
				queue.push(nextPointY);
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.gaussianBlur = function(image,sourceImage,sourceRect,destPoint,blurX,blurY,quality,strength,color) {
	if(strength == null) {
		strength = 1;
	}
	if(quality == null) {
		quality = 1;
	}
	if(blurY == null) {
		blurY = 4;
	}
	if(blurX == null) {
		blurX = 4;
	}
	var imagePremultiplied = image.get_premultiplied();
	if(imagePremultiplied) {
		image.set_premultiplied(false);
	}
	lime__$internal_graphics_StackBlur.blur(image,sourceImage,sourceRect,destPoint,blurX,blurY,quality);
	image.dirty = true;
	image.version++;
	if(imagePremultiplied) {
		image.set_premultiplied(true);
	}
	return image;
};
lime__$internal_graphics_ImageDataUtil.getColorBoundsRect = function(image,mask,color,findColor,format) {
	var left = image.width + 1;
	var right = 0;
	var top = image.height + 1;
	var bottom = 0;
	var _color;
	var _mask;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_color = rgba;
		var argb = mask;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_mask = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_color = rgba;
		var bgra = mask;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_mask = rgba;
		break;
	default:
		_color = color;
		_mask = mask;
	}
	if(!image.get_transparent()) {
		_color = (_color >>> 24 & 255 & 255) << 24 | (_color >>> 16 & 255 & 255) << 16 | (_color >>> 8 & 255 & 255) << 8 | 255;
		_mask = (_mask >>> 24 & 255 & 255) << 24 | (_mask >>> 16 & 255 & 255) << 16 | (_mask >>> 8 & 255 & 255) << 8 | 255;
	}
	var pixel;
	var hit;
	var _g = 0;
	var _g1 = image.width;
	while(_g < _g1) {
		var x = _g++;
		hit = false;
		var _g2 = 0;
		var _g3 = image.height;
		while(_g2 < _g3) {
			var y = _g2++;
			pixel = image.getPixel32(x,y,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(x < left) {
					left = x;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var ix;
	var _g = 0;
	var _g1 = image.width;
	while(_g < _g1) {
		var x = _g++;
		ix = image.width - 1 - x;
		hit = false;
		var _g2 = 0;
		var _g3 = image.height;
		while(_g2 < _g3) {
			var y = _g2++;
			pixel = image.getPixel32(ix,y,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(ix > right) {
					right = ix;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var _g = 0;
	var _g1 = image.height;
	while(_g < _g1) {
		var y = _g++;
		hit = false;
		var _g2 = 0;
		var _g3 = image.width;
		while(_g2 < _g3) {
			var x = _g2++;
			pixel = image.getPixel32(x,y,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(y < top) {
					top = y;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var iy;
	var _g = 0;
	var _g1 = image.height;
	while(_g < _g1) {
		var y = _g++;
		iy = image.height - 1 - y;
		hit = false;
		var _g2 = 0;
		var _g3 = image.width;
		while(_g2 < _g3) {
			var x = _g2++;
			pixel = image.getPixel32(x,iy,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(iy > bottom) {
					bottom = iy;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var w = right - left;
	var h = bottom - top;
	if(w > 0) {
		++w;
	}
	if(h > 0) {
		++h;
	}
	if(w < 0) {
		w = 0;
	}
	if(h < 0) {
		h = 0;
	}
	if(left == right) {
		w = 1;
	}
	if(top == bottom) {
		h = 1;
	}
	if(left > image.width) {
		left = 0;
	}
	if(top > image.height) {
		top = 0;
	}
	return new lime_math_Rectangle(left,top,w,h);
};
lime__$internal_graphics_ImageDataUtil.getPixel = function(image,x,y,format) {
	var pixel = 0;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime_math_RGBA.unmult = 255.0 / (pixel & 255);
			pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
		}
	}
	pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 0;
	switch(format) {
	case 1:
		var this1 = 0;
		var argb = this1;
		argb = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
		return argb;
	case 2:
		var this1 = 0;
		var bgra = this1;
		bgra = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
};
lime__$internal_graphics_ImageDataUtil.getPixel32 = function(image,x,y,format) {
	var pixel = 0;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime_math_RGBA.unmult = 255.0 / (pixel & 255);
			pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format) {
	case 1:
		var this1 = 0;
		var argb = this1;
		argb = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
		return argb;
	case 2:
		var this1 = 0;
		var bgra = this1;
		bgra = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
};
lime__$internal_graphics_ImageDataUtil.getPixels = function(image,rect,format) {
	if(image.buffer.data == null) {
		return null;
	}
	var length = rect.width * rect.height | 0;
	var bytes = new haxe_io_Bytes(new ArrayBuffer(length * 4));
	var data = image.buffer.data;
	var sourceFormat = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,rect);
	var position;
	var argb = 0;
	var bgra = 0;
	var pixel = 0;
	var destPosition = 0;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		position = dataView.byteOffset + dataView.stride * y;
		var _g2 = 0;
		var _g3 = dataView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var format1 = sourceFormat;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				pixel = (data[position] & 255) << 24 | (data[position + 1] & 255) << 16 | (data[position + 2] & 255) << 8 | data[position + 3] & 255;
				break;
			case 1:
				pixel = (data[position + 1] & 255) << 24 | (data[position + 2] & 255) << 16 | (data[position + 3] & 255) << 8 | data[position] & 255;
				break;
			case 2:
				pixel = (data[position + 2] & 255) << 24 | (data[position + 1] & 255) << 16 | (data[position] & 255) << 8 | data[position + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((pixel & 255) != 0 && (pixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (pixel & 255);
					pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format) {
			case 1:
				var this1 = 0;
				var argb1 = this1;
				argb1 = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
				argb = argb1;
				pixel = argb;
				break;
			case 2:
				var this2 = 0;
				var bgra1 = this2;
				bgra1 = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
				bgra = bgra1;
				pixel = bgra;
				break;
			default:
			}
			bytes.b[destPosition++] = pixel >>> 24 & 255 & 255;
			bytes.b[destPosition++] = pixel >>> 16 & 255 & 255;
			bytes.b[destPosition++] = pixel >>> 8 & 255 & 255;
			bytes.b[destPosition++] = pixel & 255 & 255;
			position += 4;
		}
	}
	return bytes;
};
lime__$internal_graphics_ImageDataUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	if(image.buffer.data == null || sourceImage.buffer.data == null) {
		return;
	}
	var sourceView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(sourceImage,sourceRect);
	var destView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,new lime_math_Rectangle(destPoint.x,destPoint.y,sourceView.width,sourceView.height));
	var sourceData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	var sourceFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var sourcePremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var sourcePosition;
	var destPosition;
	var sourcePixel = 0;
	var destPixel = 0;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		sourcePosition = sourceView.byteOffset + sourceView.stride * y;
		destPosition = destView.byteOffset + destView.stride * y;
		var _g2 = 0;
		var _g3 = destView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var format = sourceFormat;
			var premultiplied = sourcePremultiplied;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format == null) {
				format = 0;
			}
			switch(format) {
			case 0:
				sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
				break;
			case 1:
				sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
				break;
			case 2:
				sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (sourcePixel & 255);
					sourcePixel = (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((sourcePixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | sourcePixel & 255 & 255;
				}
			}
			var format1 = destFormat;
			var premultiplied1 = destPremultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (destPixel & 255);
					destPixel = (lime_math_RGBA.__clamp[Math.round((destPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((destPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | destPixel & 255 & 255;
				}
			}
			var value = ((sourcePixel >>> 24 & 255) * redMultiplier + (destPixel >>> 24 & 255) * (256 - redMultiplier)) / 256 | 0;
			destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
			var value1 = ((sourcePixel >>> 16 & 255) * greenMultiplier + (destPixel >>> 16 & 255) * (256 - greenMultiplier)) / 256 | 0;
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
			var value2 = ((sourcePixel >>> 8 & 255) * blueMultiplier + (destPixel >>> 8 & 255) * (256 - blueMultiplier)) / 256 | 0;
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
			var value3 = ((sourcePixel & 255) * alphaMultiplier + (destPixel & 255) * (256 - alphaMultiplier)) / 256 | 0;
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
			var format2 = destFormat;
			var premultiplied2 = destPremultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) {
						destPixel = 0;
					}
				} else if((destPixel & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[destPixel & 255];
					destPixel = ((destPixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				destData[destPosition] = destPixel >>> 24 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >>> 24 & 255;
				destData[destPosition + 2] = destPixel >>> 16 & 255;
				destData[destPosition + 3] = destPixel >>> 8 & 255;
				break;
			case 2:
				destData[destPosition] = destPixel >>> 8 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			}
			sourcePosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null || !image.buffer.transparent) {
		return;
	}
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel = 0;
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		var offset = i * 4;
		var format1 = format;
		var premultiplied = false;
		if(premultiplied == null) {
			premultiplied = false;
		}
		if(format1 == null) {
			format1 = 0;
		}
		switch(format1) {
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		}
		if(premultiplied) {
			if((pixel & 255) != 0 && (pixel & 255) != 255) {
				lime_math_RGBA.unmult = 255.0 / (pixel & 255);
				pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
			}
		}
		var offset1 = i * 4;
		var format2 = format;
		var premultiplied1 = true;
		if(premultiplied1 == null) {
			premultiplied1 = false;
		}
		if(format2 == null) {
			format2 = 0;
		}
		if(premultiplied1) {
			if((pixel & 255) == 0) {
				if(pixel != 0) {
					pixel = 0;
				}
			} else if((pixel & 255) != 255) {
				lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
				pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
			}
		}
		switch(format2) {
		case 0:
			data[offset1] = pixel >>> 24 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >>> 24 & 255;
			data[offset1 + 2] = pixel >>> 16 & 255;
			data[offset1 + 3] = pixel >>> 8 & 255;
			break;
		case 2:
			data[offset1] = pixel >>> 8 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		}
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.width == newWidth && buffer.height == newHeight) {
		return;
	}
	var elements = newWidth * newHeight * 4;
	var array = null;
	var view = null;
	var buffer1 = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer1 != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer1,0);
		} else {
			this1 = new Uint8Array(buffer1,0,len);
		}
	} else {
		this1 = null;
	}
	var newBuffer = new lime_graphics_ImageBuffer(this1,newWidth,newHeight);
	var imageWidth = image.width;
	var imageHeight = image.height;
	var data = image.get_data();
	var newData = newBuffer.data;
	var sourceIndex;
	var sourceIndexX;
	var sourceIndexY;
	var sourceIndexXY;
	var index;
	var sourceX;
	var sourceY;
	var u;
	var v;
	var uRatio;
	var vRatio;
	var uOpposite;
	var vOpposite;
	var _g = 0;
	var _g1 = newHeight;
	while(_g < _g1) {
		var y = _g++;
		var _g2 = 0;
		var _g3 = newWidth;
		while(_g2 < _g3) {
			var x = _g2++;
			u = (x + 0.5) / newWidth * imageWidth - 0.5;
			v = (y + 0.5) / newHeight * imageHeight - 0.5;
			sourceX = u | 0;
			sourceY = v | 0;
			sourceIndex = (sourceY * imageWidth + sourceX) * 4;
			sourceIndexX = sourceX < imageWidth - 1 ? sourceIndex + 4 : sourceIndex;
			sourceIndexY = sourceY < imageHeight - 1 ? sourceIndex + imageWidth * 4 : sourceIndex;
			sourceIndexXY = sourceIndexX != sourceIndex ? sourceIndexY + 4 : sourceIndexY;
			index = (y * newWidth + x) * 4;
			uRatio = u - sourceX;
			vRatio = v - sourceY;
			uOpposite = 1 - uRatio;
			vOpposite = 1 - vRatio;
			newData[index] = (UInt.toFloat(data[sourceIndex]) * uOpposite + UInt.toFloat(data[sourceIndexX]) * uRatio) * vOpposite + (UInt.toFloat(data[sourceIndexY]) * uOpposite + UInt.toFloat(data[sourceIndexXY]) * uRatio) * vRatio | 0;
			newData[index + 1] = (UInt.toFloat(data[sourceIndex + 1]) * uOpposite + UInt.toFloat(data[sourceIndexX + 1]) * uRatio) * vOpposite + (UInt.toFloat(data[sourceIndexY + 1]) * uOpposite + UInt.toFloat(data[sourceIndexXY + 1]) * uRatio) * vRatio | 0;
			newData[index + 2] = (UInt.toFloat(data[sourceIndex + 2]) * uOpposite + UInt.toFloat(data[sourceIndexX + 2]) * uRatio) * vOpposite + (UInt.toFloat(data[sourceIndexY + 2]) * uOpposite + UInt.toFloat(data[sourceIndexXY + 2]) * uRatio) * vRatio | 0;
			if(data[sourceIndexX + 3] == 0 || data[sourceIndexY + 3] == 0 || data[sourceIndexXY + 3] == 0) {
				newData[index + 3] = 0;
			} else {
				newData[index + 3] = data[sourceIndex + 3];
			}
		}
	}
	buffer.data = newBuffer.data;
	buffer.width = newWidth;
	buffer.height = newHeight;
	buffer.__srcImage = null;
	buffer.__srcImageData = null;
	buffer.__srcCanvas = null;
	buffer.__srcContext = null;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.resizeBuffer = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	var data = image.get_data();
	var elements = newWidth * newHeight * 4;
	var array = null;
	var view = null;
	var buffer1 = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer1 != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer1,0);
		} else {
			this1 = new Uint8Array(buffer1,0,len);
		}
	} else {
		this1 = null;
	}
	var newData = this1;
	var sourceIndex;
	var index;
	var _g = 0;
	var _g1 = buffer.height;
	while(_g < _g1) {
		var y = _g++;
		var _g2 = 0;
		var _g3 = buffer.width;
		while(_g2 < _g3) {
			var x = _g2++;
			sourceIndex = (y * buffer.width + x) * 4;
			index = (y * newWidth + x) * 4;
			newData[index] = data[sourceIndex];
			newData[index + 1] = data[sourceIndex + 1];
			newData[index + 2] = data[sourceIndex + 2];
			newData[index + 3] = data[sourceIndex + 3];
		}
	}
	buffer.data = newData;
	buffer.width = newWidth;
	buffer.height = newHeight;
	buffer.__srcImage = null;
	buffer.__srcImageData = null;
	buffer.__srcCanvas = null;
	buffer.__srcContext = null;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	switch(image.get_format()) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.setPixel = function(image,x,y,color,format) {
	var pixel;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		pixel = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		pixel = rgba;
		break;
	default:
		pixel = color;
	}
	var this1 = 0;
	var source = this1;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		source = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		source = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		source = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((source & 255) != 0 && (source & 255) != 255) {
			lime_math_RGBA.unmult = 255.0 / (source & 255);
			source = (lime_math_RGBA.__clamp[Math.round((source >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((source >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((source >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | source & 255 & 255;
		}
	}
	var value = source & 255;
	pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | value & 255;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((pixel & 255) == 0) {
			if(pixel != 0) {
				pixel = 0;
			}
		} else if((pixel & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
			pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = pixel >>> 24 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 8 & 255;
		data[offset + 3] = pixel & 255;
		break;
	case 1:
		data[offset] = pixel & 255;
		data[offset + 1] = pixel >>> 24 & 255;
		data[offset + 2] = pixel >>> 16 & 255;
		data[offset + 3] = pixel >>> 8 & 255;
		break;
	case 2:
		data[offset] = pixel >>> 8 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 24 & 255;
		data[offset + 3] = pixel & 255;
		break;
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.setPixel32 = function(image,x,y,color,format) {
	var pixel;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		pixel = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		pixel = rgba;
		break;
	default:
		pixel = color;
	}
	if(!image.get_transparent()) {
		pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 255;
	}
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((pixel & 255) == 0) {
			if(pixel != 0) {
				pixel = 0;
			}
		} else if((pixel & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
			pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = pixel >>> 24 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 8 & 255;
		data[offset + 3] = pixel & 255;
		break;
	case 1:
		data[offset] = pixel & 255;
		data[offset + 1] = pixel >>> 24 & 255;
		data[offset + 2] = pixel >>> 16 & 255;
		data[offset + 3] = pixel >>> 8 & 255;
		break;
	case 2:
		data[offset] = pixel >>> 8 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 24 & 255;
		data[offset + 3] = pixel & 255;
		break;
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.setPixels = function(image,rect,bytePointer,format,endian) {
	if(image.buffer.data == null) {
		return;
	}
	var data = image.buffer.data;
	var sourceFormat = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,rect);
	var row;
	var color;
	var pixel;
	var transparent = image.get_transparent();
	var bytes = bytePointer.bytes;
	var dataPosition = bytePointer.offset;
	var littleEndian = endian != lime_system_Endian.BIG_ENDIAN;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.byteOffset + dataView.stride * y;
		var _g2 = 0;
		var _g3 = dataView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			if(littleEndian) {
				color = bytes.getInt32(dataPosition);
			} else {
				color = bytes.b[dataPosition + 3] | bytes.b[dataPosition + 2] << 8 | bytes.b[dataPosition + 1] << 16 | bytes.b[dataPosition] << 24;
			}
			dataPosition += 4;
			switch(format) {
			case 1:
				var argb = color;
				var this1 = 0;
				var rgba = this1;
				rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
				pixel = rgba;
				break;
			case 2:
				var bgra = color;
				var this2 = 0;
				var rgba1 = this2;
				rgba1 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
				pixel = rgba1;
				break;
			default:
				pixel = color;
			}
			if(!transparent) {
				pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 255;
			}
			var offset = row + x * 4;
			var format1 = sourceFormat;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			if(premultiplied1) {
				if((pixel & 255) == 0) {
					if(pixel != 0) {
						pixel = 0;
					}
				} else if((pixel & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
					pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format1) {
			case 0:
				data[offset] = pixel >>> 24 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 8 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 1:
				data[offset] = pixel & 255;
				data[offset + 1] = pixel >>> 24 & 255;
				data[offset + 2] = pixel >>> 16 & 255;
				data[offset + 3] = pixel >>> 8 & 255;
				break;
			case 2:
				data[offset] = pixel >>> 8 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 24 & 255;
				data[offset + 3] = pixel & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.threshold = function(image,sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format) {
	var _color;
	var _mask;
	var _threshold;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_color = rgba;
		var argb = mask;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_mask = rgba;
		var argb = threshold;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_threshold = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_color = rgba;
		var bgra = mask;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_mask = rgba;
		var bgra = threshold;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_threshold = rgba;
		break;
	default:
		_color = color;
		_mask = mask;
		_threshold = threshold;
	}
	var _operation;
	switch(operation) {
	case "!=":
		_operation = 0;
		break;
	case "<":
		_operation = 2;
		break;
	case "<=":
		_operation = 3;
		break;
	case "==":
		_operation = 1;
		break;
	case ">":
		_operation = 4;
		break;
	case ">=":
		_operation = 5;
		break;
	default:
		_operation = -1;
	}
	if(_operation == -1) {
		return 0;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) {
		return 0;
	}
	var hits = 0;
	var srcView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(sourceImage,sourceRect);
	var destView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,new lime_math_Rectangle(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel = 0;
	var destPixel = 0;
	var pixelMask;
	var test;
	var value;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		srcPosition = srcView.byteOffset + srcView.stride * y;
		destPosition = destView.byteOffset + destView.stride * y;
		var _g2 = 0;
		var _g3 = destView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var format = srcFormat;
			var premultiplied = srcPremultiplied;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format == null) {
				format = 0;
			}
			switch(format) {
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					lime_math_RGBA.unmult = 255.0 / (srcPixel & 255);
					srcPixel = (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((srcPixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			pixelMask = srcPixel & _mask;
			var tmp1 = pixelMask >>> 24 & 255;
			var tmp2 = _threshold >>> 24 & 255;
			if(tmp1 != tmp2) {
				value = UInt.gt(tmp1,tmp2) ? 1 : -1;
			} else {
				tmp1 = pixelMask >>> 16 & 255;
				tmp2 = _threshold >>> 16 & 255;
				if(tmp1 != tmp2) {
					value = UInt.gt(tmp1,tmp2) ? 1 : -1;
				} else {
					tmp1 = pixelMask >>> 8 & 255;
					tmp2 = _threshold >>> 8 & 255;
					if(tmp1 != tmp2) {
						value = UInt.gt(tmp1,tmp2) ? 1 : -1;
					} else {
						tmp1 = pixelMask & 255;
						tmp2 = _threshold & 255;
						value = tmp1 != tmp2 ? UInt.gt(tmp1,tmp2) ? 1 : -1 : 0;
					}
				}
			}
			switch(_operation) {
			case 0:
				test = value != 0;
				break;
			case 1:
				test = value == 0;
				break;
			case 2:
				test = value == -1;
				break;
			case 3:
				test = value == 0 || value == -1;
				break;
			case 4:
				test = value == 1;
				break;
			case 5:
				test = value == 0 || value == 1;
				break;
			default:
				test = false;
			}
			if(test) {
				var format1 = destFormat;
				var premultiplied1 = destPremultiplied;
				if(premultiplied1 == null) {
					premultiplied1 = false;
				}
				if(format1 == null) {
					format1 = 0;
				}
				if(premultiplied1) {
					if((_color & 255) == 0) {
						if(_color != 0) {
							_color = 0;
						}
					} else if((_color & 255) != 255) {
						lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[_color & 255];
						_color = ((_color >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((_color >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((_color >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | _color & 255 & 255;
					}
				}
				switch(format1) {
				case 0:
					destData[destPosition] = _color >>> 24 & 255;
					destData[destPosition + 1] = _color >>> 16 & 255;
					destData[destPosition + 2] = _color >>> 8 & 255;
					destData[destPosition + 3] = _color & 255;
					break;
				case 1:
					destData[destPosition] = _color & 255;
					destData[destPosition + 1] = _color >>> 24 & 255;
					destData[destPosition + 2] = _color >>> 16 & 255;
					destData[destPosition + 3] = _color >>> 8 & 255;
					break;
				case 2:
					destData[destPosition] = _color >>> 8 & 255;
					destData[destPosition + 1] = _color >>> 16 & 255;
					destData[destPosition + 2] = _color >>> 24 & 255;
					destData[destPosition + 3] = _color & 255;
					break;
				}
				++hits;
			} else if(copySource) {
				var format2 = destFormat;
				var premultiplied2 = destPremultiplied;
				if(premultiplied2 == null) {
					premultiplied2 = false;
				}
				if(format2 == null) {
					format2 = 0;
				}
				if(premultiplied2) {
					if((srcPixel & 255) == 0) {
						if(srcPixel != 0) {
							srcPixel = 0;
						}
					} else if((srcPixel & 255) != 255) {
						lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[srcPixel & 255];
						srcPixel = ((srcPixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((srcPixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((srcPixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | srcPixel & 255 & 255;
					}
				}
				switch(format2) {
				case 0:
					destData[destPosition] = srcPixel >>> 24 & 255;
					destData[destPosition + 1] = srcPixel >>> 16 & 255;
					destData[destPosition + 2] = srcPixel >>> 8 & 255;
					destData[destPosition + 3] = srcPixel & 255;
					break;
				case 1:
					destData[destPosition] = srcPixel & 255;
					destData[destPosition + 1] = srcPixel >>> 24 & 255;
					destData[destPosition + 2] = srcPixel >>> 16 & 255;
					destData[destPosition + 3] = srcPixel >>> 8 & 255;
					break;
				case 2:
					destData[destPosition] = srcPixel >>> 8 & 255;
					destData[destPosition + 1] = srcPixel >>> 16 & 255;
					destData[destPosition + 2] = srcPixel >>> 24 & 255;
					destData[destPosition + 3] = srcPixel & 255;
					break;
				}
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	if(hits > 0) {
		image.dirty = true;
		image.version++;
	}
	return hits;
};
lime__$internal_graphics_ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel = 0;
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		var offset = i * 4;
		var format1 = format;
		var premultiplied = true;
		if(premultiplied == null) {
			premultiplied = false;
		}
		if(format1 == null) {
			format1 = 0;
		}
		switch(format1) {
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		}
		if(premultiplied) {
			if((pixel & 255) != 0 && (pixel & 255) != 255) {
				lime_math_RGBA.unmult = 255.0 / (pixel & 255);
				pixel = (lime_math_RGBA.__clamp[Math.round((pixel >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((pixel >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | pixel & 255 & 255;
			}
		}
		var offset1 = i * 4;
		var format2 = format;
		var premultiplied1 = false;
		if(premultiplied1 == null) {
			premultiplied1 = false;
		}
		if(format2 == null) {
			format2 = 0;
		}
		if(premultiplied1) {
			if((pixel & 255) == 0) {
				if(pixel != 0) {
					pixel = 0;
				}
			} else if((pixel & 255) != 255) {
				lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[pixel & 255];
				pixel = ((pixel >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
			}
		}
		switch(format2) {
		case 0:
			data[offset1] = pixel >>> 24 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >>> 24 & 255;
			data[offset1 + 2] = pixel >>> 16 & 255;
			data[offset1 + 3] = pixel >>> 8 & 255;
			break;
		case 2:
			data[offset1] = pixel >>> 8 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
	image.version++;
};
lime__$internal_graphics_ImageDataUtil.__boxBlur = function(imgA,imgB,w,h,bx,by) {
	imgB.set(imgA);
	var bx1 = bx | 0;
	var by1 = by | 0;
	lime__$internal_graphics_ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,0);
	lime__$internal_graphics_ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,1);
	lime__$internal_graphics_ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,2);
	lime__$internal_graphics_ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,3);
	var iarr = 1 / (by1 + by1 + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4;
		li = ti;
		ri = ti + by1 * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (by1 + 1) * fv;
		var _g2 = 0;
		var _g3 = by1;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g4 = 0;
		var _g5 = by1 + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g6 = by1 + 1;
		var _g7 = h - by1;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g8 = h - by1;
		var _g9 = h;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
	var iarr = 1 / (by1 + by1 + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4 + 1;
		li = ti;
		ri = ti + by1 * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (by1 + 1) * fv;
		var _g2 = 0;
		var _g3 = by1;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g4 = 0;
		var _g5 = by1 + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g6 = by1 + 1;
		var _g7 = h - by1;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g8 = h - by1;
		var _g9 = h;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
	var iarr = 1 / (by1 + by1 + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4 + 2;
		li = ti;
		ri = ti + by1 * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (by1 + 1) * fv;
		var _g2 = 0;
		var _g3 = by1;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g4 = 0;
		var _g5 = by1 + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g6 = by1 + 1;
		var _g7 = h - by1;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g8 = h - by1;
		var _g9 = h;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
	var iarr = 1 / (by1 + by1 + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4 + 3;
		li = ti;
		ri = ti + by1 * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (by1 + 1) * fv;
		var _g2 = 0;
		var _g3 = by1;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g4 = 0;
		var _g5 = by1 + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g6 = by1 + 1;
		var _g7 = h - by1;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g8 = h - by1;
		var _g9 = h;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
};
lime__$internal_graphics_ImageDataUtil.__boxBlurH = function(imgA,imgB,w,h,r,off) {
	var iarr = 1 / (r + r + 1);
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = h;
	while(_g < _g1) {
		var i = _g++;
		ti = i * w;
		li = ti;
		ri = ti + r;
		fv = imgA[ti * 4 + off];
		lv = imgA[(ti + w - 1) * 4 + off];
		val = (r + 1) * fv;
		var _g2 = 0;
		var _g3 = r;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[(ti + j) * 4 + off];
		}
		var _g4 = 0;
		var _g5 = r + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri * 4 + off] - fv);
			imgB[ti * 4 + off] = Math.round(UInt.toFloat(val) * iarr);
			++ri;
			++ti;
		}
		var _g6 = r + 1;
		var _g7 = w - r;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri * 4 + off] - imgA[li * 4 + off]);
			imgB[ti * 4 + off] = Math.round(UInt.toFloat(val) * iarr);
			++ri;
			++li;
			++ti;
		}
		var _g8 = w - r;
		var _g9 = w;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li * 4 + off]);
			imgB[ti * 4 + off] = Math.round(UInt.toFloat(val) * iarr);
			++li;
			++ti;
		}
	}
};
lime__$internal_graphics_ImageDataUtil.__boxBlurT = function(imgA,imgB,w,h,r,off) {
	var iarr = 1 / (r + r + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4 + off;
		li = ti;
		ri = ti + r * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (r + 1) * fv;
		var _g2 = 0;
		var _g3 = r;
		while(_g2 < _g3) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g4 = 0;
		var _g5 = r + 1;
		while(_g4 < _g5) {
			var j1 = _g4++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g6 = r + 1;
		var _g7 = h - r;
		while(_g6 < _g7) {
			var j2 = _g6++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g8 = h - r;
		var _g9 = h;
		while(_g8 < _g9) {
			var j3 = _g8++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round(UInt.toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
};
lime__$internal_graphics_ImageDataUtil.__calculateSourceOffset = function(sourceRect,destPoint,destX,destY) {
	var sourceX = destX - (destPoint.x | 0);
	var sourceY = destY - (destPoint.y | 0);
	var offset = 0;
	if(sourceX < 0 || sourceY < 0 || sourceX >= sourceRect.width || sourceY >= sourceRect.height) {
		offset = -1;
	} else {
		offset = 4 * (sourceY * (sourceRect.width | 0) + sourceX);
	}
	return offset;
};
lime__$internal_graphics_ImageDataUtil.__getBoxesForGaussianBlur = function(sigma,n) {
	var wIdeal = Math.sqrt(12 * sigma * sigma / n + 1);
	var wl = Math.floor(wIdeal);
	if(wl % 2 == 0) {
		--wl;
	}
	var wu = wl + 2;
	var mIdeal = (12 * sigma * sigma - n * wl * wl - 4 * n * wl - 3 * n) / (-4 * wl - 4);
	var m = Math.round(mIdeal);
	var sizes = [];
	var _g = 0;
	var _g1 = n;
	while(_g < _g1) {
		var i = _g++;
		sizes.push(i < m ? wl : wu);
	}
	return sizes;
};
lime__$internal_graphics_ImageDataUtil.__pixelCompare = function(n1,n2) {
	var tmp1 = n1 >>> 24 & 255;
	var tmp2 = n2 >>> 24 & 255;
	if(tmp1 != tmp2) {
		if(UInt.gt(tmp1,tmp2)) {
			return 1;
		} else {
			return -1;
		}
	} else {
		tmp1 = n1 >>> 16 & 255;
		tmp2 = n2 >>> 16 & 255;
		if(tmp1 != tmp2) {
			if(UInt.gt(tmp1,tmp2)) {
				return 1;
			} else {
				return -1;
			}
		} else {
			tmp1 = n1 >>> 8 & 255;
			tmp2 = n2 >>> 8 & 255;
			if(tmp1 != tmp2) {
				if(UInt.gt(tmp1,tmp2)) {
					return 1;
				} else {
					return -1;
				}
			} else {
				tmp1 = n1 & 255;
				tmp2 = n2 & 255;
				if(tmp1 != tmp2) {
					if(UInt.gt(tmp1,tmp2)) {
						return 1;
					} else {
						return -1;
					}
				} else {
					return 0;
				}
			}
		}
	}
};
lime__$internal_graphics_ImageDataUtil.__translatePixel = function(imgB,sourceRect,destRect,destPoint,destX,destY,strength) {
	var d = 4 * (destY * (destRect.width | 0) + destX);
	var s = lime__$internal_graphics_ImageDataUtil.__calculateSourceOffset(sourceRect,destPoint,destX,destY);
	if(s < 0) {
		imgB[d] = imgB[d + 1] = imgB[d + 2] = imgB[d + 3] = 0;
	} else {
		imgB[d] = imgB[s];
		imgB[d + 1] = imgB[s + 1];
		imgB[d + 2] = imgB[s + 2];
		var a = UInt.toFloat(imgB[s + 3]) * strength | 0;
		imgB[d + 3] = a < 0 ? 0 : a > 255 ? 255 : a;
	}
};
var lime__$internal_graphics__$ImageDataUtil_ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) {
		this.rect = image.get_rect();
	} else {
		if(rect.x < 0) {
			rect.x = 0;
		}
		if(rect.y < 0) {
			rect.y = 0;
		}
		if(rect.x + rect.width > image.width) {
			rect.width = image.width - rect.x;
		}
		if(rect.y + rect.height > image.height) {
			rect.height = image.height - rect.y;
		}
		if(rect.width < 0) {
			rect.width = 0;
		}
		if(rect.height < 0) {
			rect.height = 0;
		}
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.__update();
};
$hxClasses["lime._internal.graphics._ImageDataUtil.ImageDataView"] = lime__$internal_graphics__$ImageDataUtil_ImageDataView;
lime__$internal_graphics__$ImageDataUtil_ImageDataView.__name__ = "lime._internal.graphics._ImageDataUtil.ImageDataView";
lime__$internal_graphics__$ImageDataUtil_ImageDataView.prototype = {
	clip: function(x,y,width,height) {
		if(this.tempRect == null) {
			this.tempRect = new lime_math_Rectangle();
		}
		this.tempRect.setTo(x,y,width,height);
		this.rect.intersection(this.tempRect,this.rect);
		this.__update();
	}
	,hasRow: function(y) {
		if(y >= 0) {
			return y < this.height;
		} else {
			return false;
		}
	}
	,offset: function(x,y) {
		if(x < 0) {
			this.rect.x += x;
			if(this.rect.x < 0) {
				this.rect.x = 0;
			}
		} else {
			this.rect.x += x;
			this.rect.width -= x;
		}
		if(y < 0) {
			this.rect.y += y;
			if(this.rect.y < 0) {
				this.rect.y = 0;
			}
		} else {
			this.rect.y += y;
			this.rect.height -= y;
		}
		this.__update();
	}
	,row: function(y) {
		return this.byteOffset + this.stride * y;
	}
	,__update: function() {
		this.x = Math.ceil(this.rect.x);
		this.y = Math.ceil(this.rect.y);
		this.width = Math.floor(this.rect.width);
		this.height = Math.floor(this.rect.height);
		this.byteOffset = this.stride * (this.y + this.image.offsetY) + (this.x + this.image.offsetX) * 4;
	}
	,__class__: lime__$internal_graphics__$ImageDataUtil_ImageDataView
};
var lime__$internal_graphics_StackBlur = function() { };
$hxClasses["lime._internal.graphics.StackBlur"] = lime__$internal_graphics_StackBlur;
lime__$internal_graphics_StackBlur.__name__ = "lime._internal.graphics.StackBlur";
lime__$internal_graphics_StackBlur.blur = function(dest,source,sourceRect,destPoint,blurX,blurY,quality) {
	dest.copyPixels(source,sourceRect,destPoint);
	lime__$internal_graphics_StackBlur.__stackBlurCanvasRGBA(dest,sourceRect.width | 0,sourceRect.height | 0,blurX,blurY,quality);
};
lime__$internal_graphics_StackBlur.__stackBlurCanvasRGBA = function(image,width,height,blurX,blurY,quality) {
	var radiusX = Math.round(blurX) >> 1;
	var radiusY = Math.round(blurY) >> 1;
	if(lime__$internal_graphics_StackBlur.MUL_TABLE == null) {
		return;
	}
	if(radiusX >= lime__$internal_graphics_StackBlur.MUL_TABLE.length) {
		radiusX = lime__$internal_graphics_StackBlur.MUL_TABLE.length - 1;
	}
	if(radiusY >= lime__$internal_graphics_StackBlur.MUL_TABLE.length) {
		radiusY = lime__$internal_graphics_StackBlur.MUL_TABLE.length - 1;
	}
	if(radiusX < 0 || radiusY < 0) {
		return;
	}
	var iterations = quality;
	if(iterations < 1) {
		iterations = 1;
	}
	if(iterations > 3) {
		iterations = 3;
	}
	var px = image.get_data();
	var x;
	var y;
	var i;
	var p;
	var yp;
	var yi;
	var yw;
	var r;
	var g;
	var b;
	var a;
	var pr;
	var pg;
	var pb;
	var pa;
	var f;
	var divx = radiusX + radiusX + 1;
	var divy = radiusY + radiusY + 1;
	var w = width;
	var h = height;
	var w1 = w - 1;
	var h1 = h - 1;
	var rxp1 = radiusX + 1;
	var ryp1 = radiusY + 1;
	var ssx = new lime__$internal_graphics_BlurStack();
	var sx = ssx;
	var _g = 1;
	var _g1 = divx;
	while(_g < _g1) {
		var i1 = _g++;
		sx = sx.n = new lime__$internal_graphics_BlurStack();
	}
	sx.n = ssx;
	var ssy = new lime__$internal_graphics_BlurStack();
	var sy = ssy;
	var _g = 1;
	var _g1 = divy;
	while(_g < _g1) {
		var i1 = _g++;
		sy = sy.n = new lime__$internal_graphics_BlurStack();
	}
	sy.n = ssy;
	var si = null;
	var mtx = lime__$internal_graphics_StackBlur.MUL_TABLE[radiusX];
	var stx = lime__$internal_graphics_StackBlur.SHG_TABLE[radiusX];
	var mty = lime__$internal_graphics_StackBlur.MUL_TABLE[radiusY];
	var sty = lime__$internal_graphics_StackBlur.SHG_TABLE[radiusY];
	while(iterations > 0) {
		--iterations;
		yi = 0;
		yw = yi;
		var ms = mtx;
		var ss = stx;
		y = h;
		while(true) {
			pr = px[yi];
			r = rxp1 * pr;
			pg = px[yi + 1];
			g = rxp1 * pg;
			pb = px[yi + 2];
			b = rxp1 * pb;
			pa = px[yi + 3];
			a = rxp1 * pa;
			sx = ssx;
			i = rxp1;
			while(true) {
				sx.r = pr;
				sx.g = pg;
				sx.b = pb;
				sx.a = pa;
				sx = sx.n;
				if(!(--i > -1)) {
					break;
				}
			}
			var _g = 1;
			var _g1 = rxp1;
			while(_g < _g1) {
				var i1 = _g++;
				p = yi + ((w1 < i1 ? w1 : i1) << 2);
				r += sx.r = px[p];
				g += sx.g = px[p + 1];
				b += sx.b = px[p + 2];
				a += sx.a = px[p + 3];
				sx = sx.n;
			}
			si = ssx;
			var _g2 = 0;
			var _g3 = w;
			while(_g2 < _g3) {
				var x = _g2++;
				px[yi++] = r * ms >>> ss;
				px[yi++] = g * ms >>> ss;
				px[yi++] = b * ms >>> ss;
				px[yi++] = a * ms >>> ss;
				p = x + radiusX + 1;
				p = yw + (p < w1 ? p : w1) << 2;
				r -= si.r - (si.r = px[p]);
				g -= si.g - (si.g = px[p + 1]);
				b -= si.b - (si.b = px[p + 2]);
				a -= si.a - (si.a = px[p + 3]);
				si = si.n;
			}
			yw += w;
			if(!(--y > 0)) {
				break;
			}
		}
		ms = mty;
		ss = sty;
		var _g4 = 0;
		var _g5 = w;
		while(_g4 < _g5) {
			var x1 = _g4++;
			yi = x1 << 2;
			pr = px[yi];
			r = ryp1 * pr;
			pg = px[yi + 1];
			g = ryp1 * pg;
			pb = px[yi + 2];
			b = ryp1 * pb;
			pa = px[yi + 3];
			a = ryp1 * pa;
			sy = ssy;
			var _g6 = 0;
			var _g7 = ryp1;
			while(_g6 < _g7) {
				var i2 = _g6++;
				sy.r = pr;
				sy.g = pg;
				sy.b = pb;
				sy.a = pa;
				sy = sy.n;
			}
			yp = w;
			var _g8 = 1;
			var _g9 = radiusY + 1;
			while(_g8 < _g9) {
				var i3 = _g8++;
				yi = yp + x1 << 2;
				r += sy.r = px[yi];
				g += sy.g = px[yi + 1];
				b += sy.b = px[yi + 2];
				a += sy.a = px[yi + 3];
				sy = sy.n;
				if(i3 < h1) {
					yp += w;
				}
			}
			yi = x1;
			si = ssy;
			if(iterations > 0) {
				var _g10 = 0;
				var _g11 = h;
				while(_g10 < _g11) {
					var y1 = _g10++;
					p = yi << 2;
					pa = a * ms >>> ss;
					px[p + 3] = pa;
					if(pa > 0) {
						px[p] = r * ms >>> ss;
						px[p + 1] = g * ms >>> ss;
						px[p + 2] = b * ms >>> ss;
					} else {
						px[p] = px[p + 1] = px[p + 2] = 0;
					}
					p = y1 + ryp1;
					p = x1 + (p < h1 ? p : h1) * w << 2;
					r -= si.r - (si.r = px[p]);
					g -= si.g - (si.g = px[p + 1]);
					b -= si.b - (si.b = px[p + 2]);
					a -= si.a - (si.a = px[p + 3]);
					si = si.n;
					yi += w;
				}
			} else {
				var _g12 = 0;
				var _g13 = h;
				while(_g12 < _g13) {
					var y2 = _g12++;
					p = yi << 2;
					pa = a * ms >>> ss;
					px[p + 3] = pa;
					if(pa > 0) {
						f = 255 / pa;
						pr = (r * ms >>> ss) * f | 0;
						pg = (g * ms >>> ss) * f | 0;
						pb = (b * ms >>> ss) * f | 0;
						px[p] = pr > 255 ? 255 : pr;
						px[p + 1] = pg > 255 ? 255 : pg;
						px[p + 2] = pb > 255 ? 255 : pb;
					} else {
						px[p] = px[p + 1] = px[p + 2] = 0;
					}
					p = y2 + ryp1;
					p = x1 + (p < h1 ? p : h1) * w << 2;
					r -= si.r - (si.r = px[p]);
					g -= si.g - (si.g = px[p + 1]);
					b -= si.b - (si.b = px[p + 2]);
					a -= si.a - (si.a = px[p + 3]);
					si = si.n;
					yi += w;
				}
			}
		}
	}
};
var lime__$internal_graphics_BlurStack = function() {
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.n = null;
};
$hxClasses["lime._internal.graphics.BlurStack"] = lime__$internal_graphics_BlurStack;
lime__$internal_graphics_BlurStack.__name__ = "lime._internal.graphics.BlurStack";
lime__$internal_graphics_BlurStack.prototype = {
	__class__: lime__$internal_graphics_BlurStack
};
var lime__$internal_macros_AssetsMacro = function() { };
$hxClasses["lime._internal.macros.AssetsMacro"] = lime__$internal_macros_AssetsMacro;
lime__$internal_macros_AssetsMacro.__name__ = "lime._internal.macros.AssetsMacro";
var lime_app_Event = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app.Event"] = lime_app_Event;
lime_app_Event.__name__ = "lime.app.Event";
lime_app_Event.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,__class__: lime_app_Event
};
var lime_app_Future = function(work,async) {
	if(async == null) {
		async = false;
	}
	if(work != null) {
		if(async) {
			var promise = new lime_app_Promise();
			promise.future = this;
			lime_app__$Future_FutureWork.queue({ promise : promise, work : work});
		} else {
			try {
				this.value = work();
				this.isComplete = true;
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				this.error = e;
				this.isError = true;
			}
		}
	}
};
$hxClasses["lime.app.Future"] = lime_app_Future;
lime_app_Future.__name__ = "lime.app.Future";
lime_app_Future.ofEvents = function(onComplete,onError,onProgress) {
	var promise = new lime_app_Promise();
	onComplete.add(function(data) {
		promise.complete(data);
	},true);
	if(onError != null) {
		onError.add(function(error) {
			promise.error(error);
		},true);
	}
	if(onProgress != null) {
		onProgress.add(function(progress,total) {
			promise.progress(progress,total);
		},true);
	}
	return promise.future;
};
lime_app_Future.withError = function(error) {
	var future = new lime_app_Future();
	future.isError = true;
	future.error = error;
	return future;
};
lime_app_Future.withValue = function(value) {
	var future = new lime_app_Future();
	future.isComplete = true;
	future.value = value;
	return future;
};
lime_app_Future.prototype = {
	onComplete: function(listener) {
		if(listener != null) {
			if(this.isComplete) {
				listener(this.value);
			} else if(!this.isError) {
				if(this.__completeListeners == null) {
					this.__completeListeners = [];
				}
				this.__completeListeners.push(listener);
			}
		}
		return this;
	}
	,onError: function(listener) {
		if(listener != null) {
			if(this.isError) {
				listener(this.error);
			} else if(!this.isComplete) {
				if(this.__errorListeners == null) {
					this.__errorListeners = [];
				}
				this.__errorListeners.push(listener);
			}
		}
		return this;
	}
	,onProgress: function(listener) {
		if(listener != null) {
			if(this.__progressListeners == null) {
				this.__progressListeners = [];
			}
			this.__progressListeners.push(listener);
		}
		return this;
	}
	,ready: function(waitTime) {
		if(waitTime == null) {
			waitTime = -1;
		}
		if(this.isComplete || this.isError) {
			return this;
		} else {
			lime_utils_Log.warn("Cannot block thread in JavaScript",{ fileName : "lime/app/Future.hx", lineNumber : 208, className : "lime.app.Future", methodName : "ready"});
			return this;
		}
	}
	,result: function(waitTime) {
		if(waitTime == null) {
			waitTime = -1;
		}
		this.ready(waitTime);
		if(this.isComplete) {
			return this.value;
		} else {
			return null;
		}
	}
	,then: function(next) {
		if(this.isComplete) {
			return next(this.value);
		} else if(this.isError) {
			var future = new lime_app_Future();
			future.isError = true;
			future.error = this.error;
			return future;
		} else {
			var promise = new lime_app_Promise();
			this.onError($bind(promise,promise.error));
			this.onProgress($bind(promise,promise.progress));
			this.onComplete(function(val) {
				var future = next(val);
				future.onError($bind(promise,promise.error));
				future.onComplete($bind(promise,promise.complete));
			});
			return promise.future;
		}
	}
	,__class__: lime_app_Future
};
var lime_app__$Future_FutureWork = function() { };
$hxClasses["lime.app._Future.FutureWork"] = lime_app__$Future_FutureWork;
lime_app__$Future_FutureWork.__name__ = "lime.app._Future.FutureWork";
lime_app__$Future_FutureWork.queue = function(state) {
	if(lime_app__$Future_FutureWork.threadPool == null) {
		lime_app__$Future_FutureWork.threadPool = new lime_system_ThreadPool();
		lime_app__$Future_FutureWork.threadPool.doWork.add(lime_app__$Future_FutureWork.threadPool_doWork);
		lime_app__$Future_FutureWork.threadPool.onComplete.add(lime_app__$Future_FutureWork.threadPool_onComplete);
		lime_app__$Future_FutureWork.threadPool.onError.add(lime_app__$Future_FutureWork.threadPool_onError);
	}
	lime_app__$Future_FutureWork.threadPool.queue(state);
};
lime_app__$Future_FutureWork.threadPool_doWork = function(state) {
	try {
		var result = state.work();
		lime_app__$Future_FutureWork.threadPool.sendComplete({ promise : state.promise, result : result});
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		lime_app__$Future_FutureWork.threadPool.sendError({ promise : state.promise, error : e});
	}
};
lime_app__$Future_FutureWork.threadPool_onComplete = function(state) {
	state.promise.complete(state.result);
};
lime_app__$Future_FutureWork.threadPool_onError = function(state) {
	state.promise.error(state.error);
};
var lime_app_Promise = function() {
	this.future = new lime_app_Future();
};
$hxClasses["lime.app.Promise"] = lime_app_Promise;
lime_app_Promise.__name__ = "lime.app.Promise";
lime_app_Promise.prototype = {
	complete: function(data) {
		if(!this.future.isError) {
			this.future.isComplete = true;
			this.future.value = data;
			if(this.future.__completeListeners != null) {
				var _g = 0;
				var _g1 = this.future.__completeListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(data);
				}
				this.future.__completeListeners = null;
			}
		}
		return this;
	}
	,completeWith: function(future) {
		future.onComplete($bind(this,this.complete));
		future.onError($bind(this,this.error));
		future.onProgress($bind(this,this.progress));
		return this;
	}
	,error: function(msg) {
		if(!this.future.isComplete) {
			this.future.isError = true;
			this.future.error = msg;
			if(this.future.__errorListeners != null) {
				var _g = 0;
				var _g1 = this.future.__errorListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(msg);
				}
				this.future.__errorListeners = null;
			}
		}
		return this;
	}
	,progress: function(progress,total) {
		if(!this.future.isError && !this.future.isComplete) {
			if(this.future.__progressListeners != null) {
				var _g = 0;
				var _g1 = this.future.__progressListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(progress,total);
				}
			}
		}
		return this;
	}
	,get_isComplete: function() {
		return this.future.isComplete;
	}
	,get_isError: function() {
		return this.future.isError;
	}
	,__class__: lime_app_Promise
};
var lime_app__$Event_$Array_$String_$_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Array_String__Void"] = lime_app__$Event_$Array_$String_$_$Void;
lime_app__$Event_$Array_$String_$_$Void.__name__ = "lime.app._Event_Array_String__Void";
lime_app__$Event_$Array_$String_$_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Array_$String_$_$Void
};
var lime_app__$Event_$Dynamic_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Dynamic_Void"] = lime_app__$Event_$Dynamic_$Void;
lime_app__$Event_$Dynamic_$Void.__name__ = "lime.app._Event_Dynamic_Void";
lime_app__$Event_$Dynamic_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Dynamic_$Void
};
var lime_app__$Event_$Float_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Float_Void"] = lime_app__$Event_$Float_$Float_$Float_$Void;
lime_app__$Event_$Float_$Float_$Float_$Void.__name__ = "lime.app._Event_Float_Float_Float_Void";
lime_app__$Event_$Float_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Float_$Void
};
var lime_app__$Event_$Float_$Float_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Int_Void"] = lime_app__$Event_$Float_$Float_$Int_$Void;
lime_app__$Event_$Float_$Float_$Int_$Void.__name__ = "lime.app._Event_Float_Float_Int_Void";
lime_app__$Event_$Float_$Float_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Int_$Void
};
var lime_app__$Event_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Void"] = lime_app__$Event_$Float_$Float_$Void;
lime_app__$Event_$Float_$Float_$Void.__name__ = "lime.app._Event_Float_Float_Void";
lime_app__$Event_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Void
};
var lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_lime_ui_MouseButton_Void"] = lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void.__name__ = "lime.app._Event_Float_Float_lime_ui_MouseButton_Void";
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void
};
var lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_lime_ui_MouseWheelMode_Void"] = lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void.__name__ = "lime.app._Event_Float_Float_lime_ui_MouseWheelMode_Void";
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void
};
var lime_app__$Event_$Int_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Float_Float_Void"] = lime_app__$Event_$Int_$Float_$Float_$Void;
lime_app__$Event_$Int_$Float_$Float_$Void.__name__ = "lime.app._Event_Int_Float_Float_Void";
lime_app__$Event_$Int_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Float_$Float_$Void
};
var lime_app__$Event_$Int_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Float_Void"] = lime_app__$Event_$Int_$Float_$Void;
lime_app__$Event_$Int_$Float_$Void.__name__ = "lime.app._Event_Int_Float_Void";
lime_app__$Event_$Int_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Float_$Void
};
var lime_app__$Event_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Int_Void"] = lime_app__$Event_$Int_$Int_$Void;
lime_app__$Event_$Int_$Int_$Void.__name__ = "lime.app._Event_Int_Int_Void";
lime_app__$Event_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Int_$Void
};
var lime_app__$Event_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Void"] = lime_app__$Event_$Int_$Void;
lime_app__$Event_$Int_$Void.__name__ = "lime.app._Event_Int_Void";
lime_app__$Event_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Void
};
var lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_lime_ui_JoystickHatPosition_Void"] = lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void;
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.__name__ = "lime.app._Event_Int_lime_ui_JoystickHatPosition_Void";
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void
};
var lime_app__$Event_$String_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Int_Int_Void"] = lime_app__$Event_$String_$Int_$Int_$Void;
lime_app__$Event_$String_$Int_$Int_$Void.__name__ = "lime.app._Event_String_Int_Int_Void";
lime_app__$Event_$String_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$String_$Int_$Int_$Void
};
var lime_app__$Event_$String_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Void"] = lime_app__$Event_$String_$Void;
lime_app__$Event_$String_$Void.__name__ = "lime.app._Event_String_Void";
lime_app__$Event_$String_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$String_$Void
};
var lime_app__$Event_$Void_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Void_Void"] = lime_app__$Event_$Void_$Void;
lime_app__$Event_$Void_$Void.__name__ = "lime.app._Event_Void_Void";
lime_app__$Event_$Void_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function() {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Void_$Void
};
var lime_app__$Event_$lime_$graphics_$RenderContext_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_graphics_RenderContext_Void"] = lime_app__$Event_$lime_$graphics_$RenderContext_$Void;
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.__name__ = "lime.app._Event_lime_graphics_RenderContext_Void";
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$graphics_$RenderContext_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadAxis_Float_Void"] = lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void;
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.__name__ = "lime.app._Event_lime_ui_GamepadAxis_Float_Void";
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadButton_Void"] = lime_app__$Event_$lime_$ui_$GamepadButton_$Void;
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.__name__ = "lime.app._Event_lime_ui_GamepadButton_Void";
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadButton_$Void
};
var lime_app__$Event_$lime_$ui_$Gamepad_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Gamepad_Void"] = lime_app__$Event_$lime_$ui_$Gamepad_$Void;
lime_app__$Event_$lime_$ui_$Gamepad_$Void.__name__ = "lime.app._Event_lime_ui_Gamepad_Void";
lime_app__$Event_$lime_$ui_$Gamepad_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Gamepad_$Void
};
var lime_app__$Event_$lime_$ui_$Joystick_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Joystick_Void"] = lime_app__$Event_$lime_$ui_$Joystick_$Void;
lime_app__$Event_$lime_$ui_$Joystick_$Void.__name__ = "lime.app._Event_lime_ui_Joystick_Void";
lime_app__$Event_$lime_$ui_$Joystick_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Joystick_$Void
};
var lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void"] = lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void;
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.__name__ = "lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void";
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void
};
var lime_app__$Event_$lime_$ui_$Touch_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Touch_Void"] = lime_app__$Event_$lime_$ui_$Touch_$Void;
lime_app__$Event_$lime_$ui_$Touch_$Void.__name__ = "lime.app._Event_lime_ui_Touch_Void";
lime_app__$Event_$lime_$ui_$Touch_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Touch_$Void
};
var lime_app__$Event_$lime_$ui_$Window_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Window_Void"] = lime_app__$Event_$lime_$ui_$Window_$Void;
lime_app__$Event_$lime_$ui_$Window_$Void.__name__ = "lime.app._Event_lime_ui_Window_Void";
lime_app__$Event_$lime_$ui_$Window_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Window_$Void
};
var lime_app__$Event_$lime_$utils_$Resource_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_utils_Resource_Void"] = lime_app__$Event_$lime_$utils_$Resource_$Void;
lime_app__$Event_$lime_$utils_$Resource_$Void.__name__ = "lime.app._Event_lime_utils_Resource_Void";
lime_app__$Event_$lime_$utils_$Resource_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$utils_$Resource_$Void
};
var lime_app__$Event_$ofEvents_$T_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_ofEvents_T_Void"] = lime_app__$Event_$ofEvents_$T_$Void;
lime_app__$Event_$ofEvents_$T_$Void.__name__ = "lime.app._Event_ofEvents_T_Void";
lime_app__$Event_$ofEvents_$T_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,removeAll: function() {
		var len = this.__listeners.length;
		this.__listeners.splice(0,len);
		this.__priorities.splice(0,len);
		this.__repeat.splice(0,len);
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$ofEvents_$T_$Void
};
var lime_graphics_CairoRenderContext = {};
lime_graphics_CairoRenderContext.fromRenderContext = function(context) {
	return context.cairo;
};
var lime_graphics_Canvas2DRenderContext = {};
lime_graphics_Canvas2DRenderContext.fromRenderContext = function(context) {
	return context.canvas2D;
};
var lime_graphics_DOMRenderContext = {};
lime_graphics_DOMRenderContext.fromRenderContext = function(context) {
	return context.dom;
};
var lime_graphics_FlashRenderContext = {};
lime_graphics_FlashRenderContext.fromRenderContext = function(context) {
	return null;
};
var lime_graphics_Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) {
		height = -1;
	}
	if(width == null) {
		width = -1;
	}
	if(offsetY == null) {
		offsetY = 0;
	}
	if(offsetX == null) {
		offsetX = 0;
	}
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	this.version = 0;
	if(type == null) {
		type = lime_graphics_ImageType.CANVAS;
	}
	this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			switch(this.type._hx_index) {
			case 0:
				this.buffer = new lime_graphics_ImageBuffer(null,width,height);
				lime__$internal_graphics_ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null && color != 0) {
					this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				}
				break;
			case 1:
				var elements = width * height * 4;
				var array = null;
				var view = null;
				var buffer1 = null;
				var len = null;
				var this1;
				if(elements != null) {
					this1 = new Uint8Array(elements);
				} else if(array != null) {
					this1 = new Uint8Array(array);
				} else if(view != null) {
					this1 = new Uint8Array(view);
				} else if(buffer1 != null) {
					if(len == null) {
						this1 = new Uint8Array(buffer1,0);
					} else {
						this1 = new Uint8Array(buffer1,0,len);
					}
				} else {
					this1 = null;
				}
				this.buffer = new lime_graphics_ImageBuffer(this1,width,height);
				if(color != null && color != 0) {
					this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				}
				break;
			case 2:
				break;
			default:
			}
		}
	} else {
		this.__fromImageBuffer(buffer);
	}
};
$hxClasses["lime.graphics.Image"] = lime_graphics_Image;
lime_graphics_Image.__name__ = "lime.graphics.Image";
lime_graphics_Image.fromBase64 = function(base64,type) {
	if(base64 == null) {
		return null;
	}
	var image = new lime_graphics_Image();
	image.__fromBase64(base64,type);
	return image;
};
lime_graphics_Image.fromBitmapData = function(bitmapData) {
	if(bitmapData == null) {
		return null;
	}
	return bitmapData.image;
};
lime_graphics_Image.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var image = new lime_graphics_Image();
	if(image.__fromBytes(bytes)) {
		return image;
	} else {
		return null;
	}
};
lime_graphics_Image.fromCanvas = function(canvas) {
	if(canvas == null) {
		return null;
	}
	var buffer = new lime_graphics_ImageBuffer(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	var image = new lime_graphics_Image(buffer);
	image.type = lime_graphics_ImageType.CANVAS;
	return image;
};
lime_graphics_Image.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var image = new lime_graphics_Image();
	if(image.__fromFile(path)) {
		return image;
	} else {
		return null;
	}
};
lime_graphics_Image.fromImageElement = function(image) {
	if(image == null) {
		return null;
	}
	var buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
	buffer.set_src(image);
	var _image = new lime_graphics_Image(buffer);
	_image.type = lime_graphics_ImageType.CANVAS;
	return _image;
};
lime_graphics_Image.loadFromBase64 = function(base64,type) {
	if(base64 == null || type == null) {
		return lime_app_Future.withValue(null);
	}
	return lime__$internal_backend_html5_HTML5HTTPRequest.loadImage("data:" + type + ";base64," + base64);
};
lime_graphics_Image.loadFromBytes = function(bytes) {
	if(bytes == null) {
		return lime_app_Future.withValue(null);
	}
	var type = "";
	if(lime_graphics_Image.__isPNG(bytes)) {
		type = "image/png";
	} else if(lime_graphics_Image.__isJPG(bytes)) {
		type = "image/jpeg";
	} else if(lime_graphics_Image.__isGIF(bytes)) {
		type = "image/gif";
	} else if(lime_graphics_Image.__isWebP(bytes)) {
		type = "image/webp";
	} else {
		return lime_app_Future.withValue(null);
	}
	return lime__$internal_backend_html5_HTML5HTTPRequest.loadImageFromBytes(bytes,type);
};
lime_graphics_Image.loadFromFile = function(path) {
	if(path == null) {
		return lime_app_Future.withValue(null);
	}
	return lime__$internal_backend_html5_HTML5HTTPRequest.loadImage(path);
};
lime_graphics_Image.__isGIF = function(bytes) {
	if(bytes == null || bytes.length < 6) {
		return false;
	}
	var header = bytes.getString(0,6);
	if(header != "GIF87a") {
		return header == "GIF89a";
	} else {
		return true;
	}
};
lime_graphics_Image.__isJPG = function(bytes) {
	if(bytes == null || bytes.length < 4) {
		return false;
	}
	if(bytes.b[0] == 255 && bytes.b[1] == 216 && bytes.b[bytes.length - 2] == 255) {
		return bytes.b[bytes.length - 1] == 217;
	} else {
		return false;
	}
};
lime_graphics_Image.__isPNG = function(bytes) {
	if(bytes == null || bytes.length < 8) {
		return false;
	}
	if(bytes.b[0] == 137 && bytes.b[1] == 80 && bytes.b[2] == 78 && bytes.b[3] == 71 && bytes.b[4] == 13 && bytes.b[5] == 10 && bytes.b[6] == 26) {
		return bytes.b[7] == 10;
	} else {
		return false;
	}
};
lime_graphics_Image.__isWebP = function(bytes) {
	if(bytes == null || bytes.length < 16) {
		return false;
	}
	if(bytes.getString(0,4) == "RIFF") {
		return bytes.getString(8,4) == "WEBP";
	} else {
		return false;
	}
};
lime_graphics_Image.prototype = {
	clone: function() {
		if(this.buffer != null) {
			if(this.type == lime_graphics_ImageType.CANVAS) {
				lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(this);
			} else {
				lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			}
			var image = new lime_graphics_Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
			image.version = this.version;
			return image;
		} else {
			return new lime_graphics_Image(null,this.offsetX,this.offsetY,this.width,this.height,null,this.type);
		}
	}
	,colorTransform: function(rect,colorMatrix) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageDataUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.colorTransform(rect.__toFlashRectangle(),lime_math_ColorMatrix.__toFlashColorTransform(colorMatrix));
			break;
		default:
		}
	}
	,copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) {
			return;
		}
		if(destChannel == lime_graphics_ImageChannel.ALPHA && !this.get_transparent()) {
			return;
		}
		if(sourceRect.width <= 0 || sourceRect.height <= 0) {
			return;
		}
		if(sourceRect.x + sourceRect.width > sourceImage.width) {
			sourceRect.width = sourceImage.width - sourceRect.x;
		}
		if(sourceRect.y + sourceRect.height > sourceImage.height) {
			sourceRect.height = sourceImage.height - sourceRect.y;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
			lime__$internal_graphics_ImageDataUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel._hx_index) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel._hx_index) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	}
	,copyPixels: function(sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) {
			mergeAlpha = false;
		}
		if(this.buffer == null || sourceImage == null) {
			return;
		}
		if(sourceRect.width <= 0 || sourceRect.height <= 0) {
			return;
		}
		if(this.width <= 0 || this.height <= 0) {
			return;
		}
		if(sourceRect.x + sourceRect.width > sourceImage.width) {
			sourceRect.width = sourceImage.width - sourceRect.x;
		}
		if(sourceRect.y + sourceRect.height > sourceImage.height) {
			sourceRect.height = sourceImage.height - sourceRect.y;
		}
		if(sourceRect.x < 0) {
			sourceRect.width += sourceRect.x;
			sourceRect.x = 0;
		}
		if(sourceRect.y < 0) {
			sourceRect.height += sourceRect.y;
			sourceRect.y = 0;
		}
		if(destPoint.x + sourceRect.width > this.width) {
			sourceRect.width = this.width - destPoint.x;
		}
		if(destPoint.y + sourceRect.height > this.height) {
			sourceRect.height = this.height - destPoint.y;
		}
		if(destPoint.x < 0) {
			sourceRect.width += destPoint.x;
			sourceRect.x -= destPoint.x;
			destPoint.x = 0;
		}
		if(destPoint.y < 0) {
			sourceRect.height += destPoint.y;
			sourceRect.y -= destPoint.y;
			destPoint.y = 0;
		}
		if(sourceImage == this && destPoint.x < sourceRect.get_right() && destPoint.y < sourceRect.get_bottom()) {
			sourceImage = this.clone();
		}
		if(alphaImage == sourceImage && (alphaPoint == null || alphaPoint.x == 0 && alphaPoint.y == 0)) {
			alphaImage = null;
			alphaPoint = null;
		}
		switch(this.type._hx_index) {
		case 0:
			if(alphaImage != null) {
				lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
				lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
				if(alphaImage != null) {
					lime__$internal_graphics_ImageCanvasUtil.convertToData(alphaImage);
				}
				lime__$internal_graphics_ImageDataUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			} else {
				lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(this);
				lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(sourceImage);
				lime__$internal_graphics_ImageCanvasUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			}
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
			if(alphaImage != null) {
				lime__$internal_graphics_ImageCanvasUtil.convertToData(alphaImage);
			}
			lime__$internal_graphics_ImageDataUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 2:
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			if(alphaImage != null && alphaPoint != null) {
				alphaPoint.offset(alphaImage.offsetX,alphaImage.offsetY);
			}
			this.buffer.__srcBitmapData.copyPixels(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),alphaImage != null ? alphaImage.buffer.get_src() : null,alphaPoint != null ? alphaPoint.__toFlashPoint() : null,mergeAlpha);
			break;
		default:
		}
	}
	,encode: function(format,quality) {
		if(quality == null) {
			quality = 90;
		}
		if(format == null) {
			return lime__$internal_format_PNG.encode(this);
		} else {
			switch(format._hx_index) {
			case 0:
				return lime__$internal_format_BMP.encode(this);
			case 1:
				return lime__$internal_format_JPEG.encode(this,quality);
			case 2:
				return lime__$internal_format_PNG.encode(this);
			}
		}
	}
	,fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			if(this.buffer.data.length == 0) {
				return;
			}
			lime__$internal_graphics_ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb1;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					argb = argb1;
				}
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	}
	,floodFill: function(x,y,color,format) {
		if(this.buffer == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.floodFill(this,x,y,color,format);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageDataUtil.floodFill(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb1;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					argb = argb1;
				}
			}
			this.buffer.__srcBitmapData.floodFill(x + this.offsetX,y + this.offsetY,argb);
			break;
		default:
		}
	}
	,getColorBoundsRect: function(mask,color,findColor,format) {
		if(findColor == null) {
			findColor = true;
		}
		if(this.buffer == null) {
			return null;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			return lime__$internal_graphics_ImageDataUtil.getColorBoundsRect(this,mask,color,findColor,format);
		case 1:
			return lime__$internal_graphics_ImageDataUtil.getColorBoundsRect(this,mask,color,findColor,format);
		case 2:
			var rect = this.buffer.__srcBitmapData.getColorBoundsRect(mask,color,findColor);
			return new lime_math_Rectangle(rect.x,rect.y,rect.width,rect.height);
		default:
			return null;
		}
	}
	,getPixel: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:
			return lime__$internal_graphics_ImageCanvasUtil.getPixel(this,x,y,format);
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			return lime__$internal_graphics_ImageDataUtil.getPixel(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel(x + this.offsetX,y + this.offsetY);
			if(format == null) {
				var this1 = 0;
				var rgba = this1;
				rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
				var rgba1 = rgba;
				return rgba1;
			} else {
				switch(format) {
				case 1:
					return color;
				case 2:
					var this1 = 0;
					var bgra = this1;
					bgra = (color & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color >>> 16 & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var bgra1 = bgra;
					return bgra1;
				default:
					var this1 = 0;
					var rgba = this1;
					rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var rgba1 = rgba;
					return rgba1;
				}
			}
			break;
		default:
			return 0;
		}
	}
	,getPixel32: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:
			return lime__$internal_graphics_ImageCanvasUtil.getPixel32(this,x,y,format);
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			return lime__$internal_graphics_ImageDataUtil.getPixel32(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel32(x + this.offsetX,y + this.offsetY);
			if(format == null) {
				var this1 = 0;
				var rgba = this1;
				rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
				var rgba1 = rgba;
				return rgba1;
			} else {
				switch(format) {
				case 1:
					return color;
				case 2:
					var this1 = 0;
					var bgra = this1;
					bgra = (color & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color >>> 16 & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var bgra1 = bgra;
					return bgra1;
				default:
					var this1 = 0;
					var rgba = this1;
					rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var rgba1 = rgba;
					return rgba1;
				}
			}
			break;
		default:
			return 0;
		}
	}
	,getPixels: function(rect,format) {
		if(this.buffer == null) {
			return null;
		}
		switch(this.type._hx_index) {
		case 0:
			return lime__$internal_graphics_ImageCanvasUtil.getPixels(this,rect,format);
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			return lime__$internal_graphics_ImageDataUtil.getPixels(this,rect,format);
		case 2:
			return null;
		default:
			return null;
		}
	}
	,merge: function(sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
		if(this.buffer == null || sourceImage == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(this);
			lime__$internal_graphics_ImageCanvasUtil.merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
			lime__$internal_graphics_ImageDataUtil.merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 2:
			sourceRect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.merge(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		default:
			return;
		}
	}
	,resize: function(newWidth,newHeight) {
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.resize(this,newWidth,newHeight);
			break;
		case 1:
			lime__$internal_graphics_ImageDataUtil.resize(this,newWidth,newHeight);
			break;
		case 2:
			break;
		default:
		}
		this.buffer.width = newWidth;
		this.buffer.height = newHeight;
		this.offsetX = 0;
		this.offsetY = 0;
		this.width = newWidth;
		this.height = newHeight;
	}
	,scroll: function(x,y) {
		if(this.buffer == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.scroll(this,x,y);
			break;
		case 1:
			this.copyPixels(this,this.get_rect(),new lime_math_Vector2(x,y));
			break;
		case 2:
			this.buffer.__srcBitmapData.scroll(x + this.offsetX,y + this.offsetX);
			break;
		default:
		}
	}
	,setPixel: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.setPixel(this,x,y,color,format);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageDataUtil.setPixel(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb1;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					argb = argb1;
				}
			}
			this.buffer.__srcBitmapData.setPixel(x + this.offsetX,y + this.offsetX,argb);
			break;
		default:
		}
	}
	,setPixel32: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.setPixel32(this,x,y,color,format);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageDataUtil.setPixel32(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb1;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					argb = argb1;
				}
			}
			this.buffer.__srcBitmapData.setPixel32(x + this.offsetX,y + this.offsetY,argb);
			break;
		default:
		}
	}
	,setPixels: function(rect,bytePointer,format,endian) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		if(endian == null) {
			endian = lime_system_Endian.BIG_ENDIAN;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.setPixels(this,rect,bytePointer,format,endian);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageDataUtil.setPixels(this,rect,bytePointer,format,endian);
			break;
		case 2:
			break;
		default:
		}
	}
	,threshold: function(sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format) {
		if(copySource == null) {
			copySource = false;
		}
		if(mask == null) {
			mask = -1;
		}
		if(color == null) {
			color = 0;
		}
		if(this.buffer == null || sourceImage == null || sourceRect == null) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			lime__$internal_graphics_ImageCanvasUtil.convertToData(sourceImage);
			return lime__$internal_graphics_ImageDataUtil.threshold(this,sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format);
		case 2:
			var _color;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb = this1;
				argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				_color = argb;
			} else {
				switch(format) {
				case 1:
					_color = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb = this1;
					argb = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					_color = argb;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb = this1;
					argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					_color = argb;
				}
			}
			var _mask;
			if(format == null) {
				var rgba = mask;
				var this1 = 0;
				var argb = this1;
				argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				_mask = argb;
			} else {
				switch(format) {
				case 1:
					_mask = mask;
					break;
				case 2:
					var bgra = mask;
					var this1 = 0;
					var argb = this1;
					argb = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					_mask = argb;
					break;
				default:
					var rgba = mask;
					var this1 = 0;
					var argb = this1;
					argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					_mask = argb;
				}
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			return this.buffer.__srcBitmapData.threshold(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),operation,threshold,_color,_mask,copySource);
		default:
		}
		return 0;
	}
	,__clipRect: function(r) {
		if(r == null) {
			return null;
		}
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) {
				return null;
			}
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) {
				return null;
			}
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) {
				return null;
			}
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) {
				return null;
			}
		}
		return r;
	}
	,__fromBase64: function(base64,type,onload) {
		var _gthis = this;
		var image = new window.Image ();
		var image_onLoaded = function(event) {
			_gthis.buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.offsetX = 0;
			_gthis.offsetY = 0;
			_gthis.width = _gthis.buffer.width;
			_gthis.height = _gthis.buffer.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.addEventListener("load",image_onLoaded,false);
		image.src = "data:" + type + ";base64," + base64;
	}
	,__fromBytes: function(bytes,onload) {
		var type = "";
		if(lime_graphics_Image.__isPNG(bytes)) {
			type = "image/png";
		} else if(lime_graphics_Image.__isJPG(bytes)) {
			type = "image/jpeg";
		} else if(lime_graphics_Image.__isGIF(bytes)) {
			type = "image/gif";
		} else {
			return false;
		}
		this.__fromBase64(lime__$internal_format_Base64.encode(bytes),type,onload);
		return true;
	}
	,__fromFile: function(path,onload,onerror) {
		var _gthis = this;
		var image = new window.Image ();
		if(!lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin(path)) {
			image.crossOrigin = "Anonymous";
		}
		image.onload = function(_) {
			_gthis.buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.width = image.width;
			_gthis.height = image.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.onerror = function(_) {
			if(onerror != null) {
				onerror();
			}
		};
		image.src = path;
		var image1 = image.complete;
		return true;
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) {
				this.width = buffer.width;
			}
			if(this.height == -1) {
				this.height = buffer.height;
			}
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
		}
		return this.buffer.data;
	}
	,set_data: function(value) {
		return this.buffer.data = value;
	}
	,get_format: function() {
		return this.buffer.format;
	}
	,set_format: function(value) {
		if(this.buffer.format != value) {
			if(this.type._hx_index == 1) {
				lime__$internal_graphics_ImageDataUtil.setFormat(this,value);
			}
		}
		return this.buffer.format = value;
	}
	,get_powerOfTwo: function() {
		if(this.buffer.width != 0 && (this.buffer.width & ~this.buffer.width + 1) == this.buffer.width) {
			if(this.buffer.height != 0) {
				return (this.buffer.height & ~this.buffer.height + 1) == this.buffer.height;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	,set_powerOfTwo: function(value) {
		if(value != this.get_powerOfTwo()) {
			var newWidth = 1;
			var newHeight = 1;
			while(newWidth < this.buffer.width) newWidth <<= 1;
			while(newHeight < this.buffer.height) newHeight <<= 1;
			if(newWidth == this.buffer.width && newHeight == this.buffer.height) {
				return value;
			}
			switch(this.type._hx_index) {
			case 0:
				lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
				lime__$internal_graphics_ImageDataUtil.resizeBuffer(this,newWidth,newHeight);
				break;
			case 1:
				lime__$internal_graphics_ImageDataUtil.resizeBuffer(this,newWidth,newHeight);
				break;
			case 2:
				break;
			default:
			}
		}
		return value;
	}
	,get_premultiplied: function() {
		return this.buffer.premultiplied;
	}
	,set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			switch(this.type._hx_index) {
			case 0:case 1:
				lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
				lime__$internal_graphics_ImageDataUtil.multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			if(this.type._hx_index == 1) {
				lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
				lime__$internal_graphics_ImageDataUtil.unmultiplyAlpha(this);
			}
		}
		return value;
	}
	,get_rect: function() {
		return new lime_math_Rectangle(0,0,this.width,this.height);
	}
	,get_src: function() {
		if(this.buffer.__srcCanvas == null && (this.buffer.data != null || this.type == lime_graphics_ImageType.DATA)) {
			lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(this);
		}
		return this.buffer.get_src();
	}
	,set_src: function(value) {
		return this.buffer.set_src(value);
	}
	,get_transparent: function() {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent = value;
	}
	,__class__: lime_graphics_Image
};
var lime_graphics_ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) {
		bitsPerPixel = 32;
	}
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	this.format = format == null ? 0 : format;
	this.premultiplied = false;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime_graphics_ImageBuffer;
lime_graphics_ImageBuffer.__name__ = "lime.graphics.ImageBuffer";
lime_graphics_ImageBuffer.prototype = {
	clone: function() {
		var buffer = new lime_graphics_ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			var elements = this.data.byteLength;
			var array = null;
			var view = null;
			var buffer1 = null;
			var len = null;
			var this1;
			if(elements != null) {
				this1 = new Uint8Array(elements);
			} else if(array != null) {
				this1 = new Uint8Array(array);
			} else if(view != null) {
				this1 = new Uint8Array(view);
			} else if(buffer1 != null) {
				if(len == null) {
					this1 = new Uint8Array(buffer1,0);
				} else {
					this1 = new Uint8Array(buffer1,0,len);
				}
			} else {
				this1 = null;
			}
			buffer.data = this1;
			var elements = null;
			var array = null;
			var view = this.data;
			var buffer1 = null;
			var len = null;
			var this1;
			if(elements != null) {
				this1 = new Uint8Array(elements);
			} else if(array != null) {
				this1 = new Uint8Array(array);
			} else if(view != null) {
				this1 = new Uint8Array(view);
			} else if(buffer1 != null) {
				if(len == null) {
					this1 = new Uint8Array(buffer1,0);
				} else {
					this1 = new Uint8Array(buffer1,0,len);
				}
			} else {
				this1 = null;
			}
			var copy = this1;
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else {
			buffer.__srcImage = this.__srcImage;
		}
		buffer.bitsPerPixel = this.bitsPerPixel;
		buffer.format = this.format;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	}
	,get_src: function() {
		if(this.__srcImage != null) {
			return this.__srcImage;
		}
		return this.__srcCanvas;
	}
	,set_src: function(value) {
		if(((value) instanceof Image)) {
			this.__srcImage = value;
		} else if(((value) instanceof HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	}
	,get_stride: function() {
		return this.width * (this.bitsPerPixel / 8 | 0);
	}
	,__class__: lime_graphics_ImageBuffer
};
var lime_graphics_ImageChannel = $hxEnums["lime.graphics.ImageChannel"] = { __ename__:"lime.graphics.ImageChannel",__constructs__:null
	,RED: {_hx_name:"RED",_hx_index:0,__enum__:"lime.graphics.ImageChannel",toString:$estr}
	,GREEN: {_hx_name:"GREEN",_hx_index:1,__enum__:"lime.graphics.ImageChannel",toString:$estr}
	,BLUE: {_hx_name:"BLUE",_hx_index:2,__enum__:"lime.graphics.ImageChannel",toString:$estr}
	,ALPHA: {_hx_name:"ALPHA",_hx_index:3,__enum__:"lime.graphics.ImageChannel",toString:$estr}
};
lime_graphics_ImageChannel.__constructs__ = [lime_graphics_ImageChannel.RED,lime_graphics_ImageChannel.GREEN,lime_graphics_ImageChannel.BLUE,lime_graphics_ImageChannel.ALPHA];
var lime_graphics_ImageFileFormat = $hxEnums["lime.graphics.ImageFileFormat"] = { __ename__:"lime.graphics.ImageFileFormat",__constructs__:null
	,BMP: {_hx_name:"BMP",_hx_index:0,__enum__:"lime.graphics.ImageFileFormat",toString:$estr}
	,JPEG: {_hx_name:"JPEG",_hx_index:1,__enum__:"lime.graphics.ImageFileFormat",toString:$estr}
	,PNG: {_hx_name:"PNG",_hx_index:2,__enum__:"lime.graphics.ImageFileFormat",toString:$estr}
};
lime_graphics_ImageFileFormat.__constructs__ = [lime_graphics_ImageFileFormat.BMP,lime_graphics_ImageFileFormat.JPEG,lime_graphics_ImageFileFormat.PNG];
var lime_graphics_ImageType = $hxEnums["lime.graphics.ImageType"] = { __ename__:"lime.graphics.ImageType",__constructs__:null
	,CANVAS: {_hx_name:"CANVAS",_hx_index:0,__enum__:"lime.graphics.ImageType",toString:$estr}
	,DATA: {_hx_name:"DATA",_hx_index:1,__enum__:"lime.graphics.ImageType",toString:$estr}
	,FLASH: {_hx_name:"FLASH",_hx_index:2,__enum__:"lime.graphics.ImageType",toString:$estr}
	,CUSTOM: {_hx_name:"CUSTOM",_hx_index:3,__enum__:"lime.graphics.ImageType",toString:$estr}
};
lime_graphics_ImageType.__constructs__ = [lime_graphics_ImageType.CANVAS,lime_graphics_ImageType.DATA,lime_graphics_ImageType.FLASH,lime_graphics_ImageType.CUSTOM];
var lime_graphics_OpenGLES2RenderContext = {};
lime_graphics_OpenGLES2RenderContext.fromGL = function(gl) {
	return null;
};
lime_graphics_OpenGLES2RenderContext.fromOpenGLES3RenderContext = function(gl) {
	return null;
};
lime_graphics_OpenGLES2RenderContext.fromRenderContext = function(context) {
	return null;
};
lime_graphics_OpenGLES2RenderContext.fromWebGLRenderContext = function(gl) {
	return null;
};
var lime_graphics_OpenGLES3RenderContext = {};
lime_graphics_OpenGLES3RenderContext.fromRenderContext = function(context) {
	return null;
};
lime_graphics_OpenGLES3RenderContext.fromGL = function(gl) {
	return null;
};
lime_graphics_OpenGLES3RenderContext.fromOpenGLES2RenderContext = function(context) {
	return null;
};
lime_graphics_OpenGLES3RenderContext.fromWebGLRenderContext = function(context) {
	return null;
};
lime_graphics_OpenGLES3RenderContext.fromWebGL2RenderContext = function(context) {
	return null;
};
var lime_graphics_OpenGLRenderContext = {};
lime_graphics_OpenGLRenderContext.fromRenderContext = function(context) {
	return null;
};
var lime_graphics_RenderContext = function() {
};
$hxClasses["lime.graphics.RenderContext"] = lime_graphics_RenderContext;
lime_graphics_RenderContext.__name__ = "lime.graphics.RenderContext";
lime_graphics_RenderContext.prototype = {
	__class__: lime_graphics_RenderContext
};
var lime_graphics_WebGL2RenderContext = {};
lime_graphics_WebGL2RenderContext.bufferData = function(this1,target,srcData,usage,srcOffset,length) {
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,length);
	} else {
		this1.bufferData(target,srcData,usage);
	}
};
lime_graphics_WebGL2RenderContext.bufferSubData = function(this1,target,dstByteOffset,srcData,srcOffset,length) {
	if(srcOffset != null) {
		this1.bufferSubData(target,dstByteOffset,srcData,srcOffset,length);
	} else {
		this1.bufferSubData(target,dstByteOffset,srcData);
	}
};
lime_graphics_WebGL2RenderContext.compressedTexImage2D = function(this1,target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride) {
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
};
lime_graphics_WebGL2RenderContext.compressedTexSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride) {
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
};
lime_graphics_WebGL2RenderContext.getBufferSubData = function(this1,target,srcByteOffset,dstData,srcOffset,length) {
	if(srcOffset != null) {
		this1.getBufferSubData(target,srcByteOffset,dstData,srcOffset,length);
	} else {
		this1.getBufferSubData(target,srcByteOffset,dstData);
	}
};
lime_graphics_WebGL2RenderContext.readPixels = function(this1,x,y,width,height,format,type,pixels,dstOffset) {
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
};
lime_graphics_WebGL2RenderContext.texImage2D = function(this1,target,level,internalformat,width,height,border,format,type,srcData,srcOffset) {
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
};
lime_graphics_WebGL2RenderContext.texSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset) {
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
};
lime_graphics_WebGL2RenderContext.uniform1fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform1fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1fv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform1iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform1iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1iv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform2fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform2fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2fv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform2iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform2iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2iv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform3fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform3fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3fv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform3iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform3iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3iv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform4fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform4fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4fv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniform4iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform4iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4iv(location,data);
	}
};
lime_graphics_WebGL2RenderContext.uniformMatrix2fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix2fv(location,transpose,data);
	}
};
lime_graphics_WebGL2RenderContext.uniformMatrix3fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix3fv(location,transpose,data);
	}
};
lime_graphics_WebGL2RenderContext.uniformMatrix4fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix4fv(location,transpose,data);
	}
};
lime_graphics_WebGL2RenderContext.fromGL = function(gl) {
	return null;
};
lime_graphics_WebGL2RenderContext.fromRenderContext = function(context) {
	return context.webgl2;
};
lime_graphics_WebGL2RenderContext.toWebGLRenderContext = function(gl) {
	return gl;
};
var lime_graphics_WebGLRenderContext = {};
lime_graphics_WebGLRenderContext.bufferData = function(this1,target,srcData,usage) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,null);
	} else {
		this1.bufferData(target,srcData,usage);
	}
};
lime_graphics_WebGLRenderContext.bufferSubData = function(this1,target,offset,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.bufferSubData(target,offset,srcData,srcOffset,null);
	} else {
		this1.bufferSubData(target,offset,srcData);
	}
};
lime_graphics_WebGLRenderContext.compressedTexImage2D = function(this1,target,level,internalformat,width,height,border,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,null);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
};
lime_graphics_WebGLRenderContext.compressedTexSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,null);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
};
lime_graphics_WebGLRenderContext.readPixels = function(this1,x,y,width,height,format,type,pixels) {
	var dstOffset = null;
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
};
lime_graphics_WebGLRenderContext.texImage2D = function(this1,target,level,internalformat,width,height,border,format,type,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
};
lime_graphics_WebGLRenderContext.texSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,type,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
};
lime_graphics_WebGLRenderContext.uniformMatrix2fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix2fv(location,transpose,data);
	}
};
lime_graphics_WebGLRenderContext.uniformMatrix3fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix3fv(location,transpose,data);
	}
};
lime_graphics_WebGLRenderContext.uniformMatrix4fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix4fv(location,transpose,data);
	}
};
lime_graphics_WebGLRenderContext.fromWebGL2RenderContext = function(gl) {
	return gl;
};
lime_graphics_WebGLRenderContext.fromRenderContext = function(context) {
	return context.webgl;
};
lime_graphics_WebGLRenderContext.fromGL = function(gl) {
	return lime_graphics_opengl_GL.context;
};
var lime_graphics_cairo_Cairo = function(surface) {
	var tmp = surface != null;
};
$hxClasses["lime.graphics.cairo.Cairo"] = lime_graphics_cairo_Cairo;
lime_graphics_cairo_Cairo.__name__ = "lime.graphics.cairo.Cairo";
lime_graphics_cairo_Cairo.get_version = function() {
	return 0;
};
lime_graphics_cairo_Cairo.get_versionString = function() {
	return "";
};
lime_graphics_cairo_Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	}
	,arcNegative: function(xc,yc,radius,angle1,angle2) {
	}
	,clip: function() {
	}
	,clipExtents: function(x1,y1,x2,y2) {
	}
	,clipPreserve: function() {
	}
	,closePath: function() {
	}
	,copyPage: function() {
	}
	,curveTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,fill: function() {
	}
	,fillExtents: function(x1,y1,x2,y2) {
	}
	,fillPreserve: function() {
	}
	,getOperator: function() {
		return 0;
	}
	,identityMatrix: function() {
	}
	,inClip: function(x,y) {
		return false;
	}
	,inFill: function(x,y) {
		return false;
	}
	,inStroke: function(x,y) {
		return false;
	}
	,lineTo: function(x,y) {
	}
	,mask: function(pattern) {
	}
	,maskSurface: function(surface,x,y) {
	}
	,moveTo: function(x,y) {
	}
	,newPath: function() {
	}
	,paint: function() {
	}
	,paintWithAlpha: function(alpha) {
	}
	,popGroup: function() {
		return null;
	}
	,popGroupToSource: function() {
	}
	,pushGroup: function() {
	}
	,pushGroupWithContent: function(content) {
	}
	,recreate: function(surface) {
	}
	,rectangle: function(x,y,width,height) {
	}
	,relCurveTo: function(dx1,dy1,dx2,dy2,dx3,dy3) {
	}
	,relLineTo: function(dx,dy) {
	}
	,relMoveTo: function(dx,dy) {
	}
	,resetClip: function() {
	}
	,restore: function() {
	}
	,rotate: function(amount) {
	}
	,save: function() {
	}
	,scale: function(x,y) {
	}
	,setFontSize: function(size) {
	}
	,setOperator: function(value) {
		return value;
	}
	,setSourceRGB: function(r,g,b) {
	}
	,setSourceRGBA: function(r,g,b,a) {
	}
	,setSourceSurface: function(surface,x,y) {
	}
	,showGlyphs: function(glyphs) {
	}
	,showPage: function() {
	}
	,showText: function(utf8) {
	}
	,status: function() {
		return 0;
	}
	,stroke: function() {
	}
	,strokeExtents: function(x1,y1,x2,y2) {
	}
	,strokePreserve: function() {
	}
	,textPath: function(utf8) {
	}
	,transform: function(matrix) {
	}
	,translate: function(x,y) {
	}
	,get_antialias: function() {
		return 0;
	}
	,set_antialias: function(value) {
		return value;
	}
	,get_currentPoint: function() {
		return null;
	}
	,get_dash: function() {
		return [];
	}
	,set_dash: function(value) {
		return value;
	}
	,get_dashCount: function() {
		return 0;
	}
	,get_fillRule: function() {
		return 0;
	}
	,set_fillRule: function(value) {
		return value;
	}
	,get_fontFace: function() {
		return 0;
	}
	,set_fontFace: function(value) {
		return value;
	}
	,get_fontOptions: function() {
		return null;
	}
	,set_fontOptions: function(value) {
		return value;
	}
	,get_groupTarget: function() {
		return 0;
	}
	,get_hasCurrentPoint: function() {
		return false;
	}
	,get_lineCap: function() {
		return 0;
	}
	,set_lineCap: function(value) {
		return value;
	}
	,get_lineJoin: function() {
		return 0;
	}
	,set_lineJoin: function(value) {
		return value;
	}
	,get_lineWidth: function() {
		return 0;
	}
	,set_lineWidth: function(value) {
		return value;
	}
	,get_matrix: function() {
		return null;
	}
	,set_matrix: function(value) {
		return value;
	}
	,get_miterLimit: function() {
		return 0;
	}
	,set_miterLimit: function(value) {
		return value;
	}
	,get_source: function() {
		return 0;
	}
	,set_source: function(value) {
		return value;
	}
	,get_target: function() {
		return 0;
	}
	,get_tolerance: function() {
		return 0;
	}
	,set_tolerance: function(value) {
		return value;
	}
	,__class__: lime_graphics_cairo_Cairo
};
var lime_graphics_cairo_CairoFontFace = {};
lime_graphics_cairo_CairoFontFace._new = function() {
	var this1 = null;
	return this1;
};
lime_graphics_cairo_CairoFontFace.status = function(this1) {
	return 0;
};
var lime_graphics_cairo_CairoFontOptions = {};
lime_graphics_cairo_CairoFontOptions._new = function() {
	var this1 = null;
	return this1;
};
lime_graphics_cairo_CairoFontOptions.get_antialias = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoFontOptions.set_antialias = function(this1,value) {
	return value;
};
lime_graphics_cairo_CairoFontOptions.get_hintMetrics = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoFontOptions.set_hintMetrics = function(this1,value) {
	return value;
};
lime_graphics_cairo_CairoFontOptions.get_hintStyle = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoFontOptions.set_hintStyle = function(this1,value) {
	return value;
};
lime_graphics_cairo_CairoFontOptions.get_subpixelOrder = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoFontOptions.set_subpixelOrder = function(this1,value) {
	return value;
};
var lime_graphics_cairo_CairoGlyph = function(index,x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.index = index;
	this.x = x;
	this.y = y;
};
$hxClasses["lime.graphics.cairo.CairoGlyph"] = lime_graphics_cairo_CairoGlyph;
lime_graphics_cairo_CairoGlyph.__name__ = "lime.graphics.cairo.CairoGlyph";
lime_graphics_cairo_CairoGlyph.prototype = {
	__class__: lime_graphics_cairo_CairoGlyph
};
var lime_graphics_cairo_CairoPattern = {};
lime_graphics_cairo_CairoPattern._new = function(handle) {
	var this1 = handle;
	return this1;
};
lime_graphics_cairo_CairoPattern.addColorStopRGB = function(this1,offset,r,g,b) {
};
lime_graphics_cairo_CairoPattern.addColorStopRGBA = function(this1,offset,r,g,b,a) {
};
lime_graphics_cairo_CairoPattern.createForSurface = function(surface) {
	return 0;
};
lime_graphics_cairo_CairoPattern.createLinear = function(x0,y0,x1,y1) {
	return 0;
};
lime_graphics_cairo_CairoPattern.createRadial = function(cx0,cy0,radius0,cx1,cy1,radius1) {
	return 0;
};
lime_graphics_cairo_CairoPattern.createRGB = function(r,g,b) {
	return 0;
};
lime_graphics_cairo_CairoPattern.createRGBA = function(r,g,b,a) {
	return 0;
};
lime_graphics_cairo_CairoPattern.get_colorStopCount = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoPattern.get_extend = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoPattern.set_extend = function(this1,value) {
	return value;
};
lime_graphics_cairo_CairoPattern.get_filter = function(this1) {
	return 0;
};
lime_graphics_cairo_CairoPattern.set_filter = function(this1,value) {
	return value;
};
lime_graphics_cairo_CairoPattern.get_matrix = function(this1) {
	return null;
};
lime_graphics_cairo_CairoPattern.set_matrix = function(this1,value) {
	return value;
};
var lime_graphics_cairo_CairoSurface = {};
lime_graphics_cairo_CairoSurface.flush = function(this1) {
};
var lime_graphics_opengl_GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime_graphics_opengl_GL;
lime_graphics_opengl_GL.__name__ = "lime.graphics.opengl.GL";
lime_graphics_opengl_GL.activeTexture = function(texture) {
	lime_graphics_opengl_GL.context.activeTexture(texture);
};
lime_graphics_opengl_GL.attachShader = function(program,shader) {
	lime_graphics_opengl_GL.context.attachShader(program,shader);
};
lime_graphics_opengl_GL.beginQuery = function(target,query) {
	lime_graphics_opengl_GL.context.beginQuery(target,query);
};
lime_graphics_opengl_GL.beginTransformFeedback = function(primitiveNode) {
	lime_graphics_opengl_GL.context.beginTransformFeedback(primitiveNode);
};
lime_graphics_opengl_GL.bindAttribLocation = function(program,index,name) {
	lime_graphics_opengl_GL.context.bindAttribLocation(program,index,name);
};
lime_graphics_opengl_GL.bindBuffer = function(target,buffer) {
	lime_graphics_opengl_GL.context.bindBuffer(target,buffer);
};
lime_graphics_opengl_GL.bindBufferBase = function(target,index,buffer) {
	lime_graphics_opengl_GL.context.bindBufferBase(target,index,buffer);
};
lime_graphics_opengl_GL.bindBufferRange = function(target,index,buffer,offset,size) {
	lime_graphics_opengl_GL.context.bindBufferRange(target,index,buffer,offset,lime_utils_DataPointer.fromFloat(size));
};
lime_graphics_opengl_GL.bindFramebuffer = function(target,framebuffer) {
	lime_graphics_opengl_GL.context.bindFramebuffer(target,framebuffer);
};
lime_graphics_opengl_GL.bindRenderbuffer = function(target,renderbuffer) {
	lime_graphics_opengl_GL.context.bindRenderbuffer(target,renderbuffer);
};
lime_graphics_opengl_GL.bindSampler = function(unit,sampler) {
	lime_graphics_opengl_GL.context.bindSampler(unit,sampler);
};
lime_graphics_opengl_GL.bindTexture = function(target,texture) {
	lime_graphics_opengl_GL.context.bindTexture(target,texture);
};
lime_graphics_opengl_GL.bindTransformFeedback = function(target,transformFeedback) {
	lime_graphics_opengl_GL.context.bindTransformFeedback(target,transformFeedback);
};
lime_graphics_opengl_GL.bindVertexArray = function(vertexArray) {
	lime_graphics_opengl_GL.context.bindVertexArray(vertexArray);
};
lime_graphics_opengl_GL.blitFramebuffer = function(srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter) {
	lime_graphics_opengl_GL.context.blitFramebuffer(srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter);
};
lime_graphics_opengl_GL.blendColor = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.blendColor(red,green,blue,alpha);
};
lime_graphics_opengl_GL.blendEquation = function(mode) {
	lime_graphics_opengl_GL.context.blendEquation(mode);
};
lime_graphics_opengl_GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	lime_graphics_opengl_GL.context.blendEquationSeparate(modeRGB,modeAlpha);
};
lime_graphics_opengl_GL.blendFunc = function(sfactor,dfactor) {
	lime_graphics_opengl_GL.context.blendFunc(sfactor,dfactor);
};
lime_graphics_opengl_GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	lime_graphics_opengl_GL.context.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
};
lime_graphics_opengl_GL.bufferDataWEBGL = function(target,srcData,usage,srcOffset,length) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,length);
	} else {
		this1.bufferData(target,srcData,usage);
	}
};
lime_graphics_opengl_GL.bufferSubDataWEBGL = function(target,dstByteOffset,srcData,srcOffset,length) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.bufferSubData(target,dstByteOffset,srcData,srcOffset,length);
	} else {
		this1.bufferSubData(target,dstByteOffset,srcData);
	}
};
lime_graphics_opengl_GL.checkFramebufferStatus = function(target) {
	return lime_graphics_opengl_GL.context.checkFramebufferStatus(target);
};
lime_graphics_opengl_GL.clear = function(mask) {
	lime_graphics_opengl_GL.context.clear(mask);
};
lime_graphics_opengl_GL.clearBufferfi = function(buffer,drawbuffer,depth,stencil) {
	lime_graphics_opengl_GL.context.clearBufferfi(buffer,drawbuffer,depth,stencil);
};
lime_graphics_opengl_GL.clearBufferfvWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	lime_graphics_opengl_GL.context.clearBufferfv(buffer,drawbuffer,values,srcOffset);
};
lime_graphics_opengl_GL.clearBufferivWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	lime_graphics_opengl_GL.context.clearBufferiv(buffer,drawbuffer,values,srcOffset);
};
lime_graphics_opengl_GL.clearBufferuivWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	lime_graphics_opengl_GL.context.clearBufferuiv(buffer,drawbuffer,values,srcOffset);
};
lime_graphics_opengl_GL.clearColor = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.clearColor(red,green,blue,alpha);
};
lime_graphics_opengl_GL.clearDepth = function(depth) {
	lime_graphics_opengl_GL.context.clearDepth(depth);
};
lime_graphics_opengl_GL.clearStencil = function(s) {
	lime_graphics_opengl_GL.context.clearStencil(s);
};
lime_graphics_opengl_GL.clientWaitSync = function(sync,flags,timeout) {
	return lime_graphics_opengl_GL.context.clientWaitSync(sync,flags,timeout);
};
lime_graphics_opengl_GL.colorMask = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.colorMask(red,green,blue,alpha);
};
lime_graphics_opengl_GL.compileShader = function(shader) {
	lime_graphics_opengl_GL.context.compileShader(shader);
};
lime_graphics_opengl_GL.compressedTexImage2DWEBGL = function(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
};
lime_graphics_opengl_GL.compressedTexImage3DWEBGL = function(target,level,internalformat,width,height,depth,border,srcData,srcOffset,srcLengthOverride) {
	lime_graphics_opengl_GL.context.compressedTexImage3D(target,level,internalformat,width,height,depth,border,srcData,srcOffset,srcLengthOverride);
};
lime_graphics_opengl_GL.compressedTexSubImage2DWEBGL = function(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
};
lime_graphics_opengl_GL.compressedTexSubImage3DWEBGL = function(target,level,xoffset,yoffset,zoffset,width,height,depth,format,srcData,srcOffset,srcLengthOverride) {
	lime_graphics_opengl_GL.context.compressedTexSubImage3D(target,level,xoffset,yoffset,zoffset,width,height,depth,format,srcData,srcOffset,srcLengthOverride);
};
lime_graphics_opengl_GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	lime_graphics_opengl_GL.context.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
};
lime_graphics_opengl_GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	lime_graphics_opengl_GL.context.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
};
lime_graphics_opengl_GL.copyTexSubImage3D = function(target,level,xoffset,yoffset,zoffset,x,y,width,height) {
	lime_graphics_opengl_GL.context.copyTexSubImage3D(target,level,xoffset,yoffset,zoffset,x,y,width,height);
};
lime_graphics_opengl_GL.createBuffer = function() {
	return lime_graphics_opengl_GL.context.createBuffer();
};
lime_graphics_opengl_GL.createFramebuffer = function() {
	return lime_graphics_opengl_GL.context.createFramebuffer();
};
lime_graphics_opengl_GL.createProgram = function() {
	return lime_graphics_opengl_GL.context.createProgram();
};
lime_graphics_opengl_GL.createQuery = function() {
	return lime_graphics_opengl_GL.context.createQuery();
};
lime_graphics_opengl_GL.createRenderbuffer = function() {
	return lime_graphics_opengl_GL.context.createRenderbuffer();
};
lime_graphics_opengl_GL.createSampler = function() {
	return lime_graphics_opengl_GL.context.createSampler();
};
lime_graphics_opengl_GL.createShader = function(type) {
	return lime_graphics_opengl_GL.context.createShader(type);
};
lime_graphics_opengl_GL.createTexture = function() {
	return lime_graphics_opengl_GL.context.createTexture();
};
lime_graphics_opengl_GL.createTransformFeedback = function() {
	return lime_graphics_opengl_GL.context.createTransformFeedback();
};
lime_graphics_opengl_GL.createVertexArray = function() {
	return lime_graphics_opengl_GL.context.createVertexArray();
};
lime_graphics_opengl_GL.cullFace = function(mode) {
	lime_graphics_opengl_GL.context.cullFace(mode);
};
lime_graphics_opengl_GL.deleteBuffer = function(buffer) {
	lime_graphics_opengl_GL.context.deleteBuffer(buffer);
};
lime_graphics_opengl_GL.deleteFramebuffer = function(framebuffer) {
	lime_graphics_opengl_GL.context.deleteFramebuffer(framebuffer);
};
lime_graphics_opengl_GL.deleteProgram = function(program) {
	lime_graphics_opengl_GL.context.deleteProgram(program);
};
lime_graphics_opengl_GL.deleteQuery = function(query) {
	lime_graphics_opengl_GL.context.deleteQuery(query);
};
lime_graphics_opengl_GL.deleteRenderbuffer = function(renderbuffer) {
	lime_graphics_opengl_GL.context.deleteRenderbuffer(renderbuffer);
};
lime_graphics_opengl_GL.deleteSampler = function(sampler) {
	lime_graphics_opengl_GL.context.deleteSampler(sampler);
};
lime_graphics_opengl_GL.deleteShader = function(shader) {
	lime_graphics_opengl_GL.context.deleteShader(shader);
};
lime_graphics_opengl_GL.deleteSync = function(sync) {
	lime_graphics_opengl_GL.context.deleteSync(sync);
};
lime_graphics_opengl_GL.deleteTexture = function(texture) {
	lime_graphics_opengl_GL.context.deleteTexture(texture);
};
lime_graphics_opengl_GL.deleteTransformFeedback = function(transformFeedback) {
	lime_graphics_opengl_GL.context.deleteTransformFeedback(transformFeedback);
};
lime_graphics_opengl_GL.deleteVertexArray = function(vertexArray) {
	lime_graphics_opengl_GL.context.deleteVertexArray(vertexArray);
};
lime_graphics_opengl_GL.depthFunc = function(func) {
	lime_graphics_opengl_GL.context.depthFunc(func);
};
lime_graphics_opengl_GL.depthMask = function(flag) {
	lime_graphics_opengl_GL.context.depthMask(flag);
};
lime_graphics_opengl_GL.depthRange = function(zNear,zFar) {
	lime_graphics_opengl_GL.context.depthRange(zNear,zFar);
};
lime_graphics_opengl_GL.detachShader = function(program,shader) {
	lime_graphics_opengl_GL.context.detachShader(program,shader);
};
lime_graphics_opengl_GL.disable = function(cap) {
	lime_graphics_opengl_GL.context.disable(cap);
};
lime_graphics_opengl_GL.disableVertexAttribArray = function(index) {
	lime_graphics_opengl_GL.context.disableVertexAttribArray(index);
};
lime_graphics_opengl_GL.drawArrays = function(mode,first,count) {
	lime_graphics_opengl_GL.context.drawArrays(mode,first,count);
};
lime_graphics_opengl_GL.drawArraysInstanced = function(mode,first,count,instanceCount) {
	lime_graphics_opengl_GL.context.drawArraysInstanced(mode,first,count,instanceCount);
};
lime_graphics_opengl_GL.drawBuffers = function(buffers) {
	lime_graphics_opengl_GL.context.drawBuffers(buffers);
};
lime_graphics_opengl_GL.drawElements = function(mode,count,type,offset) {
	lime_graphics_opengl_GL.context.drawElements(mode,count,type,offset);
};
lime_graphics_opengl_GL.drawElementsInstanced = function(mode,count,type,offset,instanceCount) {
	lime_graphics_opengl_GL.context.drawElementsInstanced(mode,count,type,offset,instanceCount);
};
lime_graphics_opengl_GL.drawRangeElements = function(mode,start,end,count,type,offset) {
	lime_graphics_opengl_GL.context.drawRangeElements(mode,start,end,count,type,offset);
};
lime_graphics_opengl_GL.enable = function(cap) {
	lime_graphics_opengl_GL.context.enable(cap);
};
lime_graphics_opengl_GL.enableVertexAttribArray = function(index) {
	lime_graphics_opengl_GL.context.enableVertexAttribArray(index);
};
lime_graphics_opengl_GL.endQuery = function(target) {
	lime_graphics_opengl_GL.context.endQuery(target);
};
lime_graphics_opengl_GL.endTransformFeedback = function() {
	lime_graphics_opengl_GL.context.endTransformFeedback();
};
lime_graphics_opengl_GL.fenceSync = function(condition,flags) {
	return lime_graphics_opengl_GL.context.fenceSync(condition,flags);
};
lime_graphics_opengl_GL.finish = function() {
	lime_graphics_opengl_GL.context.finish();
};
lime_graphics_opengl_GL.flush = function() {
	lime_graphics_opengl_GL.context.flush();
};
lime_graphics_opengl_GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	lime_graphics_opengl_GL.context.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
};
lime_graphics_opengl_GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	lime_graphics_opengl_GL.context.framebufferTexture2D(target,attachment,textarget,texture,level);
};
lime_graphics_opengl_GL.framebufferTextureLayer = function(target,attachment,texture,level,layer) {
	lime_graphics_opengl_GL.context.framebufferTextureLayer(target,attachment,texture,level,layer);
};
lime_graphics_opengl_GL.frontFace = function(mode) {
	lime_graphics_opengl_GL.context.frontFace(mode);
};
lime_graphics_opengl_GL.generateMipmap = function(target) {
	lime_graphics_opengl_GL.context.generateMipmap(target);
};
lime_graphics_opengl_GL.getActiveAttrib = function(program,index) {
	return lime_graphics_opengl_GL.context.getActiveAttrib(program,index);
};
lime_graphics_opengl_GL.getActiveUniform = function(program,index) {
	return lime_graphics_opengl_GL.context.getActiveUniform(program,index);
};
lime_graphics_opengl_GL.getActiveUniformBlockName = function(program,uniformBlockIndex) {
	return lime_graphics_opengl_GL.context.getActiveUniformBlockName(program,uniformBlockIndex);
};
lime_graphics_opengl_GL.getActiveUniformBlockParameter = function(program,uniformBlockIndex,pname) {
	return lime_graphics_opengl_GL.context.getActiveUniformBlockParameter(program,uniformBlockIndex,pname);
};
lime_graphics_opengl_GL.getActiveUniforms = function(program,uniformIndices,pname) {
	return lime_graphics_opengl_GL.context.getActiveUniforms(program,uniformIndices,pname);
};
lime_graphics_opengl_GL.getAttachedShaders = function(program) {
	return lime_graphics_opengl_GL.context.getAttachedShaders(program);
};
lime_graphics_opengl_GL.getAttribLocation = function(program,name) {
	return lime_graphics_opengl_GL.context.getAttribLocation(program,name);
};
lime_graphics_opengl_GL.getBufferParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getBufferParameter(target,pname);
};
lime_graphics_opengl_GL.getBufferSubDataWEBGL = function(target,srcByteOffset,dstData,srcOffset,length) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.getBufferSubData(target,srcByteOffset,dstData,srcOffset,length);
	} else {
		this1.getBufferSubData(target,srcByteOffset,dstData);
	}
};
lime_graphics_opengl_GL.getContextAttributes = function() {
	return lime_graphics_opengl_GL.context.getContextAttributes();
};
lime_graphics_opengl_GL.getError = function() {
	return lime_graphics_opengl_GL.context.getError();
};
lime_graphics_opengl_GL.getExtension = function(name) {
	return lime_graphics_opengl_GL.context.getExtension(name);
};
lime_graphics_opengl_GL.getFragDataLocation = function(program,name) {
	return lime_graphics_opengl_GL.context.getFragDataLocation(program,name);
};
lime_graphics_opengl_GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return lime_graphics_opengl_GL.context.getFramebufferAttachmentParameter(target,attachment,pname);
};
lime_graphics_opengl_GL.getIndexedParameter = function(target,index) {
	return lime_graphics_opengl_GL.context.getIndexedParameter(target,index);
};
lime_graphics_opengl_GL.getInternalformatParameter = function(target,internalformat,pname) {
	return lime_graphics_opengl_GL.context.getInternalformatParameter(target,internalformat,pname);
};
lime_graphics_opengl_GL.getParameter = function(pname) {
	return lime_graphics_opengl_GL.context.getParameter(pname);
};
lime_graphics_opengl_GL.getProgramInfoLog = function(program) {
	return lime_graphics_opengl_GL.context.getProgramInfoLog(program);
};
lime_graphics_opengl_GL.getProgramParameter = function(program,pname) {
	return lime_graphics_opengl_GL.context.getProgramParameter(program,pname);
};
lime_graphics_opengl_GL.getQuery = function(target,pname) {
	return lime_graphics_opengl_GL.context.getQuery(target,pname);
};
lime_graphics_opengl_GL.getQueryParameter = function(query,pname) {
	return lime_graphics_opengl_GL.context.getQueryParameter(query,pname);
};
lime_graphics_opengl_GL.getRenderbufferParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getRenderbufferParameter(target,pname);
};
lime_graphics_opengl_GL.getSamplerParameter = function(sampler,pname) {
	return lime_graphics_opengl_GL.context.getSamplerParameter(sampler,pname);
};
lime_graphics_opengl_GL.getShaderInfoLog = function(shader) {
	return lime_graphics_opengl_GL.context.getShaderInfoLog(shader);
};
lime_graphics_opengl_GL.getShaderParameter = function(shader,pname) {
	return lime_graphics_opengl_GL.context.getShaderParameter(shader,pname);
};
lime_graphics_opengl_GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return lime_graphics_opengl_GL.context.getShaderPrecisionFormat(shadertype,precisiontype);
};
lime_graphics_opengl_GL.getShaderSource = function(shader) {
	return lime_graphics_opengl_GL.context.getShaderSource(shader);
};
lime_graphics_opengl_GL.getSupportedExtensions = function() {
	return lime_graphics_opengl_GL.context.getSupportedExtensions();
};
lime_graphics_opengl_GL.getSyncParameter = function(sync,pname) {
	return lime_graphics_opengl_GL.context.getSyncParameter(sync,pname);
};
lime_graphics_opengl_GL.getTexParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getTexParameter(target,pname);
};
lime_graphics_opengl_GL.getTransformFeedbackVarying = function(program,index) {
	return lime_graphics_opengl_GL.context.getTransformFeedbackVarying(program,index);
};
lime_graphics_opengl_GL.getUniform = function(program,location) {
	return lime_graphics_opengl_GL.context.getUniform(program,location);
};
lime_graphics_opengl_GL.getUniformBlockIndex = function(program,uniformBlockName) {
	return lime_graphics_opengl_GL.context.getUniformBlockIndex(program,uniformBlockName);
};
lime_graphics_opengl_GL.getUniformIndices = function(program,uniformNames) {
	return lime_graphics_opengl_GL.context.getUniformIndices(program,uniformNames);
};
lime_graphics_opengl_GL.getUniformLocation = function(program,name) {
	return lime_graphics_opengl_GL.context.getUniformLocation(program,name);
};
lime_graphics_opengl_GL.getVertexAttrib = function(index,pname) {
	return lime_graphics_opengl_GL.context.getVertexAttrib(index,pname);
};
lime_graphics_opengl_GL.getVertexAttribOffset = function(index,pname) {
	return lime_utils_DataPointer.fromFloat(lime_graphics_opengl_GL.context.getVertexAttribOffset(index,pname));
};
lime_graphics_opengl_GL.hint = function(target,mode) {
	lime_graphics_opengl_GL.context.hint(target,mode);
};
lime_graphics_opengl_GL.invalidateFramebuffer = function(target,attachments) {
	lime_graphics_opengl_GL.context.invalidateFramebuffer(target,attachments);
};
lime_graphics_opengl_GL.invalidateSubFramebuffer = function(target,attachments,x,y,width,height) {
	lime_graphics_opengl_GL.context.invalidateSubFramebuffer(target,attachments,x,y,width,height);
};
lime_graphics_opengl_GL.isBuffer = function(buffer) {
	return lime_graphics_opengl_GL.context.isBuffer(buffer);
};
lime_graphics_opengl_GL.isContextLost = function() {
	return lime_graphics_opengl_GL.context.isContextLost();
};
lime_graphics_opengl_GL.isEnabled = function(cap) {
	return lime_graphics_opengl_GL.context.isEnabled(cap);
};
lime_graphics_opengl_GL.isFramebuffer = function(framebuffer) {
	return lime_graphics_opengl_GL.context.isFramebuffer(framebuffer);
};
lime_graphics_opengl_GL.isProgram = function(program) {
	return lime_graphics_opengl_GL.context.isProgram(program);
};
lime_graphics_opengl_GL.isQuery = function(query) {
	return lime_graphics_opengl_GL.context.isQuery(query);
};
lime_graphics_opengl_GL.isRenderbuffer = function(renderbuffer) {
	return lime_graphics_opengl_GL.context.isRenderbuffer(renderbuffer);
};
lime_graphics_opengl_GL.isSampler = function(sampler) {
	return lime_graphics_opengl_GL.context.isSampler(sampler);
};
lime_graphics_opengl_GL.isShader = function(shader) {
	return lime_graphics_opengl_GL.context.isShader(shader);
};
lime_graphics_opengl_GL.isSync = function(sync) {
	return lime_graphics_opengl_GL.context.isSync(sync);
};
lime_graphics_opengl_GL.isTexture = function(texture) {
	return lime_graphics_opengl_GL.context.isTexture(texture);
};
lime_graphics_opengl_GL.isTransformFeedback = function(transformFeedback) {
	return lime_graphics_opengl_GL.context.isTransformFeedback(transformFeedback);
};
lime_graphics_opengl_GL.isVertexArray = function(vertexArray) {
	return lime_graphics_opengl_GL.context.isVertexArray(vertexArray);
};
lime_graphics_opengl_GL.lineWidth = function(width) {
	lime_graphics_opengl_GL.context.lineWidth(width);
};
lime_graphics_opengl_GL.linkProgram = function(program) {
	lime_graphics_opengl_GL.context.linkProgram(program);
};
lime_graphics_opengl_GL.pauseTransformFeedback = function() {
	lime_graphics_opengl_GL.context.pauseTransformFeedback();
};
lime_graphics_opengl_GL.pixelStorei = function(pname,param) {
	lime_graphics_opengl_GL.context.pixelStorei(pname,param);
};
lime_graphics_opengl_GL.polygonOffset = function(factor,units) {
	lime_graphics_opengl_GL.context.polygonOffset(factor,units);
};
lime_graphics_opengl_GL.readBuffer = function(src) {
	lime_graphics_opengl_GL.context.readBuffer(src);
};
lime_graphics_opengl_GL.readPixelsWEBGL = function(x,y,width,height,format,type,pixels,dstOffset) {
	var this1 = lime_graphics_opengl_GL.context;
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
};
lime_graphics_opengl_GL.renderbufferStorage = function(target,internalformat,width,height) {
	lime_graphics_opengl_GL.context.renderbufferStorage(target,internalformat,width,height);
};
lime_graphics_opengl_GL.renderbufferStorageMultisample = function(target,samples,internalformat,width,height) {
	lime_graphics_opengl_GL.context.renderbufferStorageMultisample(target,samples,internalformat,width,height);
};
lime_graphics_opengl_GL.resumeTransformFeedback = function() {
	lime_graphics_opengl_GL.context.resumeTransformFeedback();
};
lime_graphics_opengl_GL.sampleCoverage = function(value,invert) {
	lime_graphics_opengl_GL.context.sampleCoverage(value,invert);
};
lime_graphics_opengl_GL.samplerParameterf = function(sampler,pname,param) {
	lime_graphics_opengl_GL.context.samplerParameterf(sampler,pname,param);
};
lime_graphics_opengl_GL.samplerParameteri = function(sampler,pname,param) {
	lime_graphics_opengl_GL.context.samplerParameteri(sampler,pname,param);
};
lime_graphics_opengl_GL.scissor = function(x,y,width,height) {
	lime_graphics_opengl_GL.context.scissor(x,y,width,height);
};
lime_graphics_opengl_GL.shaderSource = function(shader,source) {
	lime_graphics_opengl_GL.context.shaderSource(shader,source);
};
lime_graphics_opengl_GL.stencilFunc = function(func,ref,mask) {
	lime_graphics_opengl_GL.context.stencilFunc(func,ref,mask);
};
lime_graphics_opengl_GL.stencilFuncSeparate = function(face,func,ref,mask) {
	lime_graphics_opengl_GL.context.stencilFuncSeparate(face,func,ref,mask);
};
lime_graphics_opengl_GL.stencilMask = function(mask) {
	lime_graphics_opengl_GL.context.stencilMask(mask);
};
lime_graphics_opengl_GL.stencilMaskSeparate = function(face,mask) {
	lime_graphics_opengl_GL.context.stencilMaskSeparate(face,mask);
};
lime_graphics_opengl_GL.stencilOp = function(fail,zfail,zpass) {
	lime_graphics_opengl_GL.context.stencilOp(fail,zfail,zpass);
};
lime_graphics_opengl_GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	lime_graphics_opengl_GL.context.stencilOpSeparate(face,fail,zfail,zpass);
};
lime_graphics_opengl_GL.texImage2DWEBGL = function(target,level,internalformat,width,height,border,format,type,srcData,srcOffset) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
};
lime_graphics_opengl_GL.texImage3DWEBGL = function(target,level,internalformat,width,height,depth,border,format,type,srcData,srcOffset) {
	lime_graphics_opengl_GL.context.texImage3D(target,level,internalformat,width,height,depth,border,format,type,srcData,srcOffset);
};
lime_graphics_opengl_GL.texStorage2D = function(target,level,internalformat,width,height) {
	lime_graphics_opengl_GL.context.texStorage2D(target,level,internalformat,width,height);
};
lime_graphics_opengl_GL.texStorage3D = function(target,level,internalformat,width,height,depth) {
	lime_graphics_opengl_GL.context.texStorage3D(target,level,internalformat,width,height,depth);
};
lime_graphics_opengl_GL.texParameterf = function(target,pname,param) {
	lime_graphics_opengl_GL.context.texParameterf(target,pname,param);
};
lime_graphics_opengl_GL.texParameteri = function(target,pname,param) {
	lime_graphics_opengl_GL.context.texParameteri(target,pname,param);
};
lime_graphics_opengl_GL.texSubImage2DWEBGL = function(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
};
lime_graphics_opengl_GL.texSubImage3DWEBGL = function(target,level,xoffset,yoffset,zoffset,width,height,depth,format,type,source,srcOffset) {
	lime_graphics_opengl_GL.context.texSubImage3D(target,level,xoffset,yoffset,zoffset,width,height,depth,format,type,source,srcOffset);
};
lime_graphics_opengl_GL.transformFeedbackVaryings = function(program,varyings,bufferMode) {
	lime_graphics_opengl_GL.context.transformFeedbackVaryings(program,varyings,bufferMode);
};
lime_graphics_opengl_GL.uniform1f = function(location,v0) {
	lime_graphics_opengl_GL.context.uniform1f(location,v0);
};
lime_graphics_opengl_GL.uniform1fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform1fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1fv(location,data);
	}
};
lime_graphics_opengl_GL.uniform1i = function(location,v0) {
	lime_graphics_opengl_GL.context.uniform1i(location,v0);
};
lime_graphics_opengl_GL.uniform1ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform1iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1iv(location,data);
	}
};
lime_graphics_opengl_GL.uniform1ui = function(location,v0) {
	lime_graphics_opengl_GL.context.uniform1ui(location,v0);
};
lime_graphics_opengl_GL.uniform1uivWEBGL = function(location,data,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniform1uiv(location,data,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniform2f = function(location,v0,v1) {
	lime_graphics_opengl_GL.context.uniform2f(location,v0,v1);
};
lime_graphics_opengl_GL.uniform2fvWEBGL = function(location,data,srcOffset,srcLength) {
	lime_graphics_WebGL2RenderContext.uniform2fv(lime_graphics_opengl_GL.context,location,data,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniform2i = function(location,x,y) {
	lime_graphics_opengl_GL.context.uniform2i(location,x,y);
};
lime_graphics_opengl_GL.uniform2ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform2iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2iv(location,data);
	}
};
lime_graphics_opengl_GL.uniform2ui = function(location,x,y) {
	lime_graphics_opengl_GL.context.uniform2ui(location,x,y);
};
lime_graphics_opengl_GL.uniform2uivWEBGL = function(location,data,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniform2uiv(location,data,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniform3f = function(location,v0,v1,v2) {
	lime_graphics_opengl_GL.context.uniform3f(location,v0,v1,v2);
};
lime_graphics_opengl_GL.uniform3fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform3fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3fv(location,data);
	}
};
lime_graphics_opengl_GL.uniform3i = function(location,v0,v1,v2) {
	lime_graphics_opengl_GL.context.uniform3i(location,v0,v1,v2);
};
lime_graphics_opengl_GL.uniform3ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform3iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3iv(location,data);
	}
};
lime_graphics_opengl_GL.uniform3ui = function(location,v0,v1,v2) {
	lime_graphics_opengl_GL.context.uniform3ui(location,v0,v1,v2);
};
lime_graphics_opengl_GL.uniform3uivWEBGL = function(location,data,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniform3uiv(location,data,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniform4f = function(location,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.uniform4f(location,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.uniform4fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform4fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4fv(location,data);
	}
};
lime_graphics_opengl_GL.uniform4i = function(location,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.uniform4i(location,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.uniform4ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniform4iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4iv(location,data);
	}
};
lime_graphics_opengl_GL.uniform4ui = function(location,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.uniform4ui(location,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.uniform4uivWEBGL = function(location,data,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniform4uiv(location,data,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformBlockBinding = function(program,uniformBlockIndex,uniformBlockBinding) {
	lime_graphics_opengl_GL.context.uniformBlockBinding(program,uniformBlockIndex,uniformBlockBinding);
};
lime_graphics_opengl_GL.uniformMatrix2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix2fv(location,transpose,v);
	}
};
lime_graphics_opengl_GL.uniformMatrix2x3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix2x3fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformMatrix2x4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix2x4fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformMatrix3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix3fv(location,transpose,v);
	}
};
lime_graphics_opengl_GL.uniformMatrix3x2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix3x2fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformMatrix3x4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix3x4fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformMatrix4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = lime_graphics_opengl_GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix4fv(location,transpose,v);
	}
};
lime_graphics_opengl_GL.uniformMatrix4x2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix4x2fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.uniformMatrix4x3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	lime_graphics_opengl_GL.context.uniformMatrix4x3fv(location,transpose,v,srcOffset,srcLength);
};
lime_graphics_opengl_GL.useProgram = function(program) {
	lime_graphics_opengl_GL.context.useProgram(program);
};
lime_graphics_opengl_GL.validateProgram = function(program) {
	lime_graphics_opengl_GL.context.validateProgram(program);
};
lime_graphics_opengl_GL.vertexAttrib1f = function(index,v0) {
	lime_graphics_opengl_GL.context.vertexAttrib1f(index,v0);
};
lime_graphics_opengl_GL.vertexAttrib1fv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib1fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib1fvWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib1fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib2f = function(index,v0,v1) {
	lime_graphics_opengl_GL.context.vertexAttrib2f(index,v0,v1);
};
lime_graphics_opengl_GL.vertexAttrib2fv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib2fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib2fvWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib2fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib3f = function(index,v0,v1,v2) {
	lime_graphics_opengl_GL.context.vertexAttrib3f(index,v0,v1,v2);
};
lime_graphics_opengl_GL.vertexAttrib3fv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib3fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib3fvWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib3fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib4f = function(index,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.vertexAttrib4f(index,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.vertexAttrib4fv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib4fv(index,v);
};
lime_graphics_opengl_GL.vertexAttrib4fvWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttrib4fv(index,v);
};
lime_graphics_opengl_GL.vertexAttribDivisor = function(index,divisor) {
	lime_graphics_opengl_GL.context.vertexAttribDivisor(index,divisor);
};
lime_graphics_opengl_GL.vertexAttribI4i = function(index,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.vertexAttribI4i(index,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.vertexAttribI4iv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttribI4iv(index,v);
};
lime_graphics_opengl_GL.vertexAttribI4ivWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttribI4iv(index,v);
};
lime_graphics_opengl_GL.vertexAttribI4ui = function(index,v0,v1,v2,v3) {
	lime_graphics_opengl_GL.context.vertexAttribI4ui(index,v0,v1,v2,v3);
};
lime_graphics_opengl_GL.vertexAttribI4uiv = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttribI4uiv(index,v);
};
lime_graphics_opengl_GL.vertexAttribI4uivWEBGL = function(index,v) {
	lime_graphics_opengl_GL.context.vertexAttribI4uiv(index,v);
};
lime_graphics_opengl_GL.vertexAttribIPointer = function(index,size,type,stride,offset) {
	lime_graphics_opengl_GL.context.vertexAttribIPointer(index,size,type,stride,offset);
};
lime_graphics_opengl_GL.vertexAttribPointer = function(index,size,type,normalized,stride,offset) {
	lime_graphics_opengl_GL.context.vertexAttribPointer(index,size,type,normalized,stride,offset);
};
lime_graphics_opengl_GL.viewport = function(x,y,width,height) {
	lime_graphics_opengl_GL.context.viewport(x,y,width,height);
};
lime_graphics_opengl_GL.waitSync = function(sync,flags,timeout) {
	lime_graphics_opengl_GL.context.waitSync(sync,flags,timeout);
};
lime_graphics_opengl_GL.__getObjectID = function(object) {
	if(object == null) {
		return 0;
	} else {
		return object.id;
	}
};
var lime_graphics_opengl_GLProgram = {};
lime_graphics_opengl_GLProgram.fromSources = function(gl,vertexSource,fragmentSource) {
	var vertexShader = lime_graphics_opengl_GLShader.fromSource(gl,vertexSource,gl.VERTEX_SHADER);
	var fragmentShader = lime_graphics_opengl_GLShader.fromSource(gl,fragmentSource,gl.FRAGMENT_SHADER);
	var program = gl.createProgram();
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);
	if(gl.getProgramParameter(program,35714) == 0) {
		var message = "Unable to initialize the shader program";
		message += "\n" + lime_graphics_opengl_GL.context.getProgramInfoLog(program);
		lime_utils_Log.error(message,{ fileName : "lime/graphics/opengl/GLProgram.hx", lineNumber : 39, className : "lime.graphics.opengl._GLProgram.GLProgram_Impl_", methodName : "fromSources"});
	}
	return program;
};
var lime_graphics_opengl_GLShader = {};
lime_graphics_opengl_GLShader.fromSource = function(gl,source,type) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
	var shaderInfoLog = gl.getShaderInfoLog(shader);
	var compileStatus = gl.getShaderParameter(shader,gl.COMPILE_STATUS);
	if(shaderInfoLog != null || compileStatus == 0) {
		var message;
		if(compileStatus == 0) {
			message = "Error ";
		} else {
			message = "Info ";
		}
		if(type == gl.VERTEX_SHADER) {
			message = "compiling vertex shader";
		} else if(type == gl.FRAGMENT_SHADER) {
			message = "compiling fragment shader";
		} else {
			message = "compiling unknown shader type";
		}
		message += "\n" + shaderInfoLog;
		if(compileStatus == 0) {
			lime_utils_Log.error(message,{ fileName : "lime/graphics/opengl/GLShader.hx", lineNumber : 47, className : "lime.graphics.opengl._GLShader.GLShader_Impl_", methodName : "fromSource"});
		} else if(shaderInfoLog != null) {
			lime_utils_Log.debug(message,{ fileName : "lime/graphics/opengl/GLShader.hx", lineNumber : 48, className : "lime.graphics.opengl._GLShader.GLShader_Impl_", methodName : "fromSource"});
		}
	}
	return shader;
};
var lime_math_ARGB = {};
lime_math_ARGB._new = function(argb) {
	if(argb == null) {
		argb = 0;
	}
	var this1 = argb;
	return this1;
};
lime_math_ARGB.create = function(a,r,g,b) {
	var this1 = 0;
	var argb = this1;
	argb = (a & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
	return argb;
};
lime_math_ARGB.multiplyAlpha = function(this1) {
	if((this1 >>> 24 & 255) == 0) {
		this1 = 0;
	} else if((this1 >>> 24 & 255) != 255) {
		lime_math_ARGB.a16 = lime_math_RGBA.__alpha16[this1 >>> 24 & 255];
		this1 = (this1 >>> 24 & 255 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_ARGB.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_ARGB.a16 >> 16 & 255) << 8 | (this1 & 255) * lime_math_ARGB.a16 >> 16 & 255;
	}
};
lime_math_ARGB.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 1:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 3] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 1] & 255;
		break;
	case 2:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset + 2] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 >>> 24 & 255) != 0 && (this1 >>> 24 & 255) != 255) {
			lime_math_ARGB.unmult = 255.0 / (this1 >>> 24 & 255);
			this1 = (this1 >>> 24 & 255 & 255) << 24 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 16 & 255) * lime_math_ARGB.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 8 & 255) * lime_math_ARGB.unmult)] & 255) << 8 | lime_math_RGBA.__clamp[Math.floor((this1 & 255) * lime_math_ARGB.unmult)] & 255;
		}
	}
};
lime_math_ARGB.set = function(this1,a,r,g,b) {
	this1 = (a & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
};
lime_math_ARGB.unmultiplyAlpha = function(this1) {
	if((this1 >>> 24 & 255) != 0 && (this1 >>> 24 & 255) != 255) {
		lime_math_ARGB.unmult = 255.0 / (this1 >>> 24 & 255);
		this1 = (this1 >>> 24 & 255 & 255) << 24 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 16 & 255) * lime_math_ARGB.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 8 & 255) * lime_math_ARGB.unmult)] & 255) << 8 | lime_math_RGBA.__clamp[Math.floor((this1 & 255) * lime_math_ARGB.unmult)] & 255;
	}
};
lime_math_ARGB.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 >>> 24 & 255) == 0) {
			this1 = 0;
		} else if((this1 >>> 24 & 255) != 255) {
			lime_math_ARGB.a16 = lime_math_RGBA.__alpha16[this1 >>> 24 & 255];
			this1 = (this1 >>> 24 & 255 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_ARGB.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_ARGB.a16 >> 16 & 255) << 8 | (this1 & 255) * lime_math_ARGB.a16 >> 16 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 16 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	case 1:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 2:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	}
};
lime_math_ARGB.__fromBGRA = function(bgra) {
	var this1 = 0;
	var argb = this1;
	argb = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
	return argb;
};
lime_math_ARGB.__fromRGBA = function(rgba) {
	var this1 = 0;
	var argb = this1;
	argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
	return argb;
};
lime_math_ARGB.get_a = function(this1) {
	return this1 >>> 24 & 255;
};
lime_math_ARGB.set_a = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_ARGB.get_b = function(this1) {
	return this1 & 255;
};
lime_math_ARGB.set_b = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
};
lime_math_ARGB.get_g = function(this1) {
	return this1 >>> 8 & 255;
};
lime_math_ARGB.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_ARGB.get_r = function(this1) {
	return this1 >>> 16 & 255;
};
lime_math_ARGB.set_r = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
var lime_math_BGRA = {};
lime_math_BGRA._new = function(bgra) {
	if(bgra == null) {
		bgra = 0;
	}
	var this1 = bgra;
	return this1;
};
lime_math_BGRA.create = function(b,g,r,a) {
	var this1 = 0;
	var bgra = this1;
	bgra = (b & 255) << 24 | (g & 255) << 16 | (r & 255) << 8 | a & 255;
	return bgra;
};
lime_math_BGRA.multiplyAlpha = function(this1) {
	if((this1 & 255) == 0) {
		this1 = 0;
	} else if((this1 & 255) != 255) {
		lime_math_BGRA.a16 = lime_math_RGBA.__alpha16[this1 & 255];
		this1 = ((this1 >>> 24 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
	}
};
lime_math_BGRA.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		this1 = (data[offset + 3] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		this1 = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 & 255) != 0 && (this1 & 255) != 255) {
			lime_math_BGRA.unmult = 255.0 / (this1 & 255);
			this1 = (lime_math_RGBA.__clamp[Math.floor((this1 >>> 24 & 255) * lime_math_BGRA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 16 & 255) * lime_math_BGRA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 8 & 255) * lime_math_BGRA.unmult)] & 255) << 8 | this1 & 255 & 255;
		}
	}
};
lime_math_BGRA.set = function(this1,b,g,r,a) {
	this1 = (b & 255) << 24 | (g & 255) << 16 | (r & 255) << 8 | a & 255;
};
lime_math_BGRA.unmultiplyAlpha = function(this1) {
	if((this1 & 255) != 0 && (this1 & 255) != 255) {
		lime_math_BGRA.unmult = 255.0 / (this1 & 255);
		this1 = (lime_math_RGBA.__clamp[Math.floor((this1 >>> 24 & 255) * lime_math_BGRA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 16 & 255) * lime_math_BGRA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.floor((this1 >>> 8 & 255) * lime_math_BGRA.unmult)] & 255) << 8 | this1 & 255 & 255;
	}
};
lime_math_BGRA.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 & 255) == 0) {
			this1 = 0;
		} else if((this1 & 255) != 255) {
			lime_math_BGRA.a16 = lime_math_RGBA.__alpha16[this1 & 255];
			this1 = ((this1 >>> 24 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_BGRA.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 8 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 24 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 1:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	case 2:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	}
};
lime_math_BGRA.__fromARGB = function(argb) {
	var this1 = 0;
	var bgra = this1;
	bgra = (argb & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb >>> 16 & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
	return bgra;
};
lime_math_BGRA.__fromRGBA = function(rgba) {
	var this1 = 0;
	var bgra = this1;
	bgra = (rgba >>> 8 & 255 & 255) << 24 | (rgba >>> 16 & 255 & 255) << 16 | (rgba >>> 24 & 255 & 255) << 8 | rgba & 255 & 255;
	return bgra;
};
lime_math_BGRA.get_a = function(this1) {
	return this1 & 255;
};
lime_math_BGRA.set_a = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
};
lime_math_BGRA.get_b = function(this1) {
	return this1 >>> 24 & 255;
};
lime_math_BGRA.set_b = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_BGRA.get_g = function(this1) {
	return this1 >>> 16 & 255;
};
lime_math_BGRA.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_BGRA.get_r = function(this1) {
	return this1 >>> 8 & 255;
};
lime_math_BGRA.set_r = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
};
var lime_math_ColorMatrix = {};
lime_math_ColorMatrix._new = function(data) {
	var this1;
	if(data != null && data.length == 20) {
		this1 = data;
	} else {
		var elements = null;
		var array = lime_math_ColorMatrix.__identity;
		var view = null;
		var buffer = null;
		var len = null;
		var this2;
		if(elements != null) {
			this2 = new Float32Array(elements);
		} else if(array != null) {
			this2 = new Float32Array(array);
		} else if(view != null) {
			this2 = new Float32Array(view);
		} else if(buffer != null) {
			if(len == null) {
				this2 = new Float32Array(buffer,0);
			} else {
				this2 = new Float32Array(buffer,0,len);
			}
		} else {
			this2 = null;
		}
		this1 = this2;
	}
	return this1;
};
lime_math_ColorMatrix.clone = function(this1) {
	var elements = null;
	var array = null;
	var view = lime_utils_Float32Array.toArrayBufferView(this1);
	var buffer = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Float32Array(elements);
	} else if(array != null) {
		this1 = new Float32Array(array);
	} else if(view != null) {
		this1 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float32Array(buffer,0);
		} else {
			this1 = new Float32Array(buffer,0,len);
		}
	} else {
		this1 = null;
	}
	return lime_math_ColorMatrix._new(this1);
};
lime_math_ColorMatrix.concat = function(this1,second) {
	this1[0] += second[0];
	this1[6] += second[6];
	this1[12] += second[12];
	this1[18] += second[18];
};
lime_math_ColorMatrix.copyFrom = function(this1,other) {
	this1.set(other);
};
lime_math_ColorMatrix.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 0;
	this1[6] = 1;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 0;
	this1[11] = 0;
	this1[12] = 1;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 0;
	this1[16] = 0;
	this1[17] = 0;
	this1[18] = 1;
	this1[19] = 0;
};
lime_math_ColorMatrix.getAlphaTable = function(this1) {
	if(lime_math_ColorMatrix.__alphaTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		lime_math_ColorMatrix.__alphaTable = this2;
	}
	var value;
	lime_math_ColorMatrix.__alphaTable[0] = 0;
	var _g = 1;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[18] + this1[19] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		lime_math_ColorMatrix.__alphaTable[i] = value;
	}
	return lime_math_ColorMatrix.__alphaTable;
};
lime_math_ColorMatrix.getBlueTable = function(this1) {
	if(lime_math_ColorMatrix.__blueTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		lime_math_ColorMatrix.__blueTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[12] + this1[14] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		lime_math_ColorMatrix.__blueTable[i] = value;
	}
	return lime_math_ColorMatrix.__blueTable;
};
lime_math_ColorMatrix.getGreenTable = function(this1) {
	if(lime_math_ColorMatrix.__greenTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		lime_math_ColorMatrix.__greenTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[6] + this1[9] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		lime_math_ColorMatrix.__greenTable[i] = value;
	}
	return lime_math_ColorMatrix.__greenTable;
};
lime_math_ColorMatrix.getRedTable = function(this1) {
	if(lime_math_ColorMatrix.__redTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		lime_math_ColorMatrix.__redTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[0] + this1[4] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		lime_math_ColorMatrix.__redTable[i] = value;
	}
	return lime_math_ColorMatrix.__redTable;
};
lime_math_ColorMatrix.__toFlashColorTransform = function(this1) {
	return null;
};
lime_math_ColorMatrix.get_alphaMultiplier = function(this1) {
	return this1[18];
};
lime_math_ColorMatrix.set_alphaMultiplier = function(this1,value) {
	return this1[18] = value;
};
lime_math_ColorMatrix.get_alphaOffset = function(this1) {
	return this1[19] * 255;
};
lime_math_ColorMatrix.set_alphaOffset = function(this1,value) {
	return this1[19] = value / 255;
};
lime_math_ColorMatrix.get_blueMultiplier = function(this1) {
	return this1[12];
};
lime_math_ColorMatrix.set_blueMultiplier = function(this1,value) {
	return this1[12] = value;
};
lime_math_ColorMatrix.get_blueOffset = function(this1) {
	return this1[14] * 255;
};
lime_math_ColorMatrix.set_blueOffset = function(this1,value) {
	return this1[14] = value / 255;
};
lime_math_ColorMatrix.get_color = function(this1) {
	return (this1[4] * 255 | 0) << 16 | (this1[9] * 255 | 0) << 8 | (this1[14] * 255 | 0);
};
lime_math_ColorMatrix.set_color = function(this1,value) {
	this1[4] = (value >> 16 & 255) / 255;
	this1[9] = (value >> 8 & 255) / 255;
	this1[14] = (value & 255) / 255;
	this1[0] = 0;
	this1[6] = 0;
	this1[12] = 0;
	return lime_math_ColorMatrix.get_color(this1);
};
lime_math_ColorMatrix.get_greenMultiplier = function(this1) {
	return this1[6];
};
lime_math_ColorMatrix.set_greenMultiplier = function(this1,value) {
	return this1[6] = value;
};
lime_math_ColorMatrix.get_greenOffset = function(this1) {
	return this1[9] * 255;
};
lime_math_ColorMatrix.set_greenOffset = function(this1,value) {
	return this1[9] = value / 255;
};
lime_math_ColorMatrix.get_redMultiplier = function(this1) {
	return this1[0];
};
lime_math_ColorMatrix.set_redMultiplier = function(this1,value) {
	return this1[0] = value;
};
lime_math_ColorMatrix.get_redOffset = function(this1) {
	return this1[4] * 255;
};
lime_math_ColorMatrix.set_redOffset = function(this1,value) {
	return this1[4] = value / 255;
};
lime_math_ColorMatrix.get = function(this1,index) {
	return this1[index];
};
lime_math_ColorMatrix.set = function(this1,index,value) {
	return this1[index] = value;
};
var lime_math_Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) {
		ty = 0;
	}
	if(tx == null) {
		tx = 0;
	}
	if(d == null) {
		d = 1;
	}
	if(c == null) {
		c = 0;
	}
	if(b == null) {
		b = 0;
	}
	if(a == null) {
		a = 1;
	}
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["lime.math.Matrix3"] = lime_math_Matrix3;
lime_math_Matrix3.__name__ = "lime.math.Matrix3";
lime_math_Matrix3.prototype = {
	clone: function() {
		return new lime_math_Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyColumnFrom: function(column,vector4) {
		if(column > 2) {
			throw haxe_Exception.thrown("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			this.a = vector4.x;
			this.b = vector4.y;
		} else if(column == 1) {
			this.c = vector4.x;
			this.d = vector4.y;
		} else {
			this.tx = vector4.x;
			this.ty = vector4.y;
		}
	}
	,copyColumnTo: function(column,vector4) {
		if(column > 2) {
			throw haxe_Exception.thrown("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			vector4.x = this.a;
			vector4.y = this.b;
			vector4.z = 0;
		} else if(column == 1) {
			vector4.x = this.c;
			vector4.y = this.d;
			vector4.z = 0;
		} else {
			vector4.x = this.tx;
			vector4.y = this.ty;
			vector4.z = 1;
		}
	}
	,copyFrom: function(sourceMatrix3) {
		this.a = sourceMatrix3.a;
		this.b = sourceMatrix3.b;
		this.c = sourceMatrix3.c;
		this.d = sourceMatrix3.d;
		this.tx = sourceMatrix3.tx;
		this.ty = sourceMatrix3.ty;
	}
	,copyRowFrom: function(row,vector4) {
		if(row > 2) {
			throw haxe_Exception.thrown("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			this.a = vector4.x;
			this.c = vector4.y;
			this.tx = vector4.z;
		} else if(row == 1) {
			this.b = vector4.x;
			this.d = vector4.y;
			this.ty = vector4.z;
		}
	}
	,copyRowTo: function(row,vector4) {
		if(row > 2) {
			throw haxe_Exception.thrown("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			vector4.x = this.a;
			vector4.y = this.c;
			vector4.z = this.tx;
		} else if(row == 1) {
			vector4.x = this.b;
			vector4.y = this.d;
			vector4.z = this.ty;
		} else {
			vector4.x = 0;
			vector4.y = 0;
			vector4.z = 1;
		}
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.a = cos * scaleX;
			this.b = sin * scaleY;
			this.c = -sin * scaleX;
			this.d = cos * scaleY;
		} else {
			this.a = scaleX;
			this.b = 0;
			this.c = 0;
			this.d = scaleY;
		}
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(matrix3) {
		if(matrix3 != null && this.tx == matrix3.tx && this.ty == matrix3.ty && this.a == matrix3.a && this.b == matrix3.b && this.c == matrix3.c) {
			return this.d == matrix3.d;
		} else {
			return false;
		}
	}
	,deltaTransformVector: function(Vector2,result) {
		if(result == null) {
			result = new lime_math_Vector2();
		}
		result.x = Vector2.x * this.a + Vector2.y * this.c;
		result.y = Vector2.x * this.b + Vector2.y * this.d;
		return result;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) {
			scale = 1;
		}
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) {
			roundPixels = false;
		}
		if(roundPixels) {
			return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)";
		} else {
			return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
		}
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformRect: function(rect,result) {
		if(result == null) {
			result = new lime_math_Rectangle();
		}
		var tx0 = this.a * rect.x + this.c * rect.y;
		var tx1 = tx0;
		var ty0 = this.b * rect.x + this.d * rect.y;
		var ty1 = ty0;
		var tx = this.a * (rect.x + rect.width) + this.c * rect.y;
		var ty = this.b * (rect.x + rect.width) + this.d * rect.y;
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		tx = this.a * (rect.x + rect.width) + this.c * (rect.y + rect.height);
		ty = this.b * (rect.x + rect.width) + this.d * (rect.y + rect.height);
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		tx = this.a * rect.x + this.c * (rect.y + rect.height);
		ty = this.b * rect.x + this.d * (rect.y + rect.height);
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		result.setTo(tx0 + tx,ty0 + ty,tx1 - tx0,ty1 - ty0);
		return result;
	}
	,transformVector: function(pos,result) {
		if(result == null) {
			result = new lime_math_Vector2();
		}
		result.x = pos.x * this.a + pos.y * this.c + this.tx;
		result.y = pos.x * this.b + pos.y * this.d + this.ty;
		return result;
	}
	,translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
	,__class__: lime_math_Matrix3
};
var lime_math_RGBA = {};
lime_math_RGBA._new = function(rgba) {
	if(rgba == null) {
		rgba = 0;
	}
	var this1 = rgba;
	return this1;
};
lime_math_RGBA.create = function(r,g,b,a) {
	var this1 = 0;
	var rgba = this1;
	rgba = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | a & 255;
	return rgba;
};
lime_math_RGBA.multiplyAlpha = function(this1) {
	if((this1 & 255) == 0) {
		if(this1 != 0) {
			this1 = 0;
		}
	} else if((this1 & 255) != 255) {
		lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[this1 & 255];
		this1 = ((this1 >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
	}
};
lime_math_RGBA.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 & 255) != 0 && (this1 & 255) != 255) {
			lime_math_RGBA.unmult = 255.0 / (this1 & 255);
			this1 = (lime_math_RGBA.__clamp[Math.round((this1 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((this1 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((this1 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | this1 & 255 & 255;
		}
	}
};
lime_math_RGBA.set = function(this1,r,g,b,a) {
	this1 = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | a & 255;
};
lime_math_RGBA.unmultiplyAlpha = function(this1) {
	if((this1 & 255) != 0 && (this1 & 255) != 255) {
		lime_math_RGBA.unmult = 255.0 / (this1 & 255);
		this1 = (lime_math_RGBA.__clamp[Math.round((this1 >>> 24 & 255) * lime_math_RGBA.unmult)] & 255) << 24 | (lime_math_RGBA.__clamp[Math.round((this1 >>> 16 & 255) * lime_math_RGBA.unmult)] & 255) << 16 | (lime_math_RGBA.__clamp[Math.round((this1 >>> 8 & 255) * lime_math_RGBA.unmult)] & 255) << 8 | this1 & 255 & 255;
	}
};
lime_math_RGBA.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 & 255) == 0) {
			if(this1 != 0) {
				this1 = 0;
			}
		} else if((this1 & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[this1 & 255];
			this1 = ((this1 >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 1:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 24 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 8 & 255;
		break;
	case 2:
		data[offset] = this1 >>> 8 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 24 & 255;
		data[offset + 3] = this1 & 255;
		break;
	}
};
lime_math_RGBA.__fromARGB = function(argb) {
	var this1 = 0;
	var rgba = this1;
	rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
	return rgba;
};
lime_math_RGBA.__fromBGRA = function(bgra) {
	var this1 = 0;
	var rgba = this1;
	rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
	return rgba;
};
lime_math_RGBA.get_a = function(this1) {
	return this1 & 255;
};
lime_math_RGBA.set_a = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
};
lime_math_RGBA.get_b = function(this1) {
	return this1 >>> 8 & 255;
};
lime_math_RGBA.set_b = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_RGBA.get_g = function(this1) {
	return this1 >>> 16 & 255;
};
lime_math_RGBA.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
lime_math_RGBA.get_r = function(this1) {
	return this1 >>> 24 & 255;
};
lime_math_RGBA.set_r = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
};
var lime_math_Rectangle = function(x,y,width,height) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime_math_Rectangle;
lime_math_Rectangle.__name__ = "lime.math.Rectangle";
lime_math_Rectangle.prototype = {
	clone: function() {
		return new lime_math_Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		if(x >= this.x && y >= this.y && x < this.get_right()) {
			return y < this.get_bottom();
		} else {
			return false;
		}
	}
	,containsPoint: function(point) {
		return this.containsVector(point);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) {
			if(rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right()) {
				return rect.get_bottom() < this.get_bottom();
			} else {
				return false;
			}
		} else if(rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right()) {
			return rect.get_bottom() <= this.get_bottom();
		} else {
			return false;
		}
	}
	,containsVector: function(vector) {
		return this.contains(vector.x,vector.y);
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		if(toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width) {
			return this.height == toCompare.height;
		} else {
			return false;
		}
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflateVector: function(vector) {
		this.inflate(vector.x,vector.y);
	}
	,intersection: function(toIntersect,result) {
		if(result == null) {
			result = new lime_math_Rectangle();
		}
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			result.setEmpty();
			return result;
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		if(y1 <= y0) {
			result.setEmpty();
			return result;
		}
		result.x = x0;
		result.y = y0;
		result.width = x1 - x0;
		result.height = y1 - y0;
		return result;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			return false;
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		if(!(this.width <= 0)) {
			return this.height <= 0;
		} else {
			return true;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetVector: function(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,union: function(toUnion,result) {
		if(result == null) {
			result = new lime_math_Rectangle();
		}
		if(this.width == 0 || this.height == 0) {
			result.copyFrom(toUnion);
		} else if(toUnion.width == 0 || toUnion.height == 0) {
			result.copyFrom(this);
		} else {
			var x0 = this.x > toUnion.x ? toUnion.x : this.x;
			var x1 = this.get_right() < toUnion.get_right() ? toUnion.get_right() : this.get_right();
			var y0 = this.y > toUnion.y ? toUnion.y : this.y;
			var y1 = this.get_bottom() < toUnion.get_bottom() ? toUnion.get_bottom() : this.get_bottom();
			result.setTo(x0,y0,x1 - x0,y1 - y0);
		}
		return result;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new lime_math_Vector2(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new lime_math_Vector2(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new lime_math_Vector2(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: lime_math_Rectangle
};
var lime_math_Vector2 = function(x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
};
$hxClasses["lime.math.Vector2"] = lime_math_Vector2;
lime_math_Vector2.__name__ = "lime.math.Vector2";
lime_math_Vector2.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
lime_math_Vector2.interpolate = function(pt1,pt2,f,result) {
	if(result == null) {
		result = new lime_math_Vector2();
	}
	result.x = pt2.x + f * (pt1.x - pt2.x);
	result.y = pt2.y + f * (pt1.y - pt2.y);
	return result;
};
lime_math_Vector2.polar = function(len,angle,result) {
	if(result == null) {
		result = new lime_math_Vector2();
	}
	var ya = len * Math.sin(angle);
	result.x = len * Math.cos(angle);
	result.y = ya;
	return result;
};
lime_math_Vector2.prototype = {
	add: function(v,result) {
		if(result == null) {
			result = new lime_math_Vector2();
		}
		result.x = v.x + this.x;
		result.y = v.y + this.y;
		return result;
	}
	,clone: function() {
		return new lime_math_Vector2(this.x,this.y);
	}
	,equals: function(toCompare) {
		if(toCompare != null && toCompare.x == this.x) {
			return toCompare.y == this.y;
		} else {
			return false;
		}
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) {
			return;
		} else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v,result) {
		if(result == null) {
			result = new lime_math_Vector2();
		}
		result.x = this.x - v.x;
		result.y = this.y - v.y;
		return result;
	}
	,__toFlashPoint: function() {
		return null;
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y;
	}
	,__class__: lime_math_Vector2
};
var lime_math_Vector4 = function(x,y,z,w) {
	if(w == null) {
		w = 0.;
	}
	if(z == null) {
		z = 0.;
	}
	if(y == null) {
		y = 0.;
	}
	if(x == null) {
		x = 0.;
	}
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["lime.math.Vector4"] = lime_math_Vector4;
lime_math_Vector4.__name__ = "lime.math.Vector4";
lime_math_Vector4.angleBetween = function(a,b) {
	var a0 = new lime_math_Vector4(a.x,a.y,a.z,a.w);
	var l = Math.sqrt(a0.x * a0.x + a0.y * a0.y + a0.z * a0.z);
	if(l != 0) {
		a0.x /= l;
		a0.y /= l;
		a0.z /= l;
	}
	var b0 = new lime_math_Vector4(b.x,b.y,b.z,b.w);
	var l = Math.sqrt(b0.x * b0.x + b0.y * b0.y + b0.z * b0.z);
	if(l != 0) {
		b0.x /= l;
		b0.y /= l;
		b0.z /= l;
	}
	return Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z);
};
lime_math_Vector4.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
};
lime_math_Vector4.distanceSquared = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return x * x + y * y + z * z;
};
lime_math_Vector4.get_X_AXIS = function() {
	return new lime_math_Vector4(1,0,0);
};
lime_math_Vector4.get_Y_AXIS = function() {
	return new lime_math_Vector4(0,1,0);
};
lime_math_Vector4.get_Z_AXIS = function() {
	return new lime_math_Vector4(0,0,1);
};
lime_math_Vector4.prototype = {
	add: function(a,result) {
		if(result == null) {
			result = new lime_math_Vector4();
		}
		result.x = this.x + a.x;
		result.y = this.y + a.y;
		result.z = this.z + a.z;
		return result;
	}
	,clone: function() {
		return new lime_math_Vector4(this.x,this.y,this.z,this.w);
	}
	,copyFrom: function(sourceVector4) {
		this.x = sourceVector4.x;
		this.y = sourceVector4.y;
		this.z = sourceVector4.z;
	}
	,crossProduct: function(a,result) {
		if(result == null) {
			result = new lime_math_Vector4();
		}
		var ya = this.z * a.x - this.x * a.z;
		var za = this.x * a.y - this.y * a.x;
		result.x = this.y * a.z - this.z * a.y;
		result.y = ya;
		result.z = za;
		result.w = 1;
		return result;
	}
	,decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	,dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	,equals: function(toCompare,allFour) {
		if(allFour == null) {
			allFour = false;
		}
		if(this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z) {
			if(!(!allFour)) {
				return this.w == toCompare.w;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	,nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) {
			allFour = false;
		}
		if(Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance) {
			if(!(!allFour)) {
				return Math.abs(this.w - toCompare.w) < tolerance;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	}
	,project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	,scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	,setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	}
	,subtract: function(a,result) {
		if(result == null) {
			result = new lime_math_Vector4();
		}
		result.x = this.x - a.x;
		result.y = this.y - a.y;
		result.z = this.z - a.z;
		return result;
	}
	,toString: function() {
		return "Vector4(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,__class__: lime_math_Vector4
};
var lime_media_AudioBuffer = function() {
};
$hxClasses["lime.media.AudioBuffer"] = lime_media_AudioBuffer;
lime_media_AudioBuffer.__name__ = "lime.media.AudioBuffer";
lime_media_AudioBuffer.fromBase64 = function(base64String) {
	if(base64String == null) {
		return null;
	}
	if(base64String.indexOf(",") == -1) {
		base64String = "data:" + lime_media_AudioBuffer.__getCodec(lime__$internal_format_Base64.decode(base64String)) + ";base64," + base64String;
	}
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.set_src(new Howl({ src : [base64String], html5 : true, preload : false}));
	return audioBuffer;
};
lime_media_AudioBuffer.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.set_src(new Howl({ src : ["data:" + lime_media_AudioBuffer.__getCodec(bytes) + ";base64," + lime__$internal_format_Base64.encode(bytes)], html5 : true, preload : false}));
	return audioBuffer;
};
lime_media_AudioBuffer.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : [path], preload : false});
	return audioBuffer;
};
lime_media_AudioBuffer.fromFiles = function(paths) {
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : paths, preload : false});
	return audioBuffer;
};
lime_media_AudioBuffer.fromVorbisFile = function(vorbisFile) {
	return null;
};
lime_media_AudioBuffer.loadFromFile = function(path) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFile(path);
	if(audioBuffer != null) {
		if(audioBuffer != null) {
			audioBuffer.__srcHowl.on("load",function() {
				promise.complete(audioBuffer);
			});
			audioBuffer.__srcHowl.on("loaderror",function(id,msg) {
				promise.error(msg);
			});
			audioBuffer.__srcHowl.load();
		}
	} else {
		promise.error(null);
	}
	return promise.future;
};
lime_media_AudioBuffer.loadFromFiles = function(paths) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFiles(paths);
	if(audioBuffer != null) {
		audioBuffer.__srcHowl.on("load",function() {
			promise.complete(audioBuffer);
		});
		audioBuffer.__srcHowl.on("loaderror",function() {
			promise.error(null);
		});
		audioBuffer.__srcHowl.load();
	} else {
		promise.error(null);
	}
	return promise.future;
};
lime_media_AudioBuffer.__getCodec = function(bytes) {
	var signature = bytes.getString(0,4);
	switch(signature) {
	case "OggS":
		return "audio/ogg";
	case "RIFF":
		if(bytes.getString(8,4) == "WAVE") {
			return "audio/wav";
		} else {
			var _g = bytes.b[1];
			var _g1 = bytes.b[2];
			switch(bytes.b[0]) {
			case 73:
				if(_g == 68) {
					if(_g1 == 51) {
						return "audio/mp3";
					}
				}
				break;
			case 255:
				switch(_g) {
				case 243:case 250:case 251:
					return "audio/mp3";
				default:
				}
				break;
			default:
			}
		}
		break;
	case "fLaC":
		return "audio/flac";
	default:
		var _g = bytes.b[1];
		var _g1 = bytes.b[2];
		switch(bytes.b[0]) {
		case 73:
			if(_g == 68) {
				if(_g1 == 51) {
					return "audio/mp3";
				}
			}
			break;
		case 255:
			switch(_g) {
			case 243:case 250:case 251:
				return "audio/mp3";
			default:
			}
			break;
		default:
		}
	}
	lime_utils_Log.error("Unsupported sound format",{ fileName : "lime/media/AudioBuffer.hx", lineNumber : 362, className : "lime.media.AudioBuffer", methodName : "__getCodec"});
	return null;
};
lime_media_AudioBuffer.prototype = {
	dispose: function() {
		this.__srcHowl.unload();
	}
	,get_src: function() {
		return this.__srcHowl;
	}
	,set_src: function(value) {
		return this.__srcHowl = value;
	}
	,__class__: lime_media_AudioBuffer
};
var lime_media_AudioContext = function(type) {
	if(type != "custom") {
		if(type == null || type == "web") {
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				this.web = new window.AudioContext ();
				this.type = "web";
			} catch( _g ) {
			}
		}
		if(this.web == null && type != "web") {
			this.html5 = new lime_media_HTML5AudioContext();
			this.type = "html5";
		}
	} else {
		this.type = "custom";
	}
};
$hxClasses["lime.media.AudioContext"] = lime_media_AudioContext;
lime_media_AudioContext.__name__ = "lime.media.AudioContext";
lime_media_AudioContext.prototype = {
	__class__: lime_media_AudioContext
};
var lime_media_AudioManager = function() { };
$hxClasses["lime.media.AudioManager"] = lime_media_AudioManager;
lime_media_AudioManager.__name__ = "lime.media.AudioManager";
lime_media_AudioManager.init = function(context) {
	if(lime_media_AudioManager.context == null) {
		if(context == null) {
			lime_media_AudioManager.context = new lime_media_AudioContext();
			context = lime_media_AudioManager.context;
			if(context.type == "openal") {
				var alc = context.openal;
				var device = alc.openDevice();
				var ctx = alc.createContext(device);
				alc.makeContextCurrent(ctx);
				alc.processContext(ctx);
			}
		}
		lime_media_AudioManager.context = context;
	}
};
lime_media_AudioManager.resume = function() {
	if(lime_media_AudioManager.context != null && lime_media_AudioManager.context.type == "openal") {
		var alc = lime_media_AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			var device = alc.getContextsDevice(currentContext);
			alc.resumeDevice(device);
			alc.processContext(currentContext);
		}
	}
};
lime_media_AudioManager.shutdown = function() {
	if(lime_media_AudioManager.context != null && lime_media_AudioManager.context.type == "openal") {
		var alc = lime_media_AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			var device = alc.getContextsDevice(currentContext);
			alc.makeContextCurrent(null);
			alc.destroyContext(currentContext);
			if(device != null) {
				alc.closeDevice(device);
			}
		}
	}
	lime_media_AudioManager.context = null;
};
lime_media_AudioManager.suspend = function() {
	if(lime_media_AudioManager.context != null && lime_media_AudioManager.context.type == "openal") {
		var alc = lime_media_AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			alc.suspendContext(currentContext);
			var device = alc.getContextsDevice(currentContext);
			if(device != null) {
				alc.pauseDevice(device);
			}
		}
	}
};
var lime_media_FlashAudioContext = function() {
};
$hxClasses["lime.media.FlashAudioContext"] = lime_media_FlashAudioContext;
lime_media_FlashAudioContext.__name__ = "lime.media.FlashAudioContext";
lime_media_FlashAudioContext.prototype = {
	createBuffer: function(stream,context) {
		return null;
	}
	,getBytesLoaded: function(buffer) {
		return 0;
	}
	,getBytesTotal: function(buffer) {
		return 0;
	}
	,getID3: function(buffer) {
		return null;
	}
	,getIsBuffering: function(buffer) {
		return false;
	}
	,getIsURLInaccessible: function(buffer) {
		return false;
	}
	,getLength: function(buffer) {
		return 0;
	}
	,getURL: function(buffer) {
		return null;
	}
	,close: function(buffer) {
	}
	,extract: function(buffer,target,length,startPosition) {
		if(startPosition == null) {
			startPosition = -1;
		}
		return 0;
	}
	,load: function(buffer,stream,context) {
	}
	,loadCompressedDataFromByteArray: function(buffer,bytes,bytesLength) {
	}
	,loadPCMFromByteArray: function(buffer,bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) {
			sampleRate = 44100;
		}
		if(stereo == null) {
			stereo = true;
		}
	}
	,play: function(buffer,startTime,loops,sndTransform) {
		if(loops == null) {
			loops = 0;
		}
		if(startTime == null) {
			startTime = 0;
		}
		return null;
	}
	,__class__: lime_media_FlashAudioContext
};
var lime_media_HTML5AudioContext = function() {
	this.NETWORK_NO_SOURCE = 3;
	this.NETWORK_LOADING = 2;
	this.NETWORK_IDLE = 1;
	this.NETWORK_EMPTY = 0;
	this.HAVE_NOTHING = 0;
	this.HAVE_METADATA = 1;
	this.HAVE_FUTURE_DATA = 3;
	this.HAVE_ENOUGH_DATA = 4;
	this.HAVE_CURRENT_DATA = 2;
};
$hxClasses["lime.media.HTML5AudioContext"] = lime_media_HTML5AudioContext;
lime_media_HTML5AudioContext.__name__ = "lime.media.HTML5AudioContext";
lime_media_HTML5AudioContext.prototype = {
	canPlayType: function(buffer,type) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.canPlayType(type);
		}
		return null;
	}
	,createBuffer: function(urlString) {
		var buffer = new lime_media_AudioBuffer();
		buffer.__srcAudio = new Audio();
		buffer.__srcAudio.src = urlString;
		return buffer;
	}
	,getAutoplay: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.autoplay;
		}
		return false;
	}
	,getBuffered: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.buffered;
		}
		return null;
	}
	,getCurrentSrc: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.currentSrc;
		}
		return null;
	}
	,getCurrentTime: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.currentTime;
		}
		return 0;
	}
	,getDefaultPlaybackRate: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.defaultPlaybackRate;
		}
		return 1;
	}
	,getDuration: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.duration;
		}
		return 0;
	}
	,getEnded: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.ended;
		}
		return false;
	}
	,getError: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.error;
		}
		return null;
	}
	,getLoop: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.loop;
		}
		return false;
	}
	,getMuted: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.muted;
		}
		return false;
	}
	,getNetworkState: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.networkState;
		}
		return 0;
	}
	,getPaused: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.paused;
		}
		return false;
	}
	,getPlaybackRate: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.playbackRate;
		}
		return 1;
	}
	,getPlayed: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.played;
		}
		return null;
	}
	,getPreload: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.preload;
		}
		return null;
	}
	,getReadyState: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.readyState;
		}
		return 0;
	}
	,getSeekable: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.seekable;
		}
		return null;
	}
	,getSeeking: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.seeking;
		}
		return false;
	}
	,getSrc: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.src;
		}
		return null;
	}
	,getStartTime: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.playbackRate;
		}
		return 0;
	}
	,getVolume: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.volume;
		}
		return 1;
	}
	,load: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.load();
		}
	}
	,pause: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.pause();
		}
	}
	,play: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.play();
		}
	}
	,setAutoplay: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.autoplay = value;
		}
	}
	,setCurrentTime: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.currentTime = value;
		}
	}
	,setDefaultPlaybackRate: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.defaultPlaybackRate = value;
		}
	}
	,setLoop: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.loop = value;
		}
	}
	,setMuted: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.muted = value;
		}
	}
	,setPlaybackRate: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.playbackRate = value;
		}
	}
	,setPreload: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.preload = value;
		}
	}
	,setSrc: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.src = value;
		}
	}
	,setVolume: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.volume = value;
		}
	}
	,__class__: lime_media_HTML5AudioContext
};
var lime_media_OpenALAudioContext = function() {
	this.ALL_DEVICES_SPECIFIER = 4115;
	this.DEFAULT_ALL_DEVICES_SPECIFIER = 4114;
	this.ENUMERATE_ALL_EXT = 1;
	this.DEVICE_SPECIFIER = 4101;
	this.DEFAULT_DEVICE_SPECIFIER = 4100;
	this.ALL_ATTRIBUTES = 4099;
	this.ATTRIBUTES_SIZE = 4098;
	this.INVALID_CONTEXT = 40962;
	this.INVALID_DEVICE = 40961;
	this.STEREO_SOURCES = 4113;
	this.MONO_SOURCES = 4112;
	this.SYNC = 4105;
	this.REFRESH = 4104;
	this.EXPONENT_DISTANCE_CLAMPED = 53254;
	this.EXPONENT_DISTANCE = 53253;
	this.LINEAR_DISTANCE_CLAMPED = 53252;
	this.LINEAR_DISTANCE = 53251;
	this.INVERSE_DISTANCE_CLAMPED = 53250;
	this.INVERSE_DISTANCE = 53249;
	this.DISTANCE_MODEL = 53248;
	this.DOPPLER_VELOCITY = 49153;
	this.SPEED_OF_SOUND = 49155;
	this.DOPPLER_FACTOR = 49152;
	this.EXTENSIONS = 45060;
	this.RENDERER = 45059;
	this.VERSION = 45058;
	this.VENDOR = 45057;
	this.OUT_OF_MEMORY = 40965;
	this.INVALID_OPERATION = 40964;
	this.INVALID_VALUE = 40963;
	this.INVALID_ENUM = 40962;
	this.INVALID_NAME = 40961;
	this.NO_ERROR = 0;
	this.SIZE = 8196;
	this.CHANNELS = 8195;
	this.BITS = 8194;
	this.FREQUENCY = 8193;
	this.FORMAT_STEREO16 = 4355;
	this.FORMAT_STEREO8 = 4354;
	this.FORMAT_MONO16 = 4353;
	this.FORMAT_MONO8 = 4352;
	this.UNDETERMINED = 4144;
	this.STREAMING = 4137;
	this.STATIC = 4136;
	this.SOURCE_TYPE = 4135;
	this.BYTE_OFFSET = 4134;
	this.SAMPLE_OFFSET = 4133;
	this.SEC_OFFSET = 4132;
	this.MAX_DISTANCE = 4131;
	this.CONE_OUTER_GAIN = 4130;
	this.ROLLOFF_FACTOR = 4129;
	this.REFERENCE_DISTANCE = 4128;
	this.BUFFERS_PROCESSED = 4118;
	this.BUFFERS_QUEUED = 4117;
	this.STOPPED = 4116;
	this.PAUSED = 4115;
	this.PLAYING = 4114;
	this.INITIAL = 4113;
	this.SOURCE_STATE = 4112;
	this.ORIENTATION = 4111;
	this.MAX_GAIN = 4110;
	this.MIN_GAIN = 4109;
	this.GAIN = 4106;
	this.BUFFER = 4105;
	this.LOOPING = 4103;
	this.VELOCITY = 4102;
	this.DIRECTION = 4101;
	this.POSITION = 4100;
	this.PITCH = 4099;
	this.CONE_OUTER_ANGLE = 4098;
	this.CONE_INNER_ANGLE = 4097;
	this.SOURCE_RELATIVE = 514;
	this.TRUE = 1;
	this.FALSE = 0;
	this.NONE = 0;
};
$hxClasses["lime.media.OpenALAudioContext"] = lime_media_OpenALAudioContext;
lime_media_OpenALAudioContext.__name__ = "lime.media.OpenALAudioContext";
lime_media_OpenALAudioContext.prototype = {
	bufferData: function(buffer,format,data,size,freq) {
		lime_media_openal_AL.bufferData(buffer,format,data,size,freq);
	}
	,buffer3f: function(buffer,param,value1,value2,value3) {
		lime_media_openal_AL.buffer3f(buffer,param,value1,value2,value3);
	}
	,buffer3i: function(buffer,param,value1,value2,value3) {
		lime_media_openal_AL.buffer3i(buffer,param,value1,value2,value3);
	}
	,bufferf: function(buffer,param,value) {
		lime_media_openal_AL.bufferf(buffer,param,value);
	}
	,bufferfv: function(buffer,param,values) {
		lime_media_openal_AL.bufferfv(buffer,param,values);
	}
	,bufferi: function(buffer,param,value) {
		lime_media_openal_AL.bufferi(buffer,param,value);
	}
	,bufferiv: function(buffer,param,values) {
		lime_media_openal_AL.bufferiv(buffer,param,values);
	}
	,closeDevice: function(device) {
		return lime_media_openal_ALC.closeDevice(device);
	}
	,createContext: function(device,attrlist) {
		return lime_media_openal_ALC.createContext(device,attrlist);
	}
	,createBuffer: function() {
		return lime_media_openal_AL.createBuffer();
	}
	,createSource: function() {
		return lime_media_openal_AL.createSource();
	}
	,deleteBuffer: function(buffer) {
		lime_media_openal_AL.deleteBuffer(buffer);
	}
	,deleteBuffers: function(buffers) {
		lime_media_openal_AL.deleteBuffers(buffers);
	}
	,deleteSource: function(source) {
		lime_media_openal_AL.deleteSource(source);
	}
	,deleteSources: function(sources) {
		lime_media_openal_AL.deleteSources(sources);
	}
	,destroyContext: function(context) {
		if(context == null) {
			return;
		}
		lime_media_openal_ALC.destroyContext(context);
	}
	,disable: function(capability) {
		lime_media_openal_AL.disable(capability);
	}
	,distanceModel: function(distanceModel) {
		lime_media_openal_AL.distanceModel(distanceModel);
	}
	,dopplerFactor: function(value) {
		lime_media_openal_AL.dopplerFactor(value);
	}
	,dopplerVelocity: function(value) {
		lime_media_openal_AL.dopplerVelocity(value);
	}
	,enable: function(capability) {
		lime_media_openal_AL.enable(capability);
	}
	,genSource: function() {
		return this.createSource();
	}
	,genSources: function(n) {
		return lime_media_openal_AL.genSources(n);
	}
	,genBuffer: function() {
		return this.createBuffer();
	}
	,genBuffers: function(n) {
		return lime_media_openal_AL.genBuffers(n);
	}
	,getBoolean: function(param) {
		return lime_media_openal_AL.getBoolean(param);
	}
	,getBooleanv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getBooleanv(param,count);
	}
	,getBuffer3f: function(buffer,param) {
		return lime_media_openal_AL.getBuffer3f(buffer,param);
	}
	,getBuffer3i: function(buffer,param) {
		return lime_media_openal_AL.getBuffer3i(buffer,param);
	}
	,getBufferf: function(buffer,param) {
		return lime_media_openal_AL.getBufferf(buffer,param);
	}
	,getBufferfv: function(buffer,param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getBufferfv(buffer,param,count);
	}
	,getBufferi: function(buffer,param) {
		return lime_media_openal_AL.getBufferi(buffer,param);
	}
	,getBufferiv: function(buffer,param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getBufferiv(buffer,param,count);
	}
	,getContextsDevice: function(context) {
		if(context == null) {
			return null;
		}
		return lime_media_openal_ALC.getContextsDevice(context);
	}
	,getCurrentContext: function() {
		return lime_media_openal_ALC.getCurrentContext();
	}
	,getDouble: function(param) {
		return lime_media_openal_AL.getDouble(param);
	}
	,getDoublev: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getDoublev(param,count);
	}
	,getEnumValue: function(ename) {
		return lime_media_openal_AL.getEnumValue(ename);
	}
	,getError: function(device) {
		if(device == null) {
			return lime_media_openal_AL.getError();
		} else {
			return lime_media_openal_ALC.getError(device);
		}
	}
	,getErrorString: function(device) {
		if(device == null) {
			return lime_media_openal_AL.getErrorString();
		} else {
			return lime_media_openal_ALC.getErrorString(device);
		}
	}
	,getFloat: function(param) {
		return lime_media_openal_AL.getFloat(param);
	}
	,getFloatv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getFloatv(param,count);
	}
	,getInteger: function(param) {
		return lime_media_openal_AL.getInteger(param);
	}
	,getIntegerv: function(param,count,device) {
		if(count == null) {
			count = 1;
		}
		if(device == null) {
			return lime_media_openal_AL.getIntegerv(param,count);
		} else {
			return lime_media_openal_ALC.getIntegerv(device,param,count);
		}
	}
	,getListener3f: function(param) {
		return lime_media_openal_AL.getListener3f(param);
	}
	,getListener3i: function(param) {
		return lime_media_openal_AL.getListener3i(param);
	}
	,getListenerf: function(param) {
		return lime_media_openal_AL.getListenerf(param);
	}
	,getListenerfv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getListenerfv(param,count);
	}
	,getListeneri: function(param) {
		return lime_media_openal_AL.getListeneri(param);
	}
	,getListeneriv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getListeneriv(param,count);
	}
	,getProcAddress: function(fname) {
		return lime_media_openal_AL.getProcAddress(fname);
	}
	,getSource3f: function(source,param) {
		return lime_media_openal_AL.getSource3f(source,param);
	}
	,getSourcef: function(source,param) {
		return lime_media_openal_AL.getSourcef(source,param);
	}
	,getSource3i: function(source,param) {
		return lime_media_openal_AL.getSource3i(source,param);
	}
	,getSourcefv: function(source,param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getSourcefv(source,param);
	}
	,getSourcei: function(source,param) {
		return lime_media_openal_AL.getSourcei(source,param);
	}
	,getSourceiv: function(source,param,count) {
		if(count == null) {
			count = 1;
		}
		return lime_media_openal_AL.getSourceiv(source,param,count);
	}
	,getString: function(param,device) {
		if(device == null) {
			return lime_media_openal_AL.getString(param);
		} else {
			return lime_media_openal_ALC.getString(device,param);
		}
	}
	,isBuffer: function(buffer) {
		return lime_media_openal_AL.isBuffer(buffer);
	}
	,isEnabled: function(capability) {
		return lime_media_openal_AL.isEnabled(capability);
	}
	,isExtensionPresent: function(extname) {
		return lime_media_openal_AL.isExtensionPresent(extname);
	}
	,isSource: function(source) {
		return lime_media_openal_AL.isSource(source);
	}
	,listener3f: function(param,value1,value2,value3) {
		lime_media_openal_AL.listener3f(param,value1,value2,value3);
	}
	,listener3i: function(param,value1,value2,value3) {
		lime_media_openal_AL.listener3i(param,value1,value2,value3);
	}
	,listenerf: function(param,value) {
		lime_media_openal_AL.listenerf(param,value);
	}
	,listenerfv: function(param,values) {
		lime_media_openal_AL.listenerfv(param,values);
	}
	,listeneri: function(param,value) {
		lime_media_openal_AL.listeneri(param,value);
	}
	,listeneriv: function(param,values) {
		lime_media_openal_AL.listeneriv(param,values);
	}
	,makeContextCurrent: function(context) {
		return lime_media_openal_ALC.makeContextCurrent(context);
	}
	,openDevice: function(deviceName) {
		return lime_media_openal_ALC.openDevice(deviceName);
	}
	,pauseDevice: function(device) {
		lime_media_openal_ALC.pauseDevice(device);
	}
	,processContext: function(context) {
		lime_media_openal_ALC.processContext(context);
	}
	,resumeDevice: function(device) {
		lime_media_openal_ALC.resumeDevice(device);
	}
	,source3f: function(source,param,value1,value2,value3) {
		lime_media_openal_AL.source3f(source,param,value1,value2,value3);
	}
	,source3i: function(source,param,value1,value2,value3) {
		lime_media_openal_AL.source3i(source,param,value1,value2,value3);
	}
	,sourcef: function(source,param,value) {
		lime_media_openal_AL.sourcef(source,param,value);
	}
	,sourcefv: function(source,param,values) {
		lime_media_openal_AL.sourcefv(source,param,values);
	}
	,sourcei: function(source,param,value) {
		lime_media_openal_AL.sourcei(source,param,value);
	}
	,sourceiv: function(source,param,values) {
		lime_media_openal_AL.sourceiv(source,param,values);
	}
	,sourcePlay: function(source) {
		lime_media_openal_AL.sourcePlay(source);
	}
	,sourcePlayv: function(sources) {
		lime_media_openal_AL.sourcePlayv(sources);
	}
	,sourceStop: function(source) {
		lime_media_openal_AL.sourceStop(source);
	}
	,sourceStopv: function(sources) {
		lime_media_openal_AL.sourceStopv(sources);
	}
	,sourceRewind: function(source) {
		lime_media_openal_AL.sourceRewind(source);
	}
	,sourceRewindv: function(sources) {
		lime_media_openal_AL.sourceRewindv(sources);
	}
	,sourcePause: function(source) {
		lime_media_openal_AL.sourcePause(source);
	}
	,sourcePausev: function(sources) {
		lime_media_openal_AL.sourcePausev(sources);
	}
	,sourceQueueBuffer: function(source,buffer) {
		lime_media_openal_AL.sourceQueueBuffer(source,buffer);
	}
	,sourceQueueBuffers: function(source,nb,buffers) {
		lime_media_openal_AL.sourceQueueBuffers(source,nb,buffers);
	}
	,sourceUnqueueBuffer: function(source) {
		return lime_media_openal_AL.sourceUnqueueBuffer(source);
	}
	,sourceUnqueueBuffers: function(source,nb) {
		return lime_media_openal_AL.sourceUnqueueBuffers(source,nb);
	}
	,speedOfSound: function(value) {
		lime_media_openal_AL.speedOfSound(value);
	}
	,suspendContext: function(context) {
		lime_media_openal_ALC.suspendContext(context);
	}
	,__class__: lime_media_OpenALAudioContext
};
var lime_media_openal_AL = function() { };
$hxClasses["lime.media.openal.AL"] = lime_media_openal_AL;
lime_media_openal_AL.__name__ = "lime.media.openal.AL";
lime_media_openal_AL.removeDirectFilter = function(source) {
};
lime_media_openal_AL.removeSend = function(source,index) {
};
lime_media_openal_AL.auxf = function(aux,param,value) {
};
lime_media_openal_AL.auxfv = function(aux,param,values) {
};
lime_media_openal_AL.auxi = function(aux,param,value) {
};
lime_media_openal_AL.auxiv = function(aux,param,values) {
};
lime_media_openal_AL.bufferData = function(buffer,format,data,size,freq) {
};
lime_media_openal_AL.buffer3f = function(buffer,param,value1,value2,value3) {
};
lime_media_openal_AL.buffer3i = function(buffer,param,value1,value2,value3) {
};
lime_media_openal_AL.bufferf = function(buffer,param,value) {
};
lime_media_openal_AL.bufferfv = function(buffer,param,values) {
};
lime_media_openal_AL.bufferi = function(buffer,param,value) {
};
lime_media_openal_AL.bufferiv = function(buffer,param,values) {
};
lime_media_openal_AL.createAux = function() {
	return null;
};
lime_media_openal_AL.createBuffer = function() {
	return null;
};
lime_media_openal_AL.createEffect = function() {
	return null;
};
lime_media_openal_AL.createFilter = function() {
	return null;
};
lime_media_openal_AL.createSource = function() {
	return null;
};
lime_media_openal_AL.deleteBuffer = function(buffer) {
};
lime_media_openal_AL.deleteBuffers = function(buffers) {
};
lime_media_openal_AL.deleteSource = function(source) {
};
lime_media_openal_AL.deleteSources = function(sources) {
};
lime_media_openal_AL.disable = function(capability) {
};
lime_media_openal_AL.distanceModel = function(distanceModel) {
};
lime_media_openal_AL.dopplerFactor = function(value) {
};
lime_media_openal_AL.dopplerVelocity = function(value) {
};
lime_media_openal_AL.effectf = function(effect,param,value) {
};
lime_media_openal_AL.effectfv = function(effect,param,values) {
};
lime_media_openal_AL.effecti = function(effect,param,value) {
};
lime_media_openal_AL.effectiv = function(effect,param,values) {
};
lime_media_openal_AL.enable = function(capability) {
};
lime_media_openal_AL.genSource = function() {
	return null;
};
lime_media_openal_AL.genSources = function(n) {
	return null;
};
lime_media_openal_AL.genBuffer = function() {
	return null;
};
lime_media_openal_AL.genBuffers = function(n) {
	return null;
};
lime_media_openal_AL.getBoolean = function(param) {
	return false;
};
lime_media_openal_AL.getBooleanv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getBuffer3f = function(buffer,param) {
	return null;
};
lime_media_openal_AL.getBuffer3i = function(buffer,param) {
	return null;
};
lime_media_openal_AL.getBufferf = function(buffer,param) {
	return 0;
};
lime_media_openal_AL.getBufferfv = function(buffer,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getBufferi = function(buffer,param) {
	return 0;
};
lime_media_openal_AL.getBufferiv = function(buffer,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getDouble = function(param) {
	return 0;
};
lime_media_openal_AL.getDoublev = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getEnumValue = function(ename) {
	return 0;
};
lime_media_openal_AL.getError = function() {
	return 0;
};
lime_media_openal_AL.getErrorString = function() {
	switch(lime_media_openal_AL.getError()) {
	case 40961:
		return "INVALID_NAME: Invalid parameter name";
	case 40962:
		return "INVALID_ENUM: Invalid enum value";
	case 40963:
		return "INVALID_VALUE: Invalid parameter value";
	case 40964:
		return "INVALID_OPERATION: Illegal operation or call";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
};
lime_media_openal_AL.getFilteri = function(filter,param) {
	return 0;
};
lime_media_openal_AL.getFloat = function(param) {
	return 0;
};
lime_media_openal_AL.getFloatv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getInteger = function(param) {
	return 0;
};
lime_media_openal_AL.getIntegerv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getListener3f = function(param) {
	return null;
};
lime_media_openal_AL.getListener3i = function(param) {
	return null;
};
lime_media_openal_AL.getListenerf = function(param) {
	return 0;
};
lime_media_openal_AL.getListenerfv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getListeneri = function(param) {
	return 0;
};
lime_media_openal_AL.getListeneriv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getParameter = function(param) {
	return null;
};
lime_media_openal_AL.getProcAddress = function(fname) {
	return null;
};
lime_media_openal_AL.getSource3f = function(source,param) {
	return null;
};
lime_media_openal_AL.getSourcef = function(source,param) {
	return 0;
};
lime_media_openal_AL.getSource3i = function(source,param) {
	return null;
};
lime_media_openal_AL.getSourcefv = function(source,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getSourcei = function(source,param) {
	return 0;
};
lime_media_openal_AL.getSourceiv = function(source,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
};
lime_media_openal_AL.getString = function(param) {
	return null;
};
lime_media_openal_AL.isBuffer = function(buffer) {
	return false;
};
lime_media_openal_AL.isEnabled = function(capability) {
	return false;
};
lime_media_openal_AL.isExtensionPresent = function(extname) {
	return false;
};
lime_media_openal_AL.isAux = function(aux) {
	return false;
};
lime_media_openal_AL.isEffect = function(effect) {
	return false;
};
lime_media_openal_AL.isFilter = function(filter) {
	return false;
};
lime_media_openal_AL.isSource = function(source) {
	return false;
};
lime_media_openal_AL.listener3f = function(param,value1,value2,value3) {
};
lime_media_openal_AL.listener3i = function(param,value1,value2,value3) {
};
lime_media_openal_AL.listenerf = function(param,value) {
};
lime_media_openal_AL.listenerfv = function(param,values) {
};
lime_media_openal_AL.listeneri = function(param,value) {
};
lime_media_openal_AL.listeneriv = function(param,values) {
};
lime_media_openal_AL.source3f = function(source,param,value1,value2,value3) {
};
lime_media_openal_AL.source3i = function(source,param,value1,value2,value3) {
};
lime_media_openal_AL.sourcef = function(source,param,value) {
};
lime_media_openal_AL.sourcefv = function(source,param,values) {
};
lime_media_openal_AL.sourcei = function(source,param,value) {
};
lime_media_openal_AL.filteri = function(filter,param,value) {
};
lime_media_openal_AL.filterf = function(filter,param,value) {
};
lime_media_openal_AL.sourceiv = function(source,param,values) {
};
lime_media_openal_AL.sourcePlay = function(source) {
};
lime_media_openal_AL.sourcePlayv = function(sources) {
};
lime_media_openal_AL.sourceStop = function(source) {
};
lime_media_openal_AL.sourceStopv = function(sources) {
};
lime_media_openal_AL.sourceRewind = function(source) {
};
lime_media_openal_AL.sourceRewindv = function(sources) {
};
lime_media_openal_AL.sourcePause = function(source) {
};
lime_media_openal_AL.sourcePausev = function(sources) {
};
lime_media_openal_AL.sourceQueueBuffer = function(source,buffer) {
};
lime_media_openal_AL.sourceQueueBuffers = function(source,nb,buffers) {
};
lime_media_openal_AL.sourceUnqueueBuffer = function(source) {
	return 0;
};
lime_media_openal_AL.sourceUnqueueBuffers = function(source,nb) {
	return null;
};
lime_media_openal_AL.speedOfSound = function(value) {
};
var lime_media_openal_ALAuxiliaryEffectSlot = {};
lime_media_openal_ALAuxiliaryEffectSlot._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALBuffer = {};
lime_media_openal_ALBuffer._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALC = function() { };
$hxClasses["lime.media.openal.ALC"] = lime_media_openal_ALC;
lime_media_openal_ALC.__name__ = "lime.media.openal.ALC";
lime_media_openal_ALC.closeDevice = function(device) {
	return false;
};
lime_media_openal_ALC.createContext = function(device,attrlist) {
	return null;
};
lime_media_openal_ALC.destroyContext = function(context) {
};
lime_media_openal_ALC.getContextsDevice = function(context) {
	return null;
};
lime_media_openal_ALC.getCurrentContext = function() {
	return null;
};
lime_media_openal_ALC.getError = function(device) {
	return 0;
};
lime_media_openal_ALC.getErrorString = function(device) {
	switch(lime_media_openal_ALC.getError(device)) {
	case 40961:
		return "INVALID_DEVICE: Invalid device (or no device?)";
	case 40962:
		return "INVALID_CONTEXT: Invalid context (or no context?)";
	case 40963:
		return "INVALID_ENUM: Invalid enum value";
	case 40964:
		return "INVALID_VALUE: Invalid param value";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
};
lime_media_openal_ALC.getIntegerv = function(device,param,size) {
	return null;
};
lime_media_openal_ALC.getString = function(device,param) {
	return null;
};
lime_media_openal_ALC.makeContextCurrent = function(context) {
	return false;
};
lime_media_openal_ALC.openDevice = function(deviceName) {
	return null;
};
lime_media_openal_ALC.pauseDevice = function(device) {
};
lime_media_openal_ALC.processContext = function(context) {
};
lime_media_openal_ALC.resumeDevice = function(device) {
};
lime_media_openal_ALC.suspendContext = function(context) {
};
var lime_media_openal_ALContext = {};
lime_media_openal_ALContext._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALDevice = {};
lime_media_openal_ALDevice._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALEffect = {};
lime_media_openal_ALEffect._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALFilter = {};
lime_media_openal_ALFilter._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_openal_ALSource = {};
lime_media_openal_ALSource._new = function(handle) {
	var this1 = handle;
	return this1;
};
var lime_media_vorbis_VorbisComment = function() {
};
$hxClasses["lime.media.vorbis.VorbisComment"] = lime_media_vorbis_VorbisComment;
lime_media_vorbis_VorbisComment.__name__ = "lime.media.vorbis.VorbisComment";
lime_media_vorbis_VorbisComment.prototype = {
	__class__: lime_media_vorbis_VorbisComment
};
var lime_media_vorbis_VorbisFile = function(handle) {
	this.handle = handle;
};
$hxClasses["lime.media.vorbis.VorbisFile"] = lime_media_vorbis_VorbisFile;
lime_media_vorbis_VorbisFile.__name__ = "lime.media.vorbis.VorbisFile";
lime_media_vorbis_VorbisFile.fromBytes = function(bytes) {
	return null;
};
lime_media_vorbis_VorbisFile.fromFile = function(path) {
	return null;
};
lime_media_vorbis_VorbisFile.prototype = {
	bitrate: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	}
	,bitrateInstant: function() {
		return 0;
	}
	,clear: function() {
	}
	,comment: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return null;
	}
	,crosslap: function(other) {
		return 0;
	}
	,info: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return null;
	}
	,pcmSeek: function(pos) {
		return 0;
	}
	,pcmSeekLap: function(pos) {
		return 0;
	}
	,pcmSeekPage: function(pos) {
		return 0;
	}
	,pcmSeekPageLap: function(pos) {
		return 0;
	}
	,pcmTell: function() {
		var this1 = new haxe__$Int64__$_$_$Int64(0,0);
		return this1;
	}
	,pcmTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(0,0);
		return this1;
	}
	,rawSeek: function(pos) {
		return 0;
	}
	,rawSeekLap: function(pos) {
		return 0;
	}
	,rawTell: function() {
		var this1 = new haxe__$Int64__$_$_$Int64(0,0);
		return this1;
	}
	,rawTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(0,0);
		return this1;
	}
	,read: function(buffer,position,length,bigEndianPacking,wordSize,signed) {
		if(signed == null) {
			signed = true;
		}
		if(wordSize == null) {
			wordSize = 2;
		}
		if(bigEndianPacking == null) {
			bigEndianPacking = false;
		}
		if(length == null) {
			length = 4096;
		}
		return 0;
	}
	,readFloat: function(pcmChannels,samples) {
		return 0;
	}
	,seekable: function() {
		return false;
	}
	,serialNumber: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	}
	,streams: function() {
		return 0;
	}
	,timeSeek: function(s) {
		return 0;
	}
	,timeSeekLap: function(s) {
		return 0;
	}
	,timeSeekPage: function(s) {
		return 0;
	}
	,timeSeekPageLap: function(s) {
		return 0;
	}
	,timeTell: function() {
		return 0;
	}
	,timeTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	}
	,__class__: lime_media_vorbis_VorbisFile
};
var lime_media_vorbis_VorbisInfo = function() {
};
$hxClasses["lime.media.vorbis.VorbisInfo"] = lime_media_vorbis_VorbisInfo;
lime_media_vorbis_VorbisInfo.__name__ = "lime.media.vorbis.VorbisInfo";
lime_media_vorbis_VorbisInfo.prototype = {
	__class__: lime_media_vorbis_VorbisInfo
};
var lime_net__$IHTTPRequest = function() { };
$hxClasses["lime.net._IHTTPRequest"] = lime_net__$IHTTPRequest;
lime_net__$IHTTPRequest.__name__ = "lime.net._IHTTPRequest";
lime_net__$IHTTPRequest.__isInterface__ = true;
lime_net__$IHTTPRequest.prototype = {
	__class__: lime_net__$IHTTPRequest
};
var lime_net__$HTTPRequest_AbstractHTTPRequest = function(uri) {
	this.uri = uri;
	this.contentType = "application/x-www-form-urlencoded";
	this.followRedirects = true;
	this.enableResponseHeaders = false;
	this.formData = new haxe_ds_StringMap();
	this.headers = [];
	this.method = "GET";
	this.timeout = 30000;
	this.withCredentials = false;
	this.manageCookies = true;
	this.__backend = new lime__$internal_backend_html5_HTML5HTTPRequest();
	this.__backend.init(this);
};
$hxClasses["lime.net._HTTPRequest.AbstractHTTPRequest"] = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_AbstractHTTPRequest.__name__ = "lime.net._HTTPRequest.AbstractHTTPRequest";
lime_net__$HTTPRequest_AbstractHTTPRequest.__interfaces__ = [lime_net__$IHTTPRequest];
lime_net__$HTTPRequest_AbstractHTTPRequest.prototype = {
	cancel: function() {
		this.__backend.cancel();
	}
	,load: function(uri) {
		return null;
	}
	,__class__: lime_net__$HTTPRequest_AbstractHTTPRequest
};
var lime_net_HTTPRequest = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net.HTTPRequest"] = lime_net_HTTPRequest;
lime_net_HTTPRequest.__name__ = "lime.net.HTTPRequest";
lime_net_HTTPRequest.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net_HTTPRequest.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	__class__: lime_net_HTTPRequest
});
var lime_net__$HTTPRequest_$Bytes = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_Bytes"] = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$Bytes.__name__ = "lime.net._HTTPRequest_Bytes";
lime_net__$HTTPRequest_$Bytes.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$Bytes.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	fromBytes: function(bytes) {
		return bytes;
	}
	,load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new lime_app_Promise();
		var future = this.__backend.loadData(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(bytes) {
			_gthis.responseData = _gthis.fromBytes(bytes);
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$Bytes
});
var lime_net__$HTTPRequest_$String = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_String"] = lime_net__$HTTPRequest_$String;
lime_net__$HTTPRequest_$String.__name__ = "lime.net._HTTPRequest_String";
lime_net__$HTTPRequest_$String.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$String.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new lime_app_Promise();
		var future = this.__backend.loadText(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(text) {
			_gthis.responseData = text;
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$String
});
var lime_net_HTTPRequestHeader = function(name,value) {
	if(value == null) {
		value = "";
	}
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.HTTPRequestHeader"] = lime_net_HTTPRequestHeader;
lime_net_HTTPRequestHeader.__name__ = "lime.net.HTTPRequestHeader";
lime_net_HTTPRequestHeader.prototype = {
	__class__: lime_net_HTTPRequestHeader
};
var lime_net__$HTTPRequest_$lime_$text_$Font = function(uri) {
	lime_net__$HTTPRequest_$Bytes.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_lime_text_Font"] = lime_net__$HTTPRequest_$lime_$text_$Font;
lime_net__$HTTPRequest_$lime_$text_$Font.__name__ = "lime.net._HTTPRequest_lime_text_Font";
lime_net__$HTTPRequest_$lime_$text_$Font.__super__ = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$lime_$text_$Font.prototype = $extend(lime_net__$HTTPRequest_$Bytes.prototype,{
	fromBytes: function(bytes) {
		return lime_text_Font.fromBytes(bytes);
	}
	,__class__: lime_net__$HTTPRequest_$lime_$text_$Font
});
var lime_net__$HTTPRequest_$lime_$utils_$Bytes = function(uri) {
	lime_net__$HTTPRequest_$Bytes.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_lime_utils_Bytes"] = lime_net__$HTTPRequest_$lime_$utils_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__name__ = "lime.net._HTTPRequest_lime_utils_Bytes";
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__super__ = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.prototype = $extend(lime_net__$HTTPRequest_$Bytes.prototype,{
	fromBytes: function(bytes) {
		return lime_utils_Bytes.fromBytes(bytes);
	}
	,__class__: lime_net__$HTTPRequest_$lime_$utils_$Bytes
});
var lime_system_BackgroundWorker = function() {
	this.onProgress = new lime_app__$Event_$Dynamic_$Void();
	this.onError = new lime_app__$Event_$Dynamic_$Void();
	this.onComplete = new lime_app__$Event_$Dynamic_$Void();
	this.doWork = new lime_app__$Event_$Dynamic_$Void();
};
$hxClasses["lime.system.BackgroundWorker"] = lime_system_BackgroundWorker;
lime_system_BackgroundWorker.__name__ = "lime.system.BackgroundWorker";
lime_system_BackgroundWorker.prototype = {
	cancel: function() {
		this.canceled = true;
	}
	,run: function(message) {
		this.canceled = false;
		this.completed = false;
		this.__runMessage = message;
		this.__doWork();
	}
	,sendComplete: function(message) {
		this.completed = true;
		if(!this.canceled) {
			this.canceled = true;
			this.onComplete.dispatch(message);
		}
	}
	,sendError: function(message) {
		if(!this.canceled) {
			this.canceled = true;
			this.onError.dispatch(message);
		}
	}
	,sendProgress: function(message) {
		if(!this.canceled) {
			this.onProgress.dispatch(message);
		}
	}
	,__doWork: function() {
		this.doWork.dispatch(this.__runMessage);
	}
	,__update: function(deltaTime) {
	}
	,__class__: lime_system_BackgroundWorker
};
var lime_system_CFFI = function() { };
$hxClasses["lime.system.CFFI"] = lime_system_CFFI;
lime_system_CFFI.__name__ = "lime.system.CFFI";
lime_system_CFFI.load = function(library,method,args,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	if(args == null) {
		args = 0;
	}
	if(!lime_system_CFFI.enabled) {
		return Reflect.makeVarArgs(function(__) {
			return { };
		});
	}
	var result = null;
	return result;
};
lime_system_CFFI.__findHaxelib = function(library) {
	return "";
};
lime_system_CFFI.__loaderTrace = function(message) {
};
lime_system_CFFI.__sysName = function() {
	return null;
};
lime_system_CFFI.__tryLoad = function(name,library,func,args) {
	return null;
};
var lime_system_CFFIPointer = {};
lime_system_CFFIPointer._new = function(handle) {
	var this1 = handle;
	return this1;
};
lime_system_CFFIPointer.get = function(this1) {
	var tmp = this1 != null;
	return 0;
};
lime_system_CFFIPointer.equals = function(a,b) {
	return lime_system_CFFIPointer.get(a) == b;
};
lime_system_CFFIPointer.equalsPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) == lime_system_CFFIPointer.get(b);
};
lime_system_CFFIPointer.greaterThan = function(a,b) {
	return lime_system_CFFIPointer.get(a) > b;
};
lime_system_CFFIPointer.greaterThanPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) > lime_system_CFFIPointer.get(b);
};
lime_system_CFFIPointer.greaterThanOrEqual = function(a,b) {
	return lime_system_CFFIPointer.get(a) >= b;
};
lime_system_CFFIPointer.greaterThanOrEqualPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) >= lime_system_CFFIPointer.get(b);
};
lime_system_CFFIPointer.lessThan = function(a,b) {
	return lime_system_CFFIPointer.get(a) < b;
};
lime_system_CFFIPointer.lessThanPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) < lime_system_CFFIPointer.get(b);
};
lime_system_CFFIPointer.lessThanOrEqual = function(a,b) {
	return lime_system_CFFIPointer.get(a) <= b;
};
lime_system_CFFIPointer.lessThanOrEqualPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) <= lime_system_CFFIPointer.get(b);
};
lime_system_CFFIPointer.notEquals = function(a,b) {
	return lime_system_CFFIPointer.get(a) != b;
};
lime_system_CFFIPointer.notEqualsPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) != lime_system_CFFIPointer.get(b);
};
var lime_system_Clipboard = function() { };
$hxClasses["lime.system.Clipboard"] = lime_system_Clipboard;
lime_system_Clipboard.__name__ = "lime.system.Clipboard";
lime_system_Clipboard.__update = function() {
	var cacheText = lime_system_Clipboard._text;
	lime_system_Clipboard._text = null;
	if(lime_system_Clipboard._text != cacheText) {
		lime_system_Clipboard.onUpdate.dispatch();
	}
};
lime_system_Clipboard.get_text = function() {
	lime_system_Clipboard.__update();
	return lime_system_Clipboard._text;
};
lime_system_Clipboard.set_text = function(value) {
	var cacheText = lime_system_Clipboard._text;
	lime_system_Clipboard._text = value;
	var $window = lime_app_Application.current.__window;
	if($window != null) {
		$window.__backend.setClipboard(value);
	}
	if(lime_system_Clipboard._text != cacheText) {
		lime_system_Clipboard.onUpdate.dispatch();
	}
	return value;
};
var lime_system_Display = function() {
};
$hxClasses["lime.system.Display"] = lime_system_Display;
lime_system_Display.__name__ = "lime.system.Display";
lime_system_Display.prototype = {
	__class__: lime_system_Display
};
var lime_system_DisplayMode = function(width,height,refreshRate,pixelFormat) {
	this.width = width;
	this.height = height;
	this.refreshRate = refreshRate;
	this.pixelFormat = pixelFormat;
};
$hxClasses["lime.system.DisplayMode"] = lime_system_DisplayMode;
lime_system_DisplayMode.__name__ = "lime.system.DisplayMode";
lime_system_DisplayMode.prototype = {
	__class__: lime_system_DisplayMode
};
var lime_system_Endian = $hxEnums["lime.system.Endian"] = { __ename__:"lime.system.Endian",__constructs__:null
	,LITTLE_ENDIAN: {_hx_name:"LITTLE_ENDIAN",_hx_index:0,__enum__:"lime.system.Endian",toString:$estr}
	,BIG_ENDIAN: {_hx_name:"BIG_ENDIAN",_hx_index:1,__enum__:"lime.system.Endian",toString:$estr}
};
lime_system_Endian.__constructs__ = [lime_system_Endian.LITTLE_ENDIAN,lime_system_Endian.BIG_ENDIAN];
var lime_system_Sensor = function(type,id) {
	this.onUpdate = new lime_app__$Event_$Float_$Float_$Float_$Void();
	this.type = type;
	this.id = id;
};
$hxClasses["lime.system.Sensor"] = lime_system_Sensor;
lime_system_Sensor.__name__ = "lime.system.Sensor";
lime_system_Sensor.getSensors = function(type) {
	if(type == null) {
		return lime_system_Sensor.sensors.slice();
	} else {
		var result = [];
		var _g = 0;
		var _g1 = lime_system_Sensor.sensors;
		while(_g < _g1.length) {
			var sensor = _g1[_g];
			++_g;
			if(sensor.type == type) {
				result.push(sensor);
			}
		}
		return result;
	}
};
lime_system_Sensor.registerSensor = function(type,id) {
	var sensor = new lime_system_Sensor(type,id);
	lime_system_Sensor.sensors.push(sensor);
	lime_system_Sensor.sensorByID.h[id] = sensor;
	return sensor;
};
lime_system_Sensor.prototype = {
	__class__: lime_system_Sensor
};
var lime_system_SensorType = $hxEnums["lime.system.SensorType"] = { __ename__:"lime.system.SensorType",__constructs__:null
	,ACCELEROMETER: {_hx_name:"ACCELEROMETER",_hx_index:0,__enum__:"lime.system.SensorType",toString:$estr}
};
lime_system_SensorType.__constructs__ = [lime_system_SensorType.ACCELEROMETER];
var lime_system_System = function() { };
$hxClasses["lime.system.System"] = lime_system_System;
lime_system_System.__name__ = "lime.system.System";
lime_system_System.embed = $hx_exports["lime"]["embed"] = function(projectName,element,width,height,config) {
	if(lime_system_System.__applicationEntryPoint == null) {
		return;
	}
	if(Object.prototype.hasOwnProperty.call(lime_system_System.__applicationEntryPoint.h,projectName)) {
		var htmlElement = null;
		if(typeof(element) == "string") {
			htmlElement = window.document.getElementById(element);
		} else if(element == null) {
			htmlElement = window.document.createElement("div");
		} else {
			htmlElement = element;
		}
		if(htmlElement == null) {
			window.console.log("[lime.embed] ERROR: Cannot find target element: " + Std.string(element));
			return;
		}
		if(width == null) {
			width = 0;
		}
		if(height == null) {
			height = 0;
		}
		if(config == null) {
			config = { };
		}
		if(Object.prototype.hasOwnProperty.call(config,"background") && typeof(config.background) == "string") {
			var background = StringTools.replace(Std.string(config.background),"#","");
			if(background.indexOf("0x") > -1) {
				config.background = Std.parseInt(background);
			} else {
				config.background = Std.parseInt("0x" + background);
			}
		}
		config.element = htmlElement;
		config.width = width;
		config.height = height;
		lime_system_System.__applicationEntryPoint.h[projectName](config);
	}
};
lime_system_System.exit = function(code) {
};
lime_system_System.getDisplay = function(id) {
	if(id == 0) {
		var display = new lime_system_Display();
		display.id = 0;
		display.name = "Generic Display";
		display.dpi = 96 * window.devicePixelRatio;
		display.currentMode = new lime_system_DisplayMode(window.screen.width,window.screen.height,60,1);
		display.supportedModes = [display.currentMode];
		display.bounds = new lime_math_Rectangle(0,0,display.currentMode.width,display.currentMode.height);
		return display;
	}
	return null;
};
lime_system_System.getTimer = function() {
	return window.performance.now() | 0;
};
lime_system_System.load = function(library,method,args,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	if(args == null) {
		args = 0;
	}
	return lime_system_CFFI.load(library,method,args,lazy);
};
lime_system_System.openFile = function(path) {
	if(path != null) {
		window.open(path,"_blank");
	}
};
lime_system_System.openURL = function(url,target) {
	if(target == null) {
		target = "_blank";
	}
	if(url != null) {
		window.open(url,target);
	}
};
lime_system_System.__copyMissingFields = function(target,source) {
	if(source == null || target == null) {
		return;
	}
	var _g = 0;
	var _g1 = Reflect.fields(source);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(!Object.prototype.hasOwnProperty.call(target,field)) {
			target[field] = Reflect.field(source,field);
		}
	}
};
lime_system_System.__getDirectory = function(type) {
	return null;
};
lime_system_System.__parseBool = function(value) {
	return value == "true";
};
lime_system_System.__registerEntryPoint = function(projectName,entryPoint) {
	if(lime_system_System.__applicationEntryPoint == null) {
		lime_system_System.__applicationEntryPoint = new haxe_ds_StringMap();
	}
	lime_system_System.__applicationEntryPoint.h[projectName] = entryPoint;
};
lime_system_System.__runProcess = function(command,args) {
	return null;
};
lime_system_System.get_allowScreenTimeout = function() {
	return true;
};
lime_system_System.set_allowScreenTimeout = function(value) {
	return true;
};
lime_system_System.get_applicationDirectory = function() {
	if(lime_system_System.__applicationDirectory == null) {
		lime_system_System.__applicationDirectory = lime_system_System.__getDirectory(0);
	}
	return lime_system_System.__applicationDirectory;
};
lime_system_System.get_applicationStorageDirectory = function() {
	if(lime_system_System.__applicationStorageDirectory == null) {
		lime_system_System.__applicationStorageDirectory = lime_system_System.__getDirectory(1);
	}
	return lime_system_System.__applicationStorageDirectory;
};
lime_system_System.get_deviceModel = function() {
	var tmp = lime_system_System.__deviceModel == null;
	return lime_system_System.__deviceModel;
};
lime_system_System.get_deviceVendor = function() {
	var tmp = lime_system_System.__deviceVendor == null;
	return lime_system_System.__deviceVendor;
};
lime_system_System.get_desktopDirectory = function() {
	if(lime_system_System.__desktopDirectory == null) {
		lime_system_System.__desktopDirectory = lime_system_System.__getDirectory(2);
	}
	return lime_system_System.__desktopDirectory;
};
lime_system_System.get_documentsDirectory = function() {
	if(lime_system_System.__documentsDirectory == null) {
		lime_system_System.__documentsDirectory = lime_system_System.__getDirectory(3);
	}
	return lime_system_System.__documentsDirectory;
};
lime_system_System.get_endianness = function() {
	if(lime_system_System.__endianness == null) {
		var arrayBuffer = new ArrayBuffer(2);
		var elements = null;
		var array = null;
		var view = null;
		var len = null;
		var this1;
		if(elements != null) {
			this1 = new Uint8Array(elements);
		} else if(array != null) {
			this1 = new Uint8Array(array);
		} else if(view != null) {
			this1 = new Uint8Array(view);
		} else if(arrayBuffer != null) {
			if(len == null) {
				this1 = new Uint8Array(arrayBuffer,0);
			} else {
				this1 = new Uint8Array(arrayBuffer,0,len);
			}
		} else {
			this1 = null;
		}
		var uint8Array = this1;
		var elements = null;
		var array = null;
		var view = null;
		var len = null;
		var this1;
		if(elements != null) {
			this1 = new Uint16Array(elements);
		} else if(array != null) {
			this1 = new Uint16Array(array);
		} else if(view != null) {
			this1 = new Uint16Array(view);
		} else if(arrayBuffer != null) {
			if(len == null) {
				this1 = new Uint16Array(arrayBuffer,0);
			} else {
				this1 = new Uint16Array(arrayBuffer,0,len);
			}
		} else {
			this1 = null;
		}
		var uint16array = this1;
		uint8Array[0] = 170;
		uint8Array[1] = 187;
		if(uint16array[0] == 43707) {
			lime_system_System.__endianness = lime_system_Endian.BIG_ENDIAN;
		} else {
			lime_system_System.__endianness = lime_system_Endian.LITTLE_ENDIAN;
		}
	}
	return lime_system_System.__endianness;
};
lime_system_System.get_fontsDirectory = function() {
	if(lime_system_System.__fontsDirectory == null) {
		lime_system_System.__fontsDirectory = lime_system_System.__getDirectory(4);
	}
	return lime_system_System.__fontsDirectory;
};
lime_system_System.get_numDisplays = function() {
	return 1;
};
lime_system_System.get_platformLabel = function() {
	if(lime_system_System.__platformLabel == null) {
		var name = lime_system_System.get_platformName();
		var version = lime_system_System.get_platformVersion();
		if(name != null && version != null) {
			lime_system_System.__platformLabel = name + " " + version;
		} else if(name != null) {
			lime_system_System.__platformLabel = name;
		}
	}
	return lime_system_System.__platformLabel;
};
lime_system_System.get_platformName = function() {
	if(lime_system_System.__platformName == null) {
		lime_system_System.__platformName = "HTML5";
	}
	return lime_system_System.__platformName;
};
lime_system_System.get_platformVersion = function() {
	var tmp = lime_system_System.__platformVersion == null;
	return lime_system_System.__platformVersion;
};
lime_system_System.get_userDirectory = function() {
	if(lime_system_System.__userDirectory == null) {
		lime_system_System.__userDirectory = lime_system_System.__getDirectory(5);
	}
	return lime_system_System.__userDirectory;
};
var lime_system_ThreadPool = function(minThreads,maxThreads) {
	if(maxThreads == null) {
		maxThreads = 1;
	}
	if(minThreads == null) {
		minThreads = 0;
	}
	this.onRun = new lime_app__$Event_$Dynamic_$Void();
	this.onProgress = new lime_app__$Event_$Dynamic_$Void();
	this.onError = new lime_app__$Event_$Dynamic_$Void();
	this.onComplete = new lime_app__$Event_$Dynamic_$Void();
	this.doWork = new lime_app__$Event_$Dynamic_$Void();
	this.minThreads = minThreads;
	this.maxThreads = maxThreads;
	this.currentThreads = 0;
};
$hxClasses["lime.system.ThreadPool"] = lime_system_ThreadPool;
lime_system_ThreadPool.__name__ = "lime.system.ThreadPool";
lime_system_ThreadPool.prototype = {
	queue: function(state) {
		this.runWork(state);
	}
	,sendComplete: function(state) {
		this.onComplete.dispatch(state);
	}
	,sendError: function(state) {
		this.onError.dispatch(state);
	}
	,sendProgress: function(state) {
		this.onProgress.dispatch(state);
	}
	,runWork: function(state) {
		this.onRun.dispatch(state);
		this.doWork.dispatch(state);
	}
	,__class__: lime_system_ThreadPool
};
var lime_system__$ThreadPool_ThreadPoolMessageType = $hxEnums["lime.system._ThreadPool.ThreadPoolMessageType"] = { __ename__:"lime.system._ThreadPool.ThreadPoolMessageType",__constructs__:null
	,COMPLETE: {_hx_name:"COMPLETE",_hx_index:0,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
	,ERROR: {_hx_name:"ERROR",_hx_index:1,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
	,EXIT: {_hx_name:"EXIT",_hx_index:2,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
	,PROGRESS: {_hx_name:"PROGRESS",_hx_index:3,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
	,WORK: {_hx_name:"WORK",_hx_index:4,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
};
lime_system__$ThreadPool_ThreadPoolMessageType.__constructs__ = [lime_system__$ThreadPool_ThreadPoolMessageType.COMPLETE,lime_system__$ThreadPool_ThreadPoolMessageType.ERROR,lime_system__$ThreadPool_ThreadPoolMessageType.EXIT,lime_system__$ThreadPool_ThreadPoolMessageType.PROGRESS,lime_system__$ThreadPool_ThreadPoolMessageType.WORK];
var lime_system__$ThreadPool_ThreadPoolMessage = function(type,state) {
	this.type = type;
	this.state = state;
};
$hxClasses["lime.system._ThreadPool.ThreadPoolMessage"] = lime_system__$ThreadPool_ThreadPoolMessage;
lime_system__$ThreadPool_ThreadPoolMessage.__name__ = "lime.system._ThreadPool.ThreadPoolMessage";
lime_system__$ThreadPool_ThreadPoolMessage.prototype = {
	__class__: lime_system__$ThreadPool_ThreadPoolMessage
};
var lime_text_Font = function(name) {
	if(name != null) {
		this.name = name;
	}
	if(!this.__init) {
		if(this.ascender == undefined) {
			this.ascender = 0;
		}
		if(this.descender == undefined) {
			this.descender = 0;
		}
		if(this.height == undefined) {
			this.height = 0;
		}
		if(this.numGlyphs == undefined) {
			this.numGlyphs = 0;
		}
		if(this.underlinePosition == undefined) {
			this.underlinePosition = 0;
		}
		if(this.underlineThickness == undefined) {
			this.underlineThickness = 0;
		}
		if(this.unitsPerEM == undefined) {
			this.unitsPerEM = 0;
		}
		if(this.__fontID != null) {
			if(lime_utils_Assets.isLocal(this.__fontID)) {
				this.__fromBytes(lime_utils_Assets.getBytes(this.__fontID));
			}
		} else if(this.__fontPath != null) {
			this.__fromFile(this.__fontPath);
		}
	}
};
$hxClasses["lime.text.Font"] = lime_text_Font;
lime_text_Font.__name__ = "lime.text.Font";
lime_text_Font.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var font = new lime_text_Font();
	font.__fromBytes(bytes);
	return font;
};
lime_text_Font.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var font = new lime_text_Font();
	font.__fromFile(path);
	return font;
};
lime_text_Font.loadFromBytes = function(bytes) {
	return lime_app_Future.withValue(lime_text_Font.fromBytes(bytes));
};
lime_text_Font.loadFromFile = function(path) {
	var request = new lime_net__$HTTPRequest_$lime_$text_$Font();
	return request.load(path).then(function(font) {
		if(font != null) {
			return lime_app_Future.withValue(font);
		} else {
			return lime_app_Future.withError("");
		}
	});
};
lime_text_Font.loadFromName = function(path) {
	var font = new lime_text_Font();
	return font.__loadFromName(path);
};
lime_text_Font.__measureFontNode = function(fontFamily) {
	var node = window.document.createElement("span");
	node.setAttribute("aria-hidden","true");
	var text = window.document.createTextNode("BESbswy");
	node.appendChild(text);
	var style = node.style;
	style.display = "block";
	style.position = "absolute";
	style.top = "-9999px";
	style.left = "-9999px";
	style.fontSize = "300px";
	style.width = "auto";
	style.height = "auto";
	style.lineHeight = "normal";
	style.margin = "0";
	style.padding = "0";
	style.fontVariant = "normal";
	style.whiteSpace = "nowrap";
	style.fontFamily = fontFamily;
	window.document.body.appendChild(node);
	return node;
};
lime_text_Font.prototype = {
	decompose: function() {
		return null;
	}
	,getGlyph: function(character) {
		return -1;
	}
	,getGlyphs: function(characters) {
		if(characters == null) {
			characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^`'\"/\\&*()[]{}<>|:;_-+=?,. ";
		}
		return null;
	}
	,getGlyphMetrics: function(glyph) {
		return null;
	}
	,renderGlyph: function(glyph,fontSize) {
		return null;
	}
	,renderGlyphs: function(glyphs,fontSize) {
		return null;
	}
	,__copyFrom: function(other) {
		if(other != null) {
			this.ascender = other.ascender;
			this.descender = other.descender;
			this.height = other.height;
			this.name = other.name;
			this.numGlyphs = other.numGlyphs;
			this.src = other.src;
			this.underlinePosition = other.underlinePosition;
			this.underlineThickness = other.underlineThickness;
			this.unitsPerEM = other.unitsPerEM;
			this.__fontID = other.__fontID;
			this.__fontPath = other.__fontPath;
			this.__init = true;
		}
	}
	,__fromBytes: function(bytes) {
		this.__fontPath = null;
	}
	,__fromFile: function(path) {
		this.__fontPath = path;
	}
	,__initializeSource: function() {
		this.__init = true;
	}
	,__loadFromName: function(name) {
		var _gthis = this;
		var promise = new lime_app_Promise();
		this.name = name;
		var userAgent = $global.navigator.userAgent.toLowerCase();
		var isSafari = userAgent.indexOf(" safari/") >= 0 && userAgent.indexOf(" chrome/") < 0;
		var isUIWebView = new EReg("(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)","i").match(userAgent);
		if(!isSafari && !isUIWebView && (window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load)))) {
			window.document.fonts.load("1em '" + name + "'").then(function(_) {
				promise.complete(_gthis);
			},function(_) {
				lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 513, className : "lime.text.Font", methodName : "__loadFromName"});
				promise.complete(_gthis);
			});
		} else {
			var node1 = lime_text_Font.__measureFontNode("'" + name + "', sans-serif");
			var node2 = lime_text_Font.__measureFontNode("'" + name + "', serif");
			var width1 = node1.offsetWidth;
			var width2 = node2.offsetWidth;
			var interval = -1;
			var timeout = 3000;
			var intervalLength = 50;
			var intervalCount = 0;
			var loaded;
			var timeExpired;
			var checkFont = function() {
				intervalCount += 1;
				loaded = node1.offsetWidth != width1 || node2.offsetWidth != width2;
				timeExpired = intervalCount * intervalLength >= timeout;
				if(loaded || timeExpired) {
					window.clearInterval(interval);
					node1.parentNode.removeChild(node1);
					node2.parentNode.removeChild(node2);
					node1 = null;
					node2 = null;
					if(timeExpired) {
						lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 548, className : "lime.text.Font", methodName : "__loadFromName"});
					}
					promise.complete(_gthis);
				}
			};
			interval = window.setInterval(checkFont,intervalLength);
		}
		return promise.future;
	}
	,__setSize: function(size) {
	}
	,__class__: lime_text_Font
};
var lime_text_Glyph = {};
lime_text_Glyph._new = function(i) {
	var this1 = i;
	return this1;
};
var lime_text_GlyphMetrics = function() {
};
$hxClasses["lime.text.GlyphMetrics"] = lime_text_GlyphMetrics;
lime_text_GlyphMetrics.__name__ = "lime.text.GlyphMetrics";
lime_text_GlyphMetrics.prototype = {
	__class__: lime_text_GlyphMetrics
};
var lime_ui_FileDialog = function() {
	this.onSelectMultiple = new lime_app__$Event_$Array_$String_$_$Void();
	this.onSelect = new lime_app__$Event_$String_$Void();
	this.onSave = new lime_app__$Event_$String_$Void();
	this.onOpen = new lime_app__$Event_$lime_$utils_$Resource_$Void();
	this.onCancel = new lime_app__$Event_$Void_$Void();
};
$hxClasses["lime.ui.FileDialog"] = lime_ui_FileDialog;
lime_ui_FileDialog.__name__ = "lime.ui.FileDialog";
lime_ui_FileDialog.prototype = {
	browse: function(type,filter,defaultPath,title) {
		if(type == null) {
			type = lime_ui_FileDialogType.OPEN;
		}
		this.onCancel.dispatch();
		return false;
	}
	,open: function(filter,defaultPath,title) {
		this.onCancel.dispatch();
		return false;
	}
	,save: function(data,filter,defaultPath,title,type) {
		if(type == null) {
			type = "application/octet-stream";
		}
		if(data == null) {
			this.onCancel.dispatch();
			return false;
		}
		var defaultExtension = "";
		if(lime_graphics_Image.__isPNG(data)) {
			type = "image/png";
			defaultExtension = ".png";
		} else if(lime_graphics_Image.__isJPG(data)) {
			type = "image/jpeg";
			defaultExtension = ".jpg";
		} else if(lime_graphics_Image.__isGIF(data)) {
			type = "image/gif";
			defaultExtension = ".gif";
		} else if(lime_graphics_Image.__isWebP(data)) {
			type = "image/webp";
			defaultExtension = ".webp";
		}
		var path = defaultPath != null ? haxe_io_Path.withoutDirectory(defaultPath) : "download" + defaultExtension;
		var buffer = data.b.bufferValue;
		buffer = buffer.slice(0,data.length);
		window.saveAs(new Blob([buffer],{ type : type}),path,true);
		this.onSave.dispatch(path);
		return true;
	}
	,__class__: lime_ui_FileDialog
};
var lime_ui_FileDialogType = $hxEnums["lime.ui.FileDialogType"] = { __ename__:"lime.ui.FileDialogType",__constructs__:null
	,OPEN: {_hx_name:"OPEN",_hx_index:0,__enum__:"lime.ui.FileDialogType",toString:$estr}
	,OPEN_MULTIPLE: {_hx_name:"OPEN_MULTIPLE",_hx_index:1,__enum__:"lime.ui.FileDialogType",toString:$estr}
	,SAVE: {_hx_name:"SAVE",_hx_index:2,__enum__:"lime.ui.FileDialogType",toString:$estr}
	,OPEN_DIRECTORY: {_hx_name:"OPEN_DIRECTORY",_hx_index:3,__enum__:"lime.ui.FileDialogType",toString:$estr}
};
lime_ui_FileDialogType.__constructs__ = [lime_ui_FileDialogType.OPEN,lime_ui_FileDialogType.OPEN_MULTIPLE,lime_ui_FileDialogType.SAVE,lime_ui_FileDialogType.OPEN_DIRECTORY];
var lime_ui_Gamepad = function(id) {
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onButtonDown = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onAxisMove = new lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Gamepad"] = lime_ui_Gamepad;
lime_ui_Gamepad.__name__ = "lime.ui.Gamepad";
lime_ui_Gamepad.addMappings = function(mappings) {
};
lime_ui_Gamepad.__connect = function(id) {
	if(!lime_ui_Gamepad.devices.h.hasOwnProperty(id)) {
		var gamepad = new lime_ui_Gamepad(id);
		lime_ui_Gamepad.devices.h[id] = gamepad;
		lime_ui_Gamepad.onConnect.dispatch(gamepad);
	}
};
lime_ui_Gamepad.__disconnect = function(id) {
	var gamepad = lime_ui_Gamepad.devices.h[id];
	if(gamepad != null) {
		gamepad.connected = false;
	}
	lime_ui_Gamepad.devices.remove(id);
	if(gamepad != null) {
		gamepad.onDisconnect.dispatch();
	}
};
lime_ui_Gamepad.prototype = {
	get_guid: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,get_name: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,__class__: lime_ui_Gamepad
};
var lime_ui_GamepadAxis = {};
lime_ui_GamepadAxis.toString = function(this1) {
	switch(this1) {
	case 0:
		return "LEFT_X";
	case 1:
		return "LEFT_Y";
	case 2:
		return "RIGHT_X";
	case 3:
		return "RIGHT_Y";
	case 4:
		return "TRIGGER_LEFT";
	case 5:
		return "TRIGGER_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
var lime_ui_GamepadButton = {};
lime_ui_GamepadButton.toString = function(this1) {
	switch(this1) {
	case 0:
		return "A";
	case 1:
		return "B";
	case 2:
		return "X";
	case 3:
		return "Y";
	case 4:
		return "BACK";
	case 5:
		return "GUIDE";
	case 6:
		return "START";
	case 7:
		return "LEFT_STICK";
	case 8:
		return "RIGHT_STICK";
	case 9:
		return "LEFT_SHOULDER";
	case 10:
		return "RIGHT_SHOULDER";
	case 11:
		return "DPAD_UP";
	case 12:
		return "DPAD_DOWN";
	case 13:
		return "DPAD_LEFT";
	case 14:
		return "DPAD_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
var lime_ui_Joystick = function(id) {
	this.onTrackballMove = new lime_app__$Event_$Int_$Float_$Float_$Void();
	this.onHatMove = new lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void();
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$Int_$Void();
	this.onButtonDown = new lime_app__$Event_$Int_$Void();
	this.onAxisMove = new lime_app__$Event_$Int_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Joystick"] = lime_ui_Joystick;
lime_ui_Joystick.__name__ = "lime.ui.Joystick";
lime_ui_Joystick.__connect = function(id) {
	if(!lime_ui_Joystick.devices.h.hasOwnProperty(id)) {
		var joystick = new lime_ui_Joystick(id);
		lime_ui_Joystick.devices.h[id] = joystick;
		lime_ui_Joystick.onConnect.dispatch(joystick);
	}
};
lime_ui_Joystick.__disconnect = function(id) {
	var joystick = lime_ui_Joystick.devices.h[id];
	if(joystick != null) {
		joystick.connected = false;
	}
	lime_ui_Joystick.devices.remove(id);
	if(joystick != null) {
		joystick.onDisconnect.dispatch();
	}
};
lime_ui_Joystick.__getDeviceData = function() {
	if(navigator.getGamepads) {
		return navigator.getGamepads();
	} else if(navigator.webkitGetGamepads) {
		return navigator.webkitGetGamepads();
	} else {
		return null;
	}
};
lime_ui_Joystick.prototype = {
	get_guid: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,get_name: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,get_numAxes: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].axes.length;
	}
	,get_numButtons: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].buttons.length;
	}
	,get_numHats: function() {
		return 0;
	}
	,get_numTrackballs: function() {
		return 0;
	}
	,__class__: lime_ui_Joystick
};
var lime_ui_JoystickHatPosition = {};
lime_ui_JoystickHatPosition._new = function(value) {
	var this1 = value;
	return this1;
};
lime_ui_JoystickHatPosition.get_center = function(this1) {
	return this1 == 0;
};
lime_ui_JoystickHatPosition.set_center = function(this1,value) {
	if(value) {
		this1 = 0;
	}
	return value;
};
lime_ui_JoystickHatPosition.get_down = function(this1) {
	return (this1 & 4) > 0;
};
lime_ui_JoystickHatPosition.set_down = function(this1,value) {
	if(value) {
		this1 |= 4;
	} else {
		this1 &= 268435455 - 4;
	}
	return value;
};
lime_ui_JoystickHatPosition.get_left = function(this1) {
	return (this1 & 8) > 0;
};
lime_ui_JoystickHatPosition.set_left = function(this1,value) {
	if(value) {
		this1 |= 8;
	} else {
		this1 &= 268435455 - 8;
	}
	return value;
};
lime_ui_JoystickHatPosition.get_right = function(this1) {
	return (this1 & 2) > 0;
};
lime_ui_JoystickHatPosition.set_right = function(this1,value) {
	if(value) {
		this1 |= 2;
	} else {
		this1 &= 268435455 - 2;
	}
	return value;
};
lime_ui_JoystickHatPosition.get_up = function(this1) {
	return (this1 & 1) > 0;
};
lime_ui_JoystickHatPosition.set_up = function(this1,value) {
	if(value) {
		this1 |= 1;
	} else {
		this1 &= 268435455 - 1;
	}
	return value;
};
var lime_ui_KeyCode = {};
lime_ui_KeyCode.fromScanCode = function(scanCode) {
	return 0;
};
lime_ui_KeyCode.toScanCode = function(keyCode) {
	return 0;
};
lime_ui_KeyCode.gt = function(a,b) {
	return a > b;
};
lime_ui_KeyCode.gte = function(a,b) {
	return a >= b;
};
lime_ui_KeyCode.lt = function(a,b) {
	return a < b;
};
lime_ui_KeyCode.lte = function(a,b) {
	return a <= b;
};
lime_ui_KeyCode.plus = function(a,b) {
	return a + b;
};
var lime_ui_KeyModifier = {};
lime_ui_KeyModifier.get_altKey = function(this1) {
	if((this1 & 256) <= 0) {
		return (this1 & 512) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_altKey = function(this1,value) {
	if(value) {
		this1 |= 768;
	} else {
		this1 &= 268435455 - 768;
	}
	return value;
};
lime_ui_KeyModifier.get_capsLock = function(this1) {
	if((this1 & 8192) <= 0) {
		return (this1 & 8192) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_capsLock = function(this1,value) {
	if(value) {
		this1 |= 8192;
	} else {
		this1 &= 268435455 - 8192;
	}
	return value;
};
lime_ui_KeyModifier.get_ctrlKey = function(this1) {
	if((this1 & 64) <= 0) {
		return (this1 & 128) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_ctrlKey = function(this1,value) {
	if(value) {
		this1 |= 192;
	} else {
		this1 &= 268435455 - 192;
	}
	return value;
};
lime_ui_KeyModifier.get_metaKey = function(this1) {
	if((this1 & 1024) <= 0) {
		return (this1 & 2048) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_metaKey = function(this1,value) {
	if(value) {
		this1 |= 3072;
	} else {
		this1 &= 268435455 - 3072;
	}
	return value;
};
lime_ui_KeyModifier.get_numLock = function(this1) {
	if((this1 & 4096) <= 0) {
		return (this1 & 4096) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_numLock = function(this1,value) {
	if(value) {
		this1 |= 4096;
	} else {
		this1 &= 268435455 - 4096;
	}
	return value;
};
lime_ui_KeyModifier.get_shiftKey = function(this1) {
	if((this1 & 1) <= 0) {
		return (this1 & 2) > 0;
	} else {
		return true;
	}
};
lime_ui_KeyModifier.set_shiftKey = function(this1,value) {
	if(value) {
		this1 |= 3;
	} else {
		this1 &= 268435455 - 3;
	}
	return value;
};
var lime_ui_MouseCursor = $hxEnums["lime.ui.MouseCursor"] = { __ename__:"lime.ui.MouseCursor",__constructs__:null
	,ARROW: {_hx_name:"ARROW",_hx_index:0,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,CROSSHAIR: {_hx_name:"CROSSHAIR",_hx_index:1,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,DEFAULT: {_hx_name:"DEFAULT",_hx_index:2,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,MOVE: {_hx_name:"MOVE",_hx_index:3,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,POINTER: {_hx_name:"POINTER",_hx_index:4,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NESW: {_hx_name:"RESIZE_NESW",_hx_index:5,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NS: {_hx_name:"RESIZE_NS",_hx_index:6,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NWSE: {_hx_name:"RESIZE_NWSE",_hx_index:7,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_WE: {_hx_name:"RESIZE_WE",_hx_index:8,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,TEXT: {_hx_name:"TEXT",_hx_index:9,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,WAIT: {_hx_name:"WAIT",_hx_index:10,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,WAIT_ARROW: {_hx_name:"WAIT_ARROW",_hx_index:11,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,CUSTOM: {_hx_name:"CUSTOM",_hx_index:12,__enum__:"lime.ui.MouseCursor",toString:$estr}
};
lime_ui_MouseCursor.__constructs__ = [lime_ui_MouseCursor.ARROW,lime_ui_MouseCursor.CROSSHAIR,lime_ui_MouseCursor.DEFAULT,lime_ui_MouseCursor.MOVE,lime_ui_MouseCursor.POINTER,lime_ui_MouseCursor.RESIZE_NESW,lime_ui_MouseCursor.RESIZE_NS,lime_ui_MouseCursor.RESIZE_NWSE,lime_ui_MouseCursor.RESIZE_WE,lime_ui_MouseCursor.TEXT,lime_ui_MouseCursor.WAIT,lime_ui_MouseCursor.WAIT_ARROW,lime_ui_MouseCursor.CUSTOM];
var lime_ui_MouseWheelMode = $hxEnums["lime.ui.MouseWheelMode"] = { __ename__:"lime.ui.MouseWheelMode",__constructs__:null
	,PIXELS: {_hx_name:"PIXELS",_hx_index:0,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,LINES: {_hx_name:"LINES",_hx_index:1,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,PAGES: {_hx_name:"PAGES",_hx_index:2,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,UNKNOWN: {_hx_name:"UNKNOWN",_hx_index:3,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
};
lime_ui_MouseWheelMode.__constructs__ = [lime_ui_MouseWheelMode.PIXELS,lime_ui_MouseWheelMode.LINES,lime_ui_MouseWheelMode.PAGES,lime_ui_MouseWheelMode.UNKNOWN];
var lime_ui_ScanCode = {};
lime_ui_ScanCode.fromKeyCode = function(keyCode) {
	return lime_ui_KeyCode.toScanCode(keyCode);
};
lime_ui_ScanCode.toKeyCode = function(scanCode) {
	return lime_ui_KeyCode.fromScanCode(scanCode);
};
lime_ui_ScanCode.gt = function(a,b) {
	return a > b;
};
lime_ui_ScanCode.gte = function(a,b) {
	return a >= b;
};
lime_ui_ScanCode.lt = function(a,b) {
	return a < b;
};
lime_ui_ScanCode.lte = function(a,b) {
	return a <= b;
};
lime_ui_ScanCode.plus = function(a,b) {
	return a + b;
};
var lime_ui_Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
$hxClasses["lime.ui.Touch"] = lime_ui_Touch;
lime_ui_Touch.__name__ = "lime.ui.Touch";
lime_ui_Touch.prototype = {
	__class__: lime_ui_Touch
};
var lime_ui_Window = function(application,attributes) {
	this.onTextInput = new lime_app__$Event_$String_$Void();
	this.onTextEdit = new lime_app__$Event_$String_$Int_$Int_$Void();
	this.onRestore = new lime_app__$Event_$Void_$Void();
	this.onResize = new lime_app__$Event_$Int_$Int_$Void();
	this.onRenderContextRestored = new lime_app__$Event_$lime_$graphics_$RenderContext_$Void();
	this.onRenderContextLost = new lime_app__$Event_$Void_$Void();
	this.onRender = new lime_app__$Event_$lime_$graphics_$RenderContext_$Void();
	this.onMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseWheel = new lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void();
	this.onMouseUp = new lime_app__$Event_$Float_$Float_$Int_$Void();
	this.onMouseMoveRelative = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseDown = new lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void();
	this.onMinimize = new lime_app__$Event_$Void_$Void();
	this.onMaximize = new lime_app__$Event_$Void_$Void();
	this.onLeave = new lime_app__$Event_$Void_$Void();
	this.onKeyUp = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onKeyDown = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onFullscreen = new lime_app__$Event_$Void_$Void();
	this.onFocusOut = new lime_app__$Event_$Void_$Void();
	this.onFocusIn = new lime_app__$Event_$Void_$Void();
	this.onExpose = new lime_app__$Event_$Void_$Void();
	this.onEnter = new lime_app__$Event_$Void_$Void();
	this.onDropFile = new lime_app__$Event_$String_$Void();
	this.onDeactivate = new lime_app__$Event_$Void_$Void();
	this.onClose = new lime_app__$Event_$Void_$Void();
	this.onActivate = new lime_app__$Event_$Void_$Void();
	this.application = application;
	this.__attributes = attributes != null ? attributes : { };
	if(Object.prototype.hasOwnProperty.call(this.__attributes,"parameters")) {
		this.parameters = this.__attributes.parameters;
	}
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__scale = 1;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	this.__backend = new lime__$internal_backend_html5_HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime_ui_Window;
lime_ui_Window.__name__ = "lime.ui.Window";
lime_ui_Window.prototype = {
	alert: function(message,title) {
		this.__backend.alert(message,title);
	}
	,close: function() {
		this.__backend.close();
	}
	,focus: function() {
		this.__backend.focus();
	}
	,move: function(x,y) {
		this.__backend.move(x,y);
		this.__x = x;
		this.__y = y;
	}
	,readPixels: function(rect) {
		return this.__backend.readPixels(rect);
	}
	,resize: function(width,height) {
		this.__backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,setIcon: function(image) {
		if(image == null) {
			return;
		}
		this.__backend.setIcon(image);
	}
	,toString: function() {
		return "[object Window]";
	}
	,warpMouse: function(x,y) {
		this.__backend.warpMouse(x,y);
	}
	,get_cursor: function() {
		return this.__backend.getCursor();
	}
	,set_cursor: function(value) {
		return this.__backend.setCursor(value);
	}
	,get_display: function() {
		return this.__backend.getDisplay();
	}
	,get_displayMode: function() {
		return this.__backend.getDisplayMode();
	}
	,set_displayMode: function(value) {
		return this.__backend.setDisplayMode(value);
	}
	,get_borderless: function() {
		return this.__borderless;
	}
	,set_borderless: function(value) {
		return this.__borderless = this.__backend.setBorderless(value);
	}
	,get_frameRate: function() {
		return this.__backend.getFrameRate();
	}
	,set_frameRate: function(value) {
		return this.__backend.setFrameRate(value);
	}
	,get_fullscreen: function() {
		return this.__fullscreen;
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.__backend.setFullscreen(value);
	}
	,get_height: function() {
		return this.__height;
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,get_hidden: function() {
		return this.__hidden;
	}
	,get_maximized: function() {
		return this.__maximized;
	}
	,set_maximized: function(value) {
		this.__minimized = false;
		return this.__maximized = this.__backend.setMaximized(value);
	}
	,get_minimized: function() {
		return this.__minimized;
	}
	,set_minimized: function(value) {
		this.__maximized = false;
		return this.__minimized = this.__backend.setMinimized(value);
	}
	,get_mouseLock: function() {
		return this.__backend.getMouseLock();
	}
	,set_mouseLock: function(value) {
		this.__backend.setMouseLock(value);
		return value;
	}
	,get_resizable: function() {
		return this.__resizable;
	}
	,set_resizable: function(value) {
		this.__resizable = this.__backend.setResizable(value);
		return this.__resizable;
	}
	,get_scale: function() {
		return this.__scale;
	}
	,get_textInputEnabled: function() {
		return this.__backend.getTextInputEnabled();
	}
	,set_textInputEnabled: function(value) {
		return this.__backend.setTextInputEnabled(value);
	}
	,setTextInputRect: function(value) {
		return this.__backend.setTextInputRect(value);
	}
	,get_title: function() {
		return this.__title;
	}
	,set_title: function(value) {
		return this.__title = this.__backend.setTitle(value);
	}
	,get_width: function() {
		return this.__width;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		this.move(value,this.__y);
		return this.__x;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		this.move(this.__x,value);
		return this.__y;
	}
	,__class__: lime_ui_Window
};
var lime_utils_TAError = $hxEnums["lime.utils.TAError"] = { __ename__:"lime.utils.TAError",__constructs__:null
	,RangeError: {_hx_name:"RangeError",_hx_index:0,__enum__:"lime.utils.TAError",toString:$estr}
};
lime_utils_TAError.__constructs__ = [lime_utils_TAError.RangeError];
var lime_utils_AssetBundle = function() {
	this.data = new haxe_ds_StringMap();
	this.paths = [];
};
$hxClasses["lime.utils.AssetBundle"] = lime_utils_AssetBundle;
lime_utils_AssetBundle.__name__ = "lime.utils.AssetBundle";
lime_utils_AssetBundle.fromBytes = function(bytes) {
	var input = new haxe_io_BytesInput(bytes);
	return lime_utils_AssetBundle.__extractBundle(input);
};
lime_utils_AssetBundle.fromFile = function(path) {
	return null;
};
lime_utils_AssetBundle.loadFromBytes = function(bytes) {
	return lime_app_Future.withValue(lime_utils_AssetBundle.fromBytes(bytes));
};
lime_utils_AssetBundle.loadFromFile = function(path) {
	return lime_utils_Bytes.loadFromFile(path).then(lime_utils_AssetBundle.loadFromBytes);
};
lime_utils_AssetBundle.__extractBundle = function(input) {
	var entries = haxe_zip_Reader.readZip(input);
	var bundle = new lime_utils_AssetBundle();
	var _g_head = entries.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var entry = val;
		if(entry.compressed) {
			var bytes = entry.data;
			var this1 = bundle.data;
			var key = entry.fileName;
			var value = lime_utils_Bytes.decompress(bytes,lime_utils_CompressionAlgorithm.DEFLATE);
			this1.h[key] = value;
		} else {
			bundle.data.h[entry.fileName] = entry.data;
		}
		bundle.paths.push(entry.fileName);
	}
	return bundle;
};
lime_utils_AssetBundle.prototype = {
	__class__: lime_utils_AssetBundle
};
var lime_utils_AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.image = new haxe_ds_StringMap();
	this.version = 192218;
};
$hxClasses["lime.utils.AssetCache"] = lime_utils_AssetCache;
lime_utils_AssetCache.__name__ = "lime.utils.AssetCache";
lime_utils_AssetCache.prototype = {
	exists: function(id,type) {
		if(type == "IMAGE" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.image.h,id)) {
				return true;
			}
		}
		if(type == "FONT" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.font.h,id)) {
				return true;
			}
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.audio.h,id)) {
				return true;
			}
		}
		return false;
	}
	,set: function(id,type,asset) {
		switch(type) {
		case "FONT":
			this.font.h[id] = asset;
			break;
		case "IMAGE":
			if(!((asset) instanceof lime_graphics_Image)) {
				throw haxe_Exception.thrown("Cannot cache non-Image asset: " + Std.string(asset) + " as Image");
			}
			this.image.h[id] = asset;
			break;
		case "MUSIC":case "SOUND":
			if(!((asset) instanceof lime_media_AudioBuffer)) {
				throw haxe_Exception.thrown("Cannot cache non-AudioBuffer asset: " + Std.string(asset) + " as AudioBuffer");
			}
			this.audio.h[id] = asset;
			break;
		default:
			throw haxe_Exception.thrown(type + " assets are not cachable");
		}
	}
	,clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.image = new haxe_ds_StringMap();
		} else {
			var h = this.audio.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.audio;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
			var h = this.font.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.font;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
			var h = this.image.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.image;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
		}
	}
	,__class__: lime_utils_AssetCache
};
var lime_utils_AssetLibrary = function() {
	this.types = new haxe_ds_StringMap();
	this.sizes = new haxe_ds_StringMap();
	this.preload = new haxe_ds_StringMap();
	this.paths = new haxe_ds_StringMap();
	this.pathGroups = new haxe_ds_StringMap();
	this.classTypes = new haxe_ds_StringMap();
	this.cachedText = new haxe_ds_StringMap();
	this.cachedImages = new haxe_ds_StringMap();
	this.cachedFonts = new haxe_ds_StringMap();
	this.cachedBytes = new haxe_ds_StringMap();
	this.cachedAudioBuffers = new haxe_ds_StringMap();
	this.onChange = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
};
$hxClasses["lime.utils.AssetLibrary"] = lime_utils_AssetLibrary;
lime_utils_AssetLibrary.__name__ = "lime.utils.AssetLibrary";
lime_utils_AssetLibrary.fromBytes = function(bytes,rootPath) {
	return lime_utils_AssetLibrary.fromManifest(lime_utils_AssetManifest.fromBytes(bytes,rootPath));
};
lime_utils_AssetLibrary.fromFile = function(path,rootPath) {
	return lime_utils_AssetLibrary.fromManifest(lime_utils_AssetManifest.fromFile(path,rootPath));
};
lime_utils_AssetLibrary.fromBundle = function(bundle) {
	if(Object.prototype.hasOwnProperty.call(bundle.data.h,"library.json")) {
		var manifest = lime_utils_AssetManifest.fromBytes(bundle.data.h["library.json"]);
		if(manifest != null) {
			var library = null;
			if(manifest.libraryType == null) {
				library = new lime_utils_AssetLibrary();
			} else {
				var name = manifest.libraryType;
				var libraryClass = $hxClasses[name];
				if(libraryClass != null) {
					library = Type.createInstance(libraryClass,manifest.libraryArgs);
				} else {
					lime_utils_Log.warn("Could not find library type: " + manifest.libraryType,{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 122, className : "lime.utils.AssetLibrary", methodName : "fromBundle"});
					return null;
				}
			}
			library.__fromBundle(bundle,manifest);
			return library;
		}
	} else {
		var library = new lime_utils_AssetLibrary();
		library.__fromBundle(bundle);
		return library;
	}
	return null;
};
lime_utils_AssetLibrary.fromManifest = function(manifest) {
	if(manifest == null) {
		return null;
	}
	var library = null;
	if(manifest.libraryType == null) {
		library = new lime_utils_AssetLibrary();
	} else {
		var name = manifest.libraryType;
		var libraryClass = $hxClasses[name];
		if(libraryClass != null) {
			library = Type.createInstance(libraryClass,manifest.libraryArgs);
		} else {
			lime_utils_Log.warn("Could not find library type: " + manifest.libraryType,{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 160, className : "lime.utils.AssetLibrary", methodName : "fromManifest"});
			return null;
		}
	}
	library.__fromManifest(manifest);
	return library;
};
lime_utils_AssetLibrary.loadFromBytes = function(bytes,rootPath) {
	return lime_utils_AssetManifest.loadFromBytes(bytes,rootPath).then(function(manifest) {
		return lime_utils_AssetLibrary.loadFromManifest(manifest);
	});
};
lime_utils_AssetLibrary.loadFromFile = function(path,rootPath) {
	return lime_utils_AssetManifest.loadFromFile(path,rootPath).then(function(manifest) {
		return lime_utils_AssetLibrary.loadFromManifest(manifest);
	});
};
lime_utils_AssetLibrary.loadFromManifest = function(manifest) {
	var library = lime_utils_AssetLibrary.fromManifest(manifest);
	if(library != null) {
		return library.load();
	} else {
		return lime_app_Future.withError("Could not load asset manifest");
	}
};
lime_utils_AssetLibrary.prototype = {
	exists: function(id,type) {
		var requestedType = type != null ? js_Boot.__cast(type , String) : null;
		var assetType = this.types.h[id];
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) {
				return true;
			}
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") {
				return true;
			}
		}
		return false;
	}
	,getAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.getBytes(id);
		case "FONT":
			return this.getFont(id);
		case "IMAGE":
			return this.getImage(id);
		case "MUSIC":case "SOUND":
			return this.getAudioBuffer(id);
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to get template: " + id);
		case "TEXT":
			return this.getText(id);
		default:
			throw haxe_Exception.thrown("Unknown asset type: " + type);
		}
	}
	,getAudioBuffer: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id)) {
			return this.cachedAudioBuffers.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_media_AudioBuffer.fromBytes(js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes));
		} else {
			return lime_media_AudioBuffer.fromFile(this.paths.h[id]);
		}
	}
	,getBytes: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return this.cachedBytes.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			var bytes = lime_utils_Bytes.ofString(this.cachedText.h[id]);
			this.cachedBytes.h[id] = bytes;
			return bytes;
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes);
		} else {
			return lime_utils_Bytes.fromFile(this.paths.h[id]);
		}
	}
	,getFont: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id)) {
			return this.cachedFonts.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , lime_text_Font);
		} else {
			return lime_text_Font.fromFile(this.paths.h[id]);
		}
	}
	,getImage: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedImages.h,id)) {
			return this.cachedImages.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , lime_graphics_Image);
		} else {
			return lime_graphics_Image.fromFile(this.paths.h[id]);
		}
	}
	,getPath: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.paths.h,id)) {
			return this.paths.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.pathGroups.h,id)) {
			return this.pathGroups.h[id][0];
		} else {
			return null;
		}
	}
	,getText: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			return this.cachedText.h[id];
		} else {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return null;
			} else {
				return bytes.getString(0,bytes.length);
			}
		}
	}
	,isLocal: function(id,type) {
		if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return true;
		}
		var _g = js_Boot.__cast(type , String);
		if(_g == null) {
			if(!(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id) || Object.prototype.hasOwnProperty.call(this.cachedText.h,id) || Object.prototype.hasOwnProperty.call(this.cachedImages.h,id) || Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id))) {
				return Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id);
			} else {
				return true;
			}
		} else {
			switch(_g) {
			case "FONT":
				return Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id);
			case "IMAGE":
				return Object.prototype.hasOwnProperty.call(this.cachedImages.h,id);
			case "MUSIC":case "SOUND":
				return Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id);
			default:
				if(!Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
					return Object.prototype.hasOwnProperty.call(this.cachedText.h,id);
				} else {
					return true;
				}
			}
		}
	}
	,list: function(type) {
		var requestedType = type != null ? js_Boot.__cast(type , String) : null;
		var items = [];
		var h = this.types.h;
		var id_h = h;
		var id_keys = Object.keys(h);
		var id_length = id_keys.length;
		var id_current = 0;
		while(id_current < id_length) {
			var id = id_keys[id_current++];
			if(requestedType == null || this.exists(id,type)) {
				items.push(id);
			}
		}
		return items;
	}
	,loadAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.loadBytes(id);
		case "FONT":
			return this.loadFont(id);
		case "IMAGE":
			return this.loadImage(id);
		case "MUSIC":case "SOUND":
			return this.loadAudioBuffer(id);
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to load template: " + id);
		case "TEXT":
			return this.loadText(id);
		default:
			throw haxe_Exception.thrown("Unknown asset type: " + type);
		}
	}
	,load: function() {
		if(this.loaded) {
			return lime_app_Future.withValue(this);
		}
		if(this.promise == null) {
			this.promise = new lime_app_Promise();
			this.bytesLoadedCache = new haxe_ds_StringMap();
			this.assetsLoaded = 0;
			this.assetsTotal = 1;
			var h = this.preload.h;
			var id_h = h;
			var id_keys = Object.keys(h);
			var id_length = id_keys.length;
			var id_current = 0;
			while(id_current < id_length) {
				var id = id_keys[id_current++];
				if(!this.preload.h[id]) {
					continue;
				}
				lime_utils_Log.verbose("Preloading asset: " + id + " [" + this.types.h[id] + "]",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 408, className : "lime.utils.AssetLibrary", methodName : "load"});
				var _g = this.types.h[id];
				if(_g != null) {
					switch(_g) {
					case "BINARY":
						this.assetsTotal++;
						var future = this.loadBytes(id);
						future.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future.onComplete((function(id,_g) {
							return function(bytes) {
								_g[0](id[0],bytes);
							};
						})([id],[$bind(this,this.loadBytes_onComplete)]));
						break;
					case "FONT":
						this.assetsTotal++;
						var future1 = this.loadFont(id);
						future1.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future1.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future1.onComplete((function(id,_g) {
							return function(font) {
								_g[0](id[0],font);
							};
						})([id],[$bind(this,this.loadFont_onComplete)]));
						break;
					case "IMAGE":
						this.assetsTotal++;
						var future2 = this.loadImage(id);
						future2.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future2.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future2.onComplete((function(id,_g) {
							return function(image) {
								_g[0](id[0],image);
							};
						})([id],[$bind(this,this.loadImage_onComplete)]));
						break;
					case "MUSIC":case "SOUND":
						this.assetsTotal++;
						var future3 = this.loadAudioBuffer(id);
						future3.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future3.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.loadAudioBuffer_onError)]));
						future3.onComplete((function(id,_g) {
							return function(audioBuffer) {
								_g[0](id[0],audioBuffer);
							};
						})([id],[$bind(this,this.loadAudioBuffer_onComplete)]));
						break;
					case "TEXT":
						this.assetsTotal++;
						var future4 = this.loadText(id);
						future4.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future4.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future4.onComplete((function(id,_g) {
							return function(text) {
								_g[0](id[0],text);
							};
						})([id],[$bind(this,this.loadText_onComplete)]));
						break;
					default:
					}
				}
			}
			this.__assetLoaded(null);
		}
		return this.promise.future;
	}
	,loadAudioBuffer: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id)) {
			return lime_app_Future.withValue(this.cachedAudioBuffers.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(lime_media_AudioBuffer.fromBytes(js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes)));
		} else if(Object.prototype.hasOwnProperty.call(this.pathGroups.h,id)) {
			return lime_media_AudioBuffer.loadFromFiles(this.pathGroups.h[id]);
		} else {
			return lime_media_AudioBuffer.loadFromFile(this.paths.h[id]);
		}
	}
	,loadBytes: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return lime_app_Future.withValue(this.cachedBytes.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(Type.createInstance(this.classTypes.h[id],[]));
		} else {
			return lime_utils_Bytes.loadFromFile(this.paths.h[id]);
		}
	}
	,loadFont: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id)) {
			return lime_app_Future.withValue(this.cachedFonts.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			var font = Type.createInstance(this.classTypes.h[id],[]);
			return font.__loadFromName(font.name);
		} else {
			return lime_text_Font.loadFromName(this.paths.h[id]);
		}
	}
	,loadImage: function(id) {
		var _gthis = this;
		if(Object.prototype.hasOwnProperty.call(this.cachedImages.h,id)) {
			return lime_app_Future.withValue(this.cachedImages.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(Type.createInstance(this.classTypes.h[id],[]));
		} else if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return lime_graphics_Image.loadFromBytes(this.cachedBytes.h[id]).then(function(image) {
				var _this = _gthis.cachedBytes;
				if(Object.prototype.hasOwnProperty.call(_this.h,id)) {
					delete(_this.h[id]);
				}
				_gthis.cachedImages.h[id] = image;
				return lime_app_Future.withValue(image);
			});
		} else {
			return lime_graphics_Image.loadFromFile(this.paths.h[id]);
		}
	}
	,loadText: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			return lime_app_Future.withValue(this.cachedText.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id) || Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return lime_app_Future.withValue(null);
			} else {
				var text = bytes.getString(0,bytes.length);
				this.cachedText.h[id] = text;
				return lime_app_Future.withValue(text);
			}
		} else {
			var request = new lime_net__$HTTPRequest_$String();
			return request.load(this.paths.h[id]);
		}
	}
	,unload: function() {
	}
	,__assetLoaded: function(id) {
		this.assetsLoaded++;
		if(id != null) {
			lime_utils_Log.verbose("Loaded asset: " + id + " [" + this.types.h[id] + "] (" + (this.assetsLoaded - 1) + "/" + (this.assetsTotal - 1) + ")",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 622, className : "lime.utils.AssetLibrary", methodName : "__assetLoaded"});
		}
		if(id != null) {
			var size = Object.prototype.hasOwnProperty.call(this.sizes.h,id) ? this.sizes.h[id] : 0;
			if(!Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h,id)) {
				this.bytesLoaded += size;
			} else {
				var cache = this.bytesLoadedCache.h[id];
				if(cache < size) {
					this.bytesLoaded += size - cache;
				}
			}
			this.bytesLoadedCache.h[id] = size;
		}
		if(this.assetsLoaded < this.assetsTotal) {
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		} else {
			this.loaded = true;
			this.promise.progress(this.bytesTotal,this.bytesTotal);
			this.promise.complete(this);
		}
	}
	,__cacheBreak: function(path) {
		return lime_utils_Assets.__cacheBreak(path);
	}
	,__fromBundle: function(bundle,manifest) {
		if(manifest != null) {
			var id;
			var data;
			var type;
			var _g = 0;
			var _g1 = manifest.assets;
			while(_g < _g1.length) {
				var asset = _g1[_g];
				++_g;
				id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
				data = bundle.data.h[asset.path];
				if(Object.prototype.hasOwnProperty.call(asset,"type")) {
					type = asset.type;
					if(type == "TEXT") {
						this.cachedText.h[id] = data != null ? Std.string(data) : null;
					} else {
						this.cachedBytes.h[id] = data;
					}
					this.types.h[id] = asset.type;
				} else {
					this.cachedBytes.h[id] = data;
					this.types.h[id] = "BINARY";
				}
			}
		} else {
			var _g = 0;
			var _g1 = bundle.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				this.cachedBytes.h[path] = bundle.data.h[path];
				this.types.h[path] = "BINARY";
			}
		}
	}
	,__fromManifest: function(manifest) {
		var hasSize = manifest.version >= 2;
		var size;
		var id;
		var pathGroup;
		var classRef;
		var basePath = manifest.rootPath;
		if(basePath == null) {
			basePath = "";
		}
		if(basePath != "") {
			basePath += "/";
		}
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			size = hasSize && Object.prototype.hasOwnProperty.call(asset,"size") ? asset.size : 100;
			id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
			if(Object.prototype.hasOwnProperty.call(asset,"path")) {
				var this1 = this.paths;
				var value = this.__cacheBreak(this.__resolvePath(basePath + Std.string(Reflect.field(asset,"path"))));
				this1.h[id] = value;
			}
			if(Object.prototype.hasOwnProperty.call(asset,"pathGroup")) {
				pathGroup = Reflect.field(asset,"pathGroup");
				var _g2 = 0;
				var _g3 = pathGroup.length;
				while(_g2 < _g3) {
					var i = _g2++;
					pathGroup[i] = this.__cacheBreak(this.__resolvePath(basePath + pathGroup[i]));
				}
				this.pathGroups.h[id] = pathGroup;
			}
			this.sizes.h[id] = size;
			this.types.h[id] = asset.type;
			if(Object.prototype.hasOwnProperty.call(asset,"preload")) {
				this.preload.h[id] = Reflect.field(asset,"preload");
			}
			if(Object.prototype.hasOwnProperty.call(asset,"className")) {
				var name = Reflect.field(asset,"className");
				classRef = $hxClasses[name];
				this.classTypes.h[id] = classRef;
			}
		}
		this.bytesTotal = 0;
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
			if(Object.prototype.hasOwnProperty.call(this.preload.h,id) && this.preload.h[id] && Object.prototype.hasOwnProperty.call(this.sizes.h,id)) {
				this.bytesTotal += this.sizes.h[id];
			}
		}
	}
	,__resolvePath: function(path) {
		path = StringTools.replace(path,"\\","/");
		var colonIdx = path.indexOf(":");
		if(StringTools.startsWith(path,"http") && colonIdx > 0) {
			var lastSlashIdx = colonIdx + 3;
			var httpSection = HxOverrides.substr(path,0,lastSlashIdx);
			path = httpSection + StringTools.replace(HxOverrides.substr(path,lastSlashIdx,null),"//","/");
		} else {
			path = StringTools.replace(path,"//","/");
		}
		if(path.indexOf("./") > -1) {
			var split = path.split("/");
			var newPath = [];
			var _g = 0;
			var _g1 = split.length;
			while(_g < _g1) {
				var i = _g++;
				if(split[i] == "..") {
					if(i == 0 || newPath[i - 1] == "..") {
						newPath.push("..");
					} else {
						newPath.pop();
					}
				} else if(split[i] == ".") {
					if(i == 0) {
						newPath.push(".");
					}
				} else {
					newPath.push(split[i]);
				}
			}
			path = newPath.join("/");
		}
		return path;
	}
	,loadAudioBuffer_onComplete: function(id,audioBuffer) {
		this.cachedAudioBuffers.h[id] = audioBuffer;
		if(Object.prototype.hasOwnProperty.call(this.pathGroups.h,id)) {
			var pathGroup = this.pathGroups.h[id];
			var h = this.pathGroups.h;
			var otherID_h = h;
			var otherID_keys = Object.keys(h);
			var otherID_length = otherID_keys.length;
			var otherID_current = 0;
			while(otherID_current < otherID_length) {
				var otherID = otherID_keys[otherID_current++];
				if(otherID == id) {
					continue;
				}
				var _g = 0;
				while(_g < pathGroup.length) {
					var path = pathGroup[_g];
					++_g;
					if(this.pathGroups.h[otherID].indexOf(path) > -1) {
						this.cachedAudioBuffers.h[otherID] = audioBuffer;
						break;
					}
				}
			}
		}
		this.__assetLoaded(id);
	}
	,loadAudioBuffer_onError: function(id,message) {
		if(message != null && message != "") {
			lime_utils_Log.warn("Could not load \"" + id + "\": " + Std.string(message),{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 868, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		} else {
			lime_utils_Log.warn("Could not load \"" + id + "\"",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 872, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		}
		this.loadAudioBuffer_onComplete(id,new lime_media_AudioBuffer());
	}
	,loadBytes_onComplete: function(id,bytes) {
		this.cachedBytes.h[id] = bytes;
		this.__assetLoaded(id);
	}
	,loadFont_onComplete: function(id,font) {
		this.cachedFonts.h[id] = font;
		this.__assetLoaded(id);
	}
	,loadImage_onComplete: function(id,image) {
		this.cachedImages.h[id] = image;
		this.__assetLoaded(id);
	}
	,loadText_onComplete: function(id,text) {
		this.cachedText.h[id] = text;
		this.__assetLoaded(id);
	}
	,load_onError: function(id,message) {
		if(message != null && message != "") {
			this.promise.error("Error loading asset \"" + id + "\": " + Std.string(message));
		} else {
			this.promise.error("Error loading asset \"" + id + "\"");
		}
	}
	,load_onProgress: function(id,bytesLoaded,bytesTotal) {
		if(bytesLoaded > 0) {
			var size = this.sizes.h[id];
			var percent;
			if(bytesTotal > 0) {
				percent = bytesLoaded / bytesTotal;
				if(percent > 1) {
					percent = 1;
				}
				bytesLoaded = Math.floor(percent * size);
			} else if(bytesLoaded > size) {
				bytesLoaded = size;
			}
			if(Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h,id)) {
				var cache = this.bytesLoadedCache.h[id];
				if(bytesLoaded != cache) {
					this.bytesLoaded += bytesLoaded - cache;
				}
			} else {
				this.bytesLoaded += bytesLoaded;
			}
			this.bytesLoadedCache.h[id] = bytesLoaded;
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		}
	}
	,__class__: lime_utils_AssetLibrary
};
var lime_utils_AssetManifest = function() {
	this.assets = [];
	this.libraryArgs = [];
	this.version = 2;
};
$hxClasses["lime.utils.AssetManifest"] = lime_utils_AssetManifest;
lime_utils_AssetManifest.__name__ = "lime.utils.AssetManifest";
lime_utils_AssetManifest.fromBytes = function(bytes,rootPath) {
	if(bytes != null) {
		return lime_utils_AssetManifest.parse(bytes.getString(0,bytes.length),rootPath);
	} else {
		return null;
	}
};
lime_utils_AssetManifest.fromFile = function(path,rootPath) {
	path = lime_utils_AssetManifest.__resolvePath(path);
	rootPath = lime_utils_AssetManifest.__resolveRootPath(rootPath,path);
	if(path == null) {
		return null;
	}
	return lime_utils_AssetManifest.fromBytes(lime_utils_Bytes.fromFile(path),rootPath);
};
lime_utils_AssetManifest.loadFromBytes = function(bytes,rootPath) {
	return lime_app_Future.withValue(lime_utils_AssetManifest.fromBytes(bytes,rootPath));
};
lime_utils_AssetManifest.loadFromFile = function(path,rootPath) {
	path = lime_utils_AssetManifest.__resolvePath(path);
	rootPath = lime_utils_AssetManifest.__resolveRootPath(rootPath,path);
	if(path == null) {
		return null;
	}
	return lime_utils_Bytes.loadFromFile(path).then(function(bytes) {
		return lime_app_Future.withValue(lime_utils_AssetManifest.fromBytes(bytes,rootPath));
	});
};
lime_utils_AssetManifest.parse = function(data,rootPath) {
	if(data == null || data == "") {
		return null;
	}
	var manifestData = JSON.parse(data);
	var manifest = new lime_utils_AssetManifest();
	if(Object.prototype.hasOwnProperty.call(manifestData,"name")) {
		manifest.name = manifestData.name;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"libraryType")) {
		manifest.libraryType = manifestData.libraryType;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"libraryArgs")) {
		manifest.libraryArgs = manifestData.libraryArgs;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"assets")) {
		var assets = manifestData.assets;
		if(Object.prototype.hasOwnProperty.call(manifestData,"version") && manifestData.version <= 2) {
			manifest.assets = haxe_Unserializer.run(assets);
		} else {
			manifest.assets = assets;
		}
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"rootPath")) {
		manifest.rootPath = manifestData.rootPath;
	}
	if(rootPath != null && rootPath != "") {
		if(manifest.rootPath == null || manifest.rootPath == "") {
			manifest.rootPath = rootPath;
		} else {
			manifest.rootPath = rootPath + "/" + manifest.rootPath;
		}
	}
	return manifest;
};
lime_utils_AssetManifest.__resolvePath = function(path) {
	if(path == null) {
		return null;
	}
	var queryIndex = path.indexOf("?");
	var basePath;
	if(queryIndex > -1) {
		basePath = HxOverrides.substr(path,0,queryIndex);
	} else {
		basePath = path;
	}
	basePath = StringTools.replace(basePath,"\\","/");
	while(StringTools.endsWith(basePath,"/")) basePath = HxOverrides.substr(basePath,0,basePath.length - 1);
	if(StringTools.endsWith(basePath,".bundle")) {
		if(queryIndex > -1) {
			return basePath + "/library.json" + HxOverrides.substr(path,queryIndex,null);
		} else {
			return basePath + "/library.json";
		}
	} else {
		return path;
	}
};
lime_utils_AssetManifest.__resolveRootPath = function(rootPath,path) {
	if(rootPath != null) {
		return rootPath;
	}
	var queryIndex = path.indexOf("?");
	if(queryIndex > -1) {
		rootPath = HxOverrides.substr(path,0,queryIndex);
	} else {
		rootPath = path;
	}
	rootPath = StringTools.replace(rootPath,"\\","/");
	while(StringTools.endsWith(rootPath,"/")) {
		if(rootPath == "/") {
			return rootPath;
		}
		rootPath = HxOverrides.substr(rootPath,0,rootPath.length - 1);
	}
	if(StringTools.endsWith(rootPath,".bundle")) {
		return rootPath;
	} else {
		return haxe_io_Path.directory(rootPath);
	}
};
lime_utils_AssetManifest.prototype = {
	serialize: function() {
		var manifestData = { };
		manifestData.version = this.version;
		manifestData.libraryType = this.libraryType;
		manifestData.libraryArgs = this.libraryArgs;
		manifestData.name = this.name;
		manifestData.assets = haxe_Serializer.run(this.assets);
		manifestData.rootPath = this.rootPath;
		return JSON.stringify(manifestData);
	}
	,__class__: lime_utils_AssetManifest
};
var lime_utils_Assets = function() { };
$hxClasses["lime.utils.Assets"] = lime_utils_Assets;
lime_utils_Assets.__name__ = "lime.utils.Assets";
lime_utils_Assets.exists = function(id,type) {
	if(type == null) {
		type = "BINARY";
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		return symbol_library.exists(symbol_symbolName,type);
	}
	return false;
};
lime_utils_Assets.getAsset = function(id,type,useCache) {
	if(useCache && lime_utils_Assets.cache.enabled) {
		switch(type) {
		case "BINARY":case "TEXT":
			useCache = false;
			break;
		case "FONT":
			var font = lime_utils_Assets.cache.font.h[id];
			if(font != null) {
				return font;
			}
			break;
		case "IMAGE":
			var image = lime_utils_Assets.cache.image.h[id];
			if(lime_utils_Assets.isValidImage(image)) {
				return image;
			}
			break;
		case "MUSIC":case "SOUND":
			var audio = lime_utils_Assets.cache.audio.h[id];
			if(lime_utils_Assets.isValidAudio(audio)) {
				return audio;
			}
			break;
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to get template: " + id);
		default:
			return null;
		}
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		if(symbol_library.exists(symbol_symbolName,type)) {
			if(symbol_library.isLocal(symbol_symbolName,type)) {
				var asset = symbol_library.getAsset(symbol_symbolName,type);
				if(useCache && lime_utils_Assets.cache.enabled) {
					lime_utils_Assets.cache.set(id,type,asset);
				}
				return asset;
			} else {
				lime_utils_Log.error(type + " asset \"" + id + "\" exists, but only asynchronously",{ fileName : "lime/utils/Assets.hx", lineNumber : 133, className : "lime.utils.Assets", methodName : "getAsset"});
			}
		} else {
			lime_utils_Log.error("There is no " + type + " asset with an ID of \"" + id + "\"",{ fileName : "lime/utils/Assets.hx", lineNumber : 138, className : "lime.utils.Assets", methodName : "getAsset"});
		}
	} else {
		lime_utils_Log.error(lime_utils_Assets.__libraryNotFound(symbol_libraryName),{ fileName : "lime/utils/Assets.hx", lineNumber : 143, className : "lime.utils.Assets", methodName : "getAsset"});
	}
	return null;
};
lime_utils_Assets.getAudioBuffer = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.getAsset(id,"SOUND",useCache);
};
lime_utils_Assets.getBytes = function(id) {
	return lime_utils_Assets.getAsset(id,"BINARY",false);
};
lime_utils_Assets.getFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.getAsset(id,"FONT",useCache);
};
lime_utils_Assets.getImage = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.getAsset(id,"IMAGE",useCache);
};
lime_utils_Assets.getLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	return lime_utils_Assets.libraries.h[name];
};
lime_utils_Assets.getPath = function(id) {
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		if(symbol_library.exists(symbol_symbolName,null)) {
			return symbol_library.getPath(symbol_symbolName);
		} else {
			lime_utils_Log.error("There is no asset with an ID of \"" + id + "\"",{ fileName : "lime/utils/Assets.hx", lineNumber : 224, className : "lime.utils.Assets", methodName : "getPath"});
		}
	} else {
		lime_utils_Log.error(lime_utils_Assets.__libraryNotFound(symbol_libraryName),{ fileName : "lime/utils/Assets.hx", lineNumber : 229, className : "lime.utils.Assets", methodName : "getPath"});
	}
	return null;
};
lime_utils_Assets.getText = function(id) {
	return lime_utils_Assets.getAsset(id,"TEXT",false);
};
lime_utils_Assets.hasLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	return Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraries.h,name);
};
lime_utils_Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && lime_utils_Assets.cache.enabled) {
		if(lime_utils_Assets.cache.exists(id,type)) {
			return true;
		}
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		return symbol_library.isLocal(symbol_symbolName,type);
	} else {
		return false;
	}
};
lime_utils_Assets.isValidAudio = function(buffer) {
	return buffer != null;
};
lime_utils_Assets.isValidImage = function(image) {
	if(image != null) {
		return image.buffer != null;
	} else {
		return false;
	}
};
lime_utils_Assets.list = function(type) {
	var items = [];
	var h = lime_utils_Assets.libraries.h;
	var library_h = h;
	var library_keys = Object.keys(h);
	var library_length = library_keys.length;
	var library_current = 0;
	while(library_current < library_length) {
		var library = library_h[library_keys[library_current++]];
		var libraryItems = library.list(type);
		if(libraryItems != null) {
			items = items.concat(libraryItems);
		}
	}
	return items;
};
lime_utils_Assets.loadAsset = function(id,type,useCache) {
	if(useCache && lime_utils_Assets.cache.enabled) {
		switch(type) {
		case "BINARY":case "TEXT":
			useCache = false;
			break;
		case "FONT":
			var font = lime_utils_Assets.cache.font.h[id];
			if(font != null) {
				return lime_app_Future.withValue(font);
			}
			break;
		case "IMAGE":
			var image = lime_utils_Assets.cache.image.h[id];
			if(lime_utils_Assets.isValidImage(image)) {
				return lime_app_Future.withValue(image);
			}
			break;
		case "MUSIC":case "SOUND":
			var audio = lime_utils_Assets.cache.audio.h[id];
			if(lime_utils_Assets.isValidAudio(audio)) {
				return lime_app_Future.withValue(audio);
			}
			break;
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to get template: " + id);
		default:
			return null;
		}
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		if(symbol_library.exists(symbol_symbolName,type)) {
			var future = symbol_library.loadAsset(symbol_symbolName,type);
			if(useCache && lime_utils_Assets.cache.enabled) {
				future.onComplete(function(asset) {
					lime_utils_Assets.cache.set(id,type,asset);
				});
			}
			return future;
		} else {
			return lime_app_Future.withError("There is no " + type + " asset with an ID of \"" + id + "\"");
		}
	} else {
		return lime_app_Future.withError(lime_utils_Assets.__libraryNotFound(symbol_libraryName));
	}
};
lime_utils_Assets.loadAudioBuffer = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.loadAsset(id,"SOUND",useCache);
};
lime_utils_Assets.loadBytes = function(id) {
	return lime_utils_Assets.loadAsset(id,"BINARY",false);
};
lime_utils_Assets.loadFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.loadAsset(id,"FONT",useCache);
};
lime_utils_Assets.loadImage = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return lime_utils_Assets.loadAsset(id,"IMAGE",useCache);
};
lime_utils_Assets.loadLibrary = function(id) {
	var promise = new lime_app_Promise();
	var library = lime_utils_Assets.getLibrary(id);
	if(library != null) {
		return library.load();
	}
	var path = id;
	var rootPath = null;
	if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.bundlePaths.h,id)) {
		lime_utils_AssetBundle.loadFromFile(lime_utils_Assets.bundlePaths.h[id]).onComplete(function(bundle) {
			if(bundle == null) {
				promise.error("Cannot load bundle for library \"" + id + "\"");
				return;
			}
			var library = lime_utils_AssetLibrary.fromBundle(bundle);
			if(library == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				lime_utils_Assets.libraries.h[id] = library;
				library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
				promise.completeWith(library.load());
			}
		}).onError(function(_) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	} else {
		if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraryPaths.h,id)) {
			path = lime_utils_Assets.libraryPaths.h[id];
			rootPath = haxe_io_Path.directory(path);
		} else {
			if(StringTools.endsWith(path,".bundle")) {
				rootPath = path;
				path += "/library.json";
			} else {
				rootPath = haxe_io_Path.directory(path);
			}
			path = lime_utils_Assets.__cacheBreak(path);
		}
		lime_utils_AssetManifest.loadFromFile(path,rootPath).onComplete(function(manifest) {
			if(manifest == null) {
				promise.error("Cannot parse asset manifest for library \"" + id + "\"");
				return;
			}
			var library = lime_utils_AssetLibrary.fromManifest(manifest);
			if(library == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				lime_utils_Assets.libraries.h[id] = library;
				library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
				promise.completeWith(library.load());
			}
		}).onError(function(_) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	}
	return promise.future;
};
lime_utils_Assets.loadText = function(id) {
	return lime_utils_Assets.loadAsset(id,"TEXT",false);
};
lime_utils_Assets.registerLibrary = function(name,library) {
	if(name == null || name == "") {
		name = "default";
	}
	if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraries.h,name)) {
		if(lime_utils_Assets.libraries.h[name] == library) {
			return;
		} else {
			lime_utils_Assets.unloadLibrary(name);
		}
	}
	if(library != null) {
		library.onChange.add(lime_utils_Assets.library_onChange);
	}
	lime_utils_Assets.libraries.h[name] = library;
};
lime_utils_Assets.unloadLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	var library = lime_utils_Assets.libraries.h[name];
	if(library != null) {
		lime_utils_Assets.cache.clear(name + ":");
		library.onChange.remove(lime_utils_Assets.library_onChange);
		library.unload();
	}
	var _this = lime_utils_Assets.libraries;
	if(Object.prototype.hasOwnProperty.call(_this.h,name)) {
		delete(_this.h[name]);
	}
};
lime_utils_Assets.__cacheBreak = function(path) {
	if(lime_utils_Assets.cache.version > 0) {
		if(path.indexOf("?") > -1) {
			path += "&" + lime_utils_Assets.cache.version;
		} else {
			path += "?" + lime_utils_Assets.cache.version;
		}
	}
	return path;
};
lime_utils_Assets.__libraryNotFound = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	if(lime_app_Application.current != null && lime_app_Application.current.__preloader != null && !lime_app_Application.current.__preloader.complete) {
		return "There is no asset library named \"" + name + "\", or it is not yet preloaded";
	} else {
		return "There is no asset library named \"" + name + "\"";
	}
};
lime_utils_Assets.library_onChange = function() {
	lime_utils_Assets.cache.clear();
	lime_utils_Assets.onChange.dispatch();
};
var lime_utils__$Assets_LibrarySymbol = function(id) {
	var colonIndex = id.indexOf(":");
	this.libraryName = id.substring(0,colonIndex);
	this.symbolName = id.substring(colonIndex + 1);
	this.library = lime_utils_Assets.getLibrary(this.libraryName);
};
$hxClasses["lime.utils._Assets.LibrarySymbol"] = lime_utils__$Assets_LibrarySymbol;
lime_utils__$Assets_LibrarySymbol.__name__ = "lime.utils._Assets.LibrarySymbol";
lime_utils__$Assets_LibrarySymbol.prototype = {
	isLocal: function(type) {
		return this.library.isLocal(this.symbolName,type);
	}
	,exists: function(type) {
		return this.library.exists(this.symbolName,type);
	}
	,__class__: lime_utils__$Assets_LibrarySymbol
};
var lime_utils_BytePointer = {};
lime_utils_BytePointer._new = function(bytes,offset) {
	if(offset == null) {
		offset = 0;
	}
	var this1 = new lime_utils_BytePointerData(bytes,offset);
	return this1;
};
lime_utils_BytePointer.set = function(this1,bytes,bufferView,buffer,offset) {
	if(buffer != null) {
		bytes = haxe_io_Bytes.ofData(buffer);
	}
	if(bytes != null || bufferView == null) {
		this1.bytes = bytes;
		this1.offset = offset != null ? offset : 0;
	} else {
		this1.bytes = haxe_io_Bytes.ofData(bufferView.buffer);
		this1.offset = offset != null ? bufferView.byteOffset + offset : bufferView.byteOffset;
	}
};
lime_utils_BytePointer.__arrayGet = function(this1,index) {
	if(this1.bytes != null) {
		return this1.bytes.b[index + this1.offset];
	} else {
		return 0;
	}
};
lime_utils_BytePointer.__arraySet = function(this1,index,value) {
	if(this1.bytes == null) {
		this1.bytes.b[index + this1.offset] = value & 255;
	}
	return value;
};
lime_utils_BytePointer.fromArrayBufferView = function(arrayBufferView) {
	if(arrayBufferView == null) {
		return null;
	}
	return new lime_utils_BytePointerData(haxe_io_Bytes.ofData(arrayBufferView.buffer),arrayBufferView.byteOffset);
};
lime_utils_BytePointer.fromArrayBuffer = function(buffer) {
	if(buffer == null) {
		return null;
	}
	return new lime_utils_BytePointerData(haxe_io_Bytes.ofData(buffer),0);
};
lime_utils_BytePointer.fromBytes = function(bytes) {
	return new lime_utils_BytePointerData(bytes,0);
};
lime_utils_BytePointer.fromBytesData = function(bytesData) {
	if(bytesData == null) {
		return new lime_utils_BytePointerData(null,0);
	} else {
		return new lime_utils_BytePointerData(haxe_io_Bytes.ofData(bytesData),0);
	}
};
lime_utils_BytePointer.fromFile = function(path) {
	return new lime_utils_BytePointerData(lime_utils_Bytes.fromFile(path),0);
};
lime_utils_BytePointer.fromLimeBytes = function(bytes) {
	return new lime_utils_BytePointerData(bytes,0);
};
lime_utils_BytePointer.toUInt8Array = function(bytePointer) {
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 8 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer,byteoffset);
		} else {
			this1 = new Uint8Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toUInt8ClampedArray = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 8 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint8ClampedArray(elements);
	} else if(array != null) {
		this1 = new Uint8ClampedArray(array);
	} else if(view != null) {
		this1 = new Uint8ClampedArray(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint8ClampedArray(buffer,byteoffset);
		} else {
			this1 = new Uint8ClampedArray(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toInt8Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 8 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int8Array(elements);
	} else if(array != null) {
		this1 = new Int8Array(array);
	} else if(view != null) {
		this1 = new Int8Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int8Array(buffer,byteoffset);
		} else {
			this1 = new Int8Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toUInt16Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 16 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint16Array(elements);
	} else if(array != null) {
		this1 = new Uint16Array(array);
	} else if(view != null) {
		this1 = new Uint16Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint16Array(buffer,byteoffset);
		} else {
			this1 = new Uint16Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toInt16Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 16 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int16Array(elements);
	} else if(array != null) {
		this1 = new Int16Array(array);
	} else if(view != null) {
		this1 = new Int16Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int16Array(buffer,byteoffset);
		} else {
			this1 = new Int16Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toUInt32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 32 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint32Array(elements);
	} else if(array != null) {
		this1 = new Uint32Array(array);
	} else if(view != null) {
		this1 = new Uint32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint32Array(buffer,byteoffset);
		} else {
			this1 = new Uint32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toInt32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 32 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int32Array(elements);
	} else if(array != null) {
		this1 = new Int32Array(array);
	} else if(view != null) {
		this1 = new Int32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int32Array(buffer,byteoffset);
		} else {
			this1 = new Int32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toFloat32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 32 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Float32Array(elements);
	} else if(array != null) {
		this1 = new Float32Array(array);
	} else if(view != null) {
		this1 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float32Array(buffer,byteoffset);
		} else {
			this1 = new Float32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
lime_utils_BytePointer.toFloat64Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.b.bufferValue;
	var byteoffset = bytePointer.offset / 64 | 0;
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Float64Array(elements);
	} else if(array != null) {
		this1 = new Float64Array(array);
	} else if(view != null) {
		this1 = new Float64Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float64Array(buffer,byteoffset);
		} else {
			this1 = new Float64Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
};
var lime_utils_BytePointerData = function(bytes,offset) {
	this.bytes = bytes;
	this.offset = offset;
};
$hxClasses["lime.utils.BytePointerData"] = lime_utils_BytePointerData;
lime_utils_BytePointerData.__name__ = "lime.utils.BytePointerData";
lime_utils_BytePointerData.prototype = {
	__class__: lime_utils_BytePointerData
};
var lime_utils_Bytes = {};
lime_utils_Bytes._new = function(length,bytesData) {
	var this1 = new haxe_io_Bytes(bytesData);
	return this1;
};
lime_utils_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
lime_utils_Bytes.compress = function(this1,algorithm) {
	switch(algorithm._hx_index) {
	case 0:
		return lime__$internal_format_Deflate.compress(this1);
	case 1:
		return lime__$internal_format_GZip.compress(this1);
	case 2:
		return lime__$internal_format_LZMA.compress(this1);
	case 3:
		return lime__$internal_format_Zlib.compress(this1);
	}
};
lime_utils_Bytes.decompress = function(this1,algorithm) {
	switch(algorithm._hx_index) {
	case 0:
		return lime__$internal_format_Deflate.decompress(this1);
	case 1:
		return lime__$internal_format_GZip.decompress(this1);
	case 2:
		return lime__$internal_format_LZMA.decompress(this1);
	case 3:
		return lime__$internal_format_Zlib.decompress(this1);
	}
};
lime_utils_Bytes.fastGet = function(b,pos) {
	return b.bytes[pos];
};
lime_utils_Bytes.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	return lime_utils_Bytes._new(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.fromFile = function(path) {
	return null;
};
lime_utils_Bytes.loadFromBytes = function(bytes) {
	return lime_app_Future.withValue(lime_utils_Bytes.fromBytes(bytes));
};
lime_utils_Bytes.loadFromFile = function(path) {
	var request = new lime_net__$HTTPRequest_$lime_$utils_$Bytes();
	return request.load(path);
};
lime_utils_Bytes.ofData = function(b) {
	var bytes = haxe_io_Bytes.ofData(b);
	return lime_utils_Bytes._new(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.ofString = function(s) {
	var bytes = haxe_io_Bytes.ofString(s);
	return lime_utils_Bytes._new(bytes.length,bytes.b.bufferValue);
};
var lime_utils_CompressionAlgorithm = $hxEnums["lime.utils.CompressionAlgorithm"] = { __ename__:"lime.utils.CompressionAlgorithm",__constructs__:null
	,DEFLATE: {_hx_name:"DEFLATE",_hx_index:0,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,GZIP: {_hx_name:"GZIP",_hx_index:1,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,LZMA: {_hx_name:"LZMA",_hx_index:2,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,ZLIB: {_hx_name:"ZLIB",_hx_index:3,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
};
lime_utils_CompressionAlgorithm.__constructs__ = [lime_utils_CompressionAlgorithm.DEFLATE,lime_utils_CompressionAlgorithm.GZIP,lime_utils_CompressionAlgorithm.LZMA,lime_utils_CompressionAlgorithm.ZLIB];
var lime_utils_DataPointer = {};
lime_utils_DataPointer._new = function(data) {
	var this1 = data;
	return this1;
};
lime_utils_DataPointer.fromFloat = function(value) {
	return value;
};
lime_utils_DataPointer.fromBytesPointer = function(pointer) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromArrayBufferView = function(arrayBufferView) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromArrayBuffer = function(buffer) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromBytes = function(bytes) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromBytesData = function(bytesData) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromLimeBytes = function(bytes) {
	return lime_utils_DataPointer.fromBytes(bytes);
};
lime_utils_DataPointer.fromCFFIPointer = function(pointer) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.fromFile = function(path) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.__withOffset = function(data,offset) {
	return lime_utils_DataPointer.fromFloat(0);
};
lime_utils_DataPointer.equals = function(a,b) {
	return a == b;
};
lime_utils_DataPointer.equalsPointer = function(a,b) {
	return a == b;
};
lime_utils_DataPointer.greaterThan = function(a,b) {
	return a > b;
};
lime_utils_DataPointer.greaterThanPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) > lime_system_CFFIPointer.get(b);
};
lime_utils_DataPointer.greaterThanOrEqual = function(a,b) {
	return a >= b;
};
lime_utils_DataPointer.greaterThanOrEqualPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) >= lime_system_CFFIPointer.get(b);
};
lime_utils_DataPointer.lessThan = function(a,b) {
	return a < b;
};
lime_utils_DataPointer.lessThanPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) < lime_system_CFFIPointer.get(b);
};
lime_utils_DataPointer.lessThanOrEqual = function(a,b) {
	return a <= b;
};
lime_utils_DataPointer.lessThanOrEqualPointer = function(a,b) {
	return lime_system_CFFIPointer.get(a) <= lime_system_CFFIPointer.get(b);
};
lime_utils_DataPointer.notEquals = function(a,b) {
	return a != b;
};
lime_utils_DataPointer.notEqualsPointer = function(a,b) {
	return a != b;
};
lime_utils_DataPointer.plus = function(a,b) {
	return lime_utils_DataPointer.__withOffset(a,b);
};
lime_utils_DataPointer.plusPointer = function(a,b) {
	return lime_utils_DataPointer.__withOffset(a,b | 0);
};
lime_utils_DataPointer.minus = function(a,b) {
	return lime_utils_DataPointer.__withOffset(a,-b);
};
lime_utils_DataPointer.minusPointer = function(a,b) {
	return lime_utils_DataPointer.__withOffset(a,-(b | 0));
};
var lime_utils_Float32Array = {};
lime_utils_Float32Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_Float32Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Float32Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Float32Array(bytes.b.bufferValue,byteOffset);
	}
	return new Float32Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_Float32Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_Float32Array.toString = function(this1) {
	if(this1 != null) {
		return "Float32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_Float64Array = {};
lime_utils_Float64Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_Float64Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Float64Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Float64Array(bytes.b.bufferValue,byteOffset);
	}
	return new Float64Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_Float64Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_Float64Array.toString = function(this1) {
	if(this1 != null) {
		return "Float64Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_Int16Array = {};
lime_utils_Int16Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_Int16Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Int16Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Int16Array(bytes.b.bufferValue,byteOffset);
	}
	return new Int16Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_Int16Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_Int16Array.toString = function(this1) {
	if(this1 != null) {
		return "Int16Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_Int32Array = {};
lime_utils_Int32Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_Int32Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Int32Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Int32Array(bytes.b.bufferValue,byteOffset);
	}
	return new Int32Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_Int32Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_Int32Array.toString = function(this1) {
	if(this1 != null) {
		return "Int32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_Int8Array = {};
lime_utils_Int8Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_Int8Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	return new Int8Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_Int8Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_Int8Array.toString = function(this1) {
	if(this1 != null) {
		return "Int8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_Log = function() { };
$hxClasses["lime.utils.Log"] = lime_utils_Log;
lime_utils_Log.__name__ = "lime.utils.Log";
lime_utils_Log.debug = function(message,info) {
	if(lime_utils_Log.level >= 4) {
		console.debug("[" + info.className + "] " + Std.string(message));
	}
};
lime_utils_Log.error = function(message,info) {
	if(lime_utils_Log.level >= 1) {
		var message1 = "[" + info.className + "] ERROR: " + Std.string(message);
		if(lime_utils_Log.throwErrors) {
			throw haxe_Exception.thrown(message1);
		} else {
			console.error(message1);
		}
	}
};
lime_utils_Log.info = function(message,info) {
	if(lime_utils_Log.level >= 3) {
		console.info("[" + info.className + "] " + Std.string(message));
	}
};
lime_utils_Log.print = function(message) {
	console.log(message);
};
lime_utils_Log.println = function(message) {
	console.log(message);
};
lime_utils_Log.verbose = function(message,info) {
	if(lime_utils_Log.level >= 5) {
		var message1 = "[" + info.className + "] " + Std.string(message);
		console.log(message1);
	}
};
lime_utils_Log.warn = function(message,info) {
	if(lime_utils_Log.level >= 2) {
		console.warn("[" + info.className + "] WARNING: " + Std.string(message));
	}
};
var lime_utils_LogLevel = {};
lime_utils_LogLevel.gt = function(a,b) {
	return a > b;
};
lime_utils_LogLevel.gte = function(a,b) {
	return a >= b;
};
lime_utils_LogLevel.lt = function(a,b) {
	return a < b;
};
lime_utils_LogLevel.lte = function(a,b) {
	return a <= b;
};
var lime_utils_Preloader = function() {
	this.bytesTotalCache = new haxe_ds_StringMap();
	this.bytesLoadedCache2 = new haxe_ds_StringMap();
	this.bytesLoadedCache = new haxe_ds_ObjectMap();
	this.onProgress = new lime_app__$Event_$Int_$Int_$Void();
	this.onComplete = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.libraries = [];
	this.libraryNames = [];
	this.onProgress.add($bind(this,this.update));
};
$hxClasses["lime.utils.Preloader"] = lime_utils_Preloader;
lime_utils_Preloader.__name__ = "lime.utils.Preloader";
lime_utils_Preloader.prototype = {
	addLibrary: function(library) {
		this.libraries.push(library);
	}
	,addLibraryName: function(name) {
		if(this.libraryNames.indexOf(name) == -1) {
			this.libraryNames.push(name);
		}
	}
	,load: function() {
		var _gthis = this;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = _g1[_g];
			++_g;
			this.bytesTotal += library.bytesTotal;
		}
		this.loadedLibraries = -1;
		this.preloadStarted = false;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = [_g1[_g]];
			++_g;
			lime_utils_Log.verbose("Preloading asset library",{ fileName : "lime/utils/Preloader.hx", lineNumber : 134, className : "lime.utils.Preloader", methodName : "load"});
			library[0].load().onProgress((function(library) {
				return function(loaded,total) {
					if(_gthis.bytesLoadedCache.h.__keys__[library[0].__id__] == null) {
						_gthis.bytesLoaded += loaded;
					} else {
						_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache.h[library[0].__id__];
					}
					_gthis.bytesLoadedCache.set(library[0],loaded);
					if(!_gthis.simulateProgress) {
						_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
					}
				};
			})(library)).onComplete((function(library) {
				return function(_) {
					if(_gthis.bytesLoadedCache.h.__keys__[library[0].__id__] == null) {
						_gthis.bytesLoaded += library[0].bytesTotal;
					} else {
						_gthis.bytesLoaded += (library[0].bytesTotal | 0) - _gthis.bytesLoadedCache.h[library[0].__id__];
					}
					_gthis.loadedAssetLibrary();
				};
			})(library)).onError((function() {
				return function(e) {
					lime_utils_Log.error(e,{ fileName : "lime/utils/Preloader.hx", lineNumber : 170, className : "lime.utils.Preloader", methodName : "load"});
				};
			})());
		}
		var _g = 0;
		var _g1 = this.libraryNames;
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			this.bytesTotal += 200;
		}
		this.loadedLibraries++;
		this.preloadStarted = true;
		this.updateProgress();
	}
	,loadedAssetLibrary: function(name) {
		this.loadedLibraries++;
		var current = this.loadedLibraries;
		if(!this.preloadStarted) {
			++current;
		}
		var totalLibraries = this.libraries.length + this.libraryNames.length;
		if(name != null) {
			lime_utils_Log.verbose("Loaded asset library: " + name + " [" + current + "/" + totalLibraries + "]",{ fileName : "lime/utils/Preloader.hx", lineNumber : 197, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		} else {
			lime_utils_Log.verbose("Loaded asset library [" + current + "/" + totalLibraries + "]",{ fileName : "lime/utils/Preloader.hx", lineNumber : 201, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		}
		this.updateProgress();
	}
	,start: function() {
		if(this.complete || this.simulateProgress || !this.preloadComplete) {
			return;
		}
		this.complete = true;
		this.onComplete.dispatch();
	}
	,update: function(loaded,total) {
	}
	,updateProgress: function() {
		var _gthis = this;
		if(!this.simulateProgress) {
			this.onProgress.dispatch(this.bytesLoaded,this.bytesTotal);
		}
		if(this.loadedLibraries == this.libraries.length && !this.initLibraryNames) {
			this.initLibraryNames = true;
			var _g = 0;
			var _g1 = this.libraryNames;
			while(_g < _g1.length) {
				var name = [_g1[_g]];
				++_g;
				lime_utils_Log.verbose("Preloading asset library: " + name[0],{ fileName : "lime/utils/Preloader.hx", lineNumber : 239, className : "lime.utils.Preloader", methodName : "updateProgress"});
				lime_utils_Assets.loadLibrary(name[0]).onProgress((function(name) {
					return function(loaded,total) {
						if(total > 0) {
							if(!Object.prototype.hasOwnProperty.call(_gthis.bytesTotalCache.h,name[0])) {
								_gthis.bytesTotalCache.h[name[0]] = total;
								_gthis.bytesTotal += total - 200;
							}
							if(loaded > total) {
								loaded = total;
							}
							if(!Object.prototype.hasOwnProperty.call(_gthis.bytesLoadedCache2.h,name[0])) {
								_gthis.bytesLoaded += loaded;
							} else {
								_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache2.h[name[0]];
							}
							_gthis.bytesLoadedCache2.h[name[0]] = loaded;
							if(!_gthis.simulateProgress) {
								_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
							}
						}
					};
				})(name)).onComplete((function(name) {
					return function(library) {
						var total = 200;
						if(Object.prototype.hasOwnProperty.call(_gthis.bytesTotalCache.h,name[0])) {
							total = _gthis.bytesTotalCache.h[name[0]];
						}
						if(!Object.prototype.hasOwnProperty.call(_gthis.bytesLoadedCache2.h,name[0])) {
							_gthis.bytesLoaded += total;
						} else {
							_gthis.bytesLoaded += total - _gthis.bytesLoadedCache2.h[name[0]];
						}
						_gthis.loadedAssetLibrary(name[0]);
					};
				})(name)).onError((function() {
					return function(e) {
						lime_utils_Log.error(e,{ fileName : "lime/utils/Preloader.hx", lineNumber : 293, className : "lime.utils.Preloader", methodName : "updateProgress"});
					};
				})());
			}
		}
		if(!this.simulateProgress && this.loadedLibraries == this.libraries.length + this.libraryNames.length) {
			if(!this.preloadComplete) {
				this.preloadComplete = true;
				lime_utils_Log.verbose("Preload complete",{ fileName : "lime/utils/Preloader.hx", lineNumber : 306, className : "lime.utils.Preloader", methodName : "updateProgress"});
			}
			this.start();
		}
	}
	,__class__: lime_utils_Preloader
};
var lime_utils_Resource = {};
lime_utils_Resource._new = function(size) {
	if(size == null) {
		size = 0;
	}
	var this1 = new haxe_io_Bytes(new ArrayBuffer(size));
	return this1;
};
lime_utils_Resource.__fromString = function(value) {
	return haxe_io_Bytes.ofString(value);
};
lime_utils_Resource.__toString = function(value) {
	return value.toString();
};
var lime_utils_UInt16Array = {};
lime_utils_UInt16Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_UInt16Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Uint16Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Uint16Array(bytes.b.bufferValue,byteOffset);
	}
	return new Uint16Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_UInt16Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_UInt16Array.toString = function(this1) {
	if(this1 != null) {
		return "UInt16Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_UInt32Array = {};
lime_utils_UInt32Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_UInt32Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Uint32Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Uint32Array(bytes.b.bufferValue,byteOffset);
	}
	return new Uint32Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_UInt32Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_UInt32Array.toString = function(this1) {
	if(this1 != null) {
		return "UInt32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_UInt8Array = {};
lime_utils_UInt8Array.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_UInt8Array.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		return new Uint8Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Uint8Array(bytes.b.bufferValue,byteOffset);
	}
	return new Uint8Array(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_UInt8Array.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_UInt8Array.toString = function(this1) {
	if(this1 != null) {
		return "UInt8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
var lime_utils_UInt8ClampedArray = {};
lime_utils_UInt8ClampedArray.toArrayBufferView = function(this1) {
	return this1;
};
lime_utils_UInt8ClampedArray.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Uint8ClampedArray(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Uint8ClampedArray(bytes.b.bufferValue,byteOffset);
	}
	return new Uint8ClampedArray(bytes.b.bufferValue,byteOffset,len);
};
lime_utils_UInt8ClampedArray.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils_UInt8ClampedArray.toString = function(this1) {
	if(this1 != null) {
		return "UInt8ClampedArray [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
};
lime_utils_UInt8ClampedArray._clamp = function(_in) {
	var _out = _in | 0;
	if(_out > 255) {
		_out = 255;
	}
	if(_out < 0) {
		return 0;
	} else {
		return _out;
	}
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
var _init = lime__$internal_backend_html5_HTML5Application;
var init = lime_app_Application;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
$hxClasses["Math"] = Math;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = $hxClasses["String"] = String;
String.__name__ = "String";
$hxClasses["Array"] = Array;
Array.__name__ = "Array";
Date.prototype.__class__ = $hxClasses["Date"] = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl;
}
var array = null;
var view = null;
var buffer = null;
var len = null;
var this1 = new Uint32Array(256);
lime_math_RGBA.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	lime_math_RGBA.__alpha16[i] = Math.ceil(i * 257.003921568627447);
}
var array = null;
var view = null;
var buffer = null;
var len = null;
var this1 = new Uint8Array(511);
lime_math_RGBA.__clamp = this1;
var _g = 0;
while(_g < 255) {
	var i = _g++;
	lime_math_RGBA.__clamp[i] = i;
}
var _g = 255;
var _g1 = 511;
while(_g < _g1) {
	var i = _g++;
	lime_math_RGBA.__clamp[i] = 255;
}
lime_system_CFFI.available = false;
lime_system_CFFI.enabled = false;
lime_utils_Log.level = 3;
if(typeof console == "undefined") {
	console = {}
}
if(console.log == null) {
	console.log = function() {
	};
}
Shader.webFragment = "precision mediump float;\n";
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = new haxe__$Unserializer_DefaultResolver();
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1];
haxe_zip_InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1];
haxe_zip_InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
haxe_zip_InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
lime__$internal_backend_html5_HTML5HTTPRequest.OPTION_REVOKE_URL = 1;
lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests = 0;
lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit = 17;
lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue = new haxe_ds_List();
lime__$internal_backend_html5_HTML5Window.dummyCharacter = "";
lime__$internal_backend_html5_HTML5Window.windowID = 0;
lime__$internal_format_Base64.DICTIONARY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
lime__$internal_format_Base64.EXTENDED_DICTIONARY = (function($this) {
	var $r;
	var result = [];
	{
		var _g = 0;
		var _g1 = lime__$internal_format_Base64.DICTIONARY;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = lime__$internal_format_Base64.DICTIONARY;
			while(_g2 < _g3.length) {
				var b = _g3[_g2];
				++_g2;
				result.push(a + b);
			}
		}
	}
	$r = result;
	return $r;
}(this));
lime__$internal_graphics_StackBlur.MUL_TABLE = [1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1];
lime__$internal_graphics_StackBlur.SHG_TABLE = [0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9];
lime_graphics_opengl_GL.DEPTH_BUFFER_BIT = 256;
lime_graphics_opengl_GL.STENCIL_BUFFER_BIT = 1024;
lime_graphics_opengl_GL.COLOR_BUFFER_BIT = 16384;
lime_graphics_opengl_GL.POINTS = 0;
lime_graphics_opengl_GL.LINES = 1;
lime_graphics_opengl_GL.LINE_LOOP = 2;
lime_graphics_opengl_GL.LINE_STRIP = 3;
lime_graphics_opengl_GL.TRIANGLES = 4;
lime_graphics_opengl_GL.TRIANGLE_STRIP = 5;
lime_graphics_opengl_GL.TRIANGLE_FAN = 6;
lime_graphics_opengl_GL.ZERO = 0;
lime_graphics_opengl_GL.ONE = 1;
lime_graphics_opengl_GL.SRC_COLOR = 768;
lime_graphics_opengl_GL.ONE_MINUS_SRC_COLOR = 769;
lime_graphics_opengl_GL.SRC_ALPHA = 770;
lime_graphics_opengl_GL.ONE_MINUS_SRC_ALPHA = 771;
lime_graphics_opengl_GL.DST_ALPHA = 772;
lime_graphics_opengl_GL.ONE_MINUS_DST_ALPHA = 773;
lime_graphics_opengl_GL.DST_COLOR = 774;
lime_graphics_opengl_GL.ONE_MINUS_DST_COLOR = 775;
lime_graphics_opengl_GL.SRC_ALPHA_SATURATE = 776;
lime_graphics_opengl_GL.FUNC_ADD = 32774;
lime_graphics_opengl_GL.BLEND_EQUATION = 32777;
lime_graphics_opengl_GL.BLEND_EQUATION_RGB = 32777;
lime_graphics_opengl_GL.BLEND_EQUATION_ALPHA = 34877;
lime_graphics_opengl_GL.FUNC_SUBTRACT = 32778;
lime_graphics_opengl_GL.FUNC_REVERSE_SUBTRACT = 32779;
lime_graphics_opengl_GL.BLEND_DST_RGB = 32968;
lime_graphics_opengl_GL.BLEND_SRC_RGB = 32969;
lime_graphics_opengl_GL.BLEND_DST_ALPHA = 32970;
lime_graphics_opengl_GL.BLEND_SRC_ALPHA = 32971;
lime_graphics_opengl_GL.CONSTANT_COLOR = 32769;
lime_graphics_opengl_GL.ONE_MINUS_CONSTANT_COLOR = 32770;
lime_graphics_opengl_GL.CONSTANT_ALPHA = 32771;
lime_graphics_opengl_GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
lime_graphics_opengl_GL.BLEND_COLOR = 32773;
lime_graphics_opengl_GL.ARRAY_BUFFER = 34962;
lime_graphics_opengl_GL.ELEMENT_ARRAY_BUFFER = 34963;
lime_graphics_opengl_GL.ARRAY_BUFFER_BINDING = 34964;
lime_graphics_opengl_GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
lime_graphics_opengl_GL.STREAM_DRAW = 35040;
lime_graphics_opengl_GL.STATIC_DRAW = 35044;
lime_graphics_opengl_GL.DYNAMIC_DRAW = 35048;
lime_graphics_opengl_GL.BUFFER_SIZE = 34660;
lime_graphics_opengl_GL.BUFFER_USAGE = 34661;
lime_graphics_opengl_GL.CURRENT_VERTEX_ATTRIB = 34342;
lime_graphics_opengl_GL.FRONT = 1028;
lime_graphics_opengl_GL.BACK = 1029;
lime_graphics_opengl_GL.FRONT_AND_BACK = 1032;
lime_graphics_opengl_GL.CULL_FACE = 2884;
lime_graphics_opengl_GL.BLEND = 3042;
lime_graphics_opengl_GL.DITHER = 3024;
lime_graphics_opengl_GL.STENCIL_TEST = 2960;
lime_graphics_opengl_GL.DEPTH_TEST = 2929;
lime_graphics_opengl_GL.SCISSOR_TEST = 3089;
lime_graphics_opengl_GL.POLYGON_OFFSET_FILL = 32823;
lime_graphics_opengl_GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
lime_graphics_opengl_GL.SAMPLE_COVERAGE = 32928;
lime_graphics_opengl_GL.NO_ERROR = 0;
lime_graphics_opengl_GL.INVALID_ENUM = 1280;
lime_graphics_opengl_GL.INVALID_VALUE = 1281;
lime_graphics_opengl_GL.INVALID_OPERATION = 1282;
lime_graphics_opengl_GL.OUT_OF_MEMORY = 1285;
lime_graphics_opengl_GL.CW = 2304;
lime_graphics_opengl_GL.CCW = 2305;
lime_graphics_opengl_GL.LINE_WIDTH = 2849;
lime_graphics_opengl_GL.ALIASED_POINT_SIZE_RANGE = 33901;
lime_graphics_opengl_GL.ALIASED_LINE_WIDTH_RANGE = 33902;
lime_graphics_opengl_GL.CULL_FACE_MODE = 2885;
lime_graphics_opengl_GL.FRONT_FACE = 2886;
lime_graphics_opengl_GL.DEPTH_RANGE = 2928;
lime_graphics_opengl_GL.DEPTH_WRITEMASK = 2930;
lime_graphics_opengl_GL.DEPTH_CLEAR_VALUE = 2931;
lime_graphics_opengl_GL.DEPTH_FUNC = 2932;
lime_graphics_opengl_GL.STENCIL_CLEAR_VALUE = 2961;
lime_graphics_opengl_GL.STENCIL_FUNC = 2962;
lime_graphics_opengl_GL.STENCIL_FAIL = 2964;
lime_graphics_opengl_GL.STENCIL_PASS_DEPTH_FAIL = 2965;
lime_graphics_opengl_GL.STENCIL_PASS_DEPTH_PASS = 2966;
lime_graphics_opengl_GL.STENCIL_REF = 2967;
lime_graphics_opengl_GL.STENCIL_VALUE_MASK = 2963;
lime_graphics_opengl_GL.STENCIL_WRITEMASK = 2968;
lime_graphics_opengl_GL.STENCIL_BACK_FUNC = 34816;
lime_graphics_opengl_GL.STENCIL_BACK_FAIL = 34817;
lime_graphics_opengl_GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
lime_graphics_opengl_GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
lime_graphics_opengl_GL.STENCIL_BACK_REF = 36003;
lime_graphics_opengl_GL.STENCIL_BACK_VALUE_MASK = 36004;
lime_graphics_opengl_GL.STENCIL_BACK_WRITEMASK = 36005;
lime_graphics_opengl_GL.VIEWPORT = 2978;
lime_graphics_opengl_GL.SCISSOR_BOX = 3088;
lime_graphics_opengl_GL.COLOR_CLEAR_VALUE = 3106;
lime_graphics_opengl_GL.COLOR_WRITEMASK = 3107;
lime_graphics_opengl_GL.UNPACK_ALIGNMENT = 3317;
lime_graphics_opengl_GL.PACK_ALIGNMENT = 3333;
lime_graphics_opengl_GL.MAX_TEXTURE_SIZE = 3379;
lime_graphics_opengl_GL.MAX_VIEWPORT_DIMS = 3386;
lime_graphics_opengl_GL.SUBPIXEL_BITS = 3408;
lime_graphics_opengl_GL.RED_BITS = 3410;
lime_graphics_opengl_GL.GREEN_BITS = 3411;
lime_graphics_opengl_GL.BLUE_BITS = 3412;
lime_graphics_opengl_GL.ALPHA_BITS = 3413;
lime_graphics_opengl_GL.DEPTH_BITS = 3414;
lime_graphics_opengl_GL.STENCIL_BITS = 3415;
lime_graphics_opengl_GL.POLYGON_OFFSET_UNITS = 10752;
lime_graphics_opengl_GL.POLYGON_OFFSET_FACTOR = 32824;
lime_graphics_opengl_GL.TEXTURE_BINDING_2D = 32873;
lime_graphics_opengl_GL.SAMPLE_BUFFERS = 32936;
lime_graphics_opengl_GL.SAMPLES = 32937;
lime_graphics_opengl_GL.SAMPLE_COVERAGE_VALUE = 32938;
lime_graphics_opengl_GL.SAMPLE_COVERAGE_INVERT = 32939;
lime_graphics_opengl_GL.NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
lime_graphics_opengl_GL.COMPRESSED_TEXTURE_FORMATS = 34467;
lime_graphics_opengl_GL.DONT_CARE = 4352;
lime_graphics_opengl_GL.FASTEST = 4353;
lime_graphics_opengl_GL.NICEST = 4354;
lime_graphics_opengl_GL.GENERATE_MIPMAP_HINT = 33170;
lime_graphics_opengl_GL.BYTE = 5120;
lime_graphics_opengl_GL.UNSIGNED_BYTE = 5121;
lime_graphics_opengl_GL.SHORT = 5122;
lime_graphics_opengl_GL.UNSIGNED_SHORT = 5123;
lime_graphics_opengl_GL.INT = 5124;
lime_graphics_opengl_GL.UNSIGNED_INT = 5125;
lime_graphics_opengl_GL.FLOAT = 5126;
lime_graphics_opengl_GL.DEPTH_COMPONENT = 6402;
lime_graphics_opengl_GL.ALPHA = 6406;
lime_graphics_opengl_GL.RGB = 6407;
lime_graphics_opengl_GL.RGBA = 6408;
lime_graphics_opengl_GL.LUMINANCE = 6409;
lime_graphics_opengl_GL.LUMINANCE_ALPHA = 6410;
lime_graphics_opengl_GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
lime_graphics_opengl_GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
lime_graphics_opengl_GL.UNSIGNED_SHORT_5_6_5 = 33635;
lime_graphics_opengl_GL.FRAGMENT_SHADER = 35632;
lime_graphics_opengl_GL.VERTEX_SHADER = 35633;
lime_graphics_opengl_GL.MAX_VERTEX_ATTRIBS = 34921;
lime_graphics_opengl_GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
lime_graphics_opengl_GL.MAX_VARYING_VECTORS = 36348;
lime_graphics_opengl_GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
lime_graphics_opengl_GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
lime_graphics_opengl_GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
lime_graphics_opengl_GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
lime_graphics_opengl_GL.SHADER_TYPE = 35663;
lime_graphics_opengl_GL.DELETE_STATUS = 35712;
lime_graphics_opengl_GL.LINK_STATUS = 35714;
lime_graphics_opengl_GL.VALIDATE_STATUS = 35715;
lime_graphics_opengl_GL.ATTACHED_SHADERS = 35717;
lime_graphics_opengl_GL.ACTIVE_UNIFORMS = 35718;
lime_graphics_opengl_GL.ACTIVE_ATTRIBUTES = 35721;
lime_graphics_opengl_GL.SHADING_LANGUAGE_VERSION = 35724;
lime_graphics_opengl_GL.CURRENT_PROGRAM = 35725;
lime_graphics_opengl_GL.NEVER = 512;
lime_graphics_opengl_GL.LESS = 513;
lime_graphics_opengl_GL.EQUAL = 514;
lime_graphics_opengl_GL.LEQUAL = 515;
lime_graphics_opengl_GL.GREATER = 516;
lime_graphics_opengl_GL.NOTEQUAL = 517;
lime_graphics_opengl_GL.GEQUAL = 518;
lime_graphics_opengl_GL.ALWAYS = 519;
lime_graphics_opengl_GL.KEEP = 7680;
lime_graphics_opengl_GL.REPLACE = 7681;
lime_graphics_opengl_GL.INCR = 7682;
lime_graphics_opengl_GL.DECR = 7683;
lime_graphics_opengl_GL.INVERT = 5386;
lime_graphics_opengl_GL.INCR_WRAP = 34055;
lime_graphics_opengl_GL.DECR_WRAP = 34056;
lime_graphics_opengl_GL.VENDOR = 7936;
lime_graphics_opengl_GL.RENDERER = 7937;
lime_graphics_opengl_GL.VERSION = 7938;
lime_graphics_opengl_GL.EXTENSIONS = 7939;
lime_graphics_opengl_GL.NEAREST = 9728;
lime_graphics_opengl_GL.LINEAR = 9729;
lime_graphics_opengl_GL.NEAREST_MIPMAP_NEAREST = 9984;
lime_graphics_opengl_GL.LINEAR_MIPMAP_NEAREST = 9985;
lime_graphics_opengl_GL.NEAREST_MIPMAP_LINEAR = 9986;
lime_graphics_opengl_GL.LINEAR_MIPMAP_LINEAR = 9987;
lime_graphics_opengl_GL.TEXTURE_MAG_FILTER = 10240;
lime_graphics_opengl_GL.TEXTURE_MIN_FILTER = 10241;
lime_graphics_opengl_GL.TEXTURE_WRAP_S = 10242;
lime_graphics_opengl_GL.TEXTURE_WRAP_T = 10243;
lime_graphics_opengl_GL.TEXTURE_2D = 3553;
lime_graphics_opengl_GL.TEXTURE = 5890;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP = 34067;
lime_graphics_opengl_GL.TEXTURE_BINDING_CUBE_MAP = 34068;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
lime_graphics_opengl_GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
lime_graphics_opengl_GL.TEXTURE0 = 33984;
lime_graphics_opengl_GL.TEXTURE1 = 33985;
lime_graphics_opengl_GL.TEXTURE2 = 33986;
lime_graphics_opengl_GL.TEXTURE3 = 33987;
lime_graphics_opengl_GL.TEXTURE4 = 33988;
lime_graphics_opengl_GL.TEXTURE5 = 33989;
lime_graphics_opengl_GL.TEXTURE6 = 33990;
lime_graphics_opengl_GL.TEXTURE7 = 33991;
lime_graphics_opengl_GL.TEXTURE8 = 33992;
lime_graphics_opengl_GL.TEXTURE9 = 33993;
lime_graphics_opengl_GL.TEXTURE10 = 33994;
lime_graphics_opengl_GL.TEXTURE11 = 33995;
lime_graphics_opengl_GL.TEXTURE12 = 33996;
lime_graphics_opengl_GL.TEXTURE13 = 33997;
lime_graphics_opengl_GL.TEXTURE14 = 33998;
lime_graphics_opengl_GL.TEXTURE15 = 33999;
lime_graphics_opengl_GL.TEXTURE16 = 34000;
lime_graphics_opengl_GL.TEXTURE17 = 34001;
lime_graphics_opengl_GL.TEXTURE18 = 34002;
lime_graphics_opengl_GL.TEXTURE19 = 34003;
lime_graphics_opengl_GL.TEXTURE20 = 34004;
lime_graphics_opengl_GL.TEXTURE21 = 34005;
lime_graphics_opengl_GL.TEXTURE22 = 34006;
lime_graphics_opengl_GL.TEXTURE23 = 34007;
lime_graphics_opengl_GL.TEXTURE24 = 34008;
lime_graphics_opengl_GL.TEXTURE25 = 34009;
lime_graphics_opengl_GL.TEXTURE26 = 34010;
lime_graphics_opengl_GL.TEXTURE27 = 34011;
lime_graphics_opengl_GL.TEXTURE28 = 34012;
lime_graphics_opengl_GL.TEXTURE29 = 34013;
lime_graphics_opengl_GL.TEXTURE30 = 34014;
lime_graphics_opengl_GL.TEXTURE31 = 34015;
lime_graphics_opengl_GL.ACTIVE_TEXTURE = 34016;
lime_graphics_opengl_GL.REPEAT = 10497;
lime_graphics_opengl_GL.CLAMP_TO_EDGE = 33071;
lime_graphics_opengl_GL.MIRRORED_REPEAT = 33648;
lime_graphics_opengl_GL.FLOAT_VEC2 = 35664;
lime_graphics_opengl_GL.FLOAT_VEC3 = 35665;
lime_graphics_opengl_GL.FLOAT_VEC4 = 35666;
lime_graphics_opengl_GL.INT_VEC2 = 35667;
lime_graphics_opengl_GL.INT_VEC3 = 35668;
lime_graphics_opengl_GL.INT_VEC4 = 35669;
lime_graphics_opengl_GL.BOOL = 35670;
lime_graphics_opengl_GL.BOOL_VEC2 = 35671;
lime_graphics_opengl_GL.BOOL_VEC3 = 35672;
lime_graphics_opengl_GL.BOOL_VEC4 = 35673;
lime_graphics_opengl_GL.FLOAT_MAT2 = 35674;
lime_graphics_opengl_GL.FLOAT_MAT3 = 35675;
lime_graphics_opengl_GL.FLOAT_MAT4 = 35676;
lime_graphics_opengl_GL.SAMPLER_2D = 35678;
lime_graphics_opengl_GL.SAMPLER_CUBE = 35680;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
lime_graphics_opengl_GL.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
lime_graphics_opengl_GL.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
lime_graphics_opengl_GL.VERTEX_PROGRAM_POINT_SIZE = 34370;
lime_graphics_opengl_GL.POINT_SPRITE = 34913;
lime_graphics_opengl_GL.COMPILE_STATUS = 35713;
lime_graphics_opengl_GL.LOW_FLOAT = 36336;
lime_graphics_opengl_GL.MEDIUM_FLOAT = 36337;
lime_graphics_opengl_GL.HIGH_FLOAT = 36338;
lime_graphics_opengl_GL.LOW_INT = 36339;
lime_graphics_opengl_GL.MEDIUM_INT = 36340;
lime_graphics_opengl_GL.HIGH_INT = 36341;
lime_graphics_opengl_GL.FRAMEBUFFER = 36160;
lime_graphics_opengl_GL.RENDERBUFFER = 36161;
lime_graphics_opengl_GL.RGBA4 = 32854;
lime_graphics_opengl_GL.RGB5_A1 = 32855;
lime_graphics_opengl_GL.RGB565 = 36194;
lime_graphics_opengl_GL.DEPTH_COMPONENT16 = 33189;
lime_graphics_opengl_GL.STENCIL_INDEX = 6401;
lime_graphics_opengl_GL.STENCIL_INDEX8 = 36168;
lime_graphics_opengl_GL.DEPTH_STENCIL = 34041;
lime_graphics_opengl_GL.RENDERBUFFER_WIDTH = 36162;
lime_graphics_opengl_GL.RENDERBUFFER_HEIGHT = 36163;
lime_graphics_opengl_GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
lime_graphics_opengl_GL.RENDERBUFFER_RED_SIZE = 36176;
lime_graphics_opengl_GL.RENDERBUFFER_GREEN_SIZE = 36177;
lime_graphics_opengl_GL.RENDERBUFFER_BLUE_SIZE = 36178;
lime_graphics_opengl_GL.RENDERBUFFER_ALPHA_SIZE = 36179;
lime_graphics_opengl_GL.RENDERBUFFER_DEPTH_SIZE = 36180;
lime_graphics_opengl_GL.RENDERBUFFER_STENCIL_SIZE = 36181;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
lime_graphics_opengl_GL.COLOR_ATTACHMENT0 = 36064;
lime_graphics_opengl_GL.DEPTH_ATTACHMENT = 36096;
lime_graphics_opengl_GL.STENCIL_ATTACHMENT = 36128;
lime_graphics_opengl_GL.DEPTH_STENCIL_ATTACHMENT = 33306;
lime_graphics_opengl_GL.NONE = 0;
lime_graphics_opengl_GL.FRAMEBUFFER_COMPLETE = 36053;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
lime_graphics_opengl_GL.FRAMEBUFFER_UNSUPPORTED = 36061;
lime_graphics_opengl_GL.FRAMEBUFFER_BINDING = 36006;
lime_graphics_opengl_GL.RENDERBUFFER_BINDING = 36007;
lime_graphics_opengl_GL.MAX_RENDERBUFFER_SIZE = 34024;
lime_graphics_opengl_GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
lime_graphics_opengl_GL.UNPACK_FLIP_Y_WEBGL = 37440;
lime_graphics_opengl_GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
lime_graphics_opengl_GL.CONTEXT_LOST_WEBGL = 37442;
lime_graphics_opengl_GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
lime_graphics_opengl_GL.BROWSER_DEFAULT_WEBGL = 37444;
lime_graphics_opengl_GL.READ_BUFFER = 3074;
lime_graphics_opengl_GL.UNPACK_ROW_LENGTH = 3314;
lime_graphics_opengl_GL.UNPACK_SKIP_ROWS = 3315;
lime_graphics_opengl_GL.UNPACK_SKIP_PIXELS = 3316;
lime_graphics_opengl_GL.PACK_ROW_LENGTH = 3330;
lime_graphics_opengl_GL.PACK_SKIP_ROWS = 3331;
lime_graphics_opengl_GL.PACK_SKIP_PIXELS = 3332;
lime_graphics_opengl_GL.TEXTURE_BINDING_3D = 32874;
lime_graphics_opengl_GL.UNPACK_SKIP_IMAGES = 32877;
lime_graphics_opengl_GL.UNPACK_IMAGE_HEIGHT = 32878;
lime_graphics_opengl_GL.MAX_3D_TEXTURE_SIZE = 32883;
lime_graphics_opengl_GL.MAX_ELEMENTS_VERTICES = 33000;
lime_graphics_opengl_GL.MAX_ELEMENTS_INDICES = 33001;
lime_graphics_opengl_GL.MAX_TEXTURE_LOD_BIAS = 34045;
lime_graphics_opengl_GL.MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657;
lime_graphics_opengl_GL.MAX_VERTEX_UNIFORM_COMPONENTS = 35658;
lime_graphics_opengl_GL.MAX_ARRAY_TEXTURE_LAYERS = 35071;
lime_graphics_opengl_GL.MIN_PROGRAM_TEXEL_OFFSET = 35076;
lime_graphics_opengl_GL.MAX_PROGRAM_TEXEL_OFFSET = 35077;
lime_graphics_opengl_GL.MAX_VARYING_COMPONENTS = 35659;
lime_graphics_opengl_GL.FRAGMENT_SHADER_DERIVATIVE_HINT = 35723;
lime_graphics_opengl_GL.RASTERIZER_DISCARD = 35977;
lime_graphics_opengl_GL.VERTEX_ARRAY_BINDING = 34229;
lime_graphics_opengl_GL.MAX_VERTEX_OUTPUT_COMPONENTS = 37154;
lime_graphics_opengl_GL.MAX_FRAGMENT_INPUT_COMPONENTS = 37157;
lime_graphics_opengl_GL.MAX_SERVER_WAIT_TIMEOUT = 37137;
lime_graphics_opengl_GL.MAX_ELEMENT_INDEX = 36203;
lime_graphics_opengl_GL.RED = 6403;
lime_graphics_opengl_GL.RGB8 = 32849;
lime_graphics_opengl_GL.RGBA8 = 32856;
lime_graphics_opengl_GL.RGB10_A2 = 32857;
lime_graphics_opengl_GL.TEXTURE_3D = 32879;
lime_graphics_opengl_GL.TEXTURE_WRAP_R = 32882;
lime_graphics_opengl_GL.TEXTURE_MIN_LOD = 33082;
lime_graphics_opengl_GL.TEXTURE_MAX_LOD = 33083;
lime_graphics_opengl_GL.TEXTURE_BASE_LEVEL = 33084;
lime_graphics_opengl_GL.TEXTURE_MAX_LEVEL = 33085;
lime_graphics_opengl_GL.TEXTURE_COMPARE_MODE = 34892;
lime_graphics_opengl_GL.TEXTURE_COMPARE_FUNC = 34893;
lime_graphics_opengl_GL.SRGB = 35904;
lime_graphics_opengl_GL.SRGB8 = 35905;
lime_graphics_opengl_GL.SRGB8_ALPHA8 = 35907;
lime_graphics_opengl_GL.COMPARE_REF_TO_TEXTURE = 34894;
lime_graphics_opengl_GL.RGBA32F = 34836;
lime_graphics_opengl_GL.RGB32F = 34837;
lime_graphics_opengl_GL.RGBA16F = 34842;
lime_graphics_opengl_GL.RGB16F = 34843;
lime_graphics_opengl_GL.TEXTURE_2D_ARRAY = 35866;
lime_graphics_opengl_GL.TEXTURE_BINDING_2D_ARRAY = 35869;
lime_graphics_opengl_GL.R11F_G11F_B10F = 35898;
lime_graphics_opengl_GL.RGB9_E5 = 35901;
lime_graphics_opengl_GL.RGBA32UI = 36208;
lime_graphics_opengl_GL.RGB32UI = 36209;
lime_graphics_opengl_GL.RGBA16UI = 36214;
lime_graphics_opengl_GL.RGB16UI = 36215;
lime_graphics_opengl_GL.RGBA8UI = 36220;
lime_graphics_opengl_GL.RGB8UI = 36221;
lime_graphics_opengl_GL.RGBA32I = 36226;
lime_graphics_opengl_GL.RGB32I = 36227;
lime_graphics_opengl_GL.RGBA16I = 36232;
lime_graphics_opengl_GL.RGB16I = 36233;
lime_graphics_opengl_GL.RGBA8I = 36238;
lime_graphics_opengl_GL.RGB8I = 36239;
lime_graphics_opengl_GL.RED_INTEGER = 36244;
lime_graphics_opengl_GL.RGB_INTEGER = 36248;
lime_graphics_opengl_GL.RGBA_INTEGER = 36249;
lime_graphics_opengl_GL.R8 = 33321;
lime_graphics_opengl_GL.RG8 = 33323;
lime_graphics_opengl_GL.R16F = 33325;
lime_graphics_opengl_GL.R32F = 33326;
lime_graphics_opengl_GL.RG16F = 33327;
lime_graphics_opengl_GL.RG32F = 33328;
lime_graphics_opengl_GL.R8I = 33329;
lime_graphics_opengl_GL.R8UI = 33330;
lime_graphics_opengl_GL.R16I = 33331;
lime_graphics_opengl_GL.R16UI = 33332;
lime_graphics_opengl_GL.R32I = 33333;
lime_graphics_opengl_GL.R32UI = 33334;
lime_graphics_opengl_GL.RG8I = 33335;
lime_graphics_opengl_GL.RG8UI = 33336;
lime_graphics_opengl_GL.RG16I = 33337;
lime_graphics_opengl_GL.RG16UI = 33338;
lime_graphics_opengl_GL.RG32I = 33339;
lime_graphics_opengl_GL.RG32UI = 33340;
lime_graphics_opengl_GL.R8_SNORM = 36756;
lime_graphics_opengl_GL.RG8_SNORM = 36757;
lime_graphics_opengl_GL.RGB8_SNORM = 36758;
lime_graphics_opengl_GL.RGBA8_SNORM = 36759;
lime_graphics_opengl_GL.RGB10_A2UI = 36975;
lime_graphics_opengl_GL.TEXTURE_IMMUTABLE_FORMAT = 37167;
lime_graphics_opengl_GL.TEXTURE_IMMUTABLE_LEVELS = 33503;
lime_graphics_opengl_GL.UNSIGNED_INT_2_10_10_10_REV = 33640;
lime_graphics_opengl_GL.UNSIGNED_INT_10F_11F_11F_REV = 35899;
lime_graphics_opengl_GL.UNSIGNED_INT_5_9_9_9_REV = 35902;
lime_graphics_opengl_GL.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
lime_graphics_opengl_GL.UNSIGNED_INT_24_8 = 34042;
lime_graphics_opengl_GL.HALF_FLOAT = 5131;
lime_graphics_opengl_GL.RG = 33319;
lime_graphics_opengl_GL.RG_INTEGER = 33320;
lime_graphics_opengl_GL.INT_2_10_10_10_REV = 36255;
lime_graphics_opengl_GL.CURRENT_QUERY = 34917;
lime_graphics_opengl_GL.QUERY_RESULT = 34918;
lime_graphics_opengl_GL.QUERY_RESULT_AVAILABLE = 34919;
lime_graphics_opengl_GL.ANY_SAMPLES_PASSED = 35887;
lime_graphics_opengl_GL.ANY_SAMPLES_PASSED_CONSERVATIVE = 36202;
lime_graphics_opengl_GL.MAX_DRAW_BUFFERS = 34852;
lime_graphics_opengl_GL.DRAW_BUFFER0 = 34853;
lime_graphics_opengl_GL.DRAW_BUFFER1 = 34854;
lime_graphics_opengl_GL.DRAW_BUFFER2 = 34855;
lime_graphics_opengl_GL.DRAW_BUFFER3 = 34856;
lime_graphics_opengl_GL.DRAW_BUFFER4 = 34857;
lime_graphics_opengl_GL.DRAW_BUFFER5 = 34858;
lime_graphics_opengl_GL.DRAW_BUFFER6 = 34859;
lime_graphics_opengl_GL.DRAW_BUFFER7 = 34860;
lime_graphics_opengl_GL.DRAW_BUFFER8 = 34861;
lime_graphics_opengl_GL.DRAW_BUFFER9 = 34862;
lime_graphics_opengl_GL.DRAW_BUFFER10 = 34863;
lime_graphics_opengl_GL.DRAW_BUFFER11 = 34864;
lime_graphics_opengl_GL.DRAW_BUFFER12 = 34865;
lime_graphics_opengl_GL.DRAW_BUFFER13 = 34866;
lime_graphics_opengl_GL.DRAW_BUFFER14 = 34867;
lime_graphics_opengl_GL.DRAW_BUFFER15 = 34868;
lime_graphics_opengl_GL.MAX_COLOR_ATTACHMENTS = 36063;
lime_graphics_opengl_GL.COLOR_ATTACHMENT1 = 36065;
lime_graphics_opengl_GL.COLOR_ATTACHMENT2 = 36066;
lime_graphics_opengl_GL.COLOR_ATTACHMENT3 = 36067;
lime_graphics_opengl_GL.COLOR_ATTACHMENT4 = 36068;
lime_graphics_opengl_GL.COLOR_ATTACHMENT5 = 36069;
lime_graphics_opengl_GL.COLOR_ATTACHMENT6 = 36070;
lime_graphics_opengl_GL.COLOR_ATTACHMENT7 = 36071;
lime_graphics_opengl_GL.COLOR_ATTACHMENT8 = 36072;
lime_graphics_opengl_GL.COLOR_ATTACHMENT9 = 36073;
lime_graphics_opengl_GL.COLOR_ATTACHMENT10 = 36074;
lime_graphics_opengl_GL.COLOR_ATTACHMENT11 = 36075;
lime_graphics_opengl_GL.COLOR_ATTACHMENT12 = 36076;
lime_graphics_opengl_GL.COLOR_ATTACHMENT13 = 36077;
lime_graphics_opengl_GL.COLOR_ATTACHMENT14 = 36078;
lime_graphics_opengl_GL.COLOR_ATTACHMENT15 = 36079;
lime_graphics_opengl_GL.SAMPLER_3D = 35679;
lime_graphics_opengl_GL.SAMPLER_2D_SHADOW = 35682;
lime_graphics_opengl_GL.SAMPLER_2D_ARRAY = 36289;
lime_graphics_opengl_GL.SAMPLER_2D_ARRAY_SHADOW = 36292;
lime_graphics_opengl_GL.SAMPLER_CUBE_SHADOW = 36293;
lime_graphics_opengl_GL.INT_SAMPLER_2D = 36298;
lime_graphics_opengl_GL.INT_SAMPLER_3D = 36299;
lime_graphics_opengl_GL.INT_SAMPLER_CUBE = 36300;
lime_graphics_opengl_GL.INT_SAMPLER_2D_ARRAY = 36303;
lime_graphics_opengl_GL.UNSIGNED_INT_SAMPLER_2D = 36306;
lime_graphics_opengl_GL.UNSIGNED_INT_SAMPLER_3D = 36307;
lime_graphics_opengl_GL.UNSIGNED_INT_SAMPLER_CUBE = 36308;
lime_graphics_opengl_GL.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311;
lime_graphics_opengl_GL.MAX_SAMPLES = 36183;
lime_graphics_opengl_GL.SAMPLER_BINDING = 35097;
lime_graphics_opengl_GL.PIXEL_PACK_BUFFER = 35051;
lime_graphics_opengl_GL.PIXEL_UNPACK_BUFFER = 35052;
lime_graphics_opengl_GL.PIXEL_PACK_BUFFER_BINDING = 35053;
lime_graphics_opengl_GL.PIXEL_UNPACK_BUFFER_BINDING = 35055;
lime_graphics_opengl_GL.COPY_READ_BUFFER = 36662;
lime_graphics_opengl_GL.COPY_WRITE_BUFFER = 36663;
lime_graphics_opengl_GL.COPY_READ_BUFFER_BINDING = 36662;
lime_graphics_opengl_GL.COPY_WRITE_BUFFER_BINDING = 36663;
lime_graphics_opengl_GL.FLOAT_MAT2x3 = 35685;
lime_graphics_opengl_GL.FLOAT_MAT2x4 = 35686;
lime_graphics_opengl_GL.FLOAT_MAT3x2 = 35687;
lime_graphics_opengl_GL.FLOAT_MAT3x4 = 35688;
lime_graphics_opengl_GL.FLOAT_MAT4x2 = 35689;
lime_graphics_opengl_GL.FLOAT_MAT4x3 = 35690;
lime_graphics_opengl_GL.UNSIGNED_INT_VEC2 = 36294;
lime_graphics_opengl_GL.UNSIGNED_INT_VEC3 = 36295;
lime_graphics_opengl_GL.UNSIGNED_INT_VEC4 = 36296;
lime_graphics_opengl_GL.UNSIGNED_NORMALIZED = 35863;
lime_graphics_opengl_GL.SIGNED_NORMALIZED = 36764;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_INTEGER = 35069;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_DIVISOR = 35070;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BUFFER_MODE = 35967;
lime_graphics_opengl_GL.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_VARYINGS = 35971;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BUFFER_START = 35972;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976;
lime_graphics_opengl_GL.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978;
lime_graphics_opengl_GL.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979;
lime_graphics_opengl_GL.INTERLEAVED_ATTRIBS = 35980;
lime_graphics_opengl_GL.SEPARATE_ATTRIBS = 35981;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BUFFER = 35982;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK = 36386;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_PAUSED = 36387;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_ACTIVE = 36388;
lime_graphics_opengl_GL.TRANSFORM_FEEDBACK_BINDING = 36389;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303;
lime_graphics_opengl_GL.FRAMEBUFFER_DEFAULT = 33304;
lime_graphics_opengl_GL.DEPTH24_STENCIL8 = 35056;
lime_graphics_opengl_GL.DRAW_FRAMEBUFFER_BINDING = 36006;
lime_graphics_opengl_GL.READ_FRAMEBUFFER = 36008;
lime_graphics_opengl_GL.DRAW_FRAMEBUFFER = 36009;
lime_graphics_opengl_GL.READ_FRAMEBUFFER_BINDING = 36010;
lime_graphics_opengl_GL.RENDERBUFFER_SAMPLES = 36011;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182;
lime_graphics_opengl_GL.UNIFORM_BUFFER = 35345;
lime_graphics_opengl_GL.UNIFORM_BUFFER_BINDING = 35368;
lime_graphics_opengl_GL.UNIFORM_BUFFER_START = 35369;
lime_graphics_opengl_GL.UNIFORM_BUFFER_SIZE = 35370;
lime_graphics_opengl_GL.MAX_VERTEX_UNIFORM_BLOCKS = 35371;
lime_graphics_opengl_GL.MAX_FRAGMENT_UNIFORM_BLOCKS = 35373;
lime_graphics_opengl_GL.MAX_COMBINED_UNIFORM_BLOCKS = 35374;
lime_graphics_opengl_GL.MAX_UNIFORM_BUFFER_BINDINGS = 35375;
lime_graphics_opengl_GL.MAX_UNIFORM_BLOCK_SIZE = 35376;
lime_graphics_opengl_GL.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377;
lime_graphics_opengl_GL.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379;
lime_graphics_opengl_GL.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380;
lime_graphics_opengl_GL.ACTIVE_UNIFORM_BLOCKS = 35382;
lime_graphics_opengl_GL.UNIFORM_TYPE = 35383;
lime_graphics_opengl_GL.UNIFORM_SIZE = 35384;
lime_graphics_opengl_GL.UNIFORM_BLOCK_INDEX = 35386;
lime_graphics_opengl_GL.UNIFORM_OFFSET = 35387;
lime_graphics_opengl_GL.UNIFORM_ARRAY_STRIDE = 35388;
lime_graphics_opengl_GL.UNIFORM_MATRIX_STRIDE = 35389;
lime_graphics_opengl_GL.UNIFORM_IS_ROW_MAJOR = 35390;
lime_graphics_opengl_GL.UNIFORM_BLOCK_BINDING = 35391;
lime_graphics_opengl_GL.UNIFORM_BLOCK_DATA_SIZE = 35392;
lime_graphics_opengl_GL.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394;
lime_graphics_opengl_GL.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395;
lime_graphics_opengl_GL.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396;
lime_graphics_opengl_GL.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398;
lime_graphics_opengl_GL.OBJECT_TYPE = 37138;
lime_graphics_opengl_GL.SYNC_CONDITION = 37139;
lime_graphics_opengl_GL.SYNC_STATUS = 37140;
lime_graphics_opengl_GL.SYNC_FLAGS = 37141;
lime_graphics_opengl_GL.SYNC_FENCE = 37142;
lime_graphics_opengl_GL.SYNC_GPU_COMMANDS_COMPLETE = 37143;
lime_graphics_opengl_GL.UNSIGNALED = 37144;
lime_graphics_opengl_GL.SIGNALED = 37145;
lime_graphics_opengl_GL.ALREADY_SIGNALED = 37146;
lime_graphics_opengl_GL.TIMEOUT_EXPIRED = 37147;
lime_graphics_opengl_GL.CONDITION_SATISFIED = 37148;
lime_graphics_opengl_GL.WAIT_FAILED = 37149;
lime_graphics_opengl_GL.SYNC_FLUSH_COMMANDS_BIT = 1;
lime_graphics_opengl_GL.COLOR = 6144;
lime_graphics_opengl_GL.DEPTH = 6145;
lime_graphics_opengl_GL.STENCIL = 6146;
lime_graphics_opengl_GL.MIN = 32775;
lime_graphics_opengl_GL.MAX = 32776;
lime_graphics_opengl_GL.DEPTH_COMPONENT24 = 33190;
lime_graphics_opengl_GL.STREAM_READ = 35041;
lime_graphics_opengl_GL.STREAM_COPY = 35042;
lime_graphics_opengl_GL.STATIC_READ = 35045;
lime_graphics_opengl_GL.STATIC_COPY = 35046;
lime_graphics_opengl_GL.DYNAMIC_READ = 35049;
lime_graphics_opengl_GL.DYNAMIC_COPY = 35050;
lime_graphics_opengl_GL.DEPTH_COMPONENT32F = 36012;
lime_graphics_opengl_GL.DEPTH32F_STENCIL8 = 36013;
lime_graphics_opengl_GL.INVALID_INDEX = -1;
lime_graphics_opengl_GL.TIMEOUT_IGNORED = -1;
lime_graphics_opengl_GL.MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 37447;
lime_math_ColorMatrix.__identity = [1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0];
lime_math_Matrix3.__identity = new lime_math_Matrix3();
lime_media_openal_AL.NONE = 0;
lime_media_openal_AL.FALSE = 0;
lime_media_openal_AL.TRUE = 1;
lime_media_openal_AL.SOURCE_RELATIVE = 514;
lime_media_openal_AL.CONE_INNER_ANGLE = 4097;
lime_media_openal_AL.CONE_OUTER_ANGLE = 4098;
lime_media_openal_AL.PITCH = 4099;
lime_media_openal_AL.POSITION = 4100;
lime_media_openal_AL.DIRECTION = 4101;
lime_media_openal_AL.VELOCITY = 4102;
lime_media_openal_AL.LOOPING = 4103;
lime_media_openal_AL.BUFFER = 4105;
lime_media_openal_AL.GAIN = 4106;
lime_media_openal_AL.MIN_GAIN = 4109;
lime_media_openal_AL.MAX_GAIN = 4110;
lime_media_openal_AL.ORIENTATION = 4111;
lime_media_openal_AL.SOURCE_STATE = 4112;
lime_media_openal_AL.INITIAL = 4113;
lime_media_openal_AL.PLAYING = 4114;
lime_media_openal_AL.PAUSED = 4115;
lime_media_openal_AL.STOPPED = 4116;
lime_media_openal_AL.BUFFERS_QUEUED = 4117;
lime_media_openal_AL.BUFFERS_PROCESSED = 4118;
lime_media_openal_AL.REFERENCE_DISTANCE = 4128;
lime_media_openal_AL.ROLLOFF_FACTOR = 4129;
lime_media_openal_AL.CONE_OUTER_GAIN = 4130;
lime_media_openal_AL.MAX_DISTANCE = 4131;
lime_media_openal_AL.SEC_OFFSET = 4132;
lime_media_openal_AL.SAMPLE_OFFSET = 4133;
lime_media_openal_AL.BYTE_OFFSET = 4134;
lime_media_openal_AL.SOURCE_TYPE = 4135;
lime_media_openal_AL.STATIC = 4136;
lime_media_openal_AL.STREAMING = 4137;
lime_media_openal_AL.UNDETERMINED = 4144;
lime_media_openal_AL.FORMAT_MONO8 = 4352;
lime_media_openal_AL.FORMAT_MONO16 = 4353;
lime_media_openal_AL.FORMAT_STEREO8 = 4354;
lime_media_openal_AL.FORMAT_STEREO16 = 4355;
lime_media_openal_AL.FREQUENCY = 8193;
lime_media_openal_AL.BITS = 8194;
lime_media_openal_AL.CHANNELS = 8195;
lime_media_openal_AL.SIZE = 8196;
lime_media_openal_AL.NO_ERROR = 0;
lime_media_openal_AL.INVALID_NAME = 40961;
lime_media_openal_AL.INVALID_ENUM = 40962;
lime_media_openal_AL.INVALID_VALUE = 40963;
lime_media_openal_AL.INVALID_OPERATION = 40964;
lime_media_openal_AL.OUT_OF_MEMORY = 40965;
lime_media_openal_AL.VENDOR = 45057;
lime_media_openal_AL.VERSION = 45058;
lime_media_openal_AL.RENDERER = 45059;
lime_media_openal_AL.EXTENSIONS = 45060;
lime_media_openal_AL.DOPPLER_FACTOR = 49152;
lime_media_openal_AL.SPEED_OF_SOUND = 49155;
lime_media_openal_AL.DOPPLER_VELOCITY = 49153;
lime_media_openal_AL.DISTANCE_MODEL = 53248;
lime_media_openal_AL.INVERSE_DISTANCE = 53249;
lime_media_openal_AL.INVERSE_DISTANCE_CLAMPED = 53250;
lime_media_openal_AL.LINEAR_DISTANCE = 53251;
lime_media_openal_AL.LINEAR_DISTANCE_CLAMPED = 53252;
lime_media_openal_AL.EXPONENT_DISTANCE = 53253;
lime_media_openal_AL.EXPONENT_DISTANCE_CLAMPED = 53254;
lime_media_openal_AL.METERS_PER_UNIT = 131076;
lime_media_openal_AL.DIRECT_FILTER = 131077;
lime_media_openal_AL.AUXILIARY_SEND_FILTER = 131078;
lime_media_openal_AL.AIR_ABSORPTION_FACTOR = 131079;
lime_media_openal_AL.ROOM_ROLLOFF_FACTOR = 131080;
lime_media_openal_AL.CONE_OUTER_GAINHF = 131081;
lime_media_openal_AL.DIRECT_FILTER_GAINHF_AUTO = 131082;
lime_media_openal_AL.AUXILIARY_SEND_FILTER_GAIN_AUTO = 131083;
lime_media_openal_AL.AUXILIARY_SEND_FILTER_GAINHF_AUTO = 131084;
lime_media_openal_AL.REVERB_DENSITY = 1;
lime_media_openal_AL.REVERB_DIFFUSION = 2;
lime_media_openal_AL.REVERB_GAIN = 3;
lime_media_openal_AL.REVERB_GAINHF = 4;
lime_media_openal_AL.REVERB_DECAY_TIME = 5;
lime_media_openal_AL.REVERB_DECAY_HFRATIO = 6;
lime_media_openal_AL.REVERB_REFLECTIONS_GAIN = 7;
lime_media_openal_AL.REVERB_REFLECTIONS_DELAY = 8;
lime_media_openal_AL.REVERB_LATE_REVERB_GAIN = 9;
lime_media_openal_AL.REVERB_LATE_REVERB_DELAY = 10;
lime_media_openal_AL.REVERB_AIR_ABSORPTION_GAINHF = 11;
lime_media_openal_AL.REVERB_ROOM_ROLLOFF_FACTOR = 12;
lime_media_openal_AL.REVERB_DECAY_HFLIMIT = 13;
lime_media_openal_AL.EAXREVERB_DENSITY = 1;
lime_media_openal_AL.EAXREVERB_DIFFUSION = 2;
lime_media_openal_AL.EAXREVERB_GAIN = 3;
lime_media_openal_AL.EAXREVERB_GAINHF = 4;
lime_media_openal_AL.EAXREVERB_GAINLF = 5;
lime_media_openal_AL.EAXREVERB_DECAY_TIME = 6;
lime_media_openal_AL.EAXREVERB_DECAY_HFRATIO = 7;
lime_media_openal_AL.EAXREVERB_DECAY_LFRATIO = 8;
lime_media_openal_AL.EAXREVERB_REFLECTIONS_GAIN = 9;
lime_media_openal_AL.EAXREVERB_REFLECTIONS_DELAY = 10;
lime_media_openal_AL.EAXREVERB_REFLECTIONS_PAN = 11;
lime_media_openal_AL.EAXREVERB_LATE_REVERB_GAIN = 12;
lime_media_openal_AL.EAXREVERB_LATE_REVERB_DELAY = 13;
lime_media_openal_AL.EAXREVERB_LATE_REVERB_PAN = 14;
lime_media_openal_AL.EAXREVERB_ECHO_TIME = 15;
lime_media_openal_AL.EAXREVERB_ECHO_DEPTH = 16;
lime_media_openal_AL.EAXREVERB_MODULATION_TIME = 17;
lime_media_openal_AL.EAXREVERB_MODULATION_DEPTH = 18;
lime_media_openal_AL.EAXREVERB_AIR_ABSORPTION_GAINHF = 19;
lime_media_openal_AL.EAXREVERB_HFREFERENCE = 20;
lime_media_openal_AL.EAXREVERB_LFREFERENCE = 21;
lime_media_openal_AL.EAXREVERB_ROOM_ROLLOFF_FACTOR = 22;
lime_media_openal_AL.EAXREVERB_DECAY_HFLIMIT = 23;
lime_media_openal_AL.CHORUS_WAVEFORM = 1;
lime_media_openal_AL.CHORUS_PHASE = 2;
lime_media_openal_AL.CHORUS_RATE = 3;
lime_media_openal_AL.CHORUS_DEPTH = 4;
lime_media_openal_AL.CHORUS_FEEDBACK = 5;
lime_media_openal_AL.CHORUS_DELAY = 6;
lime_media_openal_AL.DISTORTION_EDGE = 1;
lime_media_openal_AL.DISTORTION_GAIN = 2;
lime_media_openal_AL.DISTORTION_LOWPASS_CUTOFF = 3;
lime_media_openal_AL.DISTORTION_EQCENTER = 4;
lime_media_openal_AL.DISTORTION_EQBANDWIDTH = 5;
lime_media_openal_AL.ECHO_DELAY = 1;
lime_media_openal_AL.ECHO_LRDELAY = 2;
lime_media_openal_AL.ECHO_DAMPING = 3;
lime_media_openal_AL.ECHO_FEEDBACK = 4;
lime_media_openal_AL.ECHO_SPREAD = 5;
lime_media_openal_AL.FLANGER_WAVEFORM = 1;
lime_media_openal_AL.FLANGER_PHASE = 2;
lime_media_openal_AL.FLANGER_RATE = 3;
lime_media_openal_AL.FLANGER_DEPTH = 4;
lime_media_openal_AL.FLANGER_FEEDBACK = 5;
lime_media_openal_AL.FLANGER_DELAY = 6;
lime_media_openal_AL.FREQUENCY_SHIFTER_FREQUENCY = 1;
lime_media_openal_AL.FREQUENCY_SHIFTER_LEFT_DIRECTION = 2;
lime_media_openal_AL.FREQUENCY_SHIFTER_RIGHT_DIRECTION = 3;
lime_media_openal_AL.VOCAL_MORPHER_PHONEMEA = 1;
lime_media_openal_AL.VOCAL_MORPHER_PHONEMEA_COARSE_TUNING = 2;
lime_media_openal_AL.VOCAL_MORPHER_PHONEMEB = 3;
lime_media_openal_AL.VOCAL_MORPHER_PHONEMEB_COARSE_TUNING = 4;
lime_media_openal_AL.VOCAL_MORPHER_WAVEFORM = 5;
lime_media_openal_AL.VOCAL_MORPHER_RATE = 6;
lime_media_openal_AL.PITCH_SHIFTER_COARSE_TUNE = 1;
lime_media_openal_AL.PITCH_SHIFTER_FINE_TUNE = 2;
lime_media_openal_AL.RING_MODULATOR_FREQUENCY = 1;
lime_media_openal_AL.RING_MODULATOR_HIGHPASS_CUTOFF = 2;
lime_media_openal_AL.RING_MODULATOR_WAVEFORM = 3;
lime_media_openal_AL.AUTOWAH_ATTACK_TIME = 1;
lime_media_openal_AL.AUTOWAH_RELEASE_TIME = 2;
lime_media_openal_AL.AUTOWAH_RESONANCE = 3;
lime_media_openal_AL.AUTOWAH_PEAK_GAIN = 4;
lime_media_openal_AL.COMPRESSOR_ONOFF = 1;
lime_media_openal_AL.EQUALIZER_LOW_GAIN = 1;
lime_media_openal_AL.EQUALIZER_LOW_CUTOFF = 2;
lime_media_openal_AL.EQUALIZER_MID1_GAIN = 3;
lime_media_openal_AL.EQUALIZER_MID1_CENTER = 4;
lime_media_openal_AL.EQUALIZER_MID1_WIDTH = 5;
lime_media_openal_AL.EQUALIZER_MID2_GAIN = 6;
lime_media_openal_AL.EQUALIZER_MID2_CENTER = 7;
lime_media_openal_AL.EQUALIZER_MID2_WIDTH = 8;
lime_media_openal_AL.EQUALIZER_HIGH_GAIN = 9;
lime_media_openal_AL.EQUALIZER_HIGH_CUTOFF = 10;
lime_media_openal_AL.EFFECT_FIRST_PARAMETER = 0;
lime_media_openal_AL.EFFECT_LAST_PARAMETER = 32768;
lime_media_openal_AL.EFFECT_TYPE = 32769;
lime_media_openal_AL.EFFECT_NULL = 0;
lime_media_openal_AL.EFFECT_EAXREVERB = 32768;
lime_media_openal_AL.EFFECT_REVERB = 1;
lime_media_openal_AL.EFFECT_CHORUS = 2;
lime_media_openal_AL.EFFECT_DISTORTION = 3;
lime_media_openal_AL.EFFECT_ECHO = 4;
lime_media_openal_AL.EFFECT_FLANGER = 5;
lime_media_openal_AL.EFFECT_FREQUENCY_SHIFTER = 6;
lime_media_openal_AL.EFFECT_VOCAL_MORPHER = 7;
lime_media_openal_AL.EFFECT_PITCH_SHIFTER = 8;
lime_media_openal_AL.EFFECT_RING_MODULATOR = 9;
lime_media_openal_AL.FFECT_AUTOWAH = 10;
lime_media_openal_AL.EFFECT_COMPRESSOR = 11;
lime_media_openal_AL.EFFECT_EQUALIZER = 12;
lime_media_openal_AL.EFFECTSLOT_EFFECT = 1;
lime_media_openal_AL.EFFECTSLOT_GAIN = 2;
lime_media_openal_AL.EFFECTSLOT_AUXILIARY_SEND_AUTO = 3;
lime_media_openal_AL.LOWPASS_GAIN = 1;
lime_media_openal_AL.LOWPASS_GAINHF = 2;
lime_media_openal_AL.HIGHPASS_GAIN = 1;
lime_media_openal_AL.HIGHPASS_GAINLF = 2;
lime_media_openal_AL.BANDPASS_GAIN = 1;
lime_media_openal_AL.BANDPASS_GAINLF = 2;
lime_media_openal_AL.BANDPASS_GAINHF = 3;
lime_media_openal_AL.FILTER_FIRST_PARAMETER = 0;
lime_media_openal_AL.FILTER_LAST_PARAMETER = 32768;
lime_media_openal_AL.FILTER_TYPE = 32769;
lime_media_openal_AL.FILTER_NULL = 0;
lime_media_openal_AL.FILTER_LOWPASS = 1;
lime_media_openal_AL.FILTER_HIGHPASS = 2;
lime_media_openal_AL.FILTER_BANDPASS = 3;
lime_media_openal_ALC.FALSE = 0;
lime_media_openal_ALC.TRUE = 1;
lime_media_openal_ALC.FREQUENCY = 4103;
lime_media_openal_ALC.REFRESH = 4104;
lime_media_openal_ALC.SYNC = 4105;
lime_media_openal_ALC.MONO_SOURCES = 4112;
lime_media_openal_ALC.STEREO_SOURCES = 4113;
lime_media_openal_ALC.NO_ERROR = 0;
lime_media_openal_ALC.INVALID_DEVICE = 40961;
lime_media_openal_ALC.INVALID_CONTEXT = 40962;
lime_media_openal_ALC.INVALID_ENUM = 40963;
lime_media_openal_ALC.INVALID_VALUE = 40964;
lime_media_openal_ALC.OUT_OF_MEMORY = 40965;
lime_media_openal_ALC.ATTRIBUTES_SIZE = 4098;
lime_media_openal_ALC.ALL_ATTRIBUTES = 4099;
lime_media_openal_ALC.DEFAULT_DEVICE_SPECIFIER = 4100;
lime_media_openal_ALC.DEVICE_SPECIFIER = 4101;
lime_media_openal_ALC.EXTENSIONS = 4102;
lime_media_openal_ALC.ENUMERATE_ALL_EXT = 1;
lime_media_openal_ALC.DEFAULT_ALL_DEVICES_SPECIFIER = 4114;
lime_media_openal_ALC.ALL_DEVICES_SPECIFIER = 4115;
lime_system_BackgroundWorker.MESSAGE_COMPLETE = "__COMPLETE__";
lime_system_BackgroundWorker.MESSAGE_ERROR = "__ERROR__";
lime_system_Clipboard.onUpdate = new lime_app__$Event_$Void_$Void();
lime_system_Sensor.sensorByID = new haxe_ds_IntMap();
lime_system_Sensor.sensors = [];
lime_system_System.__directories = new haxe_ds_IntMap();
lime_ui_Gamepad.devices = new haxe_ds_IntMap();
lime_ui_Gamepad.onConnect = new lime_app__$Event_$lime_$ui_$Gamepad_$Void();
lime_ui_GamepadAxis.LEFT_X = 0;
lime_ui_GamepadAxis.LEFT_Y = 1;
lime_ui_GamepadAxis.RIGHT_X = 2;
lime_ui_GamepadAxis.RIGHT_Y = 3;
lime_ui_GamepadAxis.TRIGGER_LEFT = 4;
lime_ui_GamepadAxis.TRIGGER_RIGHT = 5;
lime_ui_GamepadButton.A = 0;
lime_ui_GamepadButton.B = 1;
lime_ui_GamepadButton.X = 2;
lime_ui_GamepadButton.Y = 3;
lime_ui_GamepadButton.BACK = 4;
lime_ui_GamepadButton.GUIDE = 5;
lime_ui_GamepadButton.START = 6;
lime_ui_GamepadButton.LEFT_STICK = 7;
lime_ui_GamepadButton.RIGHT_STICK = 8;
lime_ui_GamepadButton.LEFT_SHOULDER = 9;
lime_ui_GamepadButton.RIGHT_SHOULDER = 10;
lime_ui_GamepadButton.DPAD_UP = 11;
lime_ui_GamepadButton.DPAD_DOWN = 12;
lime_ui_GamepadButton.DPAD_LEFT = 13;
lime_ui_GamepadButton.DPAD_RIGHT = 14;
lime_ui_Joystick.devices = new haxe_ds_IntMap();
lime_ui_Joystick.onConnect = new lime_app__$Event_$lime_$ui_$Joystick_$Void();
lime_ui_JoystickHatPosition.CENTER = 0;
lime_ui_JoystickHatPosition.DOWN = 4;
lime_ui_JoystickHatPosition.LEFT = 8;
lime_ui_JoystickHatPosition.RIGHT = 2;
lime_ui_JoystickHatPosition.UP = 1;
lime_ui_JoystickHatPosition.DOWN_LEFT = 12;
lime_ui_JoystickHatPosition.DOWN_RIGHT = 6;
lime_ui_JoystickHatPosition.UP_LEFT = 9;
lime_ui_JoystickHatPosition.UP_RIGHT = 3;
lime_ui_KeyCode.UNKNOWN = 0;
lime_ui_KeyCode.BACKSPACE = 8;
lime_ui_KeyCode.TAB = 9;
lime_ui_KeyCode.RETURN = 13;
lime_ui_KeyCode.ESCAPE = 27;
lime_ui_KeyCode.SPACE = 32;
lime_ui_KeyCode.EXCLAMATION = 33;
lime_ui_KeyCode.QUOTE = 34;
lime_ui_KeyCode.HASH = 35;
lime_ui_KeyCode.DOLLAR = 36;
lime_ui_KeyCode.PERCENT = 37;
lime_ui_KeyCode.AMPERSAND = 38;
lime_ui_KeyCode.SINGLE_QUOTE = 39;
lime_ui_KeyCode.LEFT_PARENTHESIS = 40;
lime_ui_KeyCode.RIGHT_PARENTHESIS = 41;
lime_ui_KeyCode.ASTERISK = 42;
lime_ui_KeyCode.PLUS = 43;
lime_ui_KeyCode.COMMA = 44;
lime_ui_KeyCode.MINUS = 45;
lime_ui_KeyCode.PERIOD = 46;
lime_ui_KeyCode.SLASH = 47;
lime_ui_KeyCode.NUMBER_0 = 48;
lime_ui_KeyCode.NUMBER_1 = 49;
lime_ui_KeyCode.NUMBER_2 = 50;
lime_ui_KeyCode.NUMBER_3 = 51;
lime_ui_KeyCode.NUMBER_4 = 52;
lime_ui_KeyCode.NUMBER_5 = 53;
lime_ui_KeyCode.NUMBER_6 = 54;
lime_ui_KeyCode.NUMBER_7 = 55;
lime_ui_KeyCode.NUMBER_8 = 56;
lime_ui_KeyCode.NUMBER_9 = 57;
lime_ui_KeyCode.COLON = 58;
lime_ui_KeyCode.SEMICOLON = 59;
lime_ui_KeyCode.LESS_THAN = 60;
lime_ui_KeyCode.EQUALS = 61;
lime_ui_KeyCode.GREATER_THAN = 62;
lime_ui_KeyCode.QUESTION = 63;
lime_ui_KeyCode.AT = 64;
lime_ui_KeyCode.LEFT_BRACKET = 91;
lime_ui_KeyCode.BACKSLASH = 92;
lime_ui_KeyCode.RIGHT_BRACKET = 93;
lime_ui_KeyCode.CARET = 94;
lime_ui_KeyCode.UNDERSCORE = 95;
lime_ui_KeyCode.GRAVE = 96;
lime_ui_KeyCode.A = 97;
lime_ui_KeyCode.B = 98;
lime_ui_KeyCode.C = 99;
lime_ui_KeyCode.D = 100;
lime_ui_KeyCode.E = 101;
lime_ui_KeyCode.F = 102;
lime_ui_KeyCode.G = 103;
lime_ui_KeyCode.H = 104;
lime_ui_KeyCode.I = 105;
lime_ui_KeyCode.J = 106;
lime_ui_KeyCode.K = 107;
lime_ui_KeyCode.L = 108;
lime_ui_KeyCode.M = 109;
lime_ui_KeyCode.N = 110;
lime_ui_KeyCode.O = 111;
lime_ui_KeyCode.P = 112;
lime_ui_KeyCode.Q = 113;
lime_ui_KeyCode.R = 114;
lime_ui_KeyCode.S = 115;
lime_ui_KeyCode.T = 116;
lime_ui_KeyCode.U = 117;
lime_ui_KeyCode.V = 118;
lime_ui_KeyCode.W = 119;
lime_ui_KeyCode.X = 120;
lime_ui_KeyCode.Y = 121;
lime_ui_KeyCode.Z = 122;
lime_ui_KeyCode.DELETE = 127;
lime_ui_KeyCode.CAPS_LOCK = 1073741881;
lime_ui_KeyCode.F1 = 1073741882;
lime_ui_KeyCode.F2 = 1073741883;
lime_ui_KeyCode.F3 = 1073741884;
lime_ui_KeyCode.F4 = 1073741885;
lime_ui_KeyCode.F5 = 1073741886;
lime_ui_KeyCode.F6 = 1073741887;
lime_ui_KeyCode.F7 = 1073741888;
lime_ui_KeyCode.F8 = 1073741889;
lime_ui_KeyCode.F9 = 1073741890;
lime_ui_KeyCode.F10 = 1073741891;
lime_ui_KeyCode.F11 = 1073741892;
lime_ui_KeyCode.F12 = 1073741893;
lime_ui_KeyCode.PRINT_SCREEN = 1073741894;
lime_ui_KeyCode.SCROLL_LOCK = 1073741895;
lime_ui_KeyCode.PAUSE = 1073741896;
lime_ui_KeyCode.INSERT = 1073741897;
lime_ui_KeyCode.HOME = 1073741898;
lime_ui_KeyCode.PAGE_UP = 1073741899;
lime_ui_KeyCode.END = 1073741901;
lime_ui_KeyCode.PAGE_DOWN = 1073741902;
lime_ui_KeyCode.RIGHT = 1073741903;
lime_ui_KeyCode.LEFT = 1073741904;
lime_ui_KeyCode.DOWN = 1073741905;
lime_ui_KeyCode.UP = 1073741906;
lime_ui_KeyCode.NUM_LOCK = 1073741907;
lime_ui_KeyCode.NUMPAD_DIVIDE = 1073741908;
lime_ui_KeyCode.NUMPAD_MULTIPLY = 1073741909;
lime_ui_KeyCode.NUMPAD_MINUS = 1073741910;
lime_ui_KeyCode.NUMPAD_PLUS = 1073741911;
lime_ui_KeyCode.NUMPAD_ENTER = 1073741912;
lime_ui_KeyCode.NUMPAD_1 = 1073741913;
lime_ui_KeyCode.NUMPAD_2 = 1073741914;
lime_ui_KeyCode.NUMPAD_3 = 1073741915;
lime_ui_KeyCode.NUMPAD_4 = 1073741916;
lime_ui_KeyCode.NUMPAD_5 = 1073741917;
lime_ui_KeyCode.NUMPAD_6 = 1073741918;
lime_ui_KeyCode.NUMPAD_7 = 1073741919;
lime_ui_KeyCode.NUMPAD_8 = 1073741920;
lime_ui_KeyCode.NUMPAD_9 = 1073741921;
lime_ui_KeyCode.NUMPAD_0 = 1073741922;
lime_ui_KeyCode.NUMPAD_PERIOD = 1073741923;
lime_ui_KeyCode.APPLICATION = 1073741925;
lime_ui_KeyCode.POWER = 1073741926;
lime_ui_KeyCode.NUMPAD_EQUALS = 1073741927;
lime_ui_KeyCode.F13 = 1073741928;
lime_ui_KeyCode.F14 = 1073741929;
lime_ui_KeyCode.F15 = 1073741930;
lime_ui_KeyCode.F16 = 1073741931;
lime_ui_KeyCode.F17 = 1073741932;
lime_ui_KeyCode.F18 = 1073741933;
lime_ui_KeyCode.F19 = 1073741934;
lime_ui_KeyCode.F20 = 1073741935;
lime_ui_KeyCode.F21 = 1073741936;
lime_ui_KeyCode.F22 = 1073741937;
lime_ui_KeyCode.F23 = 1073741938;
lime_ui_KeyCode.F24 = 1073741939;
lime_ui_KeyCode.EXECUTE = 1073741940;
lime_ui_KeyCode.HELP = 1073741941;
lime_ui_KeyCode.MENU = 1073741942;
lime_ui_KeyCode.SELECT = 1073741943;
lime_ui_KeyCode.STOP = 1073741944;
lime_ui_KeyCode.AGAIN = 1073741945;
lime_ui_KeyCode.UNDO = 1073741946;
lime_ui_KeyCode.CUT = 1073741947;
lime_ui_KeyCode.COPY = 1073741948;
lime_ui_KeyCode.PASTE = 1073741949;
lime_ui_KeyCode.FIND = 1073741950;
lime_ui_KeyCode.MUTE = 1073741951;
lime_ui_KeyCode.VOLUME_UP = 1073741952;
lime_ui_KeyCode.VOLUME_DOWN = 1073741953;
lime_ui_KeyCode.NUMPAD_COMMA = 1073741957;
lime_ui_KeyCode.ALT_ERASE = 1073741977;
lime_ui_KeyCode.SYSTEM_REQUEST = 1073741978;
lime_ui_KeyCode.CANCEL = 1073741979;
lime_ui_KeyCode.CLEAR = 1073741980;
lime_ui_KeyCode.PRIOR = 1073741981;
lime_ui_KeyCode.RETURN2 = 1073741982;
lime_ui_KeyCode.SEPARATOR = 1073741983;
lime_ui_KeyCode.OUT = 1073741984;
lime_ui_KeyCode.OPER = 1073741985;
lime_ui_KeyCode.CLEAR_AGAIN = 1073741986;
lime_ui_KeyCode.CRSEL = 1073741987;
lime_ui_KeyCode.EXSEL = 1073741988;
lime_ui_KeyCode.NUMPAD_00 = 1073742000;
lime_ui_KeyCode.NUMPAD_000 = 1073742001;
lime_ui_KeyCode.THOUSAND_SEPARATOR = 1073742002;
lime_ui_KeyCode.DECIMAL_SEPARATOR = 1073742003;
lime_ui_KeyCode.CURRENCY_UNIT = 1073742004;
lime_ui_KeyCode.CURRENCY_SUBUNIT = 1073742005;
lime_ui_KeyCode.NUMPAD_LEFT_PARENTHESIS = 1073742006;
lime_ui_KeyCode.NUMPAD_RIGHT_PARENTHESIS = 1073742007;
lime_ui_KeyCode.NUMPAD_LEFT_BRACE = 1073742008;
lime_ui_KeyCode.NUMPAD_RIGHT_BRACE = 1073742009;
lime_ui_KeyCode.NUMPAD_TAB = 1073742010;
lime_ui_KeyCode.NUMPAD_BACKSPACE = 1073742011;
lime_ui_KeyCode.NUMPAD_A = 1073742012;
lime_ui_KeyCode.NUMPAD_B = 1073742013;
lime_ui_KeyCode.NUMPAD_C = 1073742014;
lime_ui_KeyCode.NUMPAD_D = 1073742015;
lime_ui_KeyCode.NUMPAD_E = 1073742016;
lime_ui_KeyCode.NUMPAD_F = 1073742017;
lime_ui_KeyCode.NUMPAD_XOR = 1073742018;
lime_ui_KeyCode.NUMPAD_POWER = 1073742019;
lime_ui_KeyCode.NUMPAD_PERCENT = 1073742020;
lime_ui_KeyCode.NUMPAD_LESS_THAN = 1073742021;
lime_ui_KeyCode.NUMPAD_GREATER_THAN = 1073742022;
lime_ui_KeyCode.NUMPAD_AMPERSAND = 1073742023;
lime_ui_KeyCode.NUMPAD_DOUBLE_AMPERSAND = 1073742024;
lime_ui_KeyCode.NUMPAD_VERTICAL_BAR = 1073742025;
lime_ui_KeyCode.NUMPAD_DOUBLE_VERTICAL_BAR = 1073742026;
lime_ui_KeyCode.NUMPAD_COLON = 1073742027;
lime_ui_KeyCode.NUMPAD_HASH = 1073742028;
lime_ui_KeyCode.NUMPAD_SPACE = 1073742029;
lime_ui_KeyCode.NUMPAD_AT = 1073742030;
lime_ui_KeyCode.NUMPAD_EXCLAMATION = 1073742031;
lime_ui_KeyCode.NUMPAD_MEM_STORE = 1073742032;
lime_ui_KeyCode.NUMPAD_MEM_RECALL = 1073742033;
lime_ui_KeyCode.NUMPAD_MEM_CLEAR = 1073742034;
lime_ui_KeyCode.NUMPAD_MEM_ADD = 1073742035;
lime_ui_KeyCode.NUMPAD_MEM_SUBTRACT = 1073742036;
lime_ui_KeyCode.NUMPAD_MEM_MULTIPLY = 1073742037;
lime_ui_KeyCode.NUMPAD_MEM_DIVIDE = 1073742038;
lime_ui_KeyCode.NUMPAD_PLUS_MINUS = 1073742039;
lime_ui_KeyCode.NUMPAD_CLEAR = 1073742040;
lime_ui_KeyCode.NUMPAD_CLEAR_ENTRY = 1073742041;
lime_ui_KeyCode.NUMPAD_BINARY = 1073742042;
lime_ui_KeyCode.NUMPAD_OCTAL = 1073742043;
lime_ui_KeyCode.NUMPAD_DECIMAL = 1073742044;
lime_ui_KeyCode.NUMPAD_HEXADECIMAL = 1073742045;
lime_ui_KeyCode.LEFT_CTRL = 1073742048;
lime_ui_KeyCode.LEFT_SHIFT = 1073742049;
lime_ui_KeyCode.LEFT_ALT = 1073742050;
lime_ui_KeyCode.LEFT_META = 1073742051;
lime_ui_KeyCode.RIGHT_CTRL = 1073742052;
lime_ui_KeyCode.RIGHT_SHIFT = 1073742053;
lime_ui_KeyCode.RIGHT_ALT = 1073742054;
lime_ui_KeyCode.RIGHT_META = 1073742055;
lime_ui_KeyCode.MODE = 1073742081;
lime_ui_KeyCode.AUDIO_NEXT = 1073742082;
lime_ui_KeyCode.AUDIO_PREVIOUS = 1073742083;
lime_ui_KeyCode.AUDIO_STOP = 1073742084;
lime_ui_KeyCode.AUDIO_PLAY = 1073742085;
lime_ui_KeyCode.AUDIO_MUTE = 1073742086;
lime_ui_KeyCode.MEDIA_SELECT = 1073742087;
lime_ui_KeyCode.WWW = 1073742088;
lime_ui_KeyCode.MAIL = 1073742089;
lime_ui_KeyCode.CALCULATOR = 1073742090;
lime_ui_KeyCode.COMPUTER = 1073742091;
lime_ui_KeyCode.APP_CONTROL_SEARCH = 1073742092;
lime_ui_KeyCode.APP_CONTROL_HOME = 1073742093;
lime_ui_KeyCode.APP_CONTROL_BACK = 1073742094;
lime_ui_KeyCode.APP_CONTROL_FORWARD = 1073742095;
lime_ui_KeyCode.APP_CONTROL_STOP = 1073742096;
lime_ui_KeyCode.APP_CONTROL_REFRESH = 1073742097;
lime_ui_KeyCode.APP_CONTROL_BOOKMARKS = 1073742098;
lime_ui_KeyCode.BRIGHTNESS_DOWN = 1073742099;
lime_ui_KeyCode.BRIGHTNESS_UP = 1073742100;
lime_ui_KeyCode.DISPLAY_SWITCH = 1073742101;
lime_ui_KeyCode.BACKLIGHT_TOGGLE = 1073742102;
lime_ui_KeyCode.BACKLIGHT_DOWN = 1073742103;
lime_ui_KeyCode.BACKLIGHT_UP = 1073742104;
lime_ui_KeyCode.EJECT = 1073742105;
lime_ui_KeyCode.SLEEP = 1073742106;
lime_ui_KeyModifier.NONE = 0;
lime_ui_KeyModifier.LEFT_SHIFT = 1;
lime_ui_KeyModifier.RIGHT_SHIFT = 2;
lime_ui_KeyModifier.LEFT_CTRL = 64;
lime_ui_KeyModifier.RIGHT_CTRL = 128;
lime_ui_KeyModifier.LEFT_ALT = 256;
lime_ui_KeyModifier.RIGHT_ALT = 512;
lime_ui_KeyModifier.LEFT_META = 1024;
lime_ui_KeyModifier.RIGHT_META = 2048;
lime_ui_KeyModifier.NUM_LOCK = 4096;
lime_ui_KeyModifier.CAPS_LOCK = 8192;
lime_ui_KeyModifier.MODE = 16384;
lime_ui_KeyModifier.CTRL = 192;
lime_ui_KeyModifier.SHIFT = 3;
lime_ui_KeyModifier.ALT = 768;
lime_ui_KeyModifier.META = 3072;
lime_ui_ScanCode.UNKNOWN = 0;
lime_ui_ScanCode.BACKSPACE = 42;
lime_ui_ScanCode.TAB = 43;
lime_ui_ScanCode.RETURN = 40;
lime_ui_ScanCode.ESCAPE = 41;
lime_ui_ScanCode.SPACE = 44;
lime_ui_ScanCode.SINGLE_QUOTE = 52;
lime_ui_ScanCode.COMMA = 54;
lime_ui_ScanCode.MINUS = 45;
lime_ui_ScanCode.PERIOD = 55;
lime_ui_ScanCode.SLASH = 56;
lime_ui_ScanCode.NUMBER_0 = 39;
lime_ui_ScanCode.NUMBER_1 = 30;
lime_ui_ScanCode.NUMBER_2 = 31;
lime_ui_ScanCode.NUMBER_3 = 32;
lime_ui_ScanCode.NUMBER_4 = 33;
lime_ui_ScanCode.NUMBER_5 = 34;
lime_ui_ScanCode.NUMBER_6 = 35;
lime_ui_ScanCode.NUMBER_7 = 36;
lime_ui_ScanCode.NUMBER_8 = 37;
lime_ui_ScanCode.NUMBER_9 = 38;
lime_ui_ScanCode.SEMICOLON = 51;
lime_ui_ScanCode.EQUALS = 46;
lime_ui_ScanCode.LEFT_BRACKET = 47;
lime_ui_ScanCode.BACKSLASH = 49;
lime_ui_ScanCode.RIGHT_BRACKET = 48;
lime_ui_ScanCode.GRAVE = 53;
lime_ui_ScanCode.A = 4;
lime_ui_ScanCode.B = 5;
lime_ui_ScanCode.C = 6;
lime_ui_ScanCode.D = 7;
lime_ui_ScanCode.E = 8;
lime_ui_ScanCode.F = 9;
lime_ui_ScanCode.G = 10;
lime_ui_ScanCode.H = 11;
lime_ui_ScanCode.I = 12;
lime_ui_ScanCode.J = 13;
lime_ui_ScanCode.K = 14;
lime_ui_ScanCode.L = 15;
lime_ui_ScanCode.M = 16;
lime_ui_ScanCode.N = 17;
lime_ui_ScanCode.O = 18;
lime_ui_ScanCode.P = 19;
lime_ui_ScanCode.Q = 20;
lime_ui_ScanCode.R = 21;
lime_ui_ScanCode.S = 22;
lime_ui_ScanCode.T = 23;
lime_ui_ScanCode.U = 24;
lime_ui_ScanCode.V = 25;
lime_ui_ScanCode.W = 26;
lime_ui_ScanCode.X = 27;
lime_ui_ScanCode.Y = 28;
lime_ui_ScanCode.Z = 29;
lime_ui_ScanCode.DELETE = 76;
lime_ui_ScanCode.CAPS_LOCK = 57;
lime_ui_ScanCode.F1 = 58;
lime_ui_ScanCode.F2 = 59;
lime_ui_ScanCode.F3 = 60;
lime_ui_ScanCode.F4 = 61;
lime_ui_ScanCode.F5 = 62;
lime_ui_ScanCode.F6 = 63;
lime_ui_ScanCode.F7 = 64;
lime_ui_ScanCode.F8 = 65;
lime_ui_ScanCode.F9 = 66;
lime_ui_ScanCode.F10 = 67;
lime_ui_ScanCode.F11 = 68;
lime_ui_ScanCode.F12 = 69;
lime_ui_ScanCode.PRINT_SCREEN = 70;
lime_ui_ScanCode.SCROLL_LOCK = 71;
lime_ui_ScanCode.PAUSE = 72;
lime_ui_ScanCode.INSERT = 73;
lime_ui_ScanCode.HOME = 74;
lime_ui_ScanCode.PAGE_UP = 75;
lime_ui_ScanCode.END = 77;
lime_ui_ScanCode.PAGE_DOWN = 78;
lime_ui_ScanCode.RIGHT = 79;
lime_ui_ScanCode.LEFT = 80;
lime_ui_ScanCode.DOWN = 81;
lime_ui_ScanCode.UP = 82;
lime_ui_ScanCode.NUM_LOCK = 83;
lime_ui_ScanCode.NUMPAD_DIVIDE = 84;
lime_ui_ScanCode.NUMPAD_MULTIPLY = 85;
lime_ui_ScanCode.NUMPAD_MINUS = 86;
lime_ui_ScanCode.NUMPAD_PLUS = 87;
lime_ui_ScanCode.NUMPAD_ENTER = 88;
lime_ui_ScanCode.NUMPAD_1 = 89;
lime_ui_ScanCode.NUMPAD_2 = 90;
lime_ui_ScanCode.NUMPAD_3 = 91;
lime_ui_ScanCode.NUMPAD_4 = 92;
lime_ui_ScanCode.NUMPAD_5 = 93;
lime_ui_ScanCode.NUMPAD_6 = 94;
lime_ui_ScanCode.NUMPAD_7 = 95;
lime_ui_ScanCode.NUMPAD_8 = 96;
lime_ui_ScanCode.NUMPAD_9 = 97;
lime_ui_ScanCode.NUMPAD_0 = 98;
lime_ui_ScanCode.NUMPAD_PERIOD = 99;
lime_ui_ScanCode.APPLICATION = 101;
lime_ui_ScanCode.POWER = 102;
lime_ui_ScanCode.NUMPAD_EQUALS = 103;
lime_ui_ScanCode.F13 = 104;
lime_ui_ScanCode.F14 = 105;
lime_ui_ScanCode.F15 = 106;
lime_ui_ScanCode.F16 = 107;
lime_ui_ScanCode.F17 = 108;
lime_ui_ScanCode.F18 = 109;
lime_ui_ScanCode.F19 = 110;
lime_ui_ScanCode.F20 = 111;
lime_ui_ScanCode.F21 = 112;
lime_ui_ScanCode.F22 = 113;
lime_ui_ScanCode.F23 = 114;
lime_ui_ScanCode.F24 = 115;
lime_ui_ScanCode.EXECUTE = 116;
lime_ui_ScanCode.HELP = 117;
lime_ui_ScanCode.MENU = 118;
lime_ui_ScanCode.SELECT = 119;
lime_ui_ScanCode.STOP = 120;
lime_ui_ScanCode.AGAIN = 121;
lime_ui_ScanCode.UNDO = 122;
lime_ui_ScanCode.CUT = 123;
lime_ui_ScanCode.COPY = 124;
lime_ui_ScanCode.PASTE = 125;
lime_ui_ScanCode.FIND = 126;
lime_ui_ScanCode.MUTE = 127;
lime_ui_ScanCode.VOLUME_UP = 128;
lime_ui_ScanCode.VOLUME_DOWN = 129;
lime_ui_ScanCode.NUMPAD_COMMA = 133;
lime_ui_ScanCode.ALT_ERASE = 153;
lime_ui_ScanCode.SYSTEM_REQUEST = 154;
lime_ui_ScanCode.CANCEL = 155;
lime_ui_ScanCode.CLEAR = 156;
lime_ui_ScanCode.PRIOR = 157;
lime_ui_ScanCode.RETURN2 = 158;
lime_ui_ScanCode.SEPARATOR = 159;
lime_ui_ScanCode.OUT = 160;
lime_ui_ScanCode.OPER = 161;
lime_ui_ScanCode.CLEAR_AGAIN = 162;
lime_ui_ScanCode.CRSEL = 163;
lime_ui_ScanCode.EXSEL = 164;
lime_ui_ScanCode.NUMPAD_00 = 176;
lime_ui_ScanCode.NUMPAD_000 = 177;
lime_ui_ScanCode.THOUSAND_SEPARATOR = 178;
lime_ui_ScanCode.DECIMAL_SEPARATOR = 179;
lime_ui_ScanCode.CURRENCY_UNIT = 180;
lime_ui_ScanCode.CURRENCY_SUBUNIT = 181;
lime_ui_ScanCode.NUMPAD_LEFT_PARENTHESIS = 182;
lime_ui_ScanCode.NUMPAD_RIGHT_PARENTHESIS = 183;
lime_ui_ScanCode.NUMPAD_LEFT_BRACE = 184;
lime_ui_ScanCode.NUMPAD_RIGHT_BRACE = 185;
lime_ui_ScanCode.NUMPAD_TAB = 186;
lime_ui_ScanCode.NUMPAD_BACKSPACE = 187;
lime_ui_ScanCode.NUMPAD_A = 188;
lime_ui_ScanCode.NUMPAD_B = 189;
lime_ui_ScanCode.NUMPAD_C = 190;
lime_ui_ScanCode.NUMPAD_D = 191;
lime_ui_ScanCode.NUMPAD_E = 192;
lime_ui_ScanCode.NUMPAD_F = 193;
lime_ui_ScanCode.NUMPAD_XOR = 194;
lime_ui_ScanCode.NUMPAD_POWER = 195;
lime_ui_ScanCode.NUMPAD_PERCENT = 196;
lime_ui_ScanCode.NUMPAD_LESS_THAN = 197;
lime_ui_ScanCode.NUMPAD_GREATER_THAN = 198;
lime_ui_ScanCode.NUMPAD_AMPERSAND = 199;
lime_ui_ScanCode.NUMPAD_DOUBLE_AMPERSAND = 200;
lime_ui_ScanCode.NUMPAD_VERTICAL_BAR = 201;
lime_ui_ScanCode.NUMPAD_DOUBLE_VERTICAL_BAR = 202;
lime_ui_ScanCode.NUMPAD_COLON = 203;
lime_ui_ScanCode.NUMPAD_HASH = 204;
lime_ui_ScanCode.NUMPAD_SPACE = 205;
lime_ui_ScanCode.NUMPAD_AT = 206;
lime_ui_ScanCode.NUMPAD_EXCLAMATION = 207;
lime_ui_ScanCode.NUMPAD_MEM_STORE = 208;
lime_ui_ScanCode.NUMPAD_MEM_RECALL = 209;
lime_ui_ScanCode.NUMPAD_MEM_CLEAR = 210;
lime_ui_ScanCode.NUMPAD_MEM_ADD = 211;
lime_ui_ScanCode.NUMPAD_MEM_SUBTRACT = 212;
lime_ui_ScanCode.NUMPAD_MEM_MULTIPLY = 213;
lime_ui_ScanCode.NUMPAD_MEM_DIVIDE = 214;
lime_ui_ScanCode.NUMPAD_PLUS_MINUS = 215;
lime_ui_ScanCode.NUMPAD_CLEAR = 216;
lime_ui_ScanCode.NUMPAD_CLEAR_ENTRY = 217;
lime_ui_ScanCode.NUMPAD_BINARY = 218;
lime_ui_ScanCode.NUMPAD_OCTAL = 219;
lime_ui_ScanCode.NUMPAD_DECIMAL = 220;
lime_ui_ScanCode.NUMPAD_HEXADECIMAL = 221;
lime_ui_ScanCode.LEFT_CTRL = 224;
lime_ui_ScanCode.LEFT_SHIFT = 225;
lime_ui_ScanCode.LEFT_ALT = 226;
lime_ui_ScanCode.LEFT_META = 227;
lime_ui_ScanCode.RIGHT_CTRL = 228;
lime_ui_ScanCode.RIGHT_SHIFT = 229;
lime_ui_ScanCode.RIGHT_ALT = 230;
lime_ui_ScanCode.RIGHT_META = 231;
lime_ui_ScanCode.MODE = 257;
lime_ui_ScanCode.AUDIO_NEXT = 258;
lime_ui_ScanCode.AUDIO_PREVIOUS = 259;
lime_ui_ScanCode.AUDIO_STOP = 260;
lime_ui_ScanCode.AUDIO_PLAY = 261;
lime_ui_ScanCode.AUDIO_MUTE = 262;
lime_ui_ScanCode.MEDIA_SELECT = 263;
lime_ui_ScanCode.WWW = 264;
lime_ui_ScanCode.MAIL = 265;
lime_ui_ScanCode.CALCULATOR = 266;
lime_ui_ScanCode.COMPUTER = 267;
lime_ui_ScanCode.APP_CONTROL_SEARCH = 268;
lime_ui_ScanCode.APP_CONTROL_HOME = 269;
lime_ui_ScanCode.APP_CONTROL_BACK = 270;
lime_ui_ScanCode.APP_CONTROL_FORWARD = 271;
lime_ui_ScanCode.APP_CONTROL_STOP = 272;
lime_ui_ScanCode.APP_CONTROL_REFRESH = 273;
lime_ui_ScanCode.APP_CONTROL_BOOKMARKS = 274;
lime_ui_ScanCode.BRIGHTNESS_DOWN = 275;
lime_ui_ScanCode.BRIGHTNESS_UP = 276;
lime_ui_ScanCode.DISPLAY_SWITCH = 277;
lime_ui_ScanCode.BACKLIGHT_TOGGLE = 278;
lime_ui_ScanCode.BACKLIGHT_DOWN = 279;
lime_ui_ScanCode.BACKLIGHT_UP = 280;
lime_ui_ScanCode.EJECT = 281;
lime_ui_ScanCode.SLEEP = 282;
lime_ui_Touch.onCancel = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onEnd = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onMove = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onStart = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_utils_Assets.cache = new lime_utils_AssetCache();
lime_utils_Assets.onChange = new lime_app__$Event_$Void_$Void();
lime_utils_Assets.bundlePaths = new haxe_ds_StringMap();
lime_utils_Assets.libraries = new haxe_ds_StringMap();
lime_utils_Assets.libraryPaths = new haxe_ds_StringMap();
lime_utils_Float32Array.BYTES_PER_ELEMENT = 4;
lime_utils_Float64Array.BYTES_PER_ELEMENT = 8;
lime_utils_Int16Array.BYTES_PER_ELEMENT = 2;
lime_utils_Int32Array.BYTES_PER_ELEMENT = 4;
lime_utils_Int8Array.BYTES_PER_ELEMENT = 1;
lime_utils_Log.throwErrors = true;
lime_utils_LogLevel.NONE = 0;
lime_utils_LogLevel.ERROR = 1;
lime_utils_LogLevel.WARN = 2;
lime_utils_LogLevel.INFO = 3;
lime_utils_LogLevel.DEBUG = 4;
lime_utils_LogLevel.VERBOSE = 5;
lime_utils_UInt16Array.BYTES_PER_ELEMENT = 2;
lime_utils_UInt32Array.BYTES_PER_ELEMENT = 4;
lime_utils_UInt8Array.BYTES_PER_ELEMENT = 1;
lime_utils_UInt8ClampedArray.BYTES_PER_ELEMENT = 1;
ApplicationMain.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

});
$hx_exports.lime = $hx_exports.lime || {};
$hx_exports.lime.$scripts = $hx_exports.lime.$scripts || {};
$hx_exports.lime.$scripts["FSP"] = $hx_script;
$hx_exports.lime.embed = function(projectName) { var exports = {};
	var script = $hx_exports.lime.$scripts[projectName];
	if (!script) throw Error("Cannot find project name \"" + projectName + "\"");
	script(exports, $global);
	for (var key in exports) $hx_exports[key] = $hx_exports[key] || exports[key];
	var lime = exports.lime || window.lime;
	if (lime && lime.embed && this != lime.embed) lime.embed.apply(lime, arguments);
	return exports;
};
if(typeof define == "function" && define.amd) {
	define([], function() { return $hx_exports.lime; });
	define.__amd = define.amd;
	define.amd = null;
}
})(typeof exports != "undefined" ? exports : typeof define == "function" && define.amd ? {} : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

/*! howler.js v2.1.1 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(e._navigator&&e._navigator.userAgent);if(!e._audioUnlocked&&e.ctx&&o){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(var o=0;o<e.html5PoolSize;o++){var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}for(var o=0;o<e._howls.length;o++)if(!e._howls[o]._webAudio)for(var a=e._howls[o]._getSoundIds(),u=0;u<a.length;u++){var i=e._howls[o]._soundById(a[u]);i&&i._node&&!i._node._unlocked&&(i._node._unlocked=!0,i._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhrWithCredentials=e.xhrWithCredentials||!1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||t._loadQueue("play"),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3,p=!(!i._loop&&!t._sprite[e][2]);i._sprite=e,i._ended=!1;var m=function(){i._paused=!1,i._seek=_,i._start=c,i._stop=f,i._loop=p};if(_>=f)return void t._ended(i);var v=i._node;if(t._webAudio){var h=function(){t._playLock=!1,m(),t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;v.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===v.bufferSource.start?i._loop?v.bufferSource.noteGrainOn(0,_,86400):v.bufferSource.noteGrainOn(0,_,s):i._loop?v.bufferSource.start(0,_,86400):v.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id),t._loadQueue()},0)};"running"===n.state?h():(t._playLock=!0,t.once("resume",h),t._clearTimer(i._id))}else{var y=function(){v.currentTime=_,v.muted=i._muted||t._muted||n._muted||v.muted,v.volume=i._volume*n.volume(),v.playbackRate=i._rate;try{var r=v.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,m(),r.then(function(){t._playLock=!1,v._unlocked=!0,o||(t._emit("play",i._id),t._loadQueue())}).catch(function(){t._playLock=!1,t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):o||(t._playLock=!1,m(),t._emit("play",i._id),t._loadQueue()),v.playbackRate=i._rate,v.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||i._loop?t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l):(t._endTimers[i._id]=function(){t._ended(i),v.removeEventListener("ended",t._endTimers[i._id],!1)},v.addEventListener("ended",t._endTimers[i._id],!1))}catch(e){t._emit("playerror",i._id,e)}},g=window&&window.ejecta||!v.readyState&&n._navigator.isCocoonJS;if(v.readyState>=3||g)y();else{t._playLock=!0;var b=function(){y(),v.removeEventListener(n._canPlayEvent,b,!1)};v.addEventListener(n._canPlayEvent,b,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=parseFloat(e),o=parseFloat(o),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,i=n,d=o-n,_=Math.abs(d/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),i+=d*r,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(o<n&&i<=o||o>n&&i>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){t.playing(o[d])&&(i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart),i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),t._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var l=function(){t._emit("seek",o),s&&t.play(o,!0)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){if(o[t]._paused||e.stop(o[t]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(o[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),n._releaseHtml5Audio(o[t]._node)}delete o[t]._node,e._clearTimer(o[t]._id)}var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,d(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var r=this;return r.ctx&&r.ctx.listener?(n="number"!=typeof n?r._pos[1]:n,t="number"!=typeof t?r._pos[2]:t,"number"!=typeof e?r._pos:(r._pos=[e,n,t],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,n,t,r,o,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var s=a._orientation;return n="number"!=typeof n?s[1]:n,t="number"!=typeof t?s[2]:t,r="number"!=typeof r?s[3]:r,o="number"!=typeof o?s[4]:o,i="number"!=typeof i?s[5]:i,"number"!=typeof e?s:(a._orientation=[e,n,t,r,o,i],void 0!==a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(t,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(e,n,t,r,o,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(n,t)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return r._stereo;r._stereo=n,r._pos=[n,0,0]}for(var i=r._getSoundIds(t),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof n)return s._stereo;s._stereo=n,s._pos=[n,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||e(s,o),"spatial"===o?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(n,0,0):s._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),r._emit("stereo",s._id)}}return r},Howl.prototype.pos=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,r,o)}}),i;if(t="number"!=typeof t?0:t,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof n)return i._pos;i._pos=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._pos;p._pos=[n,t,r],p._node&&(p._panner&&!p._panner.pan||e(p,"spatial"),void 0!==p._panner.positionX?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setPosition(n,t,r)),i._emit("pos",p._id)}}return i},Howl.prototype.orientation=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,r,o)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,r="number"!=typeof r?i._orientation[2]:r,void 0===o){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._orientation;p._orientation=[n,t,r],p._node&&(p._panner||(p._pos||(p._pos=i._pos||[0,0,-.5]),e(p,"spatial")),void 0!==p._panner.orientationX?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setOrientation(n,t,r)),i._emit("orientation",p._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,r,o=this,i=arguments;if(!o._webAudio)return o;if(0===i.length)return o._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return r=o._soundById(parseInt(i[0],10)),r?r._pannerAttr:o._pannerAttr;n=i[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:o._panningModel})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=o._getSoundIds(t),s=0;s<a.length;s++)if(r=o._soundById(a[s])){var p=r._pannerAttr;p={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:p.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:p.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:p.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:p.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:p.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:p.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:p.panningModel};var c=r._panner;c?(c.coneInnerAngle=p.coneInnerAngle,c.coneOuterAngle=p.coneOuterAngle,c.coneOuterGain=p.coneOuterGain,c.distanceModel=p.distanceModel,c.maxDistance=p.maxDistance,c.refDistance=p.refDistance,c.rolloffFactor=p.rolloffFactor,c.panningModel=p.panningModel):(r._pos||(r._pos=o._pos||[0,0,-.5]),e(r,"spatial"))}return o},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,n._stereo?t.stereo(n._stereo):n._pos?t.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,t._refreshBuffer(n)),e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();
/* pako 1.0.2 nodeca/pako */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=a[s]={exports:{}};e[s][0].call(d.exports,function(t){var a=e[s][1][t];return n(a?a:t)},d,d.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=l.assign({level:w,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=o.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==b)throw new Error(d[a]);if(e.header&&o.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===_.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=o.deflateSetDictionary(this.strm,n),a!==b)throw new Error(d[a]);this._dict_set=!0}}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}function s(t,e){return e=e||{},e.gzip=!0,n(t,e)}var o=t("./zlib/deflate"),l=t("./utils/common"),h=t("./utils/strings"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=Object.prototype.toString,u=0,c=4,b=0,g=1,m=2,w=-1,p=0,v=8;i.prototype.push=function(t,e){var a,i,n=this.strm,r=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:e===!0?c:u,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===_.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new l.Buf8(r),n.next_out=0,n.avail_out=r),a=o.deflate(n,i),a!==g&&a!==b)return this.onEnd(a),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||i!==c&&i!==m)||("string"===this.options.to?this.onData(h.buf2binstring(l.shrinkBuf(n.output,n.next_out))):this.onData(l.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&a!==g);return i===c?(a=o.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===b):i!==m||(this.onEnd(b),n.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===b&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=i,a.deflate=n,a.deflateRaw=r,a.gzip=s},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=s.inflateInit2(this.strm,e.windowBits);if(a!==h.Z_OK)throw new Error(d[a]);this.header=new _,s.inflateGetHeader(this.strm,this.header)}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}var s=t("./zlib/inflate"),o=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/constants"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=t("./zlib/gzheader"),u=Object.prototype.toString;i.prototype.push=function(t,e){var a,i,n,r,d,f,_=this.strm,c=this.options.chunkSize,b=this.options.dictionary,g=!1;if(this.ended)return!1;i=e===~~e?e:e===!0?h.Z_FINISH:h.Z_NO_FLUSH,"string"==typeof t?_.input=l.binstring2buf(t):"[object ArrayBuffer]"===u.call(t)?_.input=new Uint8Array(t):_.input=t,_.next_in=0,_.avail_in=_.input.length;do{if(0===_.avail_out&&(_.output=new o.Buf8(c),_.next_out=0,_.avail_out=c),a=s.inflate(_,h.Z_NO_FLUSH),a===h.Z_NEED_DICT&&b&&(f="string"==typeof b?l.string2buf(b):"[object ArrayBuffer]"===u.call(b)?new Uint8Array(b):b,a=s.inflateSetDictionary(this.strm,f)),a===h.Z_BUF_ERROR&&g===!0&&(a=h.Z_OK,g=!1),a!==h.Z_STREAM_END&&a!==h.Z_OK)return this.onEnd(a),this.ended=!0,!1;_.next_out&&(0!==_.avail_out&&a!==h.Z_STREAM_END&&(0!==_.avail_in||i!==h.Z_FINISH&&i!==h.Z_SYNC_FLUSH)||("string"===this.options.to?(n=l.utf8border(_.output,_.next_out),r=_.next_out-n,d=l.buf2string(_.output,n),_.next_out=r,_.avail_out=c-r,r&&o.arraySet(_.output,_.output,n,r,0),this.onData(d)):this.onData(o.shrinkBuf(_.output,_.next_out)))),0===_.avail_in&&0===_.avail_out&&(g=!0)}while((_.avail_in>0||0===_.avail_out)&&a!==h.Z_STREAM_END);return a===h.Z_STREAM_END&&(i=h.Z_FINISH),i===h.Z_FINISH?(a=s.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===h.Z_OK):i!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),_.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===h.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=i,a.inflate=n,a.inflateRaw=r,a.ungzip=n},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,a){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+i),n);for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;e<a;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;e<a;e++)r=t[e],s.set(r,n),n+=r.length;return s}},r={arraySet:function(t,e,a,i,n){for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,n)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(i)},{}],4:[function(t,e,a){"use strict";function i(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&r))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var a="",i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a}var n=t("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var o=new n.Buf8(256),l=0;l<256;l++)o[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;o[254]=o[254]=1,a.string2buf=function(t){var e,a,i,r,s,o=t.length,l=0;for(r=0;r<o;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new n.Buf8(l),s=0,r=0;s<l;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return i(t,t.length)},a.binstring2buf=function(t){for(var e=new n.Buf8(t.length),a=0,i=e.length;a<i;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,s,l=e||t.length,h=new Array(2*l);for(n=0,a=0;a<l;)if(r=t[a++],r<128)h[n++]=r;else if(s=o[r],s>4)h[n++]=65533,a+=s-1;else{for(r&=2===s?31:3===s?15:7;s>1&&a<l;)r=r<<6|63&t[a++],s--;s>1?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return i(h,n)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return a<0?e:0===a?e:a+o[t[a]]>e?a:e}},{"./common":3}],5:[function(t,e,a){"use strict";function i(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do n=n+e[i++]|0,r=r+n|0;while(--s);n%=65521,r%=65521}return n|r<<16|0}e.exports=i},{}],6:[function(t,e,a){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,a){"use strict";function i(){for(var t,e=[],a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}function n(t,e,a,i){var n=r,s=i+a;t^=-1;for(var o=i;o<s;o++)t=t>>>8^n[255&(t^e[o])];return t^-1}var r=i();e.exports=n},{}],8:[function(t,e,a){"use strict";function i(t,e){return t.msg=D[e],e}function n(t){return(t<<1)-(t>4?9:0)}function r(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(R.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function o(t,e){C._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function d(t,e,a,i){var n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,R.arraySet(e,t.input,t.next_in,n,a),1===t.state.wrap?t.adler=N(t.adler,e,n,a):2===t.state.wrap&&(t.adler=O(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)}function f(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-ft?t.strstart-(t.w_size-ft):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+dt,u=h[r+s-1],c=h[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(a=e,h[a+s]===c&&h[a+s-1]===u&&h[a]===h[r]&&h[++a]===h[r+1]){r+=2,a++;do;while(h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&r<_);if(i=dt-(_-r),r=_-dt,i>s){if(t.match_start=e,s=i,i>=o)break;u=h[r+s-1],c=h[r+s]}}while((e=f[e&d])>l&&0!==--n);return s<=t.lookahead?s:t.lookahead}function _(t){var e,a,i,n,r,s=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ft)){R.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do i=t.head[--e],t.head[e]=i>=s?i-s:0;while(--a);a=s,e=a;do i=t.prev[--e],t.prev[e]=i>=s?i-s:0;while(--a);n+=s}if(0===t.strm.avail_in)break;if(a=d(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=a,t.lookahead+t.insert>=ht)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+ht-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<ht)););}while(t.lookahead<ft&&0!==t.strm.avail_in)}function u(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(_(t),0===t.lookahead&&e===I)return vt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,o(t,!1),0===t.strm.avail_out))return vt;if(t.strstart-t.block_start>=t.w_size-ft&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.strstart>t.block_start&&(o(t,!1),0===t.strm.avail_out)?vt:vt}function c(t,e){for(var a,i;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a)),t.match_length>=ht)if(i=C._tr_tally(t,t.strstart-t.match_start,t.match_length-ht),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ht){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function b(t,e){for(var a,i,n;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ht-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a),t.match_length<=5&&(t.strategy===q||t.match_length===ht&&t.strstart-t.match_start>4096)&&(t.match_length=ht-1)),t.prev_length>=ht&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-ht,i=C._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ht),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ht-1,t.strstart++,i&&(o(t,!1),0===t.strm.avail_out))return vt}else if(t.match_available){if(i=C._tr_tally(t,0,t.window[t.strstart-1]),i&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return vt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=C._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function g(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=dt){if(_(t),t.lookahead<=dt&&e===I)return vt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=ht&&t.strstart>0&&(n=t.strstart-1,i=s[n],i===s[++n]&&i===s[++n]&&i===s[++n])){r=t.strstart+dt;do;while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<r);t.match_length=dt-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=ht?(a=C._tr_tally(t,1,t.match_length-ht),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function m(t,e){for(var a;;){if(0===t.lookahead&&(_(t),0===t.lookahead)){if(e===I)return vt;break}if(t.match_length=0,a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function w(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}function p(t){t.window_size=2*t.w_size,r(t.head),t.max_lazy_match=Z[t.level].max_lazy,t.good_match=Z[t.level].good_length,t.nice_match=Z[t.level].nice_length,t.max_chain_length=Z[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ht-1,t.match_available=0,t.ins_h=0}function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=V,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new R.Buf16(2*ot),this.dyn_dtree=new R.Buf16(2*(2*rt+1)),this.bl_tree=new R.Buf16(2*(2*st+1)),r(this.dyn_ltree),r(this.dyn_dtree),r(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new R.Buf16(lt+1),this.heap=new R.Buf16(2*nt+1),r(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new R.Buf16(2*nt+1),r(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function k(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Q,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ut:wt,t.adler=2===e.wrap?0:1,e.last_flush=I,C._tr_init(e),H):i(t,K)}function y(t){var e=k(t);return e===H&&p(t.state),e}function x(t,e){return t&&t.state?2!==t.state.wrap?K:(t.state.gzhead=e,H):K}function z(t,e,a,n,r,s){if(!t)return K;var o=1;if(e===Y&&(e=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),r<1||r>$||a!==V||n<8||n>15||e<0||e>9||s<0||s>W)return i(t,K);8===n&&(n=9);var l=new v;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ht-1)/ht),l.window=new R.Buf8(2*l.w_size),l.head=new R.Buf16(l.hash_size),l.prev=new R.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new R.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,y(t)}function B(t,e){return z(t,e,V,tt,et,J)}function S(t,e){var a,o,d,f;if(!t||!t.state||e>L||e<0)return t?i(t,K):K;if(o=t.state,!t.output||!t.input&&0!==t.avail_in||o.status===pt&&e!==F)return i(t,0===t.avail_out?P:K);if(o.strm=t,a=o.last_flush,o.last_flush=e,o.status===ut)if(2===o.wrap)t.adler=0,l(o,31),l(o,139),l(o,8),o.gzhead?(l(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),l(o,255&o.gzhead.time),l(o,o.gzhead.time>>8&255),l(o,o.gzhead.time>>16&255),l(o,o.gzhead.time>>24&255),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(l(o,255&o.gzhead.extra.length),l(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(t.adler=O(t.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=ct):(l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,zt),o.status=wt);else{var _=V+(o.w_bits-8<<4)<<8,u=-1;u=o.strategy>=G||o.level<2?0:o.level<6?1:6===o.level?2:3,_|=u<<6,0!==o.strstart&&(_|=_t),_+=31-_%31,o.status=wt,h(o,_),0!==o.strstart&&(h(o,t.adler>>>16),h(o,65535&t.adler)),t.adler=1}if(o.status===ct)if(o.gzhead.extra){for(d=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending!==o.pending_buf_size));)l(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=bt)}else o.status=bt;if(o.status===bt)if(o.gzhead.name){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.gzindex=0,o.status=gt)}else o.status=gt;if(o.status===gt)if(o.gzhead.comment){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.status=mt)}else o.status=mt;if(o.status===mt&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(t),o.pending+2<=o.pending_buf_size&&(l(o,255&t.adler),l(o,t.adler>>8&255),t.adler=0,o.status=wt)):o.status=wt),0!==o.pending){if(s(t),0===t.avail_out)return o.last_flush=-1,H}else if(0===t.avail_in&&n(e)<=n(a)&&e!==F)return i(t,P);if(o.status===pt&&0!==t.avail_in)return i(t,P);if(0!==t.avail_in||0!==o.lookahead||e!==I&&o.status!==pt){var c=o.strategy===G?m(o,e):o.strategy===X?g(o,e):Z[o.level].func(o,e);if(c!==yt&&c!==xt||(o.status=pt),c===vt||c===yt)return 0===t.avail_out&&(o.last_flush=-1),H;if(c===kt&&(e===U?C._tr_align(o):e!==L&&(C._tr_stored_block(o,0,0,!1),e===T&&(r(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(t),0===t.avail_out))return o.last_flush=-1,H}return e!==F?H:o.wrap<=0?j:(2===o.wrap?(l(o,255&t.adler),l(o,t.adler>>8&255),l(o,t.adler>>16&255),l(o,t.adler>>24&255),l(o,255&t.total_in),l(o,t.total_in>>8&255),l(o,t.total_in>>16&255),l(o,t.total_in>>24&255)):(h(o,t.adler>>>16),h(o,65535&t.adler)),s(t),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?H:j)}function E(t){var e;return t&&t.state?(e=t.state.status,e!==ut&&e!==ct&&e!==bt&&e!==gt&&e!==mt&&e!==wt&&e!==pt?i(t,K):(t.state=null,e===wt?i(t,M):H)):K}function A(t,e){var a,i,n,s,o,l,h,d,f=e.length;if(!t||!t.state)return K;if(a=t.state,s=a.wrap,2===s||1===s&&a.status!==ut||a.lookahead)return K;for(1===s&&(t.adler=N(t.adler,e,f,0)),a.wrap=0,f>=a.w_size&&(0===s&&(r(a.head),a.strstart=0,a.block_start=0,a.insert=0),d=new R.Buf8(a.w_size),R.arraySet(d,e,f-a.w_size,a.w_size,0),e=d,f=a.w_size),o=t.avail_in,l=t.next_in,h=t.input,t.avail_in=f,t.next_in=0,t.input=e,_(a);a.lookahead>=ht;){i=a.strstart,n=a.lookahead-(ht-1);do a.ins_h=(a.ins_h<<a.hash_shift^a.window[i+ht-1])&a.hash_mask,a.prev[i&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++;while(--n);a.strstart=i,a.lookahead=ht-1,_(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=ht-1,a.match_available=0,t.next_in=l,t.input=h,t.avail_in=o,a.wrap=s,H}var Z,R=t("../utils/common"),C=t("./trees"),N=t("./adler32"),O=t("./crc32"),D=t("./messages"),I=0,U=1,T=3,F=4,L=5,H=0,j=1,K=-2,M=-3,P=-5,Y=-1,q=1,G=2,X=3,W=4,J=0,Q=2,V=8,$=9,tt=15,et=8,at=29,it=256,nt=it+1+at,rt=30,st=19,ot=2*nt+1,lt=15,ht=3,dt=258,ft=dt+ht+1,_t=32,ut=42,ct=69,bt=73,gt=91,mt=103,wt=113,pt=666,vt=1,kt=2,yt=3,xt=4,zt=3;Z=[new w(0,0,0,0,u),new w(4,4,8,4,c),new w(4,5,16,8,c),new w(4,6,32,32,c),new w(4,4,16,16,b),new w(8,16,32,32,b),new w(8,16,128,128,b),new w(8,32,128,256,b),new w(32,128,258,1024,b),new w(32,258,258,4096,b)],a.deflateInit=B,a.deflateInit2=z,a.deflateReset=y,a.deflateResetKeep=k,a.deflateSetHeader=x,a.deflate=S,a.deflateEnd=E,a.deflateSetDictionary=A,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e,a){"use strict";function i(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}e.exports=i},{}],10:[function(t,e,a){"use strict";var i=30,n=12;e.exports=function(t,e){var a,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S,E,A;a=t.state,r=t.next_in,E=t.input,s=r+(t.avail_in-5),o=t.next_out,A=t.output,l=o-(e-t.avail_out),h=o+(t.avail_out-257),d=a.dmax,f=a.wsize,_=a.whave,u=a.wnext,c=a.window,b=a.hold,g=a.bits,m=a.lencode,w=a.distcode,p=(1<<a.lenbits)-1,v=(1<<a.distbits)-1;t:do{g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=m[b&p];e:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,0===y)A[o++]=65535&k;else{if(!(16&y)){if(0===(64&y)){k=m[(65535&k)+(b&(1<<y)-1)];continue e}if(32&y){a.mode=n;break t}t.msg="invalid literal/length code",a.mode=i;break t}x=65535&k,y&=15,y&&(g<y&&(b+=E[r++]<<g,g+=8),x+=b&(1<<y)-1,b>>>=y,g-=y),g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=w[b&v];a:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,!(16&y)){if(0===(64&y)){k=w[(65535&k)+(b&(1<<y)-1)];continue a}t.msg="invalid distance code",a.mode=i;break t}if(z=65535&k,y&=15,g<y&&(b+=E[r++]<<g,g+=8,g<y&&(b+=E[r++]<<g,g+=8)),z+=b&(1<<y)-1,z>d){t.msg="invalid distance too far back",a.mode=i;break t}if(b>>>=y,g-=y,y=o-l,z>y){if(y=z-y,y>_&&a.sane){t.msg="invalid distance too far back",a.mode=i;break t}if(B=0,S=c,0===u){if(B+=f-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}else if(u<y){if(B+=f+u-y,y-=u,y<x){x-=y;do A[o++]=c[B++];while(--y);if(B=0,u<x){y=u,x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}}else if(B+=u-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}for(;x>2;)A[o++]=S[B++],A[o++]=S[B++],A[o++]=S[B++],x-=3;x&&(A[o++]=S[B++],x>1&&(A[o++]=S[B++]))}else{B=o-z;do A[o++]=A[B++],A[o++]=A[B++],A[o++]=A[B++],x-=3;while(x>2);x&&(A[o++]=A[B++],x>1&&(A[o++]=A[B++]))}break}}break}}while(r<s&&o<h);x=g>>3,r-=x,g-=x<<3,b&=(1<<g)-1,t.next_in=r,t.next_out=o,t.avail_in=r<s?5+(s-r):5-(r-s),t.avail_out=o<h?257+(h-o):257-(o-h),a.hold=b,a.bits=g}},{}],11:[function(t,e,a){"use strict";function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new w.Buf16(320),this.work=new w.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=T,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new w.Buf32(bt),e.distcode=e.distdyn=new w.Buf32(gt),e.sane=1,e.back=-1,Z):N}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,r(t)):N}function o(t,e){var a,i;return t&&t.state?(i=t.state,e<0?(a=0,e=-e):(a=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15)?N:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,s(t))):N}function l(t,e){var a,i;return t?(i=new n,t.state=i,i.window=null,a=o(t,e),a!==Z&&(t.state=null),a):N}function h(t){return l(t,wt)}function d(t){if(pt){var e;for(g=new w.Buf32(512),m=new w.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(y(z,t.lens,0,288,g,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;y(B,t.lens,0,32,m,0,t.work,{bits:5}),pt=!1}t.lencode=g,t.lenbits=9,t.distcode=m,t.distbits=5}function f(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new w.Buf8(r.wsize)),i>=r.wsize?(w.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(n=r.wsize-r.wnext,n>i&&(n=i),w.arraySet(r.window,e,a-i,n,r.wnext),i-=n,i?(w.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}function _(t,e){var a,n,r,s,o,l,h,_,u,c,b,g,m,bt,gt,mt,wt,pt,vt,kt,yt,xt,zt,Bt,St=0,Et=new w.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return N;a=t.state,a.mode===X&&(a.mode=W),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,c=l,b=h,xt=Z;t:for(;;)switch(a.mode){case T:if(0===a.wrap){a.mode=W;break}for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(2&a.wrap&&35615===_){a.check=0,Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0),_=0,u=0,a.mode=F;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=_t;break}if((15&_)!==U){t.msg="unknown compression method",a.mode=_t;break}if(_>>>=4,u-=4,yt=(15&_)+8,0===a.wbits)a.wbits=yt;else if(yt>a.wbits){t.msg="invalid window size",a.mode=_t;break}a.dmax=1<<yt,t.adler=a.check=1,a.mode=512&_?q:X,_=0,u=0;break;case F:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(a.flags=_,(255&a.flags)!==U){t.msg="unknown compression method",a.mode=_t;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=_t;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=L;case L:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.time=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,Et[2]=_>>>16&255,Et[3]=_>>>24&255,a.check=v(a.check,Et,4,0)),_=0,u=0,a.mode=H;case H:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=j;case j:if(1024&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0}else a.head&&(a.head.extra=null);a.mode=K;case K:if(1024&a.flags&&(g=a.length,g>l&&(g=l),g&&(a.head&&(yt=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),w.arraySet(a.head.extra,n,s,g,yt)),512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,a.length-=g),a.length))break t;a.length=0,a.mode=M;case M:if(2048&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.name+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=P;case P:if(4096&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.comment+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.comment=null);a.mode=Y;case Y:if(512&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=_t;break}_=0,u=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=X;break;case q:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}t.adler=a.check=i(_),_=0,u=0,a.mode=G;case G:if(0===a.havedict)return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,C;t.adler=a.check=1,a.mode=X;case X:if(e===E||e===A)break t;case W:if(a.last){_>>>=7&u,u-=7&u,a.mode=ht;break}for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}switch(a.last=1&_,_>>>=1,u-=1,3&_){case 0:a.mode=J;break;case 1:if(d(a),a.mode=at,e===A){_>>>=2,u-=2;break t}break;case 2:a.mode=$;break;case 3:t.msg="invalid block type",a.mode=_t}_>>>=2,u-=2;break;case J:for(_>>>=7&u,u-=7&u;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if((65535&_)!==(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=_t;break}if(a.length=65535&_,_=0,u=0,a.mode=Q,e===A)break t;case Q:a.mode=V;case V:if(g=a.length){if(g>l&&(g=l),g>h&&(g=h),0===g)break t;w.arraySet(r,n,s,g,o),l-=g,s+=g,h-=g,o+=g,a.length-=g;break}a.mode=X;break;case $:for(;u<14;){if(0===l)break t;
l--,_+=n[s++]<<u,u+=8}if(a.nlen=(31&_)+257,_>>>=5,u-=5,a.ndist=(31&_)+1,_>>>=5,u-=5,a.ncode=(15&_)+4,_>>>=4,u-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=_t;break}a.have=0,a.mode=tt;case tt:for(;a.have<a.ncode;){for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.lens[At[a.have++]]=7&_,_>>>=3,u-=3}for(;a.have<19;)a.lens[At[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,zt={bits:a.lenbits},xt=y(x,a.lens,0,19,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid code lengths set",a.mode=_t;break}a.have=0,a.mode=et;case et:for(;a.have<a.nlen+a.ndist;){for(;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(wt<16)_>>>=gt,u-=gt,a.lens[a.have++]=wt;else{if(16===wt){for(Bt=gt+2;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_>>>=gt,u-=gt,0===a.have){t.msg="invalid bit length repeat",a.mode=_t;break}yt=a.lens[a.have-1],g=3+(3&_),_>>>=2,u-=2}else if(17===wt){for(Bt=gt+3;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=3+(7&_),_>>>=3,u-=3}else{for(Bt=gt+7;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=11+(127&_),_>>>=7,u-=7}if(a.have+g>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=_t;break}for(;g--;)a.lens[a.have++]=yt}}if(a.mode===_t)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=_t;break}if(a.lenbits=9,zt={bits:a.lenbits},xt=y(z,a.lens,0,a.nlen,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid literal/lengths set",a.mode=_t;break}if(a.distbits=6,a.distcode=a.distdyn,zt={bits:a.distbits},xt=y(B,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,zt),a.distbits=zt.bits,xt){t.msg="invalid distances set",a.mode=_t;break}if(a.mode=at,e===A)break t;case at:a.mode=it;case it:if(l>=6&&h>=258){t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,k(t,b),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,a.mode===X&&(a.back=-1);break}for(a.back=0;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(mt&&0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.lencode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,a.length=wt,0===mt){a.mode=lt;break}if(32&mt){a.back=-1,a.mode=X;break}if(64&mt){t.msg="invalid literal/length code",a.mode=_t;break}a.extra=15&mt,a.mode=nt;case nt:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=rt;case rt:for(;St=a.distcode[_&(1<<a.distbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.distcode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,64&mt){t.msg="invalid distance code",a.mode=_t;break}a.offset=wt,a.extra=15&mt,a.mode=st;case st:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=_t;break}a.mode=ot;case ot:if(0===h)break t;if(g=b-h,a.offset>g){if(g=a.offset-g,g>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=_t;break}g>a.wnext?(g-=a.wnext,m=a.wsize-g):m=a.wnext-g,g>a.length&&(g=a.length),bt=a.window}else bt=r,m=o-a.offset,g=a.length;g>h&&(g=h),h-=g,a.length-=g;do r[o++]=bt[m++];while(--g);0===a.length&&(a.mode=it);break;case lt:if(0===h)break t;r[o++]=a.length,h--,a.mode=it;break;case ht:if(a.wrap){for(;u<32;){if(0===l)break t;l--,_|=n[s++]<<u,u+=8}if(b-=h,t.total_out+=b,a.total+=b,b&&(t.adler=a.check=a.flags?v(a.check,r,b,o-b):p(a.check,r,b,o-b)),b=h,(a.flags?_:i(_))!==a.check){t.msg="incorrect data check",a.mode=_t;break}_=0,u=0}a.mode=dt;case dt:if(a.wrap&&a.flags){for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=_t;break}_=0,u=0}a.mode=ft;case ft:xt=R;break t;case _t:xt=O;break t;case ut:return D;case ct:default:return N}return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,(a.wsize||b!==t.avail_out&&a.mode<_t&&(a.mode<ht||e!==S))&&f(t,t.output,t.next_out,b-t.avail_out)?(a.mode=ut,D):(c-=t.avail_in,b-=t.avail_out,t.total_in+=c,t.total_out+=b,a.total+=b,a.wrap&&b&&(t.adler=a.check=a.flags?v(a.check,r,b,t.next_out-b):p(a.check,r,b,t.next_out-b)),t.data_type=a.bits+(a.last?64:0)+(a.mode===X?128:0)+(a.mode===at||a.mode===Q?256:0),(0===c&&0===b||e===S)&&xt===Z&&(xt=I),xt)}function u(t){if(!t||!t.state)return N;var e=t.state;return e.window&&(e.window=null),t.state=null,Z}function c(t,e){var a;return t&&t.state?(a=t.state,0===(2&a.wrap)?N:(a.head=e,e.done=!1,Z)):N}function b(t,e){var a,i,n,r=e.length;return t&&t.state?(a=t.state,0!==a.wrap&&a.mode!==G?N:a.mode===G&&(i=1,i=p(i,e,r,0),i!==a.check)?O:(n=f(t,e,r,r))?(a.mode=ut,D):(a.havedict=1,Z)):N}var g,m,w=t("../utils/common"),p=t("./adler32"),v=t("./crc32"),k=t("./inffast"),y=t("./inftrees"),x=0,z=1,B=2,S=4,E=5,A=6,Z=0,R=1,C=2,N=-2,O=-3,D=-4,I=-5,U=8,T=1,F=2,L=3,H=4,j=5,K=6,M=7,P=8,Y=9,q=10,G=11,X=12,W=13,J=14,Q=15,V=16,$=17,tt=18,et=19,at=20,it=21,nt=22,rt=23,st=24,ot=25,lt=26,ht=27,dt=28,ft=29,_t=30,ut=31,ct=32,bt=852,gt=592,mt=15,wt=mt,pt=!0;a.inflateReset=s,a.inflateReset2=o,a.inflateResetKeep=r,a.inflateInit=h,a.inflateInit2=l,a.inflate=_,a.inflateEnd=u,a.inflateGetHeader=c,a.inflateSetDictionary=b,a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e,a){"use strict";var i=t("../utils/common"),n=15,r=852,s=592,o=0,l=1,h=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,a,c,b,g,m,w){var p,v,k,y,x,z,B,S,E,A=w.bits,Z=0,R=0,C=0,N=0,O=0,D=0,I=0,U=0,T=0,F=0,L=null,H=0,j=new i.Buf16(n+1),K=new i.Buf16(n+1),M=null,P=0;for(Z=0;Z<=n;Z++)j[Z]=0;for(R=0;R<c;R++)j[e[a+R]]++;for(O=A,N=n;N>=1&&0===j[N];N--);if(O>N&&(O=N),0===N)return b[g++]=20971520,b[g++]=20971520,w.bits=1,0;for(C=1;C<N&&0===j[C];C++);for(O<C&&(O=C),U=1,Z=1;Z<=n;Z++)if(U<<=1,U-=j[Z],U<0)return-1;if(U>0&&(t===o||1!==N))return-1;for(K[1]=0,Z=1;Z<n;Z++)K[Z+1]=K[Z]+j[Z];for(R=0;R<c;R++)0!==e[a+R]&&(m[K[e[a+R]]++]=R);if(t===o?(L=M=m,z=19):t===l?(L=d,H-=257,M=f,P-=257,z=256):(L=_,M=u,z=-1),F=0,R=0,Z=C,x=g,D=O,I=0,k=-1,T=1<<O,y=T-1,t===l&&T>r||t===h&&T>s)return 1;for(var Y=0;;){Y++,B=Z-I,m[R]<z?(S=0,E=m[R]):m[R]>z?(S=M[P+m[R]],E=L[H+m[R]]):(S=96,E=0),p=1<<Z-I,v=1<<D,C=v;do v-=p,b[x+(F>>I)+v]=B<<24|S<<16|E|0;while(0!==v);for(p=1<<Z-1;F&p;)p>>=1;if(0!==p?(F&=p-1,F+=p):F=0,R++,0===--j[Z]){if(Z===N)break;Z=e[a+m[R]]}if(Z>O&&(F&y)!==k){for(0===I&&(I=O),x+=C,D=Z-I,U=1<<D;D+I<N&&(U-=j[D+I],!(U<=0));)D++,U<<=1;if(T+=1<<D,t===l&&T>r||t===h&&T>s)return 1;k=F&y,b[k]=O<<24|D<<16|x-g|0}}return 0!==F&&(b[x+F]=Z-I<<24|64<<16|0),w.bits=O,0}},{"../utils/common":3}],13:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,a){"use strict";function i(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?lt[t]:lt[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,a){t.bi_valid>W-a?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>W-t.bi_valid,t.bi_valid+=a-W):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function h(t,e,a){l(t,a[2*e],a[2*e+1])}function d(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}function f(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function _(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;r<=X;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<G;a++)i=t.heap[a],r=l[2*l[2*i+1]+1]+1,r>c&&(r=c,b++),l[2*i+1]=r,i>h||(t.bl_count[r]++,s=0,i>=u&&(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(b>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)n=t.heap[--a],n>h||(l[2*n+1]!==r&&(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}function u(t,e,a){var i,n,r=new Array(X+1),s=0;for(i=1;i<=X;i++)r[i]=s=s+a[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=d(r[o]++,o))}}function c(){var t,e,a,i,r,s=new Array(X+1);for(a=0,i=0;i<K-1;i++)for(dt[i]=a,t=0;t<1<<et[i];t++)ht[a++]=i;for(ht[a-1]=i,r=0,i=0;i<16;i++)for(ft[i]=r,t=0;t<1<<at[i];t++)lt[r++]=i;for(r>>=7;i<Y;i++)for(ft[i]=r<<7,t=0;t<1<<at[i]-7;t++)lt[256+r++]=i;for(e=0;e<=X;e++)s[e]=0;for(t=0;t<=143;)st[2*t+1]=8,t++,s[8]++;for(;t<=255;)st[2*t+1]=9,t++,s[9]++;for(;t<=279;)st[2*t+1]=7,t++,s[7]++;for(;t<=287;)st[2*t+1]=8,t++,s[8]++;for(u(st,P+1,s),t=0;t<Y;t++)ot[2*t+1]=5,ot[2*t]=d(t,5);_t=new n(st,et,M+1,P,X),ut=new n(ot,at,0,Y,X),ct=new n(new Array(0),it,0,q,J)}function b(t){var e;for(e=0;e<P;e++)t.dyn_ltree[2*e]=0;for(e=0;e<Y;e++)t.dyn_dtree[2*e]=0;for(e=0;e<q;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Q]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function g(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function m(t,e,a,i){g(t),i&&(o(t,a),o(t,~a)),N.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function w(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function p(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&w(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!w(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function v(t,e,a){var i,n,r,o,d=0;if(0!==t.last_lit)do i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],n=t.pending_buf[t.l_buf+d],d++,0===i?h(t,n,e):(r=ht[n],h(t,r+M+1,e),o=et[r],0!==o&&(n-=dt[r],l(t,n,o)),i--,r=s(i),h(t,r,a),o=at[r],0!==o&&(i-=ft[r],l(t,i,o)));while(d<t.last_lit);h(t,Q,e)}function k(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=G,a=0;a<l;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)n=t.heap[++t.heap_len]=h<2?++h:0,r[2*n]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len>>1;a>=1;a--)p(t,r,a);n=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,p(t,r,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],_(t,e),u(r,h,t.bl_count)}function y(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=s,s=e[2*(i+1)+1],++o<l&&n===s||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[2*V]++):o<=10?t.bl_tree[2*$]++:t.bl_tree[2*tt]++,o=0,r=n,0===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function x(t,e,a){var i,n,r=-1,s=e[1],o=0,d=7,f=4;for(0===s&&(d=138,f=3),i=0;i<=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o<d&&n===s)){if(o<f){do h(t,n,t.bl_tree);while(0!==--o)}else 0!==n?(n!==r&&(h(t,n,t.bl_tree),o--),h(t,V,t.bl_tree),l(t,o-3,2)):o<=10?(h(t,$,t.bl_tree),l(t,o-3,3)):(h(t,tt,t.bl_tree),l(t,o-11,7));o=0,r=n,0===s?(d=138,f=3):n===s?(d=6,f=3):(d=7,f=4)}}function z(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),k(t,t.bl_desc),e=q-1;e>=3&&0===t.bl_tree[2*nt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function B(t,e,a,i){var n;for(l(t,e-257,5),l(t,a-1,5),l(t,i-4,4),n=0;n<i;n++)l(t,t.bl_tree[2*nt[n]+1],3);x(t,t.dyn_ltree,e-1),x(t,t.dyn_dtree,a-1)}function S(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return D;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return I;for(e=32;e<M;e++)if(0!==t.dyn_ltree[2*e])return I;return D}function E(t){bt||(c(),bt=!0),t.l_desc=new r(t.dyn_ltree,_t),t.d_desc=new r(t.dyn_dtree,ut),t.bl_desc=new r(t.bl_tree,ct),t.bi_buf=0,t.bi_valid=0,b(t)}function A(t,e,a,i){l(t,(T<<1)+(i?1:0),3),m(t,e,a,!0)}function Z(t){l(t,F<<1,3),h(t,Q,st),f(t)}function R(t,e,a,i){var n,r,s=0;t.level>0?(t.strm.data_type===U&&(t.strm.data_type=S(t)),k(t,t.l_desc),k(t,t.d_desc),s=z(t),n=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=n&&(n=r)):n=r=a+5,a+4<=n&&e!==-1?A(t,e,a,i):t.strategy===O||r===n?(l(t,(F<<1)+(i?1:0),3),v(t,st,ot)):(l(t,(L<<1)+(i?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),b(t),i&&g(t)}function C(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ht[a]+M+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1}var N=t("../utils/common"),O=4,D=0,I=1,U=2,T=0,F=1,L=2,H=3,j=258,K=29,M=256,P=M+1+K,Y=30,q=19,G=2*P+1,X=15,W=16,J=7,Q=256,V=16,$=17,tt=18,et=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],it=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rt=512,st=new Array(2*(P+2));i(st);var ot=new Array(2*Y);i(ot);var lt=new Array(rt);i(lt);var ht=new Array(j-H+1);i(ht);var dt=new Array(K);i(dt);var ft=new Array(Y);i(ft);var _t,ut,ct,bt=!1;a._tr_init=E,a._tr_stored_block=A,a._tr_flush_block=R,a._tr_tally=C,a._tr_align=Z},{"../utils/common":3}],15:[function(t,e,a){"use strict";function i(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=i},{}],"/":[function(t,e,a){"use strict";var i=t("./lib/utils/common").assign,n=t("./lib/deflate"),r=t("./lib/inflate"),s=t("./lib/zlib/constants"),o={};i(o,n,r,s),e.exports=o},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")});

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

if(typeof define == "function" && define.__amd) {
	define.amd = define.__amd;
	delete define.__amd;
}