import React from 'react';

const Debug = () => {
  console.log('🔍 Debug Component Loaded');
  
  return (
    <div style={{
      background: '#f0f0f0',
      padding: '20px',
      margin: '20px',
      border: '2px solid red'
    }}>
      <h1>DEBUG COMPONENT</h1>
      <p>If you can see this, React is working</p>
      <button onClick={() => alert('React is working!')}>
        Test Click
      </button>
    </div>
  );
};

export default Debug;