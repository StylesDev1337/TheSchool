let privateStudents = [
    "JUU1JUJDJUEwJUU2JUEyJTkzJUU2JTk4JTgy",
    "JUU5JTk3JThDJUU3JTlCJUE0JUU5JTk5JUIz",
    "JUU1JTlBJUE3JUU0JUJEJUE2JUU2JTk5JTlF",
    "JUU1JTlBJUE3JUU2JTgxJUE5JUU4JUI3JThE",
    "JUU1JUJDJTlBJUU1JUE0JTkwJUU0JUI4JTlF",
    "JUU1JUE1JTk5JUU2JTk5JThBJUU1JTg1JTgz",
    "JUU2JTlDJThFJUU2JTk5JUFEJUU3JTlDJkE=",
    "JUU2JTlDJThFJUU0JUJFJThBJUU2JUIzJUEy",
    "JUU5JTgzJTlEJUU0JUJFJThBJUU1JUE2JTg3",
    "JUU2JTlDJThFJUU5JTkzJTlBJUU4JUIwJUI4",
    "JUU5JUFCJTk4JUU0JUI4JTgwJUU3JUE4JUJC",
    "JUU1JTg5JTlDJUU1JUFEJTkwJUU3JUE4JUJC",
    "JUU1JUE2JThBJUU2JUI1JTgx",
    "JUU1JTg5JTlDJUU5JTkxJTk5",
    "JUU1JUE1JTk5JUU5JTk3JThBJUU4JTgyJTk4",
    "JUU1JUJDJTlBJUU5JTk3JTlBJUU2JTk4JTk2",
    "JUU1JTg5JTlDJUU2JTlDJTlBJUU2JTk4JTk2",
    "JUU4JUI1JTg0JUU2JTk4JTlBJUU2JTk0JTk2",
    "JUU1JUE0JTgwJUU1JUE0JTk5JUU1JUE2JTgz",
    "JUU1JTg5JTlDJUU2JTgxJUE5JUU4JTgyJTk4",
    "JUU4JUI1JTg0JUU1JUFFJTg3JUU2JUI1JTgx",
    "JUU1JUE1JTk5JUU1JTg2JTk5JUU3JTg5JTg2",
    "JUU4JUI1JTg0JUU1JUFEJTkwJUU2JTlDJTgy",
    "JUU1JUJDJTlBJUU2JTk4JTlBJUU2JUI1JTgx",
    "JUU1JUJDJTlBJUU1JTg1JTk1JUU2JTk4JTlF",
    "JUU1JUE2JTg5JUU2JUI1JThBJUU1JUE0JUIw",
    "JUU2JTk5JTlBJUU2JTk5JUFEJUU2JTlCJUEy",
    "JUU2JTlDJThFJUU0JUJEJUEwJUU2JUExJTk5",
    "JUU1JTg5JTlDJUU3JTk1JTlBJUU1JUI4JTlG",
    "JUU1JUJDJTlBJUU3JTlFJUIwJUU1JUE0JUIx",
    "JUU1JUJDJTlBJUU1JTkyJTlBJUU1JUFFJTg3",
    "JUU1JTg1JTk5JUU2JTlFJUEwJUU1JUE0JTk4",
    "JUU1JTg5JTlDJUU0JUI4JTlBJUU2JTk4JUEw",
    "JUU1JUE0JTk4JUU2JTk5JTlBJUU1JTg2JTk5",
    "JUU3JThFJThEJUU2JTlDJTlBJUU1JUI4JTk1",
    "JUU5JTlFJTlDJUU2JUI1JTk5JUU3JTk0JThB",
    "JUU1JTk0JTk5JUU2JTlDJTlBJUU2JTk0JUI3",
    "JUU1JTkyJTg1JUU0JUI4JTgwJUU4JUI4JTgy",
    "JUU1JTg5JTlDJUU4JUI4JTgyJUU2JTk3JUI2",
    "JUU1JTg5JTlDJUU1JUI4JTg3JUU2JUI4JUI4",
    "JUU2JTlDJTlBJUU2JTlDJThBJUU2JTk5JTlF",
    "JUU2JTk2JUI0JUU4JUI4JTgyJUU2JTk5JTlF",
    "JUU3JTlGJTk5JUU2JTk2JTg3JUU2JTk5JTlF",
    "JUU1JUE2JThBJUU5JTg3JTkxJUU3JUFCJThE",
    "JUU2JTlDJThFJUU2JUI1JTgxJUU1JUI4JTk1",
    "JUU2JTlDJThFJUU2JTk1JUFGJUU3JUFCJThE",
    "JUU5JTlDJThBJUU4JUI0JTgyJUU1JTg1JTgz",
    "JUU1JTg5JTlDJUU0JUI4JTgwJUU1JTk0JTk5"
];

let encryptedStudents = {}; //自己猜去吧

function verifyIdentity() {
    return new Promise((resolve) => {
        let userName = prompt('👋 同学你好，请输入你的名字：');
        
        if (!userName) {
            alert('请输入名字哦~');
            resolve(false);
            return;
        }
        
        // 清理输入
        let cleanName = userName.trim();
        
        // ✅ 正确的编码步骤：
        // 1. 先用 encodeURIComponent 处理中文
        let uriEncoded = encodeURIComponent(cleanName);
        // 2. 再转成 Base64
        let encodedInput = btoa(uriEncoded);
        
        console.log("原始名字:", cleanName);
        console.log("URI编码:", uriEncoded);      // %E5%BC%A0%E6%A2%93%E6%98%82
        console.log("Base64编码:", encodedInput); // 5byg5qGD5piM
        console.log("是否匹配:", encodedInput === "5byg5qGD5piM");
        
        if (privateStudents.includes(encodedInput)) {
            sessionStorage.setItem('verified', 'true');
            sessionStorage.setItem('verifiedName', cleanName);
            
            Swal.fire({
                title: '✅ 验证成功！',
                text: `欢迎回来，${cleanName}！`,
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                resolve(true);
            });
        } else {
            Swal.fire({
                title: '❌ 验证失败',
                html: `
                    <p>输入: ${cleanName}</p>
                    <p>你的编码: ${encodedInput}</p>
                    <p>正确编码: 5byg5qGD5piM</p>
                    <p style="color: #ff6b6b;">⚠️ 注意：不要对编码结果再次编码！</p>
                `,
                icon: 'error',
                confirmButtonText: '确定'
            }).then(() => {
                resolve(false);
            });
        }
    });
}

// 跳转主界面的函数
async function isPrivate() {
    const verified = await verifyIdentity();
    if (verified) {
        // 验证通过，跳转到主界面
        window.location.href = "./index.html"; // 改成你的主界面文件名
    }
    // 验证失败不跳转
}

let testName = "李佳僮";
let encoded = btoa(encodeURIComponent(testName));
console.log("你的输入编码:", encoded);

// 查看数组中是否有这个编码
console.log("数组中的编码:", privateStudents);
console.log("是否包含:", privateStudents.includes(encoded));