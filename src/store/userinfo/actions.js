import * as types from './mutations_types';

module.exports = {
	update_userinfo: ({
		commit
	}, {
		userinfo
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_USERINFO, {
				userinfo
			});
			resolve()
		});
	},

	remove_userinfo: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_USERINFO);
			resolve()
		});
	},


	update_list: ({
		commit
	}, {
		list
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_LIST, {
				list
			});
			resolve()
		});
	},

	remove_list: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_LIST);
			resolve()
		});
	},

	update_xslist: ({
		commit
	}, {
		xslist
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_XSLIST, {
				xslist
			});
			resolve()
		});
	},

	remove_xslist: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_XSLIST);
			resolve()
		});
	},

	update_remumber: ({
		commit
	}, {
		remumber_flag,
		remumber_login_info
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_REMUMBER, {
				remumber_flag,
				remumber_login_info
			});
			resolve()
		});
	},

	remove_remumber: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_REMUMBER);
			resolve()
		});
	}
};
