
.. _program_listing_file_engine_include_core_graph_components_TextRenderer.h:

Program Listing for File TextRenderer.h
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_TextRenderer.h>` (``engine/include/core/graph/components/TextRenderer.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_TEXT_RENDERER_H
   #define RDE_TEXT_RENDERER_H
   
   #include "core/render/elements/IRenderizable.h"
   #include "core/util/Vec.h"
   #include "entt/entity/entity.hpp"
   
   typedef entt::entity NodeID;
   
   namespace RDE {
   
       struct CharInfo;
       class Font;
       class Scene;
       class Canvas;
       class Graph;
       class Manager;
   
       struct TextRendererConfig {
           std::string text = "Hello Duck!";
           Font* font = nullptr;
           Color color = Color::White;
       };
   
       class TextRenderer {
   
           friend class UIText;
           friend class UIButton;
           friend class UICheckbox;
           friend class UIInput;
   
           private:
               Font* font;
   
               std::string innerText;
   
               Vec2F size {};
   
               float spaceBetweenChars = 0.f;
   
               float newLineSize = 1.05f;
   
               int fontSize {};
   
           RENDERIZABLE_BASIC_PROPERTIES()
   
           private:
               void recalcTextDimensions(const std::string& _text);
   
               struct LineInfo {
                   std::string line;
                   float biggestCharHeight;
               };
   
           // TODO (RDE): this needs a better fix than making it public, the affected part is SpriteBatchRenderFunctions.cpp -> drawBatchedForTextRenderer. 
           public:
               std::tuple<std::vector<LineInfo>, float, float> calculateLinesInfo(CharInfo* _chars) const;
   
           public:
               TextRenderer(Node* _node, Scene* _scene, const TextRendererConfig& _config = {});
               TextRenderer(Node* _node, Scene* _scene, Canvas* _canvas, const TextRendererConfig& _config = {});
               TextRenderer(Node* _node, Manager* _manager, Graph* _graph, const TextRendererConfig& _config = {});
               ~TextRenderer() {  }
   
               RENDERIZABLE_BASIC_METHODS()
   
               
               void setText(const std::string& _text);
   
               [[nodiscard]] Vec2F getTextSize() const;
   
               void setFont(Font* _font);
   
               [[nodiscard]] Font* getFont() const;
   
               [[nodiscard]] const std::string& getText() const;
   
               void setFontSize(int _fontSize);
   
               [[nodiscard]] int getFontSize() const;
   
               [[nodiscard]] float getSpacesBetweenChars() const;
   
   
               void setNewLineSize(float _newLineSize);
               [[nodiscard]] float getNewLineSize() const;
   
   
               void setSpacesBetweenChars(float _spaceBetweenChars);
       };
   
   }
   
   #endif //RDE_TEXT_RENDERER_H
