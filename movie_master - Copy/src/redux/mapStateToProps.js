import { connect } from "react-redux";

const stateManagment = (component) => {
    export const mapStateToProps = state => {
        return {
            movies: state.movies,
            loading: state.loading,
            errorMessage: state.errorMessage,
            pageTitles: state.pageTitles

        };
    };

    const mapDispatchToProps = {
        getNowPlay
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(component)

