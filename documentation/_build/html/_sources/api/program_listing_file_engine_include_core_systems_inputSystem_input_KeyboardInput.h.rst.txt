
.. _program_listing_file_engine_include_core_systems_inputSystem_input_KeyboardInput.h:

Program Listing for File KeyboardInput.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_inputSystem_input_KeyboardInput.h>` (``engine/include/core/systems/inputSystem/input/KeyboardInput.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 6/2/22.
   
   
   #ifndef RDE_KEYBOARD_INPUT_H
   #define RDE_KEYBOARD_INPUT_H
   
   
   #include "core/util/Util.h"
   #include "core/systems/inputSystem/keysAndButtons/KeyboardKeys.h"
   #include "Input.h"
   #include <SDL_events.h>
   
   namespace RDE {
   
       class KeyboardInput : public Input {
           private:
               std::unordered_map<KeyCode, int>  pressedKeyboardKeys;
   
           public:
               void init(Engine* _engine, Window* _window);
   
               int getState(int _keyOrButton);
   
               void setState(int _keyOrButton, int _state);
   
           private:
               void onKeyDown(SDL_Event& _event);
   
               void onKeyUp(SDL_Event& _event);
   
               void onTextTyped(SDL_Event& _event);
       };
   
   }
   
   
   #endif //RDE_KEYBOARD_INPUT_H
