
.. _program_listing_file_engine_include_core_util_Rect.h:

Program Listing for File Rect.h
===============================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_util_Rect.h>` (``engine/include/core/util/Rect.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 6/1/22.
   
   
   #ifndef RDE_RECT_H
   #define RDE_RECT_H
   
   #include "Vec.h"
   
   namespace RDE {
   
       template<typename T>
       struct Rect {
           T bottomLeftCorner;
           T size;
       };
   
       typedef Rect<Vec2F> FloatRect;
       typedef Rect<Vec2I> IntRect;
   
       inline std::ostream& operator<<(std::ostream& _os, const IntRect& _rect){
           _os << "(bottomLeft: [" << _rect.bottomLeftCorner.x << ", " << _rect.bottomLeftCorner.y << "], size: [" << _rect.size.x << ", " << _rect.size.y << ')';
           return _os;
       }
   
   
   }
   
   #endif //RDE_RECT_H
