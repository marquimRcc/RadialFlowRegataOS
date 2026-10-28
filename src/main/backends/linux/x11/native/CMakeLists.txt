# SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
# SPDX-License-Identifier: MIT

file(GLOB SOURCE_FILES "*.cpp")

find_library(XTST_LIB NAMES Xtst libXtst.so.6 libXtst.so PATHS /usr/lib64 /usr/lib)

add_library(NativeX11 SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})

set_target_properties(NativeX11 PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(NativeX11 ${CMAKE_JS_LIB} ${XTST_LIB} X11)
target_include_directories(NativeX11 PRIVATE ${NODE_ADDON_API_DIR} ${CMAKE_JS_INC} ${CMAKE_CURRENT_SOURCE_DIR}/include)

