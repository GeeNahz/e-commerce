import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const Button = (props) => {

  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;
  return ( 
    <button
      {...rest}
      onClick = {(e) => {
        onClick && onClick(e)
        history.push(to)
      }}
    />
   );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
 
export default withRouter(Button);