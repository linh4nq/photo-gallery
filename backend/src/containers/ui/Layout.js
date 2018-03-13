import { connect } from "react-redux";

import Layout from "../../components/shared/Layout";

const mapStateToProps = state => ({ location: { ...state.router.location } });
export default connect(mapStateToProps)(Layout);
