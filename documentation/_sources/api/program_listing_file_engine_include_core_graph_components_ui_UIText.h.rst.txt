
.. _program_listing_file_engine_include_core_graph_components_ui_UIText.h:

Program Listing for File UIText.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIText.h>` (``engine/include/core/graph/components/ui/UIText.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/26/22.
   //
   
   #ifndef RDE_UI_TEXT_RENDERER_H
   #define RDE_UI_TEXT_RENDERER_H
   
   #include "core/graph/components/ui/UI.h"
   #include "core/render/elements/IRenderizable.h"
   #include "core/systems/uiSystem/FontManager.h"
   
   namespace RDE {
   
       class Scene;
       class Canvas;
   
       struct UITextConfig : public CommonUIConfig {
           Font* font = nullptr;
           std::string text = "Hello Duck!";
           Color textColor = Color::White;
       };
   
       class UIText {
           friend class Canvas;
           friend class UIButton;
           friend class UICheckbox;
           friend class UIInput;
   
           private:
               protected:
               Font* font;
   
               std::string innerText;
   
               Vec2F textSize {};
   
               float spaceBetweenChars = 0.f;
   
               float newLineSize = 1.05f;
   
               int fontSize {};
   
           RENDERIZABLE_UI_BASIC_PROPERTIES()
   
           public:
               void recalcTextDimensions(const std::string& _text);
   
               struct LineInfo {
                   std::string line;
                   float biggestCharHeight;
               };
               std::tuple<std::vector<LineInfo>, float, float> calculateLinesInfo(CharInfo* _chars) const;
   
           public:
               UIText(Node* _node, Scene* _scene, Canvas* _canvas, const UITextConfig& _config);
               UIText(Node* _node, Manager* _manager, Graph* _graph, const UITextConfig& _config);
               ~UIText() {  }
   
               RENDERIZABLE_UI_BASIC_METHODS()
   
               
               void setText(const std::string& _text);
   
               Vec2F getTextSize();
   
               void setFont(Font* _font);
   
               [[nodiscard]] Font* getFont() const;
   
               [[nodiscard]] const std::string& getText() const;
   
               void setFontSize(int _fontSize);
   
               [[nodiscard]] int getFontSize() const;
   
               [[nodiscard]] float getSpacesBetweenChars() const;
   
               void setSpacesBetweenChars(float _spaceBetweenChars);
   
               [[nodiscard]] float getNewLineSize() const;
       };
   
   } // RDE
   
   #endif //RDE_UI_TEXT_RENDERER_H
