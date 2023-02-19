
.. _program_listing_file_engine_include_core_systems_inputSystem_input_MouseInput.h:

Program Listing for File MouseInput.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_inputSystem_input_MouseInput.h>` (``engine/include/core/systems/inputSystem/input/MouseInput.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 6/2/22.
   
   
   #ifndef RDE_MOUSE_INPUT_H
   #define RDE_MOUSE_INPUT_H
   
   
   #include "core/util/Util.h"
   #include "core/systems/inputSystem/keysAndButtons/MouseKeys.h"
   #include "Input.h"
   
   namespace RDE {
   
       class MouseInput : public Input {
           private:
               std::unordered_map<MouseCode, int>  pressedMouseButtons;
   
               Vec2I mousePos;
   
           public:
               void init(Engine* _engine, Window* _window);
   
               int getState(int _keyOrButton);
   
               void setState(int _keyOrButton, int _state);
   
               Vec2F getMousePosition() const;
   
           private:
               void onMouseMoved(SDL_Event& _event);
   
               void onMouseDown(SDL_Event& _event);
   
               void onMouseUp(SDL_Event& _event);
   
               void onMouseScroll(SDL_Event& _event);
       };
   
   }
   
   
   #endif //RDE_MOUSE_INPUT_H
