import React from 'react';
import PropTypes from 'prop-types';
import MyButton from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
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
import {
  BrowserRouter as Router,
  Route, Link, Switch
} from 'react-router-dom'
import ReactModal from 'react-modal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { memes: [], imgs: [], isOpen: false, message: "hello", typeModal: 'confirm' }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ ...store.getState().datas })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Title />
          <Nav />
          <Switch>
            <Route path="/meme/:id">
              <MainView>
                <Viewer />
                <Editor />
              </MainView>
            </Route>
            <Route path="/meme">
              <MainView>
                <Viewer />
                <Editor />
              </MainView>
            </Route>
            <Route path="/">
              <ThumbailLayout>
                {
                  this.state.memes.map((e, i) => {
                    const thismeme = { ...e, img: this.state.imgs.find((elem) => elem.id === e.imgId) }
                    return <MiniViewer key={'preview' + i} meme={thismeme} />
                  })
                }
              </ThumbailLayout>
            </Route>
          </Switch>
          <Footer />
          <ReactModal isOpen={this.state.isOpen} contentLabel="Hello l'erreur">{this.state.message}

            {(this.state.typeModal === 'confirm') ?
              <MyButton text="Non" onClick={() => this.setState({ isOpen: false })} />
              : undefined}

          </ReactModal>
          <MyButton text="open Modal" onClick={() => {
            this.setState({ isOpen: true, message: 'tu as cliqué ici' })

          }} ></MyButton>
        </div>
      </Router>
    );
  }
}



export default App;
