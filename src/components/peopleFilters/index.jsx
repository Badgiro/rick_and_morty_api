import PeopleSearch from './peopleSearch';
import PeopleStatus from './peopleStatus';

const PeopleFilters = ({ handleSubmit, onStatusChange }) => {
  return (
    <form autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <PeopleSearch />
      <PeopleStatus onStatusChange={onStatusChange} />
    </form>
  );
};

export default PeopleFilters;