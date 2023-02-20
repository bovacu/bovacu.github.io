
.. _program_listing_file_engine_include_core_graph_components_ui_UIUpdaterFunctions.h:

Program Listing for File UIUpdaterFunctions.h
=============================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UIUpdaterFunctions.h>` (``engine/include/core/graph/components/ui/UIUpdaterFunctions.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #include "core/util/Delta.h"
   
   namespace RDE {
   
       class UIInput;
       class UISlider;
   
       void onUpdateUIInput(UIInput* _input, Delta _Dt);
       void onUpdateUISlider(UISlider* _slider, Delta _Dt);
   }
