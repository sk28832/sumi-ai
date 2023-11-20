# SumiAI

## Overview
SumiAI is an innovative web application that combines the ancient art of Japanese ink painting with modern AI technology. Users can generate images in the styles of renowned Japanese ink artists Sesshū Tōyō, Hasegawa Tōhaku, and Ogata Kōrin. The application offers an intuitive interface for users to input descriptions or select from surprise prompts, creating unique, stylistic AI-generated artworks.

## How to Use
1. Input a Description: Enter a description for the image you want to generate, or use the 'Surprise me' button for random prompts.
2. Select an Artist Style: Choose from Sesshū Tōyō, Hasegawa Tōhaku, or Ogata Kōrin styles.
3. Generate the Image: Click 'Generate' to create your image.
4. View the Results: The generated images will be displayed in the image section.

## Meet the Masters

Explore the unique styles of three masterful Japanese artists, Sesshū Tōyō, Hasegawa Tōhaku, and Ogata Kōrin, whose distinctive approaches to ink painting have inspired our AI-generated art.

### Sesshū Tōyō (1420–1506)
Sesshū Tōyō is renowned for his dynamic and expressive ink landscapes. His style, rooted in Zen Buddhism, emphasizes simplicity, fluidity, and the essence of nature. 

1. **"Sansui Chokan" (Long Landscape Scroll, 1486)**
   - This scroll is a masterpiece of ink wash landscape, showcasing Sesshū's mastery in capturing the spirit of nature with minimal strokes.
   - <img src="https://www.wikiart.org/en/sesshu-toyo/sansui-chokan-detail-1496" alt="Sansui Chokan, detail - Sesshū Tōyō" width="300"/>

2. **"Landscape of Four Seasons" (1486)**
   - A depiction of nature's changing moods across the seasons, Sesshū employs his signature bold brushwork and monochrome ink.
   - <img src="https://www.wikiart.org/en/sesshu-toyo/landscape-of-four-seasons-spring-1486" alt="Landscape of Four Seasons (Spring?) - Sesshū Tōyō" width="300"/>

### Hasegawa Tōhaku (1539–1610)
Hasegawa Tōhaku is known for his delicate and ethereal ink paintings, often depicting misty, dreamlike landscapes and scenes.

1. **"Pine Trees" (1595)**
   - A celebrated example of Tōhaku's use of ink monochrome (sumi-e), illustrating a grove of pine trees emerging from a misty background.
   - <img src="https://www.tnm.jp/modules/r_collection/index.php?controller=dtl&colid=A11158" alt="Pine Trees - Hasegawa Tōhaku" width="300"/>

### Ogata Kōrin (1658–1716)
A leading figure of the Rinpa school, Ogata Kōrin is famous for his vibrant and decorative style, incorporating gold leaf and vivid colors.

1. **"Irises at Yatsuhashi" (after 1709)**
   - Kōrin’s use of bold color and pattern is evident in this depiction of irises, where he transforms a simple scene into a rhythmic and vivid composition.
   - <img src="https://www.metmuseum.org/art/collection/search/44858" alt="Irises - Ogata Kōrin" width="300"/>

Each artist brings their unique vision and technique to the canvas, offering a rich tapestry of styles for SumiAI to emulate in the creation of new, inspired artworks.

## Do Further Development

### Technologies Used
- Frontend: React
- Backend: Node.js, Express
- AI Image Generation: OpenAI's DALL-E
- Others: CORS, dotenv for environment variables

### Prerequisites
- Node.js and npm
- An OpenAI API key

### Installation
1. Clone the Repository: 
   ```git clone https://github.com/sk28832/sumi-ai.git```
   ```cd sumi-ai```

2. Install Dependencies: 
   Navigate to both the frontend and backend directories and install dependencies:
   ```npm install```

3. Setting up Environment Variables: 
   In the backend directory, create a .env file and add your OpenAI API key:
   ```OPENAI_API_KEY=your_openai_api_key_here```

### Running the Application
- Start the Frontend: 
  Navigate to the frontend directory and run:
  ```npm run start:frontend```

- Start the Backend: 
  Navigate to the backend directory and run:
  ```npm run start:backend```

After starting both the frontend and backend, navigate to the frontend's URL (typically http://localhost:3000) in your web browser to use SumiAI.

Enjoy exploring AI-generated art in the style of Japanese ink painting masters!
