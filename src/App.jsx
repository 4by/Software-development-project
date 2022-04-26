// import './App.css';
import { Provider } from 'react-redux';
import StateMaker from './state';
import View from './comps';

// import Test from './pages/fields/area';
// import { connect } from 'react-redux';
// import { sharedProps, sharedMethods } from './redux/state/stateBinder';
// const CompWithStateProps = connect(sharedProps, sharedMethods)(Test)




function App() {
  return (
    <Provider store={StateMaker}>
      <div className="App">
        <View />
        {/* <CompWithStateProps index={0} /> */}
      </div>
    </Provider>
  );
}

export default App;
