wireframes.migrate = `
<div style="width:100%;height:100%;display:flex;flex-wrap:wrap;">
	<div id="transferContentHolder" style="max-width:335px;height:392px;margin:auto;background-color:var(--contentColor);filter:drop-shadow(0 0 5px var(--contentColor2));border-radius:15px;padding:8px;color:white;display:flex;flex-direction:column;color:var(--fontColor);transition:height .3s;align-items:center;">
 
		<div style="font-size: 40px; font-weight: bold;text-align:center;">Migrate</div>
	 
		<img src="../icons/moveaccount.png" style="width:90%;border-radius:5px;padding:12px 0 12px 0;">
		
		<div id="transferSignInDesc">Sign in with your Photop account to link it to your Exotek account.</div>

	<div id="infoAndTextHolder" style="margin-top:5px;margin-bottom:16px;z-index:0;">
		<div id="infoInputHolder" style="transition:all .2s;">
			<span class="settingsTitle" style="font-size:13px;">Username</span><input type="text" placeholder="Username" class="settingsInput" id="inputUsername" style="margin:1px 0 3px 0;">
			<span class="settingsTitle" style="font-size:13px;">Password</span><input type="password" placeholder="Password" class="settingsInput" id="inputPassword" style="margin-top:1px;">
		</div>
	</div>
	
		<div class="settingsSaveHolder" id="stepButtonHolder" style="z-index:1;"><button id="transferSignIn" class="signInButton settingsSave" title="Sign In to Photop account">Continue</button></div>
	</div>
</div>`;

//inputUsername | inputPassword
pages.migrate = function() {
	let step = 0;
	tempListen(findI("transferSignIn"), "click", async function() {
		const infoHolder = findI("infoAndTextHolder")
		const descText = findI("transferSignInDesc")
		const signinBtn = findI("transferSignIn")
		switch (step) {
			case 0:
				findI("infoInputHolder").style.display = "none";
				descText.style.display = "none";
				
				findI("transferContentHolder").style.height = "268px";
				
				infoHolder.style.marginBottom = '5px';
				
				descText.style.position = 'absolute';
				findI("infoInputHolder").style.position = 'absolute';

				let span = document.createElement("span")
				span.innerText = 'Now create or sign into your Exotek account that you wish to link.'
				infoHolder.appendChild(span);
				step = 1;
				break;
			case 1:
				(await getModule("webmodal"))("https://exotek.co/login?client_id=62f8fac716d8eb8d2f6562ef&redirect_uri=https%3A%2F%2F" + window.location.host + "&response_type=code&scope=userinfo&state=migrate#signup", "Migrate Photop Account");
				break;
		}
	})
}