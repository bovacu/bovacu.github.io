
.. _program_listing_file_engine_include_core_graph_ImGuiCore.h:

Program Listing for File ImGuiCore.h
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_ImGuiCore.h>` (``engine/include/core/graph/ImGuiCore.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 31/12/21.
   
   
   #ifndef RDE_IMGUI_CORE_H
   #define RDE_IMGUI_CORE_H
   
   #include "core/Core.h"
   
   #if !IS_MOBILE()
   #include "imgui.h"
   #endif
   
   #endif //RDE_IMGUI_CORE_H
