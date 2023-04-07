// ==UserScript==
// @name         南昌大学校园网自动连接-改
// @namespace    https://www.kablog.top/
// @version      0.1
// @description  南昌大学校园网自动连接并关闭（适用NCU-2.4G、NCU-5G、NCUWLAN）只需要在下面输入你的信息即可
/*
* 推荐(只支持)使用新版MicrosoftEdge浏览器(Chromium 内核)
* 使用可以参考https://www.kablog.top/%E8%87%AA%E5%8A%A8%E8%BF%9E%E6%8E%A5%E6%A0%A1%E5%9B%AD%E7%BD%91/
* */
// @author       KagurazakaAsahi
// @match        http://222.204.3.154/*
// @match        http://222.204.3.221/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // *************   在单引号中输入你的信息   *************
    // 输入你的学号
    let username = '';
    // 输入你的密码
    let password = '';
    // 选择你的运营商(校园网、移动、联通、电信)
    let operator = '';
    // *************   在单引号中输入你的信息   *************


    if (window.location.pathname === "/srun_portal_success") {
        window.open("edge://newtab/","_self").close();
    }

    let Username = document.querySelector('#username');
    let Password = document.querySelector('#password');
    let Operator = document.querySelector('#domain');

    Username.value = username;
    Password.value = password;

    if (window.location.host === '222.204.3.221') {
        if (Username.value && Password.value) {
            // 如果信息输全，则触发登录按钮
            document.querySelector('.btn').click();
        } else {
            alert('你的信息没有填全');
            return false;
        }
    } else if (window.location.host === '222.204.3.154') {
        switch (operator) {
            case "移动":
                Operator.value = "@cmcc";
                break;
            case "校园网":
                Operator.value = "@ncu";
                break;
            case "联通":
                Operator.value = "@unicom";
                break;
            case "电信":
                Operator.value = "@ndcard";
                break;
            default:
                alert('看看运营商有没有写错');
                return false;
        }
        if (Username.value && Password.value && Operator.value) {
            // 如果信息输全，则触发登录按钮
            document.querySelector('.btn').click();
        } else {
            alert('你的信息没有填全');
            return false;
        }
    }

    if (window.location.pathname === "/srun_portal_success") {
        window.open("edge://newtab/","_self").close();
    }
})();