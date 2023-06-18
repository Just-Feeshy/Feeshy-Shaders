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
#ifndef INCLUDED_haxe_io_Encoding
#include <haxe/io/Encoding.h>
#endif
#ifndef INCLUDED_lime__internal_backend_native_NativeCFFI
#include <lime/_internal/backend/native/NativeCFFI.h>
#endif
#ifndef INCLUDED_lime__internal_format_BMP
#include <lime/_internal/format/BMP.h>
#endif
#ifndef INCLUDED_lime__internal_format_BMPType
#include <lime/_internal/format/BMPType.h>
#endif
#ifndef INCLUDED_lime__internal_format_Base64
#include <lime/_internal/format/Base64.h>
#endif
#ifndef INCLUDED_lime__internal_format_JPEG
#include <lime/_internal/format/JPEG.h>
#endif
#ifndef INCLUDED_lime__internal_format_PNG
#include <lime/_internal/format/PNG.h>
#endif
#ifndef INCLUDED_lime__internal_graphics_ImageCanvasUtil
#include <lime/_internal/graphics/ImageCanvasUtil.h>
#endif
#ifndef INCLUDED_lime__internal_graphics_ImageDataUtil
#include <lime/_internal/graphics/ImageDataUtil.h>
#endif
#ifndef INCLUDED_lime_app_Future
#include <lime/app/Future.h>
#endif
#ifndef INCLUDED_lime_graphics_Image
#include <lime/graphics/Image.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageBuffer
#include <lime/graphics/ImageBuffer.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageChannel
#include <lime/graphics/ImageChannel.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageFileFormat
#include <lime/graphics/ImageFileFormat.h>
#endif
#ifndef INCLUDED_lime_graphics_ImageType
#include <lime/graphics/ImageType.h>
#endif
#ifndef INCLUDED_lime_math_Rectangle
#include <lime/math/Rectangle.h>
#endif
#ifndef INCLUDED_lime_math_Vector2
#include <lime/math/Vector2.h>
#endif
#ifndef INCLUDED_lime_math__ColorMatrix_ColorMatrix_Impl_
#include <lime/math/_ColorMatrix/ColorMatrix_Impl_.h>
#endif
#ifndef INCLUDED_lime_net__HTTPRequest_AbstractHTTPRequest
#include <lime/net/_HTTPRequest/AbstractHTTPRequest.h>
#endif
#ifndef INCLUDED_lime_net__HTTPRequest_Bytes
#include <lime/net/_HTTPRequest_Bytes.h>
#endif
#ifndef INCLUDED_lime_net__HTTPRequest_lime_graphics_Image
#include <lime/net/_HTTPRequest_lime_graphics_Image.h>
#endif
#ifndef INCLUDED_lime_net__IHTTPRequest
#include <lime/net/_IHTTPRequest.h>
#endif
#ifndef INCLUDED_lime_system_CFFI
#include <lime/system/CFFI.h>
#endif
#ifndef INCLUDED_lime_system_Endian
#include <lime/system/Endian.h>
#endif
#ifndef INCLUDED_lime_utils_ArrayBufferView
#include <lime/utils/ArrayBufferView.h>
#endif
#ifndef INCLUDED_lime_utils_BytePointerData
#include <lime/utils/BytePointerData.h>
#endif
#ifndef INCLUDED_lime_utils_TAError
#include <lime/utils/TAError.h>
#endif

HX_DEFINE_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_221_new,"lime.graphics.Image","new",0x344ae603,"lime.graphics.Image.new","lime/graphics/Image.hx",221,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_287_clone,"lime.graphics.Image","clone",0xb88517c0,"lime.graphics.Image.clone","lime/graphics/Image.hx",287,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_316_colorTransform,"lime.graphics.Image","colorTransform",0xaf89aec6,"lime.graphics.Image.colorTransform","lime/graphics/Image.hx",316,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_349_copyChannel,"lime.graphics.Image","copyChannel",0xc3306e31,"lime.graphics.Image.copyChannel","lime/graphics/Image.hx",349,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_408_copyPixels,"lime.graphics.Image","copyPixels",0x19d2897f,"lime.graphics.Image.copyPixels","lime/graphics/Image.hx",408,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_508_encode,"lime.graphics.Image","encode",0xa785c453,"lime.graphics.Image.encode","lime/graphics/Image.hx",508,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_532_fillRect,"lime.graphics.Image","fillRect",0x2421e0c4,"lime.graphics.Image.fillRect","lime/graphics/Image.hx",532,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_577_floodFill,"lime.graphics.Image","floodFill",0x1da9f544,"lime.graphics.Image.floodFill","lime/graphics/Image.hx",577,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_736_getColorBoundsRect,"lime.graphics.Image","getColorBoundsRect",0x21db6743,"lime.graphics.Image.getColorBoundsRect","lime/graphics/Image.hx",736,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_768_getPixel,"lime.graphics.Image","getPixel",0xd9e3718d,"lime.graphics.Image.getPixel","lime/graphics/Image.hx",768,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_810_getPixel32,"lime.graphics.Image","getPixel32",0xaeccdb6c,"lime.graphics.Image.getPixel32","lime/graphics/Image.hx",810,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_851_getPixels,"lime.graphics.Image","getPixels",0xcd1fea46,"lime.graphics.Image.getPixels","lime/graphics/Image.hx",851,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1080_merge,"lime.graphics.Image","merge",0x75e8a71b,"lime.graphics.Image.merge","lime/graphics/Image.hx",1080,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1114_resize,"lime.graphics.Image","resize",0xb61d2c31,"lime.graphics.Image.resize","lime/graphics/Image.hx",1114,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1154_scroll,"lime.graphics.Image","scroll",0xf506aa4a,"lime.graphics.Image.scroll","lime/graphics/Image.hx",1154,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1180_setPixel,"lime.graphics.Image","setPixel",0x8840cb01,"lime.graphics.Image.setPixel","lime/graphics/Image.hx",1180,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1217_setPixel32,"lime.graphics.Image","setPixel32",0xb24a79e0,"lime.graphics.Image.setPixel32","lime/graphics/Image.hx",1217,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1254_setPixels,"lime.graphics.Image","setPixels",0xb070d652,"lime.graphics.Image.setPixels","lime/graphics/Image.hx",1254,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1361_threshold,"lime.graphics.Image","threshold",0xf8c3358e,"lime.graphics.Image.threshold","lime/graphics/Image.hx",1361,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1402___clipRect,"lime.graphics.Image","__clipRect",0xd30737f1,"lime.graphics.Image.__clipRect","lime/graphics/Image.hx",1402,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1462___fromBase64,"lime.graphics.Image","__fromBase64",0x71681bb6,"lime.graphics.Image.__fromBase64","lime/graphics/Image.hx",1462,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1470___fromBytes,"lime.graphics.Image","__fromBytes",0x40972c24,"lime.graphics.Image.__fromBytes","lime/graphics/Image.hx",1470,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1527___fromFile,"lime.graphics.Image","__fromFile",0x1c2444e3,"lime.graphics.Image.__fromFile","lime/graphics/Image.hx",1527,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1685___fromImageBuffer,"lime.graphics.Image","__fromImageBuffer",0xe152fb34,"lime.graphics.Image.__fromImageBuffer","lime/graphics/Image.hx",1685,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1737_get_data,"lime.graphics.Image","get_data",0x7986ad30,"lime.graphics.Image.get_data","lime/graphics/Image.hx",1737,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1753_set_data,"lime.graphics.Image","set_data",0x27e406a4,"lime.graphics.Image.set_data","lime/graphics/Image.hx",1753,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1758_get_format,"lime.graphics.Image","get_format",0xc57a33bd,"lime.graphics.Image.get_format","lime/graphics/Image.hx",1758,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1762_set_format,"lime.graphics.Image","set_format",0xc8f7d231,"lime.graphics.Image.set_format","lime/graphics/Image.hx",1762,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1779_get_powerOfTwo,"lime.graphics.Image","get_powerOfTwo",0x62ee1df6,"lime.graphics.Image.get_powerOfTwo","lime/graphics/Image.hx",1779,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1785_set_powerOfTwo,"lime.graphics.Image","set_powerOfTwo",0x830e066a,"lime.graphics.Image.set_powerOfTwo","lime/graphics/Image.hx",1785,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1836_get_premultiplied,"lime.graphics.Image","get_premultiplied",0xc1478990,"lime.graphics.Image.get_premultiplied","lime/graphics/Image.hx",1836,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1840_set_premultiplied,"lime.graphics.Image","set_premultiplied",0xe4b5619c,"lime.graphics.Image.set_premultiplied","lime/graphics/Image.hx",1840,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1877_get_rect,"lime.graphics.Image","get_rect",0x82caa42a,"lime.graphics.Image.get_rect","lime/graphics/Image.hx",1877,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1889_get_src,"lime.graphics.Image","get_src",0x66c2929e,"lime.graphics.Image.get_src","lime/graphics/Image.hx",1889,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1894_set_src,"lime.graphics.Image","set_src",0x59c423aa,"lime.graphics.Image.set_src","lime/graphics/Image.hx",1894,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1898_get_transparent,"lime.graphics.Image","get_transparent",0xe1ee610c,"lime.graphics.Image.get_transparent","lime/graphics/Image.hx",1898,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1904_set_transparent,"lime.graphics.Image","set_transparent",0xddb9de18,"lime.graphics.Image.set_transparent","lime/graphics/Image.hx",1904,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_613_fromBase64,"lime.graphics.Image","fromBase64",0x6fd03756,"lime.graphics.Image.fromBase64","lime/graphics/Image.hx",613,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_627_fromBitmapData,"lime.graphics.Image","fromBitmapData",0x2e36df00,"lime.graphics.Image.fromBitmapData","lime/graphics/Image.hx",627,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_652_fromBytes,"lime.graphics.Image","fromBytes",0x36406484,"lime.graphics.Image.fromBytes","lime/graphics/Image.hx",652,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_672_fromCanvas,"lime.graphics.Image","fromCanvas",0xd2ea8e9f,"lime.graphics.Image.fromCanvas","lime/graphics/Image.hx",672,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_695_fromFile,"lime.graphics.Image","fromFile",0x58f03883,"lime.graphics.Image.fromFile","lime/graphics/Image.hx",695,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_715_fromImageElement,"lime.graphics.Image","fromImageElement",0x196571a8,"lime.graphics.Image.fromImageElement","lime/graphics/Image.hx",715,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_918_loadFromBase64,"lime.graphics.Image","loadFromBase64",0x3166e39c,"lime.graphics.Image.loadFromBase64","lime/graphics/Image.hx",918,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_997_loadFromBytes,"lime.graphics.Image","loadFromBytes",0xafa862fe,"lime.graphics.Image.loadFromBytes","lime/graphics/Image.hx",997,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_941_loadFromBytes,"lime.graphics.Image","loadFromBytes",0xafa862fe,"lime.graphics.Image.loadFromBytes","lime/graphics/Image.hx",941,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1056_loadFromFile,"lime.graphics.Image","loadFromFile",0xfb592749,"lime.graphics.Image.loadFromFile","lime/graphics/Image.hx",1056,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1007_loadFromFile,"lime.graphics.Image","loadFromFile",0xfb592749,"lime.graphics.Image.loadFromFile","lime/graphics/Image.hx",1007,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1703___isGIF,"lime.graphics.Image","__isGIF",0x6ba10e3d,"lime.graphics.Image.__isGIF","lime/graphics/Image.hx",1703,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1711___isJPG,"lime.graphics.Image","__isJPG",0x6ba35b1a,"lime.graphics.Image.__isJPG","lime/graphics/Image.hx",1711,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1721___isPNG,"lime.graphics.Image","__isPNG",0x6ba7e6e2,"lime.graphics.Image.__isPNG","lime/graphics/Image.hx",1721,0xc7b862ad)
HX_LOCAL_STACK_FRAME(_hx_pos_ef8f6e7e24e3b831_1729___isWebP,"lime.graphics.Image","__isWebP",0xcbf428e3,"lime.graphics.Image.__isWebP","lime/graphics/Image.hx",1729,0xc7b862ad)
namespace lime{
namespace graphics{

void Image_obj::__construct( ::lime::graphics::ImageBuffer buffer,::hx::Null< int >  __o_offsetX,::hx::Null< int >  __o_offsetY,::hx::Null< int >  __o_width,::hx::Null< int >  __o_height, ::Dynamic color, ::lime::graphics::ImageType type){
            		int offsetX = __o_offsetX.Default(0);
            		int offsetY = __o_offsetY.Default(0);
            		int width = __o_width.Default(-1);
            		int height = __o_height.Default(-1);
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_221_new)
HXLINE( 222)		this->offsetX = offsetX;
HXLINE( 223)		this->offsetY = offsetY;
HXLINE( 224)		this->width = width;
HXLINE( 225)		this->height = height;
HXLINE( 227)		this->version = 0;
HXLINE( 229)		if (::hx::IsNull( type )) {
HXLINE( 236)			type = ::lime::graphics::ImageType_obj::DATA_dyn();
            		}
HXLINE( 240)		this->type = type;
HXLINE( 242)		if (::hx::IsNull( buffer )) {
HXLINE( 244)			bool _hx_tmp;
HXDLIN( 244)			if ((width > 0)) {
HXLINE( 244)				_hx_tmp = (height > 0);
            			}
            			else {
HXLINE( 244)				_hx_tmp = false;
            			}
HXDLIN( 244)			if (_hx_tmp) {
HXLINE( 246)				switch((int)(this->type->_hx_getIndex())){
            					case (int)0: {
HXLINE( 249)						this->buffer =  ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,null(),width,height,null(),null());
HXLINE( 250)						::lime::_internal::graphics::ImageCanvasUtil_obj::createCanvas(::hx::ObjectPtr<OBJ_>(this),width,height);
HXLINE( 252)						bool _hx_tmp;
HXDLIN( 252)						if (::hx::IsNotNull( color )) {
HXLINE( 252)							_hx_tmp = ::hx::IsNotEq( color,0 );
            						}
            						else {
HXLINE( 252)							_hx_tmp = false;
            						}
HXDLIN( 252)						if (_hx_tmp) {
HXLINE( 254)							this->fillRect( ::lime::math::Rectangle_obj::__alloc( HX_CTX ,0,0,width,height),( (int)(color) ),null());
            						}
            					}
            					break;
            					case (int)1: {
HXLINE( 258)						 ::Dynamic elements = ((width * height) * 4);
HXDLIN( 258)						 ::haxe::io::Bytes buffer = null();
HXDLIN( 258)						::cpp::VirtualArray array = null();
HXDLIN( 258)						 ::lime::utils::ArrayBufferView view = null();
HXDLIN( 258)						 ::Dynamic len = null();
HXDLIN( 258)						 ::lime::utils::ArrayBufferView this1;
HXDLIN( 258)						if (::hx::IsNotNull( elements )) {
HXLINE( 258)							this1 =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,elements,4);
            						}
            						else {
HXLINE( 258)							if (::hx::IsNotNull( array )) {
HXLINE( 258)								 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN( 258)								_this->byteOffset = 0;
HXDLIN( 258)								_this->length = array->get_length();
HXDLIN( 258)								_this->byteLength = (_this->length * _this->bytesPerElement);
HXDLIN( 258)								 ::haxe::io::Bytes this2 = ::haxe::io::Bytes_obj::alloc(_this->byteLength);
HXDLIN( 258)								_this->buffer = this2;
HXDLIN( 258)								_this->copyFromArray(array,null());
HXDLIN( 258)								this1 = _this;
            							}
            							else {
HXLINE( 258)								if (::hx::IsNotNull( view )) {
HXLINE( 258)									 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN( 258)									 ::haxe::io::Bytes srcData = view->buffer;
HXDLIN( 258)									int srcLength = view->length;
HXDLIN( 258)									int srcByteOffset = view->byteOffset;
HXDLIN( 258)									int srcElementSize = view->bytesPerElement;
HXDLIN( 258)									int elementSize = _this->bytesPerElement;
HXDLIN( 258)									if ((view->type == _this->type)) {
HXLINE( 258)										int srcLength = srcData->length;
HXDLIN( 258)										int cloneLength = (srcLength - srcByteOffset);
HXDLIN( 258)										 ::haxe::io::Bytes this1 = ::haxe::io::Bytes_obj::alloc(cloneLength);
HXDLIN( 258)										_this->buffer = this1;
HXDLIN( 258)										_this->buffer->blit(0,srcData,srcByteOffset,cloneLength);
            									}
            									else {
HXLINE( 258)										HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("unimplemented",09,2f,74,b4)));
            									}
HXDLIN( 258)									_this->byteLength = (_this->bytesPerElement * srcLength);
HXDLIN( 258)									_this->byteOffset = 0;
HXDLIN( 258)									_this->length = srcLength;
HXDLIN( 258)									this1 = _this;
            								}
            								else {
HXLINE( 258)									if (::hx::IsNotNull( buffer )) {
HXLINE( 258)										 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN( 258)										int in_byteOffset = 0;
HXDLIN( 258)										if ((in_byteOffset < 0)) {
HXLINE( 258)											HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            										}
HXDLIN( 258)										if ((::hx::Mod(in_byteOffset,_this->bytesPerElement) != 0)) {
HXLINE( 258)											HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            										}
HXDLIN( 258)										int bufferByteLength = buffer->length;
HXDLIN( 258)										int elementSize = _this->bytesPerElement;
HXDLIN( 258)										int newByteLength = bufferByteLength;
HXDLIN( 258)										if (::hx::IsNull( len )) {
HXLINE( 258)											newByteLength = (bufferByteLength - in_byteOffset);
HXDLIN( 258)											if ((::hx::Mod(bufferByteLength,_this->bytesPerElement) != 0)) {
HXLINE( 258)												HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            											}
HXDLIN( 258)											if ((newByteLength < 0)) {
HXLINE( 258)												HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            											}
            										}
            										else {
HXLINE( 258)											newByteLength = (( (int)(len) ) * _this->bytesPerElement);
HXDLIN( 258)											int newRange = (in_byteOffset + newByteLength);
HXDLIN( 258)											if ((newRange > bufferByteLength)) {
HXLINE( 258)												HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            											}
            										}
HXDLIN( 258)										_this->buffer = buffer;
HXDLIN( 258)										_this->byteOffset = in_byteOffset;
HXDLIN( 258)										_this->byteLength = newByteLength;
HXDLIN( 258)										_this->length = ::Std_obj::_hx_int((( (Float)(newByteLength) ) / ( (Float)(_this->bytesPerElement) )));
HXDLIN( 258)										this1 = _this;
            									}
            									else {
HXLINE( 258)										HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("Invalid constructor arguments for UInt8Array",6b,44,d5,85)));
            									}
            								}
            							}
            						}
HXDLIN( 258)						this->buffer =  ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,this1,width,height,null(),null());
HXLINE( 260)						bool _hx_tmp;
HXDLIN( 260)						if (::hx::IsNotNull( color )) {
HXLINE( 260)							_hx_tmp = ::hx::IsNotEq( color,0 );
            						}
            						else {
HXLINE( 260)							_hx_tmp = false;
            						}
HXDLIN( 260)						if (_hx_tmp) {
HXLINE( 262)							this->fillRect( ::lime::math::Rectangle_obj::__alloc( HX_CTX ,0,0,width,height),( (int)(color) ),null());
            						}
            					}
            					break;
            					case (int)2: {
            					}
            					break;
            					default:{
            					}
            				}
            			}
            		}
            		else {
HXLINE( 277)			this->_hx___fromImageBuffer(buffer);
            		}
            	}

Dynamic Image_obj::__CreateEmpty() { return new Image_obj; }

void *Image_obj::_hx_vtable = 0;

Dynamic Image_obj::__Create(::hx::DynamicArray inArgs)
{
	::hx::ObjectPtr< Image_obj > _hx_result = new Image_obj();
	_hx_result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4],inArgs[5],inArgs[6]);
	return _hx_result;
}

bool Image_obj::_hx_isInstanceOf(int inClassId) {
	return inClassId==(int)0x00000001 || inClassId==(int)0x33f052f7;
}

 ::lime::graphics::Image Image_obj::clone(){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_287_clone)
HXDLIN( 287)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 300)			 ::lime::graphics::ImageBuffer image = this->buffer->clone();
HXDLIN( 300)			 ::lime::graphics::Image image1 =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,image,this->offsetX,this->offsetY,this->width,this->height,null(),this->type);
HXLINE( 301)			image1->version = this->version;
HXLINE( 302)			return image1;
            		}
            		else {
HXLINE( 306)			return  ::lime::graphics::Image_obj::__alloc( HX_CTX ,null(),this->offsetX,this->offsetY,this->width,this->height,null(),this->type);
            		}
HXLINE( 287)		return null();
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,clone,return )

void Image_obj::colorTransform( ::lime::math::Rectangle rect, ::lime::utils::ArrayBufferView colorMatrix){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_316_colorTransform)
HXLINE( 317)		rect = this->_hx___clipRect(rect);
HXLINE( 318)		bool _hx_tmp;
HXDLIN( 318)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 318)			_hx_tmp = ::hx::IsNull( rect );
            		}
            		else {
HXLINE( 318)			_hx_tmp = true;
            		}
HXDLIN( 318)		if (_hx_tmp) {
HXLINE( 318)			return;
            		}
HXLINE( 320)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 323)				::lime::_internal::graphics::ImageCanvasUtil_obj::colorTransform(::hx::ObjectPtr<OBJ_>(this),rect,colorMatrix);
            			}
            			break;
            			case (int)1: {
HXLINE( 330)				::lime::_internal::graphics::ImageDataUtil_obj::colorTransform(::hx::ObjectPtr<OBJ_>(this),rect,colorMatrix);
            			}
            			break;
            			case (int)2: {
HXLINE( 333)				rect->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE( 334)				 ::Dynamic _hx_tmp =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("colorTransform",89,d7,3f,ad),::hx::paccDynamic));
HXDLIN( 334)				 ::Dynamic _hx_tmp1 = rect->_hx___toFlashRectangle();
HXDLIN( 334)				_hx_tmp(_hx_tmp1,::lime::math::_ColorMatrix::ColorMatrix_Impl__obj::_hx___toFlashColorTransform(colorMatrix));
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,colorTransform,(void))

void Image_obj::copyChannel( ::lime::graphics::Image sourceImage, ::lime::math::Rectangle sourceRect, ::lime::math::Vector2 destPoint, ::lime::graphics::ImageChannel sourceChannel, ::lime::graphics::ImageChannel destChannel){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_349_copyChannel)
HXLINE( 350)		sourceRect = this->_hx___clipRect(sourceRect);
HXLINE( 351)		bool _hx_tmp;
HXDLIN( 351)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 351)			_hx_tmp = ::hx::IsNull( sourceRect );
            		}
            		else {
HXLINE( 351)			_hx_tmp = true;
            		}
HXDLIN( 351)		if (_hx_tmp) {
HXLINE( 351)			return;
            		}
HXLINE( 352)		bool _hx_tmp1;
HXDLIN( 352)		if (::hx::IsPointerEq( destChannel,::lime::graphics::ImageChannel_obj::ALPHA_dyn() )) {
HXLINE( 352)			_hx_tmp1 = !(this->get_transparent());
            		}
            		else {
HXLINE( 352)			_hx_tmp1 = false;
            		}
HXDLIN( 352)		if (_hx_tmp1) {
HXLINE( 352)			return;
            		}
HXLINE( 353)		bool _hx_tmp2;
HXDLIN( 353)		if (!((sourceRect->width <= 0))) {
HXLINE( 353)			_hx_tmp2 = (sourceRect->height <= 0);
            		}
            		else {
HXLINE( 353)			_hx_tmp2 = true;
            		}
HXDLIN( 353)		if (_hx_tmp2) {
HXLINE( 353)			return;
            		}
HXLINE( 354)		if (((sourceRect->x + sourceRect->width) > sourceImage->width)) {
HXLINE( 354)			sourceRect->width = (( (Float)(sourceImage->width) ) - sourceRect->x);
            		}
HXLINE( 355)		if (((sourceRect->y + sourceRect->height) > sourceImage->height)) {
HXLINE( 355)			sourceRect->height = (( (Float)(sourceImage->height) ) - sourceRect->y);
            		}
HXLINE( 357)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 360)				::lime::_internal::graphics::ImageCanvasUtil_obj::copyChannel(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
            			}
            			break;
            			case (int)1: {
HXLINE( 368)				::lime::_internal::graphics::ImageDataUtil_obj::copyChannel(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
            			}
            			break;
            			case (int)2: {
HXLINE( 371)				int srcChannel;
HXDLIN( 371)				switch((int)(sourceChannel->_hx_getIndex())){
            					case (int)0: {
HXLINE( 371)						srcChannel = 1;
            					}
            					break;
            					case (int)1: {
HXLINE( 371)						srcChannel = 2;
            					}
            					break;
            					case (int)2: {
HXLINE( 371)						srcChannel = 4;
            					}
            					break;
            					case (int)3: {
HXLINE( 371)						srcChannel = 8;
            					}
            					break;
            				}
HXLINE( 379)				int dstChannel;
HXDLIN( 379)				switch((int)(destChannel->_hx_getIndex())){
            					case (int)0: {
HXLINE( 379)						dstChannel = 1;
            					}
            					break;
            					case (int)1: {
HXLINE( 379)						dstChannel = 2;
            					}
            					break;
            					case (int)2: {
HXLINE( 379)						dstChannel = 4;
            					}
            					break;
            					case (int)3: {
HXLINE( 379)						dstChannel = 8;
            					}
            					break;
            				}
HXLINE( 387)				sourceRect->offset(( (Float)(sourceImage->offsetX) ),( (Float)(sourceImage->offsetY) ));
HXLINE( 388)				destPoint->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE( 390)				 ::Dynamic _hx_tmp =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("copyChannel",8e,7d,e6,22),::hx::paccDynamic));
HXDLIN( 390)				 ::Dynamic _hx_tmp1 = sourceImage->buffer->get_src();
HXDLIN( 390)				 ::Dynamic _hx_tmp2 = sourceRect->_hx___toFlashRectangle();
HXDLIN( 390)				_hx_tmp(_hx_tmp1,_hx_tmp2,destPoint->_hx___toFlashPoint(),srcChannel,dstChannel);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC5(Image_obj,copyChannel,(void))

void Image_obj::copyPixels( ::lime::graphics::Image sourceImage, ::lime::math::Rectangle sourceRect, ::lime::math::Vector2 destPoint, ::lime::graphics::Image alphaImage, ::lime::math::Vector2 alphaPoint,::hx::Null< bool >  __o_mergeAlpha){
            		bool mergeAlpha = __o_mergeAlpha.Default(false);
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_408_copyPixels)
HXLINE( 409)		bool _hx_tmp;
HXDLIN( 409)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 409)			_hx_tmp = ::hx::IsNull( sourceImage );
            		}
            		else {
HXLINE( 409)			_hx_tmp = true;
            		}
HXDLIN( 409)		if (_hx_tmp) {
HXLINE( 409)			return;
            		}
HXLINE( 410)		bool _hx_tmp1;
HXDLIN( 410)		if (!((sourceRect->width <= 0))) {
HXLINE( 410)			_hx_tmp1 = (sourceRect->height <= 0);
            		}
            		else {
HXLINE( 410)			_hx_tmp1 = true;
            		}
HXDLIN( 410)		if (_hx_tmp1) {
HXLINE( 410)			return;
            		}
HXLINE( 411)		bool _hx_tmp2;
HXDLIN( 411)		if ((this->width > 0)) {
HXLINE( 411)			_hx_tmp2 = (this->height <= 0);
            		}
            		else {
HXLINE( 411)			_hx_tmp2 = true;
            		}
HXDLIN( 411)		if (_hx_tmp2) {
HXLINE( 411)			return;
            		}
HXLINE( 413)		if (((sourceRect->x + sourceRect->width) > sourceImage->width)) {
HXLINE( 413)			sourceRect->width = (( (Float)(sourceImage->width) ) - sourceRect->x);
            		}
HXLINE( 414)		if (((sourceRect->y + sourceRect->height) > sourceImage->height)) {
HXLINE( 414)			sourceRect->height = (( (Float)(sourceImage->height) ) - sourceRect->y);
            		}
HXLINE( 416)		if ((sourceRect->x < 0)) {
HXLINE( 418)			 ::lime::math::Rectangle sourceRect1 = sourceRect;
HXDLIN( 418)			sourceRect1->width = (sourceRect1->width + sourceRect->x);
HXLINE( 419)			sourceRect->x = ( (Float)(0) );
            		}
HXLINE( 422)		if ((sourceRect->y < 0)) {
HXLINE( 424)			 ::lime::math::Rectangle sourceRect1 = sourceRect;
HXDLIN( 424)			sourceRect1->height = (sourceRect1->height + sourceRect->y);
HXLINE( 425)			sourceRect->y = ( (Float)(0) );
            		}
HXLINE( 428)		if (((destPoint->x + sourceRect->width) > this->width)) {
HXLINE( 428)			sourceRect->width = (( (Float)(this->width) ) - destPoint->x);
            		}
HXLINE( 429)		if (((destPoint->y + sourceRect->height) > this->height)) {
HXLINE( 429)			sourceRect->height = (( (Float)(this->height) ) - destPoint->y);
            		}
HXLINE( 431)		if ((destPoint->x < 0)) {
HXLINE( 433)			 ::lime::math::Rectangle sourceRect1 = sourceRect;
HXDLIN( 433)			sourceRect1->width = (sourceRect1->width + destPoint->x);
HXLINE( 434)			 ::lime::math::Rectangle sourceRect2 = sourceRect;
HXDLIN( 434)			sourceRect2->x = (sourceRect2->x - destPoint->x);
HXLINE( 435)			destPoint->x = ( (Float)(0) );
            		}
HXLINE( 438)		if ((destPoint->y < 0)) {
HXLINE( 440)			 ::lime::math::Rectangle sourceRect1 = sourceRect;
HXDLIN( 440)			sourceRect1->height = (sourceRect1->height + destPoint->y);
HXLINE( 441)			 ::lime::math::Rectangle sourceRect2 = sourceRect;
HXDLIN( 441)			sourceRect2->y = (sourceRect2->y - destPoint->y);
HXLINE( 442)			destPoint->y = ( (Float)(0) );
            		}
HXLINE( 445)		bool _hx_tmp3;
HXDLIN( 445)		bool _hx_tmp4;
HXDLIN( 445)		if (::hx::IsInstanceEq( sourceImage,::hx::ObjectPtr<OBJ_>(this) )) {
HXLINE( 445)			Float destPoint1 = destPoint->x;
HXDLIN( 445)			_hx_tmp4 = (destPoint1 < sourceRect->get_right());
            		}
            		else {
HXLINE( 445)			_hx_tmp4 = false;
            		}
HXDLIN( 445)		if (_hx_tmp4) {
HXLINE( 445)			Float destPoint1 = destPoint->y;
HXDLIN( 445)			_hx_tmp3 = (destPoint1 < sourceRect->get_bottom());
            		}
            		else {
HXLINE( 445)			_hx_tmp3 = false;
            		}
HXDLIN( 445)		if (_hx_tmp3) {
HXLINE( 448)			sourceImage = this->clone();
            		}
HXLINE( 451)		bool _hx_tmp5;
HXDLIN( 451)		if (::hx::IsInstanceEq( alphaImage,sourceImage )) {
HXLINE( 451)			if (::hx::IsNotNull( alphaPoint )) {
HXLINE( 451)				if ((alphaPoint->x == 0)) {
HXLINE( 451)					_hx_tmp5 = (alphaPoint->y == 0);
            				}
            				else {
HXLINE( 451)					_hx_tmp5 = false;
            				}
            			}
            			else {
HXLINE( 451)				_hx_tmp5 = true;
            			}
            		}
            		else {
HXLINE( 451)			_hx_tmp5 = false;
            		}
HXDLIN( 451)		if (_hx_tmp5) {
HXLINE( 453)			alphaImage = null();
HXLINE( 454)			alphaPoint = null();
            		}
HXLINE( 457)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 460)				if (::hx::IsNotNull( alphaImage )) {
HXLINE( 462)					::lime::_internal::graphics::ImageCanvasUtil_obj::convertToData(::hx::ObjectPtr<OBJ_>(this),null());
HXLINE( 463)					::lime::_internal::graphics::ImageCanvasUtil_obj::convertToData(sourceImage,null());
HXLINE( 464)					if (::hx::IsNotNull( alphaImage )) {
HXLINE( 464)						::lime::_internal::graphics::ImageCanvasUtil_obj::convertToData(alphaImage,null());
            					}
HXLINE( 466)					::lime::_internal::graphics::ImageDataUtil_obj::copyPixels(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
            				}
            				else {
HXLINE( 470)					::lime::_internal::graphics::ImageCanvasUtil_obj::convertToCanvas(::hx::ObjectPtr<OBJ_>(this),null());
HXLINE( 471)					::lime::_internal::graphics::ImageCanvasUtil_obj::convertToCanvas(sourceImage,null());
HXLINE( 472)					::lime::_internal::graphics::ImageCanvasUtil_obj::copyPixels(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
            				}
            			}
            			break;
            			case (int)1: {
HXLINE( 482)				::lime::_internal::graphics::ImageDataUtil_obj::copyPixels(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
            			}
            			break;
            			case (int)2: {
HXLINE( 485)				sourceRect->offset(( (Float)(sourceImage->offsetX) ),( (Float)(sourceImage->offsetY) ));
HXLINE( 486)				destPoint->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE( 488)				bool _hx_tmp;
HXDLIN( 488)				if (::hx::IsNotNull( alphaImage )) {
HXLINE( 488)					_hx_tmp = ::hx::IsNotNull( alphaPoint );
            				}
            				else {
HXLINE( 488)					_hx_tmp = false;
            				}
HXDLIN( 488)				if (_hx_tmp) {
HXLINE( 490)					alphaPoint->offset(( (Float)(alphaImage->offsetX) ),( (Float)(alphaImage->offsetY) ));
            				}
HXLINE( 493)				 ::Dynamic _hx_tmp1 =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("copyPixels",c2,54,6e,42),::hx::paccDynamic));
HXDLIN( 493)				 ::Dynamic sourceImage1 = sourceImage->buffer->_hx___srcBitmapData;
HXDLIN( 493)				 ::Dynamic _hx_tmp2 = sourceRect->_hx___toFlashRectangle();
HXDLIN( 493)				 ::Dynamic _hx_tmp3 = destPoint->_hx___toFlashPoint();
HXLINE( 494)				 ::Dynamic _hx_tmp4;
HXDLIN( 494)				if (::hx::IsNotNull( alphaImage )) {
HXLINE( 494)					_hx_tmp4 = alphaImage->buffer->get_src();
            				}
            				else {
HXLINE( 494)					_hx_tmp4 = null();
            				}
HXDLIN( 494)				 ::Dynamic _hx_tmp5;
HXDLIN( 494)				if (::hx::IsNotNull( alphaPoint )) {
HXLINE( 494)					_hx_tmp5 = alphaPoint->_hx___toFlashPoint();
            				}
            				else {
HXLINE( 494)					_hx_tmp5 = null();
            				}
HXLINE( 493)				_hx_tmp1(sourceImage1,_hx_tmp2,_hx_tmp3,_hx_tmp4,_hx_tmp5,mergeAlpha);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC6(Image_obj,copyPixels,(void))

 ::haxe::io::Bytes Image_obj::encode( ::lime::graphics::ImageFileFormat format,::hx::Null< int >  __o_quality){
            		int quality = __o_quality.Default(90);
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_508_encode)
HXDLIN( 508)		if (::hx::IsNull( format )) {
HXLINE( 511)			return ::lime::_internal::format::PNG_obj::encode(::hx::ObjectPtr<OBJ_>(this));
            		}
            		else {
HXDLIN( 508)			switch((int)(format->_hx_getIndex())){
            				case (int)0: {
HXLINE( 517)					return ::lime::_internal::format::BMP_obj::encode(::hx::ObjectPtr<OBJ_>(this),null());
            				}
            				break;
            				case (int)1: {
HXLINE( 514)					return ::lime::_internal::format::JPEG_obj::encode(::hx::ObjectPtr<OBJ_>(this),quality);
            				}
            				break;
            				case (int)2: {
HXLINE( 511)					return ::lime::_internal::format::PNG_obj::encode(::hx::ObjectPtr<OBJ_>(this));
            				}
            				break;
            			}
            		}
HXLINE( 508)		return null();
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,encode,return )

void Image_obj::fillRect( ::lime::math::Rectangle rect,int color, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_532_fillRect)
HXLINE( 533)		rect = this->_hx___clipRect(rect);
HXLINE( 534)		bool _hx_tmp;
HXDLIN( 534)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 534)			_hx_tmp = ::hx::IsNull( rect );
            		}
            		else {
HXLINE( 534)			_hx_tmp = true;
            		}
HXDLIN( 534)		if (_hx_tmp) {
HXLINE( 534)			return;
            		}
HXLINE( 536)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 539)				::lime::_internal::graphics::ImageCanvasUtil_obj::fillRect(::hx::ObjectPtr<OBJ_>(this),rect,color,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 546)				if ((this->buffer->data->length == 0)) {
HXLINE( 546)					return;
            				}
HXLINE( 548)				::lime::_internal::graphics::ImageDataUtil_obj::fillRect(::hx::ObjectPtr<OBJ_>(this),rect,color,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 551)				rect->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE( 553)				int argb;
HXDLIN( 553)				if (::hx::IsNull( format )) {
HXLINE( 557)					int rgba = color;
HXDLIN( 557)					int this1 = 0;
HXDLIN( 557)					int argb1 = this1;
HXDLIN( 557)					argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE( 553)					argb = argb1;
            				}
            				else {
HXLINE( 553)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE( 553)						argb = color;
HXDLIN( 553)						goto _hx_goto_6;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE( 556)						int bgra = color;
HXDLIN( 556)						int this1 = 0;
HXDLIN( 556)						int argb1 = this1;
HXDLIN( 556)						argb1 = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE( 553)						argb = argb1;
HXLINE( 556)						goto _hx_goto_6;
            					}
            					/* default */{
HXLINE( 557)						int rgba = color;
HXDLIN( 557)						int this1 = 0;
HXDLIN( 557)						int argb1 = this1;
HXDLIN( 557)						argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE( 553)						argb = argb1;
            					}
            					_hx_goto_6:;
            				}
HXLINE( 560)				 ::Dynamic _hx_tmp =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("fillRect",47,45,b9,6c),::hx::paccDynamic));
HXDLIN( 560)				_hx_tmp(rect->_hx___toFlashRectangle(),argb);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC3(Image_obj,fillRect,(void))

void Image_obj::floodFill(int x,int y,int color, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_577_floodFill)
HXLINE( 578)		if (::hx::IsNull( this->buffer )) {
HXLINE( 578)			return;
            		}
HXLINE( 580)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 583)				::lime::_internal::graphics::ImageCanvasUtil_obj::floodFill(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 590)				::lime::_internal::graphics::ImageDataUtil_obj::floodFill(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 593)				int argb;
HXDLIN( 593)				if (::hx::IsNull( format )) {
HXLINE( 597)					int rgba = color;
HXDLIN( 597)					int this1 = 0;
HXDLIN( 597)					int argb1 = this1;
HXDLIN( 597)					argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE( 593)					argb = argb1;
            				}
            				else {
HXLINE( 593)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE( 593)						argb = color;
HXDLIN( 593)						goto _hx_goto_8;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE( 596)						int bgra = color;
HXDLIN( 596)						int this1 = 0;
HXDLIN( 596)						int argb1 = this1;
HXDLIN( 596)						argb1 = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE( 593)						argb = argb1;
HXLINE( 596)						goto _hx_goto_8;
            					}
            					/* default */{
HXLINE( 597)						int rgba = color;
HXDLIN( 597)						int this1 = 0;
HXDLIN( 597)						int argb1 = this1;
HXDLIN( 597)						argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE( 593)						argb = argb1;
            					}
            					_hx_goto_8:;
            				}
HXLINE( 600)				this->buffer->_hx___srcBitmapData->__Field(HX_("floodFill",61,83,8a,59),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetY),argb);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC4(Image_obj,floodFill,(void))

 ::lime::math::Rectangle Image_obj::getColorBoundsRect(int mask,int color,::hx::Null< bool >  __o_findColor, ::Dynamic format){
            		bool findColor = __o_findColor.Default(true);
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_736_getColorBoundsRect)
HXLINE( 737)		if (::hx::IsNull( this->buffer )) {
HXLINE( 737)			return null();
            		}
HXLINE( 739)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 746)				return ::lime::_internal::graphics::ImageDataUtil_obj::getColorBoundsRect(::hx::ObjectPtr<OBJ_>(this),mask,color,findColor,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 749)				return ::lime::_internal::graphics::ImageDataUtil_obj::getColorBoundsRect(::hx::ObjectPtr<OBJ_>(this),mask,color,findColor,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 752)				 ::Dynamic rect = this->buffer->_hx___srcBitmapData->__Field(HX_("getColorBoundsRect",86,ad,e8,80),::hx::paccDynamic)(mask,color,findColor);
HXLINE( 753)				return  ::lime::math::Rectangle_obj::__alloc( HX_CTX ,rect->__Field(HX_("x",78,00,00,00),::hx::paccDynamic),rect->__Field(HX_("y",79,00,00,00),::hx::paccDynamic),rect->__Field(HX_("width",06,b6,62,ca),::hx::paccDynamic),rect->__Field(HX_("height",e7,07,4c,02),::hx::paccDynamic));
            			}
            			break;
            			default:{
HXLINE( 756)				return null();
            			}
            		}
HXLINE( 739)		return null();
            	}


HX_DEFINE_DYNAMIC_FUNC4(Image_obj,getColorBoundsRect,return )

int Image_obj::getPixel(int x,int y, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_768_getPixel)
HXLINE( 769)		bool _hx_tmp;
HXDLIN( 769)		bool _hx_tmp1;
HXDLIN( 769)		bool _hx_tmp2;
HXDLIN( 769)		bool _hx_tmp3;
HXDLIN( 769)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 769)			_hx_tmp3 = (x < 0);
            		}
            		else {
HXLINE( 769)			_hx_tmp3 = true;
            		}
HXDLIN( 769)		if (!(_hx_tmp3)) {
HXLINE( 769)			_hx_tmp2 = (y < 0);
            		}
            		else {
HXLINE( 769)			_hx_tmp2 = true;
            		}
HXDLIN( 769)		if (!(_hx_tmp2)) {
HXLINE( 769)			_hx_tmp1 = (x >= this->width);
            		}
            		else {
HXLINE( 769)			_hx_tmp1 = true;
            		}
HXDLIN( 769)		if (!(_hx_tmp1)) {
HXLINE( 769)			_hx_tmp = (y >= this->height);
            		}
            		else {
HXLINE( 769)			_hx_tmp = true;
            		}
HXDLIN( 769)		if (_hx_tmp) {
HXLINE( 769)			return 0;
            		}
HXLINE( 771)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 774)				return ::lime::_internal::graphics::ImageCanvasUtil_obj::getPixel(::hx::ObjectPtr<OBJ_>(this),x,y,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 781)				return ::lime::_internal::graphics::ImageDataUtil_obj::getPixel(::hx::ObjectPtr<OBJ_>(this),x,y,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 784)				int color = ( (int)(this->buffer->_hx___srcBitmapData->__Field(HX_("getPixel",10,d6,7a,22),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetY))) );
HXLINE( 786)				if (::hx::IsNull( format )) {
HXLINE( 793)					int this1 = 0;
HXDLIN( 793)					int rgba = this1;
HXDLIN( 793)					rgba = ((((((::hx::UShr(color,16) & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((color & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 793)					int rgba1 = rgba;
HXLINE( 794)					return rgba1;
            				}
            				else {
HXLINE( 786)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE( 788)						return color;
HXDLIN( 788)						goto _hx_goto_11;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE( 790)						int this1 = 0;
HXDLIN( 790)						int bgra = this1;
HXDLIN( 790)						bgra = ((((((color & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((::hx::UShr(color,16) & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 790)						int bgra1 = bgra;
HXLINE( 791)						return bgra1;
HXLINE( 789)						goto _hx_goto_11;
            					}
            					/* default */{
HXLINE( 793)						int this1 = 0;
HXDLIN( 793)						int rgba = this1;
HXDLIN( 793)						rgba = ((((((::hx::UShr(color,16) & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((color & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 793)						int rgba1 = rgba;
HXLINE( 794)						return rgba1;
            					}
            					_hx_goto_11:;
            				}
            			}
            			break;
            			default:{
HXLINE( 798)				return 0;
            			}
            		}
HXLINE( 771)		return 0;
            	}


HX_DEFINE_DYNAMIC_FUNC3(Image_obj,getPixel,return )

int Image_obj::getPixel32(int x,int y, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_810_getPixel32)
HXLINE( 811)		bool _hx_tmp;
HXDLIN( 811)		bool _hx_tmp1;
HXDLIN( 811)		bool _hx_tmp2;
HXDLIN( 811)		bool _hx_tmp3;
HXDLIN( 811)		if (::hx::IsNotNull( this->buffer )) {
HXLINE( 811)			_hx_tmp3 = (x < 0);
            		}
            		else {
HXLINE( 811)			_hx_tmp3 = true;
            		}
HXDLIN( 811)		if (!(_hx_tmp3)) {
HXLINE( 811)			_hx_tmp2 = (y < 0);
            		}
            		else {
HXLINE( 811)			_hx_tmp2 = true;
            		}
HXDLIN( 811)		if (!(_hx_tmp2)) {
HXLINE( 811)			_hx_tmp1 = (x >= this->width);
            		}
            		else {
HXLINE( 811)			_hx_tmp1 = true;
            		}
HXDLIN( 811)		if (!(_hx_tmp1)) {
HXLINE( 811)			_hx_tmp = (y >= this->height);
            		}
            		else {
HXLINE( 811)			_hx_tmp = true;
            		}
HXDLIN( 811)		if (_hx_tmp) {
HXLINE( 811)			return 0;
            		}
HXLINE( 813)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 816)				return ::lime::_internal::graphics::ImageCanvasUtil_obj::getPixel32(::hx::ObjectPtr<OBJ_>(this),x,y,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 823)				return ::lime::_internal::graphics::ImageDataUtil_obj::getPixel32(::hx::ObjectPtr<OBJ_>(this),x,y,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 826)				int color = ( (int)(this->buffer->_hx___srcBitmapData->__Field(HX_("getPixel32",af,a6,68,d7),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetY))) );
HXLINE( 828)				if (::hx::IsNull( format )) {
HXLINE( 835)					int this1 = 0;
HXDLIN( 835)					int rgba = this1;
HXDLIN( 835)					rgba = ((((((::hx::UShr(color,16) & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((color & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 835)					int rgba1 = rgba;
HXLINE( 836)					return rgba1;
            				}
            				else {
HXLINE( 828)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE( 830)						return color;
HXDLIN( 830)						goto _hx_goto_13;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE( 832)						int this1 = 0;
HXDLIN( 832)						int bgra = this1;
HXDLIN( 832)						bgra = ((((((color & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((::hx::UShr(color,16) & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 832)						int bgra1 = bgra;
HXLINE( 833)						return bgra1;
HXLINE( 831)						goto _hx_goto_13;
            					}
            					/* default */{
HXLINE( 835)						int this1 = 0;
HXDLIN( 835)						int rgba = this1;
HXDLIN( 835)						rgba = ((((((::hx::UShr(color,16) & 255) & 255) << 24) | (((::hx::UShr(color,8) & 255) & 255) << 16)) | (((color & 255) & 255) << 8)) | ((::hx::UShr(color,24) & 255) & 255));
HXDLIN( 835)						int rgba1 = rgba;
HXLINE( 836)						return rgba1;
            					}
            					_hx_goto_13:;
            				}
            			}
            			break;
            			default:{
HXLINE( 840)				return 0;
            			}
            		}
HXLINE( 813)		return 0;
            	}


HX_DEFINE_DYNAMIC_FUNC3(Image_obj,getPixel32,return )

 ::haxe::io::Bytes Image_obj::getPixels( ::lime::math::Rectangle rect, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_851_getPixels)
HXLINE( 852)		if (::hx::IsNull( this->buffer )) {
HXLINE( 852)			return null();
            		}
HXLINE( 854)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE( 857)				return ::lime::_internal::graphics::ImageCanvasUtil_obj::getPixels(::hx::ObjectPtr<OBJ_>(this),rect,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE( 864)				return ::lime::_internal::graphics::ImageDataUtil_obj::getPixels(::hx::ObjectPtr<OBJ_>(this),rect,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE( 903)				return null();
            			}
            			break;
            			default:{
HXLINE( 907)				return null();
            			}
            		}
HXLINE( 854)		return null();
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,getPixels,return )

void Image_obj::merge( ::lime::graphics::Image sourceImage, ::lime::math::Rectangle sourceRect, ::lime::math::Vector2 destPoint,int redMultiplier,int greenMultiplier,int blueMultiplier,int alphaMultiplier){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1080_merge)
HXLINE(1081)		bool _hx_tmp;
HXDLIN(1081)		if (::hx::IsNotNull( this->buffer )) {
HXLINE(1081)			_hx_tmp = ::hx::IsNull( sourceImage );
            		}
            		else {
HXLINE(1081)			_hx_tmp = true;
            		}
HXDLIN(1081)		if (_hx_tmp) {
HXLINE(1081)			return;
            		}
HXLINE(1083)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1086)				::lime::_internal::graphics::ImageCanvasUtil_obj::convertToCanvas(::hx::ObjectPtr<OBJ_>(this),null());
HXLINE(1087)				::lime::_internal::graphics::ImageCanvasUtil_obj::merge(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
            			}
            			break;
            			case (int)1: {
HXLINE(1095)				::lime::_internal::graphics::ImageDataUtil_obj::merge(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
            			}
            			break;
            			case (int)2: {
HXLINE(1098)				sourceRect->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE(1099)				 ::Dynamic _hx_tmp =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("merge",b8,a2,c6,05),::hx::paccDynamic));
HXDLIN(1099)				 ::Dynamic sourceImage1 = sourceImage->buffer->_hx___srcBitmapData;
HXDLIN(1099)				 ::Dynamic _hx_tmp1 = sourceRect->_hx___toFlashRectangle();
HXDLIN(1099)				_hx_tmp(sourceImage1,_hx_tmp1,destPoint->_hx___toFlashPoint(),redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
            			}
            			break;
            			default:{
HXLINE(1103)				return;
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC7(Image_obj,merge,(void))

void Image_obj::resize(int newWidth,int newHeight){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1114_resize)
HXLINE(1115)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1118)				::lime::_internal::graphics::ImageCanvasUtil_obj::resize(::hx::ObjectPtr<OBJ_>(this),newWidth,newHeight);
            			}
            			break;
            			case (int)1: {
HXLINE(1121)				::lime::_internal::graphics::ImageDataUtil_obj::resize(::hx::ObjectPtr<OBJ_>(this),newWidth,newHeight);
            			}
            			break;
            			case (int)2: {
            			}
            			break;
            			default:{
            			}
            		}
HXLINE(1135)		this->buffer->width = newWidth;
HXLINE(1136)		this->buffer->height = newHeight;
HXLINE(1138)		this->offsetX = 0;
HXLINE(1139)		this->offsetY = 0;
HXLINE(1140)		this->width = newWidth;
HXLINE(1141)		this->height = newHeight;
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,resize,(void))

void Image_obj::scroll(int x,int y){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1154_scroll)
HXLINE(1155)		if (::hx::IsNull( this->buffer )) {
HXLINE(1155)			return;
            		}
HXLINE(1157)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1160)				::lime::_internal::graphics::ImageCanvasUtil_obj::scroll(::hx::ObjectPtr<OBJ_>(this),x,y);
            			}
            			break;
            			case (int)1: {
HXLINE(1163)				 ::lime::math::Rectangle _hx_tmp = this->get_rect();
HXDLIN(1163)				this->copyPixels(::hx::ObjectPtr<OBJ_>(this),_hx_tmp, ::lime::math::Vector2_obj::__alloc( HX_CTX ,x,y),null(),null(),null());
            			}
            			break;
            			case (int)2: {
HXLINE(1166)				this->buffer->_hx___srcBitmapData->__Field(HX_("scroll",0d,d8,64,47),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetX));
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,scroll,(void))

void Image_obj::setPixel(int x,int y,int color, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1180_setPixel)
HXLINE(1181)		bool _hx_tmp;
HXDLIN(1181)		bool _hx_tmp1;
HXDLIN(1181)		bool _hx_tmp2;
HXDLIN(1181)		bool _hx_tmp3;
HXDLIN(1181)		if (::hx::IsNotNull( this->buffer )) {
HXLINE(1181)			_hx_tmp3 = (x < 0);
            		}
            		else {
HXLINE(1181)			_hx_tmp3 = true;
            		}
HXDLIN(1181)		if (!(_hx_tmp3)) {
HXLINE(1181)			_hx_tmp2 = (y < 0);
            		}
            		else {
HXLINE(1181)			_hx_tmp2 = true;
            		}
HXDLIN(1181)		if (!(_hx_tmp2)) {
HXLINE(1181)			_hx_tmp1 = (x >= this->width);
            		}
            		else {
HXLINE(1181)			_hx_tmp1 = true;
            		}
HXDLIN(1181)		if (!(_hx_tmp1)) {
HXLINE(1181)			_hx_tmp = (y >= this->height);
            		}
            		else {
HXLINE(1181)			_hx_tmp = true;
            		}
HXDLIN(1181)		if (_hx_tmp) {
HXLINE(1181)			return;
            		}
HXLINE(1183)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1186)				::lime::_internal::graphics::ImageCanvasUtil_obj::setPixel(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE(1193)				::lime::_internal::graphics::ImageDataUtil_obj::setPixel(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE(1196)				int argb;
HXDLIN(1196)				if (::hx::IsNull( format )) {
HXLINE(1200)					int rgba = color;
HXDLIN(1200)					int this1 = 0;
HXDLIN(1200)					int argb1 = this1;
HXDLIN(1200)					argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1196)					argb = argb1;
            				}
            				else {
HXLINE(1196)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE(1196)						argb = color;
HXDLIN(1196)						goto _hx_goto_19;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE(1199)						int bgra = color;
HXDLIN(1199)						int this1 = 0;
HXDLIN(1199)						int argb1 = this1;
HXDLIN(1199)						argb1 = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE(1196)						argb = argb1;
HXLINE(1199)						goto _hx_goto_19;
            					}
            					/* default */{
HXLINE(1200)						int rgba = color;
HXDLIN(1200)						int this1 = 0;
HXDLIN(1200)						int argb1 = this1;
HXDLIN(1200)						argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1196)						argb = argb1;
            					}
            					_hx_goto_19:;
            				}
HXLINE(1203)				this->buffer->_hx___srcBitmapData->__Field(HX_("setPixel",84,2f,d8,d0),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetX),argb);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC4(Image_obj,setPixel,(void))

void Image_obj::setPixel32(int x,int y,int color, ::Dynamic format){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1217_setPixel32)
HXLINE(1218)		bool _hx_tmp;
HXDLIN(1218)		bool _hx_tmp1;
HXDLIN(1218)		bool _hx_tmp2;
HXDLIN(1218)		bool _hx_tmp3;
HXDLIN(1218)		if (::hx::IsNotNull( this->buffer )) {
HXLINE(1218)			_hx_tmp3 = (x < 0);
            		}
            		else {
HXLINE(1218)			_hx_tmp3 = true;
            		}
HXDLIN(1218)		if (!(_hx_tmp3)) {
HXLINE(1218)			_hx_tmp2 = (y < 0);
            		}
            		else {
HXLINE(1218)			_hx_tmp2 = true;
            		}
HXDLIN(1218)		if (!(_hx_tmp2)) {
HXLINE(1218)			_hx_tmp1 = (x >= this->width);
            		}
            		else {
HXLINE(1218)			_hx_tmp1 = true;
            		}
HXDLIN(1218)		if (!(_hx_tmp1)) {
HXLINE(1218)			_hx_tmp = (y >= this->height);
            		}
            		else {
HXLINE(1218)			_hx_tmp = true;
            		}
HXDLIN(1218)		if (_hx_tmp) {
HXLINE(1218)			return;
            		}
HXLINE(1220)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1223)				::lime::_internal::graphics::ImageCanvasUtil_obj::setPixel32(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)1: {
HXLINE(1230)				::lime::_internal::graphics::ImageDataUtil_obj::setPixel32(::hx::ObjectPtr<OBJ_>(this),x,y,color,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE(1233)				int argb;
HXDLIN(1233)				if (::hx::IsNull( format )) {
HXLINE(1237)					int rgba = color;
HXDLIN(1237)					int this1 = 0;
HXDLIN(1237)					int argb1 = this1;
HXDLIN(1237)					argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1233)					argb = argb1;
            				}
            				else {
HXLINE(1233)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE(1233)						argb = color;
HXDLIN(1233)						goto _hx_goto_21;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE(1236)						int bgra = color;
HXDLIN(1236)						int this1 = 0;
HXDLIN(1236)						int argb1 = this1;
HXDLIN(1236)						argb1 = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE(1233)						argb = argb1;
HXLINE(1236)						goto _hx_goto_21;
            					}
            					/* default */{
HXLINE(1237)						int rgba = color;
HXDLIN(1237)						int this1 = 0;
HXDLIN(1237)						int argb1 = this1;
HXDLIN(1237)						argb1 = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1233)						argb = argb1;
            					}
            					_hx_goto_21:;
            				}
HXLINE(1240)				this->buffer->_hx___srcBitmapData->__Field(HX_("setPixel32",23,45,e6,da),::hx::paccDynamic)((x + this->offsetX),(y + this->offsetY),argb);
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC4(Image_obj,setPixel32,(void))

void Image_obj::setPixels( ::lime::math::Rectangle rect, ::lime::utils::BytePointerData bytePointer, ::Dynamic format, ::lime::_hx_system::Endian endian){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1254_setPixels)
HXLINE(1255)		rect = this->_hx___clipRect(rect);
HXLINE(1256)		bool _hx_tmp;
HXDLIN(1256)		if (::hx::IsNotNull( this->buffer )) {
HXLINE(1256)			_hx_tmp = ::hx::IsNull( rect );
            		}
            		else {
HXLINE(1256)			_hx_tmp = true;
            		}
HXDLIN(1256)		if (_hx_tmp) {
HXLINE(1256)			return;
            		}
HXLINE(1257)		if (::hx::IsNull( endian )) {
HXLINE(1257)			endian = ::lime::_hx_system::Endian_obj::_hx_BIG_ENDIAN_dyn();
            		}
HXLINE(1259)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: {
HXLINE(1262)				::lime::_internal::graphics::ImageCanvasUtil_obj::setPixels(::hx::ObjectPtr<OBJ_>(this),rect,bytePointer,( (int)(format) ),endian);
            			}
            			break;
            			case (int)1: {
HXLINE(1269)				::lime::_internal::graphics::ImageDataUtil_obj::setPixels(::hx::ObjectPtr<OBJ_>(this),rect,bytePointer,( (int)(format) ),endian);
            			}
            			break;
            			case (int)2: {
            			}
            			break;
            			default:{
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC4(Image_obj,setPixels,(void))

int Image_obj::threshold( ::lime::graphics::Image sourceImage, ::lime::math::Rectangle sourceRect, ::lime::math::Vector2 destPoint,::String operation,int threshold,::hx::Null< int >  __o_color,::hx::Null< int >  __o_mask,::hx::Null< bool >  __o_copySource, ::Dynamic format){
            		int color = __o_color.Default(0);
            		int mask = __o_mask.Default(-1);
            		bool copySource = __o_copySource.Default(false);
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1361_threshold)
HXLINE(1362)		bool _hx_tmp;
HXDLIN(1362)		bool _hx_tmp1;
HXDLIN(1362)		if (::hx::IsNotNull( this->buffer )) {
HXLINE(1362)			_hx_tmp1 = ::hx::IsNull( sourceImage );
            		}
            		else {
HXLINE(1362)			_hx_tmp1 = true;
            		}
HXDLIN(1362)		if (!(_hx_tmp1)) {
HXLINE(1362)			_hx_tmp = ::hx::IsNull( sourceRect );
            		}
            		else {
HXLINE(1362)			_hx_tmp = true;
            		}
HXDLIN(1362)		if (_hx_tmp) {
HXLINE(1362)			return 0;
            		}
HXLINE(1364)		switch((int)(this->type->_hx_getIndex())){
            			case (int)0: case (int)1: {
HXLINE(1372)				return ::lime::_internal::graphics::ImageDataUtil_obj::threshold(::hx::ObjectPtr<OBJ_>(this),sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,( (int)(format) ));
            			}
            			break;
            			case (int)2: {
HXLINE(1375)				int _color;
HXDLIN(1375)				if (::hx::IsNull( format )) {
HXLINE(1379)					int rgba = color;
HXDLIN(1379)					int this1 = 0;
HXDLIN(1379)					int argb = this1;
HXDLIN(1379)					argb = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1375)					_color = argb;
            				}
            				else {
HXLINE(1375)					 ::Dynamic _hx_switch_0 = format;
            					if (  (_hx_switch_0==1) ){
HXLINE(1375)						_color = color;
HXDLIN(1375)						goto _hx_goto_24;
            					}
            					if (  (_hx_switch_0==2) ){
HXLINE(1378)						int bgra = color;
HXDLIN(1378)						int this1 = 0;
HXDLIN(1378)						int argb = this1;
HXDLIN(1378)						argb = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE(1375)						_color = argb;
HXLINE(1378)						goto _hx_goto_24;
            					}
            					/* default */{
HXLINE(1379)						int rgba = color;
HXDLIN(1379)						int this1 = 0;
HXDLIN(1379)						int argb = this1;
HXDLIN(1379)						argb = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1375)						_color = argb;
            					}
            					_hx_goto_24:;
            				}
HXLINE(1382)				int _mask;
HXDLIN(1382)				if (::hx::IsNull( format )) {
HXLINE(1386)					int rgba = mask;
HXDLIN(1386)					int this1 = 0;
HXDLIN(1386)					int argb = this1;
HXDLIN(1386)					argb = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1382)					_mask = argb;
            				}
            				else {
HXLINE(1382)					 ::Dynamic _hx_switch_1 = format;
            					if (  (_hx_switch_1==1) ){
HXLINE(1382)						_mask = mask;
HXDLIN(1382)						goto _hx_goto_25;
            					}
            					if (  (_hx_switch_1==2) ){
HXLINE(1385)						int bgra = mask;
HXDLIN(1385)						int this1 = 0;
HXDLIN(1385)						int argb = this1;
HXDLIN(1385)						argb = ((((((bgra & 255) & 255) << 24) | (((::hx::UShr(bgra,8) & 255) & 255) << 16)) | (((::hx::UShr(bgra,16) & 255) & 255) << 8)) | ((::hx::UShr(bgra,24) & 255) & 255));
HXLINE(1382)						_mask = argb;
HXLINE(1385)						goto _hx_goto_25;
            					}
            					/* default */{
HXLINE(1386)						int rgba = mask;
HXDLIN(1386)						int this1 = 0;
HXDLIN(1386)						int argb = this1;
HXDLIN(1386)						argb = ((((((rgba & 255) & 255) << 24) | (((::hx::UShr(rgba,24) & 255) & 255) << 16)) | (((::hx::UShr(rgba,16) & 255) & 255) << 8)) | ((::hx::UShr(rgba,8) & 255) & 255));
HXLINE(1382)						_mask = argb;
            					}
            					_hx_goto_25:;
            				}
HXLINE(1389)				sourceRect->offset(( (Float)(sourceImage->offsetX) ),( (Float)(sourceImage->offsetY) ));
HXLINE(1390)				destPoint->offset(( (Float)(this->offsetX) ),( (Float)(this->offsetY) ));
HXLINE(1392)				 ::Dynamic _hx_tmp =  ::Dynamic(this->buffer->_hx___srcBitmapData->__Field(HX_("threshold",ab,c3,a3,34),::hx::paccDynamic));
HXDLIN(1392)				 ::Dynamic _hx_tmp1 = sourceImage->buffer->get_src();
HXDLIN(1392)				 ::Dynamic _hx_tmp2 = sourceRect->_hx___toFlashRectangle();
HXDLIN(1392)				return ( (int)(_hx_tmp(_hx_tmp1,_hx_tmp2,destPoint->_hx___toFlashPoint(),operation,threshold,_color,_mask,copySource)) );
            			}
            			break;
            			default:{
            			}
            		}
HXLINE(1398)		return 0;
            	}


HX_DEFINE_DYNAMIC_FUNC9(Image_obj,threshold,return )

 ::lime::math::Rectangle Image_obj::_hx___clipRect( ::lime::math::Rectangle r){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1402___clipRect)
HXLINE(1403)		if (::hx::IsNull( r )) {
HXLINE(1403)			return null();
            		}
HXLINE(1405)		if ((r->x < 0)) {
HXLINE(1407)			 ::lime::math::Rectangle r1 = r;
HXDLIN(1407)			r1->width = (r1->width - -(r->x));
HXLINE(1408)			r->x = ( (Float)(0) );
HXLINE(1410)			if (((r->x + r->width) <= 0)) {
HXLINE(1410)				return null();
            			}
            		}
HXLINE(1413)		if ((r->y < 0)) {
HXLINE(1415)			 ::lime::math::Rectangle r1 = r;
HXDLIN(1415)			r1->height = (r1->height - -(r->y));
HXLINE(1416)			r->y = ( (Float)(0) );
HXLINE(1418)			if (((r->y + r->height) <= 0)) {
HXLINE(1418)				return null();
            			}
            		}
HXLINE(1421)		if (((r->x + r->width) >= this->width)) {
HXLINE(1423)			 ::lime::math::Rectangle r1 = r;
HXDLIN(1423)			r1->width = (r1->width - ((r->x + r->width) - ( (Float)(this->width) )));
HXLINE(1425)			if ((r->width <= 0)) {
HXLINE(1425)				return null();
            			}
            		}
HXLINE(1428)		if (((r->y + r->height) >= this->height)) {
HXLINE(1430)			 ::lime::math::Rectangle r1 = r;
HXDLIN(1430)			r1->height = (r1->height - ((r->y + r->height) - ( (Float)(this->height) )));
HXLINE(1432)			if ((r->height <= 0)) {
HXLINE(1432)				return null();
            			}
            		}
HXLINE(1435)		return r;
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___clipRect,return )

void Image_obj::_hx___fromBase64(::String base64,::String type, ::Dynamic onload){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1462___fromBase64)
HXDLIN(1462)		if (::hx::IsNotNull( base64 )) {
HXLINE(1464)			this->_hx___fromBytes(::lime::_internal::format::Base64_obj::decode(base64),null());
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC3(Image_obj,_hx___fromBase64,(void))

bool Image_obj::_hx___fromBytes( ::haxe::io::Bytes bytes, ::Dynamic onload){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1470___fromBytes)
HXLINE(1495)		 ::lime::graphics::ImageBuffer imageBuffer = null();
HXLINE(1498)		::cpp::Function<  ::hx::Object *  ( ::hx::Object *, ::hx::Object *) > imageBuffer1 = ::lime::_internal::backend::native::NativeCFFI_obj::lime_image_load_bytes;
HXDLIN(1498)		 ::Dynamic elements = null();
HXDLIN(1498)		 ::haxe::io::Bytes buffer = ::haxe::io::Bytes_obj::alloc(0);
HXDLIN(1498)		::cpp::VirtualArray array = null();
HXDLIN(1498)		 ::lime::utils::ArrayBufferView view = null();
HXDLIN(1498)		 ::Dynamic len = null();
HXDLIN(1498)		 ::lime::utils::ArrayBufferView this1;
HXDLIN(1498)		if (::hx::IsNotNull( elements )) {
HXLINE(1498)			this1 =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,elements,4);
            		}
            		else {
HXLINE(1498)			if (::hx::IsNotNull( array )) {
HXLINE(1498)				 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1498)				_this->byteOffset = 0;
HXDLIN(1498)				_this->length = array->get_length();
HXDLIN(1498)				_this->byteLength = (_this->length * _this->bytesPerElement);
HXDLIN(1498)				 ::haxe::io::Bytes this2 = ::haxe::io::Bytes_obj::alloc(_this->byteLength);
HXDLIN(1498)				_this->buffer = this2;
HXDLIN(1498)				_this->copyFromArray(array,null());
HXDLIN(1498)				this1 = _this;
            			}
            			else {
HXLINE(1498)				if (::hx::IsNotNull( view )) {
HXLINE(1498)					 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1498)					 ::haxe::io::Bytes srcData = view->buffer;
HXDLIN(1498)					int srcLength = view->length;
HXDLIN(1498)					int srcByteOffset = view->byteOffset;
HXDLIN(1498)					int srcElementSize = view->bytesPerElement;
HXDLIN(1498)					int elementSize = _this->bytesPerElement;
HXDLIN(1498)					if ((view->type == _this->type)) {
HXLINE(1498)						int srcLength = srcData->length;
HXDLIN(1498)						int cloneLength = (srcLength - srcByteOffset);
HXDLIN(1498)						 ::haxe::io::Bytes this1 = ::haxe::io::Bytes_obj::alloc(cloneLength);
HXDLIN(1498)						_this->buffer = this1;
HXDLIN(1498)						_this->buffer->blit(0,srcData,srcByteOffset,cloneLength);
            					}
            					else {
HXLINE(1498)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("unimplemented",09,2f,74,b4)));
            					}
HXDLIN(1498)					_this->byteLength = (_this->bytesPerElement * srcLength);
HXDLIN(1498)					_this->byteOffset = 0;
HXDLIN(1498)					_this->length = srcLength;
HXDLIN(1498)					this1 = _this;
            				}
            				else {
HXLINE(1498)					if (::hx::IsNotNull( buffer )) {
HXLINE(1498)						 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1498)						int in_byteOffset = 0;
HXDLIN(1498)						if ((in_byteOffset < 0)) {
HXLINE(1498)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(1498)						if ((::hx::Mod(in_byteOffset,_this->bytesPerElement) != 0)) {
HXLINE(1498)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            						}
HXDLIN(1498)						int bufferByteLength = buffer->length;
HXDLIN(1498)						int elementSize = _this->bytesPerElement;
HXDLIN(1498)						int newByteLength = bufferByteLength;
HXDLIN(1498)						if (::hx::IsNull( len )) {
HXLINE(1498)							newByteLength = (bufferByteLength - in_byteOffset);
HXDLIN(1498)							if ((::hx::Mod(bufferByteLength,_this->bytesPerElement) != 0)) {
HXLINE(1498)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
HXDLIN(1498)							if ((newByteLength < 0)) {
HXLINE(1498)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
            						else {
HXLINE(1498)							newByteLength = (( (int)(len) ) * _this->bytesPerElement);
HXDLIN(1498)							int newRange = (in_byteOffset + newByteLength);
HXDLIN(1498)							if ((newRange > bufferByteLength)) {
HXLINE(1498)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
            						}
HXDLIN(1498)						_this->buffer = buffer;
HXDLIN(1498)						_this->byteOffset = in_byteOffset;
HXDLIN(1498)						_this->byteLength = newByteLength;
HXDLIN(1498)						_this->length = ::Std_obj::_hx_int((( (Float)(newByteLength) ) / ( (Float)(_this->bytesPerElement) )));
HXDLIN(1498)						this1 = _this;
            					}
            					else {
HXLINE(1498)						HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("Invalid constructor arguments for UInt8Array",6b,44,d5,85)));
            					}
            				}
            			}
            		}
HXDLIN(1498)		imageBuffer = ( ( ::Dynamic)(imageBuffer1(::hx::DynamicPtr(bytes),::hx::DynamicPtr( ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,this1,null(),null(),null(),null())))) );
HXLINE(1508)		if (::hx::IsNotNull( imageBuffer )) {
HXLINE(1510)			this->_hx___fromImageBuffer(imageBuffer);
HXLINE(1512)			if (::hx::IsNotNull( onload )) {
HXLINE(1514)				onload(::hx::ObjectPtr<OBJ_>(this));
            			}
HXLINE(1517)			return true;
            		}
HXLINE(1523)		return false;
            	}


HX_DEFINE_DYNAMIC_FUNC2(Image_obj,_hx___fromBytes,return )

bool Image_obj::_hx___fromFile(::String path, ::Dynamic onload, ::Dynamic onerror){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1527___fromFile)
HXLINE(1612)		 ::lime::graphics::ImageBuffer buffer = null();
HXLINE(1617)		if (::lime::_hx_system::CFFI_obj::enabled) {
HXLINE(1620)			::cpp::Function<  ::hx::Object *  ( ::hx::Object *, ::hx::Object *) > buffer1 = ::lime::_internal::backend::native::NativeCFFI_obj::lime_image_load_file;
HXDLIN(1620)			 ::Dynamic elements = null();
HXDLIN(1620)			 ::haxe::io::Bytes buffer2 = ::haxe::io::Bytes_obj::alloc(0);
HXDLIN(1620)			::cpp::VirtualArray array = null();
HXDLIN(1620)			 ::lime::utils::ArrayBufferView view = null();
HXDLIN(1620)			 ::Dynamic len = null();
HXDLIN(1620)			 ::lime::utils::ArrayBufferView this1;
HXDLIN(1620)			if (::hx::IsNotNull( elements )) {
HXLINE(1620)				this1 =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,elements,4);
            			}
            			else {
HXLINE(1620)				if (::hx::IsNotNull( array )) {
HXLINE(1620)					 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1620)					_this->byteOffset = 0;
HXDLIN(1620)					_this->length = array->get_length();
HXDLIN(1620)					_this->byteLength = (_this->length * _this->bytesPerElement);
HXDLIN(1620)					 ::haxe::io::Bytes this2 = ::haxe::io::Bytes_obj::alloc(_this->byteLength);
HXDLIN(1620)					_this->buffer = this2;
HXDLIN(1620)					_this->copyFromArray(array,null());
HXDLIN(1620)					this1 = _this;
            				}
            				else {
HXLINE(1620)					if (::hx::IsNotNull( view )) {
HXLINE(1620)						 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1620)						 ::haxe::io::Bytes srcData = view->buffer;
HXDLIN(1620)						int srcLength = view->length;
HXDLIN(1620)						int srcByteOffset = view->byteOffset;
HXDLIN(1620)						int srcElementSize = view->bytesPerElement;
HXDLIN(1620)						int elementSize = _this->bytesPerElement;
HXDLIN(1620)						if ((view->type == _this->type)) {
HXLINE(1620)							int srcLength = srcData->length;
HXDLIN(1620)							int cloneLength = (srcLength - srcByteOffset);
HXDLIN(1620)							 ::haxe::io::Bytes this1 = ::haxe::io::Bytes_obj::alloc(cloneLength);
HXDLIN(1620)							_this->buffer = this1;
HXDLIN(1620)							_this->buffer->blit(0,srcData,srcByteOffset,cloneLength);
            						}
            						else {
HXLINE(1620)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("unimplemented",09,2f,74,b4)));
            						}
HXDLIN(1620)						_this->byteLength = (_this->bytesPerElement * srcLength);
HXDLIN(1620)						_this->byteOffset = 0;
HXDLIN(1620)						_this->length = srcLength;
HXDLIN(1620)						this1 = _this;
            					}
            					else {
HXLINE(1620)						if (::hx::IsNotNull( buffer2 )) {
HXLINE(1620)							 ::lime::utils::ArrayBufferView _this =  ::lime::utils::ArrayBufferView_obj::__alloc( HX_CTX ,0,4);
HXDLIN(1620)							int in_byteOffset = 0;
HXDLIN(1620)							if ((in_byteOffset < 0)) {
HXLINE(1620)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
HXDLIN(1620)							if ((::hx::Mod(in_byteOffset,_this->bytesPerElement) != 0)) {
HXLINE(1620)								HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            							}
HXDLIN(1620)							int bufferByteLength = buffer2->length;
HXDLIN(1620)							int elementSize = _this->bytesPerElement;
HXDLIN(1620)							int newByteLength = bufferByteLength;
HXDLIN(1620)							if (::hx::IsNull( len )) {
HXLINE(1620)								newByteLength = (bufferByteLength - in_byteOffset);
HXDLIN(1620)								if ((::hx::Mod(bufferByteLength,_this->bytesPerElement) != 0)) {
HXLINE(1620)									HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            								}
HXDLIN(1620)								if ((newByteLength < 0)) {
HXLINE(1620)									HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            								}
            							}
            							else {
HXLINE(1620)								newByteLength = (( (int)(len) ) * _this->bytesPerElement);
HXDLIN(1620)								int newRange = (in_byteOffset + newByteLength);
HXDLIN(1620)								if ((newRange > bufferByteLength)) {
HXLINE(1620)									HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(::lime::utils::TAError_obj::RangeError_dyn()));
            								}
            							}
HXDLIN(1620)							_this->buffer = buffer2;
HXDLIN(1620)							_this->byteOffset = in_byteOffset;
HXDLIN(1620)							_this->byteLength = newByteLength;
HXDLIN(1620)							_this->length = ::Std_obj::_hx_int((( (Float)(newByteLength) ) / ( (Float)(_this->bytesPerElement) )));
HXDLIN(1620)							this1 = _this;
            						}
            						else {
HXLINE(1620)							HX_STACK_DO_THROW(::haxe::Exception_obj::thrown(HX_("Invalid constructor arguments for UInt8Array",6b,44,d5,85)));
            						}
            					}
            				}
            			}
HXDLIN(1620)			buffer = ( ( ::Dynamic)(buffer1(::hx::DynamicPtr(path),::hx::DynamicPtr( ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,this1,null(),null(),null(),null())))) );
            		}
HXLINE(1666)		if (::hx::IsNotNull( buffer )) {
HXLINE(1668)			this->_hx___fromImageBuffer(buffer);
HXLINE(1670)			if (::hx::IsNotNull( onload )) {
HXLINE(1672)				onload(::hx::ObjectPtr<OBJ_>(this));
            			}
HXLINE(1675)			return true;
            		}
HXLINE(1681)		return false;
            	}


HX_DEFINE_DYNAMIC_FUNC3(Image_obj,_hx___fromFile,return )

void Image_obj::_hx___fromImageBuffer( ::lime::graphics::ImageBuffer buffer){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1685___fromImageBuffer)
HXLINE(1686)		this->buffer = buffer;
HXLINE(1688)		if (::hx::IsNotNull( buffer )) {
HXLINE(1690)			if ((this->width == -1)) {
HXLINE(1692)				this->width = buffer->width;
            			}
HXLINE(1695)			if ((this->height == -1)) {
HXLINE(1697)				this->height = buffer->height;
            			}
            		}
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___fromImageBuffer,(void))

 ::lime::utils::ArrayBufferView Image_obj::get_data(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1737_get_data)
HXLINE(1738)		bool _hx_tmp;
HXDLIN(1738)		bool _hx_tmp1;
HXDLIN(1738)		if (::hx::IsNull( this->buffer->data )) {
HXLINE(1738)			_hx_tmp1 = (this->buffer->width > 0);
            		}
            		else {
HXLINE(1738)			_hx_tmp1 = false;
            		}
HXDLIN(1738)		if (_hx_tmp1) {
HXLINE(1738)			_hx_tmp = (this->buffer->height > 0);
            		}
            		else {
HXLINE(1738)			_hx_tmp = false;
            		}
HXLINE(1748)		return this->buffer->data;
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_data,return )

 ::lime::utils::ArrayBufferView Image_obj::set_data( ::lime::utils::ArrayBufferView value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1753_set_data)
HXDLIN(1753)		return (this->buffer->data = value);
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_data,return )

int Image_obj::get_format(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1758_get_format)
HXDLIN(1758)		return this->buffer->format;
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_format,return )

int Image_obj::set_format(int value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1762_set_format)
HXLINE(1763)		if ((this->buffer->format != value)) {
HXLINE(1765)			if ((this->type->_hx_getIndex() == 1)) {
HXLINE(1768)				::lime::_internal::graphics::ImageDataUtil_obj::setFormat(::hx::ObjectPtr<OBJ_>(this),value);
            			}
            		}
HXLINE(1774)		return (this->buffer->format = value);
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_format,return )

bool Image_obj::get_powerOfTwo(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1779_get_powerOfTwo)
HXDLIN(1779)		bool _hx_tmp;
HXDLIN(1779)		if ((this->buffer->width != 0)) {
HXDLIN(1779)			_hx_tmp = ((this->buffer->width & (~(this->buffer->width) + 1)) == this->buffer->width);
            		}
            		else {
HXDLIN(1779)			_hx_tmp = false;
            		}
HXDLIN(1779)		if (_hx_tmp) {
HXLINE(1781)			if ((this->buffer->height != 0)) {
HXLINE(1781)				return ((this->buffer->height & (~(this->buffer->height) + 1)) == this->buffer->height);
            			}
            			else {
HXLINE(1781)				return false;
            			}
            		}
            		else {
HXDLIN(1779)			return false;
            		}
HXDLIN(1779)		return false;
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_powerOfTwo,return )

bool Image_obj::set_powerOfTwo(bool value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1785_set_powerOfTwo)
HXLINE(1786)		if ((value != this->get_powerOfTwo())) {
HXLINE(1788)			int newWidth = 1;
HXLINE(1789)			int newHeight = 1;
HXLINE(1791)			while((newWidth < this->buffer->width)){
HXLINE(1793)				newWidth = (newWidth << 1);
            			}
HXLINE(1796)			while((newHeight < this->buffer->height)){
HXLINE(1798)				newHeight = (newHeight << 1);
            			}
HXLINE(1801)			bool _hx_tmp;
HXDLIN(1801)			if ((newWidth == this->buffer->width)) {
HXLINE(1801)				_hx_tmp = (newHeight == this->buffer->height);
            			}
            			else {
HXLINE(1801)				_hx_tmp = false;
            			}
HXDLIN(1801)			if (_hx_tmp) {
HXLINE(1803)				return value;
            			}
HXLINE(1806)			switch((int)(this->type->_hx_getIndex())){
            				case (int)0: {
HXLINE(1812)					::lime::_internal::graphics::ImageDataUtil_obj::resizeBuffer(::hx::ObjectPtr<OBJ_>(this),newWidth,newHeight);
            				}
            				break;
            				case (int)1: {
HXLINE(1815)					::lime::_internal::graphics::ImageDataUtil_obj::resizeBuffer(::hx::ObjectPtr<OBJ_>(this),newWidth,newHeight);
            				}
            				break;
            				case (int)2: {
            				}
            				break;
            				default:{
            				}
            			}
            		}
HXLINE(1831)		return value;
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_powerOfTwo,return )

bool Image_obj::get_premultiplied(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1836_get_premultiplied)
HXDLIN(1836)		return this->buffer->premultiplied;
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_premultiplied,return )

bool Image_obj::set_premultiplied(bool value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1840_set_premultiplied)
HXLINE(1841)		bool _hx_tmp;
HXDLIN(1841)		if (value) {
HXLINE(1841)			_hx_tmp = !(this->buffer->premultiplied);
            		}
            		else {
HXLINE(1841)			_hx_tmp = false;
            		}
HXDLIN(1841)		if (_hx_tmp) {
HXLINE(1843)			switch((int)(this->type->_hx_getIndex())){
            				case (int)0: case (int)1: {
HXLINE(1850)					::lime::_internal::graphics::ImageDataUtil_obj::multiplyAlpha(::hx::ObjectPtr<OBJ_>(this));
            				}
            				break;
            				default:{
            				}
            			}
            		}
            		else {
HXLINE(1856)			bool _hx_tmp;
HXDLIN(1856)			if (!(value)) {
HXLINE(1856)				_hx_tmp = this->buffer->premultiplied;
            			}
            			else {
HXLINE(1856)				_hx_tmp = false;
            			}
HXDLIN(1856)			if (_hx_tmp) {
HXLINE(1858)				if ((this->type->_hx_getIndex() == 1)) {
HXLINE(1865)					::lime::_internal::graphics::ImageDataUtil_obj::unmultiplyAlpha(::hx::ObjectPtr<OBJ_>(this));
            				}
            			}
            		}
HXLINE(1872)		return value;
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_premultiplied,return )

 ::lime::math::Rectangle Image_obj::get_rect(){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1877_get_rect)
HXDLIN(1877)		return  ::lime::math::Rectangle_obj::__alloc( HX_CTX ,0,0,this->width,this->height);
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_rect,return )

 ::Dynamic Image_obj::get_src(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1889_get_src)
HXDLIN(1889)		return this->buffer->get_src();
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_src,return )

 ::Dynamic Image_obj::set_src( ::Dynamic value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1894_set_src)
HXDLIN(1894)		return this->buffer->set_src(value);
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_src,return )

bool Image_obj::get_transparent(){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1898_get_transparent)
HXLINE(1899)		if (::hx::IsNull( this->buffer )) {
HXLINE(1899)			return false;
            		}
HXLINE(1900)		return this->buffer->transparent;
            	}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,get_transparent,return )

bool Image_obj::set_transparent(bool value){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1904_set_transparent)
HXLINE(1906)		if (::hx::IsNull( this->buffer )) {
HXLINE(1906)			return false;
            		}
HXLINE(1907)		return (this->buffer->transparent = value);
            	}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,set_transparent,return )

 ::lime::graphics::Image Image_obj::fromBase64(::String base64,::String type){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_613_fromBase64)
HXLINE( 614)		if (::hx::IsNull( base64 )) {
HXLINE( 614)			return null();
            		}
HXLINE( 615)		 ::lime::graphics::Image image =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null(),null());
HXLINE( 616)		image->_hx___fromBase64(base64,type,null());
HXLINE( 617)		return image;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Image_obj,fromBase64,return )

 ::lime::graphics::Image Image_obj::fromBitmapData( ::Dynamic bitmapData){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_627_fromBitmapData)
HXLINE( 628)		if (::hx::IsNull( bitmapData )) {
HXLINE( 628)			return null();
            		}
HXLINE( 635)		return ( ( ::lime::graphics::Image)(bitmapData->__Field(HX_("image",5b,1f,69,bd),::hx::paccDynamic)) );
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,fromBitmapData,return )

 ::lime::graphics::Image Image_obj::fromBytes( ::haxe::io::Bytes bytes){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_652_fromBytes)
HXLINE( 653)		if (::hx::IsNull( bytes )) {
HXLINE( 653)			return null();
            		}
HXLINE( 654)		 ::lime::graphics::Image image =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null(),null());
HXLINE( 655)		if (image->_hx___fromBytes(bytes,null())) {
HXLINE( 657)			return image;
            		}
            		else {
HXLINE( 661)			return null();
            		}
HXLINE( 655)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,fromBytes,return )

 ::lime::graphics::Image Image_obj::fromCanvas( ::Dynamic canvas){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_672_fromCanvas)
HXLINE( 673)		if (::hx::IsNull( canvas )) {
HXLINE( 673)			return null();
            		}
HXLINE( 674)		 ::lime::graphics::ImageBuffer buffer =  ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,null(),canvas->__Field(HX_("width",06,b6,62,ca),::hx::paccDynamic),canvas->__Field(HX_("height",e7,07,4c,02),::hx::paccDynamic),null(),null());
HXLINE( 675)		buffer->set_src(canvas);
HXLINE( 676)		 ::lime::graphics::Image image =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,buffer,null(),null(),null(),null(),null(),null());
HXLINE( 678)		image->type = ::lime::graphics::ImageType_obj::CANVAS_dyn();
HXLINE( 679)		return image;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,fromCanvas,return )

 ::lime::graphics::Image Image_obj::fromFile(::String path){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_695_fromFile)
HXLINE( 696)		if (::hx::IsNull( path )) {
HXLINE( 696)			return null();
            		}
HXLINE( 697)		 ::lime::graphics::Image image =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,null(),null(),null(),null(),null(),null(),null());
HXLINE( 698)		if (image->_hx___fromFile(path,null(),null())) {
HXLINE( 700)			return image;
            		}
            		else {
HXLINE( 704)			return null();
            		}
HXLINE( 698)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,fromFile,return )

 ::lime::graphics::Image Image_obj::fromImageElement( ::Dynamic image){
            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_715_fromImageElement)
HXLINE( 716)		if (::hx::IsNull( image )) {
HXLINE( 716)			return null();
            		}
HXLINE( 717)		 ::lime::graphics::ImageBuffer buffer =  ::lime::graphics::ImageBuffer_obj::__alloc( HX_CTX ,null(),image->__Field(HX_("width",06,b6,62,ca),::hx::paccDynamic),image->__Field(HX_("height",e7,07,4c,02),::hx::paccDynamic),null(),null());
HXLINE( 718)		buffer->set_src(image);
HXLINE( 719)		 ::lime::graphics::Image _image =  ::lime::graphics::Image_obj::__alloc( HX_CTX ,buffer,null(),null(),null(),null(),null(),null());
HXLINE( 721)		_image->type = ::lime::graphics::ImageType_obj::CANVAS_dyn();
HXLINE( 722)		return _image;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,fromImageElement,return )

 ::lime::app::Future Image_obj::loadFromBase64(::String base64,::String type){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_918_loadFromBase64)
HXLINE( 919)		bool _hx_tmp;
HXDLIN( 919)		if (::hx::IsNotNull( base64 )) {
HXLINE( 919)			_hx_tmp = ::hx::IsNull( type );
            		}
            		else {
HXLINE( 919)			_hx_tmp = true;
            		}
HXDLIN( 919)		if (_hx_tmp) {
HXLINE( 919)			return ::lime::app::Future_obj::withValue(null());
            		}
HXLINE( 924)		if (::hx::IsNotNull( base64 )) {
HXLINE( 926)			return ::lime::graphics::Image_obj::loadFromBytes(::lime::_internal::format::Base64_obj::decode(base64));
            		}
            		else {
HXLINE( 930)			return ::lime::app::Future_obj::withError(HX_("",00,00,00,00));
            		}
HXLINE( 924)		return null();
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Image_obj,loadFromBase64,return )

 ::lime::app::Future Image_obj::loadFromBytes( ::haxe::io::Bytes bytes){
            		HX_BEGIN_LOCAL_FUNC_S1(::hx::LocalFunc,_hx_Closure_0, ::haxe::io::Bytes,bytes) HXARGC(0)
            		 ::lime::graphics::Image _hx_run(){
            			HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_997_loadFromBytes)
HXLINE( 997)			return ::lime::graphics::Image_obj::fromBytes(bytes);
            		}
            		HX_END_LOCAL_FUNC0(return)

            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_941_loadFromBytes)
HXLINE( 942)		if (::hx::IsNull( bytes )) {
HXLINE( 942)			return ::lime::app::Future_obj::withValue(null());
            		}
HXLINE( 997)		return  ::lime::app::Future_obj::__alloc( HX_CTX , ::Dynamic(new _hx_Closure_0(bytes)),true);
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,loadFromBytes,return )

 ::lime::app::Future Image_obj::loadFromFile(::String path){
            		HX_BEGIN_LOCAL_FUNC_S0(::hx::LocalFunc,_hx_Closure_0) HXARGC(1)
            		 ::lime::app::Future _hx_run( ::lime::graphics::Image image){
            			HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1056_loadFromFile)
HXLINE(1056)			if (::hx::IsNotNull( image )) {
HXLINE(1058)				return ::lime::app::Future_obj::withValue(image);
            			}
            			else {
HXLINE(1062)				return ::lime::app::Future_obj::withError(HX_("",00,00,00,00));
            			}
HXLINE(1056)			return null();
            		}
            		HX_END_LOCAL_FUNC1(return)

            	HX_GC_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1007_loadFromFile)
HXLINE(1008)		if (::hx::IsNull( path )) {
HXLINE(1008)			return ::lime::app::Future_obj::withValue(null());
            		}
HXLINE(1053)		 ::lime::net::_HTTPRequest_lime_graphics_Image request =  ::lime::net::_HTTPRequest_lime_graphics_Image_obj::__alloc( HX_CTX ,null());
HXLINE(1054)		return request->load(path)->then( ::Dynamic(new _hx_Closure_0()));
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,loadFromFile,return )

bool Image_obj::_hx___isGIF( ::haxe::io::Bytes bytes){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1703___isGIF)
HXLINE(1704)		bool _hx_tmp;
HXDLIN(1704)		if (::hx::IsNotNull( bytes )) {
HXLINE(1704)			_hx_tmp = (bytes->length < 6);
            		}
            		else {
HXLINE(1704)			_hx_tmp = true;
            		}
HXDLIN(1704)		if (_hx_tmp) {
HXLINE(1704)			return false;
            		}
HXLINE(1706)		::String header = bytes->getString(0,6,null());
HXLINE(1707)		if ((header != HX_("GIF87a",1e,95,06,9a))) {
HXLINE(1707)			return (header == HX_("GIF89a",dc,96,06,9a));
            		}
            		else {
HXLINE(1707)			return true;
            		}
HXDLIN(1707)		return false;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___isGIF,return )

bool Image_obj::_hx___isJPG( ::haxe::io::Bytes bytes){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1711___isJPG)
HXLINE(1712)		bool _hx_tmp;
HXDLIN(1712)		if (::hx::IsNotNull( bytes )) {
HXLINE(1712)			_hx_tmp = (bytes->length < 4);
            		}
            		else {
HXLINE(1712)			_hx_tmp = true;
            		}
HXDLIN(1712)		if (_hx_tmp) {
HXLINE(1712)			return false;
            		}
HXLINE(1714)		bool _hx_tmp1;
HXDLIN(1714)		bool _hx_tmp2;
HXDLIN(1714)		if ((bytes->b->__get(0) == 255)) {
HXLINE(1714)			_hx_tmp2 = (bytes->b->__get(1) == 216);
            		}
            		else {
HXLINE(1714)			_hx_tmp2 = false;
            		}
HXDLIN(1714)		if (_hx_tmp2) {
HXLINE(1714)			_hx_tmp1 = (bytes->b->__get((bytes->length - 2)) == 255);
            		}
            		else {
HXLINE(1714)			_hx_tmp1 = false;
            		}
HXDLIN(1714)		if (_hx_tmp1) {
HXLINE(1717)			return (bytes->b->__get((bytes->length - 1)) == 217);
            		}
            		else {
HXLINE(1714)			return false;
            		}
HXDLIN(1714)		return false;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___isJPG,return )

bool Image_obj::_hx___isPNG( ::haxe::io::Bytes bytes){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1721___isPNG)
HXLINE(1722)		bool _hx_tmp;
HXDLIN(1722)		if (::hx::IsNotNull( bytes )) {
HXLINE(1722)			_hx_tmp = (bytes->length < 8);
            		}
            		else {
HXLINE(1722)			_hx_tmp = true;
            		}
HXDLIN(1722)		if (_hx_tmp) {
HXLINE(1722)			return false;
            		}
HXLINE(1724)		bool _hx_tmp1;
HXDLIN(1724)		bool _hx_tmp2;
HXDLIN(1724)		bool _hx_tmp3;
HXDLIN(1724)		bool _hx_tmp4;
HXDLIN(1724)		bool _hx_tmp5;
HXDLIN(1724)		bool _hx_tmp6;
HXDLIN(1724)		if ((bytes->b->__get(0) == 137)) {
HXLINE(1724)			_hx_tmp6 = (bytes->b->__get(1) == 80);
            		}
            		else {
HXLINE(1724)			_hx_tmp6 = false;
            		}
HXDLIN(1724)		if (_hx_tmp6) {
HXLINE(1724)			_hx_tmp5 = (bytes->b->__get(2) == 78);
            		}
            		else {
HXLINE(1724)			_hx_tmp5 = false;
            		}
HXDLIN(1724)		if (_hx_tmp5) {
HXLINE(1724)			_hx_tmp4 = (bytes->b->__get(3) == 71);
            		}
            		else {
HXLINE(1724)			_hx_tmp4 = false;
            		}
HXDLIN(1724)		if (_hx_tmp4) {
HXLINE(1724)			_hx_tmp3 = (bytes->b->__get(4) == 13);
            		}
            		else {
HXLINE(1724)			_hx_tmp3 = false;
            		}
HXDLIN(1724)		if (_hx_tmp3) {
HXLINE(1724)			_hx_tmp2 = (bytes->b->__get(5) == 10);
            		}
            		else {
HXLINE(1724)			_hx_tmp2 = false;
            		}
HXDLIN(1724)		if (_hx_tmp2) {
HXLINE(1724)			_hx_tmp1 = (bytes->b->__get(6) == 26);
            		}
            		else {
HXLINE(1724)			_hx_tmp1 = false;
            		}
HXDLIN(1724)		if (_hx_tmp1) {
HXLINE(1725)			return (bytes->b->__get(7) == 10);
            		}
            		else {
HXLINE(1724)			return false;
            		}
HXDLIN(1724)		return false;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___isPNG,return )

bool Image_obj::_hx___isWebP( ::haxe::io::Bytes bytes){
            	HX_STACKFRAME(&_hx_pos_ef8f6e7e24e3b831_1729___isWebP)
HXLINE(1730)		bool _hx_tmp;
HXDLIN(1730)		if (::hx::IsNotNull( bytes )) {
HXLINE(1730)			_hx_tmp = (bytes->length < 16);
            		}
            		else {
HXLINE(1730)			_hx_tmp = true;
            		}
HXDLIN(1730)		if (_hx_tmp) {
HXLINE(1730)			return false;
            		}
HXLINE(1732)		if ((bytes->getString(0,4,null()) == HX_("RIFF",b7,20,6b,36))) {
HXLINE(1732)			return (bytes->getString(8,4,null()) == HX_("WEBP",5c,25,b6,39));
            		}
            		else {
HXLINE(1732)			return false;
            		}
HXDLIN(1732)		return false;
            	}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Image_obj,_hx___isWebP,return )


::hx::ObjectPtr< Image_obj > Image_obj::__new( ::lime::graphics::ImageBuffer buffer,::hx::Null< int >  __o_offsetX,::hx::Null< int >  __o_offsetY,::hx::Null< int >  __o_width,::hx::Null< int >  __o_height, ::Dynamic color, ::lime::graphics::ImageType type) {
	::hx::ObjectPtr< Image_obj > __this = new Image_obj();
	__this->__construct(buffer,__o_offsetX,__o_offsetY,__o_width,__o_height,color,type);
	return __this;
}

::hx::ObjectPtr< Image_obj > Image_obj::__alloc(::hx::Ctx *_hx_ctx, ::lime::graphics::ImageBuffer buffer,::hx::Null< int >  __o_offsetX,::hx::Null< int >  __o_offsetY,::hx::Null< int >  __o_width,::hx::Null< int >  __o_height, ::Dynamic color, ::lime::graphics::ImageType type) {
	Image_obj *__this = (Image_obj*)(::hx::Ctx::alloc(_hx_ctx, sizeof(Image_obj), true, "lime.graphics.Image"));
	*(void **)__this = Image_obj::_hx_vtable;
	__this->__construct(buffer,__o_offsetX,__o_offsetY,__o_width,__o_height,color,type);
	return __this;
}

Image_obj::Image_obj()
{
}

void Image_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Image);
	HX_MARK_MEMBER_NAME(buffer,"buffer");
	HX_MARK_MEMBER_NAME(dirty,"dirty");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(offsetX,"offsetX");
	HX_MARK_MEMBER_NAME(offsetY,"offsetY");
	HX_MARK_MEMBER_NAME(rect,"rect");
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(version,"version");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(x,"x");
	HX_MARK_MEMBER_NAME(y,"y");
	HX_MARK_END_CLASS();
}

void Image_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(buffer,"buffer");
	HX_VISIT_MEMBER_NAME(dirty,"dirty");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(offsetX,"offsetX");
	HX_VISIT_MEMBER_NAME(offsetY,"offsetY");
	HX_VISIT_MEMBER_NAME(rect,"rect");
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(version,"version");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(x,"x");
	HX_VISIT_MEMBER_NAME(y,"y");
}

::hx::Val Image_obj::__Field(const ::String &inName,::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"x") ) { return ::hx::Val( x ); }
		if (HX_FIELD_EQ(inName,"y") ) { return ::hx::Val( y ); }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"src") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_src() ); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"data") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_data() ); }
		if (HX_FIELD_EQ(inName,"rect") ) { return ::hx::Val( inCallProp == ::hx::paccAlways ? get_rect() : rect ); }
		if (HX_FIELD_EQ(inName,"type") ) { return ::hx::Val( type ); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"dirty") ) { return ::hx::Val( dirty ); }
		if (HX_FIELD_EQ(inName,"width") ) { return ::hx::Val( width ); }
		if (HX_FIELD_EQ(inName,"clone") ) { return ::hx::Val( clone_dyn() ); }
		if (HX_FIELD_EQ(inName,"merge") ) { return ::hx::Val( merge_dyn() ); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"buffer") ) { return ::hx::Val( buffer ); }
		if (HX_FIELD_EQ(inName,"format") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_format() ); }
		if (HX_FIELD_EQ(inName,"height") ) { return ::hx::Val( height ); }
		if (HX_FIELD_EQ(inName,"encode") ) { return ::hx::Val( encode_dyn() ); }
		if (HX_FIELD_EQ(inName,"resize") ) { return ::hx::Val( resize_dyn() ); }
		if (HX_FIELD_EQ(inName,"scroll") ) { return ::hx::Val( scroll_dyn() ); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"offsetX") ) { return ::hx::Val( offsetX ); }
		if (HX_FIELD_EQ(inName,"offsetY") ) { return ::hx::Val( offsetY ); }
		if (HX_FIELD_EQ(inName,"version") ) { return ::hx::Val( version ); }
		if (HX_FIELD_EQ(inName,"get_src") ) { return ::hx::Val( get_src_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_src") ) { return ::hx::Val( set_src_dyn() ); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"fillRect") ) { return ::hx::Val( fillRect_dyn() ); }
		if (HX_FIELD_EQ(inName,"getPixel") ) { return ::hx::Val( getPixel_dyn() ); }
		if (HX_FIELD_EQ(inName,"setPixel") ) { return ::hx::Val( setPixel_dyn() ); }
		if (HX_FIELD_EQ(inName,"get_data") ) { return ::hx::Val( get_data_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_data") ) { return ::hx::Val( set_data_dyn() ); }
		if (HX_FIELD_EQ(inName,"get_rect") ) { return ::hx::Val( get_rect_dyn() ); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"floodFill") ) { return ::hx::Val( floodFill_dyn() ); }
		if (HX_FIELD_EQ(inName,"getPixels") ) { return ::hx::Val( getPixels_dyn() ); }
		if (HX_FIELD_EQ(inName,"setPixels") ) { return ::hx::Val( setPixels_dyn() ); }
		if (HX_FIELD_EQ(inName,"threshold") ) { return ::hx::Val( threshold_dyn() ); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"powerOfTwo") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_powerOfTwo() ); }
		if (HX_FIELD_EQ(inName,"copyPixels") ) { return ::hx::Val( copyPixels_dyn() ); }
		if (HX_FIELD_EQ(inName,"getPixel32") ) { return ::hx::Val( getPixel32_dyn() ); }
		if (HX_FIELD_EQ(inName,"setPixel32") ) { return ::hx::Val( setPixel32_dyn() ); }
		if (HX_FIELD_EQ(inName,"__clipRect") ) { return ::hx::Val( _hx___clipRect_dyn() ); }
		if (HX_FIELD_EQ(inName,"__fromFile") ) { return ::hx::Val( _hx___fromFile_dyn() ); }
		if (HX_FIELD_EQ(inName,"get_format") ) { return ::hx::Val( get_format_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_format") ) { return ::hx::Val( set_format_dyn() ); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"transparent") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_transparent() ); }
		if (HX_FIELD_EQ(inName,"copyChannel") ) { return ::hx::Val( copyChannel_dyn() ); }
		if (HX_FIELD_EQ(inName,"__fromBytes") ) { return ::hx::Val( _hx___fromBytes_dyn() ); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"__fromBase64") ) { return ::hx::Val( _hx___fromBase64_dyn() ); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"premultiplied") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( get_premultiplied() ); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"colorTransform") ) { return ::hx::Val( colorTransform_dyn() ); }
		if (HX_FIELD_EQ(inName,"get_powerOfTwo") ) { return ::hx::Val( get_powerOfTwo_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_powerOfTwo") ) { return ::hx::Val( set_powerOfTwo_dyn() ); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"get_transparent") ) { return ::hx::Val( get_transparent_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_transparent") ) { return ::hx::Val( set_transparent_dyn() ); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"__fromImageBuffer") ) { return ::hx::Val( _hx___fromImageBuffer_dyn() ); }
		if (HX_FIELD_EQ(inName,"get_premultiplied") ) { return ::hx::Val( get_premultiplied_dyn() ); }
		if (HX_FIELD_EQ(inName,"set_premultiplied") ) { return ::hx::Val( set_premultiplied_dyn() ); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"getColorBoundsRect") ) { return ::hx::Val( getColorBoundsRect_dyn() ); }
	}
	return super::__Field(inName,inCallProp);
}

bool Image_obj::__GetStatic(const ::String &inName, Dynamic &outValue, ::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"__isGIF") ) { outValue = _hx___isGIF_dyn(); return true; }
		if (HX_FIELD_EQ(inName,"__isJPG") ) { outValue = _hx___isJPG_dyn(); return true; }
		if (HX_FIELD_EQ(inName,"__isPNG") ) { outValue = _hx___isPNG_dyn(); return true; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"fromFile") ) { outValue = fromFile_dyn(); return true; }
		if (HX_FIELD_EQ(inName,"__isWebP") ) { outValue = _hx___isWebP_dyn(); return true; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"fromBytes") ) { outValue = fromBytes_dyn(); return true; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"fromBase64") ) { outValue = fromBase64_dyn(); return true; }
		if (HX_FIELD_EQ(inName,"fromCanvas") ) { outValue = fromCanvas_dyn(); return true; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"loadFromFile") ) { outValue = loadFromFile_dyn(); return true; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"loadFromBytes") ) { outValue = loadFromBytes_dyn(); return true; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"fromBitmapData") ) { outValue = fromBitmapData_dyn(); return true; }
		if (HX_FIELD_EQ(inName,"loadFromBase64") ) { outValue = loadFromBase64_dyn(); return true; }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"fromImageElement") ) { outValue = fromImageElement_dyn(); return true; }
	}
	return false;
}

::hx::Val Image_obj::__SetField(const ::String &inName,const ::hx::Val &inValue,::hx::PropertyAccess inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"x") ) { x=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"y") ) { y=inValue.Cast< Float >(); return inValue; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"src") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_src(inValue.Cast<  ::Dynamic >()) ); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"data") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_data(inValue.Cast<  ::lime::utils::ArrayBufferView >()) ); }
		if (HX_FIELD_EQ(inName,"rect") ) { rect=inValue.Cast<  ::lime::math::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast<  ::lime::graphics::ImageType >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"dirty") ) { dirty=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"buffer") ) { buffer=inValue.Cast<  ::lime::graphics::ImageBuffer >(); return inValue; }
		if (HX_FIELD_EQ(inName,"format") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_format(inValue.Cast< int >()) ); }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"offsetX") ) { offsetX=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"offsetY") ) { offsetY=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"version") ) { version=inValue.Cast< int >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"powerOfTwo") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_powerOfTwo(inValue.Cast< bool >()) ); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"transparent") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_transparent(inValue.Cast< bool >()) ); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"premultiplied") ) { if (inCallProp == ::hx::paccAlways) return ::hx::Val( set_premultiplied(inValue.Cast< bool >()) ); }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Image_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_("buffer",00,bd,94,d0));
	outFields->push(HX_("data",2a,56,63,42));
	outFields->push(HX_("dirty",12,50,d0,d9));
	outFields->push(HX_("format",37,8f,8e,fd));
	outFields->push(HX_("height",e7,07,4c,02));
	outFields->push(HX_("offsetX",65,09,65,d7));
	outFields->push(HX_("offsetY",66,09,65,d7));
	outFields->push(HX_("powerOfTwo",70,be,ae,ea));
	outFields->push(HX_("premultiplied",56,f1,4e,a4));
	outFields->push(HX_("rect",24,4d,a7,4b));
	outFields->push(HX_("src",e4,a6,57,00));
	outFields->push(HX_("transparent",52,2b,ba,22));
	outFields->push(HX_("type",ba,f2,08,4d));
	outFields->push(HX_("version",18,e7,f1,7c));
	outFields->push(HX_("width",06,b6,62,ca));
	outFields->push(HX_("x",78,00,00,00));
	outFields->push(HX_("y",79,00,00,00));
	super::__GetFields(outFields);
};

#ifdef HXCPP_SCRIPTABLE
static ::hx::StorageInfo Image_obj_sMemberStorageInfo[] = {
	{::hx::fsObject /*  ::lime::graphics::ImageBuffer */ ,(int)offsetof(Image_obj,buffer),HX_("buffer",00,bd,94,d0)},
	{::hx::fsBool,(int)offsetof(Image_obj,dirty),HX_("dirty",12,50,d0,d9)},
	{::hx::fsInt,(int)offsetof(Image_obj,height),HX_("height",e7,07,4c,02)},
	{::hx::fsInt,(int)offsetof(Image_obj,offsetX),HX_("offsetX",65,09,65,d7)},
	{::hx::fsInt,(int)offsetof(Image_obj,offsetY),HX_("offsetY",66,09,65,d7)},
	{::hx::fsObject /*  ::lime::math::Rectangle */ ,(int)offsetof(Image_obj,rect),HX_("rect",24,4d,a7,4b)},
	{::hx::fsObject /*  ::lime::graphics::ImageType */ ,(int)offsetof(Image_obj,type),HX_("type",ba,f2,08,4d)},
	{::hx::fsInt,(int)offsetof(Image_obj,version),HX_("version",18,e7,f1,7c)},
	{::hx::fsInt,(int)offsetof(Image_obj,width),HX_("width",06,b6,62,ca)},
	{::hx::fsFloat,(int)offsetof(Image_obj,x),HX_("x",78,00,00,00)},
	{::hx::fsFloat,(int)offsetof(Image_obj,y),HX_("y",79,00,00,00)},
	{ ::hx::fsUnknown, 0, null()}
};
static ::hx::StaticInfo *Image_obj_sStaticStorageInfo = 0;
#endif

static ::String Image_obj_sMemberFields[] = {
	HX_("buffer",00,bd,94,d0),
	HX_("dirty",12,50,d0,d9),
	HX_("height",e7,07,4c,02),
	HX_("offsetX",65,09,65,d7),
	HX_("offsetY",66,09,65,d7),
	HX_("rect",24,4d,a7,4b),
	HX_("type",ba,f2,08,4d),
	HX_("version",18,e7,f1,7c),
	HX_("width",06,b6,62,ca),
	HX_("x",78,00,00,00),
	HX_("y",79,00,00,00),
	HX_("clone",5d,13,63,48),
	HX_("colorTransform",89,d7,3f,ad),
	HX_("copyChannel",8e,7d,e6,22),
	HX_("copyPixels",c2,54,6e,42),
	HX_("encode",16,f2,e3,f9),
	HX_("fillRect",47,45,b9,6c),
	HX_("floodFill",61,83,8a,59),
	HX_("getColorBoundsRect",86,ad,e8,80),
	HX_("getPixel",10,d6,7a,22),
	HX_("getPixel32",af,a6,68,d7),
	HX_("getPixels",63,78,00,09),
	HX_("merge",b8,a2,c6,05),
	HX_("resize",f4,59,7b,08),
	HX_("scroll",0d,d8,64,47),
	HX_("setPixel",84,2f,d8,d0),
	HX_("setPixel32",23,45,e6,da),
	HX_("setPixels",6f,64,51,ec),
	HX_("threshold",ab,c3,a3,34),
	HX_("__clipRect",34,03,a3,fb),
	HX_("__fromBase64",b9,7d,ff,d0),
	HX_("__fromBytes",81,3b,4d,a0),
	HX_("__fromFile",26,10,c0,44),
	HX_("__fromImageBuffer",51,6e,ca,ca),
	HX_("get_data",b3,11,1e,c2),
	HX_("set_data",27,6b,7b,70),
	HX_("get_format",00,ff,15,ee),
	HX_("set_format",74,9d,93,f1),
	HX_("get_powerOfTwo",b9,46,a4,60),
	HX_("set_powerOfTwo",2d,2f,c4,80),
	HX_("get_premultiplied",ad,fc,be,aa),
	HX_("set_premultiplied",b9,d4,2c,ce),
	HX_("get_rect",ad,08,62,cb),
	HX_("get_src",7b,6f,cc,26),
	HX_("set_src",87,00,ce,19),
	HX_("get_transparent",e9,e2,9b,e3),
	HX_("set_transparent",f5,5f,67,df),
	::String(null()) };

::hx::Class Image_obj::__mClass;

static ::String Image_obj_sStaticFields[] = {
	HX_("fromBase64",99,02,6c,98),
	HX_("fromBitmapData",c3,07,ed,2b),
	HX_("fromBytes",a1,f2,20,72),
	HX_("fromCanvas",e2,59,86,fb),
	HX_("fromFile",06,9d,87,a1),
	HX_("fromImageElement",2b,91,89,8f),
	HX_("loadFromBase64",5f,0c,1d,2f),
	HX_("loadFromBytes",9b,c3,86,f4),
	HX_("loadFromFile",4c,89,f0,5a),
	HX_("__isGIF",1a,eb,aa,2b),
	HX_("__isJPG",f7,37,ad,2b),
	HX_("__isPNG",bf,c3,b1,2b),
	HX_("__isWebP",66,8d,8b,14),
	::String(null())
};

void Image_obj::__register()
{
	Image_obj _hx_dummy;
	Image_obj::_hx_vtable = *(void **)&_hx_dummy;
	::hx::Static(__mClass) = new ::hx::Class_obj();
	__mClass->mName = HX_("lime.graphics.Image",91,28,c1,9c);
	__mClass->mSuper = &super::__SGetClass();
	__mClass->mConstructEmpty = &__CreateEmpty;
	__mClass->mConstructArgs = &__Create;
	__mClass->mGetStaticField = &Image_obj::__GetStatic;
	__mClass->mSetStaticField = &::hx::Class_obj::SetNoStaticField;
	__mClass->mStatics = ::hx::Class_obj::dupFunctions(Image_obj_sStaticFields);
	__mClass->mMembers = ::hx::Class_obj::dupFunctions(Image_obj_sMemberFields);
	__mClass->mCanCast = ::hx::TCanCast< Image_obj >;
#ifdef HXCPP_SCRIPTABLE
	__mClass->mMemberStorageInfo = Image_obj_sMemberStorageInfo;
#endif
#ifdef HXCPP_SCRIPTABLE
	__mClass->mStaticStorageInfo = Image_obj_sStaticStorageInfo;
#endif
	::hx::_hx_RegisterClass(__mClass->mName, __mClass);
}

} // end namespace lime
} // end namespace graphics
