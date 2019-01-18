import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends Component {

	componentDidMount() {
		this.props.employeesFetch();
	}

	renderItem(employee) {
		return <ListItem employee={employee.item} />;
	}

	render() {
		if (!this.props.loaded) {
			return <Spinner size="large" />;
		}

		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem}
				keyExtractor={employee => employee.uid}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees.data, (val, uid) => {
		return { ...val, uid };
	});

	return { employees, loaded: state.employees.loaded };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
