import React from 'react';
import { 
    Layout,  
    Form, 
    Icon, 
    Input, 
    Button, 
    Row, 
    Col,
    Typography
} from 'antd';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { actions } from '../redux/actions';
import logo from '../assets/logo.png';


import { RestApi, LOGIN } from '../controllers/RestApi';
import AppController from '../controllers/AppController';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

class SignIn extends React.Component {


    state = {
        loading: false
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.makeRequest(values);
            }
        });
    };

    makeRequest = (values) => {
        this.setState({loading: true});
        console.log(values);

        RestApi.post(LOGIN, {email: values.email, password: values.password})
        .then( async response => {
            
            // get user
            this.setState({loading: false});
            const user = response.data.data;
            // update on redux store
            this.props.setAuth(user);
        })
        .catch( err => {
            this.setState({loading: false});
            AppController.handleCatch(err);
            AppController.clearData();
        });
    }

    render() {

        const { t } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                
                <Content style={{ padding: '0 50px 50px', marginTop: 64 }}>
                
                <div style={{ padding: '0 12px 12px', marginTop: 64 , minHeight: 380 }}>

                <Row style={{backgroundColor:'#fff'}} type="flex" justify="space-around" align="middle">
                    <Col className="gutter-row" xs={24} sm={24} md={16} lg={16} xl={16}>
                        <img style={styles.image}  src={logo} alt="HotPutt-Logo" />
                    </Col>
                    <Col className="gutter-row"   style={{backgroundColor:'#fff', padding:16}} xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Form onSubmit={this.handleSubmit}>
                            <Title>Sign-In</Title>
                            
                            <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, max:255, type:'email', message: t('email_error') }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={t('email')}
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, max:255,  message: t('password_error') }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder={t('passsword')}
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            <Button type="primary" htmlType="submit" loading={this.state.loading}>
                                Sign-In
                            </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>    
                
                </div>
                </Content>
                        <Footer style={{ textAlign: 'center' }}>&copy; {t('footer')}</Footer>
                </Layout>
        );
    }
}

const styles = {
    image_container: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%'
    },
    image: {
        width:'100%',
        maxHeight: 512,
        height: '100%',
        margin: '16px 24px 16px 0',
        float: 'center',
        objectFit:'contain'
    }
};

const mapStateToProps = (state) => {
    return {auth: state.auth}
}

const mapDispatchToProps = {
    setAuth: actions.setAuth
};

export default Form.create({ name: 'sign_in_form' })(withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SignIn)));