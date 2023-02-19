
.. _program_listing_file_engine_include_core_graph_components_ParticleSystem.h:

Program Listing for File ParticleSystem.h
=========================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_graph_components_ParticleSystem.h>` (``engine/include/core/graph/components/ParticleSystem.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 31/3/22.
   
   
   #ifndef RDE_PARTICLE_SYSTEM_H
   #define RDE_PARTICLE_SYSTEM_H
   
   #include <vector>
   #include "glm/vec3.hpp"
   #include "core/util/Delta.h"
   #include "core/util/Color.h"
   #include "core/graph/Graph.h"
   #include "core/render/elements/Vertex.h"
   #include "core/util/Pool.h"
   #include "core/graph/components/Transform.h"
   #include "core/render/elements/IRenderizable.h"
   
   namespace RDE {
   
       struct ParticleSystemConfig;
       class Graph;
       class Manager;
   
       struct ParticleData {
           glm::vec3 position;
           glm::vec2 velocity;
           glm::vec2 acceleration;
           Color color;
           float life = -1;
   
           void reset(const ParticleSystemConfig& _particleSystemConfig, Transform* _parentTransform);
       };
   
       struct ParticleSystemColorGradientConfig {
           Color initColor = Color::White;
           Color endColor = Color::NO_COLOR;
       };
   
       struct ParticleSystemCallbacksConfig {
           UniqueDelegate<void(ParticleData&, Delta, const ParticleSystemConfig&)> effectFunction {};
           UniqueDelegate<Color(ParticleData&, Delta, const ParticleSystemConfig&)> colorInterpolationFunction {};
       };
   
       struct ParticleSystemDataConfig {
           float lifeTime = -1;
           glm::vec2 initialVelocity;
           int numberOfParticles;
           Texture* texture = nullptr;
           float timeToCreateNewParticleMs = 100;
           bool loop = true;
           ShaderID shader = 0;
       };
   
       struct ParticleSystemConfig {
           ParticleSystemColorGradientConfig colorGradientConfig;
           ParticleSystemCallbacksConfig callbacksConfig;
           ParticleSystemDataConfig dataConfig;
       };
   
       class ParticleSystem {
           private:
               Pool<ParticleData> pool;
               std::vector<ParticleData> usedParticles {};
               bool isPlaying = false;
   
           public:
               ParticleSystemConfig particleSystemConfig;
   
           RENDERIZABLE_BASIC_PROPERTIES()
   
           public:
               ParticleSystem(Node* _node, Scene* _scene, const ParticleSystemConfig& _particleSystemConfig);
               ParticleSystem(Node* _node, Manager* _manager, Graph* _graph, const ParticleSystemConfig& _particleSystemConfig);
               void update(Delta dt);
   
   
               RENDERIZABLE_BASIC_METHODS()
   
               
               void play();
   
               void pause();
   
               void stop();
   
               void reset();
   
               void drawBatched(std::vector<OpenGLVertex>& _vertices, std::vector<uint32_t>& _indices, Transform* _transform, const ViewPort* _viewport);
   
           private:
               ParticleData allocator();
   
               void defaultEffect(ParticleData& _particleData, Delta _dt, const ParticleSystemConfig& _config);
   
               Color defaultColorInterpolationFunction(ParticleData& _particleData, Delta _dt, const ParticleSystemConfig& _config);
       };
   
   }
   
   #endif //RDE_PARTICLE_SYSTEM_H
