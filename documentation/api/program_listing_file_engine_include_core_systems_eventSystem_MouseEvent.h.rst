
.. _program_listing_file_engine_include_core_systems_eventSystem_MouseEvent.h:

Program Listing for File MouseEvent.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_eventSystem_MouseEvent.h>` (``engine/include/core/systems/eventSystem/MouseEvent.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_MOUSE_EVENT_H
   #define RDE_MOUSE_EVENT_H
   
   #include "Event.h"
   #include "core/systems/inputSystem/keysAndButtons/KeyboardKeys.h"
   #include "core/systems/inputSystem/keysAndButtons/MouseKeys.h"
   
   namespace RDE {
   
       class MouseMovedEvent           : public Event {
           private:
               float xPos, yPos;
   
           public:
               MouseMovedEvent(float _xPos, float _yPos) : xPos(_xPos), yPos(_yPos) {  }
   
               [[nodiscard]] inline float getX() const { return xPos; }
   
               [[nodiscard]] inline float getY() const { return yPos; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << ": moved (x = " << xPos << ", y = " << yPos << ")";
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::MouseMoved; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "MouseMoved"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryInput | EventCategoryMouse; }
       };
   
   
   
   
       class MouseScrolledEvent        : public Event {
           private:
               float xScrolled, yScrolled;
   
           public:
               MouseScrolledEvent(float _xScrolled, float _yScrolled) : xScrolled(_xScrolled), yScrolled(_yScrolled) {  }
   
               [[nodiscard]] inline float getScrollX() const { return xScrolled; }
   
               [[nodiscard]] inline float getScrollY() const { return yScrolled; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << ": scrolled (x = " << xScrolled << ", y = " << yScrolled << ")";
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::MouseScrolled; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "MouseScrolled"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryInput | EventCategoryMouse; }
       };
   
   
   
   
       class MouseButtonEvent          : public Event {
           protected:
               MouseCode mouseButton;
   
           protected:
               explicit MouseButtonEvent(MouseCode _mouseButton) : mouseButton(_mouseButton) {  }
   
           public:
               [[nodiscard]] inline MouseCode getMouseButton() const { return mouseButton; }
               [[nodiscard]] int getCategoryFlags() const override  { return EventCategoryMouseButton | EventCategoryInput; }
       };
   
   
   
   
       class MouseButtonPressedEvent   : public MouseButtonEvent {
           private:
               int repeatedTimes = 1;
   
           public:
               explicit MouseButtonPressedEvent(MouseCode _mouseButton) : MouseButtonEvent(_mouseButton) {  }
               [[nodiscard]] inline int getRepeatedTimes() const { return repeatedTimes; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << ": button = " << mouseButton << " (repeated " << repeatedTimes << " times)";
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::MouseButtonPressed; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "MouseButtonPressed"; }
       };
   
   
   
   
       class MouseButtonReleasedEvent  : public MouseButtonEvent {
           public:
               explicit MouseButtonReleasedEvent(MouseCode _mouseButton) : MouseButtonEvent(_mouseButton) {  }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << ": button = " << mouseButton;
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::MouseButtonReleased; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "MouseButtonReleased"; }
       };
   
   }
   
   #endif //RDE_MOUSE_EVENT_H
