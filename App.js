import React, { useState } from 'react';
import Onboard  from './components/screens/Onboard';
import CreateAccountScreen from './components/screens/CreateAccount';



const App = () => {

  const [showOnboard, setShowOnboard] = useState (true) ;

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

    return (
    <>
     {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
     {!showOnboard && <CreateAccountScreen />}
     </>
    );
};

export default App;

