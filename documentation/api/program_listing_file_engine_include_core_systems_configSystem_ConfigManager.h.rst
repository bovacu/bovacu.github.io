
.. _program_listing_file_engine_include_core_systems_configSystem_ConfigManager.h:

Program Listing for File ConfigManager.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_configSystem_ConfigManager.h>` (``engine/include/core/systems/configSystem/ConfigManager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 15/05/22.
   //
   
   #ifndef RDE_CONFIG_LOADER_H
   #define RDE_CONFIG_LOADER_H
   
   #include "nlohmann/json.hpp"
   #include "core/graph/Scene.h"
   #include "core/systems/fileSystem/FileManager.h"
   
   namespace RDE {
   
       class Window;
       struct RDEConfig;
   
       struct Node_JsonPair {
           Node* node;
           nlohmann::json json;
       };
   
       class ConfigManager {
           public:
               void loadResources(RDEConfig* _rdeConfig, Manager* _manager);
   
               void loadScene(Manager* _manager, Scene* _scene, Window* _window, const std::string& _configFilePath);
   
               void unloadScene(Manager* _manager, Scene* _scene, const std::string& _configFilePath);
   
               void loadRDEConfig(RDEConfig* _config, FileManager& _manager);
   
           private:
               void instantiatePrefab(Scene* _scene, const nlohmann::json& _json);
   
               std::unordered_map<std::string, Node_JsonPair> createNodes(Scene* _scene, const nlohmann::json& _sceneJson);
   
               void loadNodes(Scene* _scene, Window* _window, const nlohmann::json& _sceneJson, const std::unordered_map<std::string, Node_JsonPair>& _nodes);
   
               void loadAssets(Manager* _manager, const nlohmann::json& _json);
   
               void loadTransformComponent(Scene* _scene, Node* _node, const nlohmann::json& _transformJson);
   
               void loadCameraComponent(Node* _nodeD, Scene* _scene, Window* _window, const nlohmann::json& _cameraJson);
   
               void loadSpriteRendererComponent(Node* _node, Scene* _scene, const nlohmann::json& _spriteRendererJson);
   
               void loadTextRendererComponent(Node* _node, Scene* _scene, const nlohmann::json& _textRendererJson);
   
               void loadBodyComponent(Node* _node, Scene* _scene, const nlohmann::json& _bodyJson);
   
               void unloadAssets(Scene* _scene, const nlohmann::json& _sceneJson);
       };
   
   }
   
   #endif //RDE_CONFIG_LOADER_H
