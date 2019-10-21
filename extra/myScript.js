	$(function(){
				var container = document.getElementById("container");
				var col_8_1 = document.getElementById("col_8_1");
				var col_8_2 = document.getElementById("col_8_2");
				var icon = document.getElementById("icon");
				var button = document.getElementById("myclick");
					
					function rejust(){
						if(window.innerWidth>=768){
							container.setAttribute("class","row my-3 mx-auto");
							col_8_1.setAttribute("class","ml-3 p-3 myBackGround");
							col_8_2.setAttribute("class","ml-3 mt-3 p-3 myBackGround");
						}else{
							container.setAttribute("class","row m-3");
							col_8_1.setAttribute("class","mt-3 p-3 myBackGround");
							col_8_2.setAttribute("class","mt-3 p-3 myBackGround");
						}
					}
					
					function changeIcon(){
						if(icon.className == "fa fa-angle-double-down px-1"){
							icon.setAttribute("class","fa fa-angle-double-up px-1");
						}else{
							icon.setAttribute("class","fa fa-angle-double-down px-1");
						}
					}
				
					button.onclick = changeIcon;
					window.onresize = rejust;
					window.onload = rejust;
				})
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip(); 
		});