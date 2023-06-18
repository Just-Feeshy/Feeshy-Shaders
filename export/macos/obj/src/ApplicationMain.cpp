#include <hxcpp.h>

#ifndef INCLUDED_ApplicationMain
#include <ApplicationMain.h>
#endif
#ifndef INCLUDED_Main
#include <Main.h>
#endif
#ifndef INCLUDED_ManifestResources
#include <ManifestResources.h>
#endif
#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_haxe_IMap
#include <haxe/IMap.h>
#endif
#ifndef INCLUDED_haxe_ds_StringMap
#include <haxe/ds/StringMap.h>
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
#ifndef INCLUDED_lime_system_System
#include <lime/system/System.h>
#endif
#ifndef INCLUDED_lime_ui_Window
#include <lime/ui/Window.h>
#endif
#ifndef INCLUDED_lime_utils_AssetLibrary
#include <lime/utils/AssetLibrary.h>
#endif
#ifndef INCLUDED_lime_utils_Preloader
#include <lime/utils/Preloader.h>
#endif

HX_LOCAL_STACK_FRAME(_hx_pos_b3b993f62d801895_141___init__,"::ApplicationMain_obj","__init__",0x253d991d,"::ApplicationMain_obj.__init__","ApplicationMain.hx",141,0x0780ded5)
HX_LOCAL_STACK_FRAME(_hx_pos_6fcf922b66429816_11_main,"ApplicationMain","main",0x93d2f73e,"ApplicationMain.main","ApplicationMain.hx",11,0x0780ded5)
HX_LOCAL_STACK_FRAME(_hx_pos_6fcf922b66429816_20_create,"ApplicationMain","create",0x2f7db141,"ApplicationMain.create","ApplicationMain.hx",20,0x0780ded5)
HX_LOCAL_STACK_FRAME(_hx_pos_6fcf922b66429816_123_start,"ApplicationMain","start",0x45b5d9bd,"ApplicationMain.start","ApplicationMain.hx",123,0x0780ded5)

void ApplicationMain_obj::__construct() { }

Dynamic ApplicationMain_obj::__CreateEmpty() { return new ApplicationMain_obj; }

void *ApplicationMain_obj::_hx_vtable = 0;

Dynamic ApplicationMain_obj::__Create(::hx::DynamicArray inArgs)
{
	::hx::ObjectPtr< ApplicationMain_obj > _hx_result = new ApplicationMain_obj();
	_hx_result->__construct();
	return _hx_result;
}

bool ApplicationMain_obj::_hx_isInstanceOf(int inClassId) {
	return inClassId==(int)0x00000001 || inClassId==(int)0x1660e4c9;
}

void ApplicationMain_obj::__init__(){
            	HX_STACKFRAME(&_hx_pos_b3b993f62d801895_141___init__)
HXDLIN( 141)		 ::Dynamic init = ::hx::ClassOf< ::lime::app::Application >();
            	}


void ApplicationMain_obj::main(){
            	HX_STACKFRAME(&_hx_pos_6fcf922b66429816_11_main)
HXLINE(  12)		::lime::_hx_system::System_obj::_hx___registerEntryPoint(HX_("FeeshyShaders",70,fd,1e,24),::ApplicationMain_obj::create_dyn());
HXLINE(  15)		::ApplicationMain_obj::create(null());
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(ApplicationMain_obj,main,(void))

void ApplicationMain_obj::create( ::Dynamic config){
            	HX_GC_STACKFRAME(&_hx_pos_6fcf922b66429816_20_create)
HXLINE(  22)		::ManifestResources_obj::init(config);
HXLINE(  26)		 ::Main app =  ::Main_obj::__alloc( HX_CTX );
HXLINE(  27)		app->meta->set(HX_("build",2e,db,ea,ba),HX_("124",33,5a,25,00));
HXLINE(  28)		app->meta->set(HX_("company",3d,15,69,83),HX_("Company Name",4e,48,0d,cb));
HXLINE(  29)		app->meta->set(HX_("file",7c,ce,bb,43),HX_("FeeshyShaders",70,fd,1e,24));
HXLINE(  30)		app->meta->set(HX_("name",4b,72,ff,48),HX_("FeeshyShaders",70,fd,1e,24));
HXLINE(  31)		app->meta->set(HX_("packageName",f1,04,ad,04),HX_("com.sample.feeshyshaders",b9,e3,ae,15));
HXLINE(  32)		app->meta->set(HX_("version",18,e7,f1,7c),HX_("1.0.0",b5,d1,2e,55));
HXLINE(  36)		 ::Dynamic attributes =  ::Dynamic(::hx::Anon_obj::Create(16)
            			->setFixed(0,HX_("resizable",6b,37,50,a9),true)
            			->setFixed(1,HX_("allowHighDPI",92,07,a2,b4),false)
            			->setFixed(2,HX_("width",06,b6,62,ca),800)
            			->setFixed(3,HX_("fullscreen",3b,3a,b4,f9),false)
            			->setFixed(4,HX_("maximized",18,0e,e1,fe),false)
            			->setFixed(5,HX_("x",78,00,00,00),null())
            			->setFixed(6,HX_("y",79,00,00,00),null())
            			->setFixed(7,HX_("height",e7,07,4c,02),600)
            			->setFixed(8,HX_("element",bc,ae,54,06),null())
            			->setFixed(9,HX_("title",98,15,3b,10),HX_("FeeshyShaders",70,fd,1e,24))
            			->setFixed(10,HX_("alwaysOnTop",67,4d,53,16),false)
            			->setFixed(11,HX_("borderless",45,46,71,17),false)
            			->setFixed(12,HX_("minimized",86,fb,9d,28),false)
            			->setFixed(13,HX_("frameRate",ad,11,25,39),120)
            			->setFixed(14,HX_("hidden",6a,ff,95,4c),false)
            			->setFixed(15,HX_("parameters",aa,be,7e,51), ::Dynamic(::hx::Anon_obj::Create(0))));
HXLINE(  57)		attributes->__SetField(HX_("context",ef,95,77,19), ::Dynamic(::hx::Anon_obj::Create(8)
            			->setFixed(0,HX_("stencil",fc,bd,03,80),true)
            			->setFixed(1,HX_("depth",03,f1,29,d7),true)
            			->setFixed(2,HX_("colorDepth",a0,08,96,fb),32)
            			->setFixed(3,HX_("background",ee,93,1d,26),0)
            			->setFixed(4,HX_("vsync",d1,2d,a8,3d),false)
            			->setFixed(5,HX_("antialiasing",f4,16,b3,48),0)
            			->setFixed(6,HX_("type",ba,f2,08,4d),null())
            			->setFixed(7,HX_("hardware",a8,e2,d3,75),true)),::hx::paccDynamic);
HXLINE(  69)		if (::hx::IsNull( app->_hx___window )) {
HXLINE(  71)			if (::hx::IsNotNull( config )) {
HXLINE(  73)				int _g = 0;
HXDLIN(  73)				::Array< ::String > _g1 = ::Reflect_obj::fields(config);
HXDLIN(  73)				while((_g < _g1->length)){
HXLINE(  73)					::String field = _g1->__get(_g);
HXDLIN(  73)					_g = (_g + 1);
HXLINE(  75)					if (::Reflect_obj::hasField(attributes,field)) {
HXLINE(  77)						::Reflect_obj::setField(attributes,field,::Reflect_obj::field(config,field));
            					}
            					else {
HXLINE(  79)						if (::Reflect_obj::hasField( ::Dynamic(attributes->__Field(HX_("context",ef,95,77,19),::hx::paccDynamic)),field)) {
HXLINE(  81)							 ::Dynamic attributes1 = attributes->__Field(HX_("context",ef,95,77,19),::hx::paccDynamic);
HXDLIN(  81)							::Reflect_obj::setField(attributes1,field,::Reflect_obj::field(config,field));
            						}
            					}
            				}
            			}
HXLINE(  87)			::lime::_hx_system::System_obj::_hx___parseArguments(attributes);
            		}
HXLINE(  91)		app->createWindow(attributes);
HXLINE( 104)		{
HXLINE( 104)			int _g = 0;
HXDLIN( 104)			::Array< ::Dynamic> _g1 = ::ManifestResources_obj::preloadLibraries;
HXDLIN( 104)			while((_g < _g1->length)){
HXLINE( 104)				 ::lime::utils::AssetLibrary library = _g1->__get(_g).StaticCast<  ::lime::utils::AssetLibrary >();
HXDLIN( 104)				_g = (_g + 1);
HXLINE( 106)				app->_hx___preloader->addLibrary(library);
            			}
            		}
HXLINE( 109)		{
HXLINE( 109)			int _g2 = 0;
HXDLIN( 109)			::Array< ::String > _g3 = ::ManifestResources_obj::preloadLibraryNames;
HXDLIN( 109)			while((_g2 < _g3->length)){
HXLINE( 109)				::String name = _g3->__get(_g2);
HXDLIN( 109)				_g2 = (_g2 + 1);
HXLINE( 111)				app->_hx___preloader->addLibraryName(name);
            			}
            		}
HXLINE( 115)		app->_hx___preloader->load();
HXLINE( 118)		::ApplicationMain_obj::start(app);
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(ApplicationMain_obj,create,(void))

void ApplicationMain_obj::start( ::lime::app::Application app){
            	HX_STACKFRAME(&_hx_pos_6fcf922b66429816_123_start)
HXLINE( 126)		int result = app->exec();
HXLINE( 129)		::lime::_hx_system::System_obj::exit(result);
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(ApplicationMain_obj,start,(void))


ApplicationMain_obj::ApplicationMain_obj()
{
}

bool ApplicationMain_obj::__GetStatic(const ::String &inName, Dynamic &outValue, ::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"main") ) { outValue = main_dyn(); return true; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"start") ) { outValue = start_dyn(); return true; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"create") ) { outValue = create_dyn(); return true; }
	}
	return false;
}

#ifdef HXCPP_SCRIPTABLE
static ::hx::StorageInfo *ApplicationMain_obj_sMemberStorageInfo = 0;
static ::hx::StaticInfo *ApplicationMain_obj_sStaticStorageInfo = 0;
#endif

::hx::Class ApplicationMain_obj::__mClass;

static ::String ApplicationMain_obj_sStaticFields[] = {
	HX_("main",39,38,56,48),
	HX_("create",fc,66,0f,7c),
	HX_("start",62,74,0b,84),
	::String(null())
};

void ApplicationMain_obj::__register()
{
	ApplicationMain_obj _hx_dummy;
	ApplicationMain_obj::_hx_vtable = *(void **)&_hx_dummy;
	::hx::Static(__mClass) = new ::hx::Class_obj();
	__mClass->mName = HX_("ApplicationMain",89,ff,39,4a);
	__mClass->mSuper = &super::__SGetClass();
	__mClass->mConstructEmpty = &__CreateEmpty;
	__mClass->mConstructArgs = &__Create;
	__mClass->mGetStaticField = &ApplicationMain_obj::__GetStatic;
	__mClass->mSetStaticField = &::hx::Class_obj::SetNoStaticField;
	__mClass->mStatics = ::hx::Class_obj::dupFunctions(ApplicationMain_obj_sStaticFields);
	__mClass->mMembers = ::hx::Class_obj::dupFunctions(0 /* sMemberFields */);
	__mClass->mCanCast = ::hx::TCanCast< ApplicationMain_obj >;
#ifdef HXCPP_SCRIPTABLE
	__mClass->mMemberStorageInfo = ApplicationMain_obj_sMemberStorageInfo;
#endif
#ifdef HXCPP_SCRIPTABLE
	__mClass->mStaticStorageInfo = ApplicationMain_obj_sStaticStorageInfo;
#endif
	::hx::_hx_RegisterClass(__mClass->mName, __mClass);
}

void ApplicationMain_obj::__boot()
{
}

