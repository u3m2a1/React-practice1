import PropTypes from "prop-types";

export function withPropTypesCheck(Component) {
  function Wrapped(props){
    if(Component.propTypes && import.meta.env.MODE === 'development')
    {
      PropTypes.checkPropTypes(Component.propTypes, props, 'prop', Component.name);
    }
    return <Component {...props} />;
  }
  Wrapped.propTypes = Component.propTypes;
  return Wrapped;
}