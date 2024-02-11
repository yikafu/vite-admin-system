<template>
  <el-row :gutter="8">
    <el-col :span="6">
      <!-- 左侧 -->
      <el-card>
        <div id="full-area">
          <div
            id="avatar"
            :style="{ backgroundImage: `url('${avatar}')` }"
          ></div>
          <div id="info">
            <li>
              <el-icon><UserFilled /></el-icon>
              admin
            </li>
            <li>
              <el-icon><Key /></el-icon>
              超级管理员
            </li>
            <li>
              <el-icon><ChatDotRound /></el-icon>
              12345678@gmail.com
            </li>
          </div>
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
    <template v-if="dialogData.title === '修改用户名'">
      <el-form label-width="120" label-position="left">
        <el-form-item label="旧用户名">
          {{ form.username }}
        </el-form-item>
        <el-form-item label="新用户名">
          <el-input
            v-model="dialogData.value"
            placeholder="请输入新用户名"
          ></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template v-if="dialogData.title === '修改密码'">
      <el-form label-width="120" label-position="left">
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
      </el-form>
    </template>
    <template v-if="dialogData.title === '修改密保手机'">
      <el-form label-width="120" label-position="left">
        <el-form-item label="新密保手机">
          <el-input
            v-model="dialogData.value"
            placeholder="请输入新的手机号码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码">
          <el-input
            style="width: 60%"
            v-model="dialogData.value2"
            placeholder="请输入验证码"
          ></el-input>
          <el-button plain @click="handleDisable($event)" :disabled="isAble"
            >获取验证码</el-button
          >
        </el-form-item>
      </el-form>
    </template>
    <template v-if="dialogData.title === '修改密保邮箱'">
      <el-form label-width="120" label-position="left">
        <el-form-item label="新密保邮箱">
          <el-input
            v-model="dialogData.value"
            placeholder="请输入新的 Email 地址"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码">
          <el-input
            style="width: 60%"
            v-model="dialogData.value2"
            placeholder="请输入验证码"
          ></el-input>
          <el-button plain @click="handleDisable($event)" :disabled="isAble"
            >获取验证码</el-button
          >
        </el-form-item>
      </el-form>
    </template>
    <el-button type="primary" @click="handleConfirm()">确 定</el-button>
    <el-button @click="dialogData.isshow = false">取 消</el-button>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { ElMessage } from "element-plus";

const avatar = ref("");
const isAble = ref(false);
const form = reactive({
  username: "admin",
  password: "123456",
  phone: "1234567890",
  email: "1234567890@gamil.com",
  quaction: false,
});

const dialogData = reactive({
  isshow: false,
  title: "",
  key: "",
  value: null,
  value2: null,
});

onMounted(() => {
  avatar.value = document.getElementById("avatar").children[0].src;
  clearValue();
});

const clearValue = () => {
  // 监听对话框的显示状态, 当对话框关闭时, 重置对话框数据
  watch(
    () => dialogData.isshow,
    (newVal) => {
      if (!newVal) {
        Object.assign(dialogData, {
          isshow: false,
          title: "",
          key: "",
          value: null,
          value2: null,
        });
      }
    }
  );
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

const handleEditQuaction = () => {
  console.log("编辑密保问题");
  ElMessage.warning("暂不支持编辑密保问题");
};

const ConfirmPassword = () => {
  // 进行表单校验
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

const handleDisable = (e) => {
  isAble.value = true;
  let time = 30;
  const timer = setInterval(() => {
    time--;
    e.target.innerText = `${time}s后重新获取`;
    if (time === 0) {
      clearInterval(timer);
      e.target.innerText = "获取验证码";
      isAble.value = false;
    }
  }, 1000);
};

const handleConfirm = () => {
  if (dialogData.title === "修改密码") {
    if (ConfirmPassword()) {
      form[dialogData.key] = dialogData.value;
      dialogData.isshow = false;
    }
  } else {
    form[dialogData.key] = dialogData.value;
    dialogData.isshow = false;
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
::v-deep .el-form-item__label {
  font-size: 1rem;
}
::v-deep .el-form-item__content {
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
