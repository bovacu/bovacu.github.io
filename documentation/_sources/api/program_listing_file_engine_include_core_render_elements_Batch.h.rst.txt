
.. _program_listing_file_engine_include_core_render_elements_Batch.h:

Program Listing for File Batch.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_Batch.h>` (``engine/include/core/render/elements/Batch.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_BATCH_H
   #define RDE_BATCH_H
   
   #include <vector>
   #include "core/render/elements/Vertex.h"
   #include "core/render/elements/Shader.h"
   #include "core/graph/components/Transform.h"
   
   
   enum BatchPriority {
       SpritePriority = 0,
       TextPriority = 1
   };
   
   namespace RDE {
   
       class SpriteBatch;
   
       class Batch {
           friend class SpriteBatch;
           friend class Canvas;
   
           public:
               SpriteBatch* spriteBatch = nullptr;
   
               BatchPriority priority = BatchPriority::SpritePriority;
   
               int ID = -1;
   
               int layer = 0;
   
               Shader* shader = nullptr;
   
               std::vector<OpenGLVertex> vertexBuffer {};
   
               int vertexCount = 0;
   
               GLuint textureID = -1;
   
               bool alreadyDrawnThisFrame = false;
       };
   
   }
   
   #endif //RDE_BATCH_H
