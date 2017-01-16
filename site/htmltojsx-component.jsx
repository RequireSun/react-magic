/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This is a web interface for the HTML to JSX converter.
 */
'use strict';

import './htmltojsx.html';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactPlayground from './react-playground';

var HELLO_COMPONENT = "\
<tr>\n\
  <th>Month</th>\n\
  <th>Savings</th>\n\
</tr>\n\
<tr>\n\
  <td>January</td>\n\
  <td>$100</td>\n\
</tr>";
// var HELLO_COMPONENT = "\
// <!-- Hello world -->\n\
// <div class=\"awesome\" style=\"border: 1px solid red\">\n\
//   <label for=\"name\">Enter your name: </label>\n\
//   <input type=\"text\" id=\"name\" />\n\
// </div>\n\
// <p>Enter your HTML here</p>\
// ";

var HTMLtoJSXComponent = React.createClass({
    getInitialState: function () {
        return {
            outputClassName: 'NewComponent',
            createClass: true
        };
    },
    onReactClassNameChange: function (evt) {
        this.setState({outputClassName: evt.target.value});
    },
    onCreateClassChange: function (evt) {
        this.setState({createClass: evt.target.checked});
    },
    setInput: function (input) {
        this.setState({input: input});
        this.convertToJsx();
    },
    convertToJSX: function (input) {
        var converter = new HTMLtoJSX({
            outputClassName: this.state.outputClassName,
            createClass: this.state.createClass
        });
        return converter.convert(input);
    },
    render: function () {
        return (
            <div>
                <div id="options">
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.createClass}
                            onChange={this.onCreateClassChange}/>
                        Create class
                    </label>
                    <label style={{display: this.state.createClass ? '' : 'none'}}>
                        ·
                        Class name:
                        <input
                            type="text"
                            value={this.state.outputClassName}
                            onChange={this.onReactClassNameChange}/>
                    </label>
                </div>
                <ReactPlayground
                    codeText={HELLO_COMPONENT}
                    renderCode={true}
                    transformer={this.convertToJSX}
                    showCompiledJSTab={false}
                    editorTabTitle="Live HTML Editor"
                />
            </div>
        );
    }
});

ReactDOM.render(<HTMLtoJSXComponent />, document.getElementById('jsxCompiler'));

