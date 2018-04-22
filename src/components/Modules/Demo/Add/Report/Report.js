import {
  report as ReportApi
} from '../../../../../config/request.js';

module.exports = {
    name: 'report',
    data() {
        return {
            report_list:this.$store.state.user.list,
            showHtml:false,
            active: 0,
            index:0,
            value:true,
            basic:{
                spid:'',
                spname:'',
                nc:"32GB",
                czxt:'Android',
                ys:'默认：黑色',
                sj:'',
                sl:'',
                gysname:''
            },
            options: [{
              value: '苹果(Apple)',
              label: '苹果(Apple)'
            }, {
              value: '锤子(smartisan)',
              label: '锤子(smartisan)'
            }, {
              value: '华为(HUAWEI)',
              label: '华为(HUAWEI)'
            }, {
              value: '金立(Gionee)',
              label: '金立(Gionee)'
            },{
              value: '酷派(Coolpad)',
              label: '酷派(Coolpad)'
            }, {
              value: '联想(Lenovo)',
              label: '联想(Lenovo)'
            }, {
              value: '魅族(MEIZU)',
              label: '魅族(MEIZU)'
            }, {
              value: 'OPPO',
              label: 'OPPO'
            }, {
              value: '三星(SAMSUNG)',
              label: '三星(SAMSUNG)'
            },  {
              value: '索尼(SONY)',
              label: '索尼(SONY)'
            },  {
              value: 'vivo',
              label: 'vivo'
            },  {
              value: '小米(MI)',
              label: '小米(MI)'
            },  {
              value: '一加',
              label: '一加'
            },  {
              value: '中兴(ZTE)',
              label: '中兴(ZTE)'
            }, {
              value: '其他',
              label: '其他'
            },
            ],
            basicRules:{
                spid:{required: true, message: '请输入商品编号', trigger: 'blur'},
                spname:{ required: true, message: '请输入商品名称', trigger: 'blur' },
                sj:{ required: true, message: '请输入商品售价', trigger: 'blur' },
                sl:{ required: true, message: '请输入进货数量', trigger: 'blur' },
                gysname:{ required: true, message: '请选择供应商', trigger: 'blur' },
            },



        }
    },
    methods: {

      onSubmit(ref){

          this.$refs[ref].validate((valid) => {
            if (valid) {
                  this.report_list.push(this.basic);


                  this.$store.dispatch('update_list', {
                    list: this.report_list
                  }).then(() => {
                    this.$notify({
                        title: '入库成功',
                        message: '商品成功添加入库存！',
                        type: 'success'
                    });
                    this.$router.push('/demo/export/list');

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
