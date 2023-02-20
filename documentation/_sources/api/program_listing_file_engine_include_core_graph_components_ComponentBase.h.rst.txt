
.. _program_listing_file_engine_include_core_graph_components_ComponentBase.h:

Program Listing for File ComponentBase.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ComponentBase.h>` (``engine/include/core/graph/components/ComponentBase.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 11/22/22.
   //
   
   #ifndef RDE_COMPONENT_BASE_H
   #define RDE_COMPONENT_BASE_H
   
   struct ComponentBase {
       virtual void setEnabled(bool _enabled) = 0;
       virtual bool isEnabled() = 0;
   };
   
   #endif //RDE_COMPONENT_BASE_H
