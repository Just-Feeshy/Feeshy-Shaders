#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_haxe_Exception
#include <haxe/Exception.h>
#endif
#ifndef INCLUDED_haxe_io_Bytes
#include <haxe/io/Bytes.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeCFFI
#include <lime/_internal/backend/native/NativeCFFI.h>
#endif
#ifndef INCLUDED_lime__internal_format_JPEG
#include <lime/_internal/format/JPEG.h>
#endif
#ifndef INCLUDED_lime_graphics_Image
#include <lime/graphics/Image.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageBuffer
#include <lime/graphics/ImageBuffer.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageType
#include <lime/graphics/ImageType.h>
#endif
#ifndef INCLUDED_lime_system_CFFI
#include <lime/system/CFFI.h>
#endif
#ifndef INCLUDED_lime_utils_ArrayBufferView
#include <lime/utils/ArrayBufferView.h>
#endif
#ifndef INCLUDED_lime_utils_TAError
#include <lime/utils/TAError.h>
#endif

HX_LOCAL_STACK_FRAME(_hx_pos_4ccd4a1491a42735_30_decodeBytes,"lime._internal.format.JPEG","decodeBytes",0xc3347f43,"lime._internal.format.JPEG.decodeBytes","lime/_internal/format/JPEG.hx",30,0x7b93b1cb)
HX_LOCAL_STACK_FRAME(_hx_pos_4ccd4a1491a42735_55_decodeFile,"lime._internal.format.JPEG","decodeFile",0x1f05faa4,"lime._internal.format.JPEG.decodeFile","lime/_internal/format/JPEG.hx",55,0x7b93b1cb)
HX_LOCAL_STACK_FRAME(_hx_pos_4ccd4a1491a42735_80_encode,"lime._internal.format.JPEG","encode",0x45d4f0f0,"lime._internal.format.JPEG.encode","lime/_internal/format/JPEG.hx",80,0x7b93b1cb)
namespace lime{
namespace _internal{
namespace format{

void JPEG_obj::__construct() { }

Dynamic JPEG_obj::__CreateEmpty() { return new JPEG_obj; }

void *JPEG_obj::_hx_vtable = 0;

Dynamic JPEG_obj::__Create(::hx::DynamicArray inArgs)
{
	::hx::ObjectPtr< JPEG_obj > _hx_result = new JPEG_obj();
	_hx_result->__construct();
	return _hx_result;
}

bool JPEG_obj::_hx_isInstanceOf(int inClassId) {
	return inClassId==(int)0x00000001 || inClassId==(int)0x7fb037b2;
}

 ::lime::graphics::Image JPEG_obj::decodeBytes( ::haxe::io::Bytes bytes,::hx::Null< bool >  __o_decodeData){
            		bool decodeData = __o_decodeData.Default(true);
            	HX_GC_STACKFRAME(&_hx_pos_4ccd4a1491a42735_30_decodeBytes)
HXLINE(  33)		::cpp::Function<  ::hx::Object *  ( ::hx::Object *,bool, ::hx::Object *) > buffer = ::lime::_internal::backend::native::NativeCFFI_obj::lime_jpeg_decode_bytes;
HXDLIN(  33)		 ::Dynamic elements = null();
HXDLIN(  33)		 ::haxe::io::Bytes buffer1 = ::haxe::io::Bytes_obj::alloc(0);
HXDLIN(  33)		::cpp::VirtualArray array = null();
HXDLIN(  33)		 ::lime::utils::ArrayBufferView view = null();
HXDLIN(  33)		 ::Dynamic len = null();
HXDLIN(  33)		 ::lime::utils::ArrayBufferView this1;
HXDLIN(  33)		if (::hx::IsNotNull( elements )) {
HXLINE(  33)			this1 =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,elements,4);
            		}
            		else {
HXLINE(  33)			if (::hx::IsNotNull( array )) {
HXLINE(  33)				 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  33)				_this->byteOffset = 0;
HXDLIN(  33)				_this->length = array->get_length();
HXDLIN(  33)				_this->byteLength = (_this->length * _this->bytesPerElement);
HXDLIN(  33)				 ::haxe::io::Bytes this2 = ::haxe::io::Bytes_obj::alloc(_this->byteLength);
HXDLIN(  33)				_this->buffer = this2;
HXDLIN(  33)				_this->copyFromArray(array,null());
HXDLIN(  33)				this1 = _this;
            			}
            			else {
HXLINE(  33)				if (::hx::IsNotNull( view )) {
HXLINE(  33)					 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  33)					 ::haxe::io::Bytes srcData = view->buffer;
HXDLIN(  33)					int srcLength = view->length;
HXDLIN(  33)					int srcByteOffset = view->byteOffset;
HXDLIN(  33)					int srcElementSize = view->bytesPerElement;
HXDLIN(  33)					int elementSize = _this->bytesPerElement;
HXDLIN(  33)					if ((view->type == _this->type)) {
HXLINE(  33)						int srcLength = srcData->length;
HXDLIN(  33)						int cloneLength = (srcLength - srcByteOffset);
HXDLIN(  33)						 ::haxe::io::Bytes this1 = ::haxe::io::Bytes_obj::alloc(cloneLength);
HXDLIN(  33)						_this->buffer = this1;
HXDLIN(  33)						_this->buffer->blit(0,srcData,srcByteOffset,cloneLength);
            					}
            					else {
HXLINE(  33)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("unimplemented",09,2f,74,b4)));
            					}
HXDLIN(  33)					_this->byteLength = (_this->bytesPerElement * srcLength);
HXDLIN(  33)					_this->byteOffset = 0;
HXDLIN(  33)					_this->length = srcLength;
HXDLIN(  33)					this1 = _this;
            				}
            				else {
HXLINE(  33)					if (::hx::IsNotNull( buffer1 )) {
HXLINE(  33)						 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  33)						int in_byteOffset = 0;
HXDLIN(  33)						if ((in_byteOffset < 0)) {
HXLINE(  33)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(  33)						if ((::hx::Mod(in_byteOffset,_this->bytesPerElement) != 0)) {
HXLINE(  33)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(  33)						int bufferByteLength = buffer1->length;
HXDLIN(  33)						int elementSize = _this->bytesPerElement;
HXDLIN(  33)						int newByteLength = bufferByteLength;
HXDLIN(  33)						if (::hx::IsNull( len )) {
HXLINE(  33)							newByteLength = (bufferByteLength - in_byteOffset);
HXDLIN(  33)							if ((::hx::Mod(bufferByteLength,_this->bytesPerElement) != 0)) {
HXLINE(  33)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
HXDLIN(  33)							if ((newByteLength < 0)) {
HXLINE(  33)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
            						else {
HXLINE(  33)							newByteLength = (( (int)(len) ) * _this->bytesPerElement);
HXDLIN(  33)							int newRange = (in_byteOffset + newByteLength);
HXDLIN(  33)							if ((newRange > bufferByteLength)) {
HXLINE(  33)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
HXDLIN(  33)						_this->buffer = buffer1;
HXDLIN(  33)						_this->byteOffset = in_byteOffset;
HXDLIN(  33)						_this->byteLength = newByteLength;
HXDLIN(  33)						_this->length = ::Std_obj::_hx_int((( (Float)(newByteLength) ) / ( (Float)(_this->bytesPerElement) )));
HXDLIN(  33)						this1 = _this;
            					}
            					else {
HXLINE(  33)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("Invalid constructor arguments for UInt8Array",6b,44,d5,85)));
            					}
            				}
            			}
            		}
HXDLIN(  33)		 ::hx::Object * buffer2 = buffer(::hx::DynamicPtr(bytes),decodeData,::hx::DynamicPtr( ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,this1,null(),null(),null(),null())));
HXLINE(  35)		if (::hx::IsNotNull( buffer2 )) {
HXLINE(  37)			return  ::lime::graphics::Image_obj::__alloc( HX_CTX ,( ( ::Dynamic)(buffer2) ),null(),null(),null(),null(),null(),null());
            		}
HXLINE(  51)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(JPEG_obj,decodeBytes,return )

 ::lime::graphics::Image JPEG_obj::decodeFile(::String path,::hx::Null< bool >  __o_decodeData){
            		bool decodeData = __o_decodeData.Default(true);
            	HX_GC_STACKFRAME(&_hx_pos_4ccd4a1491a42735_55_decodeFile)
HXLINE(  58)		::cpp::Function<  ::hx::Object *  (::String,bool, ::hx::Object *) > buffer = ::lime::_internal::backend::native::NativeCFFI_obj::lime_jpeg_decode_file;
HXDLIN(  58)		 ::Dynamic elements = null();
HXDLIN(  58)		 ::haxe::io::Bytes buffer1 = ::haxe::io::Bytes_obj::alloc(0);
HXDLIN(  58)		::cpp::VirtualArray array = null();
HXDLIN(  58)		 ::lime::utils::ArrayBufferView view = null();
HXDLIN(  58)		 ::Dynamic len = null();
HXDLIN(  58)		 ::lime::utils::ArrayBufferView this1;
HXDLIN(  58)		if (::hx::IsNotNull( elements )) {
HXLINE(  58)			this1 =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,elements,4);
            		}
            		else {
HXLINE(  58)			if (::hx::IsNotNull( array )) {
HXLINE(  58)				 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  58)				_this->byteOffset = 0;
HXDLIN(  58)				_this->length = array->get_length();
HXDLIN(  58)				_this->byteLength = (_this->length * _this->bytesPerElement);
HXDLIN(  58)				 ::haxe::io::Bytes this2 = ::haxe::io::Bytes_obj::alloc(_this->byteLength);
HXDLIN(  58)				_this->buffer = this2;
HXDLIN(  58)				_this->copyFromArray(array,null());
HXDLIN(  58)				this1 = _this;
            			}
            			else {
HXLINE(  58)				if (::hx::IsNotNull( view )) {
HXLINE(  58)					 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  58)					 ::haxe::io::Bytes srcData = view->buffer;
HXDLIN(  58)					int srcLength = view->length;
HXDLIN(  58)					int srcByteOffset = view->byteOffset;
HXDLIN(  58)					int srcElementSize = view->bytesPerElement;
HXDLIN(  58)					int elementSize = _this->bytesPerElement;
HXDLIN(  58)					if ((view->type == _this->type)) {
HXLINE(  58)						int srcLength = srcData->length;
HXDLIN(  58)						int cloneLength = (srcLength - srcByteOffset);
HXDLIN(  58)						 ::haxe::io::Bytes this1 = ::haxe::io::Bytes_obj::alloc(cloneLength);
HXDLIN(  58)						_this->buffer = this1;
HXDLIN(  58)						_this->buffer->blit(0,srcData,srcByteOffset,cloneLength);
            					}
            					else {
HXLINE(  58)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("unimplemented",09,2f,74,b4)));
            					}
HXDLIN(  58)					_this->byteLength = (_this->bytesPerElement * srcLength);
HXDLIN(  58)					_this->byteOffset = 0;
HXDLIN(  58)					_this->length = srcLength;
HXDLIN(  58)					this1 = _this;
            				}
            				else {
HXLINE(  58)					if (::hx::IsNotNull( buffer1 )) {
HXLINE(  58)						 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(  58)						int in_byteOffset = 0;
HXDLIN(  58)						if ((in_byteOffset < 0)) {
HXLINE(  58)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(  58)						if ((::hx::Mod(in_byteOffset,_this->bytesPerElement) != 0)) {
HXLINE(  58)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(  58)						int bufferByteLength = buffer1->length;
HXDLIN(  58)						int elementSize = _this->bytesPerElement;
HXDLIN(  58)						int newByteLength = bufferByteLength;
HXDLIN(  58)						if (::hx::IsNull( len )) {
HXLINE(  58)							newByteLength = (bufferByteLength - in_byteOffset);
HXDLIN(  58)							if ((::hx::Mod(bufferByteLength,_this->bytesPerElement) != 0)) {
HXLINE(  58)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
HXDLIN(  58)							if ((newByteLength < 0)) {
HXLINE(  58)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
            						else {
HXLINE(  58)							newByteLength = (( (int)(len) ) * _this->bytesPerElement);
HXDLIN(  58)							int newRange = (in_byteOffset + newByteLength);
HXDLIN(  58)							if ((newRange > bufferByteLength)) {
HXLINE(  58)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
HXDLIN(  58)						_this->buffer = buffer1;
HXDLIN(  58)						_this->byteOffset = in_byteOffset;
HXDLIN(  58)						_this->byteLength = newByteLength;
HXDLIN(  58)						_this->length = ::Std_obj::_hx_int((( (Float)(newByteLength) ) / ( (Float)(_this->bytesPerElement) )));
HXDLIN(  58)						this1 = _this;
            					}
            					else {
HXLINE(  58)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("Invalid constructor arguments for UInt8Array",6b,44,d5,85)));
            					}
            				}
            			}
            		}
HXDLIN(  58)		 ::hx::Object * buffer2 = buffer(path,decodeData,::hx::DynamicPtr( ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,this1,null(),null(),null(),null())));
HXLINE(  60)		if (::hx::IsNotNull( buffer2 )) {
HXLINE(  62)			return  ::lime::graphics::Image_obj::__alloc( HX_CTX ,( ( ::Dynamic)(buffer2) ),null(),null(),null(),null(),null(),null());
            		}
HXLINE(  76)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(JPEG_obj,decodeFile,return )

 ::haxe::io::Bytes JPEG_obj::encode( ::lime::graphics::Image image,int quality){
            	HX_STACKFRAME(&_hx_pos_4ccd4a1491a42735_80_encode)
HXLINE(  81)		bool _hx_tmp;
HXDLIN(  81)		if (!(image->get_premultiplied())) {
HXLINE(  81)			_hx_tmp = (image->get_format() != 0);
            		}
            		else {
HXLINE(  81)			_hx_tmp = true;
            		}
HXDLIN(  81)		if (_hx_tmp) {
HXLINE(  85)			image = image->clone();
HXLINE(  86)			image->set_premultiplied(false);
HXLINE(  87)			image->set_format(0);
            		}
HXLINE(  92)		if (::lime::_hx_system::CFFI_obj::enabled) {
HXLINE(  95)			::cpp::Function<  ::hx::Object *  ( ::hx::Object *,int,int, ::hx::Object *) > _hx_tmp = ::lime::_internal::backend::native::NativeCFFI_obj::lime_image_encode;
HXDLIN(  95)			 ::lime::graphics::ImageBuffer image1 = image->buffer;
HXDLIN(  95)			return ( ( ::Dynamic)(_hx_tmp(::hx::DynamicPtr(image1),1,quality,::hx::DynamicPtr(::haxe::io::Bytes_obj::alloc(0)))) );
            		}
HXLINE( 150)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(JPEG_obj,encode,return )


JPEG_obj::JPEG_obj()
{
}

bool JPEG_obj::__GetStatic(const ::String &inName, Dynamic &outValue, ::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"encode") ) { outValue = encode_dyn(); return true; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"decodeFile") ) { outValue = decodeFile_dyn(); return true; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"decodeBytes") ) { outValue = decodeBytes_dyn(); return true; }
	}
	return false;
}

#ifdef HXCPP_SCRIPTABLE
static ::hx::StorageInfo *JPEG_obj_sMemberStorageInfo = 0;
static ::hx::StaticInfo *JPEG_obj_sStaticStorageInfo = 0;
#endif

::hx::Class JPEG_obj::__mClass;

static ::String JPEG_obj_sStaticFields[] = {
	HX_("decodeBytes",5d,94,b1,85),
	HX_("decodeFile",ca,86,63,ce),
	HX_("encode",16,f2,e3,f9),
	::String(null())
};

void JPEG_obj::__register()
{
	JPEG_obj _hx_dummy;
	JPEG_obj::_hx_vtable = *(void **)&_hx_dummy;
	::hx::Static(__mClass) = new ::hx::Class_obj();
	__mClass->mName = HX_("lime._internal.format.JPEG",54,0a,8d,65);
	__mClass->mSuper = &super::__SGetClass();
	__mClass->mConstructEmpty = &__CreateEmpty;
	__mClass->mConstructArgs = &__Create;
	__mClass->mGetStaticField = &JPEG_obj::__GetStatic;
	__mClass->mSetStaticField = &::hx::Class_obj::SetNoStaticField;
	__mClass->mStatics = ::hx::Class_obj::dupFunctions(JPEG_obj_sStaticFields);
	__mClass->mMembers = ::hx::Class_obj::dupFunctions(0 /* sMemberFields */);
	__mClass->mCanCast = ::hx::TCanCast< JPEG_obj >;
#ifdef HXCPP_SCRIPTABLE
	__mClass->mMemberStorageInfo = JPEG_obj_sMemberStorageInfo;
#endif
#ifdef HXCPP_SCRIPTABLE
	__mClass->mStaticStorageInfo = JPEG_obj_sStaticStorageInfo;
#endif
	::hx::_hx_RegisterClass(__mClass->mName, __mClass);
}

} // end namespace lime
} // end namespace _internal
} // end namespace format
