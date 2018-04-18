import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './components/Material_title_panel';
import SidebarContent from './components/Sidebar_content';
import Card from './components/Card';
import MapEurope from './components/MapEurope';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
};

const mql = window.matchMedia('(min-width: 800px)');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mql,
      docked: false,
      open: false,
    };
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, docked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen = open => {
    this.setState({ open });
  };

  mediaQueryChanged = () => {
    this.setState({
      mql,
      docked: this.state.mql.matches,
    });
  };

  toggleOpen = ev => {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  };

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}>
            =
          </a>
        )}

        <span>News</span>

      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className="content">
            <div className="map">
              <MapEurope />
            </div>
            {Array.from({ length: 30 }).map((c, i) => <Card key={i} index={i}/>)}
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default App;
