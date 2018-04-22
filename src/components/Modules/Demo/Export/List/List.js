
import {
    gbs
} from 'config/settings.js';
import {
    report as ReportApi
} from 'config/request.js';

module.exports = {
    name: 'list',
    data() {
        return {
            activeNames: ['5'],
            report_list:this.$store.state.user.list.slice(0,10),
            list:this.$store.state.user.list,
            //搜索表单信息
            search_data: {
                gysname:'',
                czxt:'',
                spname:'',
            },
            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 20,
                page_size: 10,
                page_sizes: [5, 10, 15, 20],
                layout: "total, sizes, prev, pager, next, jumper"
            }
        }
    },

    methods: {

        /**
         * 搜索事件
         */
        onSearch() {
            var sd = {};
            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }

            var where = {};

            for (var s in this.search_data) {
                if (this.search_data[s]) {
                    where[s] = this.search_data[s];
                } else {
                    if (sd[s]) {
                        delete sd[s];
                    }
                }
            }
            // console.log(where);
            // this.$notify({
            //     title: '查询成功',
            //     message: '成功查询！',
            //     type: 'success'
            // });

            // this.getList({
            //     where,
            //     fn: () => {
            //         this.setPath(Object.assign(sd, where));
            //     }
            // });
            var arr=[];
            if(this.search_data.gysname!=""){
              for(var i=0;i<this.list.length;i++){
                if(this.list[i].gysname==this.search_data.gysname){
                  arr.push(this.list[i]);
                }
              }
              this.report_list=arr;
              this.paginations.total=this.report_list.length;
            }else if(this.search_data.czxt!=""){
              for(var i=0;i<this.list.length;i++){
                if(this.list[i].czxt==this.search_data.czxt){
                  arr.push(this.list[i]);
                }
              }
              this.report_list=arr;
              this.paginations.total=this.report_list.length;
            }else if(this.search_data.spname!=""){
              for(var i=0;i<this.list.length;i++){
                if(this.list[i].spname==this.search_data.spname){
                  arr.push(this.list[i]);
                }
              }
              this.report_list=arr;
              this.paginations.total=this.report_list.length;
            };
        },


        /**
         * 改变页码和当前页时需要拼装的路径方法
         * @param {string} field 参数字段名
         * @param {string} value 参数字段值
         */
        setPath(field, value) {
            var path = this.$route.path,
                query = Object.assign({}, this.$route.query);

            if (typeof field === 'object') {
                query = field;
            } else {
                query[field] = value;
            }

            this.$router.push({
                path,
                query
            });
        },


        /**
         * 改变当前页事件
         * @param  {number} page 当前页码
         */
        onChangeCurrentPage(page) {
            // this.getList({
            //     page,
            //     fn: () => {
            //         this.setPath('page', page);
            //     }
            // });
            this.paginations.current_page=page;
            this.report_list=this.$store.state.user.list.slice((page-1)*this.paginations.page_size, page*this.paginations.page_size);

        },

        /**
         * 改变每页显示数量事件
         * @param  {number} size 当前每页显示数量
         */
        onChangePageSize(page_size) {
            // this.getList({
            //     page_size,
            //     fn: () => {
            //         this.setPath('page_size', page_size);
            //     }
            // });
            this.paginations.page_size=page_size;
            this.report_list=this.$store.state.user.list.slice(page_size*(this.paginations.current_page-1), page_size*this.paginations.current_page);

        },

        // 更新库存信息
        onUpdate(index,ref){
          this.list[(this.paginations.current_page-1)*this.paginations.page_size+index]=ref;

          this.$store.dispatch('update_list', {
            list: this.list
          }).then(() => {
            this.$notify({
                title: '更新成功',
                message: '库存信息更新成功！',
                type: 'success'
            });

          });

        },
        deleteRow(index, rows) {
          // console.log(index);
          // console.log(rows);
          rows.splice(index, 1);
          this.list.splice((this.paginations.current_page-1)*this.paginations.page_size+index,1);

          this.$store.dispatch('update_list', {
            list: this.list
          }).then(() => {
            this.$notify({
                title: '删除成功',
                message: '库存信息删除成功！',
                type: 'error'
            });
            this.paginations.total=this.$store.state.user.list.length;

          });
        },

        /**
         * 获取文章列表
         * @param  {number} options.page      当前页码，切换页码时用
         * @param  {number} options.page_size 每页显示数量，改变每页数量时用
         * @param  {function} options.fn               获取列表后的回调函数
         */
        getList({
            page,
            page_size,
            where,
            fn
        } = {}) {

            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;

            var data = {
                pageIndex: this.paginations.current_page,
                pageSize: this.paginations.page_size,
            };
            //  var temp = {filter:{filterBy:'',filterValue:''}};
            if (where) {
                data = Object.assign(data, where || {});
            } else {
                for (var s in query) {
                    if (this.search_data[s] !== undefined) {
                        this.search_data[s] = query[s];
                         data[s] = query[s];
                        //  temp.filter.filterBy=s;
                        //  temp.filter.filterValue=query[s];
                    }
                }
                //  data=Object.assign(data, temp || {});
            }
            ReportApi.listReport.call(this, data, (report_data) => {
                this.report_list = report_data.list;
                this.paginations.total = report_data.total;
                fn && fn();
            });
        },
    },

    mounted() {
        // this.getList({
        //     fn: () => {
        //
        //     }
        // });
        this.paginations.total=this.$store.state.user.list.length;

    },
    watch: {
        '$route' (to, from) {
            this.getList();
        }
    }
}
