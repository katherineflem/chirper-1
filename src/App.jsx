import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      newArray: []
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      newArray: [this.state.text, ...this.state.newArray],
      text: "",
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
                    return <div className="card border-primary" key={index}>
                      <h3 className="card-body">{text}</h3>
                    </div>
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
