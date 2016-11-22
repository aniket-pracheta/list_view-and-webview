
var data=[];
// data.push(
// {
	// label2:{text:"first"},
	// label:{text:"second"},
	// image:{image:"http://www.underconsideration.com/brandnew/archives/alfa_romeo_2015_logo_detail.jpg" },
		// template: "first" 
// },
// {
	// label2:{text:"first"},
	// label:{text:"third"},
	// image:{image:"http://hddesktopwallpapers.in/wp-content/uploads/2015/07/alfa-romeo-giulietta-wallpaper-logo.jpg" },
		// template: "first" 
// });
// $.sect.setItems(data);
// $.listview2.sections=[$.sect];
// Ti.API.info(JSON.stringify(data));
// //$.listview2.add($.sect);
// $.index.add($.listview2);
$.index.open();
//##################################################################################

function make_list(jsondata) {
	    Ti.API.info(jsondata);
	_.each(jsondata.data, function(car) {
		Ti.API.info(car.manufacturer);
		data.push(
{
	label2:{text:car.model},
	label:{text:car.manufacturer},
	image:{image:"https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/"+car.img },
		template: "first" 
});
	});
	$.sect.setItems(data);
$.listview2.sections=[$.sect];
$.index.add($.listview2);
	$.index.open();
}
Alloy.Globals.someGlobalFunction("https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", make_list);