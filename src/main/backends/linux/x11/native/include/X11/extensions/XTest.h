// SPDX-FileCopyrightText: 2026 Regata OS Team
// SPDX-License-Identifier: MIT

#ifndef _XTEST_H_
#define _XTEST_H_

#include <X11/Xlib.h>

#ifdef __cplusplus
extern "C" {
#endif

int XTestFakeKeyEvent(Display* dpy, unsigned int keycode, Bool is_press, unsigned long delay);
int XTestFakeRelativeMotionEvent(Display* dpy, int x, int y, unsigned long delay);
int XTestFakeMotionEvent(Display* dpy, int screen_number, int x, int y, unsigned long delay);
int XTestFakeButtonEvent(Display* dpy, unsigned int button, Bool is_press, unsigned long delay);
Bool XTestQueryExtension(Display* dpy, int* event_base, int* error_base, int* major_version, int* minor_version);

#ifdef __cplusplus
}
#endif

#endif // _XTEST_H_
