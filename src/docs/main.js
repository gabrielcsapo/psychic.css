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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'primary'
    }
  }
  changeBrand(brand, alternate) {
    this.setState({
      brand
    });
  }

  render() {
    const brands = ['white', 'black', 'default', 'primary', 'success', 'info', 'warning', 'danger'];
    const alternates = {
      'white': 'black',
      'black': 'white',
      'default': 'white',
      'primary': 'white',
      'success': 'white',
      'info': 'white',
      'warning': 'white',
      'danger': 'white'
    };
    const { brand } = this.state;
    const alternate = alternates[brand];

    return (
      <div>
        <Intro onChangeBrand={ this.changeBrand.bind(this) } brands={ brands } brand={ brand } alternate={ alternate }/>
        <Colors brands={ brands }/>
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
        <Examples brand={ brand } alternate={ alternate }/>
      </div>
    );
  }
}

export default Main;
