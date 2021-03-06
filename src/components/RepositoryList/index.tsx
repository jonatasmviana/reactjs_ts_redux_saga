import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from "../RepositoryItem";

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export class RepositoryList extends Component<Props> {

  componentDidMount() {
    const { loadRequest } = this.props;
    
    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repo => 
          <RepositoryItem key={repo.id} repository={repo} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);