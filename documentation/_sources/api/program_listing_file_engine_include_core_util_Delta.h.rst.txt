
.. _program_listing_file_engine_include_core_util_Delta.h:

Program Listing for File Delta.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_util_Delta.h>` (``engine/include/core/util/Delta.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #pragma once
   
   #ifndef RDE_TIME_STEP_H
   #define RDE_TIME_STEP_H
   
   namespace RDE {
   
       class Delta {
           private:
               float time;
   
           public:
               Delta(float _time = 0.0f) : time(_time) {  }
   
               operator float() const { return time; }
   
               float getSeconds() const { return time; }
               float getMilliseconds() const { return time * 1000.0f; }
       };
   
   }
   
   #endif //RDE_TIME_STEP_H
