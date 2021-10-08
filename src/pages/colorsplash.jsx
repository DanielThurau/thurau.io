/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ColorSplash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        hex: '',
        imageIds: [],
        styles: {
            float: 'left',
            height: '20px',
            width: '20px',
            marginTop: '5px',
            marginRight: '10px',
            clear: 'both',
            border: '1px solid black',
        },
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
                this.setState({
                    imageIds: result,
                    styles: {
                        backgroundColor: "#" + this.state.hex,
                        float: 'left',
                        height: '20px',
                        width: '20px',
                        marginTop: '5px',
                        marginRight: '10px',
                        clear: 'both',
                        border: '1px solid black',
                    },
                });
            },
            (error) => {
                alert("Currently experiencing issues. Please try with another hex code");
            }
        )
  }

  render() {

    const iter = Math.floor(this.state.imageIds.length / 3);
    const secondColumnStart = 0 + iter;
    const thirdColumnStart = secondColumnStart + iter;

    let images1 = this.state.imageIds.slice(0, secondColumnStart).map((i) => (
        <img className='images' src={i}/>
    ));

    let images2 = this.state.imageIds.slice(secondColumnStart, thirdColumnStart).map((i) => (
        <img className='images' src={i}/>
    ));

    let images3 = this.state.imageIds.slice(thirdColumnStart).map((i) => (
        <img className='images' src={i}/>
    ));

    return (
      <Layout>
        <SEO title="ColorSplash" description="ColorSplash" />
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19', overflow:`hidden`}}>
          <div style={{ margin: '20px', padding: '20px' }}>
            <h1 headerText="ColorSplash">ColorSplash</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Hex Code
                <input
                  type="text"
                  value={this.state.hex}
                  onChange={this.handleChange}
                  style={{ marginLeft: '10px' }}
                />
              </label>
              <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
              <div style={this.state.styles} />
            </form>

            <div class="parent" style={{}}>
                <div style={{float:`left`, width:`33.33%`, padding:'10px'}}>
                    {images1}
                </div>
                <div style={{float:`left`, width:`33.33%`, padding:'10px'}}>
                    {images2}
                </div>
                <div style={{float:`left`, width:`33.33%`, padding:'10px'}}>
                    {images3}
                </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
