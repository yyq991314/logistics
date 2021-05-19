<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>修改头像</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="crop-demo">
                <img :src="cropImg" class="pre-img">
                <div class="crop-demo-btn">选择图片
                    <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
                </div>
            </div>

            <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
                <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                             style="width:100%;height:300px;"></vue-cropper>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="upImage">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import Qs from 'qs';

    export default {
        name: 'upload',
        data: function () {
            return {
                defaultSrc: '',
                imgSrc: '',
                cropImg: '',
                dialogVisible: false,
            }
        },
        components: {
            VueCropper
        },
        methods: {
            setImage(e) {
                const file = e.target.files[0];
                if (!file.type.includes('image/')) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.dialogVisible = true;
                    this.imgSrc = event.target.result;
                    this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            },
            cropImage() {
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            cancelCrop() {
                this.dialogVisible = false;
                this.cropImg = this.defaultSrc;
            },
            imageuploaded(res) {
                console.log(res)
            },
            handleError() {
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            },
            upImage() {
                this.dialogVisible = false;
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/user/update_avatar.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: localStorage.getItem('ms_username'), avatar: v1.cropImg}
                }).then(function (res) {
                    if (res.data.status === 1) {
                        v1.$message.success(res.data.msg);
                    } else {
                        v1.$message.error(res.data.msg);
                    }
                })
            },
            userInfo() {
                let v1 = this;
                this.$axios({
                    method: "post",
                    url: "/user/info.html",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        return Qs.stringify(data)
                    }],
                    data: {username: localStorage.getItem('ms_username')}
                }).then(function (res) {
                    if (res.data.status === 1) {
                        console.log(res);
                        v1.cropImg = res.data.info.avatar;
                        v1.defaultSrc = res.data.info.avatar;
                        console.log(v1.cropImg);
                        console.log(v1.defaultSrc);
                    } else {
                        if (res.data.msg == 'Signature has expired') {
                            v1.$message.error("登录过期");
                            v1.$router.push('/login');
                        } else {
                            v1.$message.error(res.data.msg);
                        }
                    }
                })
            }
        },
        created() {
            this.userInfo();
            this.cropImg = this.defaultSrc;
        }
    }
</script>

<style scoped>
    .content-title {
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }

    .pre-img {
        width: 100px;
        height: 100px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
    }

    .crop-demo {
        display: flex;
        align-items: flex-end;
    }

    .crop-demo-btn {
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        margin-left: 30px;
        background-color: #409eff;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .crop-input {
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }
</style>