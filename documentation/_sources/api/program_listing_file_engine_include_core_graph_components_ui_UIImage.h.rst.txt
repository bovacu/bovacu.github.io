
.. _program_listing_file_engine_include_core_graph_components_ui_UIImage.h:

Program Listing for File UIImage.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIImage.h>` (``engine/include/core/graph/components/ui/UIImage.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/26/22.
   //
   
   #ifndef RDE_UI_IMAGE_H
   #define RDE_UI_IMAGE_H
   
   #include "core/graph/components/ui/UI.h"
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       class Scene;
       class Canvas;
   
       enum ImageRenderingType {
           NORMAL              = 0,
           NINE_SLICE          = 1,
           PARTIAL_VERTICAL    = 2,
           PARTIAL_HORIZONTAL  = 3,
           PARTIAL_RADIAL      = 4
       };
   
       struct UIImageConfig : public CommonUIConfig {
           Vec2F size = { -1, -1 };
           Texture* texture = nullptr;
           Color color = Color::White;
           ImageRenderingType imageRenderingType = ImageRenderingType::NORMAL;
       };
   
       class UIImage {
           friend class UIPanel;
           friend class UIButton;
           friend class UIInput;
           friend class UICheckbox;
           friend class UISlider;
   
           RENDERIZABLE_UI_BASIC_PROPERTIES()
   
           public:
               UIImage(Node* _node, Scene* _scene, Canvas* _canvas, const UIImageConfig& _config = {});
               UIImage(Node* _node, Manager* _manager, Graph* _graph, const UIImageConfig& _config = {});
               ~UIImage() {  }
   
               RENDERIZABLE_UI_BASIC_METHODS()
   
               
               [[nodiscard]] std::string getTexturePath();
   
               [[nodiscard]] std::string getTextureName();
   
               [[nodiscard]] std::string getTextureExtension();
   
               void setImageRenderingType(ImageRenderingType _imageRenderingType);
   
               [[nodiscard]]ImageRenderingType getImageRenderingType() const { return (ImageRenderingType)data.imageRenderingType; }
   
               [[nodiscard]]bool isPartialRenderingInverted() const { return data.partialRenderingInverted;}
   
               void setPartialRenderingInverted(bool _inverted);
   
               [[nodiscard]] float getPartialRenderingPercentage() const { return data.partialRenderingPercentage; }
   
               void setPartialRenderingPercentage(float _percentage);
       };
   
   }
   
   
   #endif //RDE_UI_IMAGE_H
