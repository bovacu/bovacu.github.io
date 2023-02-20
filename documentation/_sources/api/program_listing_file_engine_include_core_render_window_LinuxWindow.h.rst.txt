
.. _program_listing_file_engine_include_core_render_window_LinuxWindow.h:

Program Listing for File LinuxWindow.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_window_LinuxWindow.h>` (``engine/include/core/render/window/LinuxWindow.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 8/20/22.
   //
   
   #ifndef RDE_LINUX_WINDOW_H
   #define RDE_LINUX_WINDOW_H
   
   #include "core/Core.h"
   
   #if IS_LINUX() && !IS_ANDROID()
   
   #include "core/render/window/Window.h"
   
   namespace RDE {
   
       class LinuxWindow : public Window {
           public:
               explicit LinuxWindow(RDEConfig* _config);
       };
   
   }
   
   #endif
   
   #endif //RDE_LINUX_WINDOW_H
