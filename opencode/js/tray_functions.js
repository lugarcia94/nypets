/**
 * Created by henriquebatista on 19/07/16.
 */

function addCart(dataProductId) {
	var dataSession = $("html").attr("data-session");
	$.ajax({
		method: "POST",
		url: "/web_api/cart/",
		contentType: "application/json; charset=utf-8",
		data: '{"Cart":{"session_id":"' + dataSession + '","product_id":"' + dataProductId + '","quantity":"1"}}'
	}).done(function (response, textStatus, jqXHR) {
		var qtdCart = parseInt($("span[data-cart=amount]").html());
		$("span[data-cart=amount]").html(qtdCart + 1);
	}).fail(function (jqXHR, status, errorThrown) {
		var response = $.parseJSON(jqXHR.responseText);
	});
}

function process(quant){
	var value = parseInt(document.getElementById("quant").value);
	value+=quant;
	if(value < 1){
		document.getElementById("quant").value = 1;
	}else{
		document.getElementById("quant").value = value;
	}
}
