import React from 'react';
import { useState } from 'react';




this.showMenu = this.showMenu.bind(this);
this.closeMenu = this.closeMenu.bind(this);

    
   
  
const showMenu = (e) =>  {
    e.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  
  
  const closeMenu = (e) => {
    
    if (!this.dropdownMenu.contains(e.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    } }

  
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        {
          this.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  
}

// eslint-disable-next-line no-undef
export default Dropdownmenu;