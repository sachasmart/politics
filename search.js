function userAction() {
	let searchString = document.getElementById("myInput").value;
	let txt = "";
	console.log(searchString);

	let webhook_url =
		"https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/2019_candidates-tsinp/service/candidate_name/incoming_webhook/getCandidates";

	let url = webhook_url + "?arg=" + searchString;

	fetch(url)
		.then(function (response) {
			if (!response.ok) {
				console.log(response);
				txt += `<br><br><br><b>Response Error. Status: ${response.status}`;
				if (response.json.length === 0)
					txt += `<br><br>Do not leave the search box empty.</b>`;
				document.getElementById("results").innerHTML = txt;
				throw Error(response.statusText);
			}
			return response.json();
		})
		.then(function (candidateJSON) {
			if (candidateJSON["$undefined"] === true) {
				console.log("NO FETCH RESULT");
				txt += `<br><br><br><b>No Fetch</b>`;
			} else {
				console.log("FETCHED RESULT... ");
				if (candidateJSON.length !== 0) {
					console.log("Fetched array has " + candidateJSON.length + " entries");
					txt = buildCandidateList(candidateJSON);
				} else {
					console.log("Fetched array has " + candidateJSON.length + " entries");
					txt += `<br><br><br><b>Sadly you have no search results. Try checking your spelling or contacting our <a href="mailto:fakeemail@email.com">office </a>to add this entry to our database</b>`;
				}
			} // end of ELSE

			document.getElementById("results").innerHTML = txt;
		})
		.catch(function (error) {
			console.log("Throw error", error);
		});
}

function buildCandidateList(candidates) {
	let i = 0;
	let j = 0;
	let k = 0;
	let highlight_length = 0;
	let txt = "";

	for (i; i < candidates.length; i++) {
		txt += `<b>Candidate Name: ${candidates[i].first_name} ${candidates[i].family_name}</b><br>`;
		txt += `<p style="font-size: large">Electoral District: ${candidates[i].electoral_district} <br>`;
		txt += `Electoral District French: ${candidates[i].electoral_district_fre} <br>`;
		txt += `Party: ${candidates[i].party} <br>`;
		txt += `Party FR: ${candidates[i].party_fre} <br>`;
		txt += `Phone: ${candidates[i].camp_phone} <br><br>`;
		txt += '<p style="text-decoration: underline black">Policy Positions</p>';
		txt += `<p style="font-size: large">Climate Change: ${candidates[i].climate_change} </p><br>`;
		txt += `Affordability: ${candidates[i].affordability} <br>`;
		txt += `Reconciliation: ${candidates[i].education} <br>`;
		txt += `Housing: ${candidates[i].housing} <br>`;
		txt += `Sacha's Search Score (beta):  ${candidates[i].score["$numberDouble"]} <br></p>`;
		txt += "<hr>";
	}

	return txt;
}
