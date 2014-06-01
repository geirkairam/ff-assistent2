function WeiterSection(currentId, WeiterId) {
	if (validateFields(currentId)) {
		if (WeiterId)
	}
}

function skipSection(currentId, WeiterId) {
	resetFields(currentId);
	styleNavi(WeiterId, false);
	$('#' + WeiterId).show();
	$('#' + currentId).hide();
}

function prevSection(currentId, prevId) {
	styleNavi(prevId);
	$('#' + prevId).show();
	$('#' + currentId).hide();
}

function styleNavi(id, fieldsFilled) {
	if (fieldsFilled) {
		$('#configNavi li.selected').addClass('validated');
	} else {
		$('#configNavi li.selected').removeClass('validated');
	}
	$('#configNavi li.selected').removeClass('selected');
	$('#navi_' + id).addClass('selected');
}

function validateFields(sectionId) {
	// TODO
	return true;
}

function resetFields(sectionId) {
	// TODO
}
