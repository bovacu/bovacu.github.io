
.. _program_listing_file_engine_include_core_systems_inputSystem_input_MobileInput.h:

Program Listing for File MobileInput.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_inputSystem_input_MobileInput.h>` (``engine/include/core/systems/inputSystem/input/MobileInput.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 10/2/22.
   
   
   #ifndef RDE_MOBILE_INPUT_H
   #define RDE_MOBILE_INPUT_H
   
   #include "Input.h"
   
   namespace RDE {
   
       typedef uint32_t TimeStamp;
   
       class MobileInput : public Input {
           private:
               std::unordered_map<int, int> pressedFingers;
   
               float pressure;
   
               Vec2F fingerPosInit;
   
               Vec2F fingerPosEnd;
   
               Vec2F fingerMoveDistance;
   
               TimeStamp initOfTouch;
   
               TimeStamp endOfTouch;
   
           public:
               void init(Engine* _engine, Window* _window);
   
               int getState(int _keyOrButton);
   
               void setState(int _keyOrButton, int _state);
   
           private:
               void onTouchDown(SDL_Event& _event);
   
               void onTouchUp(SDL_Event& _event);
   
               void onTouchMoved(SDL_Event& _event);
       };
   
   }
   
   #endif //RDE_MOBILE_INPUT_H
