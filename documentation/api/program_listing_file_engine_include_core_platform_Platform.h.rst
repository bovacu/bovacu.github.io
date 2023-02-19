
.. _program_listing_file_engine_include_core_platform_Platform.h:

Program Listing for File Platform.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_platform_Platform.h>` (``engine/include/core/platform/Platform.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 8/2/22.
   
   
   #ifndef RDE_PLATFORM_H
   #define RDE_PLATFORM_H
   
   #include "core/systems/inputSystem/input/Input.h"
   namespace RDE {
   
       enum PlatformType {
           LINUX,
           WINDOWS,
           MAC,
           ANDROID_,
           IOS,
           UNSUPPORTED
       };
   
       class Platform {
           public:
               Window* createWindow(RDEConfig* _config);
   
           private:
               PlatformType getPlatform();
       };
   
   }
   
   
   #endif //RDE_PLATFORM_H
