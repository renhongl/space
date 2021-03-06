import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import { message } from 'antd'
import { Route } from "react-router-dom"
import { Constant } from '../config/constant'



export default class UserSetting extends React.Component{
    constructor(props) {
        super(props);
    }

    onChange = (e, dropdown, history) => {
        let value = dropdown.value;
        switch(value) {
        case 'logout': 
            this.logout(history);
            break;
        default:
            break;
        }
    }

    logout(history) {
        window.sessionStorage.removeItem('userObj');
        message.success('注销成功。');
        setTimeout(() => {
          history.push('/login');
        }, 1000);
      }

    render() {
        let userObj = window.sessionStorage.getItem('userObj');
        userObj = JSON.parse(userObj);
        const trigger = (
            <span>
              <Image avatar src={userObj.userIcon || Constant.DEFAULT_USER_LOGO} /> {userObj.userName}
            </span>
          )
        const options = [
            { key: 'user', text: '账号', icon: 'user', value: 'user' },
            { key: 'settings', text: '设置', icon: 'settings', value: 'setting' },
            { key: 'sign-out', text: '注销', icon: 'sign out', value: 'logout' },
          ]
          const RouteDropdown = () => (
            <Route render={({ history}) => (
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} onChange={(e, dropdown) => this.onChange(e, dropdown, history)}/>
            )} />
          )
        return (
            <RouteDropdown/>
        )
    }
}




