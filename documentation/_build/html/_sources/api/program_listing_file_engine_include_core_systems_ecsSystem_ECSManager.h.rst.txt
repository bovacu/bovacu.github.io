
.. _program_listing_file_engine_include_core_systems_ecsSystem_ECSManager.h:

Program Listing for File ECSManager.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_ecsSystem_ECSManager.h>` (``engine/include/core/systems/ecsSystem/ECSManager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 29/04/22.
   //
   
   #ifndef RDE_SYSTEM_MANAGER_H
   #define RDE_SYSTEM_MANAGER_H
   
   #include "core/util/Util.h"
   #include "core/systems/ecsSystem/ECSSystem.h"
   #include "core/graph/Graph.h"
   
   namespace RDE {
   
       class BadECSSystemSwap : public std::exception {
           public:
               [[nodiscard]] auto what() const noexcept -> const char* override {
                   return "Error while swapping ECS systems, one or both of them couldn't be found";
               }
       };
   
   
       class ECSManager {
           private:
               int systemRefCounter = 0;
               std::vector<ECSSystem*> systems;
   
           public:
               SystemRef addSystem(ECSSystem* _system);
   
               void removeSystem(SystemRef _systemRef);
   
               void swapOrderOfUpdate(SystemRef _systemRef0, SystemRef _systemRef1);
   
               void update(Delta _dt, Graph* _graph);
   
               void destroy();
       };
   
   }
   
   #endif //RDE_SYSTEM_MANAGER_H
