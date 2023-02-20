
.. _program_listing_file_engine_include_core_systems_ecsSystem_ECSSystem.h:

Program Listing for File ECSSystem.h
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_ecsSystem_ECSSystem.h>` (``engine/include/core/systems/ecsSystem/ECSSystem.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 29/04/22.
   //
   
   #ifndef RDE_SYSTEM_H
   #define RDE_SYSTEM_H
   
   #include "core/util/Util.h"
   #include "core/graph/Graph.h"
   #include <type_traits>
   
   namespace RDE {
   
       typedef unsigned int SystemRef;
   
       class ECSSystem {
   
           friend class ECSManager;
   
           private:
               uint updateOrder = -1;
   
               SystemRef systemRef = -1;
   
           public:
   
               virtual void onCreate() {  };
   
               virtual void onUpdate(Delta _dt, Graph* _graph) = 0;
   
               virtual void onDestroy() {  };
   
   
               virtual ~ECSSystem() {  }
       };
   }
   
   #endif //RDE_SYSTEM_H
