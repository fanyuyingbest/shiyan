// 主页面
var localHref = window.location.protocol + "//" + window.location.host+"/shiyan/";
function jumpToSy(){
    //跳转到十堰政府
    window.location.href=localHref + "shiyanZf/" +"index.html";
}
function jumpSyComp(){
    //跳转至十堰企业
    window.location.href=localHref + "shiyanQy/" +"index.html";
}
/************************  十堰政府列表 ***************/
function goToHome(){
    //跳转至首页面
    window.location.href=localHref  +"index.html";
}
//跳转至十堰市政府
function goToSyZw(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfInfo.html";
}
//跳转至十堰旅游
function goToSyLy(){
    window.location.href= localHref  + "shiyanZf/html/" +"lyInfo.html";
}
//跳转至十堰交警
function goToSyJj(){
    window.location.href= localHref  + "shiyanZf/html/" +"jjInfo.html";
}
//跳转至十堰市公安
function goToSyGa(){
    window.location.href= localHref  + "shiyanZf/html/" +"gaInfo.html";
}
//跳转至十堰消防
function goToSyXf(){
    window.location.href= localHref  + "shiyanZf/html/" +"xfInfo.html";
}
//跳转至十堰应急办
function goToSyYjb(){
    window.location.href= localHref  + "shiyanZf/html/" +"yjbInfo.html";
}
//跳转至社保页面
function goToSySb(){
    window.location.href= localHref  + "shiyanZf/html/" +"sbInfo.html";
}
//跳转至电力局
function goToSyDlj(){
    window.location.href= localHref  + "shiyanZf/html/" +"dljInfo.html";
}
/*********************  十堰政府详情页面 **************/
//弹出电话页面
function alertPhoneNum(){
    $(".zf_phone_player").show();
}
//隐藏电话弹出
function hidePlayer(){
    $(".zf_phone_player").hide();
}
//底部弹窗的方法
function showUpSq(){
    if($("#zf_footer_sq").css("display") == "none"){
        $("#zf_footer_sq").show();
        $("#zf_footer_net").hide()
        $("#zf_footer_zmhd").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showUpNet(){
    if($("#zf_footer_net").css("display") == "none"){
        $("#zf_footer_sq").hide();
        $("#zf_footer_net").show()
        $("#zf_footer_zmhd").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showUpZmhd(){
    if($("#zf_footer_zmhd").css("display") == "none"){
        $("#zf_footer_sq").hide();
        $("#zf_footer_net").hide()
        $("#zf_footer_zmhd").show()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//投票
function startVote(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfVote.html";
}
//在线预约
function onlineReser(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfLineReser.html";
}
//进度查询
function proInquire(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfInquire.html";
}
//跳转到政府页面
function goTozfInfo(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfInfo.html";
}
//我的预约
function myServer(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfMyServer.html";
}
//在线取号
function onlineAcc(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfOnlineAcc.html";
}
//办事指南
function handleGuid(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfHandleGuid.html";
}
//办事查询
function handleSerch(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfHandleSerch.html";
}
//政务公告
function govenAnnoe(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfGovenAnnoe.html";
}
//联系我们
function contectUs(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfContectUs.html";
}
//大美十堰
function beatyShiyan(){
    window.location.href= localHref  + "shiyanZf/html/" +"zfBeatyShiyan.html";
}
/******************************** 十堰旅游 ********************/
//景点介绍
function attractions(){
    window.location.href= localHref  + "shiyanZf/html/" +"lyAttractions.html";
}
//名优特产
function famSpac(){
    window.location.href= localHref  + "shiyanZf/html/" +"lyFamSpac.html";
}
//跳转到旅游页面
function goTolyInfo(){
    window.location.href= localHref  + "shiyanZf/html/" +"lyInfo.html";
}
//大美十堰
function showButyShiyan(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"lyBeatyShiyan.html";  
}
//弹出畅游十堰
function alyerPlayShiyan(){
    if($("#ly_foot_play").css("display") == "none"){
        $("#ly_foot_play").show();
        $("#ly_foot_connet").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//弹出互动交流
function alyerConten(){
    if($("#ly_foot_connet").css("display") == "none"){
        $("#ly_foot_connet").show();
        $("#ly_foot_play").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//本土美食
function localFood(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"lyLocalFood.html";  
}
//投诉热线
function compHotLine(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"lyCompHotLine.html"; 
}
//咨询热线
function suppHotLine(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"lySuppHotLine.html"; 
}
/*************************** 十堰交警 *****************************/
//违章查询
function voiQue(){
    window.location.href= localHref  + "shiyanZf/html/" +"jjVoiQue.html"; 
}
//违章缴费
function voiOfLess(){
    window.location.href= localHref  + "shiyanZf/html/" +"jjVoiOfLess.html"; 
}
//弹出第一个菜单
function showFoot1(){
    if($("#jj_foot_1").css("display") == "none"){
        $("#jj_foot_1").show();
        $("#jj_foot_2").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showFoot2(){
    if($("#jj_foot_2").css("display") == "none"){
        $("#jj_foot_2").show();
        $("#jj_foot_1").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function buyCarUse(){
    //购买车险
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjBuyCarUse.html"; 
}
//机动车业务
function moterBus(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjMoterBus.html"; 
}
//驾驶证业务
function driverBus(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjDriverBus.html"; 
}
//办理进度查询
function progressCheck(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjProgressCheck.html"; 
}
//随手拍举报
function takeReport(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjTakeReport.html"; 
}
//拖车查询
function tranInq(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjTranInq.html"; 
}
//信息举报查询
function reportInfoRe(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjReportInfoRe.html"; 
}
//突发路况
function sundenRoad(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"jjSundenRoad.html"; 
}
/********************************** 十堰公安 *************/
//警民互动
function policeManCont(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaPoliceManCont.html";
}

//显示
function showGaFoot1(){
    if($("#ga_foot_1").css("display") == "none"){
        $("#ga_foot_1").show();
        $("#ga_foot_2").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showGaFoot2(){
    if($("#ga_foot_2").css("display") == "none"){
        $("#ga_foot_2").show();
        $("#ga_foot_1").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function askTravel(){
    //问道旅游
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaAskTravel.html";
}
function houseManage(){
    //户籍管理
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaHouseManage.html";
}
//出入境业务
function entryBuss(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaEntryBuss.html";
}
//其他业务
function otherBuss(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaOtherBuss.html";
}
//分局调查
function banchInq(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaBanchInq.html";
}
//支队查询
function detaInq(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"gaDetaInq.html";
}
/***********************************十堰消防 *********************/
function hiddenReport(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfHiddenReport.html";
}
function showXfFoot1(){
    if($("#xf_foot_1").css("display") == "none"){
        $("#xf_foot_1").show();
        $("#xf_foot_2").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showXfFoot2(){
    if($("#xf_foot_2").css("display") == "none"){
        $("#xf_foot_2").show();
        $("#xf_foot_1").hide()
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//优秀教师
function excelTeacher(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfExcelTeacher.html";
}
//预约参观
function makeVisitor(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfMakeVisitor.html";
}
//产品辨别
function productDiff(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfProductDiff.html";
}
//安全宝典
function safetyBool(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfSafetyBool.html";
}
//官方微博
function offcialWb(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfOffcialWb.html";
}
//消防商城
function xfShop(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"xfShop.html";
}
/**************************** 应急办 **********************/
function wheatherInq(){
    //天气查询
    window.location.href= localHref  + "shiyanZf/html/" +"yjbWheatherInq.html";
}
function showYjbFoot1(){
    if($("#yjb_foot_1").css("display") == "none"){
        $("#yjb_foot_1").show();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function commonSense(){
    //小常识
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"yjbCommonSense.html";
}
function enmergGuide(){
    //应急指南
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"yjbEnmergGuide.html";
}
function acessDisa(){
    //事故灾害
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"yjbAcessDisa.html";
}
function scinceDisa(){
     //自然灾害
     $(".zf_footer_sq_player").hide();
     window.location.href= localHref  + "shiyanZf/html/" +"yjbScinceDisa.html";
}
//应急预警
function enmergeyWaring(){
    $(".zf_footer_sq_player").hide();
     window.location.href= localHref  + "shiyanZf/html/" +"yjbEnmergeyWaring.html";
}
//物品储备
function itemReserve(){
    $(".zf_footer_sq_player").hide();
     window.location.href= localHref  + "shiyanZf/html/" +"yjbItemReserve.html";
}
/**********************************  十堰社保 *************************/
function getInvoved(){
     window.location.href= localHref  + "shiyanZf/html/" +"sbGetInvoved.html";
}
function showSbFoot1(){
    if($("#sb_foot_1").css("display") == "none"){
        $("#sb_foot_1").show();
        $("#sb_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showSbFoot2(){
    if($("#sb_foot_2").css("display") == "none"){
        $("#sb_foot_2").show();
        $("#sb_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//个人业务办理
function personBuss(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbPersonBuss.html";
}
//个人业务查询
function personBussSerch(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbPersonBussSerch.html";
}
function bussSerch(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbBussSerch.html";
}
function commonQuestion(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbCommonQuestion.html";
}
function personQui(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbPersonQui.html";
}
function bussConst(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbBussConst.html";
}
function bussInsuer(){
    //商业保险
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"sbBussInsuer.html";
}
/************************** 电力局 ***********************/
function quickPay(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dljQuickPay.html";
}
function showDljFoot1(){
    if($("#dlj_foot_1").css("display") == "none"){
        $("#dlj_foot_1").show();
        $("#dlj_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showDljFoot2(){
    if($("#dlj_foot_2").css("display") == "none"){
        $("#dlj_foot_2").show();
        $("#dlj_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function checkElBill(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dljCheckElBill.html";
}
function bussProReq(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dljBussProReq.html";
}
function eleBillPrice(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dljEleBillPrice.html";
}
function dlContextUs(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dlContextUs.html";
}
function aplayCard(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanZf/html/" +"dljAplayCard.html";
}
/***************************************************十堰企业 ***********************************/
//十堰企业列表
//跳转至银行
function goToQyYh(){
    window.location.href= localHref  + "shiyanQy/html/" +"yhInfo.html";
}
//跳转至当当
function goToQyDd(){
    window.location.href= localHref  + "shiyanQy/html/" +"ddInfo.html";
}
//跳转至武当景区
function goToQyWd(){
    window.location.href= localHref  + "shiyanQy/html/" +"wdInfo.html";
}
//跳转至邮政
function goToQyYz(){
    window.location.href= localHref  + "shiyanQy/html/" +"yzInfo.html";
}
//跳转至人民商场
function goToQySc(){
    window.location.href= localHref  + "shiyanQy/html/" +"scInfo.html";
}
//跳转至酒店
function goToQyJd(){
    window.location.href= localHref  + "shiyanQy/html/" +"jdInfo.html";
}
/**************************银行 *************************************/
function showYhFoot1(){
    if($("#yh_foot_1").css("display") == "none"){
        $("#yh_foot_1").show();
        $("#yh_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showYhFoot2(){
    if($("#yh_foot_2").css("display") == "none"){
        $("#yh_foot_2").show();
        $("#yh_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function immiRepay(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhImmiRepayInfo.html";
}
function installReplay(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhInstallReplay.html";
}
function checkElBill(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhCheckElBill.html";
}
function bussProReq(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhBussProReq.html";
}

function appUpload(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhAppUpload.html";
}
function serverHotLine(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhServerHotLine.html";
}
function localNet(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhLocalNet.html";
}
function farmerShop(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yhFarmerShop.html";
}
/************************************* 当当旅游网 *********************/
function hotelResever(){
    window.location.href= localHref  + "shiyanQy/html/" +"ddHotelResever.html";
}
function planReaerve(){
    window.location.href= localHref  + "shiyanQy/html/" +"ddPlanReaerve.html";
}
function showDdFoot1(){
    if($("#dd_foot_1").css("display") == "none"){
        $("#dd_foot_1").show();
        $("#dd_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showDdFoot2(){
    if($("#dd_foot_2").css("display") == "none"){
        $("#dd_foot_2").show();
        $("#dd_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function ticketClass(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddTicketClass.html";
}
function lineClass(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddLineClass.html";
}
function allOrder(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddAllOrder.html";
}
function waitPay(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddWaitPay.html";
}
function readyPay(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddReadyPay.html";
}
function ddServerHotLine(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddServerHotLine.html";
}
function newFarmShop(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"ddNewFarmShop.html";
}
/***************************** 武当景区 ************************/
function wdAllOrder(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdAllOrder.html";
}
function showWdFoot1(){
    if($("#wd_foot_1").css("display") == "none"){
        $("#wd_foot_1").show();
        $("#wd_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showWdFoot2(){
    if($("#wd_foot_2").css("display") == "none"){
        $("#wd_foot_2").show();
        $("#wd_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function wdTicketOrder(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdTicketOrder.html";
}
function panelToar(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdPanelToar.html";
}
function voicePlan(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdVoicePlan.html";
}
function playRaider(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdPlayRaider.html";
}
function wdCoupon(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdCoupon.html";
}
function accontCenter(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdAccontCenter.html";
}
function morePlace(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"wdMorePlace.html";
}
/*********************************邮政 ****************************/
function yzMaoNavig(){
    window.location.href= localHref  + "shiyanQy/html/" +"yzMaoNavig.html";
}
function showYzFoot1(){
    if($("#yz_foot_1").css("display") == "none"){
        $("#yz_foot_1").show();
        $("#yz_foot_2").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showYzFoot2(){
    if($("#yz_foot_2").css("display") == "none"){
        $("#yz_foot_2").show();
        $("#yz_foot_1").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function yzScheduleMail(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzScheduleMail.html";
}
function yzFrageAge(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzFrageAge.html";
}
function yzLocalNet(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzLocalNet.html";
}
function yzOnlineServer(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzOnlineServer.html";
}
function yzChecking(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzChecking.html";
}
function yzMemberCenter(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzMemberCenter.html";
}
function yzMyMaile(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzMyMaile.html";
}
function yzMyAddrBook(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzMyAddrBook.html";
}
function yzMyShopping(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"yzMyShopping.html";
}
/************************************人民商场 *******************************/
function scPromotion(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scPromotion.html";
}
function scScanCode(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scScanCode.html";
}
function showScFoot1(){
    if($("#sc_foot_1").css("display") == "none"){
        $("#sc_foot_1").show();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function scMyConlection(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scMyConlection.html";
}
function scMyDiscontCard(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scMyDiscontCard.html";
}
function scServerCenter(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scServerCenter.html";
}
function scApplyCard(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"scApplyCard.html";
}
/**************************************酒店 ************************/
function jdMapNav(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdMapNav.html";
}
function jdPreTexi(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdPreTexi.html";
}
function showJdFoot1(){
    if($("#jd_foot_1").css("display") == "none"){
        $("#jd_foot_1").show();
        $("#jd_foot_2").hide();
        $("#jd_foot_3").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showJdFoot2(){
    if($("#jd_foot_2").css("display") == "none"){
        $("#jd_foot_1").hide();
        $("#jd_foot_2").show();
        $("#jd_foot_3").hide();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
function showJdFoot3(){
    if($("#jd_foot_3").css("display") == "none"){
        $("#jd_foot_1").hide();
        $("#jd_foot_2").hide();
        $("#jd_foot_3").show();
    }else{
        $(".zf_footer_sq_player").hide();
    }
}
//快速预约
function jdQuickApin(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdQuickApin.html";
}
//优惠精选
function jdOffer(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdOffer.html";
}
function jdMyOrder(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdMyOrder.html";
}
function jdMyCard(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdMyCard.html";
}
function jdLife(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdLife.html";
}
function jdHotLine(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdHotLine.html";
}
function jdWdTravel(){
    $(".zf_footer_sq_player").hide();
    window.location.href= localHref  + "shiyanQy/html/" +"jdWdTravel.html";
}