
.. _program_listing_file_engine_include_core_render_window_MacWindow.h:

Program Listing for File MacWindow.h
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_window_MacWindow.h>` (``engine/include/core/render/window/MacWindow.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 8/20/22.
   //
   
   #ifndef RDE_MAC_WINDOW_H
   #define RDE_MAC_WINDOW_H
   
   #include "core/Core.h"
   #if IS_MAC()
   
   #include "core/Engine.h"
   
   namespace RDE {
       class MacWindow : public Window {
           public:
               explicit MacWindow(RDEConfig* _config);
       };
   
   }
   
   #endif
   
   #endif //RDE_MAC_WINDOW_H
