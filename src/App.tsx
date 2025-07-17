import React from 'react';
import ChargingPreparationScreen from './ChargingPreparationScreen';

function App() {
  const handleBack = () => {
    console.log('Back button clicked');
    // Handle navigation logic here
  };

  return (
    <ChargingPreparationScreen onBack={handleBack} />
  );
}

export default App;