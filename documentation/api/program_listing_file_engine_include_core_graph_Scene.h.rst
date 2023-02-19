
.. _program_listing_file_engine_include_core_graph_Scene.h:

Program Listing for File Scene.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_Scene.h>` (``engine/include/core/graph/Scene.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef RDE_SCENE_H
   #define RDE_SCENE_H
   
   #include "core/systems/inputSystem/input/WindowInput.h"
   #include "nlohmann/json.hpp"
   #include "core/util/Delta.h"
   #include "core/graph/Graph.h"
   #include "core/graph/components/Components.h"
   #include "core/systems/uiSystem/Canvas.h"
   
   namespace RDE {
   
       class Camera;
       class Window; 
       class Engine;
       struct RenderizableInnerData;
   
       class Scene {
           friend class Graph;
           friend class ConfigManager;
           friend class WindowInput;
           friend class Engine;
           friend class ImGuiScene;
           friend class SceneManager;
   
           private:
               std::vector<Camera*> cameras;
   
               std::unordered_map<std::string, NodeID> prefabs;
   
           public:
               std::string debugName;
   
               Engine* engine = nullptr;
   
               Graph* graph = nullptr;
   
               Canvas* canvas = nullptr;
   
               Camera* mainCamera = nullptr;
   
           protected:
               void onDisplayChanged();
   
               void onInnerEvent(Event& _event) {
                   onInnerEventUI(_event);
                   onInnerEventHierarchy(_event);
                   onEvent(_event);
               }
   
               void onInnerEventHierarchy(Event& _event); 
               void onInnerEventUI(Event& _event);
   
               void onInnerUpdate(Delta _dt) {
                   onInnerUpdateHierarchy(_dt);
                   onInnerUpdateUI(_dt);
                   onUpdate(_dt);
               }
               void onInnerUpdateHierarchy(Delta _dt); 
               void onInnerUpdateUI(Delta _dt);
   
               void onInnerFixedUpdate(Delta _dt) {
                   onInnerFixedUpdateHierarchy(_dt);
                   onInnerFixedUpdateUI(_dt);
                   onFixedUpdate(_dt);
               }
               void onInnerFixedUpdateHierarchy(Delta _dtt); 
               void onInnerFixedUpdateUI(Delta _dt);
   
               void onInnerLateUpdate(Delta _dt) {
                   onInnerLateUpdateHierarchy(_dt);
                   onInnerLateUpdateUI(_dt);
                   onLateUpdate(_dt);
               }
               void onInnerLateUpdateHierarchy(Delta _dt); 
               void onInnerLateUpdateUI(Delta _dt);
               
               void recalculateRenderizableTree(Node* _node);
               void recalculateRenderizableTreeUI(Node* _node);
   
               void onInnerRender(Delta _dt) {
                   onInnerRenderHierarchy(_dt); 
                   onInnerRenderUI(_dt); 
               }
               void onInnerRenderHierarchy(Delta _dt); 
               void onInnerRenderUI(Delta _dt);
   
               void postRenderSync();
               void postRenderSyncUI();
   
               void onInnerDebugRender(Delta _dt) {
                   onInnerDebugRenderHierarchy(_dt);
                   onInnerDebugRenderHierarchy(_dt);
                   onDebugRender(_dt);
               }
               void onInnerDebugRenderHierarchy(Delta _dt); 
               void onInnerDebugRenderUI(Delta _dt);
   
           public:
               explicit Scene(Engine* _engine, const std::string& _debugName = "Scene");
               virtual ~Scene();
   
               virtual void preInit(Manager* _manager, Window* _window, const nlohmann::json& _sceneJson) {  }
   
               virtual void onInit() {  }
   
               virtual void onEvent(Event& _event) {  }
   
               virtual void onUpdate(Delta _dt) {  }
   
               virtual void onFixedUpdate(Delta _dt) {  }
   
               virtual void onLateUpdate(Delta _dt) {  }
   
               virtual void onImGuiRender(Delta _dt) {  }
   
               virtual void onDebugRender(Delta _dt) {  }
   
               virtual void onEnd() {  }
   
               std::vector<Camera*>& getCameras();
   
               Camera* addCamera(Window* window);
   
               void enableCamera(Node* _camera, bool _enable);
   
               void removeCamera(Node* _camera);
   
               void switchMainCamera(Node* _camera);
   
               [[nodiscard]] const std::string& getName() const { return debugName; }
   
               std::vector<NodeID> getPrefabs();
   
               NodeID getPrefab(const std::string& _prefabKey);
       };
   
   }
   
   #endif //RDE_SCENE_H
