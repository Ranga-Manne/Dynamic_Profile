fetch("data/data.json").then(response=>{return response.json()}).then(data=>{console.log(data);profileInfo(data.profiles)})
var profileInfo=info=>{
	info.map(i=>{
		console.log(i.profileInfo.name);
		console.log(i.profileInfo.mobile);
	})
	}
