import React from 'react';

export default class FlatSelect extends React.Component {

    render() {
        let tempView = {}
        if (this.props.flatsList.length === 0) {
            tempView = <option>Ei taloyhtiöitä</option>
        } else {
            tempView = this.props.flatsList.map((list) => 
            <option value={list.id} key={list.id}>{list.flat_number} {list.stairway}</option>
            )
        }
    

    return (
        
        <div className="form-group">
			<label htmlFor="asunto">Asunto</label>
            <select className="form-control" id="asunto" value={this.props.fid}>
					{tempView}
			</select>
        </div>
	);
    }
}

