<template>
  <div class="body">
    <div class="part">
        <el-row>
            <el-col :span="2">
                <el-tag type="primary" class="tag">添加销售单</el-tag>
            </el-col>
            <el-col :span="12" :offset="2">
                <el-form :model="basic" :rules="basicRules" ref="basic" label-width="120px" style="margin-top:20px;">
                  <el-form-item label="销售票号" prop="sellid">
                      <el-input v-model="basic.sellid" placeholder="票号五位数，例如：10001"></el-input>
                  </el-form-item>
                      <el-form-item label="商品编号" prop="spid">
                          <el-input v-model="basic.spid" placeholder="商品编号五位数，例如：20018"></el-input>
                      </el-form-item>
                      <el-form-item label="商品名称" prop="spname">
                          <el-input v-model="basic.spname"></el-input>
                      </el-form-item>

                      <el-form-item label="销售数量" prop="sl">
                           <el-input-number v-model="basic.sl" :min="1" :max="100" label="无"></el-input-number>
                      </el-form-item>
                      <el-form-item label="销售金额" prop="je">
                          <el-input v-model="basic.je" placeholder="精确到小数点后两位"><template slot="prepend">¥</template></el-input>
                      </el-form-item>
                      <el-form-item label="客户名称" prop="khname">
                        <el-select v-model="basic.khname" filterable placeholder="请选择客户名称">
                          <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="操作员" prop="czy">
                        <el-select v-model="basic.czy" filterable placeholder="请选择操作员">
                          <el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="操作时间" prop="cztime">
                          <el-date-picker v-model="basic.cztime" type="datetime" placeholder="选择日期时间">
                          </el-date-picker>
                      </el-form-item>

                      <el-form-item>
                        <el-button type="primary" @click="onSubmit('basic')">售出商品</el-button>
                        <el-button @click="onCancel()">取消</el-button>
                      </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
    <div class="part">
      <el-row>
          <el-col :span="2" style="margin-bottom:20px;">
              <el-tag type="primary" class="tag">添加销售单</el-tag>
          </el-col>
          <el-col>
            <el-table border stripe style="width: 100%;" align='center' :data="xslist">
              <el-table-column fixed prop="sellid" label="销售票号" align="center"></el-table-column>
              <el-table-column fixed prop="spid" label="商品编号" align="center"></el-table-column>
              <el-table-column fixed prop="spname" label="商品名称" align="center" width="200"></el-table-column>
              <el-table-column prop="khname" label="客户名称" align="center"></el-table-column>
              <el-table-column prop="cztime" label="操作时间" align="center"></el-table-column>
              <el-table-column prop="czy" label="操作员" align="center"></el-table-column>
              <el-table-column prop="je" label="总售价" align="center"></el-table-column>
              <el-table-column prop="sl" label="数量" align="center" width="80"></el-table-column>
            </el-table>
          </el-col>
      </el-row>

    </div>

  </div>
</template>
<script>
    import InterfaceJs from './Interface.js';
    module.exports=InterfaceJs;
</script>
<style scoped>
.list{
    margin: 10px;
}
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
  height: 1650px;
  margin:50px;
}

</style>
