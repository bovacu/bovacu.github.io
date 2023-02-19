
.. _program_listing_file_engine_include_core_util_Delegate.h:

Program Listing for File Delegate.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_engine_include_core_util_Delegate.h>` (``engine/include/core/util/Delegate.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Created by borja on 8/3/22.
   
   #ifndef RDE_DELEGATE_H
   #define RDE_DELEGATE_H
   
   #include <exception>
   #include <functional>
   #include <unordered_map>
   #include "core/Core.h"
   
   namespace RDE {
   
       template <typename R = void, typename...Args>   
       struct Delegate;
   
       // Primary template intentionally left empty
       template <typename Signature>
       struct UniqueDelegate;
   
       template <typename Signature>
       struct ReturnDelegate;
   
       template <typename Signature>
       struct Stub;
   
       class BadDelegateCall : public std::exception {
           public:
               [[nodiscard]] auto what() const noexcept -> const char* override {
                   // auto _error = APPEND_S("Delegate had no attached function, in line ", __LINE__, " in file ", __FILE_NAME__);
                   return "Delegate had no attached function";
               }
       };
   
       template <typename R, typename...Args>
       struct Stub<R(Args...)> {
           using stub_function = R(*)(const void*, Args...);
           const void* instance = nullptr; 
           stub_function stub = &stub_null; 
   
           [[noreturn]] static auto stub_null(const void* _p, Args...) -> R {
               throw BadDelegateCall{};
           }
       };
   
       typedef uint32_t DelegateID;
   
   
       template <typename R, typename...Args>
       struct UniqueDelegate<R(Args...)> {
   
           friend class Delegate<R(Args...)>;
           friend class ReturnDelegate<R(Args...)>;
   
           protected:
               [[noreturn]] static auto stub_null(const void* _p, Args...) -> R {
                   throw BadDelegateCall{};
               }
   
               using stub_function = R(*)(const void*, Args...);
               const void* instance = nullptr; 
               stub_function stub = &stub_null; 
   
           public:
               UniqueDelegate() {}
               UniqueDelegate(const UniqueDelegate& other) = default;
               auto operator=(const UniqueDelegate& other) -> UniqueDelegate& = default;
               auto operator==(UniqueDelegate* _other) {
                   if (_other == nullptr) {
                       return instance == nullptr && stub == stub_null;
                   }
                   return _other->instance == instance && _other->stub == stub;
               }
               auto operator!=(UniqueDelegate* _other) {
                   if (_other == nullptr) {
                       return instance != nullptr || stub != stub_null;
                   }
                   return _other->instance != instance && _other->stub != stub;
               }
               auto operator==(const UniqueDelegate& _other) { return _other->instance == instance; }
               auto operator!=(const UniqueDelegate& _other) { return _other->instance != instance; }
               auto operator()(Args... _args) const -> R {
                   return std::invoke(stub, instance, _args...);
               }
   
   
               // FREE FUNCTION
               template <auto Function, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(Function), Args...>>>
               auto bind() -> void {
                   instance = nullptr;
                   stub = static_cast<stub_function>([](const void*, Args... _args) -> R{
                       return std::invoke(Function, std::forward<Args>(_args)...);
                   });
               }
   
               // CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),const Class*, Args...>>>
               auto bind(const Class* _cls) -> void {
                   instance = _cls;
                   stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       const auto* _c = static_cast<const Class*>(_p);
                       return std::invoke(MemberFunction, _c, _args...);
                   });
               }
   
               // NON-CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),Class*, Args...>>>
               auto bind(Class* _cls) -> void {
                   instance = _cls;
                   stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       auto* _c = const_cast<Class*>(static_cast<const Class*>(_p));
                       return std::invoke(MemberFunction, _c, _args...);
                   });
               }
   
               void unbind() {
                   instance = nullptr;
                   stub = stub_null;
               }
       };
   
       template <typename R, typename...Args>
       struct Delegate<R(Args...)> {
           private:
               using stub_function = R(*)(const void*, Args...);
               std::unordered_map<DelegateID, UniqueDelegate<R(Args...)>> callables;
               uint32_t id;
   
           public:
               auto operator()(Args... args) {
                   for(auto _it = callables.begin(); _it != callables.end(); _it++) _it->second(args...);
               }
   
               // FREE FUNCTION
               template <auto Function, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(Function), Args...>>>
               DelegateID bind() {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = nullptr;
                   callables[id].stub = static_cast<stub_function>([](const void*, Args... _args) -> R{
                       return std::invoke(Function, std::forward<Args>(_args)...);
                   });
   
                   return id++;
               }
   
               // CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),const Class*, Args...>>>
               DelegateID bind(const Class* _cls) {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = _cls;
                   callables[id].stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       const auto* _c = static_cast<const Class*>(_p);
                       return std::invoke(MemberFunction, _c, _args...);
                   });
   
                   return id++;
               }
   
               // NON-CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),Class*, Args...>>>
               DelegateID bind(Class* _cls) {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = _cls;
                   callables[id].stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       auto* _c = const_cast<Class*>(static_cast<const Class*>(_p));
                       return std::invoke(MemberFunction, _c, _args...);
                   });
   
                   return id++;
               }
   
   
               void clear() {
                   callables.clear();
               }
   
               void unbind(DelegateID _id) {
                   auto _it = callables.find(_id);
                   if(_it != callables.end()) {
                       callables.erase(_id);
                   }
               }
   
               bool isEmpty() {
                   return callables.empty();
               }
       };
   
       typedef uint32_t DelegateRef;
       template <typename R, typename...Args>
       struct ReturnDelegate<R(Args...)> {
           using stub_function = R(*)(const void*, Args...);
           private:
               std::unordered_map<DelegateID, UniqueDelegate<R(Args...)>> callables;
               uint32_t id;
   
           public:
               // Creates an unbound delegate
               ReturnDelegate() {}
   
               // We want the Delegate to be copyable, since its lightweight
               ReturnDelegate(const ReturnDelegate& other) = default;
               auto operator=(const ReturnDelegate& other) -> ReturnDelegate& = default;
               std::vector<R> operator()(Args... args) {
                   std::vector<R> _results;
                   for(auto _it = callables.begin(); _it != callables.end(); _it++) _it->second(args...);
                   return _results;
               }
   
                           // FREE FUNCTION
               template <auto Function, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(Function), Args...>>>
               DelegateID bind() {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = nullptr;
                   callables[id].stub = static_cast<stub_function>([](const void*, Args... _args) -> R{
                       return std::invoke(Function, std::forward<Args>(_args)...);
                   });
   
                   return id++;
               }
   
               // CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),const Class*, Args...>>>
               DelegateID bind(const Class* _cls) {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = _cls;
                   callables[id].stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       const auto* _c = static_cast<const Class*>(_p);
                       return std::invoke(MemberFunction, _c, _args...);
                   });
   
                   return id++;
               }
   
               // NON-CONST MEMBER FUNCTION
               template <auto MemberFunction, typename Class, typename = std::enable_if_t<std::is_invocable_r_v<R, decltype(MemberFunction),Class*, Args...>>>
               DelegateID bind(Class* _cls) {
                   callables[id] = UniqueDelegate<R(Args...)>();
                   callables[id].instance = _cls;
                   callables[id].stub = static_cast<stub_function>([](const void* _p, Args... _args) -> R{
                       auto* _c = const_cast<Class*>(static_cast<const Class*>(_p));
                       return std::invoke(MemberFunction, _c, _args...);
                   });
   
                   return id++;
               }
   
   
               void clear() {
                   callables.clear();
               }
   
               void unbind(DelegateID _id) {
                   auto _it = callables.find(_id);
                   if(_it != callables.end()) {
                       callables.erase(_id);
                   }
               }
   
               bool isEmpty() {
                   return callables.empty();
               }
       };
   }
   
   #endif //RDE_DELEGATE_H
