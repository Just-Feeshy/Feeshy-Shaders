#ifndef INCLUDED_lime_math__RGBA_RGBA_Impl_
#define INCLUDED_lime_math__RGBA_RGBA_Impl_

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#ifndef INCLUDED_95f339a1d026d52c
#define INCLUDED_95f339a1d026d52c
#include "hxMath.h"
#endif
HX_DECLARE_CLASS2(haxe,io,Bytes)
HX_DECLARE_CLASS3(lime,math,_RGBA,RGBA_Impl_)
HX_DECLARE_CLASS2(lime,utils,ArrayBufferView)

namespace lime{
namespace math{
namespace _RGBA{


class HXCPP_CLASS_ATTRIBUTES RGBA_Impl__obj : public ::hx::Object
{
	public:
		typedef ::hx::Object super;
		typedef RGBA_Impl__obj OBJ_;
		RGBA_Impl__obj();

	public:
		enum { _hx_ClassId = 0x4bfe0b6a };

		void __construct();
		inline void *operator new(size_t inSize, bool inContainer=false,const char *inName="lime.math._RGBA.RGBA_Impl_")
			{ return ::hx::Object::operator new(inSize,inContainer,inName); }
		inline void *operator new(size_t inSize, int extra)
			{ return ::hx::Object::operator new(inSize+extra,false,"lime.math._RGBA.RGBA_Impl_"); }

		inline static ::hx::ObjectPtr< RGBA_Impl__obj > __new() {
			::hx::ObjectPtr< RGBA_Impl__obj > __this = new RGBA_Impl__obj();
			__this->__construct();
			return __this;
		}

		inline static ::hx::ObjectPtr< RGBA_Impl__obj > __alloc(::hx::Ctx *_hx_ctx) {
			RGBA_Impl__obj *__this = (RGBA_Impl__obj*)(::hx::Ctx::alloc(_hx_ctx, sizeof(RGBA_Impl__obj), false, "lime.math._RGBA.RGBA_Impl_"));
			*(void **)__this = RGBA_Impl__obj::_hx_vtable;
			return __this;
		}

		static void * _hx_vtable;
		static Dynamic __CreateEmpty();
		static Dynamic __Create(::hx::DynamicArray inArgs);
		//~RGBA_Impl__obj();

		HX_DO_RTTI_ALL;
		static bool __GetStatic(const ::String &inString, Dynamic &outValue, ::hx::PropertyAccess inCallProp);
		static void __register();
		bool _hx_isInstanceOf(int inClassId);
		static void __init__();

		::String __ToString() const { return HX_("RGBA_Impl_",54,54,4c,b3); }

		static void __boot();
		static  ::lime::utils::ArrayBufferView _hx___alpha16;
		static  ::lime::utils::ArrayBufferView _hx___clamp;
		static int a16;
		static Float unmult;
		static int _new(::hx::Null< int >  rgba);
		static ::Dynamic _new_dyn();

		static int create(int r,int g,int b,int a);
		static ::Dynamic create_dyn();

		static void multiplyAlpha(int this1);
		static ::Dynamic multiplyAlpha_dyn();

		static void readUInt8(int this1, ::lime::utils::ArrayBufferView data,int offset,::hx::Null< int >  format,::hx::Null< bool >  premultiplied);
		static ::Dynamic readUInt8_dyn();

		static void set(int this1,int r,int g,int b,int a);
		static ::Dynamic set_dyn();

		static void unmultiplyAlpha(int this1);
		static ::Dynamic unmultiplyAlpha_dyn();

		static void writeUInt8(int this1, ::lime::utils::ArrayBufferView data,int offset,::hx::Null< int >  format,::hx::Null< bool >  premultiplied);
		static ::Dynamic writeUInt8_dyn();

		static int _hx___fromARGB(int argb);
		static ::Dynamic _hx___fromARGB_dyn();

		static int _hx___fromBGRA(int bgra);
		static ::Dynamic _hx___fromBGRA_dyn();

		static int get_a(int this1);
		static ::Dynamic get_a_dyn();

		static int set_a(int this1,int value);
		static ::Dynamic set_a_dyn();

		static int get_b(int this1);
		static ::Dynamic get_b_dyn();

		static int set_b(int this1,int value);
		static ::Dynamic set_b_dyn();

		static int get_g(int this1);
		static ::Dynamic get_g_dyn();

		static int set_g(int this1,int value);
		static ::Dynamic set_g_dyn();

		static int get_r(int this1);
		static ::Dynamic get_r_dyn();

		static int set_r(int this1,int value);
		static ::Dynamic set_r_dyn();

};

} // end namespace lime
} // end namespace math
} // end namespace _RGBA

#endif /* INCLUDED_lime_math__RGBA_RGBA_Impl_ */ 
