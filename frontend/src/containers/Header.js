import React, { Component, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const postAnalysis = async () => {
  try {
    const result = await axios.post(`http://localhost:8080/analysis/league`);
    console.log(result);
  } catch (error) {
    console.log('postAnalysis error!!');
  }
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analyze: '',
    };
  }

  async componentDidMount() {
    let analyze;
    try {
      const result = await axios.get(`http://localhost:8080/analysis/isAnalyzed`);
      if (result.data.isAnalyzed) {
        analyze = '分析:分析済み';
      } else {
        analyze = '分析:未実施';
      }
    } catch (error) {
      console.log('isAnalyzed error!!');
      analyze = '分析エラー';
    }

    this.setState({ analyze });
  }

  render() {
    return (
      <div>
        <Typography variant="h5">プロ野球データ分析</Typography>
        <Button variant="contained" onClick={() => postAnalysis()}>
          {this.state.analyze}
        </Button>
      </div>
    );
  }
}
