<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <!-- <el-button type='danger' icon='delete' :disabled='batch_flag' @click='onDelete(true)'>删除选中</el-button> -->

            <el-form :inline="true" :model='search_data' class="demo-form-inline">

                <el-form-item>
                    <el-input placeholder="商品名称" v-model='search_data.spname'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="供应商" v-model='search_data.gysname'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="操作系统" v-model='search_data.czxt'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='onSearch' plain>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table border stripe style="width: 100%;" align='center' :data="report_list">
          <el-table-column fixed prop="spid" label="商品编号" align="center"></el-table-column>
          <el-table-column fixed prop="spname" label="商品名称" align="center" width="200"></el-table-column>
          <el-table-column prop="gysname" label="供应商" align="center"></el-table-column>
          <el-table-column prop="czxt" label="操作系统" align="center"></el-table-column>
          <el-table-column prop="nc" label="内存" align="center"></el-table-column>
          <el-table-column prop="ys" label="颜色" align="center"></el-table-column>
          <el-table-column prop="sj" label="商品售价" align="center"></el-table-column>
          <el-table-column prop="sl" label="数量" align="center" width="80"></el-table-column>


          <el-table-column fixed="right" label="更新" width="100" align="center" :context="_self">
                <template scope="scope">
                  <el-popover ref="popover" placement="left" width="650" trigger="click">
                    <el-form :model="scope.row" ref="scope.row" label-width="120px" style="margin:20px;">
                          <el-form-item label="商品编号" prop="spid">
                              <el-input v-model="scope.row.spid" :disabled="true"></el-input>
                          </el-form-item>
                          <el-form-item label="商品名称" prop="spname">
                              <el-input v-model="scope.row.spname" :disabled="true"></el-input>
                          </el-form-item>
                          <el-form-item label="供应商" prop="gysname">
                            <el-input v-model="scope.row.gysname"></el-input>
                          </el-form-item>
                          <el-form-item label="内存" prop="nc">
                            <el-radio-group v-model="scope.row.nc">
                                <el-radio label="16GB"></el-radio>
                                <el-radio label="32GB"></el-radio>
                                <el-radio label="64GB"></el-radio>
                                <el-radio label="128GB"></el-radio>
                                <el-radio label="256GB"></el-radio>
                            </el-radio-group>
                          </el-form-item>
                          <el-form-item label="操作系统" prop="czxt">
                              <el-radio-group v-model="scope.row.czxt">
                                  <el-radio label="Android"></el-radio>
                                  <el-radio label="IOS"></el-radio>
                                  <el-radio label="WindowPhone"></el-radio>
                              </el-radio-group>
                          </el-form-item>

                          <el-form-item label="颜色" prop="ys">
                              <el-input v-model="scope.row.ys"></el-input>
                          </el-form-item>
                          <el-form-item label="商品售价" prop="sj">
                              <el-input v-model="scope.row.sj"><template slot="prepend">¥</template></el-input>
                          </el-form-item>
                          <el-form-item label="库存数量" prop="sl">
                               <el-input-number v-model="scope.row.sl" :min="1" :max="100" label="无"></el-input-number>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="onUpdate(scope.$index,scope.row)">更新库存信息</el-button>
                          </el-form-item>

                    </el-form>

                   </el-popover>
                  <el-button type="primary" size="mini" v-popover:popover plain>更新</el-button>
                </template>
          </el-table-column>


            <el-table-column fixed="right" label="删除" width="100" align="center" :context="_self">
                  <template scope="scope">
                    <el-button type="danger" size="mini" @click.native.prevent="deleteRow(scope.$index, report_list)" plain>删除</el-button>
                  </template>
            </el-table-column>
        </el-table>

        <el-col :span="24" class='btm-action'>
            <el-pagination
                background
                v-if='paginations.total>0'
                class='pagination'
                :page-sizes="paginations.page_sizes"
                :page-size="paginations.page_size"
                :layout="paginations.layout"
                :total="paginations.total"
                :current-page='paginations.current_page'
                @current-change='onChangeCurrentPage'
                @size-change='onChangePageSize'>
            </el-pagination>
        </el-col>



    </div>
</template>

<script>
    import ListJs from './List.js';
    module.exports=ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
        margin: 10px 10px 20px 10px;
    }
    .pagination{
        display: inline-block;
    }
    .list{
        margin: 10px;
    }
    .h1title{
      text-align: center;
      font-size: 24px;
      margin: 10px 0;
      font-weight: 500;
    }
    .content1{
      margin-left: 20px;
      margin-right: 50px;
    }
    .content2{
      margin-left: 40px;
      margin-right: 50px;
    }
    .content3{
      margin-left: 60px;
      margin-right: 50px;
    }
    .tagcolor{
      color:#4db3ff;
      float: right;
      margin-right: 50px;
    }
</style>
