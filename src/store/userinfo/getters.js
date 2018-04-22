module.exports = {
	getUserinfo(state) {
		return state.userinfo;
	},
	getList(state) {
		return state.list;
	},
	getxsList(state) {
		return state.xslist;
	},

	getToken(state) {
		return state.userinfo && state.userinfo.token ? state.userinfo.token : '';
	},

	getRemumber(state){
		return state.remumber;
	}
};
