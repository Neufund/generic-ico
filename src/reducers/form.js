import { connect } from 'react-redux';
import { reducer, reduxForm } from 'redux-form';

const defaultFormName = config => Component =>
  reduxForm({ form: Component.displayName || Component.name, ...config })(Component);

const optionalConnect = (mapState, mapActions) => Component =>
  mapState || mapActions ? connect(mapState, mapActions)(Component) : Component;

export const connectForm = (config, mapState, mapActions) => Component =>
  optionalConnect(mapState, mapActions)(defaultFormName(config)(Component));

export default reducer;
