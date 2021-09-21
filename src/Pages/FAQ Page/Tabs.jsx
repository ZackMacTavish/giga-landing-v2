import React, { Component } from "react";
import { events } from "./data";

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }



  render() {
    return (
      <div className="all-styling">

                <div className="lists-flex-column">
                        <ul>
                        {this.props.children.map((elem, index) => {
                            let style = index === this.state.selected ? "selected" : "";
                            return (
                            <li
                                key={index}
                                className={style}
                                onClick={() => this.handleChange(index)}
                            >
                                {elem.props.title}
                                
                            </li>
                            
                            
                            );
                        })}
                        </ul>

                                    
                      
                </div>
        <div className="tab styling-tab">{this.props.children[this.state.selected]}</div>
      </div>
    );
  }
}

export default Tabs;
