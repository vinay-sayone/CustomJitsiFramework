/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Button,
  NativeModules,
  requireNativeComponent,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {ReactOneCustomMethod, CalendarModule} = NativeModules;

  const call = JitsiMeetModule.call;
  const audioCall = JitsiMeetModule.audioCall;
  const endCall = JitsiMeetModule.endCall;

  JitsiMeetModule.call = (url, userInfo, meetOptions, meetFeatureFlags) => {
    userInfo = userInfo || {};
    meetOptions = meetOptions || {};
    meetFeatureFlags = meetFeatureFlags || {};
    call(url, userInfo, meetOptions, meetFeatureFlags);
  };

  JitsiMeetModule.audioCall = (url, userInfo) => {
    userInfo = userInfo || {};
    audioCall(url, userInfo);
  };
  JitsiMeetModule.endCall = () => {
    console.log('hit');
    endCall();
  };

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/exemple';
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeetModule.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeetModule.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log('onConferenceTerminated');
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('onConferenceTerminated');
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('onConferenceWillJoin');
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <Button
          onPress={() => console.log('hit button')}
          title="Click Button"
        />
      </View>
      <JitsiMeetView
        onConferenceTerminated={(e: any) => onConferenceTerminated(e)}
        onConferenceJoined={(e: any) => onConferenceJoined(e)}
        onConferenceWillJoin={(e: any) => onConferenceWillJoin(e)}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

// const onPress = () => {
//   ReactOneCustomMethod.getPhoneID()
//     .then((res: string) => {
//       console.log(res);
//     })
//     .catch((err: any) => {
//       console.error(err);
//     });
// };

// const onPressCalendar = () => {
//   CalendarModule.createCalendarEvent('testName', 'testLocation');
// };
