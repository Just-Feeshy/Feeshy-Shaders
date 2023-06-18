#ifndef INCLUDED_lime_utils__UInt8Array_UInt8Array_Impl_
#define INCLUDED_lime_utils__UInt8Array_UInt8Array_Impl_

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(haxe,io,Bytes)
HX_DECLARE_CLASS2(lime,utils,ArrayBufferView)
HX_DECLARE_CLASS3(lime,utils,_UInt8Array,UInt8Array_Impl_)

namespace lime{
namespace utils{
namespace _UInt8Array{


class HXCPP_CLASS_ATTRIBUTES UInt8Array_Impl__obj : public ::hx::Object
{
	public:
		typedef ::hx::Object super;
		typedef UInt8Array_Impl__obj OBJ_;
		UInt8Array_Impl__obj();

	public:
		enum { _hx_ClassId = 0x2b2398dd };

		void __construct();
		inline void *operator new(size_t inSize, bool inContainer=false,const char *inName="lime.utils._UInt8Array.UInt8Array_Impl_")
			{ return ::hx::Object::operator new(inSize,inContainer,inName); }
		inline void *operator new(size_t inSize, int extra)
			{ return ::hx::Object::operator new(inSize+extra,false,"lime.utils._UInt8Array.UInt8Array_Impl_"); }

		inline static ::hx::ObjectPtr< UInt8Array_Impl__obj > __new() {
			::hx::ObjectPtr< UInt8Array_Impl__obj > __this = new UInt8Array_Impl__obj();
			__this->__construct();
			return __this;
		}

		inline static ::hx::ObjectPtr< UInt8Array_Impl__obj > __alloc(::hx::Ctx *_hx_ctx) {
			UInt8Array_Impl__obj *__this = (UInt8Array_Impl__obj*)(::hx::Ctx::alloc(_hx_ctx, sizeof(UInt8Array_Impl__obj), false, "lime.utils._UInt8Array.UInt8Array_Impl_"));
			*(void **)__this = UInt8Array_Impl__obj::_hx_vtable;
			return __this;
		}

		static void * _hx_vtable;
		static Dynamic __CreateEmpty();
		static Dynamic __Create(::hx::DynamicArray inArgs);
		//~UInt8Array_Impl__obj();

		HX_DO_RTTI_ALL;
		static bool __GetStatic(const ::String &inString, Dynamic &outValue, ::hx::PropertyAccess inCallProp);
		static void __register();
		bool _hx_isInstanceOf(int inClassId);
		::String __ToString() const { return HX_("UInt8Array_Impl_",3b,dc,bf,2b); }

		static void __boot();
		static int BYTES_PER_ELEMENT;
		static  ::lime::utils::ArrayBufferView _new( ::Dynamic elements, ::haxe::io::Bytes buffer,::cpp::VirtualArray array, ::lime::utils::ArrayBufferView view, ::Dynamic byteoffset, ::Dynamic len);
		static ::Dynamic _new_dyn();

		static  ::lime::utils::ArrayBufferView subarray( ::lime::utils::ArrayBufferView this1,int begin, ::Dynamic end);
		static ::Dynamic subarray_dyn();

		static  ::lime::utils::ArrayBufferView fromBytes( ::haxe::io::Bytes bytes, ::Dynamic byteOffset, ::Dynamic len);
		static ::Dynamic fromBytes_dyn();

		static  ::haxe::io::Bytes toBytes( ::lime::utils::ArrayBufferView this1);
		static ::Dynamic toBytes_dyn();

		static ::String toString( ::lime::utils::ArrayBufferView this1);
		static ::Dynamic toString_dyn();

		static int get_length( ::lime::utils::ArrayBufferView this1);
		static ::Dynamic get_length_dyn();

};

} // end namespace lime
} // end namespace utils
} // end namespace _UInt8Array

#endif /* INCLUDED_lime_utils__UInt8Array_UInt8Array_Impl_ */ 
