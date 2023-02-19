
.. _program_listing_file_engine_include_RDEEntry.h:

Program Listing for File RDEEntry.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_RDEEntry.h>` (``engine/include/RDEEntry.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 8/20/22.
   //
   
   #ifndef RDE_ENTRY_H
   #define RDE_ENTRY_H
   
   #include "core/Engine.h"
   #include "core/util/Functions.h"
   #if IS_WINDOWS()
   #include <io.h>
   #include <fcntl.h>
   #include <windows.h>
   #endif
   
   int main(int _argc, char** _argv) {
       // This is needed because on windows SDL2 disables the console and logs if it is not in Debug.
       #if IS_WINDOWS()
           #ifdef ENGINE_DEBUG
               if(AllocConsole())
               {
                   freopen_s((FILE**)stdout, "CONOUT$", "w", stdout);
                   freopen_s((FILE**)stdin, "CONIN$", "r", stdin);
                   std::ios::sync_with_stdio(1);
               }
           #endif
       #endif
   
       auto* _e = RDE::createEngine(_argc, _argv);
       _e->onRun();
       _e->destroy();
       delete _e;
   
       return EXIT_SUCCESS;
   }
   
   #endif //RDE_ENTRY_H
