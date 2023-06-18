#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_haxe_IMap
#include <haxe/IMap.h>
#endif
#ifndef INCLUDED_haxe_Timer
#include <haxe/Timer.h>
#endif
#ifndef INCLUDED_haxe_ds_IntMap
#include <haxe/ds/IntMap.h>
#endif
#ifndef INCLUDED_haxe_ds_List
#include <haxe/ds/List.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_ApplicationEventInfo
#include <lime/_internal/backend/native/ApplicationEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_ClipboardEventInfo
#include <lime/_internal/backend/native/ClipboardEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_DropEventInfo
#include <lime/_internal/backend/native/DropEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_GamepadEventInfo
#include <lime/_internal/backend/native/GamepadEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_JoystickEventInfo
#include <lime/_internal/backend/native/JoystickEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_KeyEventInfo
#include <lime/_internal/backend/native/KeyEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_MouseEventInfo
#include <lime/_internal/backend/native/MouseEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeApplication
#include <lime/_internal/backend/native/NativeApplication.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeCFFI
#include <lime/_internal/backend/native/NativeCFFI.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeOpenGLRenderContext
#include <lime/_internal/backend/native/NativeOpenGLRenderContext.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeWindow
#include <lime/_internal/backend/native/NativeWindow.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_RenderEventInfo
#include <lime/_internal/backend/native/RenderEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_SensorEventInfo
#include <lime/_internal/backend/native/SensorEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_TextEventInfo
#include <lime/_internal/backend/native/TextEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_TouchEventInfo
#include <lime/_internal/backend/native/TouchEventInfo.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_WindowEventInfo
#include <lime/_internal/backend/native/WindowEventInfo.h>
#endif
#ifndef INCLUDED_lime_app_Application
#include <lime/app/Application.h>
#endif
#ifndef INCLUDED_lime_app_IModule
#include <lime/app/IModule.h>
#endif
#ifndef INCLUDED_lime_app_Module
#include <lime/app/Module.h>
#endif
#ifndef INCLUDED_lime_app__Event_Float_Float_Float_Void
#include <lime/app/_Event_Float_Float_Float_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Float_Float_Int_Void
#include <lime/app/_Event_Float_Float_Int_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Float_Float_Void
#include <lime/app/_Event_Float_Float_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Float_Float_lime_ui_MouseButton_Void
#include <lime/app/_Event_Float_Float_lime_ui_MouseButton_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Float_Float_lime_ui_MouseWheelMode_Void
#include <lime/app/_Event_Float_Float_lime_ui_MouseWheelMode_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Int_Float_Float_Void
#include <lime/app/_Event_Int_Float_Float_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Int_Float_Void
#include <lime/app/_Event_Int_Float_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Int_Int_Void
#include <lime/app/_Event_Int_Int_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Int_Void
#include <lime/app/_Event_Int_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Int_lime_ui_JoystickHatPosition_Void
#include <lime/app/_Event_Int_lime_ui_JoystickHatPosition_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_String_Int_Int_Void
#include <lime/app/_Event_String_Int_Int_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_String_Void
#include <lime/app/_Event_String_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_Void_Void
#include <lime/app/_Event_Void_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_lime_graphics_RenderContext_Void
#include <lime/app/_Event_lime_graphics_RenderContext_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_lime_ui_GamepadAxis_Float_Void
#include <lime/app/_Event_lime_ui_GamepadAxis_Float_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_lime_ui_GamepadButton_Void
#include <lime/app/_Event_lime_ui_GamepadButton_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void
#include <lime/app/_Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void.h>
#endif
#ifndef INCLUDED_lime_app__Event_lime_ui_Touch_Void
#include <lime/app/_Event_lime_ui_Touch_Void.h>
#endif
#ifndef INCLUDED_lime_graphics_RenderContext
#include <lime/graphics/RenderContext.h>
#endif
#ifndef INCLUDED_lime_graphics_opengl_GL
#include <lime/graphics/opengl/GL.h>
#endif
#ifndef INCLUDED_lime_media_AudioContext
#include <lime/media/AudioContext.h>
#endif
#ifndef INCLUDED_lime_media_AudioManager
#include <lime/media/AudioManager.h>
#endif
#ifndef INCLUDED_lime_system_Clipboard
#include <lime/system/Clipboard.h>
#endif
#ifndef INCLUDED_lime_system_Sensor
#include <lime/system/Sensor.h>
#endif
#ifndef INCLUDED_lime_system_System
#include <lime/system/System.h>
#endif
#ifndef INCLUDED_lime_ui_Gamepad
#include <lime/ui/Gamepad.h>
#endif
#ifndef INCLUDED_lime_ui_Joystick
#include <lime/ui/Joystick.h>
#endif
#ifndef INCLUDED_lime_ui_MouseWheelMode
#include <lime/ui/MouseWheelMode.h>
#endif
#ifndef INCLUDED_lime_ui_Touch
#include <lime/ui/Touch.h>
#endif
#ifndef INCLUDED_lime_ui_Window
#include <lime/ui/Window.h>
#endif
#ifndef INCLUDED_lime_ui__KeyModifier_KeyModifier_Impl_
#include <lime/ui/_KeyModifier/KeyModifier_Impl_.h>
#endif
#ifndef INCLUDED_sys_thread_EventLoop
#include <sys/thread/EventLoop.h>
#endif
#ifndef INCLUDED_sys_thread_NextEventTime
#include <sys/thread/NextEventTime.h>
#endif
#ifndef INCLUDED_sys_thread__Thread_HaxeThread
#include <sys/thread/_Thread/HaxeThread.h>
#endif
#ifndef INCLUDED_sys_thread__Thread_Thread_Impl_
#include <sys/thread/_Thread/Thread_Impl_.h>
#endif

HX_DEFINE_STACK_FRAME(_hx_pos_8a85bd2a97260674_43_new,"lime._internal.backend.native.NativeApplication","new",0xc2e44119,"lime._internal.backend.native.NativeApplication.new","lime/_internal/backend/native/NativeApplication.hx",43,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_e85ed898374c2632_69___init__,"::lime::_internal::backend::native::NativeApplication_obj","__init__",0xb8ff4971,"::lime::_internal::backend::native::NativeApplication_obj.__init__","lime/_internal/backend/native/NativeApplication.hx",69,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_93_advanceTimer,"lime._internal.backend.native.NativeApplication","advanceTimer",0x73d1400a,"lime._internal.backend.native.NativeApplication.advanceTimer","lime/_internal/backend/native/NativeApplication.hx",93,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_106_exec,"lime._internal.backend.native.NativeApplication","exec",0xbef024b8,"lime._internal.backend.native.NativeApplication.exec","lime/_internal/backend/native/NativeApplication.hx",106,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_160_exit,"lime._internal.backend.native.NativeApplication","exit",0xbef02845,"lime._internal.backend.native.NativeApplication.exit","lime/_internal/backend/native/NativeApplication.hx",160,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_170_handleApplicationEvent,"lime._internal.backend.native.NativeApplication","handleApplicationEvent",0x2fd54159,"lime._internal.backend.native.NativeApplication.handleApplicationEvent","lime/_internal/backend/native/NativeApplication.hx",170,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_183_handleClipboardEvent,"lime._internal.backend.native.NativeApplication","handleClipboardEvent",0xc0a84753,"lime._internal.backend.native.NativeApplication.handleClipboardEvent","lime/_internal/backend/native/NativeApplication.hx",183,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_188_handleDropEvent,"lime._internal.backend.native.NativeApplication","handleDropEvent",0x7f7bbedc,"lime._internal.backend.native.NativeApplication.handleDropEvent","lime/_internal/backend/native/NativeApplication.hx",188,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_196_handleGamepadEvent,"lime._internal.backend.native.NativeApplication","handleGamepadEvent",0x1eeb62e8,"lime._internal.backend.native.NativeApplication.handleGamepadEvent","lime/_internal/backend/native/NativeApplication.hx",196,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_220_handleJoystickEvent,"lime._internal.backend.native.NativeApplication","handleJoystickEvent",0xd92b03af,"lime._internal.backend.native.NativeApplication.handleJoystickEvent","lime/_internal/backend/native/NativeApplication.hx",220,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_251_handleKeyEvent,"lime._internal.backend.native.NativeApplication","handleKeyEvent",0x72c15daa,"lime._internal.backend.native.NativeApplication.handleKeyEvent","lime/_internal/backend/native/NativeApplication.hx",251,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_330_handleMouseEvent,"lime._internal.backend.native.NativeApplication","handleMouseEvent",0xca833524,"lime._internal.backend.native.NativeApplication.handleMouseEvent","lime/_internal/backend/native/NativeApplication.hx",330,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_359_handleRenderEvent,"lime._internal.backend.native.NativeApplication","handleRenderEvent",0x1dcebc95,"lime._internal.backend.native.NativeApplication.handleRenderEvent","lime/_internal/backend/native/NativeApplication.hx",359,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_411_handleSensorEvent,"lime._internal.backend.native.NativeApplication","handleSensorEvent",0x98787b31,"lime._internal.backend.native.NativeApplication.handleSensorEvent","lime/_internal/backend/native/NativeApplication.hx",411,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_421_handleTextEvent,"lime._internal.backend.native.NativeApplication","handleTextEvent",0xd6b1219e,"lime._internal.backend.native.NativeApplication.handleTextEvent","lime/_internal/backend/native/NativeApplication.hx",421,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_442_handleTouchEvent,"lime._internal.backend.native.NativeApplication","handleTouchEvent",0xa647254a,"lime._internal.backend.native.NativeApplication.handleTouchEvent","lime/_internal/backend/native/NativeApplication.hx",442,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_503_handleWindowEvent,"lime._internal.backend.native.NativeApplication","handleWindowEvent",0x42f025bb,"lime._internal.backend.native.NativeApplication.handleWindowEvent","lime/_internal/backend/native/NativeApplication.hx",503,0xc1eba895)
HX_LOCAL_STACK_FRAME(_hx_pos_8a85bd2a97260674_569_updateTimer,"lime._internal.backend.native.NativeApplication","updateTimer",0xd6c37ab5,"lime._internal.backend.native.NativeApplication.updateTimer","lime/_internal/backend/native/NativeApplication.hx",569,0xc1eba895)
namespace lime{
namespace _internal{
namespace backend{
namespace native{

void NativeApplication_obj::__construct( ::lime::app::Application parent){
            	HX_GC_STACKFRAME(&_hx_pos_8a85bd2a97260674_43_new)
HXLINE(  58)		this->windowEventInfo =  ::lime::_internal::backend::native::WindowEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null());
HXLINE(  57)		this->unusedTouchesPool =  ::haxe::ds::List_obj::__alloc( HX_CTX );
HXLINE(  56)		this->touchEventInfo =  ::lime::_internal::backend::native::TouchEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null(),null(),null());
HXLINE(  55)		this->textEventInfo =  ::lime::_internal::backend::native::TextEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null());
HXLINE(  54)		this->sensorEventInfo =  ::lime::_internal::backend::native::SensorEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null());
HXLINE(  53)		this->renderEventInfo =  ::lime::_internal::backend::native::RenderEventInfo_obj::__alloc( HX_CTX ,0);
HXLINE(  52)		this->mouseEventInfo =  ::lime::_internal::backend::native::MouseEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null(),null());
HXLINE(  51)		this->keyEventInfo =  ::lime::_internal::backend::native::KeyEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null());
HXLINE(  50)		this->joystickEventInfo =  ::lime::_internal::backend::native::JoystickEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null());
HXLINE(  49)		this->gamepadEventInfo =  ::lime::_internal::backend::native::GamepadEventInfo_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null());
HXLINE(  48)		this->dropEventInfo =  ::lime::_internal::backend::native::DropEventInfo_obj::__alloc( HX_CTX ,null(),null());
HXLINE(  47)		this->currentTouches =  ::haxe::ds::IntMap_obj::__alloc( HX_CTX );
HXLINE(  46)		this->clipboardEventInfo =  ::lime::_internal::backend::native::ClipboardEventInfo_obj::__alloc( HX_CTX ,null());
HXLINE(  45)		this->applicationEventInfo =  ::lime::_internal::backend::native::ApplicationEventInfo_obj::__alloc( HX_CTX ,0,null());
HXLINE(  75)		this->parent = parent;
HXLINE(  76)		this->pauseTimer = -1;
HXLINE(  77)		this->toggleFullscreen = true;
HXLINE(  79)		::lime::media::AudioManager_obj::init(null());
HXLINE(  86)		this->handle = ( ( ::Dynamic)(::lime::_internal::backend::native::NativeCFFI_obj::lime_application_create()) );
            	}

Dynamic NativeApplication_obj::__CreateEmpty() { return new NativeApplication_obj; }

void *NativeApplication_obj::_hx_vtable = 0;

Dynamic NativeApplication_obj::__Create(::hx::DynamicArray inArgs)
{
	::hx::ObjectPtr< NativeApplication_obj > _hx_result = new NativeApplication_obj();
	_hx_result->__construct(inArgs[0]);
	return _hx_result;
}

bool NativeApplication_obj::_hx_isInstanceOf(int inClassId) {
	return inClassId==(int)0x00000001 || inClassId==(int)0x55920611;
}

void NativeApplication_obj::__init__(){
            	HX_STACKFRAME(&_hx_pos_e85ed898374c2632_69___init__)
HXDLIN(  69)		 ::Dynamic init = ::hx::ClassOf< ::lime::_internal::backend::native::NativeCFFI >();
            	}


void NativeApplication_obj::advanceTimer(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_93_advanceTimer)
HXDLIN(  93)		if ((this->pauseTimer > -1)) {
HXLINE(  95)			int offset = ::lime::_hx_system::System_obj::getTimer();
HXDLIN(  95)			int offset1 = (offset - this->pauseTimer);
HXLINE(  96)			{
HXLINE(  96)				int _g = 0;
HXDLIN(  96)				int _g1 = ::haxe::Timer_obj::sRunningTimers->length;
HXDLIN(  96)				while((_g < _g1)){
HXLINE(  96)					_g = (_g + 1);
HXDLIN(  96)					int i = (_g - 1);
HXLINE(  98)					if (::hx::IsNotNull( ::haxe::Timer_obj::sRunningTimers->__get(i).StaticCast<  ::haxe::Timer >() )) {
HXLINE(  98)						 ::haxe::Timer fh = ::haxe::Timer_obj::sRunningTimers->__get(i).StaticCast<  ::haxe::Timer >();
HXDLIN(  98)						fh->mFireAt = (fh->mFireAt + offset1);
            					}
            				}
            			}
HXLINE( 100)			this->pauseTimer = -1;
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,advanceTimer,(void))

int NativeApplication_obj::exec(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_106_exec)
HXLINE( 109)		::lime::_internal::backend::native::NativeCFFI_obj::lime_application_event_manager_register(::hx::DynamicPtr(this->handleApplicationEvent_dyn()),::hx::DynamicPtr(this->applicationEventInfo));
HXLINE( 110)		::lime::_internal::backend::native::NativeCFFI_obj::lime_clipboard_event_manager_register(::hx::DynamicPtr(this->handleClipboardEvent_dyn()),::hx::DynamicPtr(this->clipboardEventInfo));
HXLINE( 111)		::lime::_internal::backend::native::NativeCFFI_obj::lime_drop_event_manager_register(::hx::DynamicPtr(this->handleDropEvent_dyn()),::hx::DynamicPtr(this->dropEventInfo));
HXLINE( 112)		::lime::_internal::backend::native::NativeCFFI_obj::lime_gamepad_event_manager_register(::hx::DynamicPtr(this->handleGamepadEvent_dyn()),::hx::DynamicPtr(this->gamepadEventInfo));
HXLINE( 113)		::lime::_internal::backend::native::NativeCFFI_obj::lime_joystick_event_manager_register(::hx::DynamicPtr(this->handleJoystickEvent_dyn()),::hx::DynamicPtr(this->joystickEventInfo));
HXLINE( 114)		::lime::_internal::backend::native::NativeCFFI_obj::lime_key_event_manager_register(::hx::DynamicPtr(this->handleKeyEvent_dyn()),::hx::DynamicPtr(this->keyEventInfo));
HXLINE( 115)		::lime::_internal::backend::native::NativeCFFI_obj::lime_mouse_event_manager_register(::hx::DynamicPtr(this->handleMouseEvent_dyn()),::hx::DynamicPtr(this->mouseEventInfo));
HXLINE( 116)		::lime::_internal::backend::native::NativeCFFI_obj::lime_render_event_manager_register(::hx::DynamicPtr(this->handleRenderEvent_dyn()),::hx::DynamicPtr(this->renderEventInfo));
HXLINE( 117)		::lime::_internal::backend::native::NativeCFFI_obj::lime_text_event_manager_register(::hx::DynamicPtr(this->handleTextEvent_dyn()),::hx::DynamicPtr(this->textEventInfo));
HXLINE( 118)		::lime::_internal::backend::native::NativeCFFI_obj::lime_touch_event_manager_register(::hx::DynamicPtr(this->handleTouchEvent_dyn()),::hx::DynamicPtr(this->touchEventInfo));
HXLINE( 119)		::lime::_internal::backend::native::NativeCFFI_obj::lime_window_event_manager_register(::hx::DynamicPtr(this->handleWindowEvent_dyn()),::hx::DynamicPtr(this->windowEventInfo));
HXLINE( 146)		int result = ::lime::_internal::backend::native::NativeCFFI_obj::lime_application_exec(::hx::DynamicPtr(this->handle));
HXLINE( 149)		this->parent->onExit->dispatch(result);
HXLINE( 152)		return result;
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,exec,return )

void NativeApplication_obj::exit(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_160_exit)
HXLINE( 161)		::lime::media::AudioManager_obj::shutdown();
HXLINE( 164)		::lime::_internal::backend::native::NativeCFFI_obj::lime_application_quit(::hx::DynamicPtr(this->handle));
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,exit,(void))

void NativeApplication_obj::handleApplicationEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_170_handleApplicationEvent)
HXDLIN( 170)		if ((this->applicationEventInfo->type == 0)) {
HXLINE( 173)			this->updateTimer();
HXLINE( 175)			this->parent->onUpdate->dispatch(this->applicationEventInfo->deltaTime);
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleApplicationEvent,(void))

void NativeApplication_obj::handleClipboardEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_183_handleClipboardEvent)
HXDLIN( 183)		::lime::_hx_system::Clipboard_obj::_hx___update();
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleClipboardEvent,(void))

void NativeApplication_obj::handleDropEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_188_handleDropEvent)
HXDLIN( 188)		int _g = 0;
HXDLIN( 188)		::Array< ::Dynamic> _g1 = this->parent->_hx___windows;
HXDLIN( 188)		while((_g < _g1->length)){
HXDLIN( 188)			 ::lime::ui::Window window = _g1->__get(_g).StaticCast<  ::lime::ui::Window >();
HXDLIN( 188)			_g = (_g + 1);
HXLINE( 190)			window->onDropFile->dispatch(this->dropEventInfo->file);
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleDropEvent,(void))

void NativeApplication_obj::handleGamepadEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_196_handleGamepadEvent)
HXDLIN( 196)		switch((int)(this->gamepadEventInfo->type)){
            			case (int)0: {
HXLINE( 199)				 ::lime::ui::Gamepad gamepad = ( ( ::lime::ui::Gamepad)(::lime::ui::Gamepad_obj::devices->get(this->gamepadEventInfo->id)) );
HXLINE( 200)				if (::hx::IsNotNull( gamepad )) {
HXLINE( 200)					gamepad->onAxisMove->dispatch(this->gamepadEventInfo->axis,this->gamepadEventInfo->axisValue);
            				}
            			}
            			break;
            			case (int)1: {
HXLINE( 203)				 ::lime::ui::Gamepad gamepad = ( ( ::lime::ui::Gamepad)(::lime::ui::Gamepad_obj::devices->get(this->gamepadEventInfo->id)) );
HXLINE( 204)				if (::hx::IsNotNull( gamepad )) {
HXLINE( 204)					gamepad->onButtonDown->dispatch(this->gamepadEventInfo->button);
            				}
            			}
            			break;
            			case (int)2: {
HXLINE( 207)				 ::lime::ui::Gamepad gamepad = ( ( ::lime::ui::Gamepad)(::lime::ui::Gamepad_obj::devices->get(this->gamepadEventInfo->id)) );
HXLINE( 208)				if (::hx::IsNotNull( gamepad )) {
HXLINE( 208)					gamepad->onButtonUp->dispatch(this->gamepadEventInfo->button);
            				}
            			}
            			break;
            			case (int)3: {
HXLINE( 211)				::lime::ui::Gamepad_obj::_hx___connect(this->gamepadEventInfo->id);
            			}
            			break;
            			case (int)4: {
HXLINE( 214)				::lime::ui::Gamepad_obj::_hx___disconnect(this->gamepadEventInfo->id);
            			}
            			break;
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleGamepadEvent,(void))

void NativeApplication_obj::handleJoystickEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_220_handleJoystickEvent)
HXDLIN( 220)		switch((int)(this->joystickEventInfo->type)){
            			case (int)0: {
HXLINE( 223)				 ::lime::ui::Joystick joystick = ( ( ::lime::ui::Joystick)(::lime::ui::Joystick_obj::devices->get(this->joystickEventInfo->id)) );
HXLINE( 224)				if (::hx::IsNotNull( joystick )) {
HXLINE( 224)					joystick->onAxisMove->dispatch(this->joystickEventInfo->index,this->joystickEventInfo->x);
            				}
            			}
            			break;
            			case (int)1: {
HXLINE( 227)				 ::lime::ui::Joystick joystick = ( ( ::lime::ui::Joystick)(::lime::ui::Joystick_obj::devices->get(this->joystickEventInfo->id)) );
HXLINE( 228)				if (::hx::IsNotNull( joystick )) {
HXLINE( 228)					joystick->onHatMove->dispatch(this->joystickEventInfo->index,this->joystickEventInfo->eventValue);
            				}
            			}
            			break;
            			case (int)2: {
HXLINE( 231)				 ::lime::ui::Joystick joystick = ( ( ::lime::ui::Joystick)(::lime::ui::Joystick_obj::devices->get(this->joystickEventInfo->id)) );
HXLINE( 232)				if (::hx::IsNotNull( joystick )) {
HXLINE( 232)					joystick->onTrackballMove->dispatch(this->joystickEventInfo->index,this->joystickEventInfo->x,this->joystickEventInfo->y);
            				}
            			}
            			break;
            			case (int)3: {
HXLINE( 235)				 ::lime::ui::Joystick joystick = ( ( ::lime::ui::Joystick)(::lime::ui::Joystick_obj::devices->get(this->joystickEventInfo->id)) );
HXLINE( 236)				if (::hx::IsNotNull( joystick )) {
HXLINE( 236)					joystick->onButtonDown->dispatch(this->joystickEventInfo->index);
            				}
            			}
            			break;
            			case (int)4: {
HXLINE( 239)				 ::lime::ui::Joystick joystick = ( ( ::lime::ui::Joystick)(::lime::ui::Joystick_obj::devices->get(this->joystickEventInfo->id)) );
HXLINE( 240)				if (::hx::IsNotNull( joystick )) {
HXLINE( 240)					joystick->onButtonUp->dispatch(this->joystickEventInfo->index);
            				}
            			}
            			break;
            			case (int)5: {
HXLINE( 243)				::lime::ui::Joystick_obj::_hx___connect(this->joystickEventInfo->id);
            			}
            			break;
            			case (int)6: {
HXLINE( 246)				::lime::ui::Joystick_obj::_hx___disconnect(this->joystickEventInfo->id);
            			}
            			break;
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleJoystickEvent,(void))

void NativeApplication_obj::handleKeyEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_251_handleKeyEvent)
HXLINE( 252)		 ::lime::ui::Window window = ( ( ::lime::ui::Window)(this->parent->_hx___windowByID->get(this->keyEventInfo->windowID)) );
HXLINE( 254)		if (::hx::IsNotNull( window )) {
HXLINE( 256)			int type = this->keyEventInfo->type;
HXLINE( 257)			Float int32 = this->keyEventInfo->keyCode;
HXLINE( 258)			int keyCode = ::Std_obj::_hx_int(int32);
HXLINE( 259)			int modifier = this->keyEventInfo->modifier;
HXLINE( 261)			switch((int)(type)){
            				case (int)0: {
HXLINE( 264)					window->onKeyDown->dispatch(keyCode,modifier);
            				}
            				break;
            				case (int)1: {
HXLINE( 267)					window->onKeyUp->dispatch(keyCode,modifier);
            				}
            				break;
            			}
HXLINE( 298)			if ((keyCode == 102)) {
HXLINE( 300)				if ((type == 0)) {
HXLINE( 302)					bool _hx_tmp;
HXDLIN( 302)					bool _hx_tmp1;
HXDLIN( 302)					if (this->toggleFullscreen) {
HXLINE( 302)						if (::lime::ui::_KeyModifier::KeyModifier_Impl__obj::get_ctrlKey(modifier)) {
HXLINE( 302)							_hx_tmp1 = ::lime::ui::_KeyModifier::KeyModifier_Impl__obj::get_metaKey(modifier);
            						}
            						else {
HXLINE( 302)							_hx_tmp1 = false;
            						}
            					}
            					else {
HXLINE( 302)						_hx_tmp1 = false;
            					}
HXDLIN( 302)					if (_hx_tmp1) {
HXLINE( 302)						if (!(::lime::ui::_KeyModifier::KeyModifier_Impl__obj::get_altKey(modifier))) {
HXLINE( 302)							_hx_tmp = !(::lime::ui::_KeyModifier::KeyModifier_Impl__obj::get_shiftKey(modifier));
            						}
            						else {
HXLINE( 302)							_hx_tmp = false;
            						}
            					}
            					else {
HXLINE( 302)						_hx_tmp = false;
            					}
HXDLIN( 302)					if (_hx_tmp) {
HXLINE( 304)						this->toggleFullscreen = false;
HXLINE( 306)						if (!(window->onKeyDown->canceled)) {
HXLINE( 308)							window->set_fullscreen(!(window->_hx___fullscreen));
            						}
            					}
            				}
            				else {
HXLINE( 314)					this->toggleFullscreen = true;
            				}
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleKeyEvent,(void))

void NativeApplication_obj::handleMouseEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_330_handleMouseEvent)
HXLINE( 331)		 ::lime::ui::Window window = ( ( ::lime::ui::Window)(this->parent->_hx___windowByID->get(this->mouseEventInfo->windowID)) );
HXLINE( 333)		if (::hx::IsNotNull( window )) {
HXLINE( 335)			switch((int)(this->mouseEventInfo->type)){
            				case (int)0: {
HXLINE( 338)					window->onMouseDown->dispatch(this->mouseEventInfo->x,this->mouseEventInfo->y,this->mouseEventInfo->button);
            				}
            				break;
            				case (int)1: {
HXLINE( 341)					window->onMouseUp->dispatch(this->mouseEventInfo->x,this->mouseEventInfo->y,this->mouseEventInfo->button);
            				}
            				break;
            				case (int)2: {
HXLINE( 344)					window->onMouseMove->dispatch(this->mouseEventInfo->x,this->mouseEventInfo->y);
HXLINE( 345)					window->onMouseMoveRelative->dispatch(this->mouseEventInfo->movementX,this->mouseEventInfo->movementY);
            				}
            				break;
            				case (int)3: {
HXLINE( 348)					window->onMouseWheel->dispatch(this->mouseEventInfo->x,this->mouseEventInfo->y,::lime::ui::MouseWheelMode_obj::UNKNOWN_dyn());
            				}
            				break;
            				default:{
            				}
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleMouseEvent,(void))

void NativeApplication_obj::handleRenderEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_359_handleRenderEvent)
HXDLIN( 359)		int _g = 0;
HXDLIN( 359)		::Array< ::Dynamic> _g1 = this->parent->_hx___windows;
HXDLIN( 359)		while((_g < _g1->length)){
HXDLIN( 359)			 ::lime::ui::Window window = _g1->__get(_g).StaticCast<  ::lime::ui::Window >();
HXDLIN( 359)			_g = (_g + 1);
HXLINE( 361)			if (::hx::IsNull( window )) {
HXLINE( 361)				continue;
            			}
HXLINE( 365)			switch((int)(this->renderEventInfo->type)){
            				case (int)0: {
HXLINE( 368)					if (::hx::IsNotNull( window->context )) {
HXLINE( 370)						window->_hx___backend->render();
HXLINE( 371)						window->onRender->dispatch(window->context);
HXLINE( 373)						if (!(window->onRender->canceled)) {
HXLINE( 375)							window->_hx___backend->contextFlip();
            						}
            					}
            				}
            				break;
            				case (int)1: {
HXLINE( 380)					bool _hx_tmp;
HXDLIN( 380)					if (window->_hx___backend->useHardware) {
HXLINE( 380)						_hx_tmp = ::hx::IsNotNull( window->context );
            					}
            					else {
HXLINE( 380)						_hx_tmp = false;
            					}
HXDLIN( 380)					if (_hx_tmp) {
HXLINE( 382)						::String _hx_switch_0 = window->context->type;
            						if (  (_hx_switch_0==HX_("opengl",6f,64,94,21)) ||  (_hx_switch_0==HX_("opengles",9d,f6,c9,fa)) ||  (_hx_switch_0==HX_("webgl",b9,4b,bc,c7)) ){
HXLINE( 386)							 ::lime::_internal::backend::native::NativeOpenGLRenderContext gl = window->context->gl;
HXLINE( 387)							gl->_hx___contextLost();
HXLINE( 388)							if (::hx::IsInstanceEq( ::lime::graphics::opengl::GL_obj::context,gl )) {
HXLINE( 388)								::lime::graphics::opengl::GL_obj::context = null();
            							}
HXLINE( 384)							goto _hx_goto_14;
            						}
            						/* default */{
            						}
            						_hx_goto_14:;
HXLINE( 394)						window->context = null();
HXLINE( 395)						window->onRenderContextLost->dispatch();
            					}
            				}
            				break;
            				case (int)2: {
HXLINE( 399)					if (window->_hx___backend->useHardware) {
HXLINE( 404)						window->onRenderContextRestored->dispatch(window->context);
            					}
            				}
            				break;
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleRenderEvent,(void))

void NativeApplication_obj::handleSensorEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_411_handleSensorEvent)
HXLINE( 412)		 ::lime::_hx_system::Sensor sensor = ( ( ::lime::_hx_system::Sensor)(::lime::_hx_system::Sensor_obj::sensorByID->get(this->sensorEventInfo->id)) );
HXLINE( 414)		if (::hx::IsNotNull( sensor )) {
HXLINE( 416)			sensor->onUpdate->dispatch(this->sensorEventInfo->x,this->sensorEventInfo->y,this->sensorEventInfo->z);
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleSensorEvent,(void))

void NativeApplication_obj::handleTextEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_421_handleTextEvent)
HXLINE( 422)		 ::lime::ui::Window window = ( ( ::lime::ui::Window)(this->parent->_hx___windowByID->get(this->textEventInfo->windowID)) );
HXLINE( 424)		if (::hx::IsNotNull( window )) {
HXLINE( 426)			switch((int)(this->textEventInfo->type)){
            				case (int)0: {
HXLINE( 429)					window->onTextInput->dispatch(this->textEventInfo->text);
            				}
            				break;
            				case (int)1: {
HXLINE( 432)					window->onTextEdit->dispatch(this->textEventInfo->text,this->textEventInfo->start,this->textEventInfo->length);
            				}
            				break;
            				default:{
            				}
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleTextEvent,(void))

void NativeApplication_obj::handleTouchEvent(){
            	HX_GC_STACKFRAME(&_hx_pos_8a85bd2a97260674_442_handleTouchEvent)
HXDLIN( 442)		switch((int)(this->touchEventInfo->type)){
            			case (int)0: {
HXLINE( 445)				 ::lime::ui::Touch touch = this->unusedTouchesPool->pop().StaticCast<  ::lime::ui::Touch >();
HXLINE( 447)				if (::hx::IsNull( touch )) {
HXLINE( 449)					touch =  ::lime::ui::Touch_obj::__alloc( HX_CTX ,this->touchEventInfo->x,this->touchEventInfo->y,this->touchEventInfo->id,this->touchEventInfo->dx,this->touchEventInfo->dy,this->touchEventInfo->pressure,this->touchEventInfo->device);
            				}
            				else {
HXLINE( 454)					touch->x = this->touchEventInfo->x;
HXLINE( 455)					touch->y = this->touchEventInfo->y;
HXLINE( 456)					touch->id = this->touchEventInfo->id;
HXLINE( 457)					touch->dx = this->touchEventInfo->dx;
HXLINE( 458)					touch->dy = this->touchEventInfo->dy;
HXLINE( 459)					touch->pressure = this->touchEventInfo->pressure;
HXLINE( 460)					touch->device = this->touchEventInfo->device;
            				}
HXLINE( 463)				this->currentTouches->set(touch->id,touch);
HXLINE( 465)				::lime::ui::Touch_obj::onStart->dispatch(touch);
            			}
            			break;
            			case (int)1: {
HXLINE( 468)				 ::lime::ui::Touch touch = ( ( ::lime::ui::Touch)(this->currentTouches->get(this->touchEventInfo->id)) );
HXLINE( 470)				if (::hx::IsNotNull( touch )) {
HXLINE( 472)					touch->x = this->touchEventInfo->x;
HXLINE( 473)					touch->y = this->touchEventInfo->y;
HXLINE( 474)					touch->dx = this->touchEventInfo->dx;
HXLINE( 475)					touch->dy = this->touchEventInfo->dy;
HXLINE( 476)					touch->pressure = this->touchEventInfo->pressure;
HXLINE( 478)					::lime::ui::Touch_obj::onEnd->dispatch(touch);
HXLINE( 480)					this->currentTouches->remove(this->touchEventInfo->id);
HXLINE( 481)					this->unusedTouchesPool->add(touch);
            				}
            			}
            			break;
            			case (int)2: {
HXLINE( 485)				 ::lime::ui::Touch touch = ( ( ::lime::ui::Touch)(this->currentTouches->get(this->touchEventInfo->id)) );
HXLINE( 487)				if (::hx::IsNotNull( touch )) {
HXLINE( 489)					touch->x = this->touchEventInfo->x;
HXLINE( 490)					touch->y = this->touchEventInfo->y;
HXLINE( 491)					touch->dx = this->touchEventInfo->dx;
HXLINE( 492)					touch->dy = this->touchEventInfo->dy;
HXLINE( 493)					touch->pressure = this->touchEventInfo->pressure;
HXLINE( 495)					::lime::ui::Touch_obj::onMove->dispatch(touch);
            				}
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleTouchEvent,(void))

void NativeApplication_obj::handleWindowEvent(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_503_handleWindowEvent)
HXLINE( 504)		 ::lime::ui::Window window = ( ( ::lime::ui::Window)(this->parent->_hx___windowByID->get(this->windowEventInfo->windowID)) );
HXLINE( 506)		if (::hx::IsNotNull( window )) {
HXLINE( 508)			switch((int)(this->windowEventInfo->type)){
            				case (int)0: {
HXLINE( 511)					this->advanceTimer();
HXLINE( 512)					window->onActivate->dispatch();
HXLINE( 513)					::lime::media::AudioManager_obj::resume();
            				}
            				break;
            				case (int)1: {
HXLINE( 516)					window->close();
            				}
            				break;
            				case (int)2: {
HXLINE( 519)					window->onDeactivate->dispatch();
HXLINE( 520)					::lime::media::AudioManager_obj::suspend();
HXLINE( 521)					this->pauseTimer = ::lime::_hx_system::System_obj::getTimer();
            				}
            				break;
            				case (int)3: {
HXLINE( 524)					window->onEnter->dispatch();
            				}
            				break;
            				case (int)4: {
HXLINE( 527)					window->onExpose->dispatch();
            				}
            				break;
            				case (int)5: {
HXLINE( 530)					window->onFocusIn->dispatch();
            				}
            				break;
            				case (int)6: {
HXLINE( 533)					window->onFocusOut->dispatch();
            				}
            				break;
            				case (int)7: {
HXLINE( 536)					window->onLeave->dispatch();
            				}
            				break;
            				case (int)8: {
HXLINE( 539)					window->_hx___maximized = true;
HXLINE( 540)					window->_hx___fullscreen = false;
HXLINE( 541)					window->_hx___minimized = false;
HXLINE( 542)					window->onMaximize->dispatch();
            				}
            				break;
            				case (int)9: {
HXLINE( 545)					window->_hx___minimized = true;
HXLINE( 546)					window->_hx___maximized = false;
HXLINE( 547)					window->_hx___fullscreen = false;
HXLINE( 548)					window->onMinimize->dispatch();
            				}
            				break;
            				case (int)10: {
HXLINE( 551)					window->_hx___x = this->windowEventInfo->x;
HXLINE( 552)					window->_hx___y = this->windowEventInfo->y;
HXLINE( 553)					window->onMove->dispatch(( (Float)(this->windowEventInfo->x) ),( (Float)(this->windowEventInfo->y) ));
            				}
            				break;
            				case (int)11: {
HXLINE( 556)					window->_hx___width = this->windowEventInfo->width;
HXLINE( 557)					window->_hx___height = this->windowEventInfo->height;
HXLINE( 558)					window->onResize->dispatch(this->windowEventInfo->width,this->windowEventInfo->height);
            				}
            				break;
            				case (int)12: {
HXLINE( 561)					window->_hx___fullscreen = false;
HXLINE( 562)					window->_hx___minimized = false;
HXLINE( 563)					window->onRestore->dispatch();
            				}
            				break;
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,handleWindowEvent,(void))

void NativeApplication_obj::updateTimer(){
            	HX_STACKFRAME(&_hx_pos_8a85bd2a97260674_569_updateTimer)
HXLINE( 571)		if ((::haxe::Timer_obj::sRunningTimers->length > 0)) {
HXLINE( 573)			int currentTime = ::lime::_hx_system::System_obj::getTimer();
HXLINE( 574)			bool foundNull = false;
HXLINE( 575)			 ::haxe::Timer timer;
HXLINE( 577)			{
HXLINE( 577)				int _g = 0;
HXDLIN( 577)				int _g1 = ::haxe::Timer_obj::sRunningTimers->length;
HXDLIN( 577)				while((_g < _g1)){
HXLINE( 577)					_g = (_g + 1);
HXDLIN( 577)					int i = (_g - 1);
HXLINE( 579)					timer = ::haxe::Timer_obj::sRunningTimers->__get(i).StaticCast<  ::haxe::Timer >();
HXLINE( 581)					if (::hx::IsNotNull( timer )) {
HXLINE( 583)						bool _hx_tmp;
HXDLIN( 583)						if (timer->mRunning) {
HXLINE( 583)							_hx_tmp = (currentTime >= timer->mFireAt);
            						}
            						else {
HXLINE( 583)							_hx_tmp = false;
            						}
HXDLIN( 583)						if (_hx_tmp) {
HXLINE( 585)							 ::haxe::Timer timer1 = timer;
HXDLIN( 585)							timer1->mFireAt = (timer1->mFireAt + timer->mTime);
HXLINE( 586)							timer->run();
            						}
            					}
            					else {
HXLINE( 591)						foundNull = true;
            					}
            				}
            			}
HXLINE( 595)			if (foundNull) {
HXLINE( 597)				::Array< ::Dynamic> _g = ::Array_obj< ::Dynamic>::__new(0);
HXDLIN( 597)				{
HXLINE( 597)					int _g1 = 0;
HXDLIN( 597)					::Array< ::Dynamic> _g2 = ::haxe::Timer_obj::sRunningTimers;
HXDLIN( 597)					while((_g1 < _g2->length)){
HXLINE( 597)						 ::haxe::Timer v = _g2->__get(_g1).StaticCast<  ::haxe::Timer >();
HXDLIN( 597)						_g1 = (_g1 + 1);
HXDLIN( 597)						if (::hx::IsNotNull( v )) {
HXLINE( 597)							_g->push(v);
            						}
            					}
            				}
HXDLIN( 597)				::haxe::Timer_obj::sRunningTimers = _g;
            			}
            		}
HXLINE( 606)		::sys::thread::_Thread::Thread_Impl__obj::get_events(::sys::thread::_Thread::HaxeThread_obj::current())->progress();
            	}


HX_DEFINE_DYNAMIC_FUNC0(NativeApplication_obj,updateTimer,(void))


::hx::ObjectPtr< NativeApplication_obj > NativeApplication_obj::__new( ::lime::app::Application parent) {
	::hx::ObjectPtr< NativeApplication_obj > __this = new NativeApplication_obj();
	__this->__construct(parent);
	return __this;
}

::hx::ObjectPtr< NativeApplication_obj > NativeApplication_obj::__alloc(::hx::Ctx *_hx_ctx, ::lime::app::Application parent) {
	NativeApplication_obj *__this = (NativeApplication_obj*)(::hx::Ctx::alloc(_hx_ctx, sizeof(NativeApplication_obj), true, "lime._internal.backend.native.NativeApplication"));
	*(void **)__this = NativeApplication_obj::_hx_vtable;
	__this->__construct(parent);
	return __this;
}

NativeApplication_obj::NativeApplication_obj()
{
}

void NativeApplication_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(NativeApplication);
	HX_MARK_MEMBER_NAME(applicationEventInfo,"applicationEventInfo");
	HX_MARK_MEMBER_NAME(clipboardEventInfo,"clipboardEventInfo");
	HX_MARK_MEMBER_NAME(currentTouches,"currentTouches");
	HX_MARK_MEMBER_NAME(dropEventInfo,"dropEventInfo");
	HX_MARK_MEMBER_NAME(gamepadEventInfo,"gamepadEventInfo");
	HX_MARK_MEMBER_NAME(joystickEventInfo,"joystickEventInfo");
	HX_MARK_MEMBER_NAME(keyEventInfo,"keyEventInfo");
	HX_MARK_MEMBER_NAME(mouseEventInfo,"mouseEventInfo");
	HX_MARK_MEMBER_NAME(renderEventInfo,"renderEventInfo");
	HX_MARK_MEMBER_NAME(sensorEventInfo,"sensorEventInfo");
	HX_MARK_MEMBER_NAME(textEventInfo,"textEventInfo");
	HX_MARK_MEMBER_NAME(touchEventInfo,"touchEventInfo");
	HX_MARK_MEMBER_NAME(unusedTouchesPool,"unusedTouchesPool");
	HX_MARK_MEMBER_NAME(windowEventInfo,"windowEventInfo");
	HX_MARK_MEMBER_NAME(handle,"handle");
	HX_MARK_MEMBER_NAME(pauseTimer,"pauseTimer");
	HX_MARK_MEMBER_NAME(parent,"parent");
	HX_MARK_MEMBER_NAME(toggleFullscreen,"toggleFullscreen");
	HX_MARK_END_CLASS();
}

void NativeApplication_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(applicationEventInfo,"applicationEventInfo");
	HX_VISIT_MEMBER_NAME(clipboardEventInfo,"clipboardEventInfo");
	HX_VISIT_MEMBER_NAME(currentTouches,"currentTouches");
	HX_VISIT_MEMBER_NAME(dropEventInfo,"dropEventInfo");
	HX_VISIT_MEMBER_NAME(gamepadEventInfo,"gamepadEventInfo");
	HX_VISIT_MEMBER_NAME(joystickEventInfo,"joystickEventInfo");
	HX_VISIT_MEMBER_NAME(keyEventInfo,"keyEventInfo");
	HX_VISIT_MEMBER_NAME(mouseEventInfo,"mouseEventInfo");
	HX_VISIT_MEMBER_NAME(renderEventInfo,"renderEventInfo");
	HX_VISIT_MEMBER_NAME(sensorEventInfo,"sensorEventInfo");
	HX_VISIT_MEMBER_NAME(textEventInfo,"textEventInfo");
	HX_VISIT_MEMBER_NAME(touchEventInfo,"touchEventInfo");
	HX_VISIT_MEMBER_NAME(unusedTouchesPool,"unusedTouchesPool");
	HX_VISIT_MEMBER_NAME(windowEventInfo,"windowEventInfo");
	HX_VISIT_MEMBER_NAME(handle,"handle");
	HX_VISIT_MEMBER_NAME(pauseTimer,"pauseTimer");
	HX_VISIT_MEMBER_NAME(parent,"parent");
	HX_VISIT_MEMBER_NAME(toggleFullscreen,"toggleFullscreen");
}

::hx::Val NativeApplication_obj::__Field(const ::String &inName,::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"exec") ) { return ::hx::Val( exec_dyn() ); }
		if (HX_FIELD_EQ(inName,"exit") ) { return ::hx::Val( exit_dyn() ); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"handle") ) { return ::hx::Val( handle ); }
		if (HX_FIELD_EQ(inName,"parent") ) { return ::hx::Val( parent ); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"pauseTimer") ) { return ::hx::Val( pauseTimer ); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"updateTimer") ) { return ::hx::Val( updateTimer_dyn() ); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"keyEventInfo") ) { return ::hx::Val( keyEventInfo ); }
		if (HX_FIELD_EQ(inName,"advanceTimer") ) { return ::hx::Val( advanceTimer_dyn() ); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"dropEventInfo") ) { return ::hx::Val( dropEventInfo ); }
		if (HX_FIELD_EQ(inName,"textEventInfo") ) { return ::hx::Val( textEventInfo ); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"currentTouches") ) { return ::hx::Val( currentTouches ); }
		if (HX_FIELD_EQ(inName,"mouseEventInfo") ) { return ::hx::Val( mouseEventInfo ); }
		if (HX_FIELD_EQ(inName,"touchEventInfo") ) { return ::hx::Val( touchEventInfo ); }
		if (HX_FIELD_EQ(inName,"handleKeyEvent") ) { return ::hx::Val( handleKeyEvent_dyn() ); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"renderEventInfo") ) { return ::hx::Val( renderEventInfo ); }
		if (HX_FIELD_EQ(inName,"sensorEventInfo") ) { return ::hx::Val( sensorEventInfo ); }
		if (HX_FIELD_EQ(inName,"windowEventInfo") ) { return ::hx::Val( windowEventInfo ); }
		if (HX_FIELD_EQ(inName,"handleDropEvent") ) { return ::hx::Val( handleDropEvent_dyn() ); }
		if (HX_FIELD_EQ(inName,"handleTextEvent") ) { return ::hx::Val( handleTextEvent_dyn() ); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"gamepadEventInfo") ) { return ::hx::Val( gamepadEventInfo ); }
		if (HX_FIELD_EQ(inName,"toggleFullscreen") ) { return ::hx::Val( toggleFullscreen ); }
		if (HX_FIELD_EQ(inName,"handleMouseEvent") ) { return ::hx::Val( handleMouseEvent_dyn() ); }
		if (HX_FIELD_EQ(inName,"handleTouchEvent") ) { return ::hx::Val( handleTouchEvent_dyn() ); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"joystickEventInfo") ) { return ::hx::Val( joystickEventInfo ); }
		if (HX_FIELD_EQ(inName,"unusedTouchesPool") ) { return ::hx::Val( unusedTouchesPool ); }
		if (HX_FIELD_EQ(inName,"handleRenderEvent") ) { return ::hx::Val( handleRenderEvent_dyn() ); }
		if (HX_FIELD_EQ(inName,"handleSensorEvent") ) { return ::hx::Val( handleSensorEvent_dyn() ); }
		if (HX_FIELD_EQ(inName,"handleWindowEvent") ) { return ::hx::Val( handleWindowEvent_dyn() ); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"clipboardEventInfo") ) { return ::hx::Val( clipboardEventInfo ); }
		if (HX_FIELD_EQ(inName,"handleGamepadEvent") ) { return ::hx::Val( handleGamepadEvent_dyn() ); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"handleJoystickEvent") ) { return ::hx::Val( handleJoystickEvent_dyn() ); }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"applicationEventInfo") ) { return ::hx::Val( applicationEventInfo ); }
		if (HX_FIELD_EQ(inName,"handleClipboardEvent") ) { return ::hx::Val( handleClipboardEvent_dyn() ); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"handleApplicationEvent") ) { return ::hx::Val( handleApplicationEvent_dyn() ); }
	}
	return super::__Field(inName,inCallProp);
}

::hx::Val NativeApplication_obj::__SetField(const ::String &inName,const ::hx::Val &inValue,::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"handle") ) { handle=inValue.Cast<  ::Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"parent") ) { parent=inValue.Cast<  ::lime::app::Application >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"pauseTimer") ) { pauseTimer=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"keyEventInfo") ) { keyEventInfo=inValue.Cast<  ::lime::_internal::backend::native::KeyEventInfo >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"dropEventInfo") ) { dropEventInfo=inValue.Cast<  ::lime::_internal::backend::native::DropEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"textEventInfo") ) { textEventInfo=inValue.Cast<  ::lime::_internal::backend::native::TextEventInfo >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"currentTouches") ) { currentTouches=inValue.Cast<  ::haxe::ds::IntMap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mouseEventInfo") ) { mouseEventInfo=inValue.Cast<  ::lime::_internal::backend::native::MouseEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"touchEventInfo") ) { touchEventInfo=inValue.Cast<  ::lime::_internal::backend::native::TouchEventInfo >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"renderEventInfo") ) { renderEventInfo=inValue.Cast<  ::lime::_internal::backend::native::RenderEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"sensorEventInfo") ) { sensorEventInfo=inValue.Cast<  ::lime::_internal::backend::native::SensorEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"windowEventInfo") ) { windowEventInfo=inValue.Cast<  ::lime::_internal::backend::native::WindowEventInfo >(); return inValue; }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"gamepadEventInfo") ) { gamepadEventInfo=inValue.Cast<  ::lime::_internal::backend::native::GamepadEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"toggleFullscreen") ) { toggleFullscreen=inValue.Cast< bool >(); return inValue; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"joystickEventInfo") ) { joystickEventInfo=inValue.Cast<  ::lime::_internal::backend::native::JoystickEventInfo >(); return inValue; }
		if (HX_FIELD_EQ(inName,"unusedTouchesPool") ) { unusedTouchesPool=inValue.Cast<  ::haxe::ds::List >(); return inValue; }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"clipboardEventInfo") ) { clipboardEventInfo=inValue.Cast<  ::lime::_internal::backend::native::ClipboardEventInfo >(); return inValue; }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"applicationEventInfo") ) { applicationEventInfo=inValue.Cast<  ::lime::_internal::backend::native::ApplicationEventInfo >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void NativeApplication_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_("applicationEventInfo",38,8c,f4,09));
	outFields->push(HX_("clipboardEventInfo",f2,50,6f,01));
	outFields->push(HX_("currentTouches",b4,92,8c,e6));
	outFields->push(HX_("dropEventInfo",79,eb,0f,1e));
	outFields->push(HX_("gamepadEventInfo",c7,a4,2e,4c));
	outFields->push(HX_("joystickEventInfo",4c,49,1d,d4));
	outFields->push(HX_("keyEventInfo",09,ec,90,cc));
	outFields->push(HX_("mouseEventInfo",c3,9e,a6,86));
	outFields->push(HX_("renderEventInfo",72,9b,70,dd));
	outFields->push(HX_("sensorEventInfo",0e,d8,53,55));
	outFields->push(HX_("textEventInfo",3b,d7,5a,ac));
	outFields->push(HX_("touchEventInfo",e9,99,5c,0c));
	outFields->push(HX_("unusedTouchesPool",f3,cf,df,11));
	outFields->push(HX_("windowEventInfo",98,8f,34,9b));
	outFields->push(HX_("handle",a8,83,fd,b7));
	outFields->push(HX_("pauseTimer",ef,5c,ae,e5));
	outFields->push(HX_("parent",2a,05,7e,ed));
	outFields->push(HX_("toggleFullscreen",ef,be,03,c4));
	super::__GetFields(outFields);
};

#ifdef HXCPP_SCRIPTABLE
static ::hx::StorageInfo NativeApplication_obj_sMemberStorageInfo[] = {
	{::hx::fsObject /*  ::lime::_internal::backend::native::ApplicationEventInfo */ ,(int)offsetof(NativeApplication_obj,applicationEventInfo),HX_("applicationEventInfo",38,8c,f4,09)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::ClipboardEventInfo */ ,(int)offsetof(NativeApplication_obj,clipboardEventInfo),HX_("clipboardEventInfo",f2,50,6f,01)},
	{::hx::fsObject /*  ::haxe::ds::IntMap */ ,(int)offsetof(NativeApplication_obj,currentTouches),HX_("currentTouches",b4,92,8c,e6)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::DropEventInfo */ ,(int)offsetof(NativeApplication_obj,dropEventInfo),HX_("dropEventInfo",79,eb,0f,1e)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::GamepadEventInfo */ ,(int)offsetof(NativeApplication_obj,gamepadEventInfo),HX_("gamepadEventInfo",c7,a4,2e,4c)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::JoystickEventInfo */ ,(int)offsetof(NativeApplication_obj,joystickEventInfo),HX_("joystickEventInfo",4c,49,1d,d4)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::KeyEventInfo */ ,(int)offsetof(NativeApplication_obj,keyEventInfo),HX_("keyEventInfo",09,ec,90,cc)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::MouseEventInfo */ ,(int)offsetof(NativeApplication_obj,mouseEventInfo),HX_("mouseEventInfo",c3,9e,a6,86)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::RenderEventInfo */ ,(int)offsetof(NativeApplication_obj,renderEventInfo),HX_("renderEventInfo",72,9b,70,dd)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::SensorEventInfo */ ,(int)offsetof(NativeApplication_obj,sensorEventInfo),HX_("sensorEventInfo",0e,d8,53,55)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::TextEventInfo */ ,(int)offsetof(NativeApplication_obj,textEventInfo),HX_("textEventInfo",3b,d7,5a,ac)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::TouchEventInfo */ ,(int)offsetof(NativeApplication_obj,touchEventInfo),HX_("touchEventInfo",e9,99,5c,0c)},
	{::hx::fsObject /*  ::haxe::ds::List */ ,(int)offsetof(NativeApplication_obj,unusedTouchesPool),HX_("unusedTouchesPool",f3,cf,df,11)},
	{::hx::fsObject /*  ::lime::_internal::backend::native::WindowEventInfo */ ,(int)offsetof(NativeApplication_obj,windowEventInfo),HX_("windowEventInfo",98,8f,34,9b)},
	{::hx::fsObject /*  ::Dynamic */ ,(int)offsetof(NativeApplication_obj,handle),HX_("handle",a8,83,fd,b7)},
	{::hx::fsInt,(int)offsetof(NativeApplication_obj,pauseTimer),HX_("pauseTimer",ef,5c,ae,e5)},
	{::hx::fsObject /*  ::lime::app::Application */ ,(int)offsetof(NativeApplication_obj,parent),HX_("parent",2a,05,7e,ed)},
	{::hx::fsBool,(int)offsetof(NativeApplication_obj,toggleFullscreen),HX_("toggleFullscreen",ef,be,03,c4)},
	{ ::hx::fsUnknown, 0, null()}
};
static ::hx::StaticInfo *NativeApplication_obj_sStaticStorageInfo = 0;
#endif

static ::String NativeApplication_obj_sMemberFields[] = {
	HX_("applicationEventInfo",38,8c,f4,09),
	HX_("clipboardEventInfo",f2,50,6f,01),
	HX_("currentTouches",b4,92,8c,e6),
	HX_("dropEventInfo",79,eb,0f,1e),
	HX_("gamepadEventInfo",c7,a4,2e,4c),
	HX_("joystickEventInfo",4c,49,1d,d4),
	HX_("keyEventInfo",09,ec,90,cc),
	HX_("mouseEventInfo",c3,9e,a6,86),
	HX_("renderEventInfo",72,9b,70,dd),
	HX_("sensorEventInfo",0e,d8,53,55),
	HX_("textEventInfo",3b,d7,5a,ac),
	HX_("touchEventInfo",e9,99,5c,0c),
	HX_("unusedTouchesPool",f3,cf,df,11),
	HX_("windowEventInfo",98,8f,34,9b),
	HX_("handle",a8,83,fd,b7),
	HX_("pauseTimer",ef,5c,ae,e5),
	HX_("parent",2a,05,7e,ed),
	HX_("toggleFullscreen",ef,be,03,c4),
	HX_("advanceTimer",e3,0f,1f,7e),
	HX_("exec",91,f3,1d,43),
	HX_("exit",1e,f7,1d,43),
	HX_("handleApplicationEvent",72,ba,a4,11),
	HX_("handleClipboardEvent",2c,18,7f,62),
	HX_("handleDropEvent",a3,9c,e8,85),
	HX_("handleGamepadEvent",81,1b,b0,7b),
	HX_("handleJoystickEvent",f6,d0,87,a8),
	HX_("handleKeyEvent",c3,95,05,08),
	HX_("handleMouseEvent",7d,65,58,63),
	HX_("handleRenderEvent",1c,da,83,3f),
	HX_("handleSensorEvent",b8,98,2d,ba),
	HX_("handleTextEvent",65,ff,1d,dd),
	HX_("handleTouchEvent",a3,55,1c,3f),
	HX_("handleWindowEvent",42,43,a5,64),
	HX_("updateTimer",fc,28,ce,f5),
	::String(null()) };

::hx::Class NativeApplication_obj::__mClass;

void NativeApplication_obj::__register()
{
	NativeApplication_obj _hx_dummy;
	NativeApplication_obj::_hx_vtable = *(void **)&_hx_dummy;
	::hx::Static(__mClass) = new ::hx::Class_obj();
	__mClass->mName = HX_("lime._internal.backend.native.NativeApplication",a7,c0,5d,9a);
	__mClass->mSuper = &super::__SGetClass();
	__mClass->mConstructEmpty = &__CreateEmpty;
	__mClass->mConstructArgs = &__Create;
	__mClass->mGetStaticField = &::hx::Class_obj::GetNoStaticField;
	__mClass->mSetStaticField = &::hx::Class_obj::SetNoStaticField;
	__mClass->mStatics = ::hx::Class_obj::dupFunctions(0 /* sStaticFields */);
	__mClass->mMembers = ::hx::Class_obj::dupFunctions(NativeApplication_obj_sMemberFields);
	__mClass->mCanCast = ::hx::TCanCast< NativeApplication_obj >;
#ifdef HXCPP_SCRIPTABLE
	__mClass->mMemberStorageInfo = NativeApplication_obj_sMemberStorageInfo;
#endif
#ifdef HXCPP_SCRIPTABLE
	__mClass->mStaticStorageInfo = NativeApplication_obj_sStaticStorageInfo;
#endif
	::hx::_hx_RegisterClass(__mClass->mName, __mClass);
}

void NativeApplication_obj::__boot()
{
}

} // end namespace lime
} // end namespace _internal
} // end namespace backend
} // end namespace native
