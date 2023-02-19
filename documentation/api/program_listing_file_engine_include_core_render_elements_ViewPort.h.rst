
.. _program_listing_file_engine_include_core_render_elements_ViewPort.h:

Program Listing for File ViewPort.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_ViewPort.h>` (``engine/include/core/render/elements/ViewPort.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 27/2/22.
   
   
   #ifndef RDE_VIEWPORT_H
   #define RDE_VIEWPORT_H
   
   #include "core/util/Vec.h"
   
   namespace RDE {
   
       class ViewPort {
   
           friend class Camera;
           friend class Canvas;
   
           private:
               Vec2I virtualResolution = {};
   
               Vec2I deviceResolution = {};
   
               bool landscape = true;
   
               float scaleWithWidth = 0.5f;
   
           protected:
               virtual void update(const Vec2I& _deviceSize);
   
           public:
               ViewPort(const Vec2I& _deviceSize, const Vec2I& _resolutionSize);
   
               [[nodiscard]] Vec2I getVirtualResolution() const;
   
               [[nodiscard]] float getVirtualAspectRatio() const;
   
               [[nodiscard]] float getPhysicalAspectRatio() const;
   
               [[nodiscard]] Vec2I getDeviceResolution() const;
   
               void setUIScaleWeightsForWidthAndHeight(float _width, float _height);
   
               Vec2F getUIScaleWeights() const;
   
               bool isLandscape() const { return landscape; }
   
               virtual ~ViewPort() {};
       };
   }
   
   #endif //RDE_VIEWPORT_H
