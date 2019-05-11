import React, { Component } from 'react';
import ChirpCard from './Chirps'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ", //blank string 
      newArray: [] //array of chirps will be appended here
    }
  }

  //have it start with 3 preloaded chirps rendered:
  componentDidMount(){
    let initialChirps= ["Katherine","George","Caroline"]
    this.setState({newArray: initialChirps})
  }
  handleSubmit = (e) => { //class method called handleSubmit
    e.preventDefault();
    this.setState({ //set new array using SPREAD OPERATOR SYNTAX
      newArray: [this.state.text, ...this.state.newArray],
      text: "", //empty out text after submitted
      index: 0 

    })

  }
  render() {
    return (
      <main className="container justify-content-center">
        <section className="jumbotron bg-primary text-white p-3">
          <h1 className="text-center">Chirper</h1>
        </section>
        <section className="row">
          <article className="col-md-12">
            <form className="form-group justify-content-center">
              <label>Enter Chirp Here</label>
              <input type="text" className="form-control" value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })} />
              <button onClick={e => this.handleSubmit(e)} className="btn btn-primary p-2 my-2">Submit Chirp</button>
            </form>
            <section className="row">
              <article className="col-md-12">
                <div>
                  {this.state.newArray.map((text, index) => {
                   return <ChirpCard text={text} key={index}/>
                  })}
                </div>
              </article>
            </section>

          </article>
        </section>
      </main>


    )
  }
}

;


export default App;
