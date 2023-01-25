//
//  RNJitsiMeetViewManager.h
//  CustomJitsi
//
//  Created by Sayone Technologies on 20/12/22.
//

#ifndef RNJitsiMeetViewManager_h
#define RNJitsiMeetViewManager_h
#import <React/RCTViewManager.h>
@import JitsiMeetSDK;

@interface RNJitsiMeetViewManager : RCTViewManager <JitsiMeetViewDelegate>
@end

#endif /* RNJitsiMeetViewManager_h */
