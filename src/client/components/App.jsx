import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './Menu.jsx';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: null,
      cats: null,
      items: null,

      menuNames: null,
      menusObj: null,
      currMenu: null,
      categories: null,
      showAll: null
    }
  }
  // mongo
  // getRestaurantData() {
  //   var url = window.location.href;
  //   var id = url.split('=')[1];

  //   $.ajax({
  //     url: `/api/menus/${id}`,
  //     method: 'GET',
  //     success: data => {
  //       this.setState({
  //         menuNames: data.menuNames,
  //         menusObj: data.menus,
  //         currMenu: data.menus[0],
  //         categories: data.menus[0].categories,
  //         showAll: false
  //       });
  //     },
  //     error: (err) => {
  //       console.log('GET error: ', err);
  //     }
  //   });
  // }

  getRestaurantData() {
    var url = window.location.href;
    var id = url.split('=')[1];

      $.ajax({
      url: `/api/menus/${id}`,
      method: 'GET',
      success: data => {
        this.setState({
          menus: data
        });
      },
      error: (err) => {
        console.log('GET error: ', err);
      }
    });

    $.ajax({
      url: `/api/categories/${id}`,
      method: 'GET',
      success: data => {
        this.setState({
          cats: data
        });
      },
      error: (err) => {
        console.log('GET error: ', err);
      }
    });

    $.ajax({
      url: `/api/items/${id}`,
      method: 'GET',
      success: data => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('GET error: ', err);
      }
    });

    this.rearrangeData();
  }

  rearrangeData() {
    var output = {
      menuNames: null,
      menus: null
    };

    var menus = this.state.menus;
    var categories = this.state.categories;
    var items = this.state.items;

    for (var i = 0; i < menus.length; i++) {
      menus[i].categories = [];
      menus[i].items = [];
      output.menuNames.push(menus[i].name);
      output.menus.push(menus[i]);
    }

    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < output.menus.length; j++) {
        if (categories[i].menuId === output.menus[j].menuId) {
          output.menus[j].categories.push(categories[i].name);
        }
      }
    }

    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < output.menus.length; j++) {
        if (items[i].menuId === output.menus[j].menuId) {
          output.menus[j].items.push(items[i]);
        }
      }
    }
  }

  onButtonClick(menu) {
    this.setState({
      currMenu: this.state.menusObj[this.state.menuNames.indexOf(menu)],
      categories: this.state.menusObj[this.state.menuNames.indexOf(menu)].categories
    })
  }

  componentDidMount() {
    this.getRestaurantData();
  }

  render() {
    if (this.state.menus === null) {
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
            <Buttons currMenu={this.state.currMenu} menus={this.state.menuNames} onButtonClick={this.onButtonClick.bind(this)} />
            <hr />
          </div>
          <div>
            <Menu menu={this.state.currMenu} categories={this.state.categories} />
          </div>
        </div>
      )
    }
  }
}

export default App;