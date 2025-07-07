function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0C0C0D',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          NewLawAI
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '1rem' }}>
          AI-Powered Legal Assistant
        </p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          ✅ React is working! This is a test page.
        </p>
      </div>
    </div>
  )
}

export default App