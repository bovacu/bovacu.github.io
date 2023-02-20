
.. _program_listing_file_engine_include_core_render_window_IOSWindow.h:

Program Listing for File IOSWindow.h
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_window_IOSWindow.h>` (``engine/include/core/render/window/IOSWindow.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 8/20/22.
   //
   
   #ifndef RDE_IOS_WINDOW_H
   #define RDE_IOS_WINDOW_H
   
   #include "core/Core.h"
   
   #if IS_IOS()
   
   #include "Window.h"
   
   namespace RDE {
   
       class IOSWindow : public Window {
           public:
               explicit IOSWindow(RDEConfig* _config);
       };
   }
   
   #endif
   
   #endif //RDE_IOS_WINDOW_H
