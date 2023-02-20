
.. _program_listing_file_engine_include_core_render_window_Window.h:

Program Listing for File Window.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_window_Window.h>` (``engine/include/core/render/window/Window.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #include "core/util/Delegate.h"
   #ifndef RDE_WINDOW_H
   #define RDE_WINDOW_H
   
   #include "core/util/Vec.h"
   #include "core/systems/eventSystem/Event.h"
   #include "core/platform/PlatformHeaderSDL.h"
   
   namespace RDE {
   
       struct RDEConfig;
   
       class Window {
   
           friend class WindowInput;
   
           protected:
               SDL_Window* window = nullptr;
   
               SDL_GLContext context {};
   
               UniqueDelegate<void(Event&)> eventCallback;
   
               RDEConfig* properties = nullptr;
   
               bool minimized = false;
   
               bool hasFocus = true;
   
               bool running = true;
   
               int currentDisplayIndex = -1;
   
           public:
               UniqueDelegate<bool()> shouldUpdateWindow;
   
               Delegate<void(const Vec2F&)> onWindowMovedCallback;
   
               Delegate<void(const Vec2I&)> onWindowResizedCallback;
   
               Delegate<void(int)> onWindowDisplayChangedCallback;
   
               Delegate<void()> onWindowMinimizedCallback;
   
               Delegate<void()> onWindowMaximizedCallback;
   
               Delegate<void()> onWindowFocusedCallback;
   
               Delegate<void()> onWindowUnfocusedCallback;
   
           protected:
               explicit Window(RDEConfig* _props);
   
           public:
               ~Window() ;
   
               void update();
   
               void consumeEvent(Event& _e) const { eventCallback(_e); }
   
               [[nodiscard]] int getWidth() const;
   
               [[nodiscard]] int getHeight() const;
   
               std::string& getTitle();
   
               void setTitle(const std::string& _title);
   
               void setWindowSize(int _width, int _height) ;
   
               [[nodiscard]] Vec2I getWindowSize() const;
   
               [[nodiscard]] Vec2I getDisplaySize() const;
   
               void setFullscreen(bool _fullscreen);
   
               [[nodiscard]] bool isFullscreen() const;
   
               void setEventCallback(const UniqueDelegate<void(Event&)>& _callback);
   
               void setVSync(bool _enable);
   
               [[nodiscard]] bool isVSyncActive() const;
   
               [[nodiscard]] SDL_Window* getNativeWindow() const;
   
               [[nodiscard]] SDL_GLContext& getContext();
   
               [[nodiscard]] Vec2I getPosition() const;
   
               void setPosition(const Vec2I& _position);
   
               void setIcon(const std::string& _path);
   
               bool isMinimized();
   
               bool isRunning();
   
               bool isFocused();
   
               void stop();
   
               void refreshDpi();
   
               void allowMouseToMoveOutOfWindow(bool _allow);
       };
   
   }
   
   #endif // RDE_WINDOW_H
