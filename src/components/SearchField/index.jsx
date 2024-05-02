import './styles.css';

export const SearchField = ({ value, onChange }) => {
    return (
        <input 
            className='text-input'
            type='search'
            value={value}
            onChange={onChange}
            placeholder='Type your search...'
        />
    );
}