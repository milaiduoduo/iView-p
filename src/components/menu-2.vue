<template>
  <div>
    <Row>
      <Col span="8">
      <Menu :theme="theme2">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      </Col>

      <Col span="8">
      <h2>动态设置打开和选中的菜单。:active-name=activeName :open-names=openedNames。
        在mounted里用$nextTick来更新</h2>
      <Menu ref="menu2" :theme="theme2" :active-name=activeName :open-names=openedNames>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      </Col>
      <Col span="8">
      <!--设置为手风琴模式，菜单互斥的展开-->
      <h2>设置为手风琴模式，菜单互斥的展开.accordion</h2>
      <Menu :theme="theme2" :open-names="['1']" accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      </Col>
    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
    </RadioGroup>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        theme2: 'dark',
        activeName:'1-2',
        openedNames:['1']
      }
    },
    mounted(){
        this.activeName='2-1';
        this.openedNames=['2'];
        this.$nextTick(function () {
          this.$refs.menu2.updateOpened();
          this.$refs.menu2.updateActiveName();
        })
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
