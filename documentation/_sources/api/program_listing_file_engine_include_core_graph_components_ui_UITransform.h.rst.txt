
.. _program_listing_file_engine_include_core_graph_components_ui_UITransform.h:

Program Listing for File UITransform.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UITransform.h>` (``engine/include/core/graph/components/ui/UITransform.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/26/22.
   //
   
   #ifndef RDE_UI_TRANSFORM_H
   #define RDE_UI_TRANSFORM_H
   
   #include "core/graph/components/Transform.h"
   
   namespace RDE {
   
       enum Anchor {
           MIDDLE              = 1 << 1,
           LEFT                = 1 << 2,
           RIGHT               = 1 << 3,
           TOP                 = 1 << 4,
           BOTTOM              = 1 << 5,
           LEFT_BOTTOM         = 1 << 6,
           LEFT_TOP            = 1 << 7,
           RIGHT_BOTTOM        = 1 << 8,
           RIGHT_TOP           = 1 << 9
       };
   
       enum Stretch {
           NO_STRETCH          = 1 << 10,
           VERTICAL_STRETCH    = 1 << 11,
           HORIZONTAL_STRETCH  = 1 << 12,
           FULL_STRETCH        = 1 << 13
       };
   
       struct UITransform;
   
       struct UIAnchor {
           friend class UITransform;
           friend class UIImage;
   
           uint16_t anchor = Anchor::MIDDLE | Stretch::NO_STRETCH;
           Vec2F anchorPosition;
           Vec2F anchorSize;
   
           private:
               void updateAnchor(UITransform* _transform);
       };
   
       struct UITransform : public Transform {
           friend class Canvas;
           friend class Graph;
           friend class UIImage;
           friend class UIText;
   
           private:
               UIAnchor anchor;
               Vec2F size { 64.f, 64.f };
               bool uiDirty = false;
   
           public:
               explicit UITransform(Graph* _graph);
   
               void clearDirty() override;
   
               [[nodiscard]] Anchor getAnchor() const;
               void setAnchor(Anchor _anchor);
   
               [[nodiscard]] Stretch getStretch() const;
               void setStretch(Stretch _stretch);
   
               Vec2F getSize();
               void setSize(const Vec2F& _size);
   
               std::tuple<glm::mat4, bool> localToWorld() override;
   
           private:
               void setUIDirty();
       };
   
   } // RDE
   
   #endif //RDE_UI_TRANSFORM_H
