const urlQuery = (url = window.location.search) => {
	const objURL = {}
	url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function($0, $1, $2, $3) {
		objURL[$1] = $3
	})
	return objURL
}

export default urlQuery