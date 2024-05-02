import './styles.css';

import { UserCard } from '../UserCard';

export const Users = ({ usersList }) => {
    return (
        <div className="users">
          {usersList.map(user => <UserCard user={user} key={user.id}/>)}
        </div>
    )
} 