
.. _program_listing_file_engine_include_core_render_elements_SpriteBatch.h:

Program Listing for File SpriteBatch.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_SpriteBatch.h>` (``engine/include/core/render/elements/SpriteBatch.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef RDE_SPRITE_BATCH_H
   #define RDE_SPRITE_BATCH_H
   
   #include <vector>
   #include "core/graph/components/Transform.h"
   #include "core/render/Camera.h"
   #include "core/render/elements/IRenderizable.h"
   #include "core/render/shapes/DebugShape.h"
   #include "core/render/elements/ShaderManager.h"
   #include "core/graph/components/Components.h"
   #include "core/graph/components/SpriteRenderer.h"
   #include "core/graph/components/TextRenderer.h"
   #include "core/graph/components/ParticleSystem.h"
   #include "core/render/elements/Vertex.h"
   #include "core/render/elements/Batch.h"
   
   namespace RDE {
   
       class Engine;
   
       class SpriteBatch {
           friend class Batch;
           friend class RenderManager;
           class Debug {
               friend class SpriteBatch;
   
               private:
                   static SpriteBatch* batch;
   
                   std::vector<OpenGLVertexDebug> vertexDebugBufferGeometrics {};
   
                   std::vector<OpenGLVertexDebug> vertexDebugBufferLines {};
   
                   std::vector<OpenGLVertexDebug> vertexDebugBufferPoints {};
   
                   GLuint debugVbo = -1;
   
                   GLuint debugVao = -1;
   
               private:
                   void configDebugShader();
   
               public:
                   void init(SpriteBatch* _batch);
   
                   void drawGrid(const Color& _color);
   
                   void drawPoint(const Vec2F& _position, const Color& _color = Color::Green);
   
                   void drawLine(const Vec2F& _p0, const Vec2F& _p1, const Color& _color = Color::Green);
   
                   void drawSquare(const Vec2F& _position, const Vec2F& _size, const Color& _color = Color::Green, float _rotation = 0.f);
   
                   void drawShape(DebugShape& _shape);
   
                   void flushDebug();
   
                   void setLinesThickness(float _thickness);
   
                   void setPointSize(float _size);
           };
   
           public:
               int totalTriangles = 0;
   
               int drawCalls = 0;
   
               int uiDrawCalls = 0;
   
               Debug debug {};
   
               const int maxIndicesPerDrawCall = 120000; // Between 35.000 and 50.000 should be a good range
   
           private:
               Engine* engine = nullptr;
   
               ViewPort* viewport = nullptr;
   
               glm::mat4 viewProjectionMatrix {1.0f};
   
               std::vector<Batch> batches {};
   
               SpriteBatch() {  }
   
           private:
               Batch* getBatch(const RenderizableInnerData& _innerData);
   
               void orderBatches();
   
           public:
               ~SpriteBatch();
   
               void init(Engine* _engine);
   
               void beginDraw(Camera* _camera, Transform* _cameraTransform);
   
               void drawSpriteRenderer(RenderizableInnerData& _innerData, Transform* _transform);
               void drawTextRenderer(RenderizableInnerData& _innerData, Transform* _transform);
   
               void drawUI(std::vector<Batch>& _batches);
   
               void flush();
   
           private:
               void configBasicShader();
       };
   }
   
   #endif //RDE_SPRITE_BATCH_H
