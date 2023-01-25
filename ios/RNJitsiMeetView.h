//
//  RNJitsiMeetView.h
//  CustomJitsi
//
//  Created by Sayone Technologies on 20/12/22.
//

#ifndef RNJitsiMeetView_h
#define RNJitsiMeetView_h

#import <React/RCTComponent.h>

@import JitsiMeetSDK;

@interface RNJitsiMeetView : JitsiMeetView
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceJoined;
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceTerminated;
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceWillJoin;
@property (nonatomic, copy) RCTBubblingEventBlock onEnteredPip;
@end


#endif /* RNJitsiMeetView_h */
