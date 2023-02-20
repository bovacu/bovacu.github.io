
.. _program_listing_file_engine_include_core_systems_uiSystem_FontManager.h:

Program Listing for File FontManager.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_uiSystem_FontManager.h>` (``engine/include/core/systems/uiSystem/FontManager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 15/1/22.
   
   
   #ifndef RDE_FONT_MANAGER_H
   #define RDE_FONT_MANAGER_H
   
   #include "core/util/Util.h"
   #include <ft2build.h>
   #include "freetype/freetype.h"
   #include "core/render/elements/Texture.h"
   #include "core/systems/fileSystem/FileManager.h"
   
   #define MAX_WIDTH 512
   #define MAX_CHARACTERS 128
   
   namespace RDE {
   
       struct CharInfo {
           Vec2I  size;
           Vec2I  bearing;
           Vec2I  advance;
           Vec2F  offset;
       };
   
       class FontManager;
   
       class Font {
           
           friend class FontManager;
   
           private:
               Texture texture;
               Vec2I atlasSize {0, 0};
               int fontSize = -1;
               CharInfo characters[MAX_CHARACTERS];
               std::string fontName;
               std::string originalPath;
               float biggestCharHeight = 0;
   
           private:
               Font() {}
   
           public:
               void init(FT_Face face, int _fontSize);
   
               Texture& getTexture();
   
               CharInfo* getChars();
   
               std::string& getFontName();
   
               std::string& getPath();
   
               [[nodiscard]] Vec2F getSize() const;
   
               [[nodiscard]] int getFontSize() const;
   
               float getBiggestCharHeight() const;
       };
   
       class FontManager {
   
           struct FontHandler {
               Font* font = nullptr;
               int fontSize = -1;
           };
   
           private:
               FT_Library ftLibrary{};
               FileManager* fileManager = nullptr;
   
               std::unordered_map<std::string, std::vector<FontHandler>> fonts;
   
           public:
               int maxDifferenceBetweenFontSizesBeforeCreatingANewOne = 5;
   
           public:
               FontManager() {}
   
               void init(FileManager* _fileManager);
   
               void destroy();
   
               Font* loadFont(FileManager& _fileManager, const std::string& _pathToFont, int _fontSize = 24);
   
               Font* getDefaultFont(const std::string& _fontName);
   
               Font* getSpecificFont(const std::string& _fontName, int _fontSize);
   
               void unloadFullFont(const std::string& _fontName);
   
               void unloadSpecificFont(const std::string& _fontName, int _fontSize);
   
               std::vector<Font*> getAllFonts();
       };
   
   }
   
   
   #endif //RDE_FONT_MANAGER_H
