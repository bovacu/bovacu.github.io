
.. _program_listing_file_engine_include_core_graph_components_ui_UIButton.h:

Program Listing for File UIButton.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIButton.h>` (``engine/include/core/graph/components/ui/UIButton.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/22/22.
   //
   
   #ifndef RDE_UI_BUTTON_H
   #define RDE_UI_BUTTON_H
   
   #include "core/graph/components/ui/UI.h"
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       class Scene;
       class Canvas; 
       class Manager;
       class UIText;
       class Font;
       class UIImage;
   
       struct UIButtonConfig : CommonUIConfig {
           std::string text = "Button Text";
           Texture* idleTexture = nullptr;
           Texture* selectedTexture = nullptr;
           Texture* clickedTexture = nullptr;
           Texture* disabledTexture = nullptr;
           Font* font = nullptr;
           Vec2F buttonSize = { 128, 32 };
           Color buttonColor = Color::White;
           Color textColor = Color::White;
       };
   
       class UIButton {
           private:
               UIText* textRenderer = nullptr;
               UIImage* uiImage = nullptr;
               Node* textNode = nullptr;
   
               Texture* statesTextures[4];
   
           RENDERIZABLE_UI_BASIC_PROPERTIES()
   
           public:
               UIButton(Node* _node, Scene* _scene, Canvas* _canvas, const UIButtonConfig& _config = {});
               UIButton(Node* _node, Manager* _manager, Graph* _graph, const UIButtonConfig& _config = {});
   
               RENDERIZABLE_UI_BASIC_METHODS()
   
               Node* getTextNode();
   
               ~UIButton() {  }
   
           private:
               void onMouseEntered();
   
               void onMouseExited();
   
               void onMouseClicked(MouseCode _mouseCode);
   
               void onMouseReleased(MouseCode _mouseCode);
       };
   
   }
   
   #endif //RDE_UI_BUTTON_H
