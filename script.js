function ExpandToggle(topicID) {
	var expand = document.getElementById(topicID);
	if (!expand) return true;
	if (expand.style.display == "none") {
		expand.style.display = "block"
	} else {
		expand.style.display = "none"
	}
	return true;
}
