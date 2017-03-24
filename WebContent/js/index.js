//初始化地图
var map = new AMap.Map('container', {
	resizeEnable : true,
	zoom : 10,
});

// 地图的工具条
AMap.plugin([ 'AMap.ToolBar', 'AMap.Scale', 'AMap.OverView',
		'AMap.Geolocation', 'AMap.MapType' ], function() {
	map.addControl(new AMap.ToolBar());

	map.addControl(new AMap.Scale());

	map.addControl(new AMap.OverView({
		isOpen : true
	}));

	map.addControl(new AMap.Geolocation());

	map.addControl(new AMap.MapType());
});

/**
 * 自动补充搜索词，选中搜索词后查询
 */
var windowsArr = [];
var marker = [];
AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
    var autoOptions = {
      city: "北京", //城市，默认全国
      input: "search-text"//使用联想输入的input的id
    };
    autocomplete= new AMap.Autocomplete(autoOptions);
    var placeSearch = new AMap.PlaceSearch({
          city:'北京',
          map:map
    })
    AMap.event.addListener(autocomplete, "select", function(e){
       //TODO 针对选中的poi实现自己的功能
       placeSearch.search(e.poi.name)
    });
  });

/**
 * 关键字查询
 */
function search() {
	var text = document.getElementById("search-text");// 获取input的节点
	var address = text.value;// 获取input的值
	AMap.service(["AMap.PlaceSearch"], function() {
		var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
			pageSize: 5,
			pageIndex: 1,
			city: "010", //城市
			map: map//,
			//panel: "panel"
		});
		//关键字查询
		placeSearch.search(address, function(status, result) {
		});
	});
}
