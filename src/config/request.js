import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//导入封装的回调函数
import {
	cbs,
	gbs
} from './settings.js';


//动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.host;


/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，等需要
 */
var ajax = function(type, url, data, fn, tokenFlag, errFn) {

	this.$store.dispatch('show_loading');

	// if (tokenFlag !== true) {
	// 	data.token = this.$store.state.user.userinfo.token;
	// }
	tokenFlag=true;
	if (type === 'get') {
		var datas = {
			params: data
		};
	} else {
		var datas = data;
	}
	// console.log("-------datas:");
	// console.log(datas);

	Vue.axios[type](url, datas).then((res) => {
		// console.log("res-------");
		// console.log(res);

		if (res.status === 200 || res.status ===201) {

			fn(res.data.data);
		} else {
			//调用全局配置错误回调
			cbs.statusError.call(this, res.data);

			if (tokenFlag === true) {
				errFn && errFn.call(this);
			}
		}
		this.$store.dispatch('hide_loading');
	}).catch((err) => {
		 // console.log(err);
		//调用全局配置错误回调
		this.$store.dispatch('hide_loading');
		cbs.requestError.call(this, err);
	});
};

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
	//用户模块
	user: {
		/**
		 * 登录
		 * @param {object} data 参数
		 * @param {string} data.username 登陆用户名
		 * @param {string} data.password 登陆密码
		 * @param {function} fn 成功回调
		 */
		login(data, fn, errFn) {
			ajax.call(this, 'post', '/auth/signin', data, fn, true, errFn);
		},

		/**
		 * 注册
		 * @param {object} data 参数
		 * @param {string} data.username 用户名
		 * @param {string} data.email 邮箱
		 * @param {string} data.password 密码
		 * @param {string} data.confirmPass 确认密码
		 * @param {function} fn 成功回调
		 */
		register(data, fn, errFn) {
			ajax.call(this, 'post', '/auth/signup', data, fn, true, errFn);
		},

		/**
		 * 找回密码
		 * @param {object} data 参数
		 * @param {string} data.email 邮箱
		 * @param {function} fn 成功回调
		 */
		retrieve(data, fn, errFn) {
			ajax.call(this, 'post', '/auth/retrieve_pass', data, fn, true, errFn);
		},



		/**
		 * 修改密码
		 * @param  {object}   data 参数
		 * @param {string} data.old_password 旧密码
		 * @param {string} data.password 新密码
		 * @param {string} data.password_confirm 确认密码
		 * @param  {Function} fn   成功回调
		 */
		updPass(data, fn) {
			ajax.call(this, 'post', '/User/updatePass', data, fn);
		}


	},

	/**
	 * 报告管理
	 * @type {Object}
	 */
	report: {
		/**
		 * 添加报告
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		addReport(data, fn) {
			ajax.call(this, 'post', '/report/create', data, fn);
		},
		/**
		 * 添加报告
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */

		listReport(data,fn){
			ajax.call(this,'get','/reports',data,fn);
		},

		/**
		 * 修改权重
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		modify(data, fn) {
			ajax.call(this, 'post', '/reports/weight', data, fn);
		},

},
	/**
 * 态势感知接口
 * @type {Object}
 */
visualization: {

	/**
	 * 可视化
	 * @param  {object}   data 参数
	 * @param  {Function} fn   成功回调
	 */
	getChart(data, fn) {
		ajax.call(this, 'get', '/reports/vis', data, fn);
	},


},

};
