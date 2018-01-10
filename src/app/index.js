import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
class App extends Component
{
    render()
    {
        return(
            <div>
                It works!!
            </div>
        );
    }
}

ReactDOM.render(
<BrowserRouter>
    <Route path = "/" component = {App} />
</BrowserRouter>
,document.querySelector('.container'));