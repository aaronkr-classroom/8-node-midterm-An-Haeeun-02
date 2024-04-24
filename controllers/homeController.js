// homeController.js
"use strict";


exports.showHome = (req, res) => {
    res.render("index");
}
exports.showTrans = (req, res) => { // 특정 라우트를 위한 콜백 함수 추가
    res.render("transportation");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUp = (req, res) => {
    res.render("contact");
};
exports.postedThank = (req, res) => {
    res.render("thanks");
};
