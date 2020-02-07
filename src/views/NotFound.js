import React from 'react';
import { Row, Col } from 'antd';

import '../styles/index.css';

class NotFound extends React.Component {

    render(){
        return(
        <div>
            <Row type="flex" justify="center">
            <Col span={24}>
                <img 
                        alt='jskdj jh'
                        className='center'
                        src={require('../assets/page_not_found.svg')}
                    />
            </Col>
            <Col span={24} style={{textAlign:'center'}}>
                <h1>Resource Not Found</h1>
            </Col>
            </Row>
        </div>);
    }
}

export default NotFound;
