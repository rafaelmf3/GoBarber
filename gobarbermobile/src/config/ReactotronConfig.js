import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron
    .configure({host: '192.168.15.162'})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())

    console.tron = tron;

    tron.clear();
}
