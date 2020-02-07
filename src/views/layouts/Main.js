import React from 'react';
import { Layout, Menu, Icon, Typography} from 'antd';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../../redux/actions'
import logo from '../../assets/logo.png';

import { 
  GolfCourseOutlined as GolfCourseIcon, 
  AppsOutlined as AppsIcon,
  StoreOutlined as StoreIcon,
  LocalShippingOutlined as LocalShippingIcon
} from '@material-ui/icons';




const { Content, Footer, Sider, Header } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;


class Main extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
    iconSize: 18
  };

  componentDidMount() {
    this.props.getAuth();
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { t, children, auth } = this.props;
    const user = this.props.auth.user;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <Sider 
         trigger={null}
        theme={this.state.theme} 
        collapsible 
        collapsed={this.state.collapsed} 
        onCollapse={this.onCollapse}
        >

          <Icon
            style={styles.trigger}
            type={this.state.collapsed ? 'double-right' : 'double-left'}
            onClick={this.toggle}
          />
          <div style={styles.image_container} >
            <img style={styles.image} src={auth.user.photo_url ? auth.user.photo_url : logo} alt="HotPutt-Logo" />            
          </div>
          <Title level={3} ellipsis={true} style={styles.title}>
            {user ? user.name : ''}<br/>
            <Text style={styles.subtitle} code >{user ? user.role : ''}</Text>
          </Title>

          <Menu theme={this.state.theme}  mode="inline" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="dashboard">
              <Link to='/'>
                <Icon type="home" />
                <span>{t('dashboard')}</span>
              </Link>
            </Menu.Item>

            {['admin','manager'].includes(user.role) ?
              <SubMenu
                key="store"
                title={
                  <span>
                    <StoreIcon className='anticon' style={{ fontSize: this.state.iconSize }} />
                    <span>{t('protected_menu')}</span>
                  </span>
                }
                >
                  <Menu.Item key="store:1" ><Link to='/stores/main'><span>{t('show_all')}</span></Link></Menu.Item>
              </SubMenu>
              :
              null
            }
            <SubMenu
              key="settings"
              title={
                <span>
                  <Icon type="user" />
                  <span>{t('my_account')}</span>
                </span>
              }
              >
                <Menu.Item key="setting:profile" > <Link to='/profile' >   <span>{t('my_profile')}</span> </Link> </Menu.Item>
                <Menu.Item key="setting:log" > <Link to='/log' >   <span>{t('log')}</span> </Link> </Menu.Item>
                <Menu.Item key="setting:help" > <span>{t('help')}</span></Menu.Item>
                <Menu.Item key="setting:exit" onClick={() => {this.props.signOut()}} > <span>{t('exit_to_app')}</span></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
            <div>
             {children}  {/* render here child component */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>{t('footer')}</Footer>
        </Layout>
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
      height: '100%',
      margin: '0 16px 16px 0',
      float: 'center',
      overflow: 'hidden',
      borderRadius: '50%'
  },
  title: {
    color: '#fff',
    textAlign:'center',
    width:'100%',
    fontSize: 16
  },
  subtitle: {
    color:'#ffa940',
    textAlign:'center',
    fontSize:14
  },
  trigger: {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color 0.3s',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  },

  
};

const mapStateToProps = (state) => {
  return {auth: state.auth}
};

const mapDispatchToPops = {
  signOut: actions.signOut,
  getAuth: actions.getAuth
}; 
export default withTranslation()(connect(mapStateToProps, mapDispatchToPops)(Main));