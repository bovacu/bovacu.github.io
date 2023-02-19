
.. _program_listing_file_engine_include_core_render_RenderManager.h:

Program Listing for File RenderManager.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_RenderManager.h>` (``engine/include/core/render/RenderManager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 26/12/21.
   
   
   #ifndef RDE_RENDER_MANAGER_H
   #define RDE_RENDER_MANAGER_H
   
   // #include "core/graph/components/DynamicSpriteRenderer.h"
   #include "core/graph/components/SpriteRenderer.h"
   // #include "core/graph/components/TextRenderer.h"
   #include "core/graph/components/Transform.h"
   #include "core/render/elements/IRenderizable.h"
   #include "core/render/elements/Texture.h"
   #include "core/util/Util.h"
   #include "core/render/elements/SpriteBatch.h"
   #include "core/util/Vec.h"
   #include <vector>
   
   namespace RDE {
   
       class Engine;
   
       class RenderManager {
           friend class Scene;
           friend class Engine;
           friend class ImGuiScene;
           friend class FrameBuffer;
           friend class Canvas;
           friend class Manager;
   
           // Debug
           public:
               RenderManager() {  }
   
               void resetDebugInfo();
               int getTotalTriangles();
               std::tuple<int, int> getDrawCalls();
   
           private:
               SpriteBatch batch;
   
               Color clearColor = Color::Red;
   
               Engine* engine = nullptr;
   
           private:
               void init(Engine* _engine);
   
               void destroy();
   
               void clear();
   
               void resetBuffers();
   
               void beginDraw(Camera* _camera, Transform* _cameraTransform);
   
               void beginDebugDraw(Camera* _camera, Transform* _cameraTransform, float _thickness = 1.f);
   
               void drawSpriteRenderer(RenderizableInnerData& _innerData, Transform* _transform);
               void drawTextRenderer(RenderizableInnerData& _innerData, Transform* _transform);
   
               void drawUI(std::vector<Batch>& _batches);
   
               void endDraw();
   
               void endDebugDraw();
   
           public:
               void setClearColor(const Color& _color);
   
               Color getClearColor();
   
               void drawPoint(const Vec2F& _position, const Color& _color = Color::White);
   
               void drawLine(const Vec2F& _p0, const Vec2F& _p1, const Color& _color = Color::White);
   
               void drawSquare(const Vec2F& _position, const Vec2F& _size, const Color& _color = Color::White, float _rotation = 0.f);
   
               void drawShape(DebugShape& _shape);
   
               void drawGrid(const Color& _color = Color::White);
   
               void setLineThickness(float _thickness);
   
               void setPointSize(float _size);
   
               void fillBackgroundCPUTexture(CPUTexture* _cpuTexture, const Color& _color);
   
               void drawPointToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _position, const Color& _color = Color::Blue, int _size = 1);
   
               void drawLineToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _p0, const Vec2F& _p1, const Color& _color = Color::Blue, int _thickness = 1);
   
               void drawRectangleToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _position, const Vec2F& _size, const Color& _color = Color::Blue);
   
               void drawFilledCircleToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _center, float _radius, const Color& _color = Color::Blue);
   
               void drawLinedCircleToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _center, float _radius, const Color& _color = Color::Blue, int _thickness = 1);
   
               void drawTriangleToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, const Vec2F& _p0, const Vec2F& _p1, const Vec2F& _p2, const Color& _color = Color::Blue);
   
               void drawShapeToCPUTexture(CPUTexture* _cpuTexture, Transform* _cpuTextureTransform, std::vector<Vec2F> _points, const Color& _color = Color::Blue);
       };
   }
   
   
   #endif //RDE_RENDER_MANAGER_H
