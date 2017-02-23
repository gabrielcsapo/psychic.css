import React from 'react';

import Intro from './components/intro';
import Colors from './pages/colors';
import Typography from './pages/typography';
import Grid from './pages/grid';
import Table from './pages/table';
import Spinner from './pages/spinner';
import Progress from './pages/progress';
import Tooltip from './pages/tooltip';
import Panel from './pages/panel';
import Navbar from './pages/navbar';
import Modal from './pages/modal';
import List from './pages/list';
import Badge from './pages/badge';
import Alert from './pages/alert';
import Form from './pages/form';
import Examples from './pages/examples';

import Switcher from './components/switcher';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'primary'
    }
  }
  changeBrand(brand) {
    this.setState({
      brand
    });
  }

  render() {
    const brands = ['white', 'black', 'default', 'primary', 'success', 'info', 'warning', 'danger'];
    const { brand } = this.state;

    return (
      <div>
        <Switcher selected={this.changeBrand.bind(this)} brands={ brands } brand={ brand }/>
        <Intro brand={ brand }/>
        <Colors brands={ brands } />
        <Typography brands={ brands } brand={ brand }/>
        <Grid brand={ brand }/>
        <Table brands={ brands } brand={ brand }/>
        <Spinner brands={ brands } brand={ brand }/>
        <Progress brands={ brands } brand={ brand }/>
        <Tooltip brands={ brands } brand={ brand }/>
        <Panel brands={ brands } brand={ brand }/>
        <Navbar brands={ brands } brand={ brand }/>
        <Modal brands={ brands } brand={ brand }/>
        <List brands={ brands } brand={ brand }/>
        <Badge brands={ brands } brand={ brand }/>
        <Alert brands={ brands } brand={ brand }/>
        <Form brands={ brands } brand={ brand }/>
        <Examples brand={ brand }/>
      </div>
    );
  }
}

export default Main;
