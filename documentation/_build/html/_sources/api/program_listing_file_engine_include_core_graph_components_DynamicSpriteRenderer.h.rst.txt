
.. _program_listing_file_engine_include_core_graph_components_DynamicSpriteRenderer.h:

Program Listing for File DynamicSpriteRenderer.h
================================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_DynamicSpriteRenderer.h>` (``engine/include/core/graph/components/DynamicSpriteRenderer.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 11/22/22.
   //
   
   #ifndef RDE_DYNAMIC_SPRITE_RENDERER_H
   #define RDE_DYNAMIC_SPRITE_RENDERER_H
   
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       class Manager;
       class Graph; 
       class Scene;
       class Canvas;
   
       struct Node;
   
       struct DynamicSpriteRendererConfig {
           Vec2<uint> size = { 64, 64 };
           unsigned char* pixels = nullptr;
           ImageType imageType = ImageType::PNG;
       };
   
       class DynamicSpriteRenderer {
   
           friend class Graph;
   
           RENDERIZABLE_BASIC_PROPERTIES()
   
           public:
               DynamicSpriteRenderer(Node* _node, Scene* _scene, const DynamicSpriteRendererConfig& _config = {});
               DynamicSpriteRenderer(Node* _node, Scene* _scene, Canvas* _canvas, const DynamicSpriteRendererConfig& _config = {});
               DynamicSpriteRenderer(Node* _node, Manager* _manager, Graph* _graph, const DynamicSpriteRendererConfig& _config = {});
               ~DynamicSpriteRenderer();
   
               RENDERIZABLE_BASIC_METHODS()
   
               
               void setPixel(int _x, int _y, const Color& _color);
   
               Color getPixel(int _x, int _y);
   
   
               void resizeImage(const Vec2<uint>& _newSize);
   
               [[nodiscard]] std::string getTexturePath();
   
               [[nodiscard]] std::string getTextureName();
   
               [[nodiscard]] std::string getTextureExtension();
       };
   
   } // RDE
   
   #endif //RDE_DYNAMIC_SPRITE_RENDERER_H
