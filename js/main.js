$(function() {

	$("button").click(function(event) {

		$('div').empty();

		var kduration = $(".kduration").val();
		
		$("div").description({
			'kheight': $(".kheight").val(),
			'kwidth': $(".kwidth").val(),
			'kmarginTop': $(".kmarginTop").val(),
			'kduration': parseInt(kduration),
			'kin': $(".kin").val(),
			'kout': $(".kout").val(),
			'kopacity': $(".kopacity").val(),
			'kcontent': $(".kcontent").val()
		});
	});
});