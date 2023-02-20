
.. _program_listing_file_engine_include_core_render_elements_Shader.h:

Program Listing for File Shader.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_Shader.h>` (``engine/include/core/render/elements/Shader.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef RDE_SHADER_H
   #define RDE_SHADER_H
   
   #include <string>
   #include <unordered_map>
   
   #include "core/Core.h"
   #if IS_ANDROID()
       #include <GLES3/gl32.h>
   #elif IS_IOS()
       #include <OpenGLES/ES3/gl.h>
   #else
       #include "glad/glad.h"
   #endif
   
   #include "core/systems/fileSystem/FileManager.h"
   
   namespace RDE {
   
       #define GLM_VEC_MAT_TO_POINTER(_type, _glmVecMat) reinterpret_cast<_type*>(glm::value_ptr(_glmVecMat))
   
       enum RDE_UNIFORM_FV {
           RDE_UNIFORM_FV_1,
           RDE_UNIFORM_FV_2,
           RDE_UNIFORM_FV_3,
           RDE_UNIFORM_FV_4,
           RDE_UNIFORM_FV_MATRIX_2,
           RDE_UNIFORM_FV_MATRIX_3,
           RDE_UNIFORM_FV_MATRIX_4,
           RDE_UNIFORM_FV_MATRIX_2x3,
           RDE_UNIFORM_FV_MATRIX_3x2,
           RDE_UNIFORM_FV_MATRIX_4x2,
           RDE_UNIFORM_FV_MATRIX_2x4,
           RDE_UNIFORM_FV_MATRIX_4x3,
           RDE_UNIFORM_FV_MATRIX_3x4
       };
   
       enum RDE_UNIFORM_IV {
           RDE_UNIFORM_IV_1,
           RDE_UNIFORM_IV_2,
           RDE_UNIFORM_IV_3,
           RDE_UNIFORM_IV_4
       };
   
       enum RDE_UNIFORM_UIV {
           RDE_UNIFORM_UIV_1,
           RDE_UNIFORM_UIV_2,
           RDE_UNIFORM_UIV_3,
           RDE_UNIFORM_UIV_4
       };
   
       class LoadVertexConfigNotInvoked : public std::exception {
           public:
           [[nodiscard]] auto what() const noexcept -> const char* override {
               return "Load vertex config function was not called for shader, so the shader won't work.";
           }
       };
   
       struct VertexConfig {
   
           unsigned int pointerIndex = 0;
   
           int numberOfElements = 0;
   
           unsigned int openglDataType = 0;
   
           unsigned int stride = 0;
   
           int structSize = 0;
       };
   
       class Shader {
   
           private:
               std::unordered_map<GLuint, GLuint> shadersAttached;
   
               std::unordered_map<const char*, GLint> uniforms;
   
               GLuint shaderID = -1;
   
               GLuint vao = -1, staticVao = -1;
   
               GLuint ibo = -1, staticIbo = -1;
   
               GLuint vbo = -1, staticVbo = -1;
   
                long vertexDataSize;
   
           private:
                void loadVertexConfigSpecific(const std::vector<VertexConfig>& _verticesConfig, const std::vector<const char*> _uniforms, int _maxIndicesPerDrawCall, GLenum _drawType, GLuint& _vbo, GLuint& _ibo, GLuint& _vao);
   
           public:
               Shader();
               ~Shader();
   
               GLuint loadFromFiles(const std::string& _vertex, const std::string& _fragment, FileManager* _fileManager);
   
               GLuint loadFromStrings(const std::string& _vertex, const std::string& _fragment);
   
               void loadVertexConfig(const std::vector<VertexConfig>& _verticesConfig, const std::vector<const char*> _uniforms, int _maxIndicesPerDrawCall);
   
               GLuint getShaderID() const;
   
               GLuint getDynamicShaderVAO() const;
   
               GLuint getDynamicShaderIBO() const;
   
               GLuint getDynamicShaderVBO() const;
   
               GLuint getStaticShaderVAO() const;
   
               GLuint getStaticShaderIBO() const;
   
               GLuint getStaticShaderVBO() const;
   
   
               long getShaderVertexDataSize() const;
   
               void setUniformValueFloat(const char* _uniformName, RDE_UNIFORM_FV _type, GLfloat* _data, GLboolean _transpose = GL_FALSE);
               
               void setUniformValueInt(const char* _uniformName, RDE_UNIFORM_IV _type, GLint* _data);
   
               void setUniformValueUInt(const char* _uniformName, RDE_UNIFORM_UIV _type, GLuint* _data);
   
           private:
               bool initFromString(const std::string& _shaderCode, GLenum _shaderType);
       };
   }
   
   #endif //RDE_SHADER_H
