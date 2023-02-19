
.. _program_listing_file_engine_include_core_graph_components_Components.h:

Program Listing for File Components.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_Components.h>` (``engine/include/core/graph/components/Components.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 27/12/21.
   
   
   #ifndef RDE_COMPONENTS_H
   #define RDE_COMPONENTS_H
   
   
   #include "ComponentBase.h"
   #include "core/Core.h"
   #include "entt/entity/entity.hpp"
   
   typedef entt::entity NodeID;
   
   namespace RDE {
       class Manager;
       class Window;
       class Camera;
       class Canvas;
       class IViewPort;
       class Graph;
           
       struct Node;
   
       struct Tag {
           public:
               std::string tag;
   
               Tag() {};
               Tag(const Tag& _tag) = default;
               Tag(const NodeID& _nodeId, const std::string& _tag) : tag(_tag) {  }
   
               explicit operator std::string& () { return tag; }
       };
   
       struct Active {
           explicit Active(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
   
       struct DisabledForRender {
           explicit DisabledForRender(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
       struct DisabledForEvent {
           explicit DisabledForEvent(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
       struct DisabledForUpdate {
           explicit DisabledForUpdate(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
       struct DisabledForFixedUpdate {
           explicit DisabledForFixedUpdate(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
       struct DisabledForLateUpdate {
           explicit DisabledForLateUpdate(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           private:
               short foo{};
       };
   
       struct CanvasEventStopper : public ComponentBase {
           explicit CanvasEventStopper(Node* _node, Manager* _manager, Graph* _graph) {  }
   
           void setEnabled(bool _enabled) override {
               enabled = _enabled;
           }
   
           bool isEnabled() override {
               return enabled;
           }
   
           private:
               bool enabled = true;
       };
   }
   
   #endif //RDE_COMPONENTS_H
