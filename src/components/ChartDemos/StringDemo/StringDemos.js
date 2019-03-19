import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../demos.css';
import VerticalDivider from './../VerticalDivider';

import {Bar, Polar, Doughnut, Bubble, Line, Pie} from 'react-chartjs-2';



export default class CharDemos extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      charVals: [],
      colors: [],
      addSets: []
    }
    this.handleStringInput = this.handleStringInput.bind(this);
    this.handleAddSet = this.handleAddSet.bind(this);
    this.handleRemoveSet = this.handleRemoveSet.bind(this);
  }

  handleStringInput = () => {
    if (this.refs.input.value.length > 16) {
      this.refs.input.value = this.refs.input.value.slice(0, 16)
      return;
    } else if (this.state.addSets.length) {
      this.setState({addSets: []})
    }

    let chars = this.refs.input.value
      , vals = []
      , colors = [
        ...this.state.colors.splice(0, chars.length),
        '#'+Math.floor(Math.random()*16777215).toString(16)
      ];

    for (let i = 0; i < chars.length; i++) {
      vals.push(chars.charCodeAt(i))
    }

    this.setState({
      characters: [...chars.split('')],
      charVals: [...vals],
      colors: [...colors]
    })
  }

  handleAddSet = () => {
    let newHex = [];
    let newVals = this.state.charVals.map(c => {
      newHex.push('#'+Math.floor(Math.random()*16777215).toString(16));
      return c + 100 / (Math.random() * (11 - 3) + 3);
    });
    let num = this.state.addSets.length + 2;
    let newSet = {
      label: `String Values ${num}`,
      backgroundColor: newHex,
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: newVals
    }
    this.setState({addSets: [...this.state.addSets, newSet]})
  }

  handleRemoveSet = () => {
    if (!this.state.addSets.length) {
      this.setState({
        characters: [],
        charVals: [],
        colors: []
      })
      this.refs.input.value = ''
      return;
    }
    let {addSets} = this.state;
    this.setState({addSets: [...addSets.splice(0, addSets.length-1)]})
  }

  render() {

    const data = {
      labels: this.state.characters,
      datasets: [
        {
          label: 'String Values 1',
          backgroundColor: this.state.colors,
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.charVals
        },
        ...this.state.addSets
      ]
    }

    const NavString = () => {
      return (
        <header className="demo_header">
          <h1>react-chartjs-2</h1>
          Home{' | '}
          <Link to="/async">Async</Link>{' | '}
          <Link to="/static">Static</Link>
          <form className="string_input">
            <p>Enter some characters...</p>
            <input ref="input"
                   onChange={this.handleStringInput}/>
            <p>Add/remove a set...</p>
          </form>
          <button onClick={this.handleAddSet}>Add Dataset</button>
          <button onClick={this.handleRemoveSet}>Remove Dataset</button>
        </header>
      )
    }

    return (
      <main className="demo_wrapper">
        {NavString()}


        <VerticalDivider />

        <h3>Bar:</h3>
        <Bar data={data} />

        <VerticalDivider />

        <h3>Polar:</h3>
        <Polar data={data} />

        <VerticalDivider />

        <h3>Doughnut:</h3>
        <Doughnut data={data} />

        <VerticalDivider />

        <h3>Bubble:</h3>
        <Bubble data={bubbleData(this.state)} />

        <VerticalDivider />

        <h3>Line:</h3>
        <Line data={data} />

        <VerticalDivider />

        <h3>Pie:</h3>
        <Pie data={data} />

        <VerticalDivider />

      </main>
    )
  }
}










const bubbleData = (state) => {
  let mainSet = state.charVals.map(c => {
    let obj = {};
    obj.x = Math.random() * (255-1);
    obj.y =  Math.random() * (255-1);
    obj.r = c/10;
    return obj;
  })

  return {
    labels: state.characters,
    datasets: [
      {
        label: `String Values`,
        backgroundColor: state.colors,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        pointRadius: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: mainSet
      }
    ]
  }
}
