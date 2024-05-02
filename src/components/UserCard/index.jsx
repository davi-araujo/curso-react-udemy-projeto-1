import './styles.css';

export const UserCard = ({ user }) => {
    return (
        <div className='user'>
            <div className='user-content'>
                <h1>{`${user.firstName} ${user.lastName}`}</h1>
                <p>{user.email}</p>
                <p>{user.gender}</p>
                <p>{user.phone}</p>
                <p>{user.company.name}</p>
                <img src={user.imageUrl} alt={user.name}/>
            </div>
        </div>
    );
}