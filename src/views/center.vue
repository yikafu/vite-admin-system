<template>
  <el-row :gutter="8">
    <!-- 左侧 -->
    <el-col :span="6">
      <el-card>
        <div id="full-area">
          <img id="avatar" :src="form.avatar" alt="" />
          <div id="info">暂无个性签名</div>
        </div>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="18">
      <el-card>
        <el-tabs style="margin: 10px 0">
          <el-tab-pane label="账号信息"></el-tab-pane>
        </el-tabs>
        <el-form
          id="account_info"
          v-model="from"
          label-position="left"
          label-width="120"
        >
          <el-form-item label="用户名">
            {{ form.username }}
            <a class="a" @click="handleEdit('username')">编辑</a>
          </el-form-item>
          <el-form-item label="密码">
            {{ "********" }}
            <a class="a" @click="handleEdit('password')">编辑</a>
          </el-form-item>
          <el-form-item label="密保手机">
            {{ form.phone }}
            <a class="a" @click="handleEdit('phone')">编辑</a>
          </el-form-item>
          <el-form-item label="密保邮箱">
            {{ form.email }}
            <a class="a" @click="handleEdit('email')">编辑</a>
          </el-form-item>
          <el-form-item label="密保问题">
            {{ form.quaction ? "已设置" : "未设置" }}
            <a class="a" @click="handleEditQuaction()">编辑</a>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>

  <!-- 对话框 -->
  <el-dialog v-model="dialogData.isshow" :title="dialogData.title" width="500">
    <el-form label-width="120" label-position="left">
      <template v-if="dialogData.title === '修改用户名'">
        <el-form-item label="旧用户名">
          {{ form.username }}
        </el-form-item>
        <el-form-item label="新用户名" required>
          <el-input
            v-model="dialogData.value"
            placeholder="请输入新用户名"
          ></el-input>
        </el-form-item>
      </template>
      <template v-if="dialogData.title === '修改密码'">
        <el-form-item label="新密码" required>
          <el-input
            v-model="dialogData.value"
            type="password"
            show-password
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" required>
          <el-input
            v-model="dialogData.value2"
            type="password"
            show-password
            placeholder="请再次确认密码"
          ></el-input>
        </el-form-item>
      </template>
      <template v-if="dialogData.title === '修改密保手机'">
        <el-form-item label="新密保手机" required>
          <el-input
            v-model="dialogData.value"
            type="tel"
            placeholder="请输入新的手机号码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码" required>
          <el-input
            style="width: 60%"
            v-model="dialogData.value2"
            placeholder="请输入验证码"
          ></el-input>
          <el-button
            id="phoneState"
            plain
            @click="handleDisable1"
            :disabled="phoneState.isAble"
            >{{ phoneState.contain }}</el-button
          >
        </el-form-item>
      </template>
      <template v-if="dialogData.title === '修改密保邮箱'">
        <el-form-item label="新密保邮箱" required>
          <el-input
            v-model="dialogData.value"
            type="email"
            placeholder="请输入新的 Email 地址"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码" required>
          <el-input
            style="width: 60%"
            v-model="dialogData.value2"
            placeholder="请输入验证码"
          ></el-input>
          <el-button
            plain
            @click="handleDisable2"
            :disabled="emailState.isAble"
            >{{ emailState.contain }}</el-button
          >
        </el-form-item>
      </template>
    </el-form>
    <el-button type="primary" @click="handleConfirm()">确 定</el-button>
    <el-button @click="clearValue()">取 消</el-button>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import userData from "@/data/user.data.js";
import { ElMessage } from "element-plus";

const phoneState = ref({
  isAble: false,
  contain: "获取验证码",
});
const emailState = ref({
  isAble: false,
  contain: "获取验证码",
});
const form = ref({
  ...userData,
});

const dialogData = reactive({
  isshow: false,
  title: "",
  key: "",
  value: null,
  value2: null,
});

const clearValue = () => {
  dialogData.isshow = false;
  dialogData.title = "";
  dialogData.key = "";
  dialogData.value = null;
  dialogData.value2 = null;
};

const handleTitle = (key) => {
  switch (key) {
    case "username":
      return "修改用户名";
    case "password":
      return "修改密码";
    case "phone":
      return "修改密保手机";
    case "email":
      return "修改密保邮箱";
  }
};

const handleEdit = (key) => {
  dialogData.isshow = true;
  dialogData.title = handleTitle(key);
  dialogData.key = key;
};
//  编辑密保问题
const handleEditQuaction = () => {
  console.log("编辑密保问题");
  ElMessage.warning("暂不支持编辑密保问题");
};
// 表单校验规则
const confirmUsername = () => {
  if (!dialogData.value) {
    ElMessage.error("请输入新用户名");
  } else if (dialogData.value === form.username) {
    ElMessage.error("新用户名不能与旧用户名相同");
  } else if (dialogData.value.length < 6 || dialogData.value.length > 16) {
    ElMessage.error("用户名长度不能小于6位或大于16位");
  } else {
    return true;
  }
};
const ConfirmPassword = () => {
  const { value, value2 } = dialogData;
  if (!value) {
    ElMessage.error("请输入新密码");
  } else if (value === form.password) {
    ElMessage.error("新密码不能与旧密码相同");
  } else if (!value2) {
    ElMessage.error("请再次确认密码");
  } else if (value !== value2) {
    ElMessage.error("两次输入的密码不一致");
  } else if (value.length < 6) {
    ElMessage.error("密码长度不能小于6位");
  } else if (value.length > 16) {
    ElMessage.error("密码长度不能大于16位");
  } else {
    return true;
  }
};
const ConfirmPhone = () => {
  const { value, value2 } = dialogData;
  if (!value) {
    ElMessage.error("请输入新的手机号码");
  } else if (value === form.phone) {
    ElMessage.error("新手机号码不能与旧手机号码相同");
  } else if (!value2) {
    ElMessage.error("请输入验证码");
  } else {
    return true;
  }
};
const ConfirmEmail = () => {
  const { value, value2 } = dialogData;
  if (!value) {
    ElMessage.error("请输入新的 Email 地址");
  } else if (value === form.email) {
    ElMessage.error("新 Email 地址不能与旧 Email 地址相同");
  } else if (!value2) {
    ElMessage.error("请输入验证码");
  } else {
    return true;
  }
};
// 控制验证码按钮
const handleDisable1 = () => {
  phoneState.value.isAble = true;
  let time = 30;
  const timer = setInterval(() => {
    time--;
    phoneState.value.contain = `${time}s后重新获取`;
    if (time === 0) {
      clearInterval(timer);
      phoneState.value.contain = "获取验证码";
      phoneState.value.isAble = false;
    }
  }, 1000);
};
const handleDisable2 = () => {
  emailState.value.isAble = true;
  let time = 30;
  const timer = setInterval(() => {
    time--;
    emailState.value.contain = `${time}s后重新获取`;
    if (time === 0) {
      clearInterval(timer);
      emailState.value.contain = "获取验证码";
      emailState.value.isAble = false;
    }
  }, 1000);
};
// 确认修改
const handleConfirm = () => {
  const { key } = dialogData;
  switch (key) {
    case "username":
      if (confirmUsername()) {
        form.value.username = dialogData.value;
        clearValue();
      }
      break;
    case "password":
      if (ConfirmPassword()) {
        form.value.password = dialogData.value;
        clearValue();
      }
      break;
    case "phone":
      if (ConfirmPhone()) {
        form.value.phone = dialogData.value;
        clearValue();
      }
      break;
    case "email":
      if (ConfirmEmail()) {
        form.value.email = dialogData.value;
        clearValue();
      }
      break;
  }
};
</script>

<style scoped>
#full-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
#avatar {
  width: 110px;
  height: 110px;
  background-size: 100% 100%;
  border-radius: 10px;
  border: 1px solid #c1c2c5;
  margin: 15px auto;
}
.el-icon {
  margin-right: 10px;
}
#info {
  margin-top: 20px;
  padding: 0 20px;
}
li {
  width: 100%;
  overflow: hidden;
  padding-top: 0.75rem;
  font-size: 0.93rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#account_info {
  color: #919293;
}
#account_info > .el-form-item {
  display: block;
  border-bottom: 1px solid #d6d8db;
}
::v-deep(.el-form-item__label) {
  font-size: 1rem;
}
::v-deep(.el-form-item__content) {
  justify-content: space-between;
}
.a {
  float: right;
  margin-right: 20px;
  color: #409eff;
  cursor: pointer;
  text-decoration: none;
}
.el-card {
  height: 100%;
}
</style>
