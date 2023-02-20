
.. _program_listing_file_engine_include_core_graph_components_Transform.h:

Program Listing for File Transform.h
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_Transform.h>` (``engine/include/core/graph/components/Transform.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   //
   // Created by borja on 9/5/22.
   //
   
   #ifndef RDE_TRANSFORM_H
   #define RDE_TRANSFORM_H
   
   #include <vector>
   #include "glm/ext/matrix_transform.hpp"
   #include "glm/gtc/quaternion.hpp"
   #include "core/util/Vec.h"
   #include "entt/entity/entity.hpp"
   
   typedef entt::entity NodeID;
   
   namespace RDE {
   
       struct Node;
       class Graph;
       class Scene;
   
       class Transform {
           friend class Scene;
           friend class Camera;
           friend class SpriteRenderer;
           friend class DynamicSpriteRenderer;
           friend class TextRenderer;
           friend class UIImage;
           friend class UIText;
   
           friend struct PhysicsBody;
   
           MAKE_CLASS_ITERABLE(std::vector<Transform*>, children)
   
           protected:
               glm::vec3 innerPosition = glm::vec3(0.0f, 0.0f, 0.0f);
               glm::quat innerRotation = glm::quat(glm::vec3(0, 0, 0));
               glm::vec3 innerScale = glm::vec3(1.0f, 1.0f, 1.0f);
   
               glm::mat4 worldMatrixCache { 1.0f };
               bool dirty = false;
   
               Graph* graph;
   
           protected:
               glm::mat4 recalculateCachedMatrix();
               void setDirty(Transform* _transform);
               virtual void clearDirty();
               glm::mat4 worldPointToLocalPosition(const Vec2F& _position);
               glm::mat4 worldPointToLocalRotation(float _rotation);
   
           public:
               explicit Transform(Graph* _graph);
               Node* node;
   
               NodeID parent;
   
               Transform* parentTransform = nullptr;
   
               std::vector<Transform*> children;
   
               int getChildrenCount();
   
               int getActiveChildrenCount();
   
               int getEnabledChildrenCount();
   
               int getEnabledAndActiveChildrenCount();
   
               void setPosition(const Vec2F& _position);
   
               void setPosition(float _x, float _y);
   
               [[nodiscard]] Vec2F getPosition() const;
   
               void translate(const Vec2F& _direction);
   
               void translate(float _x, float _y);
   
               void setRotation(float _rotation);
   
               [[nodiscard]] float getRotation() const;
   
               void rotate(float _amount);
   
               void setScale(const Vec2F& _scale);
   
               void setScale(float _x, float _y);
   
               [[nodiscard]] Vec2F getScale() const;
   
               void scale(const Vec2F& _scale);
   
               void scale(float _x, float _y);
   
               [[nodiscard]] Vec2F getModelMatrixPosition();
   
               [[nodiscard]] Vec2F getModelMatrixScale();
   
               [[nodiscard]] float getModelMatrixRotation();
   
               void setMatrixModelPosition(const Vec2F& _worldPos);
   
               void translateMatrixModelPosition(const Vec2F& _worldPos);
   
               void setMatrixModelRotation(float _rotation);
   
               [[nodiscard]] glm::mat4 localToParent() const;
               [[nodiscard]] glm::mat4 parentToLocal() const;
               [[nodiscard]] virtual std::tuple<glm::mat4, bool> localToWorld();
               [[nodiscard]] glm::mat4 worldToLocal() const;
   
               glm::mat4 getLocalMatrix() const;
               void setLocalMatrix(const glm::mat4& _matrix);
       };
   }
   
   #endif //RDE_TRANSFORM_H
