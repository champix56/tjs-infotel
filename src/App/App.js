import React from 'react';
import PropTypes from 'prop-types';
import MyButton from './components/Button/Button';
import Footer from './components/Footer/Footer';
// import Nav from './components/Nav/Nav';
import Title from './components/Title/Title';
import Editor from './components/Editor/Editor';
import Viewer from './components/Viewer/Viewer';
import MainView from './components/MainView/MainView';
import { Button as Button2 } from 'react-bootstrap';
/*import REST_SRV_ADR from './config/config';
import {a} from './config/config';*/
import store, { initialState, REST_SRV_ADR } from './reducer/memeReducer';
import ThumbailLayout from './components/ThumbailLayout/ThumbailLayout';
import MiniViewer from './components/MiniViewer/MiniViewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { memes: [], imgs: [] }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ ...store.getState().datas })
    })
  }
  render() {
    return (
      <>
        <div className="App">
          <Title />
          {/* <Nav /> */}
          <MainView>
            <Viewer />
            <Editor />
          </MainView>
          <Footer />
        </div>
        <ThumbailLayout>
          {
            this.state.memes.map((e, i) => {
              const thismeme = { ...e, img: this.state.imgs.find((elem) => elem.id === e.imgId) }
              return <MiniViewer key={'preview' + i} meme={thismeme} />
            })
          }
        </ThumbailLayout>
      </>
    );
  }
}



export default App;
