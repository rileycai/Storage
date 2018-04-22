<template>
<div class="body">
  <!-- <h1>test</h1> -->
  <div class="part">
      <el-row>
          <el-col :span="2">
              <el-tag type="primary" class="tag">进货管理</el-tag>
          </el-col>
          <el-col :span="12" :offset="2">
              <el-form :model="basic" :rules="basicRules" ref="basic" label-width="120px" style="margin-top:20px;">
                    <el-form-item label="商品编号" prop="spid" >
                        <el-input v-model="basic.spid" placeholder="商品编号五位数，例如：20018"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="spname">
                        <el-input v-model="basic.spname"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商" prop="gysname">
                      <el-select v-model="basic.gysname" filterable placeholder="请选择供应商">
                        <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="内存" prop="nc">
                      <el-radio-group v-model="basic.nc">
                          <el-radio label="16GB"></el-radio>
                          <el-radio label="32GB"></el-radio>
                          <el-radio label="64GB"></el-radio>
                          <el-radio label="128GB"></el-radio>
                          <el-radio label="256GB"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="操作系统" prop="czxt">
                        <el-radio-group v-model="basic.czxt">
                            <el-radio label="Android"></el-radio>
                            <el-radio label="IOS"></el-radio>
                            <el-radio label="WindowPhone"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="颜色" prop="ys">
                        <el-input v-model="basic.ys"></el-input>
                    </el-form-item>
                    <el-form-item label="商品售价" prop="sj" >
                        <el-input v-model="basic.sj" placeholder="精确到小数点后两位"><template slot="prepend">¥</template></el-input>
                    </el-form-item>
                    <el-form-item label="进货数量" prop="sl">
                         <el-input-number v-model="basic.sl" :min="1" :max="100" label="无"></el-input-number>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit('basic')">添加商品</el-button>
                      <el-button @click="onCancel()">取消</el-button>
                    </el-form-item>



              </el-form>
          </el-col>
      </el-row>
  </div>




</div>
</template>
<script>
import ReportJs from './Report.js';
module.exports = ReportJs;
</script>
<style scoped>
.tag{
    padding:0 8px;
    height:32px;
    line-height: 28px;
    font-size: 16px;
    border-radius: 4px;
    /*margin-top:-20px;*/
}
.part {
  padding:20px;
  border: 1px solid #eaeefb;
  border-radius: 10px;
  margin-bottom: 20px;
}

.list {
  margin: 20px;
}

.list>span {
  color: #aaaaaa;
  padding-top: 5px;
}
.step{
    margin-top: 30px;
}
#iframeStyle{
  width: 100%;
  height: 1460px;
  margin:50px;
}
</style>
