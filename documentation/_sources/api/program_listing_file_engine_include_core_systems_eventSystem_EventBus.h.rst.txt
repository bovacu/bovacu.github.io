
.. _program_listing_file_engine_include_core_systems_eventSystem_EventBus.h:

Program Listing for File EventBus.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_systems_eventSystem_EventBus.h>` (``engine/include/core/systems/eventSystem/EventBus.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 17/12/21.
   
   #ifndef RDE_EVENT_BUS
   #define RDE_EVENT_BUS
   
   namespace RDE {
   
       template <typename Event, typename... AssociatedFunctionArgs>
       class EventBus {
   //    static_assert(std::is_enum<Type>::value, "Must be an enum type");
           public:
               typedef std::function<bool(AssociatedFunctionArgs...)> HandlerFunc;
   
           private:
               std::map<Event, RDE::ReturnDelegate<bool(AssociatedFunctionArgs...)>> handlers;
   
           public:
               class HandlerId {
                   friend class EventBus<AssociatedFunctionArgs...>;
                   public:
                       HandlerId() : valid(false) {  }
                       size_t id{};
                       explicit HandlerId(size_t _id) : id(_id), valid(true) {  }
                       bool valid;
               };
   
               // register to be notified
               template<auto Func, typename Class>
               HandlerId subscribe(const Event& _key, Class* _class) {
                   if (Func) {
                       #if IS_WINDOWS()
                       handlers[_key].bind<Func>(_class);
                       #else
                       handlers[_key].template bind<Func>(_class);
                       #endif
                       return HandlerId(handlers[_key].getEnd());
                   }
                   return HandlerId();
               }
   
               void unsubscribe(const Event& _type, HandlerId& _handlerId) {
                   if(!hasType(_type)) {
                       Util::Log::warn("Tried to unsubscribe Type ", typeid(_type).name(), " but it wasn't subscribed!");
                       return;
                   }
   
                   if (_handlerId.valid) {
                       handlers[_type].remove(_handlerId.id);
                   } else
                       Util::Log::warn("Tried to unsubscribe an event", typeid(_type).name()," that wasn't subscribed yet!");
               }
   
               bool dispatch(const Event& _type, AssociatedFunctionArgs... _args) {
                   if(!hasType(_type)) {
                       return false;
                   }
   
                   std::vector<bool> _results = handlers[_type](_args...);
                   return std::all_of(_results.begin(), _results.end(), [](bool v) { return v; });
               }
   
               bool isSubscribed(const Event& _type) {
                   return hasType(_type);
               }
   
           private:
               bool hasType(const Event& _type) {
                   return handlers.find(_type) != handlers.end();
               }
       };
   
   }
   
   
   #endif // RDE_EVENT_BUS
