<template>

    <div class="chart part">

        <el-row>
          <el-col :span="24">
              <h1 class="title">供应商产品数量统计</h1>
          </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div id="chartColumn" style="width:100%; height:600px;"></div>
            </el-col>
        </el-row>

        <el-row style="margin-top:50px;">
          <el-col :span="24">
              <h1 class="title">商品库存统计</h1>
          </el-col>
        </el-row>
        <el-row style="margin-bottom:50px;">
            <el-col :span="24">
                <div id="chartColumn2" style="width:100%; height:700px;"></div>
            </el-col>
        </el-row>
    </div>
    <!-- <div class="chart part">
        <el-row>
          <el-col :span="24">
              <h1 class="title">受检单位统计</h1>
          </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div id="chartColumn2" style="width:100%; height:600px;"></div>
            </el-col>
        </el-row>
    </div> -->
</template>
<script>
    import CountJs from './Count.js';
    module.exports=CountJs;
</script>
<style scoped>
.part {
  padding:20px;
  border: 1px solid #eaeefb;
  border-radius: 10px;
  margin-bottom: 20px;
}
.title{
  text-align: center;
  font-weight: 600;
  font-size: 1.8em;
}

</style>
