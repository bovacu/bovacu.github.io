
.. _program_listing_file_engine_include_core_graph_components_ui_UICheckbox.h:

Program Listing for File UICheckbox.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UICheckbox.h>` (``engine/include/core/graph/components/ui/UICheckbox.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/18/22.
   //
   
   #ifndef RDE_UI_CHECKBOX_H
   #define RDE_UI_CHECKBOX_H
   
   #include "core/graph/components/ui/UI.h"
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       class Scene;
       class Canvas;
       class UIText;
       class Font;
       class UIImage;
       class UITransform;
   
       struct UICheckboxConfig : public CommonUIConfig {
           std::string text = "Checkbox text";
           Texture* checkboxTickTexture = nullptr;
           Texture* checkboxBackgroundTexture = nullptr;
   
           Font* font = nullptr;
           Color checkboxColor = Color::White;
           Color textColor = Color::White;
           Color tickColor = Color::White;
   
           bool checked = false;
           Vec2F checkboxTextOffset = { 5.f, 0 };
       };
   
       class UICheckbox {
           private:
               bool checked = false;
               UIText* textRenderer = nullptr;
               UIImage* checkboxBackgroundSprite = nullptr;
               UIImage* tickSprite = nullptr;
               Vec2F checkboxTextOffset;
   
               Node* textNode = nullptr;
               Node* tickNode = nullptr;
   
           RENDERIZABLE_UI_BASIC_PROPERTIES()
   
           public:
               Delegate<void(bool)> onClickedCheckbox;
               
   
           public:
               UICheckbox(Node* _node, Manager* _manager, Graph* _graph, const UICheckboxConfig& _config = {});
               ~UICheckbox() {  }
   
               
               RENDERIZABLE_UI_BASIC_METHODS()
   
               
               void setChecked(bool _checked);
   
               [[nodiscard]] bool isChecked() const;
   
               Node* getTickNode();
               Node* getTextNode();
   
           private:
               void onMouseReleased(MouseCode _mouseButton);
   
               void onMouseClicked(MouseCode _mouseButton) {  }
   
               void onMouseEntered() {  }
       };
   
   }
   
   
   #endif //RDE_UI_CHECKBOX_H
