
.. _program_listing_file_engine_include_core_render_Camera.h:

Program Listing for File Camera.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_Camera.h>` (``engine/include/core/render/Camera.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 30/12/21.
   
   
   #ifndef RDE_CAMERA_H
   #define RDE_CAMERA_H
   
   
   #include "core/graph/components/ComponentBase.h"
   #include <glm/ext/matrix_float4x4.hpp>
   #include "core/util/Util.h"
   #include "core/systems/eventSystem/MouseEvent.h"
   #include "core/render/elements/ViewPort.h"
   #include "entt/entity/entity.hpp"
   
   namespace RDE {
   
       typedef entt::entity NodeID;
       class Transform;
       class SceneManager;
       class Window;
       class Manager;
       class Graph;
   
       struct Node;
   
       class Camera : public ComponentBase {
           friend class Scene;
   
           private:
               Vec2I size;
   
               float zoom = 1;
   
               float zoomSpeed = 0.25f;
   
               glm::mat4 projectionMatrix;
   
               glm::mat4 viewMatrix {1.f};
   
               glm::mat4 viewProjectionMatrix;
   
               ViewPort* viewport;
   
               bool dirty = false;
   
           public:
               Node* node;
   
               Camera(Node* _node, Manager* _manager, Graph* _graph, const Window* _window);
               ~Camera();
   
               void onEvent(Event& _event);
   
               bool onMouseScrolled(MouseScrolledEvent& _event);
   
               void onResize(int _width, int _height);
   
               glm::mat4& getProjectionMatrix();
   
               glm::mat4& getViewMatrix();
   
               glm::mat4& getViewProjectionMatrix();
   
               void setCameraSize(const Vec2I& _cameraSize);
   
               void setCameraSize(int _width, int _height);
   
               Vec2I getCameraSize();
   
               [[nodiscard]] float getAspectRatio() const;
   
               [[nodiscard]] float getCurrentZoomLevel() const;
   
               void setCurrentZoomLevel(float _zoomLevel);
   
               [[nodiscard]] float getZoomSpeed() const;
   
               void setZoomSpeed(float _zoomSpeed);
   
               glm::mat4& operator() (const Camera& _camera) {
                   return projectionMatrix;
               }
   
               [[nodiscard]] ViewPort* getViewport() const;
   
               bool isLandscape();
   
               bool isElementInside(Transform* _transform, const Vec2F& _size) const;
   
               void update();
   
               void setEnabled(bool _enabled) override;
               bool isEnabled() override;
   
           private:
               void recalculateViewMatrix();
       };
   
   }
   
   
   #endif //RDE_CAMERA_H
