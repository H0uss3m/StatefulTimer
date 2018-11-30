import React,{Component} from 'react';
import { Button ,Grid,Row,Col} from 'react-bootstrap';
class Buttons extends Component {
    render() { 
        return (<div>
            <Button style={{marginRight:'1%'}} bsStyle="primary" onClick={this.props.count}>Start</Button>    
            <Button bsStyle="primary"  onClick={this.props.reset}>Reset</Button>
            </div>  );
    }
}
 
export default Buttons;