import {
  user as UserApi
} from '../../config/request.js';

module.exports = {
  name: 'login',
  data() {
    return {
      dialogVisible: false,
      dialog: {
        show_set: false,
        show_pass: false,
        title: '注册新账户',
        user_info: this.$store.state.user.userinfo,
        set_info: {
          login_style: '',
          disabled_update_pass: [],
          select_users: []
        },

        user_info_rules: {
          email: [{
            required: true,
            message: '邮箱不能为空！',
            trigger: 'blur'
          }, {
            type: 'email',
            message: '邮箱格式不正确！',
            trigger: 'blur'
          }],
          username: [{
            required: true,
            message: '用户名不能为空！',
            trigger: 'blur'
          }, {
            min: 6,
            max: 20,
            message: '用户名长度至少为6位',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '新密码不能为空！',
            trigger: 'blur'
          }, {
            min: 6,
            max: 20,
            message: '请输入6-20位的密码',
            trigger: 'blur'
          }, {
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else {
                if ('' !== this.dialog.user_info.password) {
                  this.$refs.user_info.validateField('confirmPass');
                }
                callback();
              }
            }
          }],
          confirmPass: [{
            required: true,
            message: '确认密码不能为空！',
            trigger: 'blur'
          }, {
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else if (value !== this.dialog.user_info.password) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            }
          }],
        }
      },
      dialog2: {
        show_set: false,
        show_pass: false,
        title: '找回密码',
        user_info: {
            email:''
        },
        set_info: {
          login_style: '',
          disabled_update_pass: [],
          select_users: []
        },
        user_info_rules: {
          email: [{
            required: true,
            message: '邮箱不能为空！',
            trigger: 'blur'
          }, {
            type: 'email',
            message: '邮箱格式不正确！',
            trigger: 'blur'
          }]
        }
      },
      winSize: {
        width: '',
        height: ''
      },

      formOffset: {
        position: 'absolute',
        left: '',
        top: ''
      },

      remumber: this.$store.state.user.remumber,

      login_actions: {
        disabled: false
      },

      data: {
        username: '',
        password: '',
      },
      xslist:[
        {
          sellid:'10011',
          spid:'20113',
          spname:'小米6',
          je:'2399',
          sl:'1',
          khname:'范冰冰',
          cztime:'2018-03-17 16:27:12',
          czy:'贾玲'
        },
        {
          sellid:'10021',
          spid:'20133',
          spname:'小米MIX2',
          je:'8098',
          sl:'3',
          khname:'宋小宝',
          cztime:'2018-03-18 15:27:12',
          czy:'张小斐'
        },
        {
          sellid:'10013',
          spid:'20214',
          spname:'Apple iPhone 8',
          je:'6899',
          sl:'1',
          khname:'刘嘉玲',
          cztime:'2018-03-18 16:37:12',
          czy:'贾玲'
        }

      ],
      list:  [
        {
              spid:'10221',
              spname:'小米note3',
              nc:"64GB",
              czxt:'Android',
              ys:'黑色',
              sj:'2099',
              sl:'5',
              gysname:'小米(MI)'
        },
        {
              spid:'20313',
              spname:'iPhone 8 Plus',
              nc:"64GB",
              czxt:'IOS',
              ys:'深空灰色',
              sj:'6688',
              sl:'10',
              gysname:'苹果(Apple)'
        },
        {
              spid:'10234',
              spname:'小米MIX2',
              nc:"64GB",
              czxt:'Android',
              ys:'白色',
              sj:'2999',
              sl:'8',
              gysname:'小米(MI)'
        },
        {
              spid:'11204',
              spname:'OPPO R11',
              nc:"64GB",
              czxt:'Android',
              ys:'新年红',
              sj:'2899',
              sl:'3',
              gysname:'OPPO'
        },
        {
              spid:'10353',
              spname:'iPhone 8',
              nc:"256GB",
              czxt:'IOS',
              ys:'金色',
              sj:'7188',
              sl:'6',
              gysname:'苹果(Apple)'
        },
        {
              spid:'20314',
              spname:'iPhone 8 Plus',
              nc:"256GB",
              czxt:'IOS',
              ys:'玫瑰金色',
              sj:'7388',
              sl:'2',
              gysname:'苹果(Apple)'
        },
        {
              spid:'10235',
              spname:'小米MIX2',
              nc:"32GB",
              czxt:'Android',
              ys:'黑色',
              sj:'2699',
              sl:'5',
              gysname:'小米(MI)'
        },
        {
              spid:'11205',
              spname:'OPPO R11',
              nc:"64GB",
              czxt:'Android',
              ys:'天空蓝',
              sj:'2899',
              sl:'5',
              gysname:'OPPO'
        },
        {
              spid:'10354',
              spname:'iPhone 8',
              nc:"256GB",
              czxt:'IOS',
              ys:'中国红色',
              sj:'7088',
              sl:'8',
              gysname:'苹果(Apple)'
        },
        {
              spid:'10251',
              spname:'小米note3',
              nc:"256GB",
              czxt:'Android',
              ys:'蓝色',
              sj:'3099',
              sl:'15',
              gysname:'小米(MI)'
        },
        {
              spid:'20333',
              spname:'iPhone 8 Plus',
              nc:"128GB",
              czxt:'IOS',
              ys:'黑色',
              sj:'7088',
              sl:'5',
              gysname:'苹果(Apple)'
        },
        {
              spid:'10334',
              spname:'小米MIX',
              nc:"64GB",
              czxt:'Android',
              ys:'白色',
              sj:'1999',
              sl:'5',
              gysname:'小米(MI)'
        },

      ],

      rule_data: {
        username: [{
          required: true,
          message: '用户名不能为空！',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空！',
          trigger: 'blur'
        }],
      }
    }
  },
  methods: {
    /**
     * 注册账户
     * @param  {object} userinfo
     */
    register(userinfo) {
        // console.log(userinfo);
      this.$refs[userinfo].validate((valid) => {
        if (valid) {
            // console.log(this.dialog[userinfo].password);
            var info={
                username:this.dialog[userinfo].username,
                email:this.dialog[userinfo].email,
                password:this.dialog[userinfo].password,
                confirmPass:this.dialog[userinfo].confirmPass
                // username:"474760",
                // email:"474760@qq.com",
                // password:"123456",
                // confirmPass:"123456"
            };
            this.data.username=this.dialog[userinfo].username;
            this.data.password=this.dialog[userinfo].password;


            //无接口--start
                this.$message.success('注册成功！');
                this.dialog.show_pass = false;

                //登录成功之后，验证是否记住密码，如果记住密码，本地保存记住信息
                //如果没有记住，就初始化本地记住信息
            if (this.remumber.remumber_flag === true) {
                  this.$store.dispatch('update_remumber', {
                    remumber_flag: this.remumber.remumber_flag,
                    remumber_login_info: {
                      username: info.username,
                      password:info.password
                    }
                  });
                } else {
                  this.$store.dispatch('remove_remumber');
              };


                // console.log(data.userInfo);
                this.$store.dispatch('update_userinfo', {
                  userinfo: this.data
                }).then(() => {
                  this.$store.dispatch('update_list', {
                    list: this.list
                  }).then(() => {
                    this.$store.dispatch('update_xslist', {
                      xslist: this.xslist
                    }).then(() => {
                              this.$router.push('/demo/add/report');

                    });

                  });
                });
            //无接口--end


        // //有接口
        //
        // UserApi.register.call(this,info,data=>{
        //
        //     // console.log(data);
        //
        //     this.$message.success('注册成功！');
        //     this.dialog.show_pass = false;
        //
        //     //登录成功之后，验证是否记住密码，如果记住密码，本地保存记住信息
        //     //如果没有记住，就初始化本地记住信息
        // if (this.remumber.remumber_flag === true) {
        //       this.$store.dispatch('update_remumber', {
        //         remumber_flag: this.remumber.remumber_flag,
        //         remumber_login_info: {
        //           username: info.username,
        //           password:info.password
        //         }
        //       });
        //     } else {
        //       this.$store.dispatch('remove_remumber');
        //   };
        //     this.$store.dispatch('update_userinfo', {
        //       userinfo: data.userInfo
        //     }).then(() => {
        //
        //       this.$router.push('/demo/add/report');
        //     });
        //
        //   }, () => {
        //
        //   });

        }
      });
    },

    /**
     * 找回密码
     */
    retrieve(userinfo){
        this.$refs[userinfo].validate((valid) => {
          if (valid) {
            //  console.log(this.dialog2[userinfo].email);
            var info={
                email:this.dialog2[userinfo].email
            };
            // UserApi.retrieve.call(this,info,data=>{
            //     this.dialog2.show_pass = false;
            //     this.$message.success('我们已给您填写的电子邮箱发送了一封邮件，请在24小时内点击里面的链接来重置密码。');
            // });
                this.dialog2.show_pass = false;
               this.$message.success('我们已给您填写的电子邮箱发送了一封邮件，请在24小时内点击里面的链接来重置密码。');
          }
        });
    },

    setSize() {
      this.winSize.width = $(window).width() + "px";
      this.winSize.height = $(window).height() + "px";

      this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
      this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
    },

    login(ref) {
      this.$refs[ref].validate((valid) => {
        if (valid) {
         //  this.login_actions.disabled = true;
         //  如果记住密码，提交的信息包括真实token，密码则是假的
         //  服务端登录验证优先级：用户名必须，其次先取token，不存在时再取密码


//无接口-start


         if (this.remumber.remumber_flag === true) {
           this.$store.dispatch('update_remumber', {
             remumber_flag: this.remumber.remumber_flag,
             remumber_login_info: {
               username: this[ref].username,
               password:this[ref].password
             //   token: data.userinfo.token
             }
           });
         } else {
           this.$store.dispatch('remove_remumber');
         };
         // console.log(data.userInfo);
         this.$store.dispatch('update_userinfo', {
           userinfo: this.data
         }).then(() => {
           this.$store.dispatch('update_list', {
             list: this.list
           }).then(() => {
             this.$store.dispatch('update_xslist', {
               xslist: this.xslist
             }).then(() => {
             //   console.log("report");
               this.login_actions.disabled = false;
                       this.$router.push('/demo/add/report');
                       this.$message.success('登录成功！');
             });
           });
         });



//无接口-end
         // 有接口
          // UserApi.login.call(this, this[ref], data => {
          //   //登录成功之后，验证是否记住密码，如果记住密码，本地保存记住信息
          //   //如果没有记住，就初始化本地记住信息
          //   if (this.remumber.remumber_flag === true) {
          //     this.$store.dispatch('update_remumber', {
          //       remumber_flag: this.remumber.remumber_flag,
          //       remumber_login_info: {
          //         username: this[ref].username,
          //         password:this[ref].password
          //       //   token: data.userinfo.token
          //       }
          //     });
          //   } else {
          //     this.$store.dispatch('remove_remumber');
          // };
          //   // console.log(data.userInfo);
          //   this.$store.dispatch('update_userinfo', {
          //     userinfo: data.userInfo
          //   }).then(() => {
          //   //   console.log("report");
          //     this.login_actions.disabled = false;
          //             this.$router.push('/demo/add/report');
          //   });
          //   // console.log("haha");
          //   // this.$router.push('/demo/add/report');
          // }, () => {
          //    this.login_actions.disabled = false;
          // });



        }
      });
    },

    resetForm(ref) {
      this.$refs[ref].resetFields();
    },

    toregister(ref) {
      // console.log("toregister");
      this.$refs[ref].resetFields();
      this.dialog.show_pass = true;
      this.dialog.title = '注册新账户';
    },

    toretrieve(ref){
        this.dialog2.show_pass = true;
    }


  },
  created() {
    this.setSize();
    $(window).resize(() => {
      this.setSize();
    });
  },
  mounted() {
    // console.log(this.remumber);

    // 如果上次登录选择的是记住密码并登录成功，则会保存状态，用户名以及token
    if (this.remumber.remumber_flag === true) {
      this.data.username = this.remumber.remumber_login_info.username;
      this.data.password=this.remumber.remumber_login_info.password;
    //   this.data.password = this.remumber.remumber_login_info.token.substring(0, 16);
    //   this.$set(this.data, 'token', this.remumber.remumber_login_info.token);
    }
  }
}
