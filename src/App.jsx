import '@google/model-viewer';
import './App.css';

function App() {
  return (
    <div className="viewer-container">
      <model-viewer
        src={`${import.meta.env.BASE_URL}room.glb`}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        alt="Scaniverse 3D Room"
      ></model-viewer>
    </div>
  );
}

export default App;