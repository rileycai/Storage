import {
  report as ReportApi
} from '../../../../../config/request.js';

module.exports = {
    name: 'Interface',
    data() {
      return {
          showHtml:false,
          active: 0,
          index:0,
          value:true,
          xslist:this.$store.state.user.xslist,
          basic:{
              sellid:'',
              spid:'',
              spname:'',
              je:'',
              sl:'',
              khname:'',
              cztime:'',
              czy:''
          },
          options: [{
            value: '刘德华',
            label: '刘德华'
          },{
            value: '范冰冰',
            label: '范冰冰'
          },{
            value: '鹿晗',
            label: '鹿晗'
          },{
            value: '梁朝伟',
            label: '梁朝伟'
          },{
            value: '刘嘉玲',
            label: '刘嘉玲'
          }],
          options2: [{
            value: '宋小宝',
            label: '宋小宝'
          },{
            value: '王宝强',
            label: '王宝强'
          },{
            value: '大潘',
            label: '大潘'
          },{
            value: '郭麒麟',
            label: '郭麒麟'
          },{
            value: '张小斐',
            label: '张小斐'
          }],

          basicRules:{
              sellid:{required: true, message: '请输入销售票号', trigger: 'blur'},
              spid:{required: true, message: '请输入商品编号', trigger: 'blur'},
              spname:{ required: true, message: '请输入商品名称', trigger: 'blur' },
              je:{ required: true, message: '请输入销售金额', trigger: 'blur' },
              sl:{ required: true, message: '请输入销售数量', trigger: 'blur' },
              khname:{ required: true, message: '请选择客户', trigger: 'blur' },
              czy:{ required: true, message: '请选择操作员', trigger: 'blur' },
              cztime:{ required: true, message: '请选择操作时间', trigger: 'blur' },
          },
      }
    },
    methods: {
      onSubmit(ref){

          this.$refs[ref].validate((valid) => {
            if (valid) {
                  // this.basic.cztime=this.basic.cztime.substr(0, 18);
                  this.xslist.push(this.basic);
                  // console.log(this.xslist);
                  this.$store.dispatch('update_xslist', {
                    xslist: this.xslist
                  }).then(() => {
                    this.$notify({
                        title: '销售成功',
                        message: '商品成功售出！',
                        type: 'success'
                    });

                  });
                 //有接口
                // ReportApi.addReport.call(this, this.basic, data => {
                //
                //     this.$notify({
                //         title: '提交成功',
                //         message: '报告添加成功！',
                //         type: 'success'
                //     });
                //
                //     this.$router.push('/demo/export/list');
                // });
            }
        });
        // this.$refs[ref].resetFields();
      },
      onCancel(){
        var basicInfo={
            spid:'',
            spname:'',
            nc:"32GB",
            czxt:'Android',
            ys:'默认：黑色',
            sj:'',
            sl:'',
            gysname:''
        };
        this.basic=basicInfo;
      }

    }
}
