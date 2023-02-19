
.. _program_listing_file_engine_include_core_graph_ImGuiScene.h:

Program Listing for File ImGuiScene.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_ImGuiScene.h>` (``engine/include/core/graph/ImGuiScene.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_IMGUI_LAYER_H
   #define RDE_IMGUI_LAYER_H
   
   #include "core/Core.h"
   
   #if !IS_MOBILE()
   
   #include <chrono>
   #include "core/graph/Scene.h"
   #include "core/graph/components/ComponentBase.h"
   #include "core/systems/eventSystem/MouseEvent.h"
   #include "core/systems/profiling/Profiler.h"
   #include "imgui_impl_opengl3.h"
   #include "imgui_impl_sdl.h"
   
   namespace RDE {
   
       // This class is a fucking mess, and it needs to be reworked, but for now I just use it for debugging and it does the job.
   
       class Graph;
   
       class ImGuiScene : public Scene {
           private:
               int idIndex = 0;
               bool anyWindowHovered = false;
               bool windowsHovered[4] {false, false, false, false};
               UniqueDelegate<bool(MouseScrolledEvent&)> mseDel;
               UniqueDelegate<bool(MouseButtonPressedEvent&)> mbpeDel;
               UniqueDelegate<bool(MouseMovedEvent&)> mmeDel;
               NodeID selectedNode = NODE_ID_NULL;
               NodeID selectedNodeCanvas = NODE_ID_NULL;
   
           public:
               bool show = false;
   
           public:
               ImGuiScene(Engine* _engine);
               ~ImGuiScene() override {};
   
               void onInit() override;
               void onEvent(Event& _e) override;
               void onUpdate(Delta _dt) override {  }
               void onImGuiRender(Delta _dt) override {  }
               void onEnd() override;
   
               void begin();
               void end();
   
               bool onMouseScrolled(MouseScrolledEvent& _e);
               bool onMouseClicked(MouseButtonPressedEvent& _e);
               bool onMouseMovedEvent(MouseMovedEvent& _e);
   
               void drawDebugInfo(Scene* _scene);
   
           private:
               int createID();
               void resetID();
   
               void console();
               static int consoleStub(ImGuiInputTextCallbackData* _data);
               int consoleIntro(ImGuiInputTextCallbackData* _data);
   
               void charToIntSize(const std::string& _size, int* _resolution);
               void metrics();
               void mouseInfo();
               void showFileExplorer();
   
               void hierarchy(Scene* _scene);
               void hierarchyRecursionStub(Scene* _scene, Graph* _graph, Node* _node, NodeID& _selectedNode);
               void showLoadedPrefabs(Scene* _scene, Graph* _graph, Node* _node, NodeID& _selectedNode);
               void nodeComponents(Graph* _graph, const NodeID _selectedNode);
               void activeComponent(Graph* _graph, const NodeID _selectedNode);
               void transformComponent(Graph* _graph, const NodeID _selectedNode);
               void tagComponent(Graph* _graph, const NodeID _selectedNode);
               void cameraComponent(Graph* _graph, const NodeID _selectedNode);
               void bodyComponent(Graph* _graph, const NodeID _selectedNode);
               void spriteComponent(Graph* _graph, const NodeID _selectedNode);
               void textComponent(Graph* _graph, const NodeID _selectedNode);
               void enabledComponent(ComponentBase* _base);
   
               void uiTransformComponent(Graph* _graph, const NodeID _selectedNode);
               void uiButtonComponent(Graph* _graph, const NodeID _selectedNode);
               void uiImageComponent(Graph* _graph, const NodeID _selectedNode);
               void uiTextComponent(Graph* _graph, const NodeID _selectedNode);
               void uiMaskComponent(Graph* _graph, const NodeID _selectedNode);
               void uiCanvasStopperComponent(Graph* _graph, const NodeID _selectedNode);
   
               static std::unordered_map<ProfilerState, RollingBuffer> plotBuffers;
   
               // Debug
               void printFPSDrawCallsAndRAM();
               void printAtlases();
               void printResolutionFullscreenAndVSync();
   
               bool checkForFocus();
       };
   
   }
   
   #endif
   
   #endif //RDE_IMGUI_LAYER_H
