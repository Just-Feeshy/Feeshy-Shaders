#ifndef INCLUDED_lime_graphics__WebGL2RenderContext_WebGL2RenderContext_Impl_
#define INCLUDED_lime_graphics__WebGL2RenderContext_WebGL2RenderContext_Impl_

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#ifndef INCLUDED_38344beec7696400
#define INCLUDED_38344beec7696400
#include "cpp/Int64.h"
#endif
HX_DECLARE_CLASS2(haxe,io,Bytes)
HX_DECLARE_CLASS4(lime,_internal,backend,native,NativeOpenGLRenderContext)
HX_DECLARE_CLASS2(lime,graphics,RenderContext)
HX_DECLARE_CLASS3(lime,graphics,_WebGL2RenderContext,WebGL2RenderContext_Impl_)
HX_DECLARE_CLASS3(lime,graphics,opengl,GLObject)
HX_DECLARE_CLASS2(lime,utils,ArrayBufferView)
HX_DECLARE_CLASS2(lime,utils,BytePointerData)

namespace lime{
namespace graphics{
namespace _WebGL2RenderContext{


class HXCPP_CLASS_ATTRIBUTES WebGL2RenderContext_Impl__obj : public ::hx::Object
{
	public:
		typedef ::hx::Object super;
		typedef WebGL2RenderContext_Impl__obj OBJ_;
		WebGL2RenderContext_Impl__obj();

	public:
		enum { _hx_ClassId = 0x73fcf61f };

		void __construct();
		inline void *operator new(size_t inSize, bool inContainer=false,const char *inName="lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_")
			{ return ::hx::Object::operator new(inSize,inContainer,inName); }
		inline void *operator new(size_t inSize, int extra)
			{ return ::hx::Object::operator new(inSize+extra,false,"lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_"); }

		inline static ::hx::ObjectPtr< WebGL2RenderContext_Impl__obj > __new() {
			::hx::ObjectPtr< WebGL2RenderContext_Impl__obj > __this = new WebGL2RenderContext_Impl__obj();
			__this->__construct();
			return __this;
		}

		inline static ::hx::ObjectPtr< WebGL2RenderContext_Impl__obj > __alloc(::hx::Ctx *_hx_ctx) {
			WebGL2RenderContext_Impl__obj *__this = (WebGL2RenderContext_Impl__obj*)(::hx::Ctx::alloc(_hx_ctx, sizeof(WebGL2RenderContext_Impl__obj), false, "lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_"));
			*(void **)__this = WebGL2RenderContext_Impl__obj::_hx_vtable;
			return __this;
		}

		static void * _hx_vtable;
		static Dynamic __CreateEmpty();
		static Dynamic __Create(::hx::DynamicArray inArgs);
		//~WebGL2RenderContext_Impl__obj();

		HX_DO_RTTI_ALL;
		static bool __GetStatic(const ::String &inString, Dynamic &outValue, ::hx::PropertyAccess inCallProp);
		static void __register();
		bool _hx_isInstanceOf(int inClassId);
		::String __ToString() const { return HX_("WebGL2RenderContext_Impl_",a0,77,ab,a6); }

		static void __boot();
		static  ::lime::utils::BytePointerData _hx___tempPointer;
		static int get_DEPTH_BUFFER_BIT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_BUFFER_BIT_dyn();

		static int get_STENCIL_BUFFER_BIT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BUFFER_BIT_dyn();

		static int get_COLOR_BUFFER_BIT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_BUFFER_BIT_dyn();

		static int get_POINTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_POINTS_dyn();

		static int get_LINES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINES_dyn();

		static int get_LINE_LOOP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINE_LOOP_dyn();

		static int get_LINE_STRIP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINE_STRIP_dyn();

		static int get_TRIANGLES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRIANGLES_dyn();

		static int get_TRIANGLE_STRIP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRIANGLE_STRIP_dyn();

		static int get_TRIANGLE_FAN( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRIANGLE_FAN_dyn();

		static int get_ZERO( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ZERO_dyn();

		static int get_ONE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_dyn();

		static int get_SRC_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRC_COLOR_dyn();

		static int get_ONE_MINUS_SRC_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_SRC_COLOR_dyn();

		static int get_SRC_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRC_ALPHA_dyn();

		static int get_ONE_MINUS_SRC_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_SRC_ALPHA_dyn();

		static int get_DST_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DST_ALPHA_dyn();

		static int get_ONE_MINUS_DST_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_DST_ALPHA_dyn();

		static int get_DST_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DST_COLOR_dyn();

		static int get_ONE_MINUS_DST_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_DST_COLOR_dyn();

		static int get_SRC_ALPHA_SATURATE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRC_ALPHA_SATURATE_dyn();

		static int get_FUNC_ADD( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FUNC_ADD_dyn();

		static int get_BLEND_EQUATION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_EQUATION_dyn();

		static int get_BLEND_EQUATION_RGB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_EQUATION_RGB_dyn();

		static int get_BLEND_EQUATION_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_EQUATION_ALPHA_dyn();

		static int get_FUNC_SUBTRACT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FUNC_SUBTRACT_dyn();

		static int get_FUNC_REVERSE_SUBTRACT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FUNC_REVERSE_SUBTRACT_dyn();

		static int get_BLEND_DST_RGB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_DST_RGB_dyn();

		static int get_BLEND_SRC_RGB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_SRC_RGB_dyn();

		static int get_BLEND_DST_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_DST_ALPHA_dyn();

		static int get_BLEND_SRC_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_SRC_ALPHA_dyn();

		static int get_CONSTANT_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CONSTANT_COLOR_dyn();

		static int get_ONE_MINUS_CONSTANT_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_CONSTANT_COLOR_dyn();

		static int get_CONSTANT_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CONSTANT_ALPHA_dyn();

		static int get_ONE_MINUS_CONSTANT_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ONE_MINUS_CONSTANT_ALPHA_dyn();

		static int get_BLEND_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_COLOR_dyn();

		static int get_ARRAY_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ARRAY_BUFFER_dyn();

		static int get_ELEMENT_ARRAY_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ELEMENT_ARRAY_BUFFER_dyn();

		static int get_ARRAY_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ARRAY_BUFFER_BINDING_dyn();

		static int get_ELEMENT_ARRAY_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ELEMENT_ARRAY_BUFFER_BINDING_dyn();

		static int get_STREAM_DRAW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STREAM_DRAW_dyn();

		static int get_STATIC_DRAW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STATIC_DRAW_dyn();

		static int get_DYNAMIC_DRAW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DYNAMIC_DRAW_dyn();

		static int get_BUFFER_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BUFFER_SIZE_dyn();

		static int get_BUFFER_USAGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BUFFER_USAGE_dyn();

		static int get_CURRENT_VERTEX_ATTRIB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CURRENT_VERTEX_ATTRIB_dyn();

		static int get_FRONT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRONT_dyn();

		static int get_BACK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BACK_dyn();

		static int get_FRONT_AND_BACK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRONT_AND_BACK_dyn();

		static int get_CULL_FACE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CULL_FACE_dyn();

		static int get_BLEND( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLEND_dyn();

		static int get_DITHER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DITHER_dyn();

		static int get_STENCIL_TEST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_TEST_dyn();

		static int get_DEPTH_TEST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_TEST_dyn();

		static int get_SCISSOR_TEST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SCISSOR_TEST_dyn();

		static int get_POLYGON_OFFSET_FILL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_POLYGON_OFFSET_FILL_dyn();

		static int get_SAMPLE_ALPHA_TO_COVERAGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLE_ALPHA_TO_COVERAGE_dyn();

		static int get_SAMPLE_COVERAGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLE_COVERAGE_dyn();

		static int get_NO_ERROR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NO_ERROR_dyn();

		static int get_INVALID_ENUM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVALID_ENUM_dyn();

		static int get_INVALID_VALUE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVALID_VALUE_dyn();

		static int get_INVALID_OPERATION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVALID_OPERATION_dyn();

		static int get_OUT_OF_MEMORY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_OUT_OF_MEMORY_dyn();

		static int get_CW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CW_dyn();

		static int get_CCW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CCW_dyn();

		static int get_LINE_WIDTH( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINE_WIDTH_dyn();

		static int get_ALIASED_POINT_SIZE_RANGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALIASED_POINT_SIZE_RANGE_dyn();

		static int get_ALIASED_LINE_WIDTH_RANGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALIASED_LINE_WIDTH_RANGE_dyn();

		static int get_CULL_FACE_MODE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CULL_FACE_MODE_dyn();

		static int get_FRONT_FACE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRONT_FACE_dyn();

		static int get_DEPTH_RANGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_RANGE_dyn();

		static int get_DEPTH_WRITEMASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_WRITEMASK_dyn();

		static int get_DEPTH_CLEAR_VALUE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_CLEAR_VALUE_dyn();

		static int get_DEPTH_FUNC( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_FUNC_dyn();

		static int get_STENCIL_CLEAR_VALUE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_CLEAR_VALUE_dyn();

		static int get_STENCIL_FUNC( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_FUNC_dyn();

		static int get_STENCIL_FAIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_FAIL_dyn();

		static int get_STENCIL_PASS_DEPTH_FAIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_PASS_DEPTH_FAIL_dyn();

		static int get_STENCIL_PASS_DEPTH_PASS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_PASS_DEPTH_PASS_dyn();

		static int get_STENCIL_REF( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_REF_dyn();

		static int get_STENCIL_VALUE_MASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_VALUE_MASK_dyn();

		static int get_STENCIL_WRITEMASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_WRITEMASK_dyn();

		static int get_STENCIL_BACK_FUNC( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_FUNC_dyn();

		static int get_STENCIL_BACK_FAIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_FAIL_dyn();

		static int get_STENCIL_BACK_PASS_DEPTH_FAIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_PASS_DEPTH_FAIL_dyn();

		static int get_STENCIL_BACK_PASS_DEPTH_PASS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_PASS_DEPTH_PASS_dyn();

		static int get_STENCIL_BACK_REF( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_REF_dyn();

		static int get_STENCIL_BACK_VALUE_MASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_VALUE_MASK_dyn();

		static int get_STENCIL_BACK_WRITEMASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BACK_WRITEMASK_dyn();

		static int get_VIEWPORT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VIEWPORT_dyn();

		static int get_SCISSOR_BOX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SCISSOR_BOX_dyn();

		static int get_COLOR_CLEAR_VALUE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_CLEAR_VALUE_dyn();

		static int get_COLOR_WRITEMASK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_WRITEMASK_dyn();

		static int get_UNPACK_ALIGNMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_ALIGNMENT_dyn();

		static int get_PACK_ALIGNMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PACK_ALIGNMENT_dyn();

		static int get_MAX_TEXTURE_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TEXTURE_SIZE_dyn();

		static int get_MAX_VIEWPORT_DIMS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VIEWPORT_DIMS_dyn();

		static int get_SUBPIXEL_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SUBPIXEL_BITS_dyn();

		static int get_RED_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RED_BITS_dyn();

		static int get_GREEN_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_GREEN_BITS_dyn();

		static int get_BLUE_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BLUE_BITS_dyn();

		static int get_ALPHA_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALPHA_BITS_dyn();

		static int get_DEPTH_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_BITS_dyn();

		static int get_STENCIL_BITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_BITS_dyn();

		static int get_POLYGON_OFFSET_UNITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_POLYGON_OFFSET_UNITS_dyn();

		static int get_POLYGON_OFFSET_FACTOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_POLYGON_OFFSET_FACTOR_dyn();

		static int get_TEXTURE_BINDING_2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_BINDING_2D_dyn();

		static int get_SAMPLE_BUFFERS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLE_BUFFERS_dyn();

		static int get_SAMPLES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLES_dyn();

		static int get_SAMPLE_COVERAGE_VALUE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLE_COVERAGE_VALUE_dyn();

		static int get_SAMPLE_COVERAGE_INVERT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLE_COVERAGE_INVERT_dyn();

		static int get_COMPRESSED_TEXTURE_FORMATS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COMPRESSED_TEXTURE_FORMATS_dyn();

		static int get_DONT_CARE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DONT_CARE_dyn();

		static int get_FASTEST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FASTEST_dyn();

		static int get_NICEST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NICEST_dyn();

		static int get_GENERATE_MIPMAP_HINT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_GENERATE_MIPMAP_HINT_dyn();

		static int get_BYTE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BYTE_dyn();

		static int get_UNSIGNED_BYTE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_BYTE_dyn();

		static int get_SHORT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SHORT_dyn();

		static int get_UNSIGNED_SHORT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_SHORT_dyn();

		static int get_INT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_dyn();

		static int get_UNSIGNED_INT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_dyn();

		static int get_FLOAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_dyn();

		static int get_DEPTH_COMPONENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_COMPONENT_dyn();

		static int get_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALPHA_dyn();

		static int get_RGB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB_dyn();

		static int get_RGBA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA_dyn();

		static int get_LUMINANCE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LUMINANCE_dyn();

		static int get_LUMINANCE_ALPHA( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LUMINANCE_ALPHA_dyn();

		static int get_UNSIGNED_SHORT_4_4_4_4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_SHORT_4_4_4_4_dyn();

		static int get_UNSIGNED_SHORT_5_5_5_1( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_SHORT_5_5_5_1_dyn();

		static int get_UNSIGNED_SHORT_5_6_5( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_SHORT_5_6_5_dyn();

		static int get_FRAGMENT_SHADER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAGMENT_SHADER_dyn();

		static int get_VERTEX_SHADER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_SHADER_dyn();

		static int get_MAX_VERTEX_ATTRIBS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_ATTRIBS_dyn();

		static int get_MAX_VERTEX_UNIFORM_VECTORS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_UNIFORM_VECTORS_dyn();

		static int get_MAX_VARYING_VECTORS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VARYING_VECTORS_dyn();

		static int get_MAX_COMBINED_TEXTURE_IMAGE_UNITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_COMBINED_TEXTURE_IMAGE_UNITS_dyn();

		static int get_MAX_VERTEX_TEXTURE_IMAGE_UNITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_TEXTURE_IMAGE_UNITS_dyn();

		static int get_MAX_TEXTURE_IMAGE_UNITS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TEXTURE_IMAGE_UNITS_dyn();

		static int get_MAX_FRAGMENT_UNIFORM_VECTORS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_FRAGMENT_UNIFORM_VECTORS_dyn();

		static int get_SHADER_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SHADER_TYPE_dyn();

		static int get_DELETE_STATUS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DELETE_STATUS_dyn();

		static int get_LINK_STATUS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINK_STATUS_dyn();

		static int get_VALIDATE_STATUS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VALIDATE_STATUS_dyn();

		static int get_ATTACHED_SHADERS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ATTACHED_SHADERS_dyn();

		static int get_ACTIVE_UNIFORMS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ACTIVE_UNIFORMS_dyn();

		static int get_ACTIVE_ATTRIBUTES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ACTIVE_ATTRIBUTES_dyn();

		static int get_SHADING_LANGUAGE_VERSION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SHADING_LANGUAGE_VERSION_dyn();

		static int get_CURRENT_PROGRAM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CURRENT_PROGRAM_dyn();

		static int get_NEVER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NEVER_dyn();

		static int get_LESS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LESS_dyn();

		static int get_EQUAL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_EQUAL_dyn();

		static int get_LEQUAL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LEQUAL_dyn();

		static int get_GREATER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_GREATER_dyn();

		static int get_NOTEQUAL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NOTEQUAL_dyn();

		static int get_GEQUAL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_GEQUAL_dyn();

		static int get_ALWAYS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALWAYS_dyn();

		static int get_KEEP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_KEEP_dyn();

		static int get_REPLACE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_REPLACE_dyn();

		static int get_INCR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INCR_dyn();

		static int get_DECR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DECR_dyn();

		static int get_INVERT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVERT_dyn();

		static int get_INCR_WRAP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INCR_WRAP_dyn();

		static int get_DECR_WRAP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DECR_WRAP_dyn();

		static int get_VENDOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VENDOR_dyn();

		static int get_RENDERER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERER_dyn();

		static int get_VERSION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERSION_dyn();

		static int get_NEAREST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NEAREST_dyn();

		static int get_LINEAR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINEAR_dyn();

		static int get_NEAREST_MIPMAP_NEAREST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NEAREST_MIPMAP_NEAREST_dyn();

		static int get_LINEAR_MIPMAP_NEAREST( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINEAR_MIPMAP_NEAREST_dyn();

		static int get_NEAREST_MIPMAP_LINEAR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NEAREST_MIPMAP_LINEAR_dyn();

		static int get_LINEAR_MIPMAP_LINEAR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LINEAR_MIPMAP_LINEAR_dyn();

		static int get_TEXTURE_MAG_FILTER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_MAG_FILTER_dyn();

		static int get_TEXTURE_MIN_FILTER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_MIN_FILTER_dyn();

		static int get_TEXTURE_WRAP_S( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_WRAP_S_dyn();

		static int get_TEXTURE_WRAP_T( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_WRAP_T_dyn();

		static int get_TEXTURE_2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_2D_dyn();

		static int get_TEXTURE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_dyn();

		static int get_TEXTURE_CUBE_MAP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_dyn();

		static int get_TEXTURE_BINDING_CUBE_MAP( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_BINDING_CUBE_MAP_dyn();

		static int get_TEXTURE_CUBE_MAP_POSITIVE_X( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_POSITIVE_X_dyn();

		static int get_TEXTURE_CUBE_MAP_NEGATIVE_X( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_NEGATIVE_X_dyn();

		static int get_TEXTURE_CUBE_MAP_POSITIVE_Y( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_POSITIVE_Y_dyn();

		static int get_TEXTURE_CUBE_MAP_NEGATIVE_Y( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_NEGATIVE_Y_dyn();

		static int get_TEXTURE_CUBE_MAP_POSITIVE_Z( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_POSITIVE_Z_dyn();

		static int get_TEXTURE_CUBE_MAP_NEGATIVE_Z( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_CUBE_MAP_NEGATIVE_Z_dyn();

		static int get_MAX_CUBE_MAP_TEXTURE_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_CUBE_MAP_TEXTURE_SIZE_dyn();

		static int get_TEXTURE0( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE0_dyn();

		static int get_TEXTURE1( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE1_dyn();

		static int get_TEXTURE2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE2_dyn();

		static int get_TEXTURE3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE3_dyn();

		static int get_TEXTURE4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE4_dyn();

		static int get_TEXTURE5( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE5_dyn();

		static int get_TEXTURE6( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE6_dyn();

		static int get_TEXTURE7( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE7_dyn();

		static int get_TEXTURE8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE8_dyn();

		static int get_TEXTURE9( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE9_dyn();

		static int get_TEXTURE10( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE10_dyn();

		static int get_TEXTURE11( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE11_dyn();

		static int get_TEXTURE12( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE12_dyn();

		static int get_TEXTURE13( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE13_dyn();

		static int get_TEXTURE14( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE14_dyn();

		static int get_TEXTURE15( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE15_dyn();

		static int get_TEXTURE16( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE16_dyn();

		static int get_TEXTURE17( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE17_dyn();

		static int get_TEXTURE18( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE18_dyn();

		static int get_TEXTURE19( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE19_dyn();

		static int get_TEXTURE20( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE20_dyn();

		static int get_TEXTURE21( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE21_dyn();

		static int get_TEXTURE22( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE22_dyn();

		static int get_TEXTURE23( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE23_dyn();

		static int get_TEXTURE24( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE24_dyn();

		static int get_TEXTURE25( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE25_dyn();

		static int get_TEXTURE26( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE26_dyn();

		static int get_TEXTURE27( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE27_dyn();

		static int get_TEXTURE28( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE28_dyn();

		static int get_TEXTURE29( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE29_dyn();

		static int get_TEXTURE30( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE30_dyn();

		static int get_TEXTURE31( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE31_dyn();

		static int get_ACTIVE_TEXTURE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ACTIVE_TEXTURE_dyn();

		static int get_REPEAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_REPEAT_dyn();

		static int get_CLAMP_TO_EDGE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CLAMP_TO_EDGE_dyn();

		static int get_MIRRORED_REPEAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MIRRORED_REPEAT_dyn();

		static int get_FLOAT_VEC2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_VEC2_dyn();

		static int get_FLOAT_VEC3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_VEC3_dyn();

		static int get_FLOAT_VEC4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_VEC4_dyn();

		static int get_INT_VEC2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_VEC2_dyn();

		static int get_INT_VEC3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_VEC3_dyn();

		static int get_INT_VEC4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_VEC4_dyn();

		static int get_BOOL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BOOL_dyn();

		static int get_BOOL_VEC2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BOOL_VEC2_dyn();

		static int get_BOOL_VEC3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BOOL_VEC3_dyn();

		static int get_BOOL_VEC4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BOOL_VEC4_dyn();

		static int get_FLOAT_MAT2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT2_dyn();

		static int get_FLOAT_MAT3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT3_dyn();

		static int get_FLOAT_MAT4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT4_dyn();

		static int get_SAMPLER_2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_2D_dyn();

		static int get_SAMPLER_CUBE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_CUBE_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_ENABLED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_ENABLED_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_SIZE_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_STRIDE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_STRIDE_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_TYPE_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_NORMALIZED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_NORMALIZED_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_POINTER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_POINTER_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING_dyn();

		static int get_COMPILE_STATUS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COMPILE_STATUS_dyn();

		static int get_LOW_FLOAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LOW_FLOAT_dyn();

		static int get_MEDIUM_FLOAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MEDIUM_FLOAT_dyn();

		static int get_HIGH_FLOAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_HIGH_FLOAT_dyn();

		static int get_LOW_INT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_LOW_INT_dyn();

		static int get_MEDIUM_INT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MEDIUM_INT_dyn();

		static int get_HIGH_INT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_HIGH_INT_dyn();

		static int get_FRAMEBUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_dyn();

		static int get_RENDERBUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_dyn();

		static int get_RGBA4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA4_dyn();

		static int get_RGB5_A1( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB5_A1_dyn();

		static int get_RGB565( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB565_dyn();

		static int get_DEPTH_COMPONENT16( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_COMPONENT16_dyn();

		static int get_STENCIL_INDEX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_INDEX_dyn();

		static int get_STENCIL_INDEX8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_INDEX8_dyn();

		static int get_DEPTH_STENCIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_STENCIL_dyn();

		static int get_RENDERBUFFER_WIDTH( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_WIDTH_dyn();

		static int get_RENDERBUFFER_HEIGHT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_HEIGHT_dyn();

		static int get_RENDERBUFFER_INTERNAL_FORMAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_INTERNAL_FORMAT_dyn();

		static int get_RENDERBUFFER_RED_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_RED_SIZE_dyn();

		static int get_RENDERBUFFER_GREEN_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_GREEN_SIZE_dyn();

		static int get_RENDERBUFFER_BLUE_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_BLUE_SIZE_dyn();

		static int get_RENDERBUFFER_ALPHA_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_ALPHA_SIZE_dyn();

		static int get_RENDERBUFFER_DEPTH_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_DEPTH_SIZE_dyn();

		static int get_RENDERBUFFER_STENCIL_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_STENCIL_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_dyn();

		static int get_COLOR_ATTACHMENT0( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT0_dyn();

		static int get_DEPTH_ATTACHMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_ATTACHMENT_dyn();

		static int get_STENCIL_ATTACHMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_ATTACHMENT_dyn();

		static int get_DEPTH_STENCIL_ATTACHMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_STENCIL_ATTACHMENT_dyn();

		static int get_NONE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_NONE_dyn();

		static int get_FRAMEBUFFER_COMPLETE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_COMPLETE_dyn();

		static int get_FRAMEBUFFER_INCOMPLETE_ATTACHMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_dyn();

		static int get_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_dyn();

		static int get_FRAMEBUFFER_INCOMPLETE_DIMENSIONS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_dyn();

		static int get_FRAMEBUFFER_UNSUPPORTED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_UNSUPPORTED_dyn();

		static int get_FRAMEBUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_BINDING_dyn();

		static int get_RENDERBUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_BINDING_dyn();

		static int get_MAX_RENDERBUFFER_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_RENDERBUFFER_SIZE_dyn();

		static int get_INVALID_FRAMEBUFFER_OPERATION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVALID_FRAMEBUFFER_OPERATION_dyn();

		static int get_UNPACK_FLIP_Y_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_FLIP_Y_WEBGL_dyn();

		static int get_UNPACK_PREMULTIPLY_ALPHA_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_PREMULTIPLY_ALPHA_WEBGL_dyn();

		static int get_CONTEXT_LOST_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CONTEXT_LOST_WEBGL_dyn();

		static int get_UNPACK_COLORSPACE_CONVERSION_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_COLORSPACE_CONVERSION_WEBGL_dyn();

		static int get_BROWSER_DEFAULT_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_BROWSER_DEFAULT_WEBGL_dyn();

		static int get_READ_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_READ_BUFFER_dyn();

		static int get_UNPACK_ROW_LENGTH( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_ROW_LENGTH_dyn();

		static int get_UNPACK_SKIP_ROWS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_SKIP_ROWS_dyn();

		static int get_UNPACK_SKIP_PIXELS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_SKIP_PIXELS_dyn();

		static int get_PACK_ROW_LENGTH( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PACK_ROW_LENGTH_dyn();

		static int get_PACK_SKIP_ROWS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PACK_SKIP_ROWS_dyn();

		static int get_PACK_SKIP_PIXELS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PACK_SKIP_PIXELS_dyn();

		static int get_TEXTURE_BINDING_3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_BINDING_3D_dyn();

		static int get_UNPACK_SKIP_IMAGES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_SKIP_IMAGES_dyn();

		static int get_UNPACK_IMAGE_HEIGHT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNPACK_IMAGE_HEIGHT_dyn();

		static int get_MAX_3D_TEXTURE_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_3D_TEXTURE_SIZE_dyn();

		static int get_MAX_ELEMENTS_VERTICES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_ELEMENTS_VERTICES_dyn();

		static int get_MAX_ELEMENTS_INDICES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_ELEMENTS_INDICES_dyn();

		static int get_MAX_TEXTURE_LOD_BIAS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TEXTURE_LOD_BIAS_dyn();

		static int get_MAX_FRAGMENT_UNIFORM_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_FRAGMENT_UNIFORM_COMPONENTS_dyn();

		static int get_MAX_VERTEX_UNIFORM_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_UNIFORM_COMPONENTS_dyn();

		static int get_MAX_ARRAY_TEXTURE_LAYERS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_ARRAY_TEXTURE_LAYERS_dyn();

		static int get_MIN_PROGRAM_TEXEL_OFFSET( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MIN_PROGRAM_TEXEL_OFFSET_dyn();

		static int get_MAX_PROGRAM_TEXEL_OFFSET( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_PROGRAM_TEXEL_OFFSET_dyn();

		static int get_MAX_VARYING_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VARYING_COMPONENTS_dyn();

		static int get_FRAGMENT_SHADER_DERIVATIVE_HINT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAGMENT_SHADER_DERIVATIVE_HINT_dyn();

		static int get_RASTERIZER_DISCARD( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RASTERIZER_DISCARD_dyn();

		static int get_VERTEX_ARRAY_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ARRAY_BINDING_dyn();

		static int get_MAX_VERTEX_OUTPUT_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_OUTPUT_COMPONENTS_dyn();

		static int get_MAX_FRAGMENT_INPUT_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_FRAGMENT_INPUT_COMPONENTS_dyn();

		static int get_MAX_SERVER_WAIT_TIMEOUT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_SERVER_WAIT_TIMEOUT_dyn();

		static int get_MAX_ELEMENT_INDEX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_ELEMENT_INDEX_dyn();

		static int get_RED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RED_dyn();

		static int get_RGB8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB8_dyn();

		static int get_RGBA8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA8_dyn();

		static int get_RGB10_A2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB10_A2_dyn();

		static int get_TEXTURE_3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_3D_dyn();

		static int get_TEXTURE_WRAP_R( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_WRAP_R_dyn();

		static int get_TEXTURE_MIN_LOD( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_MIN_LOD_dyn();

		static int get_TEXTURE_MAX_LOD( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_MAX_LOD_dyn();

		static int get_TEXTURE_BASE_LEVEL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_BASE_LEVEL_dyn();

		static int get_TEXTURE_MAX_LEVEL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_MAX_LEVEL_dyn();

		static int get_TEXTURE_COMPARE_MODE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_COMPARE_MODE_dyn();

		static int get_TEXTURE_COMPARE_FUNC( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_COMPARE_FUNC_dyn();

		static int get_SRGB( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRGB_dyn();

		static int get_SRGB8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRGB8_dyn();

		static int get_SRGB8_ALPHA8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SRGB8_ALPHA8_dyn();

		static int get_COMPARE_REF_TO_TEXTURE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COMPARE_REF_TO_TEXTURE_dyn();

		static int get_RGBA32F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA32F_dyn();

		static int get_RGB32F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB32F_dyn();

		static int get_RGBA16F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA16F_dyn();

		static int get_RGB16F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB16F_dyn();

		static int get_TEXTURE_2D_ARRAY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_2D_ARRAY_dyn();

		static int get_TEXTURE_BINDING_2D_ARRAY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_BINDING_2D_ARRAY_dyn();

		static int get_R11F_G11F_B10F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R11F_G11F_B10F_dyn();

		static int get_RGB9_E5( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB9_E5_dyn();

		static int get_RGBA32UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA32UI_dyn();

		static int get_RGB32UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB32UI_dyn();

		static int get_RGBA16UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA16UI_dyn();

		static int get_RGB16UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB16UI_dyn();

		static int get_RGBA8UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA8UI_dyn();

		static int get_RGB8UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB8UI_dyn();

		static int get_RGBA32I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA32I_dyn();

		static int get_RGB32I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB32I_dyn();

		static int get_RGBA16I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA16I_dyn();

		static int get_RGB16I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB16I_dyn();

		static int get_RGBA8I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA8I_dyn();

		static int get_RGB8I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB8I_dyn();

		static int get_RED_INTEGER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RED_INTEGER_dyn();

		static int get_RGB_INTEGER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB_INTEGER_dyn();

		static int get_RGBA_INTEGER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA_INTEGER_dyn();

		static int get_R8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R8_dyn();

		static int get_RG8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG8_dyn();

		static int get_R16F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R16F_dyn();

		static int get_R32F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R32F_dyn();

		static int get_RG16F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG16F_dyn();

		static int get_RG32F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG32F_dyn();

		static int get_R8I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R8I_dyn();

		static int get_R8UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R8UI_dyn();

		static int get_R16I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R16I_dyn();

		static int get_R16UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R16UI_dyn();

		static int get_R32I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R32I_dyn();

		static int get_R32UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R32UI_dyn();

		static int get_RG8I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG8I_dyn();

		static int get_RG8UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG8UI_dyn();

		static int get_RG16I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG16I_dyn();

		static int get_RG16UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG16UI_dyn();

		static int get_RG32I( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG32I_dyn();

		static int get_RG32UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG32UI_dyn();

		static int get_R8_SNORM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_R8_SNORM_dyn();

		static int get_RG8_SNORM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG8_SNORM_dyn();

		static int get_RGB8_SNORM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB8_SNORM_dyn();

		static int get_RGBA8_SNORM( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGBA8_SNORM_dyn();

		static int get_RGB10_A2UI( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RGB10_A2UI_dyn();

		static int get_TEXTURE_IMMUTABLE_FORMAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_IMMUTABLE_FORMAT_dyn();

		static int get_TEXTURE_IMMUTABLE_LEVELS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TEXTURE_IMMUTABLE_LEVELS_dyn();

		static int get_UNSIGNED_INT_2_10_10_10_REV( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_2_10_10_10_REV_dyn();

		static int get_UNSIGNED_INT_10F_11F_11F_REV( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_10F_11F_11F_REV_dyn();

		static int get_UNSIGNED_INT_5_9_9_9_REV( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_5_9_9_9_REV_dyn();

		static int get_FLOAT_32_UNSIGNED_INT_24_8_REV( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_32_UNSIGNED_INT_24_8_REV_dyn();

		static int get_UNSIGNED_INT_24_8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_24_8_dyn();

		static int get_HALF_FLOAT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_HALF_FLOAT_dyn();

		static int get_RG( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG_dyn();

		static int get_RG_INTEGER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RG_INTEGER_dyn();

		static int get_INT_2_10_10_10_REV( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_2_10_10_10_REV_dyn();

		static int get_CURRENT_QUERY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CURRENT_QUERY_dyn();

		static int get_QUERY_RESULT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_QUERY_RESULT_dyn();

		static int get_QUERY_RESULT_AVAILABLE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_QUERY_RESULT_AVAILABLE_dyn();

		static int get_ANY_SAMPLES_PASSED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ANY_SAMPLES_PASSED_dyn();

		static int get_ANY_SAMPLES_PASSED_CONSERVATIVE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ANY_SAMPLES_PASSED_CONSERVATIVE_dyn();

		static int get_MAX_DRAW_BUFFERS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_DRAW_BUFFERS_dyn();

		static int get_DRAW_BUFFER0( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER0_dyn();

		static int get_DRAW_BUFFER1( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER1_dyn();

		static int get_DRAW_BUFFER2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER2_dyn();

		static int get_DRAW_BUFFER3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER3_dyn();

		static int get_DRAW_BUFFER4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER4_dyn();

		static int get_DRAW_BUFFER5( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER5_dyn();

		static int get_DRAW_BUFFER6( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER6_dyn();

		static int get_DRAW_BUFFER7( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER7_dyn();

		static int get_DRAW_BUFFER8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER8_dyn();

		static int get_DRAW_BUFFER9( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER9_dyn();

		static int get_DRAW_BUFFER10( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER10_dyn();

		static int get_DRAW_BUFFER11( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER11_dyn();

		static int get_DRAW_BUFFER12( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER12_dyn();

		static int get_DRAW_BUFFER13( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER13_dyn();

		static int get_DRAW_BUFFER14( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER14_dyn();

		static int get_DRAW_BUFFER15( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_BUFFER15_dyn();

		static int get_MAX_COLOR_ATTACHMENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_COLOR_ATTACHMENTS_dyn();

		static int get_COLOR_ATTACHMENT1( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT1_dyn();

		static int get_COLOR_ATTACHMENT2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT2_dyn();

		static int get_COLOR_ATTACHMENT3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT3_dyn();

		static int get_COLOR_ATTACHMENT4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT4_dyn();

		static int get_COLOR_ATTACHMENT5( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT5_dyn();

		static int get_COLOR_ATTACHMENT6( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT6_dyn();

		static int get_COLOR_ATTACHMENT7( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT7_dyn();

		static int get_COLOR_ATTACHMENT8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT8_dyn();

		static int get_COLOR_ATTACHMENT9( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT9_dyn();

		static int get_COLOR_ATTACHMENT10( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT10_dyn();

		static int get_COLOR_ATTACHMENT11( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT11_dyn();

		static int get_COLOR_ATTACHMENT12( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT12_dyn();

		static int get_COLOR_ATTACHMENT13( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT13_dyn();

		static int get_COLOR_ATTACHMENT14( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT14_dyn();

		static int get_COLOR_ATTACHMENT15( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_ATTACHMENT15_dyn();

		static int get_SAMPLER_3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_3D_dyn();

		static int get_SAMPLER_2D_SHADOW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_2D_SHADOW_dyn();

		static int get_SAMPLER_2D_ARRAY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_2D_ARRAY_dyn();

		static int get_SAMPLER_2D_ARRAY_SHADOW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_2D_ARRAY_SHADOW_dyn();

		static int get_SAMPLER_CUBE_SHADOW( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_CUBE_SHADOW_dyn();

		static int get_INT_SAMPLER_2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_SAMPLER_2D_dyn();

		static int get_INT_SAMPLER_3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_SAMPLER_3D_dyn();

		static int get_INT_SAMPLER_CUBE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_SAMPLER_CUBE_dyn();

		static int get_INT_SAMPLER_2D_ARRAY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INT_SAMPLER_2D_ARRAY_dyn();

		static int get_UNSIGNED_INT_SAMPLER_2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_SAMPLER_2D_dyn();

		static int get_UNSIGNED_INT_SAMPLER_3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_SAMPLER_3D_dyn();

		static int get_UNSIGNED_INT_SAMPLER_CUBE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_SAMPLER_CUBE_dyn();

		static int get_UNSIGNED_INT_SAMPLER_2D_ARRAY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_SAMPLER_2D_ARRAY_dyn();

		static int get_MAX_SAMPLES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_SAMPLES_dyn();

		static int get_SAMPLER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SAMPLER_BINDING_dyn();

		static int get_PIXEL_PACK_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PIXEL_PACK_BUFFER_dyn();

		static int get_PIXEL_UNPACK_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PIXEL_UNPACK_BUFFER_dyn();

		static int get_PIXEL_PACK_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PIXEL_PACK_BUFFER_BINDING_dyn();

		static int get_PIXEL_UNPACK_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_PIXEL_UNPACK_BUFFER_BINDING_dyn();

		static int get_COPY_READ_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COPY_READ_BUFFER_dyn();

		static int get_COPY_WRITE_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COPY_WRITE_BUFFER_dyn();

		static int get_COPY_READ_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COPY_READ_BUFFER_BINDING_dyn();

		static int get_COPY_WRITE_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COPY_WRITE_BUFFER_BINDING_dyn();

		static int get_FLOAT_MAT2x3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT2x3_dyn();

		static int get_FLOAT_MAT2x4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT2x4_dyn();

		static int get_FLOAT_MAT3x2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT3x2_dyn();

		static int get_FLOAT_MAT3x4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT3x4_dyn();

		static int get_FLOAT_MAT4x2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT4x2_dyn();

		static int get_FLOAT_MAT4x3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FLOAT_MAT4x3_dyn();

		static int get_UNSIGNED_INT_VEC2( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_VEC2_dyn();

		static int get_UNSIGNED_INT_VEC3( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_VEC3_dyn();

		static int get_UNSIGNED_INT_VEC4( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_INT_VEC4_dyn();

		static int get_UNSIGNED_NORMALIZED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNED_NORMALIZED_dyn();

		static int get_SIGNED_NORMALIZED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SIGNED_NORMALIZED_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_INTEGER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_INTEGER_dyn();

		static int get_VERTEX_ATTRIB_ARRAY_DIVISOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_VERTEX_ATTRIB_ARRAY_DIVISOR_dyn();

		static int get_TRANSFORM_FEEDBACK_BUFFER_MODE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BUFFER_MODE_dyn();

		static int get_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS_dyn();

		static int get_TRANSFORM_FEEDBACK_VARYINGS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_VARYINGS_dyn();

		static int get_TRANSFORM_FEEDBACK_BUFFER_START( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BUFFER_START_dyn();

		static int get_TRANSFORM_FEEDBACK_BUFFER_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BUFFER_SIZE_dyn();

		static int get_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN_dyn();

		static int get_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS_dyn();

		static int get_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS_dyn();

		static int get_INTERLEAVED_ATTRIBS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INTERLEAVED_ATTRIBS_dyn();

		static int get_SEPARATE_ATTRIBS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SEPARATE_ATTRIBS_dyn();

		static int get_TRANSFORM_FEEDBACK_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BUFFER_dyn();

		static int get_TRANSFORM_FEEDBACK_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BUFFER_BINDING_dyn();

		static int get_TRANSFORM_FEEDBACK( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_dyn();

		static int get_TRANSFORM_FEEDBACK_PAUSED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_PAUSED_dyn();

		static int get_TRANSFORM_FEEDBACK_ACTIVE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_ACTIVE_dyn();

		static int get_TRANSFORM_FEEDBACK_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TRANSFORM_FEEDBACK_BINDING_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_RED_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_RED_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE_dyn();

		static int get_FRAMEBUFFER_DEFAULT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_DEFAULT_dyn();

		static int get_DEPTH24_STENCIL8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH24_STENCIL8_dyn();

		static int get_DRAW_FRAMEBUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_FRAMEBUFFER_BINDING_dyn();

		static int get_READ_FRAMEBUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_READ_FRAMEBUFFER_dyn();

		static int get_DRAW_FRAMEBUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DRAW_FRAMEBUFFER_dyn();

		static int get_READ_FRAMEBUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_READ_FRAMEBUFFER_BINDING_dyn();

		static int get_RENDERBUFFER_SAMPLES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_RENDERBUFFER_SAMPLES_dyn();

		static int get_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER_dyn();

		static int get_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE_dyn();

		static int get_UNIFORM_BUFFER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BUFFER_dyn();

		static int get_UNIFORM_BUFFER_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BUFFER_BINDING_dyn();

		static int get_UNIFORM_BUFFER_START( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BUFFER_START_dyn();

		static int get_UNIFORM_BUFFER_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BUFFER_SIZE_dyn();

		static int get_MAX_VERTEX_UNIFORM_BLOCKS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_VERTEX_UNIFORM_BLOCKS_dyn();

		static int get_MAX_FRAGMENT_UNIFORM_BLOCKS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_FRAGMENT_UNIFORM_BLOCKS_dyn();

		static int get_MAX_COMBINED_UNIFORM_BLOCKS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_COMBINED_UNIFORM_BLOCKS_dyn();

		static int get_MAX_UNIFORM_BUFFER_BINDINGS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_UNIFORM_BUFFER_BINDINGS_dyn();

		static int get_MAX_UNIFORM_BLOCK_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_UNIFORM_BLOCK_SIZE_dyn();

		static int get_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS_dyn();

		static int get_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS_dyn();

		static int get_UNIFORM_BUFFER_OFFSET_ALIGNMENT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BUFFER_OFFSET_ALIGNMENT_dyn();

		static int get_ACTIVE_UNIFORM_BLOCKS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ACTIVE_UNIFORM_BLOCKS_dyn();

		static int get_UNIFORM_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_TYPE_dyn();

		static int get_UNIFORM_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_SIZE_dyn();

		static int get_UNIFORM_BLOCK_INDEX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_INDEX_dyn();

		static int get_UNIFORM_OFFSET( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_OFFSET_dyn();

		static int get_UNIFORM_ARRAY_STRIDE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_ARRAY_STRIDE_dyn();

		static int get_UNIFORM_MATRIX_STRIDE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_MATRIX_STRIDE_dyn();

		static int get_UNIFORM_IS_ROW_MAJOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_IS_ROW_MAJOR_dyn();

		static int get_UNIFORM_BLOCK_BINDING( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_BINDING_dyn();

		static int get_UNIFORM_BLOCK_DATA_SIZE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_DATA_SIZE_dyn();

		static int get_UNIFORM_BLOCK_ACTIVE_UNIFORMS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_ACTIVE_UNIFORMS_dyn();

		static int get_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES_dyn();

		static int get_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER_dyn();

		static int get_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER_dyn();

		static int get_OBJECT_TYPE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_OBJECT_TYPE_dyn();

		static int get_SYNC_CONDITION( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_CONDITION_dyn();

		static int get_SYNC_STATUS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_STATUS_dyn();

		static int get_SYNC_FLAGS( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_FLAGS_dyn();

		static int get_SYNC_FENCE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_FENCE_dyn();

		static int get_SYNC_GPU_COMMANDS_COMPLETE( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_GPU_COMMANDS_COMPLETE_dyn();

		static int get_UNSIGNALED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_UNSIGNALED_dyn();

		static int get_SIGNALED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SIGNALED_dyn();

		static int get_ALREADY_SIGNALED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_ALREADY_SIGNALED_dyn();

		static int get_TIMEOUT_EXPIRED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TIMEOUT_EXPIRED_dyn();

		static int get_CONDITION_SATISFIED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_CONDITION_SATISFIED_dyn();

		static int get_WAIT_FAILED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_WAIT_FAILED_dyn();

		static int get_SYNC_FLUSH_COMMANDS_BIT( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_SYNC_FLUSH_COMMANDS_BIT_dyn();

		static int get_COLOR( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_COLOR_dyn();

		static int get_DEPTH( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_dyn();

		static int get_STENCIL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STENCIL_dyn();

		static int get_MIN( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MIN_dyn();

		static int get_MAX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_dyn();

		static int get_DEPTH_COMPONENT24( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_COMPONENT24_dyn();

		static int get_STREAM_READ( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STREAM_READ_dyn();

		static int get_STREAM_COPY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STREAM_COPY_dyn();

		static int get_STATIC_READ( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STATIC_READ_dyn();

		static int get_STATIC_COPY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_STATIC_COPY_dyn();

		static int get_DYNAMIC_READ( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DYNAMIC_READ_dyn();

		static int get_DYNAMIC_COPY( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DYNAMIC_COPY_dyn();

		static int get_DEPTH_COMPONENT32F( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH_COMPONENT32F_dyn();

		static int get_DEPTH32F_STENCIL8( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_DEPTH32F_STENCIL8_dyn();

		static int get_INVALID_INDEX( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_INVALID_INDEX_dyn();

		static int get_TIMEOUT_IGNORED( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_TIMEOUT_IGNORED_dyn();

		static int get_MAX_CLIENT_WAIT_TIMEOUT_WEBGL( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic get_MAX_CLIENT_WAIT_TIMEOUT_WEBGL_dyn();

		static void activeTexture( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int texture);
		static ::Dynamic activeTexture_dyn();

		static void attachShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic attachShader_dyn();

		static void beginQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject query);
		static ::Dynamic beginQuery_dyn();

		static void beginTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int primitiveNode);
		static ::Dynamic beginTransformFeedback_dyn();

		static void bindAttribLocation( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int index,::String name);
		static ::Dynamic bindAttribLocation_dyn();

		static void bindBuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject buffer);
		static ::Dynamic bindBuffer_dyn();

		static void bindBufferBase( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int index, ::lime::graphics::opengl::GLObject buffer);
		static ::Dynamic bindBufferBase_dyn();

		static void bindBufferRange( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int index, ::lime::graphics::opengl::GLObject buffer,Float offset,int size);
		static ::Dynamic bindBufferRange_dyn();

		static void bindFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject framebuffer);
		static ::Dynamic bindFramebuffer_dyn();

		static void bindRenderbuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject renderbuffer);
		static ::Dynamic bindRenderbuffer_dyn();

		static void bindSampler( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int unit, ::lime::graphics::opengl::GLObject sampler);
		static ::Dynamic bindSampler_dyn();

		static void bindTexture( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject texture);
		static ::Dynamic bindTexture_dyn();

		static void bindTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::graphics::opengl::GLObject transformFeedback);
		static ::Dynamic bindTransformFeedback_dyn();

		static void bindVertexArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject vertexArray);
		static ::Dynamic bindVertexArray_dyn();

		static void blendColor( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float red,Float green,Float blue,Float alpha);
		static ::Dynamic blendColor_dyn();

		static void blendEquation( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode);
		static ::Dynamic blendEquation_dyn();

		static void blendEquationSeparate( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int modeRGB,int modeAlpha);
		static ::Dynamic blendEquationSeparate_dyn();

		static void blendFunc( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int sfactor,int dfactor);
		static ::Dynamic blendFunc_dyn();

		static void blendFuncSeparate( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int srcRGB,int dstRGB,int srcAlpha,int dstAlpha);
		static ::Dynamic blendFuncSeparate_dyn();

		static void blitFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int srcX0,int srcY0,int srcX1,int srcY1,int dstX0,int dstY0,int dstX1,int dstY1,int mask,int filter);
		static ::Dynamic blitFramebuffer_dyn();

		static void bufferData( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target, ::lime::utils::ArrayBufferView srcData,int usage,::hx::Null< int >  srcOffset,::hx::Null< int >  length);
		static ::Dynamic bufferData_dyn();

		static void bufferSubData( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int offset, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset, ::Dynamic length);
		static ::Dynamic bufferSubData_dyn();

		static int checkFramebufferStatus( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target);
		static ::Dynamic checkFramebufferStatus_dyn();

		static void clear( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mask);
		static ::Dynamic clear_dyn();

		static void clearBufferfi( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int buffer,int drawbuffer,Float depth,int stencil);
		static ::Dynamic clearBufferfi_dyn();

		static void clearBufferfv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int buffer,int drawbuffer, ::lime::utils::ArrayBufferView values,::hx::Null< int >  srcOffset);
		static ::Dynamic clearBufferfv_dyn();

		static void clearBufferiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int buffer,int drawbuffer, ::lime::utils::ArrayBufferView values, ::Dynamic srcOffset);
		static ::Dynamic clearBufferiv_dyn();

		static void clearBufferuiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int buffer,int drawbuffer, ::lime::utils::ArrayBufferView values, ::Dynamic srcOffset);
		static ::Dynamic clearBufferuiv_dyn();

		static void clearColor( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float red,Float green,Float blue,Float alpha);
		static ::Dynamic clearColor_dyn();

		static void clearDepth( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float depth);
		static ::Dynamic clearDepth_dyn();

		static void clearStencil( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int s);
		static ::Dynamic clearStencil_dyn();

		static int clientWaitSync( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::Dynamic sync,int flags, cpp::Int64Struct timeout);
		static ::Dynamic clientWaitSync_dyn();

		static void colorMask( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,bool red,bool green,bool blue,bool alpha);
		static ::Dynamic colorMask_dyn();

		static void compileShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic compileShader_dyn();

		static void compressedTexImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height,int border, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset, ::Dynamic srcLengthOverride);
		static ::Dynamic compressedTexImage2D_dyn();

		static void compressedTexImage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height,int depth,int border, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset, ::Dynamic srcLengthOverride);
		static ::Dynamic compressedTexImage3D_dyn();

		static void compressedTexSubImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int width,int height,int format, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset, ::Dynamic srcLengthOverride);
		static ::Dynamic compressedTexSubImage2D_dyn();

		static void compressedTexSubImage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int zoffset,int width,int height,int depth,int format, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset, ::Dynamic srcLengthOverride);
		static ::Dynamic compressedTexSubImage3D_dyn();

		static void copyBufferSubData( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int readTarget,int writeTarget,Float readOffset,Float writeOffset,int size);
		static ::Dynamic copyBufferSubData_dyn();

		static void copyTexImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int x,int y,int width,int height,int border);
		static ::Dynamic copyTexImage2D_dyn();

		static void copyTexSubImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int x,int y,int width,int height);
		static ::Dynamic copyTexSubImage2D_dyn();

		static void copyTexSubImage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int zoffset,int x,int y,int width,int height);
		static ::Dynamic copyTexSubImage3D_dyn();

		static  ::lime::graphics::opengl::GLObject createBuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createBuffer_dyn();

		static  ::lime::graphics::opengl::GLObject createFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createFramebuffer_dyn();

		static  ::lime::graphics::opengl::GLObject createProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createProgram_dyn();

		static  ::lime::graphics::opengl::GLObject createQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createQuery_dyn();

		static  ::lime::graphics::opengl::GLObject createRenderbuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createRenderbuffer_dyn();

		static  ::lime::graphics::opengl::GLObject createSampler( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createSampler_dyn();

		static  ::lime::graphics::opengl::GLObject createShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int type);
		static ::Dynamic createShader_dyn();

		static  ::lime::graphics::opengl::GLObject createTexture( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createTexture_dyn();

		static  ::lime::graphics::opengl::GLObject createTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createTransformFeedback_dyn();

		static  ::lime::graphics::opengl::GLObject createVertexArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic createVertexArray_dyn();

		static void cullFace( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode);
		static ::Dynamic cullFace_dyn();

		static void deleteBuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject buffer);
		static ::Dynamic deleteBuffer_dyn();

		static void deleteFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject framebuffer);
		static ::Dynamic deleteFramebuffer_dyn();

		static void deleteProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic deleteProgram_dyn();

		static void deleteQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject query);
		static ::Dynamic deleteQuery_dyn();

		static void deleteRenderbuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject renderbuffer);
		static ::Dynamic deleteRenderbuffer_dyn();

		static void deleteSampler( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject sampler);
		static ::Dynamic deleteSampler_dyn();

		static void deleteShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic deleteShader_dyn();

		static void deleteSync( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::Dynamic sync);
		static ::Dynamic deleteSync_dyn();

		static void deleteTexture( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject texture);
		static ::Dynamic deleteTexture_dyn();

		static void deleteTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject transformFeedback);
		static ::Dynamic deleteTransformFeedback_dyn();

		static void deleteVertexArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject vertexArray);
		static ::Dynamic deleteVertexArray_dyn();

		static void depthFunc( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int func);
		static ::Dynamic depthFunc_dyn();

		static void depthMask( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,bool flag);
		static ::Dynamic depthMask_dyn();

		static void depthRange( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float zNear,Float zFar);
		static ::Dynamic depthRange_dyn();

		static void detachShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic detachShader_dyn();

		static void disable( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int cap);
		static ::Dynamic disable_dyn();

		static void disableVertexAttribArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index);
		static ::Dynamic disableVertexAttribArray_dyn();

		static void drawArrays( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode,int first,int count);
		static ::Dynamic drawArrays_dyn();

		static void drawArraysInstanced( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode,int first,int count,int instanceCount);
		static ::Dynamic drawArraysInstanced_dyn();

		static void drawBuffers( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,::Array< int > buffers);
		static ::Dynamic drawBuffers_dyn();

		static void drawElements( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode,int count,int type,Float offset);
		static ::Dynamic drawElements_dyn();

		static void drawElementsInstanced( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode,int count,int type,Float offset,int instanceCount);
		static ::Dynamic drawElementsInstanced_dyn();

		static void drawRangeElements( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode,int start,int end,int count,int type,Float offset);
		static ::Dynamic drawRangeElements_dyn();

		static void enable( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int cap);
		static ::Dynamic enable_dyn();

		static void enableVertexAttribArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index);
		static ::Dynamic enableVertexAttribArray_dyn();

		static void endQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target);
		static ::Dynamic endQuery_dyn();

		static void endTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic endTransformFeedback_dyn();

		static  ::Dynamic fenceSync( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int condition,int flags);
		static ::Dynamic fenceSync_dyn();

		static void finish( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic finish_dyn();

		static void flush( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic flush_dyn();

		static void framebufferRenderbuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int attachment,int renderbuffertarget, ::lime::graphics::opengl::GLObject renderbuffer);
		static ::Dynamic framebufferRenderbuffer_dyn();

		static void framebufferTexture2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int attachment,int textarget, ::lime::graphics::opengl::GLObject texture,int level);
		static ::Dynamic framebufferTexture2D_dyn();

		static void framebufferTextureLayer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int attachment, ::lime::graphics::opengl::GLObject texture,int level,int layer);
		static ::Dynamic framebufferTextureLayer_dyn();

		static void frontFace( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mode);
		static ::Dynamic frontFace_dyn();

		static void generateMipmap( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target);
		static ::Dynamic generateMipmap_dyn();

		static  ::Dynamic getActiveAttrib( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int index);
		static ::Dynamic getActiveAttrib_dyn();

		static  ::Dynamic getActiveUniform( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int index);
		static ::Dynamic getActiveUniform_dyn();

		static ::String getActiveUniformBlockName( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int uniformBlockIndex);
		static ::Dynamic getActiveUniformBlockName_dyn();

		static  ::Dynamic getActiveUniformBlockParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int uniformBlockIndex,int pname);
		static ::Dynamic getActiveUniformBlockParameter_dyn();

		static  ::Dynamic getActiveUniforms( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::Array< int > uniformIndices,int pname);
		static ::Dynamic getActiveUniforms_dyn();

		static ::Array< ::Dynamic> getAttachedShaders( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic getAttachedShaders_dyn();

		static int getAttribLocation( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::String name);
		static ::Dynamic getAttribLocation_dyn();

		static  ::Dynamic getBufferParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname);
		static ::Dynamic getBufferParameter_dyn();

		static void getBufferSubData( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,Float srcByteOffset, ::haxe::io::Bytes dstData,::hx::Null< int >  srcOffset, ::Dynamic length);
		static ::Dynamic getBufferSubData_dyn();

		static  ::Dynamic getContextAttributes( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic getContextAttributes_dyn();

		static int getError( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic getError_dyn();

		static  ::Dynamic getExtension( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,::String name);
		static ::Dynamic getExtension_dyn();

		static int getFragDataLocation( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::String name);
		static ::Dynamic getFragDataLocation_dyn();

		static  ::Dynamic getFramebufferAttachmentParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int attachment,int pname);
		static ::Dynamic getFramebufferAttachmentParameter_dyn();

		static  ::Dynamic getIndexedParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int index);
		static ::Dynamic getIndexedParameter_dyn();

		static  ::Dynamic getInternalformatParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int internalformat,int pname);
		static ::Dynamic getInternalformatParameter_dyn();

		static  ::Dynamic getParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int pname);
		static ::Dynamic getParameter_dyn();

		static ::String getProgramInfoLog( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic getProgramInfoLog_dyn();

		static  ::Dynamic getProgramParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int pname);
		static ::Dynamic getProgramParameter_dyn();

		static  ::lime::graphics::opengl::GLObject getQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname);
		static ::Dynamic getQuery_dyn();

		static  ::Dynamic getQueryParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject query,int pname);
		static ::Dynamic getQueryParameter_dyn();

		static  ::Dynamic getRenderbufferParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname);
		static ::Dynamic getRenderbufferParameter_dyn();

		static  ::Dynamic getSamplerParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject sampler,int pname);
		static ::Dynamic getSamplerParameter_dyn();

		static ::String getShaderInfoLog( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic getShaderInfoLog_dyn();

		static  ::Dynamic getShaderParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader,int pname);
		static ::Dynamic getShaderParameter_dyn();

		static  ::Dynamic getShaderPrecisionFormat( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int shadertype,int precisiontype);
		static ::Dynamic getShaderPrecisionFormat_dyn();

		static ::String getShaderSource( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic getShaderSource_dyn();

		static ::Array< ::String > getSupportedExtensions( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic getSupportedExtensions_dyn();

		static  ::Dynamic getSyncParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::Dynamic sync,int pname);
		static ::Dynamic getSyncParameter_dyn();

		static  ::Dynamic getTexParameter( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname);
		static ::Dynamic getTexParameter_dyn();

		static  ::Dynamic getTransformFeedbackVarying( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int index);
		static ::Dynamic getTransformFeedbackVarying_dyn();

		static  ::Dynamic getUniform( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int location);
		static ::Dynamic getUniform_dyn();

		static int getUniformBlockIndex( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::String uniformBlockName);
		static ::Dynamic getUniformBlockIndex_dyn();

		static ::Array< int > getUniformIndices( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::Array< ::String > uniformNames);
		static ::Dynamic getUniformIndices_dyn();

		static int getUniformLocation( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::String name);
		static ::Dynamic getUniformLocation_dyn();

		static  ::Dynamic getVertexAttrib( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index,int pname);
		static ::Dynamic getVertexAttrib_dyn();

		static Float getVertexAttribOffset( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index,int pname);
		static ::Dynamic getVertexAttribOffset_dyn();

		static void hint( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int mode);
		static ::Dynamic hint_dyn();

		static void invalidateFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,::Array< int > attachments);
		static ::Dynamic invalidateFramebuffer_dyn();

		static void invalidateSubFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,::Array< int > attachments,int x,int y,int width,int height);
		static ::Dynamic invalidateSubFramebuffer_dyn();

		static bool isBuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject buffer);
		static ::Dynamic isBuffer_dyn();

		static bool isContextLost( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic isContextLost_dyn();

		static bool isEnabled( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int cap);
		static ::Dynamic isEnabled_dyn();

		static bool isFramebuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject framebuffer);
		static ::Dynamic isFramebuffer_dyn();

		static bool isProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic isProgram_dyn();

		static bool isQuery( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject query);
		static ::Dynamic isQuery_dyn();

		static bool isRenderbuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject renderbuffer);
		static ::Dynamic isRenderbuffer_dyn();

		static bool isSampler( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject sampler);
		static ::Dynamic isSampler_dyn();

		static bool isShader( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader);
		static ::Dynamic isShader_dyn();

		static bool isSync( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::Dynamic sync);
		static ::Dynamic isSync_dyn();

		static bool isTexture( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject texture);
		static ::Dynamic isTexture_dyn();

		static bool isTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject transformFeedback);
		static ::Dynamic isTransformFeedback_dyn();

		static bool isVertexArray( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject vertexArray);
		static ::Dynamic isVertexArray_dyn();

		static void lineWidth( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float width);
		static ::Dynamic lineWidth_dyn();

		static void linkProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic linkProgram_dyn();

		static void pauseTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic pauseTransformFeedback_dyn();

		static void pixelStorei( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int pname,int param);
		static ::Dynamic pixelStorei_dyn();

		static void polygonOffset( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float factor,Float units);
		static ::Dynamic polygonOffset_dyn();

		static void readBuffer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int src);
		static ::Dynamic readBuffer_dyn();

		static void readPixels( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int x,int y,int width,int height,int format,int type, ::lime::utils::ArrayBufferView pixels,::hx::Null< int >  dstOffset);
		static ::Dynamic readPixels_dyn();

		static void renderbufferStorage( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int internalformat,int width,int height);
		static ::Dynamic renderbufferStorage_dyn();

		static void renderbufferStorageMultisample( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int samples,int internalformat,int width,int height);
		static ::Dynamic renderbufferStorageMultisample_dyn();

		static void resumeTransformFeedback( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1);
		static ::Dynamic resumeTransformFeedback_dyn();

		static void sampleCoverage( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,Float value,bool invert);
		static ::Dynamic sampleCoverage_dyn();

		static void samplerParameterf( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject sampler,int pname,Float param);
		static ::Dynamic samplerParameterf_dyn();

		static void samplerParameteri( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject sampler,int pname,int param);
		static ::Dynamic samplerParameteri_dyn();

		static void scissor( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int x,int y,int width,int height);
		static ::Dynamic scissor_dyn();

		static void shaderSource( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject shader,::String source);
		static ::Dynamic shaderSource_dyn();

		static void stencilFunc( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int func,int ref,int mask);
		static ::Dynamic stencilFunc_dyn();

		static void stencilFuncSeparate( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int face,int func,int ref,int mask);
		static ::Dynamic stencilFuncSeparate_dyn();

		static void stencilMask( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int mask);
		static ::Dynamic stencilMask_dyn();

		static void stencilMaskSeparate( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int face,int mask);
		static ::Dynamic stencilMaskSeparate_dyn();

		static void stencilOp( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int fail,int zfail,int zpass);
		static ::Dynamic stencilOp_dyn();

		static void stencilOpSeparate( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int face,int fail,int zfail,int zpass);
		static ::Dynamic stencilOpSeparate_dyn();

		static void texImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height,int border,int format,int type, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset);
		static ::Dynamic texImage2D_dyn();

		static void texImage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height,int depth,int border,int format,int type, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset);
		static ::Dynamic texImage3D_dyn();

		static void texStorage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height);
		static ::Dynamic texStorage2D_dyn();

		static void texStorage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int internalformat,int width,int height,int depth);
		static ::Dynamic texStorage3D_dyn();

		static void texParameterf( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname,Float param);
		static ::Dynamic texParameterf_dyn();

		static void texParameteri( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int pname,int param);
		static ::Dynamic texParameteri_dyn();

		static void texSubImage2D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int width,int height,int format,int type, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset);
		static ::Dynamic texSubImage2D_dyn();

		static void texSubImage3D( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int target,int level,int xoffset,int yoffset,int zoffset,int width,int height,int depth,int format,int type, ::lime::utils::ArrayBufferView srcData,::hx::Null< int >  srcOffset);
		static ::Dynamic texSubImage3D_dyn();

		static void transformFeedbackVaryings( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,::Array< ::String > varyings,int bufferMode);
		static ::Dynamic transformFeedbackVaryings_dyn();

		static void uniform1f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,Float v0);
		static ::Dynamic uniform1f_dyn();

		static void uniform1fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform1fv_dyn();

		static void uniform1i( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0);
		static ::Dynamic uniform1i_dyn();

		static void uniform1iv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform1iv_dyn();

		static void uniform1ui( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0);
		static ::Dynamic uniform1ui_dyn();

		static void uniform1uiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform1uiv_dyn();

		static void uniform2f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,Float v0,Float v1);
		static ::Dynamic uniform2f_dyn();

		static void uniform2fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform2fv_dyn();

		static void uniform2i( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1);
		static ::Dynamic uniform2i_dyn();

		static void uniform2iv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform2iv_dyn();

		static void uniform2ui( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1);
		static ::Dynamic uniform2ui_dyn();

		static void uniform2uiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform2uiv_dyn();

		static void uniform3f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,Float v0,Float v1,Float v2);
		static ::Dynamic uniform3f_dyn();

		static void uniform3fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform3fv_dyn();

		static void uniform3i( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1,int v2);
		static ::Dynamic uniform3i_dyn();

		static void uniform3iv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform3iv_dyn();

		static void uniform3ui( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1,int v2);
		static ::Dynamic uniform3ui_dyn();

		static void uniform3uiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform3uiv_dyn();

		static void uniform4f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,Float v0,Float v1,Float v2,Float v3);
		static ::Dynamic uniform4f_dyn();

		static void uniform4fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform4fv_dyn();

		static void uniform4i( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1,int v2,int v3);
		static ::Dynamic uniform4i_dyn();

		static void uniform4iv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform4iv_dyn();

		static void uniform4ui( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,int v0,int v1,int v2,int v3);
		static ::Dynamic uniform4ui_dyn();

		static void uniform4uiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location, ::lime::utils::ArrayBufferView v, ::Dynamic srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniform4uiv_dyn();

		static void uniformBlockBinding( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program,int uniformBlockIndex,int uniformBlockBinding);
		static ::Dynamic uniformBlockBinding_dyn();

		static void uniformMatrix2fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix2fv_dyn();

		static void uniformMatrix2x3fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix2x3fv_dyn();

		static void uniformMatrix2x4fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix2x4fv_dyn();

		static void uniformMatrix3fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix3fv_dyn();

		static void uniformMatrix3x2fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix3x2fv_dyn();

		static void uniformMatrix3x4fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix3x4fv_dyn();

		static void uniformMatrix4fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix4fv_dyn();

		static void uniformMatrix4x2fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix4x2fv_dyn();

		static void uniformMatrix4x3fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int location,bool transpose, ::lime::utils::ArrayBufferView v,::hx::Null< int >  srcOffset, ::Dynamic srcLength);
		static ::Dynamic uniformMatrix4x3fv_dyn();

		static void useProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic useProgram_dyn();

		static void validateProgram( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::lime::graphics::opengl::GLObject program);
		static ::Dynamic validateProgram_dyn();

		static void vertexAttrib1f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float x);
		static ::Dynamic vertexAttrib1f_dyn();

		static void vertexAttrib1fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttrib1fv_dyn();

		static void vertexAttrib2f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float x,Float y);
		static ::Dynamic vertexAttrib2f_dyn();

		static void vertexAttrib2fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttrib2fv_dyn();

		static void vertexAttrib3f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float x,Float y,Float z);
		static ::Dynamic vertexAttrib3f_dyn();

		static void vertexAttrib3fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttrib3fv_dyn();

		static void vertexAttrib4f( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float x,Float y,Float z,Float w);
		static ::Dynamic vertexAttrib4f_dyn();

		static void vertexAttrib4fv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttrib4fv_dyn();

		static void vertexAttribDivisor( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index,int divisor);
		static ::Dynamic vertexAttribDivisor_dyn();

		static void vertexAttribI4i( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,int x,int y,int z,int w);
		static ::Dynamic vertexAttribI4i_dyn();

		static void vertexAttribI4iv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttribI4iv_dyn();

		static void vertexAttribI4ui( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,int x,int y,int z,int w);
		static ::Dynamic vertexAttribI4ui_dyn();

		static void vertexAttribI4uiv( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,Float values);
		static ::Dynamic vertexAttribI4uiv_dyn();

		static void vertexAttribIPointer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int index,int size,int type,int stride,Float offset);
		static ::Dynamic vertexAttribIPointer_dyn();

		static void vertexAttribPointer( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int indx,int size,int type,bool normalized,int stride,Float offset);
		static ::Dynamic vertexAttribPointer_dyn();

		static void viewport( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1,int x,int y,int width,int height);
		static ::Dynamic viewport_dyn();

		static void waitSync( ::lime::_internal::backend::native::NativeOpenGLRenderContext this1, ::Dynamic sync,int flags, cpp::Int64Struct timeout);
		static ::Dynamic waitSync_dyn();

		static  ::lime::_internal::backend::native::NativeOpenGLRenderContext fromRenderContext( ::lime::graphics::RenderContext context);
		static ::Dynamic fromRenderContext_dyn();

		static  ::lime::_internal::backend::native::NativeOpenGLRenderContext fromOpenGLES3RenderContext( ::lime::_internal::backend::native::NativeOpenGLRenderContext gl);
		static ::Dynamic fromOpenGLES3RenderContext_dyn();

		static  ::lime::_internal::backend::native::NativeOpenGLRenderContext fromGL(::hx::Class gl);
		static ::Dynamic fromGL_dyn();

};

} // end namespace lime
} // end namespace graphics
} // end namespace _WebGL2RenderContext

#endif /* INCLUDED_lime_graphics__WebGL2RenderContext_WebGL2RenderContext_Impl_ */ 
