import React from 'react';

import {Row, Button} from 'antd';
import { Translation } from 'react-i18next';

class CreateNewButton extends React.Component {

  _onClick = () => {
    setTimeout(this.props.handleClick, 300)
  }
  
  render(){
        return( 
        <Row style={{ position:'relative', padding: 0, textAlign:'right' }}>
            <Button style={{margin:16}} type='dashed' icon='plus'  onClick={this._onClick} >
            <Translation>
      {
        (t, { i18n }) => <label> {t('create_new')}</label>
      }
    </Translation>
            </Button>
        </Row>
        );
    };

}

export default CreateNewButton;