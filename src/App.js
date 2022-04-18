import './App.css';
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Scan QR Code</h2>
          <QRCode value="hello" />
      </header>
    </div>
  );
}

export default App;
