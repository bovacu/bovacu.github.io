
.. _program_listing_file_engine_include_core_graph_components_Node.h:

Program Listing for File Node.h
===============================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_Node.h>` (``engine/include/core/graph/components/Node.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 10/25/22.
   //
   
   #ifndef RDE_NODE_H
   #define RDE_NODE_H
   
   #include "core/graph/Graph.h"
   #include "core/graph/components/Components.h"
   
   class Manager;
   
   namespace RDE {
   
       struct Node {
           friend class ImGuiScene; 
           friend class UISlider;
   
           private:
               Graph* graph = nullptr;
               Manager* manager = nullptr;
               NodeID ID = NODE_ID_NULL;
               Transform* transform = nullptr;
   
           public:
               Node(const NodeID& _nodeID, Graph* _graph, Manager* _manager, Transform* _transform) : ID(_nodeID), graph(_graph), transform(_transform), manager(_manager) {  }
   
               template<typename Component, typename... Args>
               Component* addComponent(Args... _args) {
                   ENGINE_ASSERT(!hasComponent<Component>(), "A Node cannot have 2 components of the same type!!")
                   
                   #if IS_WINDOWS()
                   auto* _component = &graph->registry.emplace<Component>(ID, this, manager, graph, _args...);
                   #else
                   auto* _component = &graph->registry.template emplace<Component>(ID, this, manager, graph, _args...);
                   #endif
                   if(graph->onDataChanged != nullptr) graph->onDataChanged((void*)_component);
                   graph->renderingTreeData.isRenderizableTreeDirty |= std::is_same<Component, DisabledForRender>::value;
                   return _component;
               }
   
               template<typename Component>
               Component* getComponent() {
                   #if IS_WINDOWS()
                   return &graph->registry.get<Component>(ID);
                   #else
                   return &graph->registry.template get<Component>(ID);
                   #endif
               }
   
               template<typename Component>
               void removeComponent() {
                   #if IS_WINDOWS()
                   auto _removed = graph->registry.remove<Component>(ID);
                   #else
                   auto _removed = graph->registry.template remove<Component>(ID);
                   #endif
                   if(graph->onDataChanged != nullptr) graph->onDataChanged((void*)_removed);
                   graph->renderingTreeData.isRenderizableTreeDirty |= std::is_same<Component, DisabledForRender>::value;
               }
   
               template<typename Component>
               [[nodiscard]] bool hasComponent() const {
                   #if IS_WINDOWS()
                   return graph->registry.any_of<Component>(ID);
                   #else
                   return graph->registry.template any_of<Component>(ID);
                   #endif
               }
   
               Transform* getTransform() {
                   return transform;
               }
   
               NodeID getID() {
                   return ID;
               }
   
               void setParent(Node* _parent) {
                   graph->setParent(this, _parent);
               }
   
               bool isActive() {
                   return graph->isNodeActive(this);
               }
   
               void setActive(bool _active) {
                   return graph->setNodeActive(this, _active);
               }
       };
   
   }
   
   #endif //RDE_NODE_H
