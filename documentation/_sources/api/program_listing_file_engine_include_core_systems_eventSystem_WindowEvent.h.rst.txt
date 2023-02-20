
.. _program_listing_file_engine_include_core_systems_eventSystem_WindowEvent.h:

Program Listing for File WindowEvent.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_eventSystem_WindowEvent.h>` (``engine/include/core/systems/eventSystem/WindowEvent.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_WINDOW_EVENT_H
   #define RDE_WINDOW_EVENT_H
   
   #include "Event.h"
   
   namespace RDE {
   
       class WindowResizedEvent    : public Event {
           private:
               unsigned int width, height;
   
           public:
               WindowResizedEvent(unsigned int _width, unsigned int _height) : width(_width), height(_height) {  }
   
               [[nodiscard]] inline unsigned int getWidth() const { return width; };
   
               [[nodiscard]] inline unsigned int getHeight() const { return height; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << " -> (width = " << width << ", height = " << height << ")";
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::WindowMoved; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "WindowMoved"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
   
   
   
       class WindowMovedEvent    : public Event {
           private:
               unsigned int x, y;
   
           public:
               WindowMovedEvent(unsigned int _x, unsigned int _y) : x(_x), y(_y) {}
   
               [[nodiscard]] inline unsigned int getX() const { return x; };
   
               [[nodiscard]] inline unsigned int getY() const { return y; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << " -> (x = " << x << ", y = " << y << ")";
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::WindowResized; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "WindowResized"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
       class WindowDisplayChangedEvent  : public Event {
           private:
               int windowDisplayIndex;
   
           public:
               explicit WindowDisplayChangedEvent(int _windowDisplayIndex) : windowDisplayIndex(_windowDisplayIndex) {  }
               [[nodiscard]] int getWindowDisplayIndex() const { return windowDisplayIndex; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << " -> window display index = " << windowDisplayIndex;
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::WindowDisplayChanged; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "WindowDisplayChanged"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
       class WindowMinimizedEvent  : public Event {
           private:
               int minimized;
   
           public:
               explicit WindowMinimizedEvent(int _minimized) : minimized(_minimized) {  }
               [[nodiscard]] int getMinimized() const { return minimized; }
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName() << " -> (minimized = " << minimized;
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::WindowMinimized; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "WindowMinimized"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
   
   
       class WindowClosedEvent     : public Event {
           public:
   
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName();
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::WindowClosed; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "WindowClosed"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
   
       class WindowFrameEvent      : public Event {
           public:
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName();
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::GameFrame; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "GameFrame"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
   
   
       class WindowUpdateEvent     : public Event {
           public:
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName();
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::GameUpdate; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "GameUpdate"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   
   
   
   
   
       class WindowRenderEvent     : public Event {
           public:
               [[nodiscard]] std::string toString() const override {
                   std::stringstream _sst;
                   _sst << getName();
                   return _sst.str();
               }
   
               static EventType getStaticType() { return EventType::GameRender; }
               [[nodiscard]] EventType getEventType() const override { return getStaticType(); }
               [[nodiscard]] const char* getName() const override { return "GameRender"; }
               [[nodiscard]] int getCategoryFlags() const override { return EventCategoryGame; }
       };
   }
   
   #endif //RDE_WINDOW_EVENT_H
