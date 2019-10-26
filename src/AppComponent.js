import React from 'react';
import './App.css';
// import './Images'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/6.jpg';
import img7 from './Images/7.jpg';
import img8 from './Images/8.jpg';
import img9 from './Images/9.jpg';
import img10 from './Images/10.jpg';
import img11 from './Images/11.jpg';
import img12 from './Images/12.jpg';
import ScaryCards from './Components/ScaryCards.js/index.js'

const tileImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    images: tileImages,
    pickedImages: new Set()
  };

  handleOnClick = (clickedImage) => {
    const imagesCopy = [...this.state.images]
    shuffle(imagesCopy);
    this.setState({ images: imagesCopy });
    const pickedImagesCopy = new Set(this.state.pickedImages);
    if (pickedImagesCopy.has(clickedImage)) {
      this.setState({ score: 0 });
      this.setState({ pickedImages: new Set() })
    } else {
      this.setState({ score: this.state.score + 1 })
      if (this.state.score + 1 > this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 })
      }
      pickedImagesCopy.add(clickedImage);
      this.setState({ pickedImages: pickedImagesCopy });
    }
  }



  render() {
    return (
      <div className="App">
        <main className="grid-container">
          {this.state.images.map(image => {
            return <ScaryCards key={image} src={image} handleOnClick={() => {
              this.handleOnClick(image);
            }} />
          })}
        </main>
        <aside>
          <div className="score">
            Score: {this.state.score}
          </div>
          <div className="score">
            Top Score: {this.state.topScore}
          </div>
        </aside>
      </div>
    );
  }
}

export default App;
