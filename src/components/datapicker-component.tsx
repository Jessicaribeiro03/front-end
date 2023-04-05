import React from 'react'
import { Form as label } from 'react-bootstrap';
 
class BootstrapDatePickerComponent extends React.Component{
 
    render(){
 
        return(
            <div>
                <div className="col">
                    <div className="col-md-12">
                        <label.Group controlId="dob">
                            <label>Data de Nascimento</label>
                            <label.Control type="date" name="dob" placeholder="Date of Birth" />
                        </label.Group>
                    </div>
                </div>
            </div>
        )
    }
     
}
 
export default BootstrapDatePickerComponent;