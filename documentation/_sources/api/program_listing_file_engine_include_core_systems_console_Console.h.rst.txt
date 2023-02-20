
.. _program_listing_file_engine_include_core_systems_console_Console.h:

Program Listing for File Console.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_console_Console.h>` (``engine/include/core/systems/console/Console.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 12/1/22.
   
   
   #ifndef RDE_CONSOLE_H
   #define RDE_CONSOLE_H
   
   #include "core/Core.h"
   #include "core/util/Util.h"
   
   namespace RDE {
   
       struct Command {
           std::string name;
   
           std::vector<std::string> arguments;
   
           std::string toString() {
               std::string _fullCommand = name;
               for(auto& _arg : arguments)
                   _fullCommand += " " + _arg;
   
               return _fullCommand;
           }
       };
   
       typedef std::vector<std::string> Logs;
   
       class Console {
           private:
               std::map<std::string, ReturnDelegate<Logs (const std::vector<std::string>&)>> commands;
   
               std::map<std::string, std::string> commandsAndDescriptions;
   
               Logs help(const std::vector<std::string>& _arguments = {});
   
               Logs clear(const std::vector<std::string>& _arguments = {});
   
               Logs printHistory(const std::vector<std::string>& _arguments = {});
   
               std::vector<Command> commandHistory;
   
               int historyPtr = 0;
   
           public:
               std::vector<std::string> logs;
   
           public:
               void init();
   
               template<auto Func, typename Class>
               void addCommand(const std::string& _commandName, const std::string& _description, Class* _class = nullptr, const std::string& _argumentsDescription = "") {
                   #if IS_WINDOWS()
                   commands[_commandName].bind<Func>(_class);
                   #else
                   commands[_commandName].template bind<Func>(_class);
                   #endif
                   commandsAndDescriptions[_commandName] = _argumentsDescription + ": " + _description;
               }
   
               void deleteCommand(const std::string& _commandName);
   
               Logs call(const Command& _command);
   
               void collectLogs(const Logs& _log);
   
               std::string getUpCommand();
   
               std::string getDownCommand();
       };
   
   }
   
   
   #endif //RDE_CONSOLE_H
