
.. _program_listing_file_engine_include_core_graph_components_SpriteRenderer.h:

Program Listing for File SpriteRenderer.h
=========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_SpriteRenderer.h>` (``engine/include/core/graph/components/SpriteRenderer.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_SPRITE_RENDERER_H
   #define RDE_SPRITE_RENDERER_H
   
   #include "core/render/elements/IRenderizable.h"
   #include "core/render/elements/Texture.h"
   #include "core/render/elements/Vertex.h"
   #include "core/util/Vec.h"
   #include "entt/entity/entity.hpp"
   #include <glm/fwd.hpp>
   
   typedef entt::entity NodeID;
   
   namespace RDE {
   
       class Manager; 
       class Graph;
       class Scene;
       class Canvas;
   
       struct Node;
   
       struct SpriteRendererConfig {
           Texture* texture = nullptr;
           Color color = Color::White;
       };
   
       class SpriteRenderer {
   
           friend class UICheckbox;
           friend class UIButton;
           friend class UIInput;
           friend class UISlider;
   
           RENDERIZABLE_BASIC_PROPERTIES()
   
           public:
               SpriteRenderer(Node* _node, Scene* _scene, const SpriteRendererConfig& _config = {});
               SpriteRenderer(Node* _node, Scene* _scene, Canvas* _canvas, const SpriteRendererConfig& _config = {});
               SpriteRenderer(Node* _node, Manager* _manager, Graph* _graph, const SpriteRendererConfig& _config = {});
               ~SpriteRenderer() {  }
   
               RENDERIZABLE_BASIC_METHODS()
   
               
               [[nodiscard]] std::string getTexturePath();
   
               [[nodiscard]] std::string getTextureName();
   
               [[nodiscard]] std::string getTextureExtension();
       };
   
   }
   
   #endif //RDE_SPRITE_RENDERER_H
