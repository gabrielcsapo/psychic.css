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
        <Typography brands={ brands } brand={ brand } alternate={ alternate }/>
        <Grid brand={ brand } alternate={ alternate }/>
        <Table brands={ brands } brand={ brand } alternate={ alternate }/>
        <Spinner brands={ brands } brand={ brand } alternate={ alternate }/>
        <Progress brands={ brands } brand={ brand } alternate={ alternate }/>
        <Tooltip brands={ brands } brand={ brand } alternate={ alternate }/>
        <Panel brands={ brands } brand={ brand } alternate={ alternate }/>
        <Navbar brands={ brands } brand={ brand } alternate={ alternate }/>
        <Modal brands={ brands } brand={ brand } alternate={ alternate }/>
        <List brands={ brands } brand={ brand } alternate={ alternate }/>
        <Badge brands={ brands } brand={ brand } alternate={ alternate }/>
        <Alert brands={ brands } brand={ brand } alternate={ alternate }/>
        <Form brands={ brands } brand={ brand } alternate={ alternate }/>
        <Examples brand={ brand } alternate={ alternate }/>
      </div>
    );
  }
}

export default Main;
