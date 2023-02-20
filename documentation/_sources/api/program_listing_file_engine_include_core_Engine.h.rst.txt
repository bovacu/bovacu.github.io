
.. _program_listing_file_engine_include_core_Engine.h:

Program Listing for File Engine.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_Engine.h>` (``engine/include/core/Engine.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 24/12/21.
   
   
   #ifndef RDE_ENGINE_H
   #define RDE_ENGINE_H
   
   
   #include "core/render/window/Window.h"
   #include "core/systems/eventSystem/WindowEvent.h"
   #include "core/graph/ImGuiScene.h"
   #include "core/render/elements/FrameBuffer.h"
   #include "core/Manager.h"
   #include "core/systems/configSystem/ConfigManager.h"
   #include "core/platform/Platform.h"
   
   int main(int argc, char** argv);
   
   namespace RDE {
   
       class Scene;
   
       struct LocalizationConfig {
           std::string localizationPath;
   
            std::string replacementSymbol = "~";
       };
   
       struct RDEConfig {
           struct WindowProperties {
               std::string title = "Default";
   
               Vec2I size { 1280, 720 };
   
               Vec2I resolution { 1280, 720 };
   
               bool fullScreen = false;
   
               bool vsync = true;
   
               bool allowRunningOnBackground = true;
   
               float verticalDpi = 0, horizontalDpi = 0, diagonalDpi = 0;
           };
   
           struct ProjectProperties {
               std::string iconPath;
   
               std::string resourcesPath;
   
               LocalizationConfig localizationConfig;
           };
   
           WindowProperties windowData {};
   
           ProjectProperties projectData {};
   
           std::unordered_map<std::string, Scene*> registeredScenes = {};
       };
   
       class Engine {
           public:
               Manager manager {};
   
               RDEConfig rdeConfig {};
   
           private:
               float fixedDelta = -1;
   
               unsigned int fpsCounter = 0;
   
               unsigned int frameCounter = 0;
   
               Color backgroundColor = Color::Red;
   
               FrameBuffer* frameBuffer = nullptr;
   
               UniqueDelegate<void(FrameBuffer*)> redirectionFunc;
   
               UniqueDelegate<void(FrameBuffer*)> imGuiRedirectionFunc;
   
               Window* window = nullptr;
   
               #if !IS_MOBILE()
               ImGuiScene* imGuiLayer = nullptr;
               #endif
   
               UniqueDelegate<bool(WindowResizedEvent&)> wreDel;
   
               Platform platform;
   
           public:
               Engine();
   
               [[nodiscard]] int getFps() const;
   
               [[nodiscard]] float geFixedDelta() const;
   
               void setFixedDelta(float _fixedDelta);
   
               void onInit(Scene* _scene);
   
               void onRun();
   
               void onEvent(Event& _event);
   
               void onUpdate(Delta _dt);
   
               void onFixedUpdate(Delta _fixedDt);
   
               void onLateUpdate(Delta _dt);
   
               void onRender(Delta _dt);
   
               void destroy();
   
               Window* getWindow() { return window; }
   
               void setRenderingRedirection(UniqueDelegate<void(FrameBuffer*)>& _redirectionFunc);
   
               void setRenderingRedirectionToImGui(UniqueDelegate<void(FrameBuffer*)>& _redirectionFunc);
   
           private:
               bool onWindowResized(WindowResizedEvent& _e);
   
               Logs changeColorConsoleCommand(const std::vector<std::string>& _args);
   
               Logs setParentCommand(const std::vector<std::string>& _args);
   
               Logs componentsCommands(const std::vector<std::string>& _args);
       };
   
       Engine* createEngine(int _argc, char** _argv);
   }
   
   
   #endif //RDE_ENGINE_H
