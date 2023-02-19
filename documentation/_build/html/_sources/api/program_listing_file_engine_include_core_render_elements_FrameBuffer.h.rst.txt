
.. _program_listing_file_engine_include_core_render_elements_FrameBuffer.h:

Program Listing for File FrameBuffer.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_FrameBuffer.h>` (``engine/include/core/render/elements/FrameBuffer.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 20/1/22.
   
   
   #ifndef RDE_FRAMEBUFFER_H
   #define RDE_FRAMEBUFFER_H
   
   
   #include "core/util/Util.h"
   #include "core/render/elements/ShaderManager.h"
   
   namespace RDE {
   
       struct FrameBufferSpecification {
           uint32_t width = -1;
   
           uint32_t height = -1;
   
           uint32_t samples = 1;
   
           bool renderToWindow = true;
       };
   
       class Manager;
   
       class FrameBuffer {
           friend class Engine;
   
           private:
               uint32_t fboID = 0;
   
               uint32_t rboID = -1;
   
               uint32_t vboID = -1;
   
               uint32_t vao = -1;
   
               ShaderID framebufferShader = -1;
   
               uint32_t frameBufferTexureForColorAttachment = -1;
   
               FrameBufferSpecification specs;
   
               Manager* manager;
   
           public:
               explicit FrameBuffer(const FrameBufferSpecification& _specs, Manager* _manager);
               ~FrameBuffer();
   
               void invalidate();
   
               void bind() const;
   
               void unbind() const;
   
               void resize(uint32_t _width, uint32_t _height);
   
               [[nodiscard]] uint32_t getColorAttachmentRendererID() const { return frameBufferTexureForColorAttachment; }
   
               [[nodiscard]] const FrameBufferSpecification& getSpecification() const { return specs; }
       };
   
   }
   
   
   #endif //RDE_FRAMEBUFFER_H
