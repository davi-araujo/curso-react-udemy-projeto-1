import './styles.css';

import { Component } from 'react';

import { loadUsers } from '../../utils/load-users';
import { Users } from '../../components/Users';
import { Button } from '../../components/Button';
import { SearchField } from '../../components/SearchField';

export class Home extends Component {
  state = {
    users: [],
    allUsers: [],
    usersPerPage: 6,
    usersOnPage: 6,
    searchValue: ''
  };

  componentDidMount() {
    const { usersOnPage} = this.state;

    loadUsers()
      .then(response => this.setState({ 
        users: response.slice(0, usersOnPage),
        allUsers: response,
       }))
      .catch(e => console.log(e));
  }

  loadMoreUsers = () => {
    const { usersOnPage, usersPerPage, allUsers } = this.state;

    let newUsersOnPage = usersOnPage + usersPerPage;
    const newUsers = allUsers.slice(0, newUsersOnPage);

    this.setState({ 
      usersOnPage: newUsersOnPage,
      users: newUsers
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { usersOnPage, allUsers } = this.state;
    const newUsers = !!value ? allUsers.filter(user => user.firstName.toLowerCase().includes(value)) : allUsers.slice(0, usersOnPage);

    this.setState({ searchValue: value, users: newUsers });
  }


  render () {
    const { users, usersOnPage, searchValue } = this.state
    const noMoreUsers = usersOnPage === 30 ? true : false

    return (
      <section className='container'>
        <div className='search-container'>
          <SearchField 
            value={searchValue}
            onChange={this.handleChange}
          />
        </div>
        <Users usersList={users}/>
        <div className='button-container'>
          {!searchValue && (
            <Button 
              text="Load more users"
              onClick={this.loadMoreUsers}
              disabled={noMoreUsers}
            />
          )}
        </div>
      </section>
    );
  }
}
