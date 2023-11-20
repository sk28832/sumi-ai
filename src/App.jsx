import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("sesshuToyo");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const surpriseOptions = [
    "A blue ostrich eating melon",
    "A shark on the telephone",
    "A pineapple sunbathing on an island",
    "A silhouette of a cat dancing under a crescent moon",
    "A cyberpunk fox surfing on neon waves",
    "A watercolor portrait of an owl with a monocle",
    "A rainy day in Tokyo",
    "A whimsical turtle floating with helium balloons",
    "A gecko playing a violin",
    "A futuristic robot sipping tea under a cherry blossom tree",
    "A sunflower and a rose engaged in a chess match",
    "A gothic raven wearing a top hat and reading a newspaper"
  ];

  const surpriseMe = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
    setError("");
  };

  const getPromptTemplate = () => {
    switch (selectedArtist) {
      case "sesshuToyo":
        return `In Sesshū Tōyō's ink style, depict ${value} with bold brushwork and Zen simplicity.`;
  
      case "hasegawaTohaku":
        return `Illustrate ${value} in Hasegawa Tōhaku's ink style, focusing on ethereal, misty aesthetics.`;
  
      case "ogataKorin":
        return `Render ${value} in Ogata Kōrin's Rinpa ink style, with vibrant colors and decorative patterns.`;
  
      default:
        return value;
    }
  };  
  

  const getImages = async () => {
    setImages([]);
    setError("");
    setIsLoading(true);

    const prompt = getPromptTemplate();

    if (!prompt.trim()) {
      setError("Please provide a description or click 'Surprise me' for a random one.");
      setIsLoading(false);
      return;
    }

    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: prompt
        }),
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await fetch('http://localhost:8000/images', options);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      setError("An error occurred while fetching images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="title">SumiAI</div>
      <p className="subtitle">An AI-powered journey into the world of Japanese ink painting.</p>
      <section className="search-section">
        <div className="input-container">
          <div className="input-wrapper">
            <input
              placeholder="Enter a description..."
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
          <span className="style-label">in the style of</span>
          <div className="dropdown-wrapper">
            <select value={selectedArtist} onChange={e => setSelectedArtist(e.target.value)}>
              <option value="sesshuToyo">Sesshu Toyo</option>
              <option value="hasegawaTohaku">Hasegawa Tohaku</option>
              <option value="ogataKorin">Ogata Korin</option>
            </select>
          </div>
        </div>
        <div>
          <button onClick={surpriseMe}>Surprise me</button>
          <button onClick={getImages}>Generate</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </section>
      {isLoading && (
        <div className="loading-container">
          <div className="loading-animation"></div>
          <div className="loading-overlay"></div>
        </div>
      )}
      <section className="image-section">
        {images.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated image of ${value}`} />
        ))}
      </section>
    </div>
  );
}

export default App;