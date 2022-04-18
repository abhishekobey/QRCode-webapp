import './App.css';
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Scan QR Code</h2>
          <QRCode value="https://drive.google.com/file/d/0B6wAA3DLjQiyc3RhcnRlcl9maWxl/view?usp=sharing&resourcekey=0-zeiYwOWuhWvJkyTt_RZr0Q" />
      </header>
    </div>
  );
}

export default App;
