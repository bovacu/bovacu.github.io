
.. _program_listing_file_engine_include_core_render_elements_Vertex.h:

Program Listing for File Vertex.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_Vertex.h>` (``engine/include/core/render/elements/Vertex.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_VERTEX_H
   #define RDE_VERTEX_H
   
   #include <glm/glm.hpp>
   
   namespace RDE {
   
       #ifndef NUMBER_OF_EXTRA_ELEMENTS
           #define NUMBER_OF_EXTRA_ELEMENTS 16
       #endif
   
       struct OpenGLVertex {
   
           /*
            * @brief Position in screen coordinates where the vertex should be placed.
            */
           glm::vec2 position {0, 0};
   
           uint32_t color = 0xFFFFFF;
   
           glm::vec2 texCoord {0, 0};
   
           float extraData[NUMBER_OF_EXTRA_ELEMENTS] = {0};
   
           OpenGLVertex() {  }
           OpenGLVertex(const glm::vec2& _position, const glm::vec2& _texCoord, uint32_t _color) : position(_position), color(_color), texCoord(_texCoord) {  }
           OpenGLVertex(const glm::vec2& _position, const glm::vec2& _texCoord, uint32_t _color, float* _extraData, size_t _extraDataAmount) : position(_position), color(_color), texCoord(_texCoord) { 
               for(auto _i = 0; _i < _extraDataAmount; _i++) {
                   extraData[_i] = _extraData[_i];
               }
           }
       };
   
       struct OpenGLVertexDebug {
   
           glm::vec2 position {0, 0};
   
           uint32_t color = 0xFFFFFF;
   
           OpenGLVertexDebug(const glm::vec2& _position, uint32_t _color) : position(_position), color(_color) {  }
       };
   
   }
   
   #endif //RDE_VERTEX_H
