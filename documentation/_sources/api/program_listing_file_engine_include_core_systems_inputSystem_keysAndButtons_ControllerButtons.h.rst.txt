
.. _program_listing_file_engine_include_core_systems_inputSystem_keysAndButtons_ControllerButtons.h:

Program Listing for File ControllerButtons.h
============================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_inputSystem_keysAndButtons_ControllerButtons.h>` (``engine/include/core/systems/inputSystem/keysAndButtons/ControllerButtons.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_GAMEPAD_KEYS_H
   #define RDE_GAMEPAD_KEYS_H
   
   #include <cstdint>
   #include "core/platform/PlatformHeaderSDL.h"
   
   namespace RDE {
   
       typedef enum class ControllerButtons : uint16_t {
           ButtonA         = SDL_CONTROLLER_BUTTON_A,              // 0
           ButtonB         = SDL_CONTROLLER_BUTTON_B,              // 1
           ButtonX         = SDL_CONTROLLER_BUTTON_X,              // 2
           ButtonY         = SDL_CONTROLLER_BUTTON_Y,              // 3
           LB              = SDL_CONTROLLER_BUTTON_LEFTSHOULDER,   // 9
           RB              = SDL_CONTROLLER_BUTTON_RIGHTSHOULDER,  // 10
           Guide           = SDL_CONTROLLER_BUTTON_GUIDE,          // 5
           Start           = SDL_CONTROLLER_BUTTON_START,          // 6
           Select          = SDL_CONTROLLER_BUTTON_BACK,           // 4
           RightJoystick   = SDL_CONTROLLER_BUTTON_RIGHTSTICK,     // 8
           LeftJoystick    = SDL_CONTROLLER_BUTTON_LEFTSTICK,      // 7
           DPadUp          = SDL_CONTROLLER_BUTTON_DPAD_UP,        // 11
           DPadRight       = SDL_CONTROLLER_BUTTON_DPAD_RIGHT,     // 14
           DPadDown        = SDL_CONTROLLER_BUTTON_DPAD_DOWN,      // 12
           DPadLeft        = SDL_CONTROLLER_BUTTON_DPAD_LEFT       // 13
       } GamePad;
   
       typedef enum class ControllerAxis {
           Left,
           Right,
           LT,
           RT
       } GamePadA;
   
       static const char* ControllerKeysStr[] = {
               "A", "B", "X", "Y", "Select", "Guide", "Start", "L3", "R3", "LB", "RB",
               "DUp", "DDown", "DLeft", "DRight", "", "LB", "", "RB"
       };
   }
   
   #endif // RDE_GAMEPAD_KEYS_H
