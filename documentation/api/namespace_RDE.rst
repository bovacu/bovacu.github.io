
.. _namespace_RDE:

Namespace RDE
=============


The :ref:`exhale_class_class_r_d_e_1_1_event` bus works in the following way: 




.. contents:: Contents
   :local:
   :backlinks: none




Detailed Description
--------------------

1 - We need to specify the type of :ref:`exhale_class_class_r_d_e_1_1_event` that our :ref:`exhale_class_class_r_d_e_1_1_event_bus` is going to use to store each of the observable events. This :ref:`exhale_class_class_r_d_e_1_1_event` can be anything, like a string, an int, bool, classes, structs, enums... Then we specify the AssociatedFunctionArgs which are a set of types.

2 - Once we have decided what type of :ref:`exhale_class_class_r_d_e_1_1_event` we need for this :ref:`exhale_class_class_r_d_e_1_1_event_bus`, we start defining them and attaching the functions that will be called when the particular :ref:`exhale_class_class_r_d_e_1_1_event` happens.

3 - Once an :ref:`exhale_class_class_r_d_e_1_1_event` is subscribed, each time you repeat a specific :ref:`exhale_class_class_r_d_e_1_1_event`, the function will be linked to that :ref:`exhale_class_class_r_d_e_1_1_event`.

4 - The associated functions must always return bool.

Example: Let's imagine we have the EventBus<std::string, char> that will be observing the events that happen when a key is pressed or released. EventBus<std::string, char> keyEventBus;
 Then we define (somewhere) two functions: bool MyClass::keyUp(char _char) {
    // Do whatever...
    return true;
}

bool MyClass::keyDown(char _char) {
    // Do whatever...
    return true;
}


Now let's link events with functions: keyEventBus.subscribe<&MyClass::keyDown>("keyDown", this);
keyEventBus.subscribe<&MyClass::keyUp>("keyUp", this);

*Notes: if the associated function is a free function -> keyEventBus.subscribe<&keyDown>("keyDown", nullptr);


Then, in any part of the code that the event needs to be dispatched, we do: keyEventBus.dispatch("keyUp", _theCharPressed);
                or/and
keyEventBus.dispatch("keyDown", _theCharReleased);
 And with this, all of the linked functions will know about this change and will react as the function specifies 





Namespaces
----------


- :ref:`namespace_RDE__perlin_detail`

- :ref:`namespace_RDE__Util`


Classes
-------


- :ref:`exhale_struct_struct_r_d_e_1_1_active`

- :ref:`exhale_struct_struct_r_d_e_1_1_animation_node`

- :ref:`exhale_struct_struct_r_d_e_1_1_animation_transition`

- :ref:`exhale_struct_struct_r_d_e_1_1_atlas`

- :ref:`exhale_struct_struct_r_d_e_1_1_canvas_element`

- :ref:`exhale_struct_struct_r_d_e_1_1_canvas_event_stopper`

- :ref:`exhale_struct_struct_r_d_e_1_1_char_info`

- :ref:`exhale_struct_struct_r_d_e_1_1_color`

- :ref:`exhale_struct_struct_r_d_e_1_1_command`

- :ref:`exhale_struct_struct_r_d_e_1_1_common_u_i_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_controller`

- :ref:`exhale_struct_struct_r_d_e_1_1_debug_options`

- :ref:`exhale_struct_struct_r_d_e_1_1_delegate`

- :ref:`exhale_struct_struct_r_d_e_1_1_delegate_3_01_r_07_args_8_8_8_08_4`

- :ref:`exhale_struct_struct_r_d_e_1_1_disabled_for_event`

- :ref:`exhale_struct_struct_r_d_e_1_1_disabled_for_fixed_update`

- :ref:`exhale_struct_struct_r_d_e_1_1_disabled_for_late_update`

- :ref:`exhale_struct_struct_r_d_e_1_1_disabled_for_render`

- :ref:`exhale_struct_struct_r_d_e_1_1_disabled_for_update`

- :ref:`exhale_struct_struct_r_d_e_1_1_draw_and_flush_data`

- :ref:`exhale_struct_struct_r_d_e_1_1_dynamic_sprite_renderer_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_effect___controllers`

- :ref:`exhale_struct_struct_r_d_e_1_1_file`

- :ref:`exhale_struct_struct_r_d_e_1_1_font_manager_1_1_font_handler`

- :ref:`exhale_struct_struct_r_d_e_1_1_frame_buffer_specification`

- :ref:`exhale_struct_struct_r_d_e_1_1_generation_settings`

- :ref:`exhale_struct_struct_r_d_e_1_1_localization_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_localization_info`

- :ref:`exhale_struct_struct_r_d_e_1_1_localization_manager_1_1_any`

- :ref:`exhale_struct_struct_r_d_e_1_1_mat2`

- :ref:`exhale_struct_struct_r_d_e_1_1_music`

- :ref:`exhale_struct_struct_r_d_e_1_1_nine_slice`

- :ref:`exhale_struct_struct_r_d_e_1_1_node`

- :ref:`exhale_struct_struct_r_d_e_1_1_node___json_pair`

- :ref:`exhale_struct_struct_r_d_e_1_1_noise_map`

- :ref:`exhale_struct_struct_r_d_e_1_1_open_g_l_vertex`

- :ref:`exhale_struct_struct_r_d_e_1_1_open_g_l_vertex_debug`

- :ref:`exhale_struct_struct_r_d_e_1_1_particle_data`

- :ref:`exhale_struct_struct_r_d_e_1_1_particle_system_callbacks_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_particle_system_color_gradient_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_particle_system_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_particle_system_data_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_physics_body`

- :ref:`exhale_struct_struct_r_d_e_1_1_physics_body_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_physics_collision_callbacks`

- :ref:`exhale_struct_struct_r_d_e_1_1_physics_shape`

- :ref:`exhale_struct_struct_r_d_e_1_1_probability`

- :ref:`exhale_struct_struct_r_d_e_1_1_procedural_map`

- :ref:`exhale_struct_struct_r_d_e_1_1_r_d_e_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_r_d_e_config_1_1_project_properties`

- :ref:`exhale_struct_struct_r_d_e_1_1_r_d_e_config_1_1_window_properties`

- :ref:`exhale_struct_struct_r_d_e_1_1_rect`

- :ref:`exhale_struct_struct_r_d_e_1_1_rendering_tree_data`

- :ref:`exhale_struct_struct_r_d_e_1_1_renderizable_inner_data`

- :ref:`exhale_struct_struct_r_d_e_1_1_renderizable_inner_data_u_i`

- :ref:`exhale_struct_struct_r_d_e_1_1_return_delegate`

- :ref:`exhale_struct_struct_r_d_e_1_1_return_delegate_3_01_r_07_args_8_8_8_08_4`

- :ref:`exhale_struct_struct_r_d_e_1_1_rolling_buffer`

- :ref:`exhale_struct_struct_r_d_e_1_1_scrolling_buffer`

- :ref:`exhale_struct_struct_r_d_e_1_1_sfx`

- :ref:`exhale_struct_struct_r_d_e_1_1_shape_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_shape_masking_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_sound`

- :ref:`exhale_struct_struct_r_d_e_1_1_sprite_renderer_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_state`

- :ref:`exhale_struct_struct_r_d_e_1_1_stub`

- :ref:`exhale_struct_struct_r_d_e_1_1_stub_3_01_r_07_args_8_8_8_08_4`

- :ref:`exhale_struct_struct_r_d_e_1_1_tag`

- :ref:`exhale_struct_struct_r_d_e_1_1_text_renderer_1_1_line_info`

- :ref:`exhale_struct_struct_r_d_e_1_1_text_renderer_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_texture_info`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_anchor`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_button_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_checkbox_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_image_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_input_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_panel_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_slider_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_text_1_1_line_info`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_text_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_u_i_transform`

- :ref:`exhale_struct_struct_r_d_e_1_1_unique_delegate`

- :ref:`exhale_struct_struct_r_d_e_1_1_unique_delegate_3_01_r_07_args_8_8_8_08_4`

- :ref:`exhale_struct_struct_r_d_e_1_1_updatable_data`

- :ref:`exhale_struct_struct_r_d_e_1_1_vec2`

- :ref:`exhale_struct_struct_r_d_e_1_1_vertex_config`

- :ref:`exhale_struct_struct_r_d_e_1_1_vibration_config`

- :ref:`exhale_class_class_r_d_e_1_1_animation`

- :ref:`exhale_class_class_r_d_e_1_1_animation_system`

- :ref:`exhale_class_class_r_d_e_1_1_bad_delegate_call`

- :ref:`exhale_class_class_r_d_e_1_1_bad_e_c_s_system_swap`

- :ref:`exhale_class_class_r_d_e_1_1_basic_perlin_noise`

- :ref:`exhale_class_class_r_d_e_1_1_batch`

- :ref:`exhale_class_class_r_d_e_1_1_camera`

- :ref:`exhale_class_class_r_d_e_1_1_canvas`

- :ref:`exhale_class_class_r_d_e_1_1_cellular_automata`

- :ref:`exhale_class_class_r_d_e_1_1_clock`

- :ref:`exhale_class_class_r_d_e_1_1_config_manager`

- :ref:`exhale_class_class_r_d_e_1_1_console`

- :ref:`exhale_class_class_r_d_e_1_1_controller_axis_moved_event`

- :ref:`exhale_class_class_r_d_e_1_1_controller_button_down_event`

- :ref:`exhale_class_class_r_d_e_1_1_controller_button_up_event`

- :ref:`exhale_class_class_r_d_e_1_1_controller_input`

- :ref:`exhale_class_class_r_d_e_1_1_controller_vibration_manager`

- :ref:`exhale_class_class_r_d_e_1_1_c_p_u_texture`

- :ref:`exhale_class_class_r_d_e_1_1_debug_shape`

- :ref:`exhale_class_class_r_d_e_1_1_delta`

- :ref:`exhale_class_class_r_d_e_1_1_dynamic_sprite_renderer`

- :ref:`exhale_class_class_r_d_e_1_1_e_c_s_manager`

- :ref:`exhale_class_class_r_d_e_1_1_e_c_s_system`

- :ref:`exhale_class_class_r_d_e_1_1_engine`

- :ref:`exhale_class_class_r_d_e_1_1_event`

- :ref:`exhale_class_class_r_d_e_1_1_event_bus`

- :ref:`exhale_class_class_r_d_e_1_1_event_bus_1_1_handler_id`

- :ref:`exhale_class_class_r_d_e_1_1_event_dispatcher`

- :ref:`exhale_class_class_r_d_e_1_1_file_handler`

- :ref:`exhale_class_class_r_d_e_1_1_file_manager`

- :ref:`exhale_class_class_r_d_e_1_1_font`

- :ref:`exhale_class_class_r_d_e_1_1_font_manager`

- :ref:`exhale_class_class_r_d_e_1_1_frame_buffer`

- :ref:`exhale_class_class_r_d_e_1_1_graph`

- :ref:`exhale_class_class_r_d_e_1_1_im_gui_scene`

- :ref:`exhale_class_class_r_d_e_1_1_input`

- :ref:`exhale_class_class_r_d_e_1_1_input_manager`

- :ref:`exhale_class_class_r_d_e_1_1_keyboard_input`

- :ref:`exhale_class_class_r_d_e_1_1_key_event`

- :ref:`exhale_class_class_r_d_e_1_1_key_pressed_event`

- :ref:`exhale_class_class_r_d_e_1_1_key_released_event`

- :ref:`exhale_class_class_r_d_e_1_1_key_typed_event`

- :ref:`exhale_class_class_r_d_e_1_1_load_vertex_config_not_invoked`

- :ref:`exhale_class_class_r_d_e_1_1_localization_manager`

- :ref:`exhale_class_class_r_d_e_1_1_manager`

- :ref:`exhale_class_class_r_d_e_1_1_map_generator`

- :ref:`exhale_class_class_r_d_e_1_1_mobile_input`

- :ref:`exhale_class_class_r_d_e_1_1_mobile_touch_down_event`

- :ref:`exhale_class_class_r_d_e_1_1_mobile_touch_moved_event`

- :ref:`exhale_class_class_r_d_e_1_1_mobile_touch_up_event`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_button_event`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_button_pressed_event`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_button_released_event`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_input`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_moved_event`

- :ref:`exhale_class_class_r_d_e_1_1_mouse_scrolled_event`

- :ref:`exhale_class_class_r_d_e_1_1_particle_system`

- :ref:`exhale_class_class_r_d_e_1_1_perlin_noise_manager`

- :ref:`exhale_class_class_r_d_e_1_1_physics_manager`

- :ref:`exhale_class_class_r_d_e_1_1_platform`

- :ref:`exhale_class_class_r_d_e_1_1_pool`

- :ref:`exhale_class_class_r_d_e_1_1_profiler`

- :ref:`exhale_class_class_r_d_e_1_1_random`

- :ref:`exhale_class_class_r_d_e_1_1_render_manager`

- :ref:`exhale_class_class_r_d_e_1_1_scene`

- :ref:`exhale_class_class_r_d_e_1_1_scene_manager`

- :ref:`exhale_class_class_r_d_e_1_1_shader`

- :ref:`exhale_class_class_r_d_e_1_1_shader_manager`

- :ref:`exhale_class_class_r_d_e_1_1_sound_manager`

- :ref:`exhale_class_class_r_d_e_1_1_sprite_batch`

- :ref:`exhale_class_class_r_d_e_1_1_sprite_batch_1_1_debug`

- :ref:`exhale_class_class_r_d_e_1_1_sprite_renderer`

- :ref:`exhale_class_class_r_d_e_1_1_text_renderer`

- :ref:`exhale_class_class_r_d_e_1_1_text_typed_event`

- :ref:`exhale_class_class_r_d_e_1_1_texture`

- :ref:`exhale_class_class_r_d_e_1_1_texture_atlas_manager`

- :ref:`exhale_class_class_r_d_e_1_1_transform`

- :ref:`exhale_class_class_r_d_e_1_1_transition_params`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_button`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_checkbox`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_image`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_input`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_interactable`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_mask`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_panel`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_slider`

- :ref:`exhale_class_class_r_d_e_1_1_u_i_text`

- :ref:`exhale_class_class_r_d_e_1_1_view_port`

- :ref:`exhale_class_class_r_d_e_1_1_window`

- :ref:`exhale_class_class_r_d_e_1_1_window_closed_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_display_changed_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_frame_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_input`

- :ref:`exhale_class_class_r_d_e_1_1_window_minimized_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_moved_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_render_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_resized_event`

- :ref:`exhale_class_class_r_d_e_1_1_window_update_event`


Enums
-----


- :ref:`exhale_enum_namespace_r_d_e_1a874e90d6b33d51be0ec7524be52f3bd7`

- :ref:`exhale_enum_namespace_r_d_e_1a85a7bdb473e6e958f919166f3fc0529d`

- :ref:`exhale_enum_namespace_r_d_e_1a2b6a7795115bb4316612130df395aa11`

- :ref:`exhale_enum_namespace_r_d_e_1a00758501ad8446164e00cc44b096ebec`

- :ref:`exhale_enum_namespace_r_d_e_1af739ab5b6aed02ef5ab138f6f9ebe912`

- :ref:`exhale_enum_namespace_r_d_e_1a97f3c44a3f84f98854392a7eef21619c`

- :ref:`exhale_enum_namespace_r_d_e_1af73271e68dfcca1334f5923de88acdde`

- :ref:`exhale_enum_namespace_r_d_e_1ae8daadb069a4b404022ce623ebd82c73`

- :ref:`exhale_enum_namespace_r_d_e_1a9b56064364720987212b6d168063d797`

- :ref:`exhale_enum_namespace_r_d_e_1a7366e3aaf50893b069748c2821751d2e`

- :ref:`exhale_enum_namespace_r_d_e_1ae1b377580a5f0afd4b6021072ed14bde`

- :ref:`exhale_enum_namespace_r_d_e_1a6079d97bd2b05de1813ab71932242c87`

- :ref:`exhale_enum_namespace_r_d_e_1ab5fa6212f202160144f3b4e3dbdcca85`

- :ref:`exhale_enum_namespace_r_d_e_1a10f3099447e0f959baaf1b68b760fece`

- :ref:`exhale_enum_namespace_r_d_e_1a885d7d4eefa84d5a6a07d93c5aaaf6ca`

- :ref:`exhale_enum_namespace_r_d_e_1a7585ee6b3c7c5f591351f83069e39e4a`

- :ref:`exhale_enum_namespace_r_d_e_1a95da56214350f01c5f94f8e37195cc6d`

- :ref:`exhale_enum_namespace_r_d_e_1aa442da21122dddd6a8856e0bfc24c86e`

- :ref:`exhale_enum_namespace_r_d_e_1a5eba8c0bb1379fa821c063ddade77d8d`

- :ref:`exhale_enum_namespace_r_d_e_1af98a3a3f97ec7b3b96280b96ff963f1d`

- :ref:`exhale_enum_namespace_r_d_e_1a8a4bb66c279d30947586830a88cbfb99`

- :ref:`exhale_enum_namespace_r_d_e_1aba599888c87f5bf9b6052d710bc6923f`

- :ref:`exhale_enum_namespace_r_d_e_1a25e702c79cb77bc24dfb1305c2211a7f`


Functions
---------


- :ref:`exhale_function_namespace_r_d_e_1a23cdc628354fa01dd38d9c356229b5a5`

- :ref:`exhale_function_namespace_r_d_e_1a695191e11afa9c81cdfd9384ee51c907`

- :ref:`exhale_function_namespace_r_d_e_1a94d9b83a19a943ced5b9b33fdbc706dd`

- :ref:`exhale_function_namespace_r_d_e_1a6d8146f6c3b0e8cd774d17300eb2c212`

- :ref:`exhale_function_namespace_r_d_e_1a335ccd7ecc7c58c031c78c522b27b7a6`

- :ref:`exhale_function_namespace_r_d_e_1a3509a91ee91868dca99cd4794957277b`

- :ref:`exhale_function_namespace_r_d_e_1a57f355ca797c64f15019ba997dd80773`

- :ref:`exhale_function_namespace_r_d_e_1a57aa5ea3c40e971ea4d37d123af87562`

- :ref:`exhale_function_namespace_r_d_e_1acda874193a4b374d7c7ed24148f710a8`

- :ref:`exhale_function_namespace_r_d_e_1ad5502d2a48019d5e8449e0bd979a25e4`

- :ref:`exhale_function_namespace_r_d_e_1a8d5a5b3dd53cb2180dd19a22fd8a0104`

- :ref:`exhale_function_namespace_r_d_e_1ad4ab7144c6bb76492024a590348d0a93`

- :ref:`exhale_function_namespace_r_d_e_1af99eac18286748cdc94363993d9420b1`

- :ref:`exhale_function_namespace_r_d_e_1a5c516a1612b0bbbaa39d9378fa731cac`

- :ref:`exhale_function_namespace_r_d_e_1ac8daab738d4b2724400208c53db04c26`

- :ref:`exhale_function_namespace_r_d_e_1a77ea93cff51f21f9d5bc8308fa098de7`

- :ref:`exhale_function_namespace_r_d_e_1a0416271fc2df42eb145611e78ee381d5`

- :ref:`exhale_function_namespace_r_d_e_1a66c3a8ea59b41b2b3334dc036431c6d2`

- :ref:`exhale_function_namespace_r_d_e_1a6d67bcb68203a614cc7d4e860e7ca2ed`

- :ref:`exhale_function_namespace_r_d_e_1a45265503f69e4f5bbc27a7ff61d8a265`

- :ref:`exhale_function_namespace_r_d_e_1a87e6a05eca29c9fc3b1eeae3624b2434`

- :ref:`exhale_function_namespace_r_d_e_1a155493e0e54a348ce7a6b421a2d686e1`

- :ref:`exhale_function_namespace_r_d_e_1a4a458b0767d484f1dc627fa462b577e0`

- :ref:`exhale_function_namespace_r_d_e_1ab444e0a99624fbbb1427011b0eaaa274`

- :ref:`exhale_function_namespace_r_d_e_1acd992a010bfd85cbff026db61c4364dd`

- :ref:`exhale_function_namespace_r_d_e_1ab0576f8ff643747e51e9ca581bf246f6`

- :ref:`exhale_function_namespace_r_d_e_1a978ae4f5471a04641450fe9afce564be`

- :ref:`exhale_function_namespace_r_d_e_1adf69b052eb5d115516a31168d6a2ef77`

- :ref:`exhale_function_namespace_r_d_e_1a58bd58ec857052bd9494d5e9e7f7fbd4`

- :ref:`exhale_function_namespace_r_d_e_1ad2892b6650e14b9042c012fa56990c39`

- :ref:`exhale_function_namespace_r_d_e_1a3c0bc9f8be28f32267ef3db8df33dfa1`

- :ref:`exhale_function_namespace_r_d_e_1a1524316e7649d280239b1ddff17ee994`

- :ref:`exhale_function_namespace_r_d_e_1a10c46639647b4d3e51a721c6237c3372`

- :ref:`exhale_function_namespace_r_d_e_1ae920828b40496032c0af8aea6f7e0031`

- :ref:`exhale_function_namespace_r_d_e_1a918439f7c16faca09dbffcbe8938bb68`

- :ref:`exhale_function_namespace_r_d_e_1a1718f9e66cb049118af7b87db988f2bc`


Typedefs
--------


- :ref:`exhale_typedef_namespace_r_d_e_1ab4d3c797771f7ccc7e7a0f71e47fca45`

- :ref:`exhale_typedef_namespace_r_d_e_1a2c8286f8e5a774221c1a5fd864765d3b`

- :ref:`exhale_typedef_namespace_r_d_e_1a7a8565cf0bdd344d7cf3fa334dc7c7b9`

- :ref:`exhale_typedef_namespace_r_d_e_1aeacdd8e685b9bec4097c8c70fdea83d3`

- :ref:`exhale_typedef_namespace_r_d_e_1a42fbd02e6129f138f2ea26ec0c9f1d66`

- :ref:`exhale_typedef_namespace_r_d_e_1a60357ad98f1a566821cde895f11ab262`

- :ref:`exhale_typedef_namespace_r_d_e_1ab8f4bc1c8f567338d16f1eccb6c25582`

- :ref:`exhale_typedef_namespace_r_d_e_1a4ea5cbe20367050881537d9f274d8ba3`

- :ref:`exhale_typedef_namespace_r_d_e_1adb47cffc22f06bd00b8fab0f1de4b89b`

- :ref:`exhale_typedef_namespace_r_d_e_1a667f045803f647a57830158bc6e0e10b`

- :ref:`exhale_typedef_namespace_r_d_e_1aaf6ce77bdb9cdf041a3352503338190a`

- :ref:`exhale_typedef_namespace_r_d_e_1a4d5be82315c8aff6aa47b33e46749e7c`

- :ref:`exhale_typedef_namespace_r_d_e_1a0cbac4494e3402fa73c3957541eaefe8`

- :ref:`exhale_typedef_namespace_r_d_e_1a9feedbb7b8355f0ee9c64cfaa2a474d1`

- :ref:`exhale_typedef_namespace_r_d_e_1a6a779805e76e28d9cf8e1ae47768e1b5`

- :ref:`exhale_typedef_namespace_r_d_e_1a51b4cd12a649d1ebe355f022c4aef2ce`

- :ref:`exhale_typedef_namespace_r_d_e_1aacb93c8c48d229e192714b1afd55a7f0`

- :ref:`exhale_typedef_namespace_r_d_e_1a9ea9ba69971596d328beea60b94b9d5d`

- :ref:`exhale_typedef_namespace_r_d_e_1a81b32af5dedae046b06f56acf90be173`

- :ref:`exhale_typedef_namespace_r_d_e_1ab0c8e3ce5f94460fbdf44f3b2529e256`

- :ref:`exhale_typedef_namespace_r_d_e_1abeaff1d2c21f481deeed520585f50af1`

- :ref:`exhale_typedef_namespace_r_d_e_1a54549f2710a2c69fbd61b1c5b31648df`

- :ref:`exhale_typedef_namespace_r_d_e_1a0f431cda8493c6e44e87092883ee640c`

- :ref:`exhale_typedef_namespace_r_d_e_1aec18d0945a75561ee86ef689ce506b33`


Variables
---------


- :ref:`exhale_variable_namespace_r_d_e_1adf8ebe39a764afc7aa82812ab64b4885`
