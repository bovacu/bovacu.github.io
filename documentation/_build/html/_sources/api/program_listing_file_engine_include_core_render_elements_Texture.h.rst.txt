
.. _program_listing_file_engine_include_core_render_elements_Texture.h:

Program Listing for File Texture.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_render_elements_Texture.h>` (``engine/include/core/render/elements/Texture.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef RDE_TEXTURE_H
   #define RDE_TEXTURE_H
   
   #include <iostream>
   #include "core/util/Rect.h"
   #include "core/util/Color.h"
   
   #if IS_ANDROID()
       #include <GLES3/gl32.h>
   #elif IS_IOS()
       #include <OpenGLES/ES3/gl.h>
   #else
       #include "glad/glad.h"
   #endif
   
   namespace RDE {
   
       class Texture;
   
       struct NineSlice {
           int left = -1;
   
           int top = -1;
   
           int right = -1;
   
           int bottom = -1;
   
           [[nodiscard]] bool isEnabled() const {
               return left != -1 && top != -1 && right != -1 && bottom != -1;
           }
   
           IntRect subRects[9];
       };
   
       struct Atlas;
   
       class Texture {
           protected:
               GLuint openGLTextureID{};
   
               int channels = -1;
   
               Vec2F textureSize;
   
               Vec2I spriteSheetSize;
   
               GLenum internalFormat = -1;
   
               GLenum dataFormat = -1;
   
               FloatRect region {};
   
               float fileSizeKb = -1;
   
               std::string path;
   
           public:
               NineSlice nineSlice;
   
           public:
               Texture() {};
               explicit Texture(char* filePath);
               Texture(Atlas* _spriteSheet, const FloatRect& _region);
               virtual ~Texture();
   
               [[nodiscard]] GLuint getGLTexture() const;
   
               [[nodiscard]] Vec2F getSize() const;
   
               [[nodiscard]] Vec2I getSpriteSheetSize() const;
   
               [[nodiscard]] float getKb() const;
   
               bool loadFromFile(const char* _path);
   
               bool loadTextTexture(int _width, int _height);
   
               bool loadTextureFromMemory(int _width, int _height, const unsigned char* _data);
   
               bool loadTextSubTextures(Vec2I _offset, Vec2I _size, const void* _data);
   
               FloatRect& getRegion();
   
               void setRegion(const FloatRect& _region);
   
               [[nodiscard]]std::string getPath();
       };
   
       enum ImageType {
           PNG,
           JPG,
           BMP
       };
   
       class CPUTexture : public Texture {
           private:
               unsigned char* pixels = nullptr;
   
               bool dirty = false;
   
           private:
               int getChannels(const ImageType& _imageType);
   
           public:
               ImageType imageType = ImageType::PNG;
   
           public:
               CPUTexture() {};
   
               void init(int _width, int _height, unsigned char* _pixels, const ImageType& _imageType = ImageType::PNG);
   
               void init(int _width, int _height, const ImageType& _imageType = ImageType::PNG);
   
               void uploadToGPU();
   
               void saveAs(const std::string& _pathToSave);
   
               void setPixel(int _x, int _y, const Color& _color);
   
               Color getPixel(int _x, int _y);
   
               void resizeImage(const Vec2<uint>& _newSize);
   
               ~CPUTexture();
       };
   }
   
   #endif //RDE_TEXTURE_H
