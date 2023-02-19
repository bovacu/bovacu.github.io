
.. _program_listing_file_engine_include_core_graph_Graph.h:

Program Listing for File Graph.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_Graph.h>` (``engine/include/core/graph/Graph.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 9/3/22.
   
   
   #ifndef RDE_GRAPH_H
   #define RDE_GRAPH_H
   
   #include "entt/entt.hpp"
   #include "core/util/Delta.h"
   #include "core/systems/eventSystem/Event.h"
   #include "core/graph/components/Transform.h"
   #include "core/graph/components/Components.h"
   #include "core/graph/components/ui/UITransform.h"
   #include <tuple>
   
   namespace RDE {
   
       typedef entt::entity NodeID;
       typedef entt::registry NodeContainer;
       #define NODE_ID_NULL entt::null
   
       class Engine; 
       class Scene; 
       class Manager;
   
       struct Node; 
       struct RenderizableInnerData;
   
       struct RenderingTreeData {
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> sprites;
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> dynamicSprites;
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> particleSystmes;
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> texts;
   
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> uiImages;
           std::vector<std::tuple<RenderizableInnerData*, Transform*, void*>> uiTexts;
   
           std::vector<Transform*> dirtyTransforms;
           bool isRenderizableTreeDirty = false;
           bool isUI = false;
       };
   
       class Graph {
           friend class Transform;
           friend class UITransform;
           friend class Scene;
           friend class Canvas;
           friend class Node;
           friend class ImGuiScene;
           friend class ConfigManager;
           friend class RenderizableInnerData;
   
           private:
               Node* sceneRoot;
   
               std::string name;
   
               NodeContainer registry;
   
               Scene* scene = nullptr;
   
               UniqueDelegate<void(void*)> onDataChanged;
   
               RenderingTreeData renderingTreeData;
   
           private:
               void printScene(Node* _node, std::ostream& _os, int& _indent);
   
               void removeNodeInner(Node* _node, bool _delete = true);
   
           public:
               UniqueDelegate<void(NodeContainer&, Event&)> onEventDel;
   
           public:
               Graph(Scene* _scene, const std::string& _sceneName, bool _isUI = false);
               ~Graph() {};
   
               Node* createNode(const std::string& _tag = "", Node* _parent = nullptr);
   
               Node* instantiatePrefab(Node* _prefab, const Vec2F& _position, Node* _parent = nullptr);
   
               void removeNode(Node* _node);
   
               void removeNode(const std::string& _nodeTagName);
   
               void orphan(Node* _node);
   
               void orphan(const std::string& _nodeTagName);
   
               Node* getNode(const std::string& _tagName);
   
               Node* getNode(const NodeID& _nodeID);
   
               void setParent(Node* _node, Node* _parent);
   
               std::string toString();
   
               Node* getRoot();
   
               void setNodeActive(Node* _node, bool _active);
   
               bool isNodeActive(Node* _node);
   
               template<typename... Archetype>
               auto query();
   
               NodeContainer& getNodeContainer();
       };
   
       template<typename... Archetype>
       auto Graph::query() {
           #if IS_WINDOWS()
           return registry.view<Archetype...>().each();
           #else
           return registry.template view<Archetype...>().each();
           #endif
       }
   }
   
   #endif //RDE_GRAPH_H
