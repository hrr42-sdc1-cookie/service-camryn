import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import Menu from './Menu.jsx';
import Buttons from './Buttons.jsx';
import SingleItem from './SingleItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNames: null,
      menus: null,
      menu: null,
      menuIndex: null,
      categories: null,
      items: null,
      showAll: null
    }
  }

  getRestaurantData() {
    var url = window.location.href;
    var id = url.split('=')[1];

    $.ajax({
      url: `/api/menus/${id}`,
      method: 'GET',
      success: data => {
        this.setState({
          menuNames: data.menuNames,
          menus: data.menus,
          menu: data.menus[0],
          menuIndex: 0,
          categories: data.menus[0].categories,
          items: data.menus[0].items,
          showAll: false
        });
      },
      error: (err) => {
        console.log('GET error: ', err);
      }
    });
  }

  componentDidMount() {
    this.getRestaurantData();
  }

  render() {
    if (this.state.menu === null) {
      return (
        <div className="menuTitle">
          <h5>Content is loading...</h5>
          <hr />
        </div>
      )
    } else if (this.state.showAll === false) {
      return (
        <div>
          <div className="menuTitle">
            <h5>Menu</h5>
            <hr />
          </div>
          <div>
            <Buttons menus={this.state.menuNames}/>
            <hr />
          </div>
          {/* <div>
            <Menu menu={this.state.menu}/>
            <hr />
          </div> */}

        </div>
      )
    }
  }

}
export default App;