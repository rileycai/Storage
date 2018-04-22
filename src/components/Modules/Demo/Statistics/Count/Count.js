import echarts from 'echarts';
import {
  visualization as VisualizationAPI
} from 'config/request.js';
module.exports = {
  name: 'location',
  data() {
      return {
          flag:0,
          // title:"手机类型统计",
          chartColumn: null,
          chartColumn2: null,
          mobiles:{
             _id:['苹果(Apple)','锤子(smartisan)','华为(HUAWEI)','金立(Gionee)','酷派(Coolpad)','联想(Lenovo)','魅族(MEIZU)','OPPO','三星(SAMSUNG)','索尼(SONY)','vivo','小米(MI)','一加','中兴(ZTE)','其他'],
             score:[19, 30, 64, 87, 17, 76, 82, 10, 88, 60, 23,67,1,35,20]
          },
          firms:{
             _id:['Apple iPhone 8','Apple iPhone X','小米MIX2','小米Note3','小米6','OPPO R11','Apple iPhone 8 Plus','一加 5T','华为 Mate 10','华为 Mate 10 Pro',
           'Apple iPhone 7','Apple iPhone 6','小米MIX1','小米Note2','小米5s','OPPO R9','Apple iPhone 7 Plus','一加 4T','华为 Mate 9','华为 Mate 9 Pro'],
              score:[26, 59, 20, 64, 17, 37, 76, 82, 13, 68,26, 69, 10, 84, 7, 47, 17, 28, 41, 38],
          },
          chartOption:{
              color: ['#409EFF'],
              title: {
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      crossStyle: {
                          color: '#999'
                      }
                  }
              },
              toolbox: {
                  // orient:'vertical',
                  itemSize:20,
                  itemGap:15,
                  right:'100px',
                  // top:'200px',
                  feature: {
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['bar', 'line']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
              legend: {
                  // data:['攻击告警','违规告警','异常告警']
              },
              xAxis: {
                  data:['苹果(Apple)','锤子(smartisan)','华为(HUAWEI)','金立(Gionee)','酷派(Coolpad)','联想(Lenovo)','魅族(MEIZU)','OPPO','三星(SAMSUNG)','索尼(SONY)','vivo','小米(MI)','一加','中兴(ZTE)','其他'],
                        axisLabel: {
                          interval: 0,
                          // rotate: 30,

                        },
                        splitLine: {
                          show: false
                        },

                      },
              yAxis: {},
              series: [{
                  name: '产品数量',
                  type: 'line',
                  data:[19, 30, 64, 87, 17, 76, 82, 10, 88, 60, 23,67,1,35,20],
                  markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                   ]
                  },
                  markLine : {
                    data : [
                    {type : 'average', name: '平均值'}
                ]
            }
              },

              ]
          },
          chartOption2:{
              color: ['#67C23A'],
              title: {
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      crossStyle: {
                          color: '#999'
                      }
                  }
              },
              toolbox: {
                  // orient:'vertical',
                  itemSize:20,
                  itemGap:15,
                  right:'100px',
                  // top:'200px',
                  feature: {
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['bar', 'line']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
              legend: {
                  // data:['攻击告警','违规告警','异常告警']
              },
              grid: {
                left: '10%',
                bottom:'20%'
              },
              xAxis: {
                  data:['Apple iPhone 8','Apple iPhone X','小米MIX2','小米Note3','小米6','OPPO R11','Apple iPhone 8 Plus','一加 5T','华为 Mate 10','华为 Mate 10 Pro',
                'Apple iPhone 7','Apple iPhone 6','小米MIX1','小米Note2','小米5s','OPPO R9','Apple iPhone 7 Plus','一加 4T','华为 Mate 9','华为 Mate 9 Pro'],
                  axisLabel: {
                          interval: 0,
                          rotate: 30,
                          // formatter:function(value)
                          //      {
                          //           var val=value.split("有");
                          //           return val[0];
                          //      }

                        },
                        splitLine: {
                          show: false
                        }
              },
              yAxis: {},
              series: [{
                  name: '商品库存',
                  type: 'bar',
                  data:[26, 59, 20, 64, 17, 37, 76, 82, 13, 68,26, 69, 10, 84, 7, 47, 17, 28, 41, 38],
                  markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                   ]
                  },
                  markLine : {
                    data : [
                    {type : 'average', name: '平均值'}
                ]
            }
              },

              ]
          },
          condition:"",
      }
  },
  methods: {
      /**
       * 获取图形数据
       */
      getCharts({
          data,
          fn
      } = {}) {

          // console.log(data);
          VisualizationAPI.getChart.call(this, data, (chart_data) => {
              // 调用接口 chart_data是返回数据

              this.mobiles._id=chart_data.mobiles._id;
              this.mobiles.score=chart_data.mobiles.score;
              this.firms._id=chart_data.firms._id;
              this.firms.score=chart_data.firms.score;
              this.chartOption.xAxis.data=this.mobiles._id;
              this.chartOption.series[0].data=this.mobiles.score;
              this.chartOption2.xAxis.data=this.firms._id;
              this.chartOption2.series[0].data=this.firms.score;

              fn && fn();
          });
      },




  },
  mounted: function() {

      var _this = this;
      //基于准备好的dom，初始化echarts实例
      this.chartColumn = echarts.init(document.getElementById('chartColumn'));
      this.chartColumn.setOption(this.chartOption);
      this.chartColumn2 = echarts.init(document.getElementById('chartColumn2'));
      this.chartColumn2.setOption(this.chartOption2);


     // 有接口后的方法
      // this.getCharts({
      //     fn:()=>{
      //         var _this = this;
      //         //基于准备好的dom，初始化echarts实例
      //         this.chartColumn = echarts.init(document.getElementById('chartColumn'));
      //         this.chartColumn.setOption(this.chartOption);
      //         this.chartColumn2 = echarts.init(document.getElementById('chartColumn2'));
      //         this.chartColumn2.setOption(this.chartOption2);
      //     }
      // });

  },
  watch: {
      '$route' (to, from) {
        //   this.getCharts({
        //     //   fn:()=>{
        //     //       var _this = this;
        //     //       //基于准备好的dom，初始化echarts实例
        //     //       this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        //     //       this.chartColumn.setOption(this.chartOption);
        //     //   }
        //   });
      }
  }
}
