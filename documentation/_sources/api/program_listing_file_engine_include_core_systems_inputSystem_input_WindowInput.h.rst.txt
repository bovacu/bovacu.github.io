
.. _program_listing_file_engine_include_core_systems_inputSystem_input_WindowInput.h:

Program Listing for File WindowInput.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_inputSystem_input_WindowInput.h>` (``engine/include/core/systems/inputSystem/input/WindowInput.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 6/2/22.
   
   
   #ifndef RDE_WINDOW_INPUT_H
   #define RDE_WINDOW_INPUT_H
   
   
   #include "core/util/Util.h"
   #include "core/systems/inputSystem/input/Input.h"
   
   namespace RDE {
   
       class WindowInput : public Input {
           public:
               void init(Engine* _engine, Window* _window);
   
           private:
               void onWindowEvent(SDL_Event& _event);
   
               void onWindowEnter(SDL_Event& _event);
   
               void onWindowExit(SDL_Event& _event);
   
               void onWindowGainFocus(SDL_Event& _event);
   
               void onWindowLostFocus(SDL_Event& _event);
   
               void onWindowResize(SDL_Event& _event);
   
               void onWindowMoved(SDL_Event& _event);
   
               void onWindowDisplayChanged(int _newWindowDisplay);
   
               void onWindowMinimized(SDL_Event& _event);
   
               void onWindowMaximized(SDL_Event& _event);
   
               void onQuit(SDL_Event& _event);
   
               void onDestroyApp(SDL_Event& _event);
   
               void onDidEnterForegroundApp(SDL_Event& _event);
   
               void onDidEnterBackground(SDL_Event& _event);
   
               void onWillEnterForegroundApp(SDL_Event& _event);
   
               void onWillEnterBackground(SDL_Event& _event);
       };
   
   }
   
   
   #endif //RDE_WINDOW_INPUT_H
