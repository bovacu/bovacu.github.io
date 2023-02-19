
.. _program_listing_file_engine_include_core_systems_uiSystem_Canvas.h:

Program Listing for File Canvas.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_uiSystem_Canvas.h>` (``engine/include/core/systems/uiSystem/Canvas.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 29/05/22.
   //
   
   #ifndef RDE_CANVAS_H
   #define RDE_CANVAS_H
   
   #include "core/graph/Graph.h"
   #include "core/render/Camera.h"
   #include "core/render/elements/Batch.h"
   #include "core/graph/components/Node.h"
   #include "core/render/elements/IRenderizable.h"
   #include <stack>
   
   namespace RDE {
   
       class UIInteractable;
   
       enum UpdatableType {
           UT_NONE        = 0,
           UT_UI_INPUT    = 1,
           UT_UI_SLIDER   = 2
       };
   
       struct UpdatableData {
           UpdatableType updatableType = UpdatableType::UT_NONE;
           void* updatable = nullptr;
       };
   
       struct CanvasElement {
           Node* node = nullptr;
           RenderizableInnerDataUI* renderizableInnerData;
           UIInteractable* interactable = nullptr;
           int cropping = 0;
           UpdatableData updatableData;
       };
   
       class Canvas {
           friend class Graph;
           friend class Scene;
   
           private:
               Scene* scene;
   
               Camera* camera = nullptr;
   
               int layer = 0;
   
               std::vector<Batch> batches;
               bool dirty = true;
               int maxIndicesPerDrawCall = 1000;
   
               std::vector<CanvasElement> uiRenderizables;
               std::vector<CanvasElement> uiInteractables;
               std::vector<CanvasElement> uiUpdatables;
   
           public:
               Graph* graph;
   
           public:
               explicit Canvas(Scene* _scene, const Window* _window, const std::string& _canvasTag);
               ~Canvas();
   
               Camera* getCamera();
   
               void onResize(uint _width, uint _height);
   
               void setCanvasResolution(const Vec2I& _resolution);
   
               Vec2I getCanvasResolution();
   
           private:
               void batchTreeElementPre(CanvasElement* _canvasElement, void* _data);
               void batchTreeElementPost(CanvasElement* _canvasElement, void* _data);
   
               void getRenderizable(Node* _node, CanvasElement* _canvasElement);
               void getUpdatable(Node* _node, CanvasElement* _canvasElement);
   
               void forceRender();
   
               void postRenderSync();
       };
   
   }
   
   #endif //RDE_CANVAS_H
