import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
export default Section;
