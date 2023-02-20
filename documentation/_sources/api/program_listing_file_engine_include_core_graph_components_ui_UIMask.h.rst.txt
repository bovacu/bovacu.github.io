
.. _program_listing_file_engine_include_core_graph_components_ui_UIMask.h:

Program Listing for File UIMask.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIMask.h>` (``engine/include/core/graph/components/ui/UIMask.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 11/21/22.
   //
   
   #ifndef RDE_UI_MASK_H
   #define RDE_UI_MASK_H
   
   #include "core/Core.h"
   #include "core/graph/components/Node.h"
   
   namespace RDE {
   
       class Manager;
       class Graph;
   
       struct Node;
   
       class UIMask {
           private:
               Node* node;
   
           public:
               bool inverted = false;
   
           public:
               UIMask(Node* _node, Manager* _manager, Graph* _graph) : node(_node) {  }
               ~UIMask() {  }
   
               bool isEnabled() {
                   return !node->hasComponent<DisabledForRender>();
               }
   
               void setEnabled(bool _enabled) {
                   if(_enabled && node->hasComponent<DisabledForRender>()) {
                       node->removeComponent<DisabledForRender>();
                       return;
                   }
   
                   if(!_enabled && !node->hasComponent<DisabledForRender>()) {
                       node->addComponent<DisabledForRender>();
                   }
               }
       };
   
   }
   
   #endif //RDE_UI_MASK_H
