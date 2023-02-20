
.. _program_listing_file_engine_include_core_render_elements_SpriteBatchRenderFunctions.h:

Program Listing for File SpriteBatchRenderFunctions.h
=====================================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_SpriteBatchRenderFunctions.h>` (``engine/include/core/render/elements/SpriteBatchRenderFunctions.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #include "core/render/elements/IRenderizable.h"
   #include "glm/glm.hpp"
   
   
   namespace RDE {
   
       class Transform;
       class ViewPort;
   
       struct RenderizableInnerData;
   
       void calculateGeometryForSpriteRenderer(RenderizableInnerData& data, glm::mat4& _transformMatrix, Transform* _transform, const ViewPort* _viewport);
       void drawBatchedSpriteRenderer(RenderizableInnerData& _data, Batch* _batch, Transform* _transform, const ViewPort* _viewport);
   
       void calculateGeometryForTextRenderer(RenderizableInnerData& data, glm::mat4& _transformMatrix, Transform* _transform, const ViewPort* _viewport);
       void drawBatchedTextRenderer(RenderizableInnerData& _data, Batch* _batch, Transform* _transform, const ViewPort* _viewport);
   
   
   
       void calculateGeometryForUIImage(RenderizableInnerDataUI& data, glm::mat4& _transformMatrix, Transform* _transform, const ViewPort* _viewport);
       void drawBatchedUIImage(RenderizableInnerDataUI& _data, Batch* _batch, Transform* _transform, const ViewPort* _viewport);
   
       void calculateGeometryForUIText(RenderizableInnerDataUI& data, glm::mat4& _transformMatrix, Transform* _transform, const ViewPort* _viewport);
       void drawBatchedUIText(RenderizableInnerDataUI& _data, Batch* _batch, Transform* _transform, const ViewPort* _viewport);
   }
