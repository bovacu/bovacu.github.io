
.. _program_listing_file_engine_include_core_systems_fileSystem_FileManager.h:

Program Listing for File FileManager.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_fileSystem_FileManager.h>` (``engine/include/core/systems/fileSystem/FileManager.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 14/2/22.
   
   
   #ifndef RDE_FILES_SYSTEM_H
   #define RDE_FILES_SYSTEM_H
   
   #include "core/util/Util.h"
   #include "core/platform/PlatformHeaderSDL.h"
   
   namespace RDE {
   
       enum FileResult {
           FILE_OK,
           FILE_NOT_FOUND,
           FILE_LINE_OUT_OF_SCOPE,
           FILE_NOT_ALL_LINES_IN_SCOPE
       };
   
       enum FileMode {
           READ,
           WRITE,
           APPEND,
           READ_AND_WRITE,
           READ_AND_APPEND,
       };
   
       template<typename T>
       struct File {
           T content;
   
           FileResult result = FileResult::FILE_OK;
       };
       typedef File<std::string> FileStr;
       typedef File<std::vector<std::string>> FileLines;
   
   
       class FileManager;
       class FileHandler {
           
           friend class FileManager;
   
           private:
               SDL_RWops* file;
   
               FileMode mode;
   
               std::string originalPath;
   
           private:
               FileHandler(SDL_RWops* _file, const FileMode& _mode, const std::string& _originalPath) : file(_file), mode(_mode), originalPath(_originalPath) {}
   
               static const char* modeToChar(const FileMode& _mode) {
                   switch (_mode) {
                       case READ: return "rb";
                       case WRITE: return "w";
                       case APPEND: return "a";
                       case READ_AND_WRITE: return "r+";
                       case READ_AND_APPEND: return "a+";
                   }
   
                   return "rb";
               }
       };
   
   
   
   
       class FileManager {
           private:
               void checkFileMode(FileHandler* _handler, const FileMode& _expected);
   
           public:
   
               FileHandler* open(const std::string& _filePath, const FileMode& _fileMode, bool _silentNotFound = false);
   
               void close(FileHandler* _file);
   
               FileStr readFullFile(FileHandler* _handler);
   
               FileLines readAllLinesFile(FileHandler* _handler);
   
               FileStr readChunkFile(FileHandler* _handler, int _initByte, int _endByte);
   
               FileStr readLineInFile(FileHandler* _handler, int _line);
   
               FileLines readLinesInFile(FileHandler* _handler, std::vector<int>& _lines);
   
               void writeChunkToFile(FileHandler* _handler, const char* _content, size_t _size);
   
               void writeChunkToFile(FileHandler* _handler, const std::string& _content);
   
               void appendChunkToFile(FileHandler* _handler, const char* _content, size_t _size, int _where);
   
               void appendChunkToFile(FileHandler* _handler, const std::string& _content, int _where);
   
               void appendChunkToFileAtEnd(FileHandler* _handler, const char* _content, size_t _size);
   
               void appendChunkToFileAtEnd(FileHandler* _handler, const std::string& _content);
   
               void appendChunkInLineToFile(FileHandler* _handler, const char* _content, size_t _size, int _line);
   
               void appendChunkInLineToFile(FileHandler* _handler, const std::string& _content, int _line);
   
               void appendChunkAtEndOfLine(FileHandler* _handler, const char* _content, size_t _size, int _line);
   
               void appendChunkAtEndOfLine(FileHandler* _handler, const std::string& _content, int _line);
   
               void replaceChunkInFile(FileHandler* _handler, const std::string& _old, const std::string& _new);
   
               void clearFile(FileHandler* _handler);
   
               void removeFile(std::string& _filePath);
   
               void removeChunkLineInFile(FileHandler* _handler, int _line);
   
               void removeChunkLinesInFile(FileHandler* _handler, std::vector<int>& _lines);
   
               void removeChunk(FileHandler* _handler, int _initByte, int _endByte);
   
               FileHandler* createFile(const std::string& _filePath);
   
               void moveOrRenameFile(const std::string& _filePath, const std::string& _newName);
   
               bool fileExists(const std::string& _pathToFile);
       };
   
   }
   
   #endif //RDE_FILES_SYSTEM_H
