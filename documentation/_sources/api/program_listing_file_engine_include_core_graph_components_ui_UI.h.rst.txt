
.. _program_listing_file_engine_include_core_graph_components_ui_UI.h:

Program Listing for File UI.h
=============================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ui_UI.h>` (``engine/include/core/graph/components/ui/UI.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_UI_H
   #define RDE_UI_H
   
   #include "entt/entity/entity.hpp"
   #include "core/render/elements/IRenderizable.h"
   #include "core/systems/inputSystem/keysAndButtons/MouseKeys.h"
   #include "core/systems/inputSystem/keysAndButtons/KeyboardKeys.h"
   #include "core/systems/inputSystem/keysAndButtons/ControllerButtons.h"
   
   typedef entt::entity NodeID;
   
   namespace RDE {
   
   
       class KeyEvent;
       class Manager;
       class Engine;
       class EventDispatcher;
       class Event;
   
       class UIInteractable {
           friend class Scene;
           friend class Graph;
           friend class Canvas;
           friend class UIImage;
           friend class UIButton;
           friend class UICheckbox;
           friend class UIPanel;
           friend class UIInput;
           friend class UISlider;
           friend class UIText;
   
           private:
               enum MouseStatus {
                   MouseEntered,
                   MouseExited
               };
   
               MouseStatus mouseStatus = MouseStatus::MouseExited;
   
               MouseStatus mouseInnerStatus = MouseStatus::MouseExited;
   
               bool interactable = true;
   
               bool focused = false;
   
           private:
               Delegate<void(MouseCode)> onInnerClicking;
   
               Delegate<void(MouseCode)> onInnerClickingReleased;
   
               Delegate<void()> onInnerMouseEntered;
   
               Delegate<void()> onInnerMouseExited;
   
               Delegate<void(KeyCode)> onInnerKeyPressed;
   
               Delegate<void(const std::string&)> onInnerTextTyped;
   
               Delegate<void(KeyCode)> onInnerKeyReleased;
   
               Delegate<void()> onInnerUnfocused;
   
           public:
               UIInteractable(Node* _node, Manager* _manager, Graph* _graph);
   
               Delegate<void(MouseCode)> onClick;
   
               Delegate<void()> onMouseEntered;
   
               Delegate<void()> onMouseExited;
   
               Delegate<void(Vec2F)> onScroll;
   
               Delegate<void(KeyCode)> onKeyPressed;
   
               Delegate<void(ControllerButtons)> onGamepadButtonPressed;
   
               Delegate<void(int)> onMobileClick;
   
           private:
               void onEvent(Node* _node, Engine* _engine, EventDispatcher& _eventDispatcher, Event& _event);
       };
   }
   
   #endif //RDE_UI_H
