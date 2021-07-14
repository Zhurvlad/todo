import React from 'react';
import {Header} from "./components";
import {Home, Card} from "./pages";
import {Route} from "react-router";

function App() {

   return(
       <div className="wrapper">
           <Header/>
           <div className="content">
               <Route exact path={'/'}  component={Home}/>
               <Route exact path={'/card'} component={Card}/>
           </div>
       </div>
   )
}

export default App

/*function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3001/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        });
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path={'/'} render={() => <Home items={pizzas}/>}/>
                <Route exact path={'/card'} component={Card}/>
                <Card/>
            </div>
        </div>
    );
}*/

/*
class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3001/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path={'/'} render={() => <Home items={this.props.pizzas}/>}/>
                    <Route exact path={'/card'} component={Card}/>
                    <Card/>
                </div>
            </div>
        );
    }
}
*/


/*
const mapDispatchToProps = dispatch => {
    return {
        setPizzas,
        dispatch,
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
