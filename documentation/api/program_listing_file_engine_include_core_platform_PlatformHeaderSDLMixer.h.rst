
.. _program_listing_file_engine_include_core_platform_PlatformHeaderSDLMixer.h:

Program Listing for File PlatformHeaderSDLMixer.h
=================================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_platform_PlatformHeaderSDLMixer.h>` (``engine/include/core/platform/PlatformHeaderSDLMixer.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 8/2/22.
   
   
   #ifndef RDE_PLATFORM_HEADER_SDL_MIXER_H
   #define RDE_PLATFORM_HEADER_SDL_MIXER_H
   
   #include "core/Core.h"
   
   #if IS_ANDROID()
       #ifndef SDL_DISABLE_MMINTRIN_H
           #define SDL_DISABLE_MMINTRIN_H 
       #endif
   
       #ifndef SDL_DISABLE_XMMINTRIN_H
           #define SDL_DISABLE_XMMINTRIN_H 
       #endif
       
       #ifndef SDL_DISABLE_EMMINTRIN_H
           #define SDL_DISABLE_EMMINTRIN_H 
       #endif
   
       #ifndef SDL_DISABLE_PMMINTRIN_H
           #define SDL_DISABLE_PMMINTRIN_H 
       #endif
   
       #ifndef SDL_DISABLE_IMMINTRIN_H
           #define SDL_DISABLE_IMMINTRIN_H
       #endif 
   #endif
   
   #if IS_MOBILE()
   #include "SDL_mixer.h"
   #else
   #include "SDL2/SDL_mixer.h"
   #endif
   
   #endif //RDE_PLATFORM_HEADER_SDL_MIXER_H
