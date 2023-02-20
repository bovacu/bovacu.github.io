
.. _program_listing_file_engine_include_core_systems_eventSystem_Event.h:

Program Listing for File Event.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_eventSystem_Event.h>` (``engine/include/core/systems/eventSystem/Event.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_EVENT_H
   #define RDE_EVENT_H
   
   #include "core/util/Delegate.h"
   #include <string>
   #include <sstream>
   
   namespace RDE {
   
       enum class EventType : unsigned {
           None, WindowClosed, WindowResized, WindowMoved, WindowFocused, WindowLostFocus, GameFrame, GameUpdate,
           GameRender, KeyPressed, KeyDown, KeyReleased, KeyTyped, TextTyped, MouseButtonPressed, MouseButtonDown, MouseButtonReleased,
           MouseScrolled, MouseMoved, WindowMinimized, WindowDisplayChanged,
   
           ControllerAxisMoved, ControllerButtonDown, ControllerButtonUp,
   
           MobileTouchDown, MobileTouchUp, MobileTouchMoved
       };
   
       enum EventCategory : unsigned {
           None,
           EventCategoryGame           = 1u << 0u, 
           EventCategoryInput          = 1u << 1u, 
           EventCategoryKeyboard       = 1u << 2u, 
           EventCategoryMouse          = 1u << 3u, 
           EventCategoryMouseButton    = 1u << 4u, 
           EventCategoryControllerButton    = 1u << 5u,  
           EventCategoryMobileInput    = 1u << 6u  
       };
   
       class Event {
           public:
               bool handled = false;
   
           public:
               static EventType getStaticType() { return EventType::None; }
   
               [[nodiscard]] virtual EventType getEventType() const = 0;
   
               [[nodiscard]] virtual const char* getName() const = 0;
   
               [[nodiscard]] virtual int getCategoryFlags() const = 0;
   
               [[nodiscard]] virtual std::string toString() const { return "Not defined in specific class"; };
   
               [[nodiscard]] inline bool isInCategory(EventCategory _category) const { return (unsigned)getCategoryFlags() & _category; }
       };
   
       class EventDispatcher {
   
           template<typename T>
           using EventFn = std::function<bool(T&)>;
   
       private:
           Event& event;
   
       public:
           explicit EventDispatcher(Event& _event) : event(_event) {}
   
           template<typename T>
           bool dispatchEvent(const UniqueDelegate<bool(T&)>& _delegate) {
               if(event.handled) return false;
               if (event.getEventType() == T::getStaticType()) {
                   event.handled = _delegate(reinterpret_cast<T&>(event));
                   return true;
               }
   
               return false;
           }
   
           template<typename T>
           bool dispatchEvent() {
               if(event.handled) return false;
               return event.getEventType() == T::getStaticType();
           }
       };
   
   
   }
   
   #endif //RDE_EVENT_H
