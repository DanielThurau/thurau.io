/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ColorSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hex: '',
        imageIds: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ hex: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://4jmqjct152.execute-api.us-west-1.amazonaws.com/Prod/getIds?hex=${this.state.hex}`;

    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    imageIds: result,
                });
            },
            (error) => {
                alert("Currently experiencing issues. Please try with another hex code");
            }
        )
  }

  render() {

    let images = this.state.imageIds.map((i) => (
        <img className='images' src={i}/>
    ));

    return (
      <Layout>
        <SEO title="ColorSplash" description="ColorSplash" />
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19' }}>
          <div style={{ margin: '20px', padding: '20px' }}>
            <h1 headerText="ColorSplash">ColorSplash</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Hex Code
                <input
                  type="text"
                  value={this.state.hex}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>

            <div class="parent" style={{}}>
                {images}
            </div>


          </div>
        </div>
      </Layout>
    );
  }
}
