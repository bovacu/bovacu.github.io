
.. _program_listing_file_engine_include_core_Manager.h:

Program Listing for File Manager.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_Manager.h>` (``engine/include/core/Manager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 17/05/22.
   //
   
   #ifndef ENGINE_MANAGER_H
   #define ENGINE_MANAGER_H
   
   #include "core/render/elements/TextureAtlasManager.h"
   #include "core/systems/inputSystem/input/Input.h"
   #include "core/systems/console/Console.h"
   #include "core/systems/uiSystem/FontManager.h"
   #include "core/systems/soundSystem/SoundManager.h"
   #include "core/systems/uiSystem/SceneManager.h"
   #include "core/render/elements/ShaderManager.h"
   #include "core/systems/ecsSystem/ECSManager.h"
   #include "core/systems/physicsSystem/PhysicsManager.h"
   #include "core/systems/configSystem/ConfigManager.h"
   #include "core/systems/fileSystem/FileManager.h"
   #include "core/systems/inputSystem/input/ControllerInput.h"
   #include "core/render/RenderManager.h"
   #include "core/systems/localization/LocalizationManager.h"
   
   namespace RDE {
   
       class Manager {
   
           public:
               explicit Manager();
   
               Engine* engine;
               ConfigManager configManager;
   
               TextureAtlasManager textureManager;
   
               ShaderManager shaderManager;
   
               FontManager fontManager;
   
               SoundManager soundManager;
   
               InputManager inputManager;
   
               Console consoleManager;
   
               SceneManager sceneManager;
   
               ECSManager ecsManager;
   
               PhysicsManager physics;
   
               FileManager fileManager;
   
               ControllerVibrationManager controllerVibrationManager;
   
               RenderManager renderManager;
   
                LocalizationManager localizationManager;
   
           public:
               void init(Engine* _engine);
   
               void destroy();
       };
   
   }
   
   #endif //ENGINE_MANAGER_H
