// import './App.css';
import { Provider } from 'react-redux';
import StateMaker from './state';
import View from './comps';
import Test from './test';

// import { connect } from 'react-redux';
// import { sharedProps, sharedMethods } from './redux/state/stateBinder';
// const CompWithStateProps = connect(sharedProps, sharedMethods)(Test)




function App() {
  return (
    <Provider store={StateMaker}>
      <div className="App">
        {/* <CompWithStateProps index={0} /> */}
        <View />
        {/* <Test /> */}
      </div>
    </Provider>
  );
}

export default App;
