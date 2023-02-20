
.. _program_listing_file_engine_include_core_graph_components_ui_UIPanel.h:

Program Listing for File UIPanel.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIPanel.h>` (``engine/include/core/graph/components/ui/UIPanel.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/20/22.
   //
   
   #ifndef RDE_UI_PANEL_H
   #define RDE_UI_PANEL_H
   
   #include "core/graph/components/ui/UI.h"
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       struct UIPanelConfig : CommonUIConfig {
           Texture* texture = nullptr;
           Vec2F size { -1.f, -1.f };
           Color color = { 22, 29, 34, 255 };
       };
   
       class UIImage;
   
       class UIPanel {
   
           RENDERIZABLE_UI_BASIC_PROPERTIES()
   
           public:
               UIImage* uiImage = nullptr;
   
               UIPanel(Node* _node, Manager* _manager, Graph* _graph, const UIPanelConfig& _config = {});
   
               RENDERIZABLE_UI_BASIC_METHODS()
   
               ~UIPanel() {  }
       };
   
   }
   
   
   #endif //RDE_UI_PANEL_H
