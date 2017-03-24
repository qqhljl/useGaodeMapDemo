<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>高德地图快速入门</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/index.css" />
</head>
<body>
	<div id="container" tabindex="0"></div>
	<div id="search-div">
		<input id="search-text" class="search-text" type='text' value="请输入关键字" onfocus='this.value=""' />
		<input type="button" class='search-btn' value="搜索"
			onclick="javascript:search()"/>
	</div>
	<script type="text/javascript"
		src="http://webapi.amap.com/maps?v=1.3&key=你的key"></script>
	<script src="http://webapi.amap.com/js/marker.js"></script>
	<script type="text/javascript"
		src="http://webapi.amap.com/demos/js/liteToolbar.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/index.js"></script>
</body>
</html>