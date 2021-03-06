import React from 'react';

import {Row, Button, Icon} from 'antd';

class CloseButton extends React.Component {

    _onClick = () => {
        if(this.props.history)
            setTimeout(() => this.props.history.goBack(), 300)
    }

    render() {
        return( 
        <Row style={{ position:'relative', padding: 0, textAlign:'right' }}>
            <Button style={{margin:16}} shape="circle"  onClick={this._onClick}>
            <Icon type="close"  />
            </Button>
        </Row>
        );
    };

}

export default CloseButton;